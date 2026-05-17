import { motion } from "framer-motion";
import {
  ArrowDown,
  ClipboardList,
  Bot,
  GitBranch,
  TrendingUp,
  Sparkles,
  Activity,
} from "lucide-react";
import { FaAws, FaDocker, FaSalesforce } from "react-icons/fa";
import {
  SiNginx,
  SiFastapi,
  SiN8N,
  SiZapier,
  SiMake,
  SiUipath,
  SiOpenai,
  SiAnthropic,
  SiOllama,
  SiHubspot,
  SiAirtable,
  SiNotion,
  SiGrafana,
  SiPrometheus,
  SiSentry,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiJavascript,
} from "react-icons/si";

const voiceflowLogo = "https://placehold.co/40x40/2563eb/ffffff?text=V";
const antigravityLogo = "https://placehold.co/40x40/2563eb/ffffff?text=A";

const capabilityCards = [
  {
    title: "Automate",
    description:
      "Replace repetitive manual tasks with reliable AI-powered workflows that run in the background.",
    icon: Bot,
    theme: "blue",
  },
  {
    title: "Connect",
    description:
      "Link forms, CRMs, email, databases, chatbots, and business tools into one connected system.",
    icon: GitBranch,
    theme: "purple",
  },
  {
    title: "Scale",
    description:
      "Build systems that support growth, reduce errors, and improve operations as the business expands.",
    icon: TrendingUp,
    theme: "green",
  },
];

