"use client";

import React from "react";
import { Shield, Sparkles, Waves, Sun } from "lucide-react";

const Metric = ({ label, to, suffix = "" }: { label: string; to: number; suffix?: string }) => {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setVal(Math.round(to * t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);

  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{val}{suffix}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

const WhyLoveStrip: React.FC = () => {
  return (
    <section aria-labelledby="why-love" className="bg-white py-10 border-b">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 id="why-love" className="sr-only">Why guests love Serenity</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <Waves className="h-6 w-6 text-[#007bff]" aria-hidden="true" />
            <span className="text-gray-800">Private beaches and coves</span>
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-[#007bff]" aria-hidden="true" />
            <span className="text-gray-800">Curated activities</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-[#007bff]" aria-hidden="true" />
            <span className="text-gray-800">Safe and family friendly</span>
          </div>
          <div className="flex items-center gap-3">
            <Sun className="h-6 w-6 text-[#007bff]" aria-hidden="true" />
            <span className="text-gray-800">Year-round sunshine</span>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <Metric label="Sunny days" to={300} suffix="+" />
          <Metric label="Curated activities" to={12} />
          <Metric label="Property types" to={3} />
        </div>
      </div>
    </section>
  );
};

export default WhyLoveStrip;