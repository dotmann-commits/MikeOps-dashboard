import { ArrowDown, ClipboardList } from "lucide-react";
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
} from "react-icons/si";

const voiceflowLogo = "https://placehold.co/40x40/2563eb/ffffff?text=V";
const antigravityLogo = "https://placehold.co/40x40/2563eb/ffffff?text=A";

const toolGroups = [
  {
    label: "Platform",
    tools: [
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    label: "Automation",
    tools: [
      { name: "n8n", icon: <SiN8N /> },
      { name: "Zapier", icon: <SiZapier /> },
      { name: "Make", icon: <SiMake /> },
      { name: "UiPath", icon: <SiUipath /> },
      {
        name: "Voiceflow",
        icon: <img src={voiceflowLogo} alt="Voiceflow" className="h-5 w-5 rounded" />,
      },
    ],
  },
  {
    label: "AI Systems",
    tools: [
      { name: "OpenAI", icon: <SiOpenai /> },
      { name: "Claude", icon: <SiAnthropic /> },
      { name: "Ollama", icon: <SiOllama /> },
      {
        name: "Antigravity",
        icon: (
          <img
            src={antigravityLogo}
            alt="Antigravity"
            className="h-5 w-5 rounded"
          />
        ),
      },
    ],
  },
  {
    label: "CRM & Workspace",
    tools: [
      { name: "Salesforce", icon: <FaSalesforce /> },
      { name: "HubSpot", icon: <SiHubspot /> },
      { name: "Airtable", icon: <SiAirtable /> },
      { name: "Notion", icon: <SiNotion /> },
    ],
  },
  {
    label: "Observability",
    tools: [
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Prometheus", icon: <SiPrometheus /> },
      { name: "AWS CloudWatch", icon: <FaAws /> },
      { name: "Sentry", icon: <SiSentry /> },
    ],
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-[-100px] right-[-80px] h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mb-4 text-sm font-semibold tracking-widest text-blue-600">
          PlatformOps Dashboard
        </div>

        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
          <ClipboardList size={16} />
          Automation Systems & Operations
        </div>

        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Michael Awude
        </h1>

        <p className="mt-2 text-lg font-semibold text-blue-600">
          Platform Engineer · Automation & Operations Systems
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          I help businesses eliminate manual work, automate operations, and build
          scalable systems that save time, reduce errors, and increase efficiency.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/50 active:scale-95"
          >
            View Skills
            <ArrowDown size={18} />
          </a>

          <a
            href="#automation-request"
            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 active:scale-95"
          >
            <ClipboardList size={18} />
            Submit Automation Request
          </a>
        </div>

        <div className="mt-14 w-full max-w-6xl">
          <p className="mb-5 text-sm font-semibold text-gray-500">
            Platform · Automation · AI-Driven Systems · CRM & Workspace ·
            Observability
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {toolGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {group.label}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {group.tools.map((tool) => (
                    <div
                      key={tool.name}
                      title={tool.name}
                      className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span className="flex h-5 w-5 items-center justify-center text-blue-600">
                        {tool.icon}
                      </span>
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}