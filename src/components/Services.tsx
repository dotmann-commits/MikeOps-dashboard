import {useState} from "react";
import {
Settings,
UserPlus,
Mail,
GitBranch,
Ticket,
Zap,
BarChart2
} from "lucide-react";

import {services} from "../data/mockData";
import ServiceModal from "./ServiceModal";

const iconMap:any={
Settings,
UserPlus,
Mail,
GitBranch,
Ticket,
Zap,
BarChart2
};

export default function Services(){

const [selected, setSelected] = useState<(typeof services)[number] | null>(null);

return(

<>
<section
id="services"
className="relative py-24 bg-slate-950 text-white overflow-hidden"
>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_40%)]"/>

<div className="relative max-w-7xl mx-auto px-4">

<div className="mb-16 max-w-2xl">

<span className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
Services
</span>

<h2 className="mt-3 text-5xl font-bold">
Systems that automate your operations
</h2>

<p className="mt-5 text-slate-300">
Click any service to explore examples, tools and systems MikeOps can build.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{services.map((svc)=>{

const Icon=iconMap[svc.icon];

return(

<button
key={svc.id}
onClick={()=>setSelected(svc)}
className="text-left rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-blue-500 hover:-translate-y-1"
>

<div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5">
<Icon size={20}/>
</div>

<h3 className="font-bold">
{svc.title}
</h3>

<p className="mt-3 text-sm text-slate-300">
{svc.description}
</p>

</button>

)

})}

</div>

</div>

</section>

<ServiceModal
service={selected}
onClose={()=>setSelected(null)}
/>

</>

)

}
