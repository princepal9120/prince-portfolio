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
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn", "Framer Motion"]
  },
  {
    id: "3",
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "NestJS", "PostgreSQL", "MongoDB"]
  },
  {
    id: "4",
    title: "Mobile",
    skills: ["React Native", "Expo"]
  },
  {
    id: "5",
    title: "AI/ML",
    skills: ["LangChain", "OpenAI", "Gemini API", "Streamlit", "PyTorch", "Transformers"]
  },
  {
    id: "6",
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Vercel", "Kubernetes", "Terraform", "CloudFlare"]
  },
  {
    id: "7",
    title: "Data Engineering",
    skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "DBaaS"]
  },
  {
    id: "8",
    title: "Others",
    skills: ["Git", "gRPC", "GraphQL", "REST APIs", "Socket.io", "NATS"]
  }
];
