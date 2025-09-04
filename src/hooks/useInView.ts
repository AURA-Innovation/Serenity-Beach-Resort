"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
  debounceMs?: number; // time visibility must be stable before toggling
  cooldownMs?: number; // minimum time between toggles
};

export function useInView<T extends HTMLElement>(options?: UseInViewOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  // Refs to manage flicker control without re-creating the observer
  const inViewRef = useRef(inView);
  const pendingRef = useRef<boolean>(inView);
  const debounceIdRef = useRef<number | null>(null);
  const lastChangeAtRef = useRef<number>(0);

  // Keep ref in sync with state
  useEffect(() => {
    inViewRef.current = inView;
  }, [inView]);

  useEffect(() => {
    const prefersReduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }
    if (!ref.current) return;

    const {
      once = false,
      debounceMs = 140,
      cooldownMs = 360,
      root = null,
      // Use a negative bottom margin so we consider a section "out" only after it's well past the fold
      rootMargin = "0px 0px -35% 0px",
      // Require a bit of the section to be in view before toggling to "in"
      threshold = 0.25,
    } = options || {};

    const el = ref.current;

    const clearDebounce = () => {
      if (debounceIdRef.current) {
        window.clearTimeout(debounceIdRef.current);
        debounceIdRef.current = null;
      }
    };

    const commit = (visible: boolean) => {
      clearDebounce();
      if (visible !== inViewRef.current) {
        setInView(visible);
        inViewRef.current = visible;
        lastChangeAtRef.current = performance.now();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        const visible = entry.isIntersecting;

        if (once) {
          if (visible && !inViewRef.current) {
            commit(true);
          }
          if (visible) observer.unobserve(entry.target);
          return;
        }

        // If the desired state equals current state, just clear any pending changes.
        if (visible === inViewRef.current) {
          pendingRef.current = visible;
          clearDebounce();
          return;
        }

        // Ignore flips that happen too soon after the last change.
        const now = performance.now();
        if (now - lastChangeAtRef.current < cooldownMs) {
          return;
        }

        // Schedule a debounced commit; if visibility flips again during the debounce, we'll reschedule.
        pendingRef.current = visible;
        clearDebounce();
        debounceIdRef.current = window.setTimeout(() => {
          // Only commit if pending still matches what we intended when the debounce started.
          commit(pendingRef.current);
        }, debounceMs);
      },
      { root, rootMargin, threshold }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      clearDebounce();
    };
  }, [options]);

  return { ref, inView };
}