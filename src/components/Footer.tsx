import { Linkedin, Facebook, Instagram, X, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = ["Home", "Services", "Skills", "Contact"];

  const services = [
    "AI Automations",
    "Workflow Systems",
    "Integration & API",
    "Consulting",
    "Custom Solutions",
  ];

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-cyan-500/10 bg-[#020817]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,#1d4ed833,transparent_45%),radial-gradient(circle_at_right,#06b6d433,transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:pr-10">
            <div className="mb-6 inline-flex rounded-2xl p-3 bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-transparent backdrop-blur-sm border border-cyan-400/10 shadow-[0_0_35px_rgba(34,211,238,0.12)]">

              <img
                src="/brand/mikeops-brand-logo.png"
                alt="MikeOps by Michael Awude"
                className="h-14 w-auto object-contain brightness-110 contrast-125"
              />

            </div>

            <p className="max-w-sm text-sm font-medium leading-8 text-slate-200">
              I build AI automations and systems that save time,
              reduce manual work, and help businesses operate
              at scale.
            </p>

            
<div className="mt-8 flex gap-4">

  <a
    href="https://www.linkedin.com/company/mikeops/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="rounded-full bg-white/10 p-3 text-slate-200 transition hover:bg-cyan-500 hover:text-white hover:scale-110"
  >
    <Linkedin size={18}/>
  </a>

  <a
    href="https://www.facebook.com/share/1CwsLfYGA3/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="rounded-full bg-white/10 p-3 text-slate-200 transition hover:bg-cyan-500 hover:text-white hover:scale-110"
  >
    <Facebook size={18}/>
  </a>

  <a
    href="https://www.instagram.com/mikeops.pro/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="rounded-full bg-white/10 p-3 text-slate-200 transition hover:bg-cyan-500 hover:text-white hover:scale-110"
  >
    <Instagram size={18}/>
  </a>

  <a
    href="https://x.com/mikeopspro?s=21&t=zYkY77LZS8hcL7MOVPFkNQ"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="rounded-full bg-white/10 p-3 text-slate-200 transition hover:bg-cyan-500 hover:text-white hover:scale-110"
  >
    <X size={18}/>
  </a>

  <a
    href="mailto:contact@mikeops.pro"
    aria-label="Email MikeOps"
    title="Email contact@mikeops.pro"
    className="rounded-full bg-white/10 p-3 text-slate-200 transition hover:bg-cyan-500 hover:text-white hover:scale-110"
  >
    <Mail size={18}/>
  </a>

</div>

          </div>

          <div className="border-slate-700/50 md:border-l md:pl-10">
            <h3 className="mb-6 text-sm font-bold text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "#hero" : `#${link.toLowerCase()}`}
                    className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-slate-700/50 md:border-l md:pl-10">
            <h3 className="mb-6 text-sm font-bold text-white">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-slate-700/50 md:border-l md:pl-10">
            <h3 className="mb-6 text-sm font-bold text-white">Let's Work Together</h3>
            <p className="text-sm font-medium leading-8 text-slate-300">
              Have a project in mind? Fill the automation request form above and
              I’ll map the best system for it.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs font-semibold text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MikeOps.pro. All rights reserved.</p>
          <p>Built with systems thinking and automations</p>
          <p className="text-white">mikeops.pro</p>
        </div>
      </div>
    </footer>
  );
}
