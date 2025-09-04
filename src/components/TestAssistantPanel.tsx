"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Phone } from "lucide-react";
import { ENV } from "@/environment";

const TestAssistantPanel: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const startTestCall = async () => {
    setLoading(true);
    const id = toast.loading("Starting test call…");
    try {
      const res = await fetch("/api/vapi/test-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          assistantId: ENV.YOUR_ASSISTANT_ID,
          number: ENV.YOUR_VAPI_AGENT_NUMBER,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Request failed");
      }

      const call = await res.json();
      toast.success(`Test call created: ${call?.id ?? "OK"}`, { id });
    } catch (e: any) {
      console.error(e);
      toast.error(e?.message || "Failed to create test call", { id });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-[1200px] px-4">
        <Card className="bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Test Your Voice Assistant</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <p className="text-sm text-gray-600">
              Trigger a test call to your saved number ({ENV.YOUR_VAPI_AGENT_NUMBER}). This uses your assistant ID {ENV.YOUR_ASSISTANT_ID}.
            </p>
            <Button
              onClick={startTestCall}
              disabled={loading}
              className="bg-[#007bff] hover:bg-[#0056b3]"
            >
              <Phone className="h-4 w-4 mr-2" />
              {loading ? "Calling…" : "Start Test Call"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestAssistantPanel;