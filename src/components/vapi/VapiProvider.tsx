"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import Vapi from "@vapi-ai/web";
import { toast } from "sonner";

type TranscriptItem = { role: string; text: string };

type VapiContextValue = {
  isConnected: boolean;
  isConnecting: boolean;
  isSpeaking: boolean;
  transcript: TranscriptItem[];
  startCall: () => void;
  endCall: () => void;
};

const VapiContext = createContext<VapiContextValue | null>(null);

interface VapiProviderProps {
  apiKey: string;
  assistantId: string;
  children: React.ReactNode;
}

export const VapiProvider: React.FC<VapiProviderProps> = ({ apiKey, assistantId, children }) => {
  const vapiRef = useRef<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptItem[]>([]);

  useEffect(() => {
    const v = new Vapi(apiKey);
    vapiRef.current = v;

    v.on("call-start", () => {
      setIsConnecting(false);
      setIsConnected(true);
      setIsSpeaking(false);
    });

    v.on("call-end", () => {
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
    });

    v.on("speech-start", () => setIsSpeaking(true));
    v.on("speech-end", () => setIsSpeaking(false));

    v.on("message", (message: any) => {
      if (message?.type === "transcript") {
        setTranscript((prev) => [...prev, { role: message.role, text: message.transcript }]);
      }
    });

    v.on("error", (error: unknown) => {
      console.error("Vapi error:", error);
      setIsConnecting(false);
      toast.error("Voice assistant error. Please try again.");
    });

    return () => {
      v.stop();
      vapiRef.current = null;
    };
  }, [apiKey]);

  const startCall = () => {
    if (!vapiRef.current || isConnecting || isConnected) return;
    setTranscript([]);
    setIsConnecting(true);

    // Light personalization: pass local time as a variable for greeting context
    const localTime = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      weekday: "short",
    });

    vapiRef.current.start(assistantId, {
      variableValues: { localTime },
      recordingEnabled: false,
    } as any);
  };

  const endCall = () => {
    if (!vapiRef.current) return;
    vapiRef.current.stop();
  };

  const value = useMemo(
    () => ({ isConnected, isConnecting, isSpeaking, transcript, startCall, endCall }),
    [isConnected, isConnecting, isSpeaking, transcript]
  );

  return <VapiContext.Provider value={value}>{children}</VapiContext.Provider>;
};

export const useVapi = () => {
  const ctx = useContext(VapiContext);
  if (!ctx) throw new Error("useVapi must be used within a VapiProvider");
  return ctx;
};