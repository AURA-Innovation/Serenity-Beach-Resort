"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import QuickActionButton from "./hero-chat/QuickActionButton";
import ChatInputField from "./hero-chat/ChatInputField";
import SendButton from "./hero-chat/SendButton";

type Props = {
  className?: string;
};

const HeroChatPanel: React.FC<Props> = ({ className }) => {
  const [message, setMessage] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleQuick = (topic: "Pricing" | "Availability" | "Amenities") => {
    const preset = `Tell me about ${topic.toLowerCase()}`;
    setMessage(preset);
    inputRef.current?.focus();
  };

  const handleSend = () => {
    if (!message.trim()) return;
    toast.error("Agent Not Connected!");
    setMessage("");
    inputRef.current?.focus();
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div
      className={[
        "pointer-events-auto z-50",
        "glass-panel hover-shimmer rounded-2xl p-4 md:p-5 shadow-lg w-full max-w-md",
        "backdrop-blur supports-[backdrop-filter]:backdrop-blur",
        "bg-white/10 border border-white/25",
        className ?? "",
      ].join(" ")}
      role="region"
      aria-label="Ask about the Ranch panel"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 border border-white/25">
          <MessageCircle className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-white/95 font-semibold">Ask about the Ranch</h3>
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <QuickActionButton label="Pricing" onClick={() => handleQuick("Pricing")} />
        <QuickActionButton label="Availability" onClick={() => handleQuick("Availability")} />
        <QuickActionButton label="Amenities" onClick={() => handleQuick("Amenities")} />
      </div>

      <form onSubmit={onSubmit} className="flex items-end gap-2">
        <ChatInputField
          label="Ask Anything About The Ranch"
          placeholder="Ask anything about the ranch…"
          value={message}
          onChange={setMessage}
          inputRef={inputRef}
          className="flex-1"
        />
        <SendButton onClick={handleSend} disabled={!message.trim()} />
      </form>

      <div aria-live="polite" className="sr-only">
        Chat UI is interactive. No agent connected.
      </div>
    </div>
  );
};

export default HeroChatPanel;