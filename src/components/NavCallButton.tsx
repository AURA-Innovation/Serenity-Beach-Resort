"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useVapi } from "@/components/vapi/VapiProvider";
import DotPulse from "@/components/common/DotPulse";

const NavCallButton: React.FC = () => {
  const { isConnected, isConnecting, startCall } = useVapi();

  return (
    <Button
      onClick={startCall}
      disabled={isConnecting || isConnected}
      className={`h-10 px-4 rounded-full font-medium transition-colors ${
        isConnected
          ? "bg-emerald-600 hover:bg-emerald-600"
          : isConnecting
          ? "bg-purple-600 hover:bg-purple-600"
          : "bg-[#007bff] hover:bg-[#0056b3]"
      }`}
      aria-live="polite"
      title={isConnected ? "Connected" : "Talk to Assistant"}
    >
      {isConnected ? (
        <span>Connected</span>
      ) : isConnecting ? (
        <span className="inline-flex items-center">
          Connecting
          <DotPulse />
        </span>
      ) : (
        <span className="inline-flex items-center">
          <Mic className="h-4 w-4 mr-2" />
          Talk
        </span>
      )}
    </Button>
  );
};

export default NavCallButton;