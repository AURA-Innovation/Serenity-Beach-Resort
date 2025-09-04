"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import { Mic, Waves, Bot, Gem } from "lucide-react";

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.2 });

  return (
    <section
      id="hero"
      className="relative isolate min-h-[640px] md:min-h-[760px] lg:min-h-[820px] overflow-hidden"
    >
      {/* Background media for hero (image/video handled by parent styling if present) */}

      {/* Layered overlays for readability */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.45),rgba(0,0,0,0)_70%)]" />
      </div>

      <div className="hero-wave-layer" aria-hidden="true" />

      {/* Content */}
      <div
        ref={ref}
        className={[
          "relative z-10 mx-auto max-w-5xl px-4",
          "pt-28 md:pt-36",
          "text-center",
          "transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        ].join(" ")}
      >
        <h1 className="text-white font-extrabold tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
          <span className="block">Awaken to Ocean Sunrises.</span>
          <span className="block text-white/90">Escape to Serenity.</span>
        </h1>

        <p className="mx-auto mt-4 md:mt-6 max-w-[62ch] text-base sm:text-lg md:text-xl text-white/85">
          Your private Caribbean sanctuary in Abaco, where turquoise waters meet endless horizons.
        </p>

        {/* Primary action group on a glass panel */}
        <div className="mx-auto mt-7 md:mt-9 w-full max-w-fit rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 shadow-[0_15px_50px_-12px_rgba(0,0,0,0.6)] p-2">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <Button
              asChild
              size="lg"
              className="h-11 sm:h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              <a href="#about">Discover Serenity</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-11 sm:h-12 rounded-xl bg-white/85 text-gray-900 hover:bg-white"
            >
              <a href="#properties">Explore Properties</a>
            </Button>
          </div>
        </div>

        {/* Secondary CTA: Talk to Assistant */}
        <div className="mt-4 sm:mt-6 flex justify-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-6 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-900/30"
          >
            <a href="#assistant">
              <Mic className="mr-2 h-5 w-5" />
              Talk to Assistant
            </a>
          </Button>
        </div>

        <p className="mt-2 text-xs sm:text-sm text-white/70">
          Start a live conversation with our AI concierge to plan your perfect stay.
        </p>

        {/* Feature pills */}
        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <FeaturePill icon={<Waves className="h-4 w-4" />} text="Private beaches" />
          <FeaturePill icon={<Bot className="h-4 w-4" />} text="AI concierge" />
          <FeaturePill icon={<Gem className="h-4 w-4" />} text="Luxury amenities" />
        </div>
      </div>
    </section>
  );
};

const FeaturePill = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-1.5 text-white/90 backdrop-blur-md">
    <span className="shrink-0 opacity-90">{icon}</span>
    <span className="text-xs sm:text-sm">{text}</span>
  </div>
);

export default HeroSection;