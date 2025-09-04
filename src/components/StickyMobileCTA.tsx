"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useVapi } from "@/components/vapi/VapiProvider";

const StickyMobileCTA: React.FC = () => {
  const { isConnecting, isConnected, startCall } = useVapi();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
      <div className="mx-auto max-w-[1200px] px-4 pb-4">
        <div className="rounded-2xl bg-white/95 backdrop-blur shadow-lg border p-2">
          <div className="grid grid-cols-2 gap-2">
            <Button
              className="bg-[#007bff] hover:bg-[#0056b3] btn-lux"
              onClick={() => startCall()}
              disabled={isConnecting || isConnected}
            >
              {isConnected ? "Connected" : isConnecting ? "Connecting…" : "Talk to Concierge"}
            </Button>
            <Button asChild variant="outline" className="btn-lux">
              <a href="#contact">Book Now</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;