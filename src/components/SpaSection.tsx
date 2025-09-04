"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";

const TREATMENTS = [
  {
    name: "Signature Massage",
    desc: "A full-body, deeply relaxing treatment using locally inspired aromatherapy.",
  },
  {
    name: "Revitalizing Facial",
    desc: "Personalized facial to restore glow and hydration.",
  },
  {
    name: "Couples' Retreat",
    desc: "Shared treatment suite for romantic or friend getaways.",
  },
  {
    name: "Wellness Consultations",
    desc: "Guidance on healthy living, nutrition, and recovery routines.",
  },
  {
    name: "Express Treatments",
    desc: "Short massages or facials for guests on-the-go.",
  },
];

const SpaSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="spa" aria-labelledby="spa-title" className="py-16 bg-gray-50">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 id="spa-title" className="text-3xl md:text-4xl font-bold mb-4">
              Serenity Beach Spa
            </h2>

            <p className="text-gray-700 mb-4">
              Our spa is designed for complete relaxation and renewal. Whether you want a therapeutic
              massage, a refreshing facial, or practical wellness guidance, our professional therapists
              will tailor the experience to your needs.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">What We Offer</h3>
            <ul className="grid gap-3 sm:grid-cols-2 mt-3">
              {TREATMENTS.map((t) => (
                <li key={t.name} className="rounded-md border bg-white p-4">
                  <strong className="block text-gray-900">{t.name}</strong>
                  <span className="text-sm text-gray-600">{t.desc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-gray-700">
              <p className="mb-3">
                We also provide childcare services during treatments so you can fully unwind. Appointments
                are recommended — you can book directly with our team or inquire for special packages.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
                  <a href="#contact">Book a Treatment</a>
                </Button>

                <Button asChild variant="outline">
                  <a href="mailto:Mark@SerenityAbaco.com?subject=Spa%20Inquiry" target="_blank" rel="noreferrer">
                    Email the Spa Team
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury spa treatment room with ocean views and serene tropical atmosphere"
              className="w-full h-[360px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 text-gray-700 max-w-3xl">
          <h4 className="text-lg font-semibold mb-2">A Holistic Experience</h4>
          <p>
            Each treatment is crafted to restore balance — combining expert technique, calming
            environments, and premium products. Whether you need a moment of quiet or a multi-day
            wellness program, Serenity Beach Spa adapts to your rhythm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpaSection;