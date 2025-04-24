"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, Layers } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  type: "fullstack" | "mobile" | "ai";
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "BlogHub",
    description:
      "Feature-rich blog platform with authentication and rich-text editing capabilities.",
    type: "fullstack",
    technologies: ["React", "Appwrite", "Tailwind CSS", "Redux"],
    image:
      "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Anonymous Messenger",
    description:
      "Secure, minimal UI for sending and receiving anonymous messages with encryption.",
    type: "fullstack",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    image:
      "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "InterviewAI",
    description:
      "Smart form builder for interview preparation with AI-powered Q&A evaluation.",
    type: "ai",
    technologies: ["Next.js", "Gemini API", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.pexels.com/photos/7147462/pexels-photo-7147462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "EventTracker",
    description:
      "Mobile app for tracking events and setting reminders with offline support.",
    type: "mobile",
    technologies: ["React Native", "Expo", "Redux Toolkit", "Async Storage"],
    image:
      "https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "Tool that generates marketing content using AI with customizable templates.",
    type: "ai",
    technologies: ["React", "OpenAI API", "Express", "MongoDB"],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Portfolio Builder",
    description:
      "Web app that helps users create professional portfolios with customizable themes.",
    type: "fullstack",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <p className="text-muted-foreground mb-8">
            A selection of my recent work
          </p>
        </FadeIn>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-8 flex flex-wrap h-auto p-1">
            <TabsTrigger value="all" className="flex-1">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="fullstack" className="flex-1">
              Full Stack
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex-1">
              Mobile
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex-1">
              Gen AI
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up">
                  <Card className="overflow-hidden h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                        <Badge variant="outline">
                          {project.type === "fullstack"
                            ? "Full Stack"
                            : project.type === "mobile"
                            ? "Mobile"
                            : "Gen AI"}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex gap-2">
                      {project.demoUrl && (
                        <Link href={project.demoUrl} className="flex-1">
                          <Button variant="default" className="w-full gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Demo
                          </Button>
                        </Link>
                      )}
                      {project.codeUrl && (
                        <Link href={project.codeUrl} className="flex-1">
                          <Button variant="outline" className="w-full gap-2">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
