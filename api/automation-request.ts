export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      stage: 'method_check',
      message: 'Method not allowed',
    });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(500).json({
      success: false,
      stage: 'env_check',
      message: 'N8N_WEBHOOK_URL is missing in Vercel environment variables.',
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body ?? {}),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    return res.status(response.status).json({
      success: response.ok,
      stage: 'n8n_response',
      n8nStatus: response.status,
      n8nResponse: data,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      stage: 'proxy_fetch_failed',
      message: error?.message || 'Unknown proxy error',
      errorName: error?.name || null,
    });
  }
}
