"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithBlur from "@/components/ImageWithBlur";
import { Button } from "@/components/ui/button";

type Photo = {
  src: string;
  alt: string;
};

const PHOTOS: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Turquoise water and white-sand beach at sunrise near Serenity Beach",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
    alt: "Sailboat cruising calm Caribbean waters by Serenity",
  },
  {
    src: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=80",
    alt: "Striking blue hole lagoon ready for exploration",
  },
  {
    src: "https://images.unsplash.com/photo-1508675801627-066ac4346a14?auto=format&fit=crop&w=1600&q=80",
    alt: "Snorkeler exploring coral reef and tropical fish near the resort",
  },
  {
    src: "https://images.unsplash.com/photo-1508610048659-a06a9f2a0c0e?auto=format&fit=crop&w=1600&q=80",
    alt: "Scuba diver floating over vibrant coral formations",
  },
  {
    src: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1600&q=80",
    alt: "Jetski carving across bright blue ocean at speed",
  },
];

const PhotosSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = () => setIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setIndex((i) => (i + 1) % PHOTOS.length);

  return (
    <section id="photos" className="py-16 bg-gray-50">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Serenity Beach Photos</h2>
        <p className="text-center text-gray-700 max-w-[65ch] leading-7 mx-auto mb-8">
          Immerse yourself in the colors and textures of Abaco — a glimpse into the serenity that awaits.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              className="group overflow-hidden rounded-lg bg-white shadow-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007bff]"
              onClick={() => openAt(i)}
              aria-label={`Open photo: ${p.alt}`}
            >
              <ImageWithBlur
                src={p.src}
                alt={p.alt}
                className="w-full h-64 object-cover group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <div className="relative bg-black">
            <img
              src={PHOTOS[index].src}
              alt={PHOTOS[index].alt}
              className="w-full max-h-[80vh] object-contain"
              loading="eager"
            />
            <div className="absolute inset-0 flex items-center justify-between px-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                aria-label="Previous photo"
                onClick={prev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                aria-label="Next photo"
                onClick={next}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
              <p className="text-white text-sm text-center">{PHOTOS[index].alt}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotosSection;