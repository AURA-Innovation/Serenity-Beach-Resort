"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const CLUBHOUSE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury resort clubhouse with infinity pool and panoramic ocean views",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    alt: "Elegant clubhouse dining terrace with ocean views and tropical ambiance",
  },
];

const ClubhouseSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="clubhouse"
      aria-labelledby="clubhouse-title"
      className="py-16 bg-white"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 id="clubhouse-title" className="text-3xl md:text-4xl font-bold mb-4">
              Serenity Beach Clubhouse
            </h2>

            <p className="text-gray-700 mb-4">
              The Serenity Clubhouse is designed as a luxurious and exclusive destination for those
              looking for the ultimate in relaxation and indulgence. Perched on a secluded hilltop
              in Abaco, the clubhouse delivers breathtaking 360° views of the turquoise Caribbean.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Clubhouse Amenities</h3>
            <ul className="list-inside list-disc text-gray-700 mb-4 space-y-1">
              <li>Double infinity-edge pools with panoramic ocean views</li>
              <li>Spacious pool deck and loungers for soaking up the sun</li>
              <li>Swim-up bar for poolside cocktails and refreshments</li>
              <li>Dedicated event spaces for intimate weddings and corporate retreats</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Clubhouse Dining</h3>
            <p className="text-gray-700 mb-4">
              Enjoy an upscale dining program offering both indoor sophistication and alfresco
              dining on the terrace. Menus emphasize fresh, local ingredients — from seafood to
              tropical produce — accompanied by a thoughtfully curated wine and cocktail list.
            </p>

            <p className="text-gray-800 font-medium mb-6">
              Create memories that last forever — the clubhouse is ideal for families, couples, and
              friends seeking a luxury getaway or for hosting special events.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
                <a href="#contact">Contact the Clubhouse</a>
              </Button>

              <Button asChild variant="outline">
                <a href="https://serenityabaco.com/bahamas-property-for-sale/" target="_blank" rel="noreferrer">
                  View Properties
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {CLUBHOUSE_IMAGES.map((img) => (
              <div
                key={img.src}
                className="rounded-lg overflow-hidden shadow-lg bg-gray-50"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[280px] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-gray-700">
          <h4 className="text-lg font-semibold mb-2">Perfect For Events</h4>
          <p className="mb-2">
            The Clubhouse offers flexible event setups and scenic backdrops ideal for beach weddings,
            family reunions, and corporate retreats — supported by on-site catering and event planning.
          </p>
          <p>
            If you're planning an event or would like to learn more, click "Contact the Clubhouse" to
            reach our team and start planning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClubhouseSection;