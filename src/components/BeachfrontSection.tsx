"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

type BeachfrontProp = {
  id: string;
  name: string;
  size: string;
  frontage: string;
  elevation?: string;
  features?: string;
  img: string;
};

const BEACHFRONT_PROPERTIES: BeachfrontProp[] = [
  {
    id: "bf-1",
    name: "Happy Hours",
    size: "21,067 sq ft",
    frontage: "90 ft beach frontage",
    elevation: "10 - 20 ft",
    features: "Beach View • Sunrise View",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5229.png",
  },
  {
    id: "bf-2",
    name: "Seas the Day",
    size: "26,085 sq ft",
    frontage: "105 ft beach frontage",
    elevation: "10 - 20 ft",
    features: "Beach View • Sunrise View",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5230.png",
  },
  {
    id: "bf-3",
    name: "Oasis",
    size: "27,503 sq ft",
    frontage: "107 ft beach frontage",
    elevation: "10 - 20 ft",
    features: "Beach View • Sunset View",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5231.png",
  },
];

const BeachfrontSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="beachfront" className="py-16 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bahamas Property For Sale — Beachfront
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Explore our premier beachfront lots — exceptional frontage, sunrise views, and immediate access to white-sand beaches.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {BEACHFRONT_PROPERTIES.map((p) => (
            <article
              key={p.id}
              className="rounded-xl overflow-hidden border border-transparent bg-white/40 dark:bg-black/40 backdrop-blur-sm shadow-sm flex flex-col hover:shadow-lg transform hover:-translate-y-1 transition-all"
            >
              <div className="relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  <div>
                    <strong>Size: </strong>
                    <span>{p.size}</span>
                  </div>
                  <div>
                    <strong>Frontage: </strong>
                    <span>{p.frontage}</span>
                  </div>
                  {p.elevation && (
                    <div>
                      <strong>Elevation: </strong>
                      <span>{p.elevation}</span>
                    </div>
                  )}
                  {p.features && (
                    <div>
                      <strong>Features: </strong>
                      <span>{p.features}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-end justify-between">
                  <div className="text-sm text-gray-700">Price on request</div>
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline">
                      <a href="#contact">Inquire</a>
                    </Button>
                    <Button asChild size="sm" className="bg-[#007bff] hover:bg-[#0056b3]">
                      <a href={`https://serenityabaco.com/bahamas-property-for-sale/#${p.id}`} target="_blank" rel="noreferrer">
                        View Details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Interested in multiple lots or development opportunities? Contact our property team for pricing, parcels, and masterplan details.
          </p>
          <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
            <a href="#contact">Contact Property Team</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeachfrontSection;