import { Layers } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-blue-900/40 bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-700 font-semibold">
          <Layers size={18} className="text-blue-600" />
          <span>PlatformOps Dashboard</span>
        </div>
        <p className="text-sm text-gray-400">
          Built with React, TypeScript &amp; Tailwind CSS &mdash; Backend powered by PlatformsOps by Michael Awude                                        <div className="mt-6 flex flex-wrap justify-center gap-4">
  <a
    href="mailto:PlatformOpsbyMichael@proton.me"
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
    href="https://instagram.com/PlatformOpsbyMichael"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-500/40 active:scale-95"
  >
    <FaInstagram size={18} />
    Instagram
  </a>

  <a
    href="https://x.com/PlatformOpsbyMichael"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-950 hover:shadow-blue-900/40 active:scale-95"
  >
    <FaXTwitter size={18} />
    X
  </a>
</div>

<p className="mt-3 text-sm text-gray-600 text-center">
  PlatformOpsbyMichael@proton.me • +351962006788 (WhatsApp)
</p>
        </p>
      </div>
    </footer>
  );
}
