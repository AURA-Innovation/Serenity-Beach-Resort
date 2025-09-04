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
              className={`flex items-center gap-6 flex-wrap ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={p.img}
                alt={p.alt}
                className="w-full md:w-[48%] h-auto rounded-lg object-cover shadow-sm"
                loading="lazy"
              />
              <div className="w-full md:w-[48%] rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-sm p-6 shadow-sm">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-700">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-[#007bff] hover:bg-[#0056b3] shadow-md">
            <a href="https://serenityabaco.com/contact-us/">Inquire About Properties</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;