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
        "bg-sand-100 py-16",
        "transition-all duration-700 will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Serenity</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Discover a private sanctuary where turquoise waters meet pristine shores. Our
              residences are crafted for effortless luxury, blending modern comfort with the
              timeless beauty of the Abacos.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Beachfront access
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Private marina
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Concierge services
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                Turn-key ownership
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5">
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