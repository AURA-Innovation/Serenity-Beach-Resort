"use client";

import { useInView } from "@/hooks/useInView";

const ACTIVITIES = [
  "Kayaking",
  "Kiteboarding",
  "Bone fishing",
  "Sailing",
  "Scuba diving",
  "Caving",
  "Snorkelling",
  "Hobie Cats",
  "Deep-sea fishing",
];

const ActivitiesSection = () => {
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
        <p className="text-center text-gray-700 max-w-3xl mx-auto">
          Our guests enjoy unforgettable experiences on land and sea. Choose from a variety of
          island adventures tailored to all skill levels.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {ACTIVITIES.map((act) => (
            <li
              key={act}
              className="rounded-md border bg-white px-4 py-3 text-gray-800"
            >
              {act}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActivitiesSection;