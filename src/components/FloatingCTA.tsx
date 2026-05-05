export default function FloatingCTA() {
  return (
    <a
      href="#automation-request"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-500/60 active:scale-95"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-blue-500 opacity-30 blur-xl animate-pulse"></span>
      Start Automation
    </a>
  );
}