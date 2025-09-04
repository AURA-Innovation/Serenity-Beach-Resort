export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  if (!message?.type) {
    return res.status(400).json({ error: "Invalid payload" });
  }

  try {
    switch (message.type) {
      case "status-update": {
        console.log(`Call ${message.call?.id}: ${message.call?.status}`);
        break;
      }
      case "transcript": {
        console.log(`${message.role}: ${message.transcript}`);
        break;
      }
      case "function-call": {
        return handleFunctionCall(message, res);
      }
      default:
        console.log("Unhandled Vapi webhook message type:", message.type);
    }

    return res.status(200).json({ received: true });
  } catch (e: any) {
    console.error("Vapi webhook error:", e);
    return res.status(500).json({ error: "Webhook processing failed" });
  }
}

function handleFunctionCall(message: any, res: any) {
  const { functionCall } = message || {};
  if (!functionCall?.name) {
    return res.status(400).json({ error: "Missing functionCall name" });
  }

  switch (functionCall.name) {
    case "lookup_order": {
      const orderData = {
        orderId: functionCall.parameters?.orderId ?? "unknown",
        status: "shipped",
      };
      return res.status(200).json({ result: orderData });
    }
    default:
      return res.status(400).json({ error: "Unknown function" });
  }
}