type WorkExperienceItem = {
  id: number;
  position: string;
  company: string;
  description: string;
  start: string;
  end: string;
  workType: string;
};

const workExperienceData: WorkExperienceItem[] = [
  {
    id: 1,
    position: "Full-stack developer",
    company: "Ergo-net d.o.o",
    description:
      "Worked 8 months at an accounting company, maintaining and improving the client-facing application. Developed new features, fixed bugs, designed UI, and created APIs using HTML, CSS, JavaScript, PHP (Laravel), and SQL, both independently and in a team.",
    start: "May 2025",
    end: "Dec 2025",
    workType: "Full-time",
  },
];

export default workExperienceData;
