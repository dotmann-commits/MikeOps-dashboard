import {
  Settings,
  UserPlus,
  Mail,
  GitBranch,
  Ticket,
  Zap,
  BarChart2,
} from "lucide-react";
import { services } from "../data/mockData";

const iconMap: Record<string, React.ElementType> = {
  Settings,
  UserPlus,
  Mail,
  GitBranch,
  Ticket,
  Zap,
  BarChart2,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase">
            Services
          </span>

          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight">
            Systems that automate your operations — not just tasks.
          </h2>

          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            Each service is designed as a production-ready workflow that integrates
            with your stack and removes manual work from your business processes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon];

            return (
              <div
                key={svc.id}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur shadow-xl shadow-blue-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/[0.08]"
              >
                {/* Icon */}
                {Icon && (
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center mb-5 ring-1 ring-blue-400/30 transition group-hover:scale-110">
                    <Icon size={20} className="text-blue-300 group-hover:text-blue-200" />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-base font-semibold mb-2 text-white leading-snug">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {svc.description}
                </p>

                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-blue-500/10 to-transparent" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA (IMPORTANT for conversion) */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-slate-300 max-w-lg">
              Need a custom automation system tailored to your workflow? Submit a
              request and get a structured solution designed for your stack.
            </p>

            <a
  href="#automation-request"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 hover:shadow-blue-800/60"
            >
              Submit Automation Request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}