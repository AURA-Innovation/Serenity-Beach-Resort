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

  const { assistantId, number } = req.body || {};
  if (!assistantId || !number) {
    return res.status(400).json({ error: "assistantId and number are required" });
  }

  const vapi = new VapiClient({ token });

  try {
    const call = await vapi.calls.create({
      assistantId,
      customer: { number },
    });
    return res.status(200).json(call);
  } catch (e: any) {
    console.error("Vapi test call error:", e?.response?.data || e);
    return res.status(500).json({ error: "Failed to create test call", details: e?.message });
  }
}