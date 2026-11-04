export type Project = {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
  featured: boolean;
  isPlaceholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "scout",
    name: "SCOUT UAV",
    description:
      "My Lockheed Martin capstone. A web app to fly and monitor a search-and-rescue drone, with a live map, thermal camera feed, and a review queue for people the AI spotted on the ground.",
    technologies: ["React", "TypeScript", "FastAPI", "PyMAVLink", "ArduPilot", "MapLibre"],
    year: "2026",
    featured: true,
  },
  {
    slug: "trading-platform",
    name: "Trading Platform",
    description:
      "A trading bot that handles itself 24/7. Reads ML signals, fires orders in under 200ms, and manages its own edge cases. I built a React dashboard so I can peek in on what it's doing.",
    technologies: ["Python", "FastAPI", "React", "SQLite", "WireGuard"],
    year: "2026",
    featured: true,
  },
  {
    slug: "jobwhen",
    name: "Job When?",
    description:
      "Job searching is rough. So five of us built an app to make it hurt a bit less. Track applications, earn XP for applying, and keep up with how your friends are doing.",
    technologies: ["React", "Flask", "PostgreSQL", "Docker"],
    year: "2026",
    githubUrl: "https://github.com/sebsuarez/jobwhen",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
