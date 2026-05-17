const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map();

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed" });
  }

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  const now = Date.now();
  const record = hits.get(ip) || { count: 0, resetAt: now + WINDOW_MS };

  if (now > record.resetAt) {
    record.count = 0;
    record.resetAt = now + WINDOW_MS;
  }

  record.count += 1;
  hits.set(ip, record);

  if (record.count > MAX_REQUESTS) {
    return json(res, 429, {
      error: "Too many requests. Please try again later.",
    });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return json(res, 500, { error: "Server webhook is not configured." });
  }

  const body = req.body || {};

  if (body.website) {
    return json(res, 200, { ok: true });
  }

  const required = ["fullName", "email", "currentChallenge", "message"];

  for (const field of required) {
    if (!body[field] || String(body[field]).trim().length < 2) {
      return json(res, 400, { error: `Missing required field: ${field}` });
    }
  }

  if (String(body.message).length < 10 || String(body.message).length > 2000) {
    return json(res, 400, {
      error: "Message must be between 10 and 2000 characters.",
    });
  }

  const payload = {
    ...body,
    source: "MikeOps.pro",
    submittedAt: new Date().toISOString(),
    ip,
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return json(res, 502, { error: "Automation backend failed." });
    }

    return json(res, 200, { ok: true });
  } catch {
    return json(res, 500, { error: "Submission failed." });
  }
};
