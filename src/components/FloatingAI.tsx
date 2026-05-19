import { Bot } from "lucide-react";

export default function FloatingAI() {
  const openMikeOpsAI = () => {
    window.dispatchEvent(new CustomEvent("openMikeOpsAIModal"));
  };

  return (
    <button
      type="button"
      onClick={openMikeOpsAI}
      aria-label="Open MikeOps AI assistant"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-400 px-5 py-4 text-sm font-black text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.45)] transition hover:-translate-y-1 hover:shadow-[0_0_55px_rgba(34,211,238,0.7)]"
    >
      <Bot size={20} />
      <span className="hidden sm:inline">Talk to MikeOps AI</span>
    </button>
  );
}
