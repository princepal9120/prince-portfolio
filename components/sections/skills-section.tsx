"use client";

import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/fade-in";
import { Code } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI", "NestJS", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    title: "AI/ML",
    skills: ["LangChain", "OpenAI", "Gemini API", "Streamlit", "PyTorch", "Transformers"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Vercel", "Kubernetes", "Terraform", "CloudFlare"],
  },
  {
    title: "Data Engineering",
    skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "DBaaS"],
  },
  {
    title: "Others",
    skills: ["Git", "gRPC", "GraphQL", "REST APIs", "Socket.io", "NATS"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-6 w-6 text-cyan-400" />
            <h2 className="text-3xl font-bold">Skills</h2>
          </div>
          <p className="text-muted-foreground mb-12">
            Here are some of the skills I have acquired over the years of my journey in the tech industry. I am always looking to learn more and improve my skillset.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={0.1 * index}>
              <div className="bg-card/30 border border-border/50 rounded-lg p-5 hover:border-cyan-400/30 transition-colors">
                <h3 className="text-sm font-semibold mb-4 text-cyan-400">
                  {index + 1}. {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-muted/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
