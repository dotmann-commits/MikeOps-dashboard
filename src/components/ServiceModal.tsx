import {
  X, ArrowRight, PlusCircle, CalendarDays, Link2,
  Clock, ShieldCheck, TrendingUp, Users, Bell, BarChart3,
  Server, Workflow, Bot, Database, FileText, Route, LayoutDashboard
} from "lucide-react";

type Service = {
  id?: string;
  title: string;
  description: string;
};

type Step = {
  title: string;
  subtitle: string;
  tool: string;
  logo: string;
};

type Benefit = {
  title: string;
  text: string;
  icon: React.ElementType;
};

const logoMap: Record<string, string> = {
  n8n: "n8n",
  Prometheus: "prometheus",
  Grafana: "grafana",
  Docker: "docker",
  "Alert System": "",
  Airtable: "airtable",
  "AI System": "",
  Zapier: "zapier",
  Make: "make",
  Voiceflow: "voiceflow",
  Vapi: "v",
  Retell: "retool",
  Gmail: "gmail",
  HubSpot: "hubspot",
  "CRM System": "",
  React: "react",
  TypeScript: "typescript",
  Tailwind: "tailwindcss",
  Cloudflare: "cloudflare",
  Vercel: "vercel",
  Supabase: "supabase",
  Notion: "notion",
};

function logoUrl(tool: string) {
  const slug = logoMap[tool];
  return slug ? `https://cdn.simpleicons.org/${slug}` : "";
}

function getConfig(service: Service): {
  steps: Step[];
  tools: string[];
  benefits: Benefit[];
  how: string;
} {
  const id = service.id ?? "";
  const title = service.title.toLowerCase();

  if (id.includes("infra") || title.includes("infrastructure") || title.includes("monitoring")) {
    return {
      steps: [
        { title: "1. Endpoint / API", subtitle: "Check services, APIs, servers", tool: "HTTP / HTTPS", logo: "" },
        { title: "2. Collect Metrics", subtitle: "Pull metrics & system data", tool: "Prometheus", logo: "Prometheus" },
        { title: "3. Detect Issue", subtitle: "Alert rules & thresholds", tool: "Grafana", logo: "Grafana" },
        { title: "4. Trigger Alert", subtitle: "Automation workflow", tool: "n8n", logo: "n8n" },
        { title: "5. Notify Team", subtitle: "Send alerts & follow-up", tool: "Alert System", logo: "Alert System" },
      ],
      tools: ["n8n", "Prometheus", "Grafana", "Docker", "Alert System", "Airtable", "AI System"],
      benefits: [
        { title: "Detects Issues Early", text: "Real-time monitoring and alerting catch problems before customers or teams are impacted.", icon: Clock },
        { title: "Reduces Downtime", text: "Automated alerts and workflows help your team respond faster and keep systems running.", icon: Clock },
        { title: "Improves Reliability", text: "Consistent monitoring keeps infrastructure healthy and dependable.", icon: ShieldCheck },
        { title: "Better Decisions", text: "Dashboards and logs give you visibility to make smarter, faster decisions.", icon: TrendingUp },
        { title: "Scales With You", text: "Monitoring and automation scale without extra manual effort.", icon: Users },
      ],
      how: "We monitor your critical systems, detect anomalies in real time, trigger automated workflows, and notify the right people — reducing downtime and preventing business disruption.",
    };
  }

  if (id.includes("assistant") || title.includes("assistant")) {
    return {
      steps: [
        { title: "1. User Message", subtitle: "Website chat or voice call", tool: "Voiceflow", logo: "Voiceflow" },
        { title: "2. AI Reasoning", subtitle: "Understand intent", tool: "AI System", logo: "AI System" },
        { title: "3. Voice / Chat", subtitle: "Respond naturally", tool: "Vapi", logo: "Vapi" },
        { title: "4. Capture Context", subtitle: "Lead details and request", tool: "Airtable", logo: "Airtable" },
        { title: "5. Notify Team", subtitle: "Send summary", tool: "Alert System", logo: "Alert System" },
      ],
      tools: ["Voiceflow", "Vapi", "Retell", "AI System", "n8n", "Airtable", "Alert System"],
      benefits: [
        { title: "Instant Custom Help", text: "Visitors get answers immediately without waiting for a human reply.", icon: Bot },
        { title: "Captures Better Context", text: "The assistant collects useful details before handoff.", icon: FileText },
        { title: "Qualifies Leads", text: "Good opportunities can be routed to the right workflow.", icon: Route },
        { title: "Works 24/7", text: "Your business can keep responding even outside working hours.", icon: Clock },
      ],
      how: "We connect chat or voice assistants to your business workflows so users get answers, leads are captured, and your team receives clean summaries.",
    };
  }

  if (title.includes("business") || title.includes("optimization") || id.includes("bpa")) {
    return {
      steps: [
        { title: "1. Map Process", subtitle: "Understand current workflow", tool: "Notion", logo: "Notion" },
        { title: "2. Improve UX", subtitle: "Frontend and form flow", tool: "React", logo: "React" },
        { title: "3. Automate Steps", subtitle: "Remove repeated work", tool: "n8n", logo: "n8n" },
        { title: "4. Store Data", subtitle: "Clean operational records", tool: "Airtable", logo: "Airtable" },
        { title: "5. Track Results", subtitle: "Dashboards and reports", tool: "Dashboard", logo: "" },
      ],
      tools: ["React", "TypeScript", "Tailwind", "n8n", "Airtable", "Notion", "AI System"],
      benefits: [
        { title: "Removes Bottlenecks", text: "Manual slow points are redesigned into cleaner systems.", icon: Workflow },
        { title: "Improves User Experience", text: "Frontend flows become easier for customers and internal teams.", icon: LayoutDashboard },
        { title: "Reduces Manual Work", text: "Repeated admin steps can be automated.", icon: Clock },
        { title: "Makes Work Measurable", text: "You can track what changed and whether it helped.", icon: BarChart3 },
      ],
      how: "We review how work happens today, redesign the weak points, improve the frontend experience, and automate the repeatable steps.",
    };
  }

  return {
    steps: [
      { title: "1. Lead Capture", subtitle: "Web form / chat / ads", tool: "Airtable", logo: "Airtable" },
      { title: "2. Create Contact", subtitle: "Store or update CRM", tool: "HubSpot", logo: "HubSpot" },
      { title: "3. Assign Owner", subtitle: "Round robin / rules", tool: "CRM System", logo: "CRM System" },
      { title: "4. Follow-up", subtitle: "Email or task", tool: "Gmail", logo: "Gmail" },
      { title: "5. Notify Team", subtitle: "Slack / email alert", tool: "Alert System", logo: "Alert System" },
    ],
    tools: ["n8n", "Zapier", "Make", "Airtable", "HubSpot", "CRM System", "Gmail", "Alert System"],
    benefits: [
      { title: "Saves Time", text: "Automates repetitive CRM tasks so your team can focus on real conversations.", icon: Clock },
      { title: "Improves Follow-up", text: "No more leads slipping through the cracks with reminders and tasks.", icon: Bell },
      { title: "Better Visibility", text: "Every interaction is tracked so you always know what is happening.", icon: BarChart3 },
      { title: "Scales With You", text: "Your CRM keeps running smoothly as your business grows.", icon: Users },
    ],
    how: "We connect your forms, CRM, email, and team notifications so leads move forward without manual copying or chasing.",
  };
}

