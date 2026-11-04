export type ExperienceEntry = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  isPlaceholder?: boolean;
};

// Replace placeholder entries with your real experience.
export const experience: ExperienceEntry[] = [
  {
    role: "— Role —",
    company: "— Company —",
    startDate: "— Start —",
    endDate: "— End —",
    description:
      "Replace with a one-line summary of your responsibilities and impact at this role.",
    isPlaceholder: true,
  },
  {
    role: "— Role —",
    company: "— Company —",
    startDate: "— Start —",
    endDate: "— End —",
    description:
      "Replace with a one-line summary of your responsibilities and impact at this role.",
    isPlaceholder: true,
  },
];
