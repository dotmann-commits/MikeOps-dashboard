import { motion } from "framer-motion";
import { ClipboardCheck, ArrowRight, SearchCheck } from "lucide-react";

export default function AutomationRequestForm() {
  return (
    <section
      id="automation-request"
      className="bg-[#020617] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            <SearchCheck size={14}/>
            MikeOps Audit & Automation Intake
          </div>

          <h2 className="text-4xl font-black sm:text-5xl">
            Let's Audit Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Identify workflow bottlenecks, uncover automation opportunities,
            and discover where AI systems can improve operational efficiency.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <div className="flex items-center justify-center gap-3 text-cyan-200">
              <ClipboardCheck size={18}/>
              <span className="font-bold">
                Starting at €49.99 · Audit first, implementation later if needed
              </span>
            </div>
          </div>

        </motion.div>

        <div id="existing-form-container"></div>

        <div className="mt-8 text-center text-sm text-slate-400">
          After submission, MikeOps reviews your current systems and identifies
          practical automation opportunities before recommending solutions.
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-bold">
            Better systems → less manual work → smarter operations
            <ArrowRight size={16}/>
          </div>
        </div>

      </div>
    </section>
  );
}
