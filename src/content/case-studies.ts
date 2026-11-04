export type CaseStudySection = {
  heading: string;
  content: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  heroImage?: string;
  overview: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "lotion",
    title: "Lotion",
    tagline: "A Notion-inspired note-taking web app",
    year: "2026",
    role: "Solo project",
    technologies: [
      "React",
      "React Router v6",
      "React Quill",
      "localStorage",
      "CSS Flexbox",
      "Netlify",
    ],
    githubUrl: "https://github.com/sebsuarez/lotion",
    overview:
      "Lotion is a single-page application I built to deepen my understanding of React's routing model and state management patterns. The goal was to create something that felt polished — notes with their own URLs, a read/edit split, and persistence across sessions — entirely client-side, without a backend.",
    sections: [
      {
        heading: "Problem",
        content:
          "I wanted to build something with real routing complexity beyond a basic SPA. Note-taking apps make for a good test case: each note needs its own URL, notes should open read-only and switch to edit mode without losing context, and everything needs to survive a page refresh.",
      },
      {
        heading: "Architecture",
        content:
          "The app uses React Router v6 layout routes to render the sidebar and header once at the layout level, while the main panel swaps between a read view and an edit view using the Outlet pattern. Note data is shared across child routes via useOutletContext rather than prop drilling.\n\nPersistence is handled by localStorage. Each note gets a UUID on creation for stable routing, and useEffect syncs state to storage automatically on every change.",
      },
      {
        heading: "Engineering challenges",
        content:
          "The main challenge was integrating React Quill, a rich-text editor that manages its own internal state. Bridging it cleanly with React's controlled-component model — and ensuring the HTML it produces survives JSON serialisation to localStorage — required careful handling of the editor's lifecycle.",
      },
      {
        heading: "What I learned",
        content:
          "React Router v6's nested layout pattern is significantly cleaner than the v5 approach for apps with shared chrome. The useOutletContext API makes state sharing between nested routes feel intentional rather than a workaround.",
      },
    ],
  },
  {
    slug: "jobwhen",
    title: "Job When?",
    tagline: "A gamified job-search accountability platform",
    year: "2026",
    role: "Team of 5 — SENG 513, University of Calgary",
    technologies: [
      "React",
      "Vite",
      "Python",
      "Flask",
      "PostgreSQL 15",
      "Docker",
      "Docker Compose",
      "Google OAuth",
    ],
    githubUrl: "https://github.com/sebsuarez/jobwhen",
    overview:
      "Job When? is a web platform built for SENG 513 to help students and new graduates manage their job search. The app uses gamification — XP, goals, and badges — to make an often demoralising process feel more structured and social.",
    sections: [
      {
        heading: "Team and scope",
        content:
          "This was a five-person team project over a semester at UCalgary. The scope covered user authentication, application tracking, goal-setting, peer visibility, and a leaderboard. I contributed across the stack as part of that team.",
      },
      {
        heading: "Architecture",
        content:
          "The stack keeps concerns clearly separated: a React + Vite frontend, a Flask REST API, and a PostgreSQL 15 database, orchestrated with Docker Compose. Any team member could spin up the full stack locally with a single command — docker compose up --build — with schema.sql and seed.sql running automatically on first start.\n\nAuthentication uses Google OAuth, with the client ID passed through environment variables to both the frontend and backend. We also supported an optional Neon cloud database connection for persistent remote development.",
      },
      {
        heading: "Engineering challenges",
        content:
          "Coordinating five developers on a full-stack project meant establishing clear API contracts early. Docker Compose gave us reproducible local environments, which reduced the integration friction that comes from subtle differences in individual setups.",
      },
      {
        heading: "What I learned",
        content:
          "Working across a full containerised stack taught me how the pieces fit together at the system level — not just writing code in isolation, but thinking about how the frontend, API, and database communicate, and how to make that setup reproducible for a whole team.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
