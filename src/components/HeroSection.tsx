"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Umbrella, Users, Sparkles } from "lucide-react";
import BigCallButton from "@/components/CallButtons/BigCallButton";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2400&q=80",
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=80",
];

const HeroSection: React.FC = () => {
  const [active, setActive] = React.useState(0);
  const [offset, setOffset] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = () => setReduced(mq.matches);
    listener();
    mq.addEventListener?.("change", listener);
    return () => mq.removeEventListener?.("change", listener);
  }, []);

  // Crossfade background images (disabled if reduced motion)
  React.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % BG_IMAGES.length);
    }, 8000);
    return () => clearInterval(id);
  }, [reduced]);

  // Parallax offset (disabled if reduced motion)
  React.useEffect(() => {
    if (reduced) return;
    const onScroll = () => setOffset(window.scrollY * 0.15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <header id="hero" className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        {BG_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ${i === active || reduced ? "opacity-100" : "opacity-0"}`}
            style={{ transform: `translateY(${reduced ? 0 : offset * (i === active ? 0.25 : 0.2)}px)` }}
            loading={i === 0 ? "eager" : "lazy"}
            decoding={i === 0 ? "sync" : "async"}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/65" aria-hidden="true" />
      <div className="hero-wave-layer" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-28 md:pt-32 text-center">
        <h1 className="headline-cinematic text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow leading-tight">
          Awaken to Ocean Sunrises.<br />Escape to Serenity.
        </h1>
        <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base sm:text-lg fade-up" style={{ animationDelay: "180ms" }}>
          Your private Caribbean sanctuary in Abaco, where turquoise waters meet endless horizons.
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
            variant="ghost"
            className="fade-up border border-white/40 bg-white/10 text-white hover:bg-white/15 backdrop-blur btn-lux"
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
            <span className="text-sm">Private beaches</span>
          </li>
          <li className="flex items-center gap-2 hover:opacity-95 transition">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">AI concierge</span>
          </li>
          <li className="flex items-center gap-2 hover:opacity-95 transition">
            <Users className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm">Luxury amenities</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeroSection;