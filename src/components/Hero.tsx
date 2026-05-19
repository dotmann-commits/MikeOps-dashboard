import { useState } from "react";
import { Bot, Activity, ArrowRight, Workflow, BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const capabilityTabs = {
  AI: {
    icon: BrainCircuit,
    tools: [
      "MikeOps AI Assistant",
      "Voice AI Agent",
      "AI Email Classification",
      "AI Workflow Recommendations",
    ],
    summary: "AI assistants, classification logic, and decision support for faster operations.",
  },
  Systems: {
    icon: Workflow,
    tools: [
      "CRM Automation",
      "Airtable Workflows",
      "Webhook Integrations",
      "Lead Capture Pipelines",
    ],
    summary: "Connected tools, clean data flows, and business systems that reduce manual work.",
  },
  Ops: {
    icon: Activity,
    tools: [
      "Grafana Monitoring",
      "Slack Alert Routing",
      "Error Detection Pipeline",
      "Infrastructure Automation",
    ],
    summary: "Operational visibility, alerts, reliability, and infrastructure control.",
  },
};

type CapabilityKey = keyof typeof capabilityTabs;

export default function Hero() {
  const [activeCapability, setActiveCapability] = useState<CapabilityKey>("AI");
  const active = capabilityTabs[activeCapability];

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300 text-xs font-bold uppercase tracking-[0.2em]">
              <Activity size={14} />
              MikeOps AI Operations Layer
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] text-white">
              Build systems.
              <br />
              Automate operations.
              <br />
              Scale intelligently.
            </h1>

            <p className="mt-8 text-slate-300 text-lg leading-8 max-w-xl">
              AI systems, operational tooling, intelligent workflows, and connected infrastructure built for modern businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#automation-request"
                data-audit-intent="true"
                className="rounded-xl bg-cyan-500 px-7 py-4 font-bold text-black flex items-center gap-2 transition hover:scale-[1.02]"
              >
                Let's Audit Your Business
                <ArrowRight size={18} />
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Starting at{" "}
              <span className="font-bold text-cyan-300">€49.99</span>
              {" "}· Identify workflow gaps and uncover automation opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl border border-slate-800 bg-[#071120] p-6 shadow-2xl"
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="text-cyan-400" />
                <span className="font-bold text-white">MikeOps Console</span>
              </div>

              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability}
                initial={{ opacity: 0, y: 8 }}              animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="space-y-4"
              >
                {active.tools.map((tool, index) => (
                  <div
                    key={tool}
                    className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4"
                  >
                    <div className="h-8 w-8 rounded-full bg-cyan-500 text-black font-bold flex items-center justify-center">
                      {index + 1}
                    </div>

                    <span className="text-slate-200">{tool}</span>
                  </div>
                ))}

                <p className="rounded-xl border border-cyan-500/10 bg-cyan-500/5 px-4 py-3 text-sm leading-6 text-cyan-100">
                  {active.summary}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {(Object.keys(capabilityTabs) as CapabilityKey[]).map((key) => {
                const Icon = capabilityTabs[key].icon;
                const isActive = activeCapability === key;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveCapability(key)}
                    className={`rounded-xl p-4 text-left transition hover:scale-[1.02] ${
                      isActive
                        ? "bg-cyan-500 text-black shadow-[0_0_28px_rgba(34,211,238,0.28)]"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Icon className={`mb-2 ${isActive ? "text-black" : "text-cyan-400"}`} />
                    <div className="font-bold">{key}</div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
