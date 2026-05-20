import type { VercelRequest, VercelResponse } from "@vercel/node";

const requests = new Map<string, number>();

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      return res.status(500).json({
        error: "Missing N8N_WEBHOOK_URL server environment variable",
      });
    }

    const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "unknown";

    const now = Date.now();
    const last = requests.get(ip);

    if (last && now - last < 30000) {
      return res.status(429).json({
        error: "Too many requests. Wait 30 seconds.",
      });
    }

    requests.set(ip, now);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...req.body,
        submittedAt: new Date().toISOString(),
        source: "MikeOps Website",
        route: "secure-vercel-api",
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(502).json({
        error: "n8n webhook rejected the request",
        status: response.status,
        details: text,
      });
    }

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Automation request API error:", error);

    return res.status(500).json({
      error: "Server function crashed",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
