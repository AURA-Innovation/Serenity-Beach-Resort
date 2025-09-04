"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Umbrella, Users, Sparkles } from "lucide-react";
import BigCallButton from "@/components/CallButtons/BigCallButton";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2000&q=80";

const HeroSection: React.FC = () => {
  return (
    <header id="hero" className="relative h-[85vh] min-h-[540px] w-full">
      <img
        src={HERO_IMAGE}
        alt="Sunrise over a tranquil Bahamian beach — your private escape at Serenity"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-28 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow leading-tight">
          Create Memories – Experience Serenity
        </h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base sm:text-lg">
          Private Caribbean escape with curated activities and modern comforts.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
            <a href="#activities">Discover Serenity</a>
          </Button>
          <Button asChild variant="outline" className="border-white/50 text-white hover:bg-white/10">
            <a href="#properties">Explore Properties</a>
          </Button>
        </div>

        {/* Prominent AI call button directly in the hero, visible on load */}
        <div className="mt-6 flex justify-center">
          <BigCallButton />
        </div>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 text-white/90">
          <li className="flex items-center gap-2">
            <Umbrella className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Private beach</span>
          </li>
          <li className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Concierge planning</span>
          </li>
          <li className="flex items-center gap-2">
            <Users className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Family friendly</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeroSection;