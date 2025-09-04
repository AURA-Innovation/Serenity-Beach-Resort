"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";

const AmenityCard = ({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) => (
  <Card className="h-full">
    <CardHeader className="items-center">
      <img
        src="https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png"
        alt={title}
        className="w-20 h-20 rounded-full object-cover"
        loading="lazy"
      />
      <CardTitle className="mt-2 text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 text-center">{desc}</p>
      <div className="mt-4 text-center">
        <a
          href={href}
          className="font-semibold text-[#007bff] hover:text-[#0056b3]"
        >
          Read More
        </a>
      </div>
    </CardContent>
  </Card>
);

const AmenitiesSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="amenities" className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Resort Amenities
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AmenityCard
            title="Spa"
            desc="Relax with rejuvenating massages and insights on healthy living to improve your body and mind."
            href="https://serenityabaco.com/spa/"
          />
          <AmenityCard
            title="Clubhouse"
            desc="Meet your Resort Host, savor gourmet meals, and enjoy the infinity-edge pool overlooking Abaco’s most beautiful bay."
            href="https://serenityabaco.com/clubhouse/"
          />
          <AmenityCard
            title="Restaurant"
            desc="Gourmet dining blending Bahamian culture with global inspirations — a signature culinary experience."
            href="https://serenityabaco.com/ocean-view/"
          />
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;