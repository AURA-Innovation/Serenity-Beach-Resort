"use client";

import React from "react";

const DotPulse: React.FC<{ dotClassName?: string }> = ({ dotClassName }) => (
  <span aria-hidden="true" className="inline-flex ml-2 space-x-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className={`w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce ${dotClassName || ""}`}
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </span>
);

export default DotPulse;