import { useEffect, useState } from 'react';
import {
  Cloud,
  Workflow,
  BarChart3,
  Zap,
  Code2,
  Database,
  ShieldCheck,
  Activity,
  Sparkles,
} from 'lucide-react';

const skillGroups = [
  {
    label: 'Platform Engineering',
    badge: 'Infrastructure Layer',
    icon: Cloud,
    accent: 'blue',
    skills: [
      { name: 'Infrastructure & Cloud Basics', value: 65, detail: 'Docker deployments, cloud tooling, observability, and production system foundations' },
      { name: 'CI/CD Pipelines', value: 55, detail: 'GitHub workflows, deployments, environment management' },
      { name: 'Docker & Containers', value: 50, detail: 'Containerized apps, local AI, n8n and infrastructure services' },
    ],
  },
  {
    label: 'Operations Support',
    badge: 'Business Reliability',
    icon: ShieldCheck,
    accent: 'emerald',
    skills: [
      { name: 'Incident & Issue Triage', value: 85, detail: 'Root-cause analysis, escalation paths, SLA tracking' },
      { name: 'Internal Workflow Design', value: 80, detail: 'Mapping and redesigning business processes' },
      { name: 'Cross-team Collaboration', value: 90, detail: 'Bridging technical and non-technical teams' },
    ],
  },
  {
    label: 'CRM Automation',
    badge: 'Revenue Systems',
    icon: Database,
    accent: 'orange',
    skills: [
      { name: 'HubSpot / Salesforce Config', value: 70, detail: 'Pipeline setup, field mapping, deal stage automation' },
      { name: 'Lead Capture & Routing', value: 75, detail: 'Form integrations, webhook triggers, assignment rules' },
      { name: 'Follow-up Sequences', value: 72, detail: 'Email/task automation tied to CRM events' },
    ],
  },
  {
    label: 'Business Process Improvement',
    badge: 'Operational Design',
    icon: BarChart3,
    accent: 'teal',
    skills: [
      { name: 'Process Mapping', value: 78, detail: 'As-is / to-be workflows, swimlane flows' },
      { name: 'KPI & Metrics Definition', value: 74, detail: 'Identifying measurable outcomes for process changes' },
      { name: 'Change Management Support', value: 68, detail: 'Documentation, training guides, stakeholder comms' },
    ],
  },
  {
    label: 'Workflow Automation',
    badge: 'Automation Stack',
    icon: Workflow,
    accent: 'cyan',
    skills: [
      { name: 'n8n / Make', value: 82, detail: 'Multi-step automations, webhooks, API calls' },
      { name: 'Zapier Integrations', value: 80, detail: 'App connectors, filters, data transformation' },
      { name: 'REST API Consumption', value: 70, detail: 'Reading API docs, building HTTP request chains' },
    ],
  },
  {
    label: 'Web Applications',
    badge: 'Frontend Systems',
    icon: Code2,
    accent: 'rose',
    skills: [
      { name: 'React + TypeScript', value: 60, detail: 'Component design, hooks, state management basics' },
      { name: 'Tailwind CSS', value: 68, detail: 'Utility-first styling and responsive layouts' },
      { name: 'Backend Basics', value: 55, detail: 'REST endpoints, database queries, auth basics' },
    ],
  },
];

const accentMap: Record<string, string> = {
  blue: 'from-blue-400 to-cyan-300 shadow-blue-500/40',
  emerald: 'from-emerald-400 to-green-300 shadow-emerald-500/40',
  orange: 'from-orange-400 to-amber-300 shadow-orange-500/40',
  teal: 'from-teal-400 to-cyan-300 shadow-teal-500/40',
  cyan: 'from-cyan-400 to-blue-300 shadow-cyan-500/40',
  rose: 'from-rose-400 to-pink-300 shadow-rose-500/40',
};

export default function Skills() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 250);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#061a3a] to-[#00111f] py-24"
    >
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -top-40 left-10 h-96 w-96 animate-pulse rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-96 w-96 animate-pulse rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
              Operations Intelligence Dashboard
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
              Technical & Operational Skills
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              A live-style view of the systems, automation tools, and operational
              capabilities behind the MikeOps ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Automation Stack', 'Operational Intelligence', 'Continuously Expanding'].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-300/20 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-100 shadow-lg backdrop-blur-xl"
              >
                {item}
              </span>
        ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.label}
                className="group rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-300/50 hover:bg-white/[0.08]"
              >
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                      {group.badge}
                    </span>

                    <h3 className="mt-4 text-lg font-bold text-white">
                      {group.label}
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-blue-200 transition group-hover:scale-110 group-hover:text-cyan-200">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-white">
                          {skill.name}
                        </p>

                        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-bold text-slate-200">
                          {skill.value}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${accentMap[group.accent]} shadow-lg transition-all duration-1000 ease-out group-hover:animate-pulse`}
                          style={{ width: loaded ? `${skill.value}%` : '0%' }}
                        />
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        {skill.detail}
                      </p>
                    </div>
        ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Activity className="text-cyan-300" size={20} />
              <p className="text-sm font-semibold text-white">Systems-first thinking</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Zap className="text-blue-300" size={20} />
              <p className="text-sm font-semibold text-white">Automation-led execution</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Sparkles className="text-emerald-300" size={20} />
              <p className="text-sm font-semibold text-white">AI operations focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
