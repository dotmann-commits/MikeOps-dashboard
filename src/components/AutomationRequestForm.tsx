import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { automationTypes, priorityLevels } from '../data/mockData';

// ─── Form state types ────────────────────────────────────────────────────────

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'no-webhook';

interface FormFields {
  fullName: string;
  email: string;
  company: string;
  challenge: string;
  currentTools: string;
  automationType: string;
  priority: string;
  message: string;
}

const emptyForm: FormFields = {
  fullName: '',
  email: '',
  company: '',
  challenge: '',
  currentTools: '',
  automationType: '',
  priority: '',
  message: '',
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function AutomationRequestForm() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // ── n8n webhook URL is read from the environment variable VITE_N8N_WEBHOOK_URL.
    //    In your .env file add:  VITE_N8N_WEBHOOK_URL=https://your-n8n-instance/webhook/xyz
    //    n8n will receive a JSON POST with all form fields shown in the payload below.
    const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;

    if (!webhookUrl) {
      // Friendly message when no webhook has been configured yet
      setStatus('no-webhook');
      return;
    }

    setStatus('loading');

    // ── Payload sent to n8n ──────────────────────────────────────────────────
    //    You can map these fields inside your n8n workflow nodes.
    const payload = {
      fullName: fields.fullName,
      email: fields.email,
      company: fields.company,
      currentChallenge: fields.challenge,
      currentTools: fields.currentTools,
      automationType: fields.automationType,
      priority: fields.priority,
      message: fields.message,
      submittedAt: new Date().toISOString(),
      source: 'PlatformOps Dashboard',
    };
    // ────────────────────────────────────────────────────────────────────────

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Server responded with ${res.status}`);
      }

      setStatus('success');
      setFields(emptyForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'An unknown error occurred.');
    }
  }

  return (
    <section id="automation-request" className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Work With Me
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Submit an Automation Request
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">
            Tell me about your current challenge and I will get back to you with
            an approach. This form connects directly to my workflow backend.
          </p>
        </div>

        <div className="max-w-3xl">
          {/* ── No-webhook notice ─────────────────────────────────────────── */}
          {status === 'no-webhook' && (
            <div className="mb-6 flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Backend not connected yet</p>
                <p className="text-sm mt-0.5">
                  No webhook URL is configured. Add{' '}
                  <code className="px-1 py-0.5 bg-amber-100 rounded text-xs">
                    VITE_N8N_WEBHOOK_URL
                  </code>{' '}
                  to your <code className="text-xs">.env</code> file to enable form submission.
                </p>
              </div>
            </div>
          )}

          {/* ── Error notice ──────────────────────────────────────────────── */}
          {status === 'error' && (
            <div className="mb-6 flex gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Submission failed</p>
                <p className="text-sm mt-0.5">{errorMessage} — please try again.</p>
              </div>
            </div>
          )}

          {/* ── Success notice ────────────────────────────────────────────── */}
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-xl border border-green-200 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
              <p className="text-gray-500 max-w-sm">
                Your automation request has been submitted successfully. I will review
                it and be in touch shortly.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 px-6 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            /* ── Form ───────────────────────────────────────────────────── */
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-6"
            >
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="Full Name" required>
                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={fields.fullName}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={fields.email}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </Field>
              </div>

              {/* Row 2: Company */}
              <Field label="Company Name">
                <input
                  name="company"
                  type="text"
                  placeholder="Acme Corp"
                  value={fields.company}
                  onChange={handleChange}
                  className={inputCls}
                />
              </Field>

              {/* Row 3: Current challenge */}
              <Field label="Current Challenge" required>
                <textarea
                  name="challenge"
                  required
                  rows={3}
                  placeholder="Describe the manual or inefficient process causing pain..."
                  value={fields.challenge}
                  onChange={handleChange}
                  className={inputCls + ' resize-none'}
                />
              </Field>

              {/* Row 4: Tools + Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="CRM / Tools Currently Used">
                  <input
                    name="currentTools"
                    type="text"
                    placeholder="HubSpot, Salesforce, Notion…"
                    value={fields.currentTools}
                    onChange={handleChange}
                    className={inputCls}
                  />
                </Field>
                <Field label="Type of Automation Needed" required>
                  <select
                    name="automationType"
                    required
                    value={fields.automationType}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select a type…</option>
                    {automationTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Row 5: Priority */}
              <Field label="Priority Level" required>
                <select
                  name="priority"
                  required
                  value={fields.priority}
                  onChange={handleChange}
                  className={inputCls}
                >
                  <option value="">Select priority…</option>
                  {priorityLevels.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </Field>

              {/* Row 6: Additional message */}
              <Field label="Additional Information">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any other context, links, or details that would help…"
                  value={fields.message}
                  onChange={handleChange}
                  className={inputCls + ' resize-none'}
                />
              </Field>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Submit Request
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const inputCls =
  'w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition';

// ─── Helper wrapper ───────────────────────────────────────────────────────────

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
