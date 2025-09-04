"use client";

import React from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Props = {
  className?: string;
};

const HeroChatPanel: React.FC<Props> = ({ className }) => {
  const [value, setValue] = React.useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    toast.error("Agent Not Connected!");
    setValue("");
  };

  const setQuick = (q: string) => setValue(q);

  return (
    <div
      className={[
        "pointer-events-auto", // ensure this panel can be clicked/focused
        "glass-panel hover-shimmer rounded-2xl p-4 md:p-5 shadow-lg w-full max-w-md",
        "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        "bg-white/10 border border-white/25",
        className ?? "",
      ].join(" ")}
      role="complementary"
      aria-label="Ask about the ranch"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/25">
          <MessageCircle className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-white/95 font-semibold">Ask about the Ranch</h3>
      </div>

      <p className="text-white/80 text-sm mb-3">
        Type a question about availability, amenities, pricing, or anything else.
      </p>

      <form onSubmit={onSubmit} className="flex items-center gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Ask anything about the ranch..."
          className="bg-white/90 focus:bg-white text-gray-900 placeholder:text-gray-500"
          aria-label="Chat input"
        />
        <Button
          type="submit"
          className="bg-[#007bff] hover:bg-[#0056b3] text-white"
          disabled={!value.trim()}
        >
          <Send className="h-4 w-4 mr-2" />
          <span>Send</span>
        </Button>
      </form>

      <div className="mt-3 flex flex-wrap gap-2">
        {["Pricing", "Availability", "Amenities"].map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => setQuick(`Tell me about ${q.toLowerCase()}`)}
            className="text-xs px-2 py-1 rounded-lg bg-white/15 hover:bg-white/25 text-white/90 border border-white/20 transition"
          >
            {q}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="sr-only">
        Chat UI ready. No AI connected yet.
      </div>
    </div>
  );
};

export default HeroChatPanel;