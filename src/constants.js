// ─── Personal Info ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Nicolas Ranz",
  email: "nranz@hotmail.com",
  phone: "(571) 330-3426",
  linkedin: "https://www.linkedin.com/in/nick-ranz/",
  github: "https://github.com/nickranz",
  expStartMonth: 8, // month career started (used to calculate years of exp)
  expStartYear: 2024, // year career started
};

// ─── Contact Links ─────────────────────────────────────────────────────────────

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    icon: "mail",
  },
  {
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:+15713303426`,
    icon: "call",
  },
  {
    label: "LinkedIn",
    value: "in/nick-ranz",
    href: PERSONAL.linkedin,
    icon: "link",
  },
  {
    label: "GitHub",
    value: "github.com/nickranz",
    href: PERSONAL.github,
    icon: "terminal",
  },
];

// ─── Experience ────────────────────────────────────────────────────────────────

export const EXPERIENCES = [
  {
    title: "Full Stack Software Developer",
    employer: "US HealthTek",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "Remote",
    description: [
      "Designed and implemented CRM module spanning 7 functional areas and 16+ user stories, delivering account/prospect lifecycle management, incident tracking, activity logging, and document management with 15+ serverless APIs.",
      "Owned end-to-end integration of a 3rd-party ICD code vendor API within a 1-month timeline, replacing static code lists with real-time disease and ICD code lookups during lab test ordering to improve billing accuracy and claims compliance.",
      "Built a self-healing error system for the ICD integration featuring automated retries, structured DB error logging, and failure email alerts — eliminating manual intervention on transient vendor failures.",
      "Built frontend workflows using React, Ant Design, AG Grid, and Redux-Saga, implementing permissioned routing and data synchronization with backend APIs.",
      "Developed 10+ serverless backend features using Node.js on AWS Lambda, API Gateway, Cognito, and PostgreSQL, contributing to a fully AWS-hosted architecture.",
      "Worked within a 6-person Agile team on 2-week sprint cycles, consistently delivering features on schedule.",
    ],
    technicalHighlight:
      "Serverless healthcare LIS/CRM platform built on AWS Lambda, API Gateway, Cognito, and PostgreSQL.",
    stack: [
      "React",
      "Node.js",
      "AWS Lambda",
      "PostgreSQL",
      "Redux-Saga",
      "Ant Design",
      "AG Grid",
    ],
  },
  {
    title: "Full Stack Software Developer",
    employer: "FedTec",
    startDate: "Aug 2024",
    endDate: "Jun 2025",
    location: "Reston, Virginia",
    description: [
      "Built an automated contract-intake system replacing manual monitoring of SAM.gov and GSA eBuy, processing ~100 government contract opportunities per week and eliminating ~8 hours of daily manual intake work across a 3–4 person proposal team.",
      "Used Selenium to extract contract data, stored structured data in MongoDB, and built a service to detect new/updated records and generate cards in Infinity (3rd-party PM tool).",
      "Architected the solution with 6–10 Flask microservices and a lightweight queue-based synchronization system; deployed to Kubernetes across Dev/Stage/Prod with CI/CD via GitHub Actions and ArgoCD.",
      "Built reusable starter framework with Remix, React, and Angular — each including a USWDS-compliant landing page, OAuth2.0 via Keycloak (BFF architecture), multi-step forms, and CI/CD pipelines to Azure and AWS.",
      "Built a full stack Employee Management app using Angular, .NET, and Microsoft Graph API with Entra ID auth, RBAC, and autocomplete UI — led transition from PoC to internally adopted application.",
    ],
    technicalHighlight:
      "Enabled end-to-end observability with Loki + Grafana for log monitoring and system health tracking across microservices.",
    stack: [
      "React",
      "Angular",
      "Remix",
      "Flask",
      "Node.js",
      "MongoDB",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "Azure",
      "AWS",
      "Keycloak",
      ".NET Core",
      "Spring Boot",
    ],
  },
  {
    title: "Software Developer Intern",
    employer: "Leidos",
    startDate: "Aug 2023",
    endDate: "May 2024",
    location: "Fairfax, Virginia",
    description: [
      "Integrated an LLM-powered plugin into a Ghidra decompiler to auto-generate code comments and rename variables, improving reverse engineering analysis speed.",
      "Benchmarked LLM output using ROUGE scores to evaluate summarization quality.",
      "Collaborated in an Agile environment contributing to sprint planning, goal setting, and cross-functional coordination.",
      "Used Ghidra, OpenLLM, and OpenAI API to support feature development and testing.",
    ],
    stack: ["Python", "Ghidra", "OpenAI API", "OpenLLM"],
  },
];

// ─── Skills ────────────────────────────────────────────────────────────────────
// Each entry: [name, sub-label]

export const SKILLS = {
  languages: [
    ["JavaScript", "primary"],
    ["TypeScript", "primary"],
    ["Python", "scripting"],
    ["Java", "backend"],
    ["C", "systems"],
    ["SQL", "data"],
  ],
  frameworks: [
    ["React", "frontend"],
    ["Angular", "frontend"],
    ["Remix", "fullstack"],
    ["Node.js", "backend"],
    ["Flask", "backend"],
    [".NET Core", "backend"],
    ["Spring Boot", "backend"],
  ],
  databases: [
    ["PostgreSQL", "relational"],
    ["MongoDB", "document"],
  ],
  cloudDevOps: [
    ["AWS", "cloud"],
    ["Azure", "cloud"],
    ["Docker", "containers"],
    ["Kubernetes", "orchestration"],
    ["GitHub Actions", "CI/CD"],
    ["ArgoCD", "GitOps"],
    ["Loki", "observability"],
    ["Grafana", "observability"],
  ],
  tools: [
    ["Keycloak", "auth"],
    ["Microsoft Entra ID", "auth"],
    ["USWDS", "design system"],
    ["ESLint", "tooling"],
    ["xUnit", "testing"],
    ["OpenAI", "AI/ML"],
    ["Claude", "AI/ML"],
  ],
};

// ─── Projects ──────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    title: "Adaptive Analytics Dashboard",
    blurb:
      "Built a responsive data experience with live filters, stories, and motion that keeps analysts in flow.",
    stack: ["React", "D3", "Framer Motion"],
    link: "#",
  },
  {
    title: "Portfolio System",
    blurb:
      "A modular portfolio builder with reusable sections, theming controls, and fast content editing.",
    stack: ["React", "Tailwind", "Vite"],
    link: "#",
  },
  {
    title: "Design System Starter",
    blurb:
      "Tokens, typography scales, and accessible components packaged for product teams to ship faster.",
    stack: ["TypeScript", "Storybook", "Radix"],
    link: "#",
  },
];
