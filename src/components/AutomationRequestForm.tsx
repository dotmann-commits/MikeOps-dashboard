import { useEffect, useState } from "react";
import { Send } from "lucide-react";

const webhookUrl="/api/automation-request";

export default function AutomationRequestForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    currentChallenge: "",
    currentTools: "",
    automationType: "",
    priority: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleAuditIntentClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const auditLink = target.closest("[data-audit-intent='true']");

      if (!auditLink) return;

      setFormData((current) => ({
        ...current,
        automationType: "ai-automation-audit",
        priority: "medium",
        message:
          current.message ||
          "I would like MikeOps to audit my business workflows and identify automation opportunities.",
      }));
    }

    document.addEventListener("click", handleAuditIntentClick);

    return () => {
      document.removeEventListener("click", handleAuditIntentClick);
    };
  }, []);


  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          ...formData,
          submittedAt:new Date().toISOString(),
          source:"MikeOps Dashboard"
        })
      });

      alert("Request submitted successfully");

      setFormData({
        fullName:"",
        email:"",
        company:"",
        currentChallenge:"",
        currentTools:"",
        automationType:"",
        priority:"",
        message:"",
      });

    } catch(err){
      console.error(err);
      alert("Submission failed");
    }

    setLoading(false);
  }

  return (
    <section
      id="automation-request"
      className="bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-12 text-center">

          <h2 className="text-5xl font-black">
            Submit Automation Request
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Tell MikeOps what you want automated and where your current workflow slows down.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[32px] border border-slate-800 bg-[#071120] p-8"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <input
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            />

            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            />

          </div>


          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Project"
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <textarea
            required
            rows={4}
            name="currentChallenge"
            value={formData.currentChallenge}
            onChange={handleChange}
            placeholder="Current challenge..."
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <input
            name="currentTools"
            value={formData.currentTools}
            onChange={handleChange}
            placeholder="Current tools..."
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <div className="grid gap-6 md:grid-cols-2">

            <select
              required
              name="automationType"
              value={formData.automationType}
              onChange={handleChange}
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            >
              <option value="">Type of Automation Needed</option>
              <option value="ai-automation-audit">AI Automation Audit</option>
              <option value="ai-assistant">AI Assistant</option>
              <option value="workflow-automation">Workflow Automation</option>
              <option value="crm">CRM Automation</option>
              <option value="lead">Lead Systems</option>
              <option value="custom">Custom Solution</option>
            </select>

            <select
              required
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
            >
              <option value="">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium — Audit request / needed soon</option>
              <option value="high">High</option>
            </select>

          </div>

          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional notes..."
            className="w-full rounded-xl bg-slate-950 border border-slate-700 px-4 py-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-cyan-400 py-4 font-black text-black flex items-center justify-center gap-2"
          >
            <Send size={18}/>
            {loading ? "Submitting..." : "Submit Automation Request"}
          </button>

        </form>

      </div>
    </section>
  );
}
