"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

type HeroChatPanelProps = {
  className?: string;
  onSend?: (message: string) => void;
};

const HeroChatPanel: React.FC<HeroChatPanelProps> = ({ className = "", onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    onSend ? onSend(trimmed) : console.log("Sending:", trimmed);
    setMessage("");
  };

  return (
    <div
      className={[
        "pointer-events-auto z-50",
        // Full width and scalable typography
        "glass-panel hover-shimmer rounded-2xl p-4 md:p-5 shadow-lg",
        "w-full max-w-none self-stretch",
        // Scales with zoom and respects root font size
        "text-[clamp(0.95rem,1vw+0.85rem,1.1rem)] leading-normal",
        className,
      ].join(" ")}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="text-inherit min-h-[2.4em] h-auto px-[0.9em] py-[0.5em]"
            onClick={() => setMessage("Show me pricing")}
          >
            Pricing
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="text-inherit min-h-[2.4em] h-auto px-[0.9em] py-[0.5em]"
            onClick={() => setMessage("Check availability for next weekend")}
          >
            Availability
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="text-inherit min-h-[2.4em] h-auto px-[0.9em] py-[0.5em]"
            onClick={() => setMessage("What amenities are included?")}
          >
            Amenities
          </Button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything about the ranch..."
            className="flex-1 min-w-0 w-full text-inherit h-auto min-h-[2.75em] px-[0.9em] py-[0.6em]"
          />
          <Button
            type="submit"
            className="shrink-0 text-inherit min-h-[2.75em] h-auto px-[0.95em] py-[0.6em]"
          >
            <Send className="h-[1em] w-[1em]" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HeroChatPanel;