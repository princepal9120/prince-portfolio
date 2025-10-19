export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "1",
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go", "SQL"]
  },
  {
    id: "2",
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn", "React Native", "Expo","Redux", "Zustand","React Query", "Framer Motion"]
  },
  {
    id: "3",
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "NestJS","PostgreSQL", "Gin", "MongoDB", "Prisma", "Socket.io"]
  },
  {
    id: "4",
    title: "AI/ML",
    skills: ["LangChain","Langgraph", "OpenAI", "Streamlit", "PyTorch", "HuggingFace Transformers"]
  },
  {
    id: "5",
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Vercel", "Kubernetes", "Terraform", "CloudFlare"]
  },

  {
    id: "6",
    title: "Tools",
    skills: ["Git", "gRPC", "GraphQL", "REST APIs", "Cursor"]
  }
];
