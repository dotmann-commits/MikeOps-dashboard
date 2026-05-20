import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(
req:VercelRequest,
res:VercelResponse
){
return res.status(200).json({
hasN8N: !!process.env.N8N_WEBHOOK_URL,
viteExists: !!process.env.VITE_N8N_WEBHOOK_URL,
allKeys:Object.keys(process.env)
.filter(k=>k.includes("N8N"))
});
}
