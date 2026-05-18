import { Bot, MessageSquare, ArrowRight, CalendarDays } from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState(false);

  function openMikeOpsAI() {
    setOpen(false);

    const vfButton =
      document.querySelector('[class*="voiceflow"]') ||
      document.querySelector('[id*="voiceflow"]') ||
      document.querySelector("iframe");

    if (vfButton instanceof HTMLElement) {
      vfButton.click();
    }
  }

  return (
    <>
      <section
        id="projects"
        className="bg-[#020617] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <h2 className="text-5xl font-black">
              Capability Demonstrations
            </h2>

            <p className="mt-4 text-slate-400 max-w-2xl">
              Explore real automation experiences and systems built through MikeOps.
            </p>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full rounded-[32px] border border-slate-800 bg-[#071120] p-8 text-left transition hover:border-cyan-400"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-400 p-4 text-black">
                <Bot />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  MikeOps AI Assistant
                </h3>

                <p className="mt-2 text-slate-400">
                  Experience a live AI automation consultant trained to discuss workflows, systems, and business problems.
                </p>
              </div>
            </div>
          </button>

        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">

          <div className="w-full max-w-3xl rounded-[32px] border border-slate-800 bg-[#071120] p-10 text-white relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 text-slate-400 text-2xl"
            >
              ×
            </button>

            <div className="mb-5 inline-flex rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-xs font-bold tracking-[0.2em] text-cyan-300">
              AI ASSISTANT
            </div>

            <h2 className="text-5xl font-black">
              MikeOps AI
            </h2>

            <p className="mt-6 text-slate-300 text-lg leading-8">
              Ask questions about automation, workflow bottlenecks, AI systems, or operational challenges.
            </p>

            <div className="mt-10 grid gap-4">

              <button
                onClick={openMikeOpsAI}
                className="rounded-2xl bg-cyan-400 text-black px-6 py-5 font-black flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare size={20}/>
                  Chat with MikeOps AI
                </div>

                <ArrowRight size={18}/>
              </button>

              <a
                href="#automation-request"
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-slate-700 px-6 py-5 font-bold flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <CalendarDays size={20}/>
                  Book an Automation Audit
                </div>

                <ArrowRight size={18}/>
              </a>

            </div>

          </div>

        </div>
      )}

    </>
  );
}
