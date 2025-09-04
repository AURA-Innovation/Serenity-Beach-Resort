"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mic, PhoneOff } from "lucide-react";
import DotPulse from "@/components/common/DotPulse";
import { useVapi } from "@/components/vapi/VapiProvider";

const BigCallButton: React.FC = () => {
  const { isConnected, isConnecting, isSpeaking, startCall, endCall } = useVapi();

  return (
    <div className="w-full flex flex-col items-center text-center">
      {!isConnected ? (
        <Button
          onClick={startCall}
          disabled={isConnecting}
          className={`rounded-full shadow-xl px-8 h-16 text-lg font-semibold transition-all ${
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
              <Mic className="h-6 w-6 mr-3" />
              Talk to Assistant
            </span>
          )}
        </Button>
      ) : (
        <div className="flex flex-col items-center">
          <Button
            disabled
            className={`rounded-full shadow-xl px-8 h-16 text-lg font-semibold ${
              isSpeaking ? "bg-emerald-600 animate-pulse" : "bg-emerald-600"
            } hover:bg-emerald-600`}
            aria-live="polite"
          >
            Connected!
          </Button>
          <Button
            onClick={endCall}
            variant="destructive"
            className="mt-3 rounded-full shadow px-6 h-11 text-base"
          >
            <PhoneOff className="h-5 w-5 mr-2" />
            End Call
          </Button>
        </div>
      )}
      <p className="mt-3 text-muted-foreground text-sm max-w-xl">
        Start a live conversation with our AI assistant to plan your perfect stay.
      </p>
    </div>
  );
};

export default BigCallButton;