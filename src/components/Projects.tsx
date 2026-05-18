import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  TrendingUp,
  Lightbulb,
  CheckCircle2,
  X,
  Workflow,
  Mail,
  Database,
  Bell,
  BrainCircuit,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Clock,
  Target,
  Eye,
  Zap,
} from 'lucide-react';

type ProjectImage = {
  src: string;
  title: string;
  description: string;
};

type Project = {
  id: number;
  tag: string;
  tagColor: 'orange' | 'cyan' | 'teal';
  title: string;
  problem: string;
  solution: string;
  tools: string[];
  impact: string;
  images: ProjectImage[];
  architecture: string[];
  highlights: string[];
};

const projects: Project[] = [
  {
    id: 1,
    tag: 'AI Automation',
    tagColor: 'orange',
    title: 'AI Email Classification & Routing System',
    problem:
      'Businesses waste time manually reading, sorting, and forwarding emails to the right department.',
    solution:
      'Built an AI-powered workflow that reads incoming emails, classifies them by department, labels them in Gmail, logs them, and sends Slack alerts.',
    tools: ['n8n', 'OpenAI', 'Gmail', 'Google Sheets', 'Slack'],
    impact:
      'Reduced manual inbox sorting and created a clear operational routing system for business teams.',
    images: [
      {
        src: '/case-studies/EC_CLASSIFIER_WORKFLOW.webp',
        title: 'Complete Workflow',
        description:
          'The full system that receives, sorts, records, and routes emails automatically.',
      },
      {
        src: '/case-studies/EC_AI_Node.webp',
        title: 'AI Email Review',
        description:
          'The AI reads the message and identifies what the customer needs.',
      },
      {
        src: '/case-studies/EC_API_Configuration.webp',
        title: 'AI Configuration',
        description:
          'The automation is configured to return clear structured results for routing.',
      },
      {
        src: '/case-studies/EC_Switch_Routing.webp',
        title: 'Department Routing',
        description:
          'Emails are sent to the correct business area based on the AI decision.',
      },
      {
        src: '/case-studies/EC_GOOGLESHEETS.webp',
        title: 'Tracking & Records',
        description:
          'Each email is recorded so the business has visibility and audit history.',
      },
      {
        src: '/case-studies/EC_Gmail_Label.jpeg',
        title: 'Gmail Labels',
        description:
          'Emails are automatically labelled so teams can find and manage them quickly.',
      },
      {
        src: '/case-studies/EC_CLASSIFIER_SLACKALERT.webp',
        title: 'Team Alert',
        description:
          'The right team receives a notification when an important email is classified.',
      },
    ],
    architecture: [
      'Gmail receives a new business email',
      'n8n triggers the workflow automatically',
      'AI classifies the email into the correct department',
      'Validation checks the AI output',
      'Switch node routes the email by category',
      'Gmail labels, Google Sheets, and Slack updates are created',
    ],
    highlights: [
      'Sorts emails into the right department',
      'Reduces manual inbox work',
      'Keeps a record of every email handled',
      'Alerts the right team quickly',
    ],
  },
  {
    id: 2,
    tag: 'CRM Automation',
    tagColor: 'cyan',
    title: 'CRM Lead Automation Pipeline',
    problem:
      'Leads from forms and contact pages often get lost or followed up too late.',
    solution:
      'Designed a CRM-style automation flow that captures leads, structures the data, and prepares follow-up actions.',
    tools: ['Airtable', 'n8n', 'Email', 'Forms'],
    impact:
      'Improves lead tracking, response speed, and business visibility.',
    images: [],
    architecture: [
      'User submits a lead form',
      'Automation captures the submission',
      'Lead data is cleaned and stored',
      'Follow-up actions are prepared',
    ],
    highlights: [
      'Lead capture structure',
      'CRM-style data organization',
      'Follow-up readiness',
    ],
  },
  {
    id: 3,
    tag: 'AI Assistant',
    tagColor: 'teal',
    title: 'MikeOps Website AI Assistant',
    problem:
      'Visitors need a faster way to understand services, ask questions, and request automation help.',
    solution:
      'Planned and integrated an AI assistant experience for the MikeOps website.',
    tools: ['Voiceflow', 'React', 'Automation Logic'],
    impact:
      'Creates a more interactive and intelligent website experience.',
    images: [],
    architecture: [
      'Visitor opens the website assistant',
      'Assistant answers service questions',
      'User intent is captured',
      'Automation request can be routed into backend workflows',
    ],
    highlights: [
      'Website assistant strategy',
      'Client intake support',
      'Future automation backend integration',
    ],
  },
];

const tagColorMap: Record<string, string> = {
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
};

const projectCardThemeMap: Record<string, string> = {
  orange:
    'border-orange-300/35 bg-gradient-to-br from-white/[0.14] via-orange-500/[0.10] to-blue-500/[0.10] shadow-orange-900/30 hover:border-orange-300/70',
  cyan:
    'border-cyan-300/35 bg-gradient-to-br from-white/[0.14] via-cyan-500/[0.10] to-blue-500/[0.12] shadow-cyan-900/30 hover:border-cyan-300/70',
  teal:
    'border-emerald-300/35 bg-gradient-to-br from-white/[0.14] via-emerald-500/[0.10] to-blue-500/[0.10] shadow-emerald-900/30 hover:border-emerald-300/70',
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedImage = selectedProject?.images[selectedImageIndex];

  const architectureImageMap = [0, 0, 1, 2, 3, 6];


  function openProject(project: Project) {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  }

  function closeProject() {
    setSelectedProject(null);
    setSelectedImageIndex(0);
    setIsExpanded(false);
  }

  function previousImage() {
    if (!selectedProject?.images.length) return;
    setSelectedImageIndex((current) =>
      current === 0 ? selectedProject.images.length - 1 : current - 1
    );
  }

  function nextImage() {
    if (!selectedProject?.images.length) return;
    setSelectedImageIndex((current) =>
      current === selectedProject.images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#010816] via-[#031b3f] to-[#00111f] py-24"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
            Project Showcase
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white">
            Featured Automation Systems
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Real-world AI automation systems designed to improve operations,
            automate business workflows, and reduce manual work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openProject(project)}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border text-left shadow-2xl backdrop-blur-[1px] transition-all duration-300 hover:bg-white/[0.12] hover:shadow-[0_0_55px_rgba(34,211,238,0.22)] ${projectCardThemeMap[project.tagColor]}`}
            >
              <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-white/[0.06] blur-3xl transition group-hover:bg-cyan-300/25" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />

              <motion.div
                className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ['-120%', '320%'] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.8,
                }}
              />

              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-300/20"
                animate={{
                  opacity: [0.15, 0.55, 0.15],
                  boxShadow: [
                    '0 0 0px rgba(34,211,238,0.05)',
                    '0 0 32px rgba(34,211,238,0.22)',
                    '0 0 0px rgba(34,211,238,0.05)',
                  ],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: index * 0.4,
                }}
              />

              <div className="relative border-b border-white/10 px-6 py-5">
                <span
                  className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${
                    tagColorMap[project.tagColor]
                  }`}
                >
                  {project.tag}
                </span>

                <h3 className="mt-4 text-xl font-black text-white transition-all duration-500 group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.55)]">
                  {project.title}
                </h3>

                <div className="mt-3 inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                  Interactive Case Study
                </div>
              </div>

              <div className="relative flex flex-1 flex-col gap-6 px-6 py-6">
                <InfoRow icon={<Lightbulb size={18} />} label="Problem" text={project.problem} iconClass="text-orange-400" />
                <InfoRow icon={<Wrench size={18} />} label="Solution" text={project.solution} iconClass="text-cyan-400" />

                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto rounded-2xl border border-emerald-400/10 bg-emerald-500/10 p-4">
                  <div className="flex gap-3">
                    <TrendingUp size={18} className="mt-1 shrink-0 text-emerald-400" />
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Business Impact
                      </p>
                      <p className="text-sm leading-6 text-slate-200">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.span
                    animate={{
                      scale: [1, 1.035, 1],
                      boxShadow: [
                        '0 0 0px rgba(34,211,238,0.05)',
                        '0 0 24px rgba(34,211,238,0.28)',
                        '0 0 0px rgba(34,211,238,0.05)',
                      ],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: index * 0.35,
                    }}
                    className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/12 px-4 py-2 text-sm font-black text-cyan-100 transition group-hover:border-cyan-200/70 group-hover:bg-cyan-300/25 group-hover:text-white"
                  >
                    View Case Study →
                  </motion.span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/[0.06] px-4 py-6 backdrop-blur-[1px]"
        >
          <div className="relative max-h-[92vh] w-full max-w-7xl overflow-y-auto rounded-3xl border border-blue-300/20 bg-[#061225] shadow-2xl shadow-blue-950/70">
            <button
              onClick={closeProject}
              className="absolute right-5 top-5 z-30 rounded-full bg-white/[0.06] p-2 text-slate-700 shadow-lg hover:bg-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="px-5 py-8 sm:px-8 lg:px-10">
              <div className="mx-auto max-w-4xl text-center">
                <span
                  className={`inline-block rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
                    tagColorMap[selectedProject.tagColor]
                  }`}
                >
                  {selectedProject.tag}
                </span>

                <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
                  {selectedProject.title}
                </h3>

                <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300">
                  {selectedProject.solution}
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.65fr_0.9fr]">
                <div className="rounded-3xl border border-blue-300/20 bg-white/[0.04] p-4 shadow-2xl shadow-blue-950/40">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        <Workflow size={18} className="text-cyan-300" />
                        Workflow Overview
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        Click expand to inspect the workflow image clearly.
                      </p>
                    </div>

                    {selectedImage && (
                      <button
                        onClick={() => setIsExpanded(true)}
                        className="inline-flex items-center gap-2 rounded-xl border border-blue-300/20 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-100 hover:bg-blue-500/20"
                      >
                        <Maximize2 size={15} />
                        Expand View
                      </button>
                    )}
                  </div>

                  {selectedImage ? (
                    <>
                      <div className="relative overflow-hidden rounded-2xl border border-blue-300/20 bg-slate-950">
                        <img
                          src={selectedImage.src}
                          alt={selectedImage.title}
                          className="h-[440px] w-full object-contain"
                        />

                        <Watermark />

                        <button
                          onClick={previousImage}
                          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/[0.06] p-3 text-white hover:bg-blue-600"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={22} />
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/[0.06] p-3 text-white hover:bg-blue-600"
                          aria-label="Next image"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="text-base font-bold text-white">
                              {selectedImage.title}
                            </h4>
                            <p className="mt-1 text-sm leading-6 text-slate-300">
                              {selectedImage.description}
                            </p>
                          </div>

                          <p className="shrink-0 text-sm font-bold text-blue-200">
                            {selectedImageIndex + 1}/{selectedProject.images.length}
                          </p>
                        </div>

                        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7">
                          {selectedProject.images.map((image, index) => (
                            <button
                              key={image.src}
                              onClick={() => setSelectedImageIndex(index)}
                              className={`overflow-hidden rounded-xl border p-1 transition ${
                                index === selectedImageIndex
                                  ? 'border-cyan-300 bg-cyan-300/10'
                                  : 'border-white/10 bg-white/[0.06] hover:border-blue-300/50'
                              }`}
                            >
                              <img
                                src={image.src}
                                alt={image.title}
                                className="h-12 w-full rounded-lg object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-[440px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-400">
                      Case study visuals coming soon
                    </div>
                  )}
                </div>

                <div className="rounded-3xl border border-blue-300/20 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/40">
                  <div className="mb-6 flex items-center gap-2">
                    <Workflow size={20} className="text-blue-300" />
                    <h4 className="font-bold text-white">System Architecture</h4>
                  </div>

                  <div className="space-y-3">
                    {selectedProject.architecture.map((step, index) => (
                      <button
                        key={step}
                        onMouseEnter={() =>
                          selectedProject.images.length &&
                          setSelectedImageIndex(
                            Math.min(
                              architectureImageMap[index] ?? 0,
                              selectedProject.images.length - 1
                            )
                          )
                        }
                        className="flex w-full gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-slate-200">{step}</p>
                      </button>
                    ))}
                  </div>

                  <div className="mt-7">
                    <div className="mb-3 flex items-center gap-2">
                      <BrainCircuit size={19} className="text-purple-300" />
                      <h4 className="font-bold text-white">Key Highlights</h4>
                    </div>

                    <ul className="space-y-2">
                      {selectedProject.highlights.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-slate-300">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 grid gap-3">
                    <MetricCard icon={<Mail size={17} />} label="Input" value="Business Email" tone="blue" />
                    <MetricCard icon={<Database size={17} />} label="Storage" value="Logs & Records" tone="purple" />
                    <MetricCard icon={<Bell size={17} />} label="Output" value="Team Alerts" tone="green" />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-blue-300/20 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/30">
                <div className="grid gap-6 lg:grid-cols-[1.1fr_2fr]">
                  <div>
                    <div className="flex items-center gap-2 text-lg font-bold text-white">
                      <TrendingUp size={22} className="text-blue-300" />
                      Business Impact
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {selectedProject.impact}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-4">
                    <ImpactStat icon={<Clock />} title="Save Hours Daily" text="Automates repetitive email handling" />
                    <ImpactStat icon={<Target />} title="Better Accuracy" text="AI understands context and intent" />
                    <ImpactStat icon={<Eye />} title="Full Visibility" text="Every email is logged and tracked" />
                    <ImpactStat icon={<Zap />} title="Faster Response" text="Teams get alerts in real time" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {isExpanded && selectedImage && selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 px-4 py-6">
          <div className="relative w-full max-w-7xl">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute right-4 top-4 z-30 rounded-full bg-white/[0.06] p-2 text-slate-700 shadow-lg hover:bg-white"
              aria-label="Close expanded view"
            >
              <X size={22} />
            </button>

            <div className="relative overflow-hidden rounded-3xl border border-blue-300/30 bg-slate-950 p-3 shadow-2xl shadow-blue-950">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[78vh] w-full object-contain"
              />

              <Watermark />

              <button
                onClick={previousImage}
                className="absolute left-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/[0.06] p-4 text-white hover:bg-blue-600"
                aria-label="Previous expanded image"
              >
                <ChevronLeft size={26} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/[0.06] p-4 text-white hover:bg-blue-600"
                aria-label="Next expanded image"
              >
                <ChevronRight size={26} />
              </button>
            </div>

            <div className="mt-4 flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-white backdrop-blur-[1px]">
              <div>
                <h4 className="text-lg font-bold">{selectedImage.title}</h4>
                <p className="mt-1 text-sm text-slate-300">{selectedImage.description}</p>
              </div>

              <p className="text-sm font-bold text-blue-200">
                {selectedImageIndex + 1}/{selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function InfoRow({
  icon,
  label,
  text,
  iconClass,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  iconClass: string;
}) {
  return (
    <div className="flex gap-3">
      <span className={`mt-1 shrink-0 ${iconClass}`}>{icon}</span>
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
          {label}
        </p>
        <p className="text-sm leading-6 text-slate-300">{text}</p>
      </div>
    </div>
  );
}

function Watermark() {
  return (
    <>
      <div className="pointer-events-none absolute left-5 top-5 z-10 rounded-2xl border border-white/50 bg-white/[0.06] px-3 py-2 shadow-xl backdrop-blur-[1px]">
        <img
          src="/brand/mikeops-brand-logo.png"
          alt="MikeOps watermark"
          className="h-8 w-auto opacity-95"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="-rotate-12 rounded-3xl border border-blue-300/20 bg-white/[0.06] px-8 py-4 text-3xl font-black tracking-[0.25em] text-white/12 backdrop-blur-[1px]">
          MIKEOPS.PRO
        </div>
      </div>
    </>
  );
}

function MetricCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: 'blue' | 'purple' | 'green';
}) {
  const toneClass = {
    blue: 'bg-blue-500/10 text-blue-200',
    purple: 'bg-purple-500/10 text-purple-200',
    green: 'bg-emerald-500/10 text-emerald-200',
  }[tone];

  return (
    <div className={`rounded-2xl border border-white/10 p-4 ${toneClass}`}>
      <div className="mb-2">{icon}</div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-[0.14]">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function ImpactStat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
        {icon}
      </div>
      <p className="text-sm font-bold text-white">{title}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
    </div>
  );
}
