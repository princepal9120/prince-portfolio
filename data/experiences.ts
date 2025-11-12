export interface Experience {
  id: string;
  company: string;
  link?: string;
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
    link: "https://bik.ai",
    role: "Software Engineer",
    type: "fulltime",
    duration: "july 2024 - present",
    startDate: "2024-07",
    endDate: "present",
    description:
      "Building AI shopping assistant with fullstack with GenAI Experience",
    achievements: [
      "Built an AI shopping assistant using LangChain for contextual product discovery and conversation memory",
      "Developed scalable APIs using FastAPI, deployed with Docker Kubernetes on GCP",
      "Automated GenAI workflows using prompt-based generation and Poetry for module control",
      "Integrated advanced AI capabilities for enhanced user shopping experience",
    ],
    technologies: ["LangChain", "GCP", "Python", "AI/ML"],
    logo: "/company/bik.png",
  },
  {
    id: "2",
    company: "Dodoozy",
    link: "https://dodoozy.com",
    role: "Mobile Developer Intern",
    type: "intern",
    duration: "april 2024 - june 2024",
    startDate: "2024-04",
    endDate: "2024-06",
    description: "15+ React Native components, 40% faster renders",
    achievements: [
      "Developed 15+ reusable components in React Native (Expo) improving codebase modularity",
      "Used Context API for state handling, reducing prop drilling across 8 screens",
      "Enhanced UX with 40% faster renders through optimized animations and image loading",
      "Built scalable mobile architecture with focus on performance and user experience",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Mobile"],
    logo: "/company/dodoozy.png",
  },
  {
    id: "3",
    company: "Stealth Startup",
    link: "",
    role: "Software Development Intern",
    type: "intern",
    duration: "october 2024 - april 2025",
    startDate: "2024-10",
    endDate: "2024-12",
    description: "UI/UX revamp, 25% faster database reads",
    achievements: [
      "Revamped web UI/UX and improved form validation logic to reduce backend errors",
      "Designed MongoDB schemas with indexed caching, speeding up reads by 25%",
      "Built frontend features using React.js, aligning with business and accessibility goals",
      "Collaborated with cross-functional teams to deliver production-ready solutions",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Full Stack"],
    logo: "/company/stealth.png",
  },
];
