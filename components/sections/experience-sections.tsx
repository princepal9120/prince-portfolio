"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Code,
  Smartphone,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Experience {
  title: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  type: "fullstack" | "mobile" | "ai";
  icon: React.ReactNode;
  liveDemo?: string;
}

const experiences: Experience[] = [
  {
    title: "BIK.ai",
    role: "Software Engineer Intern",
    period: "Jul 2025 - Present",
    description: [
      "Built an AI shopping assistant using LangChain for contextual product discovery and conversation memory",
      "Developed scalable APIs using FastAPI, deployed with Docker Kubernetes on GCP",
      "Automated GenAI workflows using prompt-based generation and Poetry for module control",
      "Integrated advanced AI capabilities for enhanced user shopping experience",
    ],
    skills: [
      "LangChain",
      "FastAPI",
      "Docker",
      "Kubernetes",
      "GCP",
      "Poetry",
      "GenAI",
    ],
    type: "ai",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
  {
    title: "Dodoozy",
    role: "Software Developer Intern (Mobile)",
    period: "Apr 2025 - Jun 2025",
    description: [
      "Developed 15+ reusable components in React Native (Expo) improving codebase modularity",
      "Used Context API for state handling, reducing prop drilling across 8 screens",
      "Enhanced UX with 40% faster renders through optimized animations and image loading",
      "Built scalable mobile architecture with focus on performance and user experience",
    ],
    skills: [
      "React Native",
      "Expo",
      "Context API",
      "JavaScript",
      "Mobile Development",
    ],
    type: "mobile",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    title: "Blackbytt",
    role: "Software Development Intern",
    period: "Oct 2024 - Dec 2024",
    description: [
      "Revamped web UI/UX and improved form validation logic to reduce backend errors",
      "Designed MongoDB schemas with indexed caching, speeding up reads by 25%",
      "Built frontend features using React.js, aligning with business and accessibility goals",
      "Collaborated with cross-functional teams to deliver production-ready solutions",
    ],
    skills: [
      "React.js",
      "MongoDB",
      "UI/UX",
      "Form Validation",
      "Caching",
      "Accessibility",
    ],
    type: "fullstack",
    icon: <Code className="h-5 w-5" />,
  },
  {
    title: "Imocha",
    role: "Problem Setter (Freelancer)",
    period: "Aug 2022 - Apr 2023",
    description: [
      "Created 50+ algorithmic questions focused on data structures and algorithms",
      "Improved technical test quality and reduced candidate screening time by 25%",
      "Utilized debugging techniques to ensure high-quality assessment content for technical interviews",
      "Developed challenging problems for technical assessments and candidate evaluation",
    ],
    skills: [
      "DSA",
      "Problem Solving",
      "Debugging",
      "Technical Assessments",
      "Algorithms",
    ],
    type: "fullstack",
    icon: <Code className="h-5 w-5" />,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Experience & Projects</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            My professional journey, internships, and notable projects
          </p>
        </FadeIn>

        <div className="mt-6 space-y-6">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        {exp.icon}
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        {exp.liveDemo && (
                          <a
                            href={exp.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        {exp.role} | {exp.period}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      <Badge variant="outline" className="w-fit">
                        {exp.type === "fullstack"
                          ? "Full Stack"
                          : exp.type === "mobile"
                          ? "Mobile"
                          : "Gen AI"}
                      </Badge>
                    </div>
                  </div>

                  <ul className="mb-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mr-1 mt-0.5">
                          •
                        </span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="https://drive.google.com/file/d/1QmV5lqYrRxuhlP28wp4uZrf56HXrV_uN/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              Download Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </Button>
          </a>

          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/prince-pal-59a217229"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="lg">
                LinkedIn
              </Button>
            </a>
            <a
              href="https://github.com/prince7021"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="lg">
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
