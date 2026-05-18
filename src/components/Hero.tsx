import { Bot, Activity, ArrowRight, Workflow, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const workflow = [
  "Discover friction",
  "Design intelligent workflows",
  "Automate repetitive work",
  "Scale with systems"
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#020617] pt-24 pb-20"
    >
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
          >

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em]">
              <Activity size={14}/>
              MikeOps AI Operations Layer
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-white">
              Build systems.
              <br/>
              Automate operations.
              <br/>
              Scale intelligently.
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
              AI systems, operational tooling, intelligent workflows, and connected infrastructure built for modern businesses.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#automation-request"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black flex items-center gap-2"
              >
                Start Automation Audit — €49.99
                <ArrowRight size={18}/>
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{opacity:0,x:20}}
            animate={{opacity:1,x:0}}
            className="rounded-3xl border border-slate-800 bg-[#071120] p-6 shadow-2xl"
          >

            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="text-cyan-400"/>
                <span className="font-bold text-white">
                  MikeOps AI Console
                </span>
              </div>

              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>
            </div>

            <div className="space-y-4">
              {workflow.map((step,index)=>(
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                >
                  <div className="h-8 w-8 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center">
                    {index+1}
                  </div>

                  <span className="text-slate-200">
                    {step}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
