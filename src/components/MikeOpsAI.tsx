import { Bot, MessageSquare, Sparkles, Zap } from "lucide-react";

declare global {
  interface Window {
    voiceflow?: {
      chat?: {
        open?: () => void;
        interact?: (action: unknown) => void;
      };
    };
  }
}

const prompts = [
  "I want more leads",
  "Automate Gmail",
  "Connect Airtable",
  "Build an AI assistant",
];

export default function MikeOpsAI() {
  function askMikeOpsAI(prompt: string) {
    window.voiceflow?.chat?.open?.();

    setTimeout(() => {
      window.voiceflow?.chat?.interact?.({
        type: "text",
        payload: prompt,
      });
    }, 500);
  }

  return (
    <section
      id="ai-assistant"
      className="bg-[#020617] px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Sparkles size={14} />
              Live AI Capability
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Talk to MikeOps AI before you talk to us.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              The assistant helps visitors explain their workflow problem,
              understand automation options, and submit better project requests.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => askMikeOpsAI(prompt)}
                  className="rounded-2xl border border-slate-800 bg-slate-950 px-5 py-4 text-left text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-white"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-[#071120] p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
                  <Bot size={22} />
                </div>
                <div>
                  <p className="font-black">MikeOps AI</p>
                  <p className="text-xs text-green-400">Online · workflow intake ready</p>
                </div>
              </div>

              <MessageSquare className="text-cyan-30" />
            </div>

            <div className="space-y-4">
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-900 px-5 py-4 text-sm leading-7 text-slate-200">
                Hi — I’m MikeOps AI. Tell me what repetitive process you want to improve, and I’ll help map the automation.
              </div>

              <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-cyan-400 px-5 py-4 text-sm font-semibold leading-7 text-slate-950">
                We manually copy leads from email into Airtable and notify the team in Slack.
              </div>

              <div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-slate-900 px-5 py-4 text-sm leading-7 text-slate-200">
                Good fit for automation: Gmail trigger → AI summary → Airtable record → Slack alert → follow-up email.
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <div className="ter gap-3 text-sm font-bold text-cyan-200">
                <Zap size={16} />
                Click a prompt card to start a live automation consultation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