export default function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  if (!service) return null;

  const config = getConfig(service);

  function goToAutomationRequest() {
    onClose();
    setTimeout(() => {
      document.querySelector("#automation-request")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 backdrop-blur-md">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[92vh] w-full max-w-7xl overflow-hidden rounded-[30px] border border-blue-400/40 bg-[#06111f] p-3 text-white shadow-2xl md:p-3"
      >
        <button type="button" onClick={onClose} className="absolute right-6 top-6 rounded-full p-2 text-white/80 hover:bg-white/10" aria-label="Close service details">
          <X size={28} />
        </button>

        <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">MikeOps Service</p>

        <h2 className="mt-3 max-w-5xl text-2xl font-black tracking-tight md:text-4xl">{service.title}</h2>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">{service.description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-lg border border-blue-400/25 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
            <CalendarDays size={16} className="text-cyan-300" />
            Typical implementation: 2–7 days
          </span>

          <span className="inline-flex items-center gap-2 rounded-lg border border-blue-400/25 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
            <Link2 size={16} className="text-emerald-300" />
            Integrate with your existing tools
          </span>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_0.9fr]">
          <div>
            <h3 className="mb-3 text-lg font-black">What it looks like</h3>

            <div className="grid grid-cols-5 gap-1 md:gap-3">
              {config.steps.map((step, index) => {
                const logo = logoUrl(step.logo);

                return (
                  <div key={step.title} className="relative rounded-xl border border-white/10 bg-slate-950/70 p-1.5 text-center shadow-lg md:rounded-2xl md:p-3">
                    {index < config.steps.length - 1 && (
                      <div className="absolute -right-4 top-1/2 10 hidden -translate-y-1/2 text-cyan-300 md:block">
                        <ArrowRight className="animate-pulse drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]" size={26} />
                      </div>
                    )}

                    <p className="text-[9px] font-black leading-tight md:text-sm">{step.title}</p>
                    <p className="mt-1 hidden min-h-[34px] text-[11px] leading-relaxed text-slate-300 sm:block">{step.subtitle}</p>

                    <div className="mx-auto mt-2 flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10 md:mt-3 md:h-12 md:w-12 md:rounded-2xl">
                      {logo ? (
                        <img
                          src={logo}
                          alt={step.tool}
                          className="h-5 w-5 object-contain md:h-8 md:w-8"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <Server size={22} className="text-blue-300 md:size-[38px]" />
                      )}
                    </div>

                    <div className="mx-auto mt-2 hidden rounded-full border border-white/10 bg-slate-900 px-3 py-1 text-xs font-bold sm:inline-flex">
                      {step.tool}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex justify-center">
              <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-bold text-emerald-200">
                Resolved → System Healthy
              </span>
            </div>

            <h3 className="mt-4 mb-3 text-lg font-black">Tools & Integrations</h3>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-7">
              {config.tools.map((tool) => {
                const logo = logoUrl(tool);

                return (
                  <div key={tool} className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-2 py-2">
                    {logo ? <img
                        src={logo}
                        alt={tool}
                        className="h-5 w-5 object-contain"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      /> : <Database size={22} className="text-blue-300" />}
                    <span className="text-xs font-bold">{tool}</span>
                  </div>
              );
              })}
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/70 p-3">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-300">
                  <Workflow size={24} />
                </div>
                <div>
                  <h4 className="font-black">How it works</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{config.how}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-white/10 lg:border-l lg:pl-8">
            <h3 className="mb-3 text-lg font-black">Why it helps</h3>

            <div className="space-y-2">
              {config.benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div key={benefit.title} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black">{benefit.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-slate-300">{benefit.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-2 border-t border-white/10 pt-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={goToAutomationRequest} className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/40 hover:bg-blue-500">
              <PlusCircle size={26} />
              Request this service
              <ArrowRight size={22} />
            </button>

            <div className="ml-auto hidden items-center gap-3 text-sm font-semibold text-slate-300 lg:flex">
              <span className="text-emerald-300">Secure.</span>
              <span className="text-emerald-300">Reliable.</span>
              <span className="text-cyan-300">Built for scale.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
