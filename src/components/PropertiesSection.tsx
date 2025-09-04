"use client";

import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

type Property = {
  title: "Beachfront" | "Oceanview" | "Vista";
  img: string;
  alt: string;
  desc: string;
};

const PROPERTIES: Property[] = [
  {
    title: "Beachfront",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/Homepage_Properties_560x570-1.jpg",
    alt: "Beachfront Property",
    desc:
      "7 beachfront properties in Phase 1, each with 90–100 feet of beach frontage. Unmatched Eastern beach and sunrise views.",
  },
  {
    title: "Oceanview",
    img: "https://serenityabaco.com/wp-content/uploads/2022/09/560.570-e1664287201797.png",
    alt: "Oceanview Property",
    desc:
      "8 oceanview properties about 30 feet above the beachfront. Incredible ocean and sunrise views, a minute’s walk to the beach.",
  },
  {
    title: "Vista",
    img: "https://serenityabaco.com/wp-content/uploads/2022/09/Homepage-Vista-e1664287435828.png",
    alt: "Vista Property",
    desc:
      "7 vista properties at 60–70 feet elevation with 360° views of the ocean to the East and the Sea of Abaco to the West. Stunning sunrise and sunset vistas.",
  },
];

const PropertiesSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="properties" className="bg-gray-50 py-16">
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
          {PROPERTIES.map((p, idx) => (
            <div
              key={p.title}
              className={`flex items-center gap-6 flex-wrap rounded-2xl border bg-white/70 backdrop-blur p-4 md:p-6 card-lift transition-shadow ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } hover:border-[#d4af37]/50 hover:shadow-[0_16px_36px_-18px_rgba(212,175,55,0.35)]`}
            >
              <img
                src={p.img}
                alt={p.alt}
                className="w-full md:w-[48%] h-auto rounded-xl object-cover shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="w-full md:w-[48%]">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-700">{p.desc}</p>
              </div>
            </div>
          ))}
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