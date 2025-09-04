"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useVapi } from "@/components/vapi/VapiProvider";
import { CONTACT } from "@/config/contact";

const StickyMobileCTA: React.FC = () => {
  const { isConnecting, isConnected, startCall } = useVapi();

  // Hide when connected (the VapiWidget will take over), show otherwise on small screens
  if (isConnected) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 md:hidden" style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}>
      <div className="mx-auto max-w-[1200px] px-4 pb-4">
        <div className="rounded-2xl bg-white/95 backdrop-blur shadow-lg border p-2">
          <div className="grid grid-cols-2 gap-2">
            <Button
              className="bg-[#007bff] hover:bg-[#0056b3] btn-lux"
              onClick={() => startCall()}
              disabled={isConnecting}
            >
              {isConnecting ? "Connecting…" : "Talk to Concierge"}
            </Button>
            <Button asChild variant="outline" className="btn-lux">
              <a href={`tel:${CONTACT.phone}`}>Call Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;