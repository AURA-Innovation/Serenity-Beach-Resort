"use client";

import { useInView } from "@/hooks/useInView";

const ResortIntro = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id="resort" className="py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          The Resort
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-center">
          A tranquil escape on Abaco in the Bahamas. Enjoy luxurious guest rooms with all the
          amenities, an oceanfront pool, and lush garden areas — all curated with warm Caribbean
          hospitality.
        </p>
      </div>
    </section>
  );
};

export default ResortIntro;