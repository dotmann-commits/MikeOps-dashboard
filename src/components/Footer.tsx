import { Layers } from "lucide-react";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/40 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 text-center sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Layers size={18} className="text-blue-500" />
          <span>MikeOps Dashboard</span>
        </div>

        <p className="max-w-2xl text-sm text-slate-400">
          Built with React, TypeScript &amp; Tailwind CSS — backend automation
          powered by MikeOps by Michael Awude.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:MikeOpsbyMichael@proton.me"
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95"
          >
            <MdEmail size={18} />
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/michael-awude-33789294/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-sky-500/40 active:scale-95"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://instagram.com/MikeOpsbyMichael"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95"
          >
            <FaInstagram size={18} />
            Instagram
          </a>

          <a
            href="https://x.com/MikeOpsbyMichael"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-950 hover:shadow-blue-900/40 active:scale-95"
          >
            <FaXTwitter size={18} />
            X
          </a>
        </div>

        <p className="text-center text-sm text-slate-500">
          MikeOpsbyMichael@proton.me • +351962006788 (WhatsApp)
        </p>
      </div>
    </footer>
  );
}