const toolGroups = [
  {
    label: "Platform",
    color: "text-blue-700",
    tools: [
      { name: "AWS", icon: <FaAws />, className: "bg-orange-50 text-orange-600 border-orange-100" },
      { name: "Docker", icon: <FaDocker />, className: "bg-blue-50 text-blue-600 border-blue-100" },
      { name: "Nginx", icon: <SiNginx />, className: "bg-emerald-50 text-emerald-700 border-emerald-100" },
      { name: "FastAPI", icon: <SiFastapi />, className: "bg-teal-50 text-teal-700 border-teal-100" },
    ],
  },
  {
    label: "Automation",
    color: "text-purple-700",
    tools: [
      { name: "n8n", icon: <SiN8N />, className: "bg-rose-50 text-rose-600 border-rose-100" },
      { name: "Zapier", icon: <SiZapier />, className: "bg-orange-50 text-orange-600 border-orange-100" },
      { name: "Make", icon: <SiMake />, className: "bg-violet-50 text-violet-700 border-violet-100" },
      { name: "UiPath", icon: <SiUipath />, className: "bg-red-50 text-red-600 border-red-100" },
      {
        name: "Voiceflow",
        icon: <img src={voiceflowLogo} alt="Voiceflow" className="h-5 w-5 rounded" />,
        className: "bg-blue-50 text-blue-700 border-blue-100",
      },
    ],
  },
  {
    label: "AI Systems",
    color: "text-violet-700",
    tools: [
      { name: "OpenAI", icon: <SiOpenai />, className: "bg-emerald-50 text-emerald-700 border-emerald-100" },
      { name: "Claude", icon: <SiAnthropic />, className: "bg-orange-50 text-orange-600 border-orange-100" },
      { name: "Ollama", icon: <SiOllama />, className: "bg-slate-50 text-slate-800 border-slate-200" },
      {
        name: "Antigravity",
        icon: <img src={antigravityLogo} alt="Antigravity" className="h-5 w-5 rounded" />,
        className: "bg-blue-50 text-blue-700 border-blue-100",
      },
    ],
  },
  {
    label: "CRM & Workspace",
    color: "text-blue-700",
    tools: [
      { name: "Salesforce", icon: <FaSalesforce />, className: "bg-sky-50 text-sky-700 border-sky-100" },
      { name: "HubSpot", icon: <SiHubspot />, className: "bg-orange-50 text-orange-600 border-orange-100" },
      { name: "Airtable", icon: <SiAirtable />, className: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Notion", icon: <SiNotion />, className: "bg-slate-50 text-slate-800 border-slate-200" },
    ],
  },
  {
    label: "Observability",
    color: "text-emerald-700",
    tools: [
      { name: "Grafana", icon: <SiGrafana />, className: "bg-orange-50 text-orange-600 border-orange-100" },
      { name: "Prometheus", icon: <SiPrometheus />, className: "bg-red-50 text-red-600 border-red-100" },
      { name: "AWS CloudWatch", icon: <FaAws />, className: "bg-green-50 text-green-700 border-green-100" },
      { name: "Sentry", icon: <SiSentry />, className: "bg-violet-50 text-violet-700 border-violet-100" },
    ],
  },
  {
    label: "Frontend",
    color: "text-rose-700",
    tools: [
      { name: "React", icon: <SiReact />, className: "bg-cyan-50 text-cyan-700 border-cyan-100" },
      { name: "TypeScript", icon: <SiTypescript />, className: "bg-blue-50 text-blue-700 border-blue-100" },
      { name: "Tailwind", icon: <SiTailwindcss />, className: "bg-cyan-50 text-cyan-700 border-cyan-100" },
      { name: "Vite", icon: <SiVite />, className: "bg-yellow-50 text-yellow-700 border-yellow-100" },
      { name: "JavaScript", icon: <SiJavascript />, className: "bg-yellow-50 text-yellow-700 border-yellow-100" },
    ],
  },
];

function CapabilityVisual({ theme }: { theme: string }) {
  if (theme === "blue") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-90" viewBox="0 0 420 280" fill="none">
        <motion.path
          d="M75 115H145C185 115 185 70 225 70H335"
          stroke="#2563eb"
          strokeWidth="3"
          strokeDasharray="8 12"
          animate={{ strokeDashoffset: [90, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M75 115H145C185 115 185 190 230 190H350"
          stroke="#38bdf8"
          strokeWidth="3"
          strokeDasharray="8 12"
          animate={{ strokeDashoffset: [90, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />

        {[75, 225, 230, 350].map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy={i === 0 ? 115 : i === 1 ? 70 : 190}
            r={i === 0 ? 22 : 20}
            fill="#eff6ff"
            stroke="#bfdbfe"
            animate={{ y: [0, -8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.35 }}
          />
        ))}

        <motion.circle
          cx="145"
          cy="115"
          r="6"
          fill="#2563eb"
          animate={{ x: [0, 185], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    );
  }

  if (theme === "purple") {
    return (
      <svg className="absolute inset-0 h-full w-full opacity-90" viewBox="0 0 420 280" fill="none">
        {[
          ["220", "140", "130", "75"],
          ["220", "140", "320", "80"],
          ["220", "140", "130", "215"],
          ["220", "140", "340", "215"],
        ].map(([x1, y1, x2, y2], index) => (
          <motion.line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={index % 2 === 0 ? "#8b5cf6" : "#a855f7"}
            strokeWidth="3"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [90, 0] }}
            transition={{ duration: 2.4 + index * 0.3, repeat: Infinity, ease: "linear" }}
          />
        ))}

        <motion.circle
          cx="220"
          cy="140"
          r="34"
          fill="#f5f3ff"
          stroke="#ddd6fe"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {[
          [130, 75],
          [320, 80],
          [130, 215],
          [340, 215],
        ].map(([x, y], index) => (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r="22"
            fill="#faf5ff"
            stroke="#ddd6fe"
            animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.35 }}
          />
        ))}

        <motion.circle
          cx="220"
          cy="140"
          r="5"
          fill="#7c3aed"
          animate={{ r: [5, 44], opacity: [0.8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
        />
      </svg>
    );
  }

  return (
    <svg className="absolute inset-0 h-full w-full opacity-95" viewBox="0 0 420 280" fill="none">
      <rect x="155" y="65" width="185" height="135" rx="14" fill="#ecfdf5" />

      {[190, 225, 260, 295].map((x, index) => (
        <motion.rect
          key={x}
          x={x}
          y={index === 0 ? 135 : index === 1 ? 105 : index === 2 ? 80 : 55}
          width="14"
          height={index === 0 ? 65 : index === 1 ? 95 : index === 2 ? 120 : 145}
          rx="5"
          fill="#bfdbfe"
          animate={{ scaleY: [0.5, 1, 0.65, 1] }}
          style={{ transformOrigin: "bottom" }}
          transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.25 }}
        />
      ))}

      <motion.path
        d="M175 185C205 150 225 162 250 120C275 80 300 95 330 40"
        stroke="#10b981"
        strokeWidth="7"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.path
        d="M175 115C205 85 225 105 250 132C280 165 305 145 335 180"
        stroke="#ef4444"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.path
        d="M310 40H330V62"
        stroke="#10b981"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#020617] via-[#061a3a] to-[#00111f] pt-20 pb-16"
    >
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute left-20 top-24 h-40 w-40 rounded-full bg-blue-600 blur-2xl" />
        <div className="absolute bottom-24 right-24 h-56 w-56 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-16 left-12 h-28 w-28 rounded-full bg-violet-500 blur-2xl" />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />

      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-cyan-300/40 blur-[1px]"
          initial={{
            x: Math.random() * 1400,
            y: Math.random() * 900,
            opacity: 0.15,
          }}
          animate={{
            y: [null, -120],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-100 shadow-[0_0_35px_rgba(34,211,238,0.25)] backdrop-blur-xl"
        >
          <Sparkles size={16} className="text-cyan-300" />
          MikeOps Capability Layer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mx-auto max-w-5xl text-4xl font-black tracking-tight text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.35)] sm:text-5xl lg:text-6xl"
        >
          Automate operations. Connect systems. Scale{" "}
          <span className="text-cyan-300">smarter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg"
        >
          I build AI-powered workflows, operational dashboards, and connected
          business systems that reduce manual work and improve execution.
        </motion.p>

        <div className="mt-12 grid w-full grid-cols-1 gap-7 sm:grid-cols-3">
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.12 }}
                whileHover={{ y: -10, scale: 1.025 }}
                className="group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/80 bg-white/95 px-7 py-8 text-left shadow-[0_0_35px_rgba(59,130,246,0.35)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_80px_rgba(34,211,238,0.8)] hover:-translate-y-2 hover:rotate-[0.4deg]"
              >
                <CapabilityVisual theme={card.theme} />

                <motion.div
                  className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-120%", "320%"] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.7,
                  }}
                />

                <motion.div
                  className={`absolute -right-20 -top-20 h-52 w-52 rounded-full blur-3xl ${
                    card.theme === "green"
                      ? "bg-emerald-300/40"
                      : card.theme === "purple"
                      ? "bg-violet-300/40"
                      : "bg-cyan-300/40"
                  }`}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.75, 0.35] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.4 }}
                />

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                  <Icon size={28} />
                </div>

                <h3
                  className={`relative z-10 mt-8 text-2xl font-black ${
                    card.theme === "green"
                      ? "text-emerald-700"
                      : card.theme === "purple"
                      ? "text-violet-700"
                      : "text-blue-700"
                  }`}
                >
                  {card.title}
                </h3>

                <p className="relative z-10 mt-4 max-w-[210px] text-sm font-semibold leading-7 text-slate-800">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6"
        >
          <p className="text-base leading-8 text-slate-200">
            A practical systems-builder focused on automation, operations,
            AI assistants, CRM workflows, infrastructure basics, and frontend
            implementation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#skills"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/60 active:scale-95"
            >
              View Skills
              <ArrowDown size={18} />
            </a>

            <a
              href="#automation-request"
              className="inline-flex items-center gap-2 rounded-xl border border-white bg-white px-6 py-3 text-sm font-black text-blue-800 shadow-[0_0_35px_rgba(255,255,255,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-[0_0_55px_rgba(255,255,255,0.95)] active:scale-95"
            >
              <ClipboardList size={18} />
              Submit Automation Request
            </a>
          </div>
        </motion.div>

        <div className="mt-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100 backdrop-blur shadow-[0_0_25px_rgba(34,211,238,0.18)]">
            <Activity size={14} className="text-cyan-300" />
            Connected Tool Stack
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {toolGroups.map((group, index) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-3xl border border-white/80 bg-white/95 p-4 shadow-[0_0_28px_rgba(255,255,255,0.18)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
              >
                <p className={`mb-4 text-xs font-black uppercase tracking-[0.2em] ${group.color}`}>
                  {group.label}
                </p>

                <div className="flex flex-col gap-2">
                  {group.tools.map((tool) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.04 }}
                      className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-bold transition ${tool.className}`}
                    >
                      <span className="text-lg">{tool.icon}</span>
                      {tool.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
