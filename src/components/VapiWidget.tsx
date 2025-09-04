"use client";

import React from "react";
import Vapi from "@vapi-ai/web";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic, PhoneOff, Waves } from "lucide-react";
import { toast } from "sonner";

type TranscriptItem = { role: string; text: string };

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
}

const VapiWidget: React.FC<VapiWidgetProps> = ({ apiKey, assistantId }) => {
  const [vapi, setVapi] = React.useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = React.useState(false);
  const [isSpeaking, setIsSpeaking] = React.useState(false);
  const [transcript, setTranscript] = React.useState<TranscriptItem[]>([]);

  React.useEffect(() => {
    const v = new Vapi(apiKey);
    setVapi(v);

    v.on("call-start", () => {
      setIsConnected(true);
      setIsSpeaking(false);
    });

    v.on("call-end", () => {
      setIsConnected(false);
      setIsSpeaking(false);
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
      toast.error("Voice assistant error. Please try again.");
    });

    return () => {
      v.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    if (!vapi) return;
    setTranscript([]);
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
          className="rounded-full shadow-lg bg-[#007bff] hover:bg-[#0056b3] px-5 h-12"
        >
          <Mic className="h-5 w-5 mr-2" />
          Talk to Assistant
        </Button>
      ) : (
        <Card className="w-[340px] shadow-xl">
          <CardHeader className="py-3">
            <CardTitle className="flex items-center justify-between text-base">
              <span className="flex items-center gap-2">
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${
                    isSpeaking ? "bg-red-500 animate-pulse" : "bg-emerald-500"
                  }`}
                  aria-label={isSpeaking ? "Assistant speaking" : "Connected"}
                />
                {isSpeaking ? "Assistant Speaking…" : "Listening…"}
              </span>
              <Button
                variant="destructive"
                size="sm"
                onClick={endCall}
                className="h-8"
              >
                <PhoneOff className="h-4 w-4 mr-1" />
                End
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="max-h-56 overflow-y-auto rounded-md border bg-gray-50 p-2">
              {transcript.length === 0 ? (
                <div className="flex items-center justify-center text-gray-500 text-sm py-6">
                  <Waves className="h-4 w-4 mr-2" />
                  Conversation will appear here…
                </div>
              ) : (
                <div className="space-y-2">
                  {transcript.map((msg, i) => (
                    <div
                      key={`${i}-${msg.role}-${msg.text.slice(0, 8)}`}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span
                        className={`px-3 py-2 rounded-2xl text-sm max-w-[80%] ${
                          msg.role === "user"
                            ? "bg-[#007bff] text-white"
                            : "bg-gray-800 text-white"
                        }`}
                      >
                        {msg.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default VapiWidget;