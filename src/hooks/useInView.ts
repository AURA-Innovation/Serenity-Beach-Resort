"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

export function useInView<T extends HTMLElement>(options?: UseInViewOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Respect reduced motion: show content without animations
      setInView(true);
      return;
    }

    if (!ref.current) return;

    const { once = false, ...observerOpts } = options || {};
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (once) {
            if (entry.isIntersecting) {
              setInView(true);
              observer.unobserve(entry.target);
            }
          } else {
            // Re-trigger on enter/exit to animate both ways
            setInView(entry.isIntersecting);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.15, ...observerOpts }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}