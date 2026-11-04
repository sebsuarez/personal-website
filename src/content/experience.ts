export type ExperienceEntry = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  isPlaceholder?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    role: "Software Development Intern",
    company: "TC Energy",
    startDate: "Jan 2025",
    endDate: "Aug 2025",
    description:
      "Twelve teams were tracking everything in spreadsheets. I built them a real web app instead. Angular frontend, Python backend, AWS under the hood. Their 4-minute data lookup now takes 1.",
  },
  {
    role: "Program Optimization Intern",
    company: "TC Energy",
    startDate: "May 2024",
    endDate: "Dec 2024",
    description:
      "Made a bunch of automations that saved people from doing tedious data entry by hand, across 300+ pipeline projects. Also built some fancy dashboards for VP budget meetings and helped 3 new hires get settled in.",
  },
];
