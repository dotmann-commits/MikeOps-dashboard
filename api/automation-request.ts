import type { IncomingHttpHeaders } from "node:http";
import { z } from "zod";

// Minimal shapes of the Vercel request and response we use. Defined here so
// the function typechecks without pulling @vercel/node into the project.
interface ApiRequest {
  method?: string;
  headers: IncomingHttpHeaders;
  body: unknown;
  socket: { remoteAddress?: string };
}

interface ApiResponse {
  status(code: number): ApiResponse;
  json(body: unknown): ApiResponse;
  setHeader(name: string, value: string): ApiResponse;
}

const RATE_LIMIT_WINDOW_MS = 30_000;
const UPSTREAM_TIMEOUT_MS = 10_000;
const SHORT_TEXT_MAX = 200;
const LONG_TEXT_MAX = 5_000;

const GENERIC_ERROR = "We could not send your request. Please try again shortly.";

const automationRequestSchema = z.object({
  fullName: z.string().trim().min(1).max(SHORT_TEXT_MAX),
  email: z.string().trim().email().max(SHORT_TEXT_MAX),
  company: z.string().trim().max(SHORT_TEXT_MAX).optional().default(""),
  currentChallenge: z.string().trim().min(1).max(LONG_TEXT_MAX),
  currentTools: z.string().trim().max(LONG_TEXT_MAX).optional().default(""),
  automationType: z.enum([
    "ai-automation-audit",
    "ai-assistant",
    "workflow-automation",
    "crm",
    "lead",
    "custom",
  ]),
  priority: z.enum(["low", "medium", "high"]),
  message: z.string().trim().max(LONG_TEXT_MAX).optional().default(""),
});

// Best effort only. Each serverless instance has its own memory, so this map
// does not share state across instances or survive cold starts.
const lastRequestByIp = new Map<string, number>();

function getClientIp(req: ApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  const first = Array.isArray(forwarded) ? forwarded[0] : forwarded;

  return first?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    return res.setHeader("Allow", "POST").status(405).json({
      error: "Method not allowed",
    });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("automation-request: N8N_WEBHOOK_URL is not set");
    return res.status(500).json({ error: GENERIC_ERROR });
  }

  const ip = getClientIp(req);
  const now = Date.now();
  const last = lastRequestByIp.get(ip);

  if (last && now - last < RATE_LIMIT_WINDOW_MS) {
    return res.status(429).json({
      error: "Too many requests. Please wait 30 seconds and try again.",
    });
  }

  const parsed = automationRequestSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Please check the form and try again.",
      fields: Object.keys(parsed.error.flatten().fieldErrors),
    });
  }

  lastRequestByIp.set(ip, now);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...parsed.data,
        submittedAt: new Date().toISOString(),
        source: "MikeOps Website",
        route: "secure-vercel-api",
      }),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });

    if (!response.ok) {
      const details = await response.text();
      console.error(
        `automation-request: n8n webhook returned ${response.status}`,
        details.slice(0, 1_000)
      );
      return res.status(502).json({ error: GENERIC_ERROR });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("automation-request: webhook call failed", error);
    return res.status(502).json({ error: GENERIC_ERROR });
  }
}
