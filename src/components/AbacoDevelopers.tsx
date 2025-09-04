"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button";
import ImageWithBlur from "@/components/ImageWithBlur";
import { buildUnsplashSrcSet } from "@/utils/img";

const AbacoDevelopers: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="abaco-developers"
      className="py-16 bg-white"
      aria-labelledby="abaco-developers-title"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 id="abaco-developers-title" className="text-3xl md:text-4xl font-bold mb-4">
              In Search of Serenity
            </h2>

            <p className="text-gray-700 mb-4">
              Trophy Property Developers is a luxury real estate development company with a passion
              for creating high-end properties that offer the ultimate in luxury and comfort. We
              specialize in exclusive gated communities and beachfront properties in the Bahamas,
              featuring top-of-the-line amenities and Santorini-inspired architecture, with a
              commitment to sustainability.
            </p>

            <p className="text-gray-700 mb-4">
              Our journey began in Montana, where we started developing high-end properties in
              breathlessly beautiful and undiscovered parts of the state. We quickly gained a
              reputation for our attention to detail, high-quality craftsmanship, and commitment to
              the guest experience.
            </p>

            <p className="text-gray-700 mb-4">
              Expanding our horizons to the Bahamas allowed us to bring that same expertise to a new
              paradise. In the Bahamas, we create exclusive gated communities and beachfront
              properties that prioritize privacy, luxury, and harmony with the natural environment.
            </p>

            <p className="text-gray-700 mb-4">
              We understand that buying a property is a significant investment — our team works
              closely with clients to find exceptional opportunities that meet their expectations and
              long-term goals.
            </p>

            <p className="text-gray-700 italic mb-6">
              We are proud of the properties we have developed and the positive impact they have had
              on their communities. Thank you for considering us for your luxury real estate needs.
            </p>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Reciprocal Membership</h3>
              <p className="text-gray-700">
                The Ranches at Belt Creek is the first development of the Trophy Property Developer’s
                Collection. Serenity Beach Resort will offer reciprocal membership and access to this
                luxury guest ranch in Montana. The Ranches preserve and celebrate a uniquely
                American way of life — an experience that blends the nostalgia of a working ranch,
                luxury lodge comforts, peaceful creekside moments, and world-class outdoor adventure.
              </p>
              <p className="text-gray-700">
                If you seek liberation from ordinary life, treasure family and legacy, and want to be
                immersed in nature’s beauty, this luxury ranch destination awaits.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-[#007bff] hover:bg-[#0056b3]">
                  <a href="#contact">Enquire About Membership</a>
                </Button>

                <Button asChild variant="outline">
                  <a href="https://serenityabaco.com/bahamas-property-for-sale/" target="_blank" rel="noreferrer">
                    View Bahamas Properties
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden glass-panel">
            <ImageWithBlur
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
              alt="Luxury beachfront development with modern architecture and pristine coastline"
              srcSet={buildUnsplashSrcSet("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-cover"
              containerClassName="w-full h-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbacoDevelopers;