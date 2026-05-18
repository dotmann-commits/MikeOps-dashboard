import { useState } from "react";
import { X } from "lucide-react";

type ServiceKey =
  | "AI Automations"
  | "Workflow Systems"
  | "Integration & API"
  | "Consulting"
  | "Custom Solutions";

const serviceDetails: Record<ServiceKey, { description: string; examples: string[] }> = {
  "AI Automations": {
    description:
      "AI automations help businesses reduce repetitive work such as email sorting, lead qualification, customer replies, document summaries, and smart task routing.",
    examples: ["AI email classification", "Lead qualification", "Customer support assistants"],
  },
  "Workflow Systems": {
    description:
      "Workflow systems connect your business steps so work moves automatically between tools without manual copying, chasing, or repeating tasks.",
    examples: ["Form to CRM", "Invoice follow-ups", "Internal task routing"],
  },
  "Integration & API": {
    description:
      "Integrations allow your website, CRM, email, Airtable, Slack, payment tools, and automations to work as one connected system.",
    examples: ["Website to n8n", "Airtable to Gmail", "Slack alerts"],
  },
  Consulting: {
    description:
      "Consulting helps identify what should be automated, what should stay manual, and how to build the right system without wasting time.",
    examples: ["Automation audit", "System planning", "Tool selection"],
  },
  "Custom Solutions": {
    description:
      "Custom solutions combine frontend, automation, AI, APIs, and business logic into one working system built around your exact process.",
    examples: ["AI booking systems", "Client portals", "End-to-end automation platforms"],
  },
};

const services: ServiceKey[] = [
  "AI Automations",
  "Workflow Systems",
  "Integration & API",
  "Consulting",
  "Custom Solutions",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];















function MikeOpsLogo() {
  return (
    <div className="relative flex items-center gap-[10px]">

      <div className="absolute -inset-4 rounded-full bg-blue-500/5 blur-xl" />

      <div className="relative flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 shadow-[0_0_28px_rgba(59,130,246,.28)]">

        <svg
          viewBox="0 0 100 100"
          className="h-[29px] w-[29px]"
          aria-hidden="true"
        >
          <path d="M18 68 L41 40" fill="none" stroke="white" strokeWidth="9" strokeLinecap="round"/>
          <path d="M43 62 C50 45 62 39 75 61" fill="none" stroke="white" strokeWidth="9" strokeLinecap="round"/>
          <circle cx="41" cy="40" r="9" fill="white"/>
          <circle cx="63" cy="42" r="8" fill="white"/>
          <circle cx="18" cy="68" r="8" fill="white"/>
          <circle cx="78" cy="64" r="8" fill="white"/>
        </svg>

      </div>

      <div className="leading-none">

        <div className="text-[35px] font-black tracking-[-0.04em]">
          <span className="text-slate-100">
            Mike
          </span>

          <span className="text-blue-500">
            Ops
          </span>
        </div>

        <div className="mt-[1px] text-[11px] font-bold tracking-[0.16em] text-blue-100/75">
          by Michael Awude
        </div>

      </div>

    </div>
  )
}
















function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.25 8h4.5v15h-4.5V8Zm7.25 0h4.31v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-7.45c0-1.78-.03-4.06-2.47-4.06-2.48 0-2.86 1.93-2.86 3.93V23H7.5V8Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M14 8.5h2.2V5.1c-.38-.05-1.7-.16-3.24-.16-3.2 0-5.4 1.96-5.4 5.55v3.12H4v3.8h3.56V24h4.36v-6.6h3.41l.54-3.8h-3.95v-2.75c0-1.1.3-1.85 2.08-1.85Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4.2A3.8 3.8 0 1 1 12 15.8a3.8 3.8 0 0 1 0-7.6Zm0 2A1.8 1.8 0 1 0 12 13.8a1.8 1.8 0 0 0 0-3.6Zm4.75-3.1a1.05 1.05 0 1 1 0 2.1a1.05 1.05 0 0 1 0-2.1Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M18.9 2H22l-6.8 7.78L23.2 22h-6.27l-4.9-6.4L6.4 22H3.3l7.28-8.32L2.9 2h6.43l4.43 5.86L18.9 2Zm-1.1 17.85h1.72L8.39 4.04H6.55L17.8 19.85Z" />
    </svg>
  );
}

export default function Footer() {
  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const selectedService = activeService ? serviceDetails[activeService] : null;

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#020b1d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(37,99,235,0.28),transparent_32%),radial-gradient(circle_at_88%_10%,rgba(20,184,166,0.20),transparent_34%),linear-gradient(180deg,rgba(2,11,29,0.9),rgba(1,8,22,1))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] [&>div:not(:last-child)]:border-r [&>div:not(:last-child)]:border-white/10 [&>div]:pr-8">
            <div>
              <MikeOpsLogo />

              <p className="mt-6 max-w-sm text-sm leading-7 text-blue-100/78">
                I build AI automations and systems that save time, reduce manual work,
                and help businesses operate at scale.
              </p>

              <div className="mt-6 flex gap-3">
                
                <a href="https://www.linkedin.com/in/michael-awude-33789294" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
                  <LinkedInIcon />
                </a>
<a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/mikeops.pro" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
                  <InstagramIcon />
                </a>
                <a href="https://x.com/dotmannwudd" target="_blank" rel="noreferrer" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:text-white">
                  <XIcon />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-blue-100/75 transition hover:text-sky-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Services</h3>
              <ul className="mt-4 space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className="text-left text-sm text-blue-100/75 transition hover:text-sky-300"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold">Let&apos;s Work Together</h3>
              <p className="mt-4 max-w-xs text-sm leading-7 text-blue-100/75">
                Have a project in mind? Fill the automation request form above and I&apos;ll map the best system for it.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-blue-100/55 md:flex-row md:items-center md:justify-between">
            <p>© 2026 MikeOps.pro. All rights reserved.</p>
            <p>Built with systems thinking and automations</p>
            <span className="font-bold text-blue-100">mikeops.pro</span>
          </div>
        </div>
      </footer>

      {activeService && selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-3xl border border-blue-300/20 bg-[#06142d] p-7 text-white shadow-[0_0_60px_rgba(37,99,235,0.35)]">
            <button
              type="button"
              onClick={() => setActiveService(null)}
              className="absolute right-5 top-5 roundd-full border border-white/10 bg-white/10 p-2 text-blue-100 hover:bg-white/20"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-300">
              MikeOps Service
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight">
              {activeService}
            </h2>

            <p className="mt-4 text-sm leading-7 text-blue-100/80">
              {selectedService.description}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-bold">Example use cases</h3>
              <ul className="mt-3 space-y-2">
                {selectedService.examples.map((item) => (
                  <li key={item} className="text-sm text-blue-100/75">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>         </div>
        </div>
      )}
    </>
  );
}
