"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Mic, PhoneOff } from "lucide-react";
import DotPulse from "@/components/common/DotPulse";
import { useVapi } from "@/components/vapi/VapiProvider";
import WaveformBars from "@/components/common/WaveformBars";

const AVATAR =
  "https://serenityabaco.com/wp-content/uploads/2022/05/logo-1.png";

const VapiWidget: React.FC = () => {
  const { isConnected, isConnecting, isSpeaking, startCall, endCall, transcript } = useVapi();

  const recent = transcript.slice(-2);
  const baseClass =
    isConnected
      ? "fixed z-50 right-6"
      : "fixed z-50 right-6 hidden md:block"; // hide when idle on small screens

  return (
    <div
      className={baseClass}
      style={{ bottom: `calc(1.5rem + env(safe-area-inset-bottom))` }}
    >
      {!isConnected ? (
        <Button
          onClick={startCall}
          disabled={isConnecting}
          className={`rounded-full shadow-lg px-5 h-12 transition-colors btn-lux ${
            isConnecting
              ? "bg-purple-600 hover:bg-purple-600 cursor-not-allowed opacity-95"
              : "bg-[#007bff] hover:bg-[#0056b3]"
          }`}
          aria-live="polite"
          title="Talk to Serenity Concierge"
        >
          {isConnecting ? (
            <span className="inline-flex items-center">
              Connecting
              <DotPulse />
            </span>
          ) : (
            <span className="inline-flex items-center">
              <Mic className="h-5 w-5 mr-2" />
              Talk to Concierge
            </span>
          )}
        </Button>
      ) : (
        <div className="rounded-2xl bg-emerald-600 text-white shadow-xl p-3 w-[280px]">
          <div className="flex items-center gap-3">
            <img
              src={AVATAR}
              alt=""
              aria-hidden="true"
              className="h-8 w-8 rounded-full bg-white/90 p-1"
            />
            <div className="flex-1">
              <div className="font-semibold leading-5">Serenity Concierge</div>
              <div className="text-xs opacity-90">
                {isSpeaking ? "Speaking…" : "Connected"}
              </div>
            </div>
            <WaveformBars className="h-6" barClassName={`${isSpeaking ? "" : "opacity-50"}`} />
          </div>

          {recent.length > 0 && (
            <div className="mt-3 space-y-2">
              {recent.map((m, i) => {
                const isAssistant = m.role === "assistant";
                return (
                  <div
                    key={i}
                    className={`text-xs rounded-xl px-3 py-2 ${
                      isAssistant ? "bg-white/15 border border-white/20" : "bg-white/10 border border-white/10"
                    }`}
                  >
                    <span className="opacity-80">{m.text}</span>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-3 flex gap-2">
            <Button
              onClick={endCall}
              variant="destructive"
              className="rounded-full shadow px-5 h-10 justify-center flex-1"
            >
              <PhoneOff className="h-4 w-4 mr-2" />
              End Call
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VapiWidget;