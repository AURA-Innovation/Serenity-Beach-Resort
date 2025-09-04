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

  const { phoneNumberId, assistantId, customer, customerNumber, metadata } = req.body || {};

  if (!phoneNumberId || !assistantId || (!customer && !customerNumber)) {
    return res.status(400).json({
      error: "Missing required fields: phoneNumberId, assistantId, and customer or customerNumber",
    });
  }

  const vapi = new VapiClient({ token });

  const customerPayload =
    typeof customer === "object" && customer
      ? customer
      : { number: String(customerNumber) };

  try {
    // Build payload as any to remain compatible with current server SDK typings.
    const payload: any = {
      phoneNumberId,
      assistantId,
      customer: customerPayload,
    };

    if (metadata && typeof metadata === "object") {
      payload.metadata = metadata;
    }

    const call = await vapi.calls.create(payload);
    return res.status(200).json(call);
  } catch (e: any) {
    console.error("Vapi create call error:", e?.response?.data || e);
    return res.status(500).json({ error: "Failed to create call", details: e?.message });
  }
}