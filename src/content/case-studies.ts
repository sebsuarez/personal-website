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
    slug: "scout",
    title: "SCOUT UAV",
    tagline: "Ground control station for a search-and-rescue drone (UAV)",
    year: "2026",
    role: "Software Lead, Capstone at University of Calgary x Lockheed Martin",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "PyMAVLink",
      "ArduPilot SITL",
      "MapLibre GL",
      "Vitest",
      "pytest",
      "GitHub Actions",
    ],
    overview:
      "SCOUT is a capstone project sponsored by Lockheed Martin to design a fixed-wing Unmanned Aerial Vehicle (UAV) capable of autonomous search-and-rescue missions. I lead the software team, building the web-based ground control station (GCS) that operators use to plan missions, monitor live telemetry, review thermal video, and confirm person detections. All in one interface.",
    sections: [
      {
        heading: "Problem",
        content:
          "Search-and-rescue operators need to monitor flight telemetry, control the UAV's mission, and review thermal-camera detections simultaneously. Existing open-source GCS tools are either too low-level for non-technical operators or too coupled to a specific hardware stack. The goal was a custom operator-first interface designed around the SCOUT mission profile.",
      },
      {
        heading: "Architecture",
        content:
          "The GCS is a React + TypeScript SPA, served via Vite, that talks to a FastAPI backend over WebSockets for live telemetry and a REST API for mission data. The backend connects to the autopilot (ArduPilot) over MAVLink using PyMAVLink, translating raw MAVLink messages into structured JSON events the frontend subscribes to.\n\nThe map layer uses MapLibre GL for real-time vehicle track rendering and mission waypoint editing. Thermal video frames are streamed as MJPEG and overlaid in a secondary panel alongside the detection queue.",
      },
      {
        heading: "Engineering challenges",
        content:
          "MAVLink is a binary protocol designed for embedded systems. Bridging it cleanly to a WebSocket API required careful message parsing and state reconciliation when packets arrive out of order or are dropped. The other hard problem was telemetry latency: at 10 Hz from the autopilot, the UI needs to update without blocking the main thread, so telemetry state lives outside React's render cycle and is pushed to components via a lightweight pub/sub layer.",
      },
      {
        heading: "Testing and CI",
        content:
          "ArduPilot SITL (software-in-the-loop simulation) runs in CI alongside the backend, so integration tests can exercise the full MAVLink pipeline without physical hardware. The frontend is tested with Vitest and the backend with pytest; GitHub Actions runs both on every PR.",
      },
    ],
  },
  {
    slug: "trading-platform",
    title: "Trading Platform",
    tagline: "Automated quantitative trading and execution engine",
    year: "2026",
    role: "Solo project",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite",
      "WireGuard VPN",
      "Discord API",
    ],
    overview:
      "A 24/7 automated trading platform I built to run a systematic, model-driven strategy. It generates ML-based entry signals, routes orders through a FastAPI execution engine in under 200 ms, maintains a full SQLite ledger with idempotency keys, and exposes a live React dashboard for monitoring positions, P&L, and system health.",
    sections: [
      {
        heading: "Motivation",
        content:
          "I wanted hands-on experience with the engineering problems behind real trading infrastructure. Not just the ML side, but the execution layer: latency, fault tolerance, partial fills, and audit trails. Building it myself forced me to solve problems that are glossed over in tutorials.",
      },
      {
        heading: "Execution engine",
        content:
          "The core is a FastAPI service that processes order intents from the signal layer, validates them against position limits and available balance, and submits them to the exchange. End-to-end order latency is consistently under 200 ms. Idempotency keys prevent duplicate orders if a request is retried after a network failure. Partial fills are tracked in SQLite and reconciled against expected fills before the system places the next order.",
      },
      {
        heading: "Signal generation",
        content:
          "The signal layer runs a set of Python models trained on price and volume features. Models are evaluated periodically and new ones are promoted to live only when they pass backtesting thresholds. The architecture keeps signal generation and execution decoupled: a signal is just a JSON payload with a direction and confidence score, so the execution engine doesn't know or care what produced it.",
      },
      {
        heading: "Infrastructure",
        content:
          "The platform runs on a VPS behind a WireGuard VPN. No open ports except the VPN tunnel. The React dashboard connects through the same tunnel, so position data and system health are visible from anywhere without exposing the execution engine. Discord alerts fire on fills, errors, and daily P&L summaries.",
      },
    ],
  },
  {
    slug: "jobwhen",
    title: "Job When?",
    tagline: "A gamified job-search accountability platform",
    year: "2026",
    role: "Team of 5, SENG 513 at University of Calgary",
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
      "Job When? is a web platform built for SENG 513 to help students and new graduates manage their job search. The app uses gamification (XP, goals, and badges) to make an often demoralising process feel more structured and social.",
    sections: [
      {
        heading: "Team and scope",
        content:
          "Five-person team project over a full semester at UCalgary. The scope covered authentication, application tracking, goal-setting, peer visibility, and a leaderboard. I contributed across the full stack.",
      },
      {
        heading: "Architecture",
        content:
          "React + Vite frontend, Flask REST API, PostgreSQL 15 database, orchestrated with Docker Compose. Any team member could spin up the full stack locally with a single command (docker compose up --build), with schema.sql and seed.sql running automatically on first start. Authentication uses Google OAuth with the client ID passed through environment variables to both services.",
      },
      {
        heading: "Engineering challenges",
        content:
          "Coordinating five developers on a full-stack project meant establishing clear API contracts early. Docker Compose gave us reproducible local environments, which reduced the integration friction that comes from subtle differences in individual setups.",
      },
      {
        heading: "What I learned",
        content:
          "Working across a containerised full-stack project taught me how the pieces fit together at the system level. Not just writing code in isolation, but thinking about how the frontend, API, and database communicate, and how to make that setup reproducible for an entire team.",
      },
    ],
  },
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
      "Lotion is a single-page application I built to deepen my understanding of React's routing model and state management patterns. Notes with their own URLs, a read/edit split, and localStorage persistence. Entirely client-side, no backend.",
    sections: [
      {
        heading: "Architecture",
        content:
          "React Router v6 layout routes render the sidebar and header once, while the main panel swaps between a read view and an edit view using the Outlet pattern. Note data is shared across child routes via useOutletContext. Each note gets a UUID on creation for stable routing, and useEffect syncs state to localStorage on every change.",
      },
      {
        heading: "Engineering challenges",
        content:
          "Integrating React Quill required bridging its internal state with React's controlled-component model, and ensuring the HTML it produces survives JSON serialisation to localStorage without data loss.",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
