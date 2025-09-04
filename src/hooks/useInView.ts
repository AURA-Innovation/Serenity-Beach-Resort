"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
  enterDebounceMs?: number; // optional delay before entering (default 0 for instant re-animations)
  exitDebounceMs?: number;  // delay before exiting to avoid flicker
  exitThresholdRatio?: number; // require being really out before exiting
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
          // Enter: commit immediately (or after optional small enter debounce)
          clearExitTimer();
          if (!inViewRef.current) {
            if (enterDebounceMs > 0) {
              clearEnterTimer();
              enterTimerRef.current = window.setTimeout(() => commit(true), enterDebounceMs);
            } else {
              commit(true);
            }
          }
        } else {
          // Exit: only if really out (very low ratio), and after a short debounce
          if (!inViewRef.current) {
            // Already out; ensure timers cleared
            clearExitTimer();
            clearEnterTimer();
            return;
          }
          if (ratio > exitThresholdRatio) {
            // Not truly out; ignore this flip
            return;
          }
          // Schedule debounced exit; cancel if it becomes visible again before timeout
          clearExitTimer();
          exitTimerRef.current = window.setTimeout(() => {
            // If we haven't re-entered by now, mark as out
            if (inViewRef.current) {
              commit(false);
            }
          }, exitDebounceMs);
        }
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