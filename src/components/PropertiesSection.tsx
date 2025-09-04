"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { buildUnsplashSrcSet } from "@/utils/img";
import { AVAILABLE_PROPERTIES, type PropertyItem } from "../data/available-properties";

type CategoryKey = "Beachfront" | "Oceanview" | "Vista";

type Category = {
  key: CategoryKey;
  title: string;
  label: string;
  description: string;
  img: string;
};

const PROPERTIES: Category[] = [
  {
    key: "Beachfront",
    title: "Luxury beachfront property with direct beach access and pristine white sand",
    label: "Beachfront",
    description:
      "7 beachfront properties in Phase 1, each with 90–100 feet of beach frontage. Unmatched Eastern beach and sunrise views.",
    img: "/images/durian-bullet-JCMQo028t3Q-unsplash.jpg",
  },
  {
    key: "Oceanview",
    title: "Elevated oceanview property with panoramic Caribbean sea vistas",
    label: "Oceanview",
    description:
      "8 oceanview properties about 30 feet above the beachfront. Incredible ocean and sunrise views, a minute’s walk to the beach.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
  },
  {
    key: "Vista",
    title: "Hilltop vista property with 360-degree ocean and island views",
    label: "Vista",
    description:
      "7 vista properties at 60–70 feet elevation with 360° views of the ocean to the East and the Sea of Abaco to the West. Stunning sunrise and sunset vistas.",
    img: "/images/vista-main.jpg",
  },
];

function filterByCategory(items: PropertyItem[], key: CategoryKey) {
  return items.filter((p) => p.kind === "Lot" && p.subtype === key);
}

const PropertiesSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const lots = React.useMemo(() => AVAILABLE_PROPERTIES.filter((p) => p.kind === "Lot"), []);

  return (
    <section id="properties" className="bg-sand-50 py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Properties For Sale</h2>
          <p className="mt-2 text-gray-700 max-w-[70ch] mx-auto">
            Explore beachfront, oceanview, and hilltop vista lots designed for elevated island living.
          </p>
        </div>

        <div className="space-y-12">
          {PROPERTIES.map((p, idx) => {
            const isUnsplash = /^https?:\/\//i.test(p.img);
            const srcSet = isUnsplash ? buildUnsplashSrcSet(p.img) : undefined;
            const categoryItems = filterByCategory(lots, p.key);

            return (
              <section
                key={p.key}
                id={`properties-${p.key.toLowerCase()}`}
                className="rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-black/5"
                style={{
                  animation: inView ? `fadeUp 700ms ease-out ${idx * 70}ms forwards` : "none",
                  opacity: inView ? 1 : 0,
                }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative">
                    <img
                      src={p.img}
                      srcSet={isUnsplash ? srcSet : undefined}
                      sizes="(min-width: 1024px) 600px, 100vw"
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading={idx > 0 ? "lazy" : "eager"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="inline-block rounded bg-white/20 backdrop-blur px-2 py-1 text-sm">
                        {p.label}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-2 text-gray-700">{p.description}</p>

                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900">
                        Available {p.label.toLowerCase()} listings
                        <span className="ml-2 text-gray-500 text-sm">({categoryItems.length})</span>
                      </h4>

                      {categoryItems.length === 0 ? (
                        <p className="text-gray-600 mt-2">No listings currently available.</p>
                      ) : (
                        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                          {categoryItems.map((item) => (
                            <li
                              key={item.id}
                              className="rounded-xl glass-panel p-4 card-lift hover:shadow-lg transition"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <div className="font-semibold text-gray-900">{item.name}</div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <span className="mr-2">
                                      <strong>Size:</strong> {item.size}
                                    </span>
                                    {item.elevation && (
                                      <span className="mr-2">
                                        <strong>Elevation:</strong> {item.elevation}
                                      </span>
                                    )}
                                    {item.widthOrFrontage && (
                                      <span>
                                        <strong>Frontage/Width:</strong> {item.widthOrFrontage}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {item.details?.length ? (
                                <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                                  {item.details.slice(0, 3).map((d, i) => (
                                    <li key={i}>{d}</li>
                                  ))}
                                </ul>
                              ) : null}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;