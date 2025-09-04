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
    img: "https://serenityabaco.com/wp-content/uploads/2022/09/360.400-1024x658.jpg",
    desc: "Glide across calm waters and discover hidden coves and marine life.",
  },
  {
    id: "kiteboarding",
    name: "Kiteboarding",
    href: "https://serenityabaco.com/kiteboarding/",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
    desc: "Ride the wind along Abaco’s pristine coastlines — for riders of all levels.",
  },
  {
    id: "bonefishing",
    name: "Bone Fishing",
    href: "https://serenityabaco.com/bone-fishing/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5229.png",
    desc: "World-class flats fishing in shallow, clear waters — a must for anglers.",
  },
  {
    id: "sailing",
    name: "Sailing",
    href: "https://serenityabaco.com/sailing/",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    desc: "Explore the turquoise sea on a leisurely sailing trip or private charter.",
  },
  {
    id: "scuba",
    name: "Scuba Diving",
    href: "https://serenityabaco.com/scuba-diving/",
    img: "https://images.unsplash.com/photo-1508610048659-a06a9f2a0c0e?auto=format&fit=crop&w=1200&q=80",
    desc: "Discover vibrant reefs and abundant marine life with guided dives.",
  },
  {
    id: "caving",
    name: "Caving",
    href: "https://serenityabaco.com/caving/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/About-Us-Company-Info.jpeg",
    desc: "Explore limestone caves and learn about Abaco’s unique geology.",
  },
  {
    id: "snorkelling",
    name: "Snorkelling",
    href: "https://serenityabaco.com/snorkelling/",
    img: "https://images.unsplash.com/photo-1508675801627-066ac4346a14?auto=format&fit=crop&w=1200&q=80",
    desc: "Snorkel shallow reefs teeming with tropical fish and corals.",
  },
  {
    id: "hobiecats",
    name: "Hobie Cats",
    href: "https://serenityabaco.com/hobie-cats/",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    desc: "Small, fun catamarans perfect for sailing close to shore.",
  },
  {
    id: "deepsea",
    name: "Deep-sea Fishing",
    href: "https://serenityabaco.com/deep-sea-fishing/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5237.png",
    desc: "Head offshore for big-game fishing and memorable catches.",
  },
  {
    id: "atv",
    name: "ATVing",
    href: "https://serenityabaco.com/activity-atv/",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    desc: "Thrilling off-road adventures across scenic trails.",
  },
  {
    id: "boating",
    name: "Boating",
    href: "https://serenityabaco.com/boating/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/Homepage_Properties_560x570-1.jpg",
    desc: "Boat charters and island-hopping to explore nearby cays.",
  },
  {
    id: "jet-ski",
    name: "Jet Ski",
    href: "https://serenityabaco.com/jet-ski/",
    // Curated Jet Ski image chosen for high energy, composition and relevance:
    img: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1400&q=80",
    desc: "High-speed fun on the water — perfect for adrenaline seekers.",
  },
  {
    id: "nature-tours",
    name: "Nature Tours",
    href: "https://serenityabaco.com/abaco_national_park",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/About-Us-Company-Info.jpeg",
    desc: "Guided nature tours to learn about local flora and fauna.",
  },
  {
    id: "blue-holes",
    name: "Blue Holes Of Abaco",
    href: "https://serenityabaco.com/blue-holes-of-abaco/",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    desc: "Unique sinkhole formations — great for exploration and photos.",
  },
  {
    id: "horseback",
    name: "Horseback Riding",
    href: "https://serenityabaco.com/horseback/",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
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
                  src={act.img ?? "/placeholder.svg"}
                  alt={act.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{act.name}</h3>
              <p className="mt-2 text-sm text-gray-600 flex-1">{act.desc}</p>

              <div className="mt-4">
                <Button asChild size="sm" variant="ghost" className="justify-start px-0">
                  <a
                    href={act.href ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#007bff] hover:underline"
                  >
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