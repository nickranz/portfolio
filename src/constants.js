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
    // technicalHighlight:
    //   "Serverless healthcare LIS/CRM platform built on AWS Lambda, API Gateway, Cognito, and PostgreSQL.",
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
    description:
      "Contributed to multiple R&D and internal tooling projects supporting federal clients, spanning full-stack development and DevOps.",
    projects: [
      {
        name: "Contract Capture & Processing App",
        blurb:
          "Built an automated contract-intake system replacing manual monitoring of SAM.gov and GSA eBuy, processing ~100 government contract opportunities per week and eliminating ~8 hours of daily manual intake work across a 3–4 person proposal team.",
        bullets: [
          "Used Selenium to extract contract data and stored structured data in MongoDB.",
          "Built service to detect new/updated records and generate corresponding cards in Infinity (3rd-party PM tool).",
          "Implemented 2FA-enabled login automation via business email for authenticated scraping.",
          "Architected the solution with 6–10 Flask microservices and a lightweight queue-based synchronization system for contract ingestion and downstream processing.",
          "Deployed to Kubernetes across Dev/Stage/Prod environments, with automated CI/CD pipelines using GitHub Actions and ArgoCD.",
          "Enabled end-to-end observability with Loki + Grafana for log monitoring and system health tracking.",
        ],
      },
      {
        name: "Starter Stack Template Project",
        blurb:
          "Built a reusable starter framework to rapidly prototype full-stack federal applications across multiple tech stacks, enabling faster turnaround for client-specific proof-of-concept (PoC) requests.",
        bullets: [
          "Built consistent frontends with Remix, React, and Angular — each including a USWDS-compliant landing page, login/logout flow, multi-step expense submission form, and review page.",
          "Integrated OAuth2.0 authentication with Keycloak across multiple frontends, migrating from Implicit Flow to a secure Backend-for-Frontend (BFF) architecture.",
          "Added and configured code styling/linting tools (ESLint, Prettier, xUnit) and documented developer usage.",
          "Contributed to Spring Boot and .NET Core backend development.",
          "Supported CI/CD workflows using GitHub Actions, deploying to Azure and AWS, and publishing code coverage reports to GitHub Pages.",
        ],
      },
      {
        name: "Internal Employee Management System",
        bullets: [
          "Built a full stack app using Angular, .NET, and Microsoft Graph API for managing employee data and access.",
          "Integrated Microsoft Entra ID (Azure AD) for authentication and delegated permissions.",
          "Implemented role-based access control (RBAC) and autocomplete UI components to streamline data entry.",
          "Led transition from proof-of-concept to internally adopted application.",
        ],
      },
    ],

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
