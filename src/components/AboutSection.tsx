"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

const AboutSection: React.FC = () => {
  // Re-animate on every re-entry; instant enter, smart exit (handled by hook defaults)
  const { ref, inView } = useInView<HTMLElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -30% 0px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className={[
        "relative isolate overflow-hidden py-16",
        "transition-all duration-700 will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      ].join(" ")}
    >
      {/* Match HeroSection overlays */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45),rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="hero-wave-layer" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About Serenity</h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed">
              Discover a private sanctuary where turquoise waters meet pristine shores. Our
              residences are crafted for effortless luxury, blending modern comfort with the
              timeless beauty of the Abacos.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Beachfront access
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Private marina
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Concierge services
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                Turn-key ownership
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop"
                alt="Serenity Abaco coastline"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;