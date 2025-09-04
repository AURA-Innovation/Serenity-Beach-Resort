"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

type Activity = {
  id: string;
  name: string;
  href?: string;
  img?: string;
  desc?: string;
};

const ACTIVITIES: Activity[] = [
  {
    id: "kayaking",
    name: "Kayaking",
    href: "https://serenityabaco.com/night-kayaking/",
    img: "/placeholder.svg",
    desc: "Glide across calm waters and discover hidden coves and marine life.",
  },
  {
    id: "kiteboarding",
    name: "Kiteboarding",
    href: "https://serenityabaco.com/kiteboarding/",
    img: "/placeholder.svg",
    desc: "Ride the wind along Abaco’s pristine coastlines — for riders of all levels.",
  },
  {
    id: "bonefishing",
    name: "Bone Fishing",
    href: "https://serenityabaco.com/bone-fishing/",
    img: "/placeholder.svg",
    desc: "World-class flats fishing in shallow, clear waters — a must for anglers.",
  },
  {
    id: "sailing",
    name: "Sailing",
    href: "https://serenityabaco.com/sailing/",
    img: "/placeholder.svg",
    desc: "Explore the turquoise sea on a leisurely sailing trip or private charter.",
  },
  {
    id: "scuba",
    name: "Scuba Diving",
    href: "https://serenityabaco.com/scuba-diving/",
    img: "/placeholder.svg",
    desc: "Discover vibrant reefs and abundant marine life with guided dives.",
  },
  {
    id: "caving",
    name: "Caving",
    href: "https://serenityabaco.com/caving/",
    img: "/placeholder.svg",
    desc: "Explore limestone caves and learn about Abaco’s unique geology.",
  },
  {
    id: "snorkelling",
    name: "Snorkelling",
    href: "https://serenityabaco.com/snorkelling/",
    img: "/placeholder.svg",
    desc: "Snorkel shallow reefs teeming with tropical fish and corals.",
  },
  {
    id: "hobiecats",
    name: "Hobie Cats",
    href: "https://serenityabaco.com/hobie-cats/",
    img: "/placeholder.svg",
    desc: "Small, fun catamarans perfect for sailing close to shore.",
  },
  {
    id: "deepsea",
    name: "Deep-sea Fishing",
    href: "https://serenityabaco.com/deep-sea-fishing/",
    img: "/placeholder.svg",
    desc: "Head offshore for big-game fishing and memorable catches.",
  },
  {
    id: "atv",
    name: "ATVing",
    href: "https://serenityabaco.com/activity-atv/",
    img: "/placeholder.svg",
    desc: "Thrilling off-road adventures across scenic trails.",
  },
  {
    id: "boating",
    name: "Boating",
    href: "https://serenityabaco.com/boating/",
    img: "/placeholder.svg",
    desc: "Boat charters and island-hopping to explore nearby cays.",
  },
  {
    id: "jet-ski",
    name: "Jet Ski",
    href: "https://serenityabaco.com/jet-ski/",
    img: "/placeholder.svg",
    desc: "Powerful fun on the waves for adrenaline-seekers.",
  },
  {
    id: "nature-tours",
    name: "Nature Tours",
    href: "https://serenityabaco.com/abaco_national_park",
    img: "/placeholder.svg",
    desc: "Guided nature tours to learn about local flora and fauna.",
  },
  {
    id: "blue-holes",
    name: "Blue Holes Of Abaco",
    href: "https://serenityabaco.com/blue-holes-of-abaco/",
    img: "/placeholder.svg",
    desc: "Unique sinkhole formations — great for exploration and photos.",
  },
  {
    id: "horseback",
    name: "Horseback Riding",
    href: "https://serenityabaco.com/horseback/",
    img: "/placeholder.svg",
    desc: "Scenic horseback rides along secluded beaches.",
  },
];

const ActivitiesSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="activities" className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Activities
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          Our guests enjoy unforgettable experiences on land and sea. Choose from a variety of
          island adventures tailored to all skill levels.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ACTIVITIES.map((act) => (
            <article
              key={act.id}
              className="group rounded-lg border bg-white p-4 shadow-sm flex flex-col"
            >
              <div className="h-40 w-full overflow-hidden rounded-md bg-gray-100 flex items-center justify-center">
                <img
                  src={act.img}
                  alt={act.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{act.name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">{act.desc}</p>

              <div className="mt-4">
                <Button asChild size="sm" variant="ghost" className="justify-start px-0">
                  <a href={act.href ?? "#"} target="_blank" rel="noreferrer" className="text-[#007bff] hover:underline">
                    Learn more
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Want a custom experience? Contact our concierge to build a private adventure.
          </p>
          <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
            <a href="#contact">Contact Concierge</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;