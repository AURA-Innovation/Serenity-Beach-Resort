"use client";

import React from "react";

type Props = {
  className?: string;
  barClassName?: string;
};

const WaveformBars: React.FC<Props> = ({ className = "", barClassName = "" }) => {
  const bars = new Array(5).fill(0);
  return (
    <div className={`flex items-end gap-1 ${className}`} aria-hidden="true">
      {bars.map((_, i) => (
        <span
          key={i}
          className={`w-1.5 rounded-full bg-white/90 ${barClassName}`}
          style={{
            height: `${8 + (i % 3) * 6}px`,
            animation: `wf 1.2s ease-in-out ${i * 0.12}s infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes wf {
          0%, 100% { transform: scaleY(0.9); opacity: 0.9; }
          50% { transform: scaleY(1.6); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default WaveformBars;