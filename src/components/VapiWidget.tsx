"use client";

import React from "react";
import Vapi from "@vapi-ai/web";
import { Button } from "@/components/ui/button";
import { Mic, PhoneOff } from "lucide-react";
import { toast } from "sonner";

type TranscriptItem = { role: string; text: string };

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
}

const DotPulse = () => (
  <span aria-hidden="true" className="inline-flex ml-2 space-x-1">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-white/90 animate-bounce"
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </span>
);

const VapiWidget: React.FC<VapiWidgetProps> = ({ apiKey, assistantId }) => {
  const [vapi, setVapi] = React.useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = React.useState(false);
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [isConnecting, setIsConnecting] = React.useState(false);
  const [transcript, setTranscript] = React.useState<TranscriptItem[]>([]);

  React.useEffect(() => {
    const v = new Vapi(apiKey);
    setVapi(v);

    v.on("call-start", () => {
      setIsConnecting(false);
      setIsConnected(true);
      setIsSpeaking(false);
    });

    v.on("call-end", () => {
      setIsConnected(false);
      setIsSpeaking(false);
      setIsConnecting(false);
    });

    v.on("speech-start", () => setIsSpeaking(true));
    v.on("speech-end", () => setIsSpeaking(false));

    v.on("message", (message: any) => {
      if (message?.type === "transcript") {
        setTranscript((prev) => [
          ...prev,
          { role: message.role, text: message.transcript },
        ]);
      }
    });

    v.on("error", (error: unknown) => {
      console.error("Vapi error:", error);
      setIsConnecting(false);
      toast.error("Voice assistant error. Please try again.");
    });

    return () => {
      v.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    if (!vapi) return;
    setTranscript([]);
    setIsConnecting(true);
    vapi.start(assistantId);
  };

  const endCall = () => {
    if (!vapi) return;
    vapi.stop();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isConnected ? (
        <Button
          onClick={startCall}
          disabled={isConnecting}
          className={`rounded-full shadow-lg px-5 h-12 transition-colors ${
            isConnecting
              ? "bg-purple-600 hover:bg-purple-600 cursor-not-allowed opacity-95"
              : "bg-[#007bff] hover:bg-[#0056b3]"
          }`}
          aria-live="polite"
        >
          {isConnecting ? (
            <span className="inline-flex items-center">
              Connecting
              <DotPulse />
            </span>
          ) : (
            <span className="inline-flex items-center">
              <Mic className="h-5 w-5 mr-2" />
              Talk to Assistant
            </span>
          )}
        </Button>
      ) : (
        <div className="flex flex-col items-stretch">
          <Button
            disabled
            className={`rounded-full shadow-lg px-5 h-12 justify-center ${
              isSpeaking
                ? "bg-emerald-600 animate-pulse"
                : "bg-emerald-600"
            } hover:bg-emerald-600`}
            aria-live="polite"
          >
            Connected!
          </Button>
          <Button
            onClick={endCall}
            variant="destructive"
            className="mt-2 rounded-full shadow px-5 h-10 justify-center"
          >
            <PhoneOff className="h-4 w-4 mr-2" />
            End Call
          </Button>
        </div>
      )}
    </div>
  );
};

export default VapiWidget;