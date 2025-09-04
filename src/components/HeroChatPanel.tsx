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
        // Expanded to fill horizontally
        "glass-panel hover-shimmer rounded-2xl p-4 md:p-5 shadow-lg",
        "w-full max-w-none", // removed max-w-md constraint
        "self-stretch", // helps inside flex/grid parents
        className,
      ].join(" ")}
    >
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        {/* Quick actions (optional) */}
        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" variant="secondary" size="sm" onClick={() => setMessage("Show me pricing")}>
            Pricing
          </Button>
          <Button type="button" variant="secondary" size="sm" onClick={() => setMessage("Check availability for next weekend")}>
            Availability
          </Button>
          <Button type="button" variant="secondary" size="sm" onClick={() => setMessage("What amenities are included?")}>
            Amenities
          </Button>
        </div>

        {/* Fieldbox row: input fills all horizontal space */}
        <div className="flex items-center gap-2 w-full">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask anything about the ranch..."
            className="flex-1 min-w-0 w-full"
          />
          <Button type="submit" className="shrink-0">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HeroChatPanel;