import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#automation-request" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-blue-100/70 bg-white shadow-sm shadow-blue-900/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          aria-label="MikeOps homepage"
          onClick={() => setIsMenuOpen(false)}
          className="group flex flex-col items-start justify-center transition-all duration-300 hover:scale-[1.025]"
        >
          <div className="relative h-[38px] w-[150px] overflow-hidden">
            <img
              src="/brand/mikeops-brand-logo.png"
              alt="MikeOps"
              className="absolute left-0 top-1/2 h-[58px] w-auto -translate-y-1/2 object-contain mix-blend-multiply contrast-125 saturate-125"
            />
          </div>

          <span className="-mt-1 ml-[43px] text-[10px] font-bold tracking-[0.08em] text-slate-500">
            by Michael Awude
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-bold text-slate-700 transition-all duration-300 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-blue-600 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#automation-request"
            onClick={() => setIsMenuOpen(false)}
            className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-cyan-400/40 active:scale-95 sm:inline-flex"
          >
            Request Automation
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 md:hidden"
          >
            {isMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-4 pb-5 pt-2 shadow-lg shadow-blue-900/10 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#automation-request"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-black text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-blue-500 active:scale-95"
            >
              Request Automation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
