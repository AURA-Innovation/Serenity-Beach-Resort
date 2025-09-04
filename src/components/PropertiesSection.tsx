"use client";

import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";
import ImageWithBlur from "@/components/ImageWithBlur";
import { buildUnsplashSrcSet, defaultSizes } from "@/utils/img";

type Property = {
  title: "Beachfront" | "Oceanview" | "Vista";
  img: string;
  alt: string;
  desc: string;
};

const PROPERTIES: Property[] = [
  {
    title: "Beachfront",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80",
    alt: "Luxury beachfront property with direct beach access and pristine white sand",
    desc:
      "7 beachfront properties in Phase 1, each with 90–100 feet of beach frontage. Unmatched Eastern beach and sunrise views.",
  },
  {
    title: "Oceanview",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    alt: "Elevated oceanview property with panoramic Caribbean sea vistas",
    desc:
      "8 oceanview properties about 30 feet above the beachfront. Incredible ocean and sunrise views, a minute’s walk to the beach.",
  },
  {
    title: "Vista",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
    alt: "Hilltop vista property with 360-degree ocean and island views",
    desc:
      "7 vista properties at 60–70 feet elevation with 360° views of the ocean to the East and the Sea of Abaco to the West. Stunning sunrise and sunset vistas.",
  },
];

const PropertiesSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="properties" className="bg-sand-50 py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Properties For Sale
        </h2>
        <div className="space-y-12">
          {PROPERTIES.map((p, idx) => {
            const srcSet = buildUnsplashSrcSet(p.img);
            return (
              <div
                key={p.title}
                className={`flex items-center gap-6 flex-wrap rounded-2xl border bg-white/70 backdrop-blur p-4 md:p-6 card-lift-tilt transition-shadow ${
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                } hover:border-[#d4af37]/50 hover:shadow-[0_16px_36px_-18px_rgba(212,175,55,0.35)]`}
              >
                <ImageWithBlur
                  src={p.img}
                  alt={p.alt}
                  srcSet={srcSet}
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                  containerClassName="w-full md:w-[48%] aspect-[4/3] rounded-xl overflow-hidden shadow-sm"
                />
                <div className="w-full md:w-[48%]">
                  <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-700">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-[#007bff] hover:bg-[#0056b3] btn-lux btn-gold-hover">
            <a href="https://serenityabaco.com/contact-us/">Inquire About Properties</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;