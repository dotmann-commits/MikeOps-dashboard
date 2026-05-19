import type { VercelRequest, VercelResponse } from "@vercel/node";

const requests = new Map<string, number>();

export default async function handler(
req: VercelRequest,
res: VercelResponse
){

if(req.method !== "POST"){
return res.status(405).json({
error:"Method not allowed"
});
}

const ip =
(req.headers["x-forwarded-for"] as string) ||
req.socket.remoteAddress ||
"unknown";

const now = Date.now();
const last = requests.get(ip);

if(last && now-last < 30000){
return res.status(429).json({
error:"Too many requests. Wait 30 seconds."
});
}

requests.set(ip,now);

const response = await fetch(
process.env.N8N_WEBHOOK_URL!,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(req.body)
}
);

const data=await response.text();

return res.status(200).json({
success:true,
data
});
}
