"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
  enterDebounceMs?: number; // optional small delay before entering (default 0 = instant)
  exitDebounceMs?: number;  // delay before exiting to avoid flicker at the boundary
  exitThresholdRatio?: number; // require being really out before exiting
  outMarginPx?: number; // how far fully out of viewport to consider instant exit
};

export function useInView<T extends HTMLElement>(options?: UseInViewOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const inViewRef = useRef(inView);
  const enterTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setInView(true);
      return;
    }
    if (!ref.current) return;

    const {
      once = false,
      enterDebounceMs = 0,
      exitDebounceMs = 220,
      exitThresholdRatio = 0.01,
      outMarginPx = 8,
      root = null,
      rootMargin = "0px 0px -30% 0px",
      threshold = 0.15,
    } = options || {};

    const el = ref.current;

    const clearEnterTimer = () => {
      if (enterTimerRef.current) {
        window.clearTimeout(enterTimerRef.current);
        enterTimerRef.current = null;
      }
    };
    const clearExitTimer = () => {
      if (exitTimerRef.current) {
        window.clearTimeout(exitTimerRef.current);
        exitTimerRef.current = null;
      }
    };

    const commit = (visible: boolean) => {
      if (visible !== inViewRef.current) {
        setInView(visible);
        inViewRef.current = visible;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const visible = entry.isIntersecting;
        const ratio = entry.intersectionRatio ?? 0;

        if (once) {
          if (visible && !inViewRef.current) {
            clearExitTimer();
            clearEnterTimer();
            commit(true);
            observer.unobserve(entry.target);
          }
          return;
        }

        if (visible) {
          // Enter: commit immediately (or with small optional delay)
          clearExitTimer();
          if (!inViewRef.current) {
            if (enterDebounceMs > 0) {
              clearEnterTimer();
              enterTimerRef.current = window.setTimeout(() => commit(true), enterDebounceMs);
            } else {
              commit(true);
            }
          }
          return;
        }

        // Not visible: decide if we exit immediately or debounce
        const rect = entry.boundingClientRect;
        const rootTop = entry.rootBounds?.top ?? 0;
        const rootBottom =
          entry.rootBounds?.bottom ??
          (typeof window !== "undefined" ? window.innerHeight : 0);

        const fullyAbove = rect.bottom <= rootTop + outMarginPx;
        const fullyBelow = rect.top >= rootBottom - outMarginPx;
        const fullyOffscreen = fullyAbove || fullyBelow;

        if (!inViewRef.current) {
          // Already out; ensure timers cleared
          clearExitTimer();
          clearEnterTimer();
          return;
        }

        if (fullyOffscreen) {
          // Instant exit when fully off-screen so quick scrolls reset animations immediately
          clearExitTimer();
          clearEnterTimer();
          commit(false);
          return;
        }

        if (ratio > exitThresholdRatio) {
          // Still partially intersecting; ignore to prevent flicker
          return;
        }

        // Debounced exit near the boundary to avoid rapid flip loops
        clearExitTimer();
        exitTimerRef.current = window.setTimeout(() => {
          if (inViewRef.current) {
            commit(false);
          }
        }, exitDebounceMs);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearEnterTimer();
      clearExitTimer();
    };
  }, [options]);

  return { ref, inView };
}