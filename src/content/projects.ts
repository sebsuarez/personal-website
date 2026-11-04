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
    slug: "lotion",
    name: "Lotion",
    description:
      "A Notion-inspired note-taking app with rich-text editing, client-side routing, and persistent browser storage.",
    technologies: ["React", "React Router", "React Quill", "localStorage"],
    year: "2026",
    githubUrl: "https://github.com/sebsuarez/lotion",
    featured: true,
  },
  {
    slug: "jobwhen",
    name: "Job When?",
    description:
      "A gamified job-search accountability platform for students and new grads. Track applications, set goals, and earn XP.",
    technologies: ["React", "Flask", "PostgreSQL", "Docker"],
    year: "2026",
    githubUrl: "https://github.com/sebsuarez/jobwhen",
    featured: true,
  },
  {
    slug: "placeholder-project",
    name: "— Project —",
    description: "Replace this with your third featured project.",
    technologies: [],
    year: "—",
    featured: true,
    isPlaceholder: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
