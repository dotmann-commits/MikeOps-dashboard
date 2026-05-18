import { useState } from "react";
import { Send, CheckCircle, AlertCircle, ClipboardList } from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  currentChallenge: string;
  currentTools: string;
  automationType: string;
  priority: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  company: "",
  currentChallenge: "",
  currentTools: "",
  automationType: "",
  priority: "",
  message: "",
};

export default function AutomationRequestForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "no-webhook">("idle");

  const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    if (!webhookUrl) {
      setStatus("no-webhook");
      return;
    }

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: "MikeOps Dashboard",
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      setFormData(initialFormState);
      setStatus("success");
    } catch (error) {
      console.error("Automation request failed:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="automation-request"
      className="relative bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            <ClipboardList size={14} />
            MikeOps Audit & Automation Intake
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Submit Your Automation Request
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Tell us what you want to automate, what tools you use, and where your workflow currently slows down.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-400">
            Audit option starts at <span className="font-bold text-cyan-300">€49.99</span>. Implementation projects are scoped separately after review.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
        className="mx-auto grid max-w-4xl gap-6 rounded-[2rem] border border-slate-800 bg-[#071120] p-6 shadow-2xl sm:p-8"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Full Name</span>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
                placeholder="you@company.com"
              />
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-200">Company / Project</span>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Company name or project name"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-200">Current Challenge</span>
            <textarea
              name="currentChallenge"
              value={formData.currentChallenge}
              onChange={handleChange}
              required
              rows={4}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="What process is slow, manual, repetitive, or difficult to manage?"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-200">Current Tools</span>
            <input
              name="currentTools"
              value={formData.currentTools}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Gmail, Airtable, Slack, HubSpot, spreadsheets, CRM, etc."
            />
          </label>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Type of Automation Needed</span>
              <select
                name="automationType"
                value={formData.automationType}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="">Select an option</option>
                <option value="ai-automation-audit">AI Automation Audit</option>
                <option value="ai-assistant">AI Assistant</option>
                <option value="workflow-automation">Workflow Automation</option>
                <option value="crm-automation">CRM Automation</option>
                <option value="lead-capture">Lead Capture System</option>
                <option value="email-automation">Email Automation</option>
                <option value="reporting-dashboard">Reporting Dashboard</option>
                <option value="custom-solution">Custom Solution</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-bold text-slate-200">Priority</span>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="">Select priority</option>
                <option value="low">Low — exploring options</option>
                <option value="medium">Medium — needed soon</option>
                <option value="high">High — urgent business need</option>
              </select>
            </label>
          <
          <label className="grid gap-2">
            <span className="text-sm font-bold text-slate-200">Additional Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-400"
              placeholder="Add any extra details, goals, or constraints."
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-black text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />
            {status === "loading" ? "Submitting..." : "Submit Automation Request"}
          </button>

          {status === "success" && (
            <div className="flex items-center gap-3 rounded-xl border border-green-400/20 bg-green-400/10 p-4 text-sm font-bold text-green-300">
              <CheckCircle size={18} />
              Request submitted successfully. MikeOps will review it and follow up.
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-3 rounded-xl border border-red-400/20 bg-red-400/10 p-4 text-sm font-bold text-red-300">
              <AlertCircle size={18} />
              Something went wrong. Please try again.
            </div>
          )}

          {status === "no-webhook" && (
            <div className="flex items-center gap-3 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4 text-sm font-bold text-yellow-300">
              <AlertCircle size={18} />
              Webhook URL is missing. Add VITE_N8N_WEBHOOK_URL in Vercel/local environment variables.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
