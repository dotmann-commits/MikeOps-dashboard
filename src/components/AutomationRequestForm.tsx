/// <reference types="vite/client" />

import { useState, type FormEvent, type ChangeEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, ClipboardList, ShieldCheck, Workflow } from 'lucide-react';
import { automationTypes, priorityLevels } from '../data/mockData';

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'no-webhook';

interface FormFields {
  website: string;

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
  website:'',

  fullName: '',
  email: '',
  company: '',
  challenge: '',
  currentTools: '',
  automationType: '',
  priority: '',
  message: '',
};

export default function AutomationRequestForm() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();


if(fields.website){
 return;
}

if(fields.message.length<10){
 setStatus('error');
 setErrorMessage('Please provide more details.');
 return;
}

setStatus('loading');


    const payload = {
      fullName: fields.fullName,
      email: fields.email,
      company: fields.company,
      currentChallenge: fields.challenge,
      currentTools: fields.currentTools,
      automationType: fields.automationType,
      priority: fields.priority,
      message: fields.message.trim(),
      submittedAt: new Date().toISOString(),
      userAgent:navigator.userAgent,
      source: "MikeOps Dashboard",
    };

    try {
      
const controller=new AbortController();

setTimeout(()=>controller.abort(),10000);

const res = await fetch('/api/automation-request', {
signal:controller.signal,

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
    <section
      id="automation-request"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#020617] via-[#061a3a] to-[#00111f] py-24"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.25em] text-blue-300 uppercase">
            Work With Me
          </span>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Submit an Automation Request
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Tell me what feels repetitive, manual, slow, or disconnected in your business.
            I will review the workflow and suggest a practical automation approach.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <InfoCard
              icon={<ClipboardList size={20} />}
              title="Describe the bottleneck"
              text="Tell me where time is being wasted, what tools are involved, and what outcome you want."
            />

            <InfoCard
              icon={<Workflow size={20} />}
              title="I map the workflow"
              text="The request becomes a clear automation flow: trigger, data, decision, action, and notification."
            />

            <InfoCard
              icon={<ShieldCheck size={20} />}
              title="Production thinking"
              text="The goal is not just a demo. The goal is a reliable system that reduces manual work."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl"
          >
            {status === 'no-webhook' && (
              <Notice tone="amber" icon={<AlertCircle size={18} />}>
                <p className="font-semibold text-sm">Backend not connected yet</p>
                <p className="text-sm mt-0.5">
                  The secure backend endpoint is not configured yet. Add <code className="px-1 py-0.5 bg-amber-100 rounded text-xs">N8N_WEBHOOK_URL</code> in Vercel environment variables.
                </p>
              </Notice>
            )}

            {status === 'error' && (
              <Notice tone="red" icon={<AlertCircle size={18} />}>
                <p className="font-semibold text-sm">Submission failed</p>
                <p className="text-sm mt-0.5">{errorMessage} — please try again.</p>
              </Notice>
            )}

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-300/20 bg-white/[0.07] px-8 py-16 text-center shadow-2xl shadow-emerald-950/20 backdrop-blur-xl">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/15">
                  <CheckCircle2 size={32} className="text-emerald-300" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">Request Received</h3>

                <p className="max-w-sm text-slate-300">
                  Your automation request has been submitted successfully. I will review it and be in touch shortly.
                </p>

              <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-500"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-8"
              >
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  name="website"
                  value={fields.website}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="CRM / Tools Currently Used">
                    <input
                      name="currentTools"
                      type="text"
                      placeholder="HubSpot, Salesforce, Notion..."
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
                      <option value="">Select a type...</option>
                      {automationTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Priority Level" required>
                  <select
                    name="priority"
                    required
                    value={fields.priority}
                    onChange={handleChange}
                    className={inputCls}
                  >
                    <option value="">Select priority...</option>
                    {priorityLevels.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Additional Information">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Any other context, links, or details that would help..."
                    value={fields.message}
                    onChange={handleChange}
                    className={inputCls + ' resize-none'}
                  />
                </Field>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-black text-blue-800 shadow-[0_0_35px_rgba(255,255,255,0.45)] transition hover:bg-blue-50 hover:shadow-[0_0_55px_rgba(255,255,255,0.75)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Submit Request
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-inner outline-none transition focus:border-cyan-300 focus:ring-4 focus:ring-cyan-300/20';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-200">
        {label}
        {required && <span className="ml-1 text-cyan-300">*</span>}
      </label>
      {children}
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur-xl">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
        {icon}
      </div>
      <h3 className="text-base font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Notice({
  children,
  icon,
  tone,
}: {
  children: ReactNode;
  icon: ReactNode;
  tone: 'amber' | 'red';
}) {
  const classes =
    tone === 'amber'
      ? 'border-amber-300/30 bg-amber-300/10 text-amber-100'
      : 'border-red-300/30 bg-red-300/10 text-red-100';

  return (
    <div className={`mb-6 flex gap-3 rounded-2xl border p-4 ${classes}`}>
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div>{children}</div>
    </div>
  );
}
