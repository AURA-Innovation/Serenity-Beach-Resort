"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

type Photo = {
  src: string;
  alt: string;
};

const PHOTOS: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Turquoise water and white-sand beach at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    alt: "Sailboat cruising over calm Caribbean waters",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80",
    alt: "Blue hole lagoon with striking deep blue center",
  },
  {
    src: "https://images.unsplash.com/photo-1508675801627-066ac4346a14?auto=format&fit=crop&w=1600&q=80",
    alt: "Snorkeler exploring coral reef and tropical fish",
  },
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06a9f2a0c0e?auto=format&fit=crop&w=1600&q=80",
    alt: "Scuba diver floating over vibrant coral formations",
  },
  {
    src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=80",
    alt: "Jetski carving across bright blue ocean",
  },
];

const PhotosSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="photos" className="py-16 bg-gray-50">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Serenity Beach Photos</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          Immerse yourself in the colors and textures of Abaco — a glimpse into the serenity that awaits.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <figure key={i} className="overflow-hidden rounded-lg bg-white shadow-sm border">
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-64 object-cover hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              <figcaption className="sr-only">{p.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotosSection;