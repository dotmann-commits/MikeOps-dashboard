// ─── Mock data for MikeOps Dashboard ───────────────────────────────────

export const skillGroups = [
  {
    id: 'platform-engineering',
    label: 'Platform Engineering',
    color: 'blue',
    skills: [
      { name: 'Infrastructure & Cloud Basics', level: 65, description: 'AWS/GCP fundamentals, VM provisioning, basic networking' },
      { name: 'CI/CD Pipelines', level: 55, description: 'GitHub Actions, deployment workflows, environment management' },
      { name: 'Docker & Containers', level: 50, description: 'Containerisation basics, docker-compose, service orchestration' },
    ],
  },
  {
    id: 'operations-support',
    label: 'Operations Support',
    color: 'green',
    skills: [
      { name: 'Incident & Issue Triage', level: 85, description: 'Root-cause analysis, escalation paths, SLA tracking' },
      { name: 'Internal Workflow Design', level: 80, description: 'Mapping, gap analysis, and redesign of business processes' },
      { name: 'Cross-team Collaboration', level: 90, description: 'Bridging technical and non-technical stakeholders' },
    ],
  },
  {
    id: 'crm-automation',
    label: 'CRM Automation',
    color: 'orange',
    skills: [
      { name: 'HubSpot / Salesforce Config', level: 70, description: 'Pipeline setup, field mapping, deal stage automation' },
      { name: 'Lead Capture & Routing', level: 75, description: 'Form integrations, webhook triggers, assignment rules' },
      { name: 'Follow-up Sequences', level: 72, description: 'Email/task automation tied to CRM events' },
    ],
  },
  {
    id: 'business-process',
    label: 'Business Process Improvement',
    color: 'teal',
    skills: [
      { name: 'Process Mapping (BPMN)', level: 78, description: 'As-is / to-be diagrams, swimlane flows' },
      { name: 'KPI & Metrics Definition', level: 74, description: 'Identifying measurable outcomes for process changes' },
      { name: 'Change Management Support', level: 68, description: 'Documentation, training guides, stakeholder comms' },
    ],
  },
  {
    id: 'workflow-automation',
    label: 'Workflow Automation',
    color: 'cyan',
    skills: [
      { name: 'n8n / Make (Integromat)', level: 82, description: 'Multi-step automations, webhook triggers, API calls' },
      { name: 'Zapier Integrations', level: 80, description: 'App connectors, filters, data transformation' },
      { name: 'REST API Consumption', level: 70, description: 'Reading API docs, building HTTP request chains' },
    ],
  },
  {
    id: 'web-applications',
    label: 'Web Applications',
    color: 'rose',
    skills: [
      { name: 'React + TypeScript', level: 60, description: 'Component design, hooks, state management basics' },
      { name: 'Tailwind CSS', level: 68, description: 'Utility-first styling, responsive layouts' },
      { name: 'Backend Basics (Node/Supabase)', level: 55, description: 'REST endpoints, database queries, auth basics' },
    ],
  },
];

export const experiences = [
  {
    role: 'Operations Support Specialist',
    company: 'Current Employer',
    period: '2022 – Present',
    highlights: [
      'Support day-to-day business operations across multiple departments',
      'Troubleshoot operational issues and coordinate resolutions with technical teams',
      'Identify and document opportunities for workflow automation',
      'Improve internal processes to reduce manual effort and errors',
      'Work directly with business teams to translate needs into technical solutions',
      'Create SOPs and guides for recurring operational tasks',
    ],
  },
];

export const services = [
  {
    id: 'crm-setup',
    title: 'CRM Automation Setup',
    description: 'Configure pipelines, stages, and automated actions inside your CRM so deals and contacts move forward without manual nudges.',
    icon: 'Settings',
  },
   
  // existing services...

  {
    id: "infra-automation-monitoring",
    icon: "BarChart2",
    title: "Infrastructure Automation & Monitoring",
    description:
      "Combine system administration, cloud operations, and automation to monitor services, detect issues, and trigger alerts or follow-up workflows before problems become business blockers.",
  },
  {
    id: 'lead-capture',
    title: 'Lead Capture Workflow',
    description: 'Connect your web forms, ads, or landing pages to your CRM and notification tools automatically.',
    icon: 'UserPlus',
  },
  {
    id: 'followup',
    title: 'Customer Follow-up Automation',
    description: 'Trigger personalised emails, tasks, or messages based on customer actions or time-based rules.',
    icon: 'Mail',
  },
  {
    id: 'task-routing',
    title: 'Internal Task Routing',
    description: 'Route incoming requests, tickets, or tasks to the right person based on rules you define.',
    icon: 'GitBranch',
  },
  {
    id: 'ticket-workflow',
    title: 'Support Ticket Workflow',
    description: 'Automate ticket creation, assignment, escalation, and resolution notifications.',
    icon: 'Ticket',
  },
  {
    id: 'bpa',
    title: 'Business Process Automation',
    description: 'Map your manual processes and replace repetitive steps with automated workflows using n8n or Make.',
    icon: 'Zap',
  },
  {
    id: 'reporting',
    title: 'Reporting & Dashboard Automation',
    description: 'Aggregate data from multiple sources and deliver scheduled reports or live dashboards to stakeholders.',
    icon: 'BarChart2',
  },
];

export const projects = [
  {
    id: 'crm-lead',
    title: 'CRM Lead Automation System',
    tag: 'CRM Automation',
    tagColor: 'orange',
    problem: 'Sales team was manually copying leads from web forms into HubSpot, causing delays and frequent data errors.',
    solution: 'Built an n8n workflow that listens for form submissions via webhook, normalises the data, creates or updates the HubSpot contact, and assigns the lead to the correct rep based on territory.',
    tools: ['n8n', 'HubSpot API', 'Webhook', 'Typeform'],
    impact: 'Eliminated ~3 hours of manual data entry per week and reduced lead response time from 4 hours to under 5 minutes.',
  },
  {
    id: 'ticket-workflow',
    title: 'Operations Support Ticket Workflow',
    tag: 'Workflow Automation',
    tagColor: 'cyan',
    problem: 'Support requests arrived via email, Slack, and a shared spreadsheet with no consistent triage or SLA tracking.',
    solution: 'Consolidated all intake channels into a single n8n pipeline that categorises tickets, creates records in a project tool, notifies the right team, and tracks time-to-response.',
    tools: ['n8n', 'Slack API', 'Gmail API', 'Airtable'],
    impact: 'Reduced average response time by 40% and gave the ops team full visibility into open requests for the first time.',
  },
  {
    id: 'bpi-dashboard',
    title: 'Business Process Efficiency Dashboard',
    tag: 'Reporting',
    tagColor: 'teal',
    problem: 'Management had no single view of operational KPIs — data lived in spreadsheets, the CRM, and a billing system.',
    solution: 'Created an automated reporting workflow that pulls data from each source nightly, aggregates it, and pushes a summary to a shared dashboard and a weekly Slack digest.',
    tools: ['n8n', 'Google Sheets API', 'Slack', 'Airtable'],
    impact: 'Saved 2 hours of weekly manual reporting and surfaced bottlenecks that led to a 15% improvement in ticket resolution speed.',
  },
];

export const metrics = [
  { label: 'Core Skill Areas', value: '6', icon: 'Layers' },
  { label: 'Automation Projects', value: '3', icon: 'Zap' },
  { label: 'Business Process Areas', value: '5', icon: 'GitBranch' },
  { label: 'Automation Coverage', value: 'End-to-End', icon: 'Activity' }
];

export const automationTypes = [
  'CRM Automation',
  'Lead Capture',
  'Customer Follow-up',
  'Internal Task Routing',
  'Support Ticket Workflow',
  'Reporting & Dashboards',
  'Business Process Automation',
  'Other',
];

export const priorityLevels = [
  { value: 'low', label: 'Low – Planning stage, no urgency' },
  { value: 'medium', label: 'Medium – Would like to start soon' },
  { value: 'high', label: 'High – Affecting operations now' },
  { value: 'critical', label: 'Critical – Business impact daily' },
];


  
