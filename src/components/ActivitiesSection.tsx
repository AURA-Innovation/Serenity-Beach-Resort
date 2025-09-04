"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type Activity = {
  id: string;
  name: string;
  href?: string;
  img?: string;
  desc?: string;
  category: "Water" | "Adventure" | "Nature";
  duration?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
};

const ACTIVITIES: Activity[] = [
  {
    id: "kayaking",
    name: "Kayaking",
    href: "https://serenityabaco.com/night-kayaking/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/09/360.400-1024x658.jpg",
    desc: "Glide across calm waters and discover hidden coves and marine life.",
    category: "Water",
    duration: "2–3 hrs",
    level: "Beginner",
  },
  {
    id: "kiteboarding",
    name: "Kiteboarding",
    href: "https://serenityabaco.com/kiteboarding/",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=80",
    desc: "Ride the wind along Abaco’s pristine coastlines — for riders of all levels.",
    category: "Water",
    duration: "2 hrs lesson",
    level: "Beginner",
  },
  {
    id: "bonefishing",
    name: "Bone Fishing",
    href: "https://serenityabaco.com/bone-fishing/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5229.png",
    desc: "World-class flats fishing in shallow, clear waters — a must for anglers.",
    category: "Water",
    duration: "Half day",
    level: "Intermediate",
  },
  {
    id: "sailing",
    name: "Sailing",
    href: "https://serenityabaco.com/sailing/",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    desc: "Explore the turquoise sea on a leisurely sailing trip or private charter.",
    category: "Water",
    duration: "Half day",
    level: "Beginner",
  },
  {
    id: "scuba",
    name: "Scuba Diving",
    href: "https://serenityabaco.com/scuba-diving/",
    img: "https://images.unsplash.com/photo-1508610048659-a06a9f2a0c0e?auto=format&fit=crop&w=1200&q=80",
    desc: "Discover vibrant reefs and abundant marine life with guided dives.",
    category: "Water",
    duration: "Half day",
    level: "Beginner",
  },
  {
    id: "caving",
    name: "Caving",
    href: "https://serenityabaco.com/caving/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/About-Us-Company-Info.jpeg",
    desc: "Explore limestone caves and learn about Abaco’s unique geology.",
    category: "Adventure",
    duration: "2–4 hrs",
    level: "Beginner",
  },
  {
    id: "snorkelling",
    name: "Snorkelling",
    href: "https://serenityabaco.com/snorkelling/",
    img: "https://images.unsplash.com/photo-1508675801627-066ac4346a14?auto=format&fit=crop&w=1200&q=80",
    desc: "Snorkel shallow reefs teeming with tropical fish and corals.",
    category: "Water",
    duration: "2 hrs",
    level: "Beginner",
  },
  {
    id: "hobiecats",
    name: "Hobie Cats",
    href: "https://serenityabaco.com/hobie-cats/",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    desc: "Small, fun catamarans perfect for sailing close to shore.",
    category: "Water",
    duration: "1–2 hrs",
    level: "Beginner",
  },
  {
    id: "deepsea",
    name: "Deep-sea Fishing",
    href: "https://serenityabaco.com/deep-sea-fishing/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/05/IMG_5237.png",
    desc: "Head offshore for big-game fishing and memorable catches.",
    category: "Water",
    duration: "Full day",
    level: "Intermediate",
  },
  {
    id: "atv",
    name: "ATVing",
    href: "https://serenityabaco.com/activity-atv/",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    desc: "Thrilling off-road adventures across scenic trails.",
    category: "Adventure",
    duration: "2 hrs",
    level: "Beginner",
  },
  {
    id: "boating",
    name: "Boating",
    href: "https://serenityabaco.com/boating/",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/Homepage_Properties_560x570-1.jpg",
    desc: "Boat charters and island-hopping to explore nearby cays.",
    category: "Water",
    duration: "Half day",
    level: "Beginner",
  },
  {
    id: "jet-ski",
    name: "Jet Ski",
    href: "https://serenityabaco.com/jet-ski/",
    img: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1400&q=80",
    desc: "High-speed fun on the water — perfect for adrenaline seekers.",
    category: "Adventure",
    duration: "1 hr",
    level: "Beginner",
  },
  {
    id: "nature-tours",
    name: "Nature Tours",
    href: "https://serenityabaco.com/abaco_national_park",
    img: "https://serenityabaco.com/wp-content/uploads/2022/08/About-Us-Company-Info.jpeg",
    desc: "Guided nature tours to learn about local flora and fauna.",
    category: "Nature",
    duration: "2–3 hrs",
    level: "Beginner",
  },
  {
    id: "blue-holes",
    name: "Blue Holes Of Abaco",
    href: "https://serenityabaco.com/blue-holes-of-abaco/",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
    desc: "Unique sinkhole formations — great for exploration and photos.",
    category: "Nature",
    duration: "Half day",
    level: "Beginner",
  },
  {
    id: "horseback",
    name: "Horseback Riding",
    href: "https://serenityabaco.com/horseback/",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    desc: "Scenic horseback rides along secluded beaches.",
    category: "Nature",
    duration: "1–2 hrs",
    level: "Beginner",
  },
];

