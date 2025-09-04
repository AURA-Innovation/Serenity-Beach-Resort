import { VapiClient } from "@vapi-ai/server-sdk";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.VAPI_API_KEY;
  if (!token) {
    return res.status(500).json({ error: "Missing VAPI_API_KEY environment variable" });
  }

  const { assistantId, phoneNumberId, prospects, metadata, rateLimitMs = 0 } = req.body || {};

  if (!assistantId || !phoneNumberId || !Array.isArray(prospects)) {
    return res.status(400).json({
      error: "Missing required fields: assistantId, phoneNumberId, and prospects[]",
    });
  }

  const vapi = new VapiClient({ token });

  try {
    const created: any[] = [];
    for (const p of prospects) {
      const customer = typeof p === "string" ? { number: p } : p;

      // Build payload as any to avoid TS mismatch on metadata.
      const payload: any = {
        assistantId,
        phoneNumberId,
        customer,
      };

      // Keep your campaign tag; attach metadata at runtime.
      const baseMeta = { campaign: "bulk_campaign" as const };
      if (metadata && typeof metadata === "object") {
        payload.metadata = { ...baseMeta, ...metadata };
      } else {
        payload.metadata = baseMeta;
      }

      const call = await vapi.calls.create(payload);
      created.push(call);

      if (rateLimitMs) {
        // eslint-disable-next-line no-await-in-loop
        await delay(Math.min(2000, rateLimitMs));
      }
    }
    return res.status(200).json({ count: created.length, calls: created });
  } catch (e: any) {
    console.error("Vapi bulk campaign error:", e?.response?.data || e);
    return res.status(500).json({ error: "Bulk campaign failed", details: e?.message });
  }
}