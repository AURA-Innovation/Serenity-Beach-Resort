"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE =
  // Curated luxury resort image (Unsplash) — warm, premium resort/pool + ocean view
  "https://images.unsplash.com/photo-1501117716987-c8e6d30f5a9f?auto=format&fit=crop&w=2000&q=80";

const HeroSection: React.FC = () => {
  return (
    <header
      className="relative h-[75vh] min-h-[520px] w-full overflow-hidden"
      aria-label="Hero - Experience Serenity Beach"
    >
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
        aria-hidden="true"
      />

      {/* Cinematic gradient + soft vignette */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-black/10 mix-blend-soft-light" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 flex h-full items-center justify-center text-center">
        {/* Frosted glass panel for headline */}
        <div className="glass-card p-8 max-w-2xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg leading-tight">
            Create Memories | Experience Serenity
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/90">
            Your ultimate destination for a perfect beach vacation in the Bahamas —
            luxury accommodations, curated experiences, and pristine beaches.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild className="bg-white text-black hover:bg-white/95 px-6 py-3 shadow-sm rounded-md">
              <a href="#activities">Discover Serenity</a>
            </Button>

            <Button asChild variant="outline" className="px-6 py-3 border-white/30 text-white/95">
              <a href="#property">Explore Properties</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;