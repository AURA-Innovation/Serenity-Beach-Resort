import { VapiClient } from "@vapi-ai/server-sdk";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.VAPI_API_KEY;
  if (!token) {
    return res.status(500).json({ error: "Missing VAPI_API_KEY environment variable" });
  }

  const vapi = new VapiClient({ token });

  const {
    name = "Sales Assistant",
    firstMessage = "Hi! I'm calling about your interest in our offerings.",
    model = {
      provider: "openai",
      model: "gpt-4o",
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: "You are a friendly representative. Keep responses under 30 words.",
        },
      ],
    },
    voice = {
      provider: "11labs",
      voiceId: "21m00Tcm4TlvDq8ikWAM",
    },
  } = req.body || {};

  try {
    const assistant = await vapi.assistants.create({
      name,
      firstMessage,
      model,
      voice,
    });
    return res.status(200).json(assistant);
  } catch (e: any) {
    console.error("Vapi create assistant error:", e?.response?.data || e);
    return res.status(500).json({ error: "Failed to create assistant", details: e?.message });
  }
}