"use client";

import { useInView } from "@/hooks/useInView";

const CTALink = ({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) => (
  <a
    href={href}
    className="flex-1 min-w-[240px] p-4 rounded-md border bg-white hover:bg-gray-50 transition-colors"
  >
    <strong className="block text-lg text-gray-900">{title}</strong>
    <span className="text-gray-600">{desc}</span>
  </a>
);

const AboutSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="bg-gray-50 py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Serenity Beach in the Bahamas Is the Ultimate Destination for Your Perfect Beach Vacation
        </h2>
        <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
          <p className="text-lg">Create Memories You’ll Remember Forever:</p>
          <p>
            A palm-lined beach with vibrant beach umbrellas. The crashing of the waves and the
            chirping of the birds. A warm breeze, and the aroma of salt in the air. It’s essential
            to hold onto those memories.
          </p>
          <p>
            Serenity Beach promises personalized service, excellent amenities, and a warm Caribbean
            welcome that’ll have you coming back for more!
          </p>
          <p className="italic text-gray-600">
            Please explore our website for all the details on our packages, or call us for a free
            consultation!
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <CTALink
            title="Properties"
            desc="Discover our list of luxury properties..."
            href="#properties"
          />
          <CTALink
            title="Book a Stay"
            desc="Not all vacations are equally rewarding..."
            href="#booking"
          />
          <CTALink
            title="Activities"
            desc="Our guests enjoy the activities like no other..."
            href="#activities"
          />
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-4 text-gray-700">
          <h3 className="text-2xl font-semibold">It’s Time to Find Your Serenity:</h3>
          <p>
            Serenity Beach Resort is a tranquil escape located on Abaco in the Bahamas. With modern
            comforts and Caribbean hospitality, we offer you a chance to find your island paradise.
          </p>
          <p>
            We offer luxurious guest rooms with all the amenities, an oceanfront pool, garden area,
            and more — perfect for leisure travelers and those looking for a lifetime destination.
          </p>
          <p className="italic text-gray-600">Start planning your dream vacation today!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;