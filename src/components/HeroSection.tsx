"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80";

const HeroSection: React.FC = () => {
  return (
    <header className="relative h-[80vh] min-h-[520px] w-full">
      {/* Background image */}
      <img
        src={HERO_IMAGE}
        alt="Tropical beach at sunrise — Serenity Beach, Abaco Bahamas"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* Subtle, multi-stop gradient overlay for better contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/30"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow leading-tight">
          Create Memories | Experience Serenity
        </h1>
        <p className="mt-4 text-white/85 max-w-2xl mx-auto text-base sm:text-lg">
          Your ultimate destination for a perfect beach vacation in the Bahamas.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild className="bg-[#5661f9] hover:bg-[#3046d1]">
            <a href="#activities">Discover Serenity</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#property">Explore Properties</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;