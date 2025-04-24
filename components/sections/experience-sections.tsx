"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FadeIn from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Smartphone, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Experience {
  title: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  type: "fullstack" | "mobile" | "ai";
  icon: React.ReactNode;
}

const experiences: Experience[] = [
  {
    title: "Freelance Developer",
    role: "Full Stack Developer",
    period: "2023 - Present",
    description: [
      "Built SaaS platforms with React, Next.js, and various backend technologies",
      "Developed a job portal with user authentication and posting features",
      "Created an anonymous messaging application with focus on privacy",
      "Implemented responsive designs using Tailwind CSS and component libraries"
    ],
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind", "Shadcn UI"],
    type: "fullstack",
    icon: <Code className="h-5 w-5" />
  },
  {
    title: "Mobile App Projects",
    role: "Mobile Developer",
    period: "2023 - 2024",
    description: [
      "Developed React Native applications for event tracking and reminders",
      "Implemented cross-platform UI components with Tailwind for React Native",
      "Created offline-first applications with local storage synchronization",
      "Integrated push notifications and deep linking functionality"
    ],
    skills: ["React Native", "Expo", "Redux Toolkit", "Tailwind RN"],
    type: "mobile",
    icon: <Smartphone className="h-5 w-5" />
  },
  {
    title: "Gen AI Projects",
    role: "AI Developer",
    period: "2024 - Present",
    description: [
      "Built InterviewAI, a form builder powered by Gemini API with speech-to-text capabilities",
      "Developed AI agents for handling client queries and support",
      "Integrated AI capabilities into user interfaces for enhanced experiences",
      "Created natural language processing solutions for content generation"
    ],
    skills: ["Gemini API", "OpenAI", "Langchain", "STT/TTS", "Python"],
    type: "ai",
    icon: <BrainCircuit className="h-5 w-5" />
  },
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>
          <p className="text-muted-foreground mb-8">My professional journey and projects</p>
        </FadeIn>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-8 flex flex-wrap h-auto p-1">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="fullstack" className="flex-1">Full Stack</TabsTrigger>
            <TabsTrigger value="mobile" className="flex-1">Mobile</TabsTrigger>
            <TabsTrigger value="ai" className="flex-1">Gen AI</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6 space-y-6">
            {filteredExperiences.map((exp, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          {exp.icon}
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{exp.role} | {exp.period}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {exp.type === "fullstack" ? "Full Stack" : 
                         exp.type === "mobile" ? "Mobile" : "Gen AI"}
                      </Badge>
                    </div>
                    
                    <ul className="mb-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-bold mr-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Link href="#resume">
            <Button variant="outline" size="lg" className="gap-2">
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
          </Link>
        </div>
      </div>
    </section>
  );
}