const FILTERS = ["All", "Water", "Adventure", "Nature"] as const;
type Filter = (typeof FILTERS)[number];

const ActivitiesSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [filter, setFilter] = React.useState<Filter>("All");
  const [active, setActive] = React.useState<Activity | null>(null);

  const filtered = ACTIVITIES.filter((a) => (filter === "All" ? true : a.category === filter));

  return (
    <section id="activities" className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Activities</h2>
        <p className="text-center text-gray-700 max-w-[65ch] mx-auto mb-6 leading-7">
          Our guests enjoy unforgettable experiences on land and sea. Choose from a variety of
          island adventures tailored to all skill levels.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {FILTERS.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              className={`${filter === f ? "bg-[#007bff] hover:bg-[#0056b3]" : ""} btn-lux`}
              onClick={() => setFilter(f)}
              size="sm"
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((act) => (
            <article
              key={act.id}
              className="group rounded-xl border bg-white/80 backdrop-blur card-lift shadow-sm flex flex-col overflow-hidden"
            >
              <div className="h-40 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={act.img ?? "/placeholder.svg"}
                  alt={act.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold">{act.name}</h3>
                  <Badge variant="secondary">{act.category}</Badge>
                </div>
                <p className="mt-2 text-sm text-gray-600 flex-1">{act.desc}</p>

                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  {act.duration && <span>Duration: {act.duration}</span>}
                  {act.level && <span>• Level: {act.level}</span>}
                </div>

                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline" asChild className="btn-lux">
                    <a href={act.href ?? "#"} target="_blank" rel="noreferrer">
                      Learn more
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-[#007bff] hover:bg-[#0056b3] btn-lux"
                    onClick={() => setActive(act)}
                  >
                    Plan this
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.name}</DialogTitle>
                <DialogDescription>{active.desc}</DialogDescription>
              </DialogHeader>
              <img
                src={active.img ?? "/placeholder.svg"}
                alt={active.name}
                className="w-full h-56 object-cover rounded-md"
                loading="eager"
              />
              <div className="text-sm text-gray-600 space-x-3">
                {active.duration && <span>Duration: {active.duration}</span>}
                {active.level && <span>Level: {active.level}</span>}
              </div>
              <div className="flex gap-2 justify-end">
                {active.href && (
                  <Button asChild variant="outline" className="btn-lux">
                    <a href={active.href} target="_blank" rel="noreferrer">
                      View details
                    </a>
                  </Button>
                )}
                <Button asChild className="bg-[#007bff] hover:bg-[#0056b3] btn-lux">
                  <a href="#contact">Plan this activity</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ActivitiesSection;