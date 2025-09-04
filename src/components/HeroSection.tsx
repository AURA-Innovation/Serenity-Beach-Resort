"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Umbrella, Users, Sparkles } from "lucide-react";
import BigCallButton from "@/components/CallButtons/BigCallButton";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2400&q=80",
];

const HeroSection: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const [offset, setOffset] = React.useState(0);

  // Crossfade background images
  React.useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % BG_IMAGES.length);
    }, 8000);
    return () => clearInterval(id);
  }, []);

  // Parallax offset
  React.useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="hero" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {BG_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Serenity Beach header background"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${i === active ? "opacity-100" : "opacity-0"}`}
            style={{ transform: `translateY(${offset * (i === active ? 0.25 : 0.2)}px)` }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/65" aria-hidden="true" />
      <div className="hero-wave-layer" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-28 md:pt-32 text-center">
        <h1 className="headline-cinematic text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow leading-tight">
          Create Memories – Experience Serenity
        </h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base sm:text-lg fade-up" style={{ animationDelay: "180ms" }}>
          Private Caribbean escape with curated activities and modern comforts.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button
            asChild
            className="btn-lux btn-gold-hover bg-gradient-to-r from-[#0ea5a6]/90 via-[#007bff]/90 to-[#d4af37]/90 text-white shadow-lg"
          >
            <a className="fade-up" style={{ animationDelay: "260ms" }} href="#activities">
              Discover Serenity
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="fade-up border-white/50 text-white hover:bg-white/10 btn-lux"
            style={{ animationDelay: "340ms" }}
          >
            <a href="#properties">Explore Properties</a>
          </Button>
        </div>

        <div className="mt-7 flex justify-center fade-up" style={{ animationDelay: "420ms" }}>
          <div className="glass-panel px-5 py-4 shadow-xl">
            <BigCallButton />
          </div>
        </div>

        <ul className="mt-7 flex flex-wrap items-center justify-center gap-4 text-white/90">
          <li className="flex items-center gap-2 hover:opacity-95 transition">
            <Umbrella className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Private beach</span>
          </li>
          <li className="flex items-center gap-2 hover:opacity-95 transition">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Concierge planning</span>
          </li>
          <li className="flex items-center gap-2 hover:opacity-95 transition">
            <Users className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Family friendly</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeroSection;