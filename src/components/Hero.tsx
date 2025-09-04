"use client";

import React from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import HeroSection from "@/components/HeroSection";

type QuickActionProps = {
  label: string;
  onClick: () => void;
};

const QuickActionButton: React.FC<QuickActionProps> = ({ label, onClick }) => (
  <Button
    type="button"
    variant="secondary"
    size="sm"
    onClick={onClick}
    className="h-7 text-xs rounded-lg bg-white/15 hover:bg-white/25 text-white/90 border border-white/20"
    aria-label={label}
  >
    {label}
  </Button>
);

type ChatInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
};

const ChatInputField: React.FC<ChatInputFieldProps> = ({ value, onChange, inputRef }) => (
  <div className="w-full">
    <Label htmlFor="hero-chat-input" className="text-white/90 mb-1 block text-sm">
      Ask Anything About The Ranch
    </Label>
    <Input
      id="hero-chat-input"
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Ask anything about the ranch…"
      aria-label="Ask Anything About The Ranch"
      className="bg-white/95 focus:bg-white text-gray-900 placeholder:text-gray-500"
    />
  </div>
);

type SendButtonProps = {
  disabled: boolean;
  onClick: () => void;
};

const SendButton: React.FC<SendButtonProps> = ({ disabled, onClick }) => (
  <Button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="bg-[#007bff] hover:bg-[#0056b3] text-white"
    aria-label="Send message"
  >
    <Send className="h-4 w-4 mr-2" />
    Send
  </Button>
);

const ChatPanel: React.FC = () => {
  const { toast } = useToast();
  const [message, setMessage] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleQuick = (topic: "Pricing" | "Availability" | "Amenities") => {
    const preset = `Tell me about ${topic.toLowerCase()}`;
    setMessage(preset);
    inputRef.current?.focus();
  };

  const handleSend = () => {
    if (!message.trim()) return;
    toast({ title: "Agent Not Connected!" });
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
        <ChatInputField value={message} onChange={setMessage} inputRef={inputRef} />
        <SendButton onClick={handleSend} disabled={!message.trim()} />
      </form>

      <div aria-live="polite" className="sr-only">
        Chat UI is interactive. No agent connected.
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative">
      <HeroSection />
      <div className="absolute bottom-6 right-6 left-6 md:left-auto z-50 flex justify-center md:justify-end">
        <div className="w-full max-w-md">
          <ChatPanel />
        </div>
      </div>
    </section>
  );
};

export default Hero;