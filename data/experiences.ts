export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "fulltime" | "intern" | "contract";
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "BIK.ai",
    role: "Software Engineer Intern",
    type: "intern",
    duration: "july 2024 - present",
    startDate: "2024-07",
    endDate: "present",
    description: "Building AI shopping assistant with LangChain & GCP",
    achievements: [
      "Developed AI-powered shopping recommendation system",
      "Integrated LangChain for natural language processing",
      "Optimized cloud infrastructure on GCP"
    ],
    technologies: ["LangChain", "GCP", "Python", "AI/ML"],
    logo:  "/logos/aniverse.png"
  },
  {
    id: "2",
    company: "Dodoozy",
    role: "Mobile Developer Intern",
    type: "intern",
    duration: "april 2024 - june 2024",
    startDate: "2024-04",
    endDate: "2024-06",
    description: "15+ React Native components, 40% faster renders",
    achievements: [
      "Built 15+ reusable React Native components",
      "Improved app rendering performance by 40%",
      "Implemented responsive mobile UI/UX"
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Mobile"],
    logo:  "/logos/aniverse.png"
  },
  {
    id: "3",
    company: "Blackbytt",
    role: "Software Development Intern",
    type: "intern",
    duration: "october 2024 - december 2024",
    startDate: "2024-10",
    endDate: "2024-12",
    description: "UI/UX revamp, 25% faster database reads",
    achievements: [
      "Redesigned UI/UX for better user experience",
      "Optimized database queries for 25% performance improvement",
      "Implemented modern frontend architecture"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Full Stack"],
    logo: "/logos/aniverse.png"
  }
];
