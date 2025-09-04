"use client";

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center text-center"
      aria-label="Create Memories | Experience Serenity"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow">
          Create Memories | Experience Serenity
        </h1>
        <p className="mt-4 text-white/90 text-lg sm:text-xl">
          Your ultimate destination for a perfect beach vacation in the Bahamas.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild size="lg" className="bg-[#007bff] hover:bg-[#0056b3]">
            <a href="#about">Discover Serenity</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
            <a href="#properties">Explore Properties</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;