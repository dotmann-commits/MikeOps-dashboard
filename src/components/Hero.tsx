import { ArrowDown, ClipboardList } from "lucide-react";

const toolGroups = [
  {
    label: "Platform",
    tools: [
      { name: "AWS", logo: "https://cdn.simpleicons.org/amazonwebservices/2563eb" },
      { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2563eb" },
      { name: "Nginx", logo: "https://cdn.simpleicons.org/nginx/2563eb" },
      { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/2563eb" },
    ],
  },
  {
    label: "Automation",
    tools: [
      { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/2563eb" },
      { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/2563eb" },
      { name: "Make", logo: "https://cdn.simpleicons.org/make/2563eb" },
      { name: 'UiPath', logo: 'https://cdn.simpleicons.org/uipath/2563eb' },
    ],
  },
  {
    label: "AI Systems",
    tools: [
      { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/2563eb" },
      { name: "Claude", logo: "https://cdn.simpleicons.org/anthropic/2563eb" },
      { name: "Ollama", logo: "https://cdn.simpleicons.org/ollama/2563eb" },
      { name: "Voiceflow", logo: "https://cdn.simpleicons.org/voiceflow/2563eb" },
    ],
  },
  {
    label: "CRM",
    tools: [
      { name: "Salesforce", logo: "https://cdn.simpleicons.org/salesforce/2563eb" },
      { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/2563eb" },
      { name: "Airtable", logo: "https://cdn.simpleicons.org/airtable/2563eb" },
      { name: "Notion", logo: "https://cdn.simpleicons.org/notion/2563eb" },
    ],
  },
  {
    label: "Observability",
    tools: [
      { name: "Grafana", logo: "https://cdn.simpleicons.org/grafana/2563eb" },
      { name: "Prometheus", logo: "https://cdn.simpleicons.org/prometheus/2563eb" },
      { name: "AWS CloudWatch", logo: "https://cdn.simpleicons.org/amazoncloudwatch/2563eb" },
      { name: "Sentry", logo: "https://cdn.simpleicons.org/sentry/2563eb" },
    ],
  },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[140px]" />
        <div className="absolute bottom-[-100px] right-[-80px] h-[500px] w-[500px] rounded-full bg-sky-400/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mb-4 text-sm font-semibold text-blue-600 tracking-widest">
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
          I help businesses eliminate manual work, automate operations, and build scalable systems
          that save time, reduce errors, and increase efficiency.
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
            Platform · Automation · AI-Driven Systems · CRM · Observability
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
                      <img src={tool.logo} alt={tool.name} className="h-5 w-5" />
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