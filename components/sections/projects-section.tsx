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
    title: "RAG-Chatbot",
    description:
      "A resume-aware chatbot using RAG, LLM function-calling, and LangChain that provides contextual responses.",
    type: "ai",
    technologies: [
      "Next.js",
      "LangChain",
      "AstraDB",
      "Gemini API",
      "TypeScript",
    ],
    image: "./chatbot.png",
    demoUrl: "https://prince-personalized-chatbot.vercel.app",
    codeUrl: "https://github.com/princepal9120/PersonalizedChatbot",
  },
  {
    title: "EcoQuest",
    description:
      "AI-driven waste reporting system that reduced response time by 30% through image-based reporting.",
    type: "fullstack",
    technologies: [
      "Next.js",
      "Drizzle ORM",
      "PostgreSQL",
      "Gemini Vision API",
      "Google Maps API",
    ],
    image: "./ecoquest.png",
    demoUrl: "https://ecoquest-topaz.vercel.app/",
    codeUrl: "https://github.com/prncepal9120/ecoquest",
  },

  {
    title: "Learnify",
    description:
      "Scalable LMS platform enabling seamless course creation and enrollment for 500+ users.",
    type: "fullstack",
    technologies: [
      "React.js",
      "React Query",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    image: "./learnify.png",
    demoUrl: "https://learnifywithai.onrender.com",
    codeUrl: "https://github.com/princepal9120/Learnify",
  },

  {
    title: "JobConnect Portal",
    description:
      "A full-stack job portal enabling recruiters and candidates to post, search, and apply for jobs with a real-time dashboard for analytics and notifications.",
    type: "fullstack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "JWT Authentication",
    ],
    image: "./jobportal.png",
    demoUrl: "https://talentbridge-1yxp.onrender.com/",
    codeUrl: "https://github.com/princepal9120/TalentBridge",
  },
  {
    title: "LinkedIn Post Generator",
    description:
      "AI-based tool that generates LinkedIn posts in a user's writing style using few-shot learning.",
    type: "ai",
    technologies: [
      "Python",
      "Streamlit",
      "Meta Llama",
      "Pandas",
      "Few-Shot Learning",
    ],
    image:
      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com/princepal9120/linkedin_post_generator",
    codeUrl: "https://github.com/princepal9120/linkedin_post_generator",
  },

  {
    title: "EmailGenie",
    description:
      "An AI-powered email template generator that creates personalized outreach messages based on user queries using LangChain and Gmail API.",
    type: "ai",
    technologies: ["Typescript", "LangChain", "Gmail API", "NextJs"],
    image: "./email.png",
    demoUrl: "https://email-generator-eta.vercel.app",
    codeUrl: "https://github.com/princepal9120/email-generator",
  },
  {
    title: "CricketChat Live",
    description:
      "A real-time chat application for cricket enthusiasts, featuring topic rooms, live scoring updates, and user profiles—built with MERN and Socket.io.",
    type: "fullstack",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "WebSockets",
    ],
    image: "./cricket_chat.png",
    demoUrl: "https://cricket-chat-room-client.vercel.app",
    codeUrl: "https://github.com/princepal9120/cricket_chat_room_client",
  },
  {
    title: "Splitmate",
    description:
      "Mobile expense tracking application with group expense management for 300+ users.",
    type: "mobile",
    technologies: [
      "React Native",
      "Expo Router",
      "Firebase",
      "Zustand",
      "AsyncStorage",
    ],
    image:
      "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://www.youtube.com/watch?v=sVtEbq94MfM",
    codeUrl: "https://github.com/princepal9120/Splitmate",
  },
  {
    title: "Medialarm",
    description:
      "React Native medicine tracker with personalized medication reminders and biometric authentication.",
    type: "mobile",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Async Storage",
      "Expo Notifications",
    ],
    image: "./medialarm.jpg",
    demoUrl: "#",
    codeUrl: "https://github.com/princepal9120/Medialarm",
  },
  {
    title: "AI Agent Chatbot",
    description:
      "An intelligent real-time chatbot application leveraging LangGraph and LangChain agents for executing multi-step tasks autonomously. Integrates Groq for ultra-fast inference and Streamlit for an interactive UI, enabling dynamic conversations and agent-based task completion.",
    type: "ai",
    technologies: [
      "LangGraph",
      "Groq",
      "LangChain",
      "Streamlit",
      "Python"
    ],
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "#",
    codeUrl: "https://github.com/princepal9120/agent_chatbot"
  },
  
  {
    title: "Service Checkout Platform",
    description:
      "A dynamic web application allowing users to browse premium services (fitness, wellness, health, etc.), add them to a cart, and proceed to real-time checkout. Built with React and Zustand for state management and seamless user experience.",
    type: "fullstack",
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Shadcn UI",
      "Axios",
    ],
    image: "./service.png",
    demoUrl: "https://service-basket-express.vercel.app/",
    codeUrl: "https://github.com/prncepal9120/service-basket",
  },

  {
    title: "CabRide",
    description:
      "Ride-hailing app with real-time location tracking via Google Maps API and secure authentication.",
    type: "mobile",
    technologies: [
      "React Native",
      "TypeScript",
      "Clerk",
      "Zustand",
      "Google Maps API",
    ],
    image:
      "https://images.pexels.com/photos/1797542/pexels-photo-1797542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "",
    codeUrl: "https://github.com/CabRide",
  },
  {
    title: "PDFInfo Extractor",
    description:
      "A web-based utility allowing users to upload PDFs, extract key personal and contact details (name, address, phone, email, role) via pdf-lib and regex/NLP, and present them in a clean, responsive interface.",
    type: "ai",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "pdf-lib",
      "JavaScript RegExp",
      "Axios",
    ],
    image:
      "https://images.pexels.com/photos/30268252/pexels-photo-30268252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoUrl: "https://github.com/prncepal9120/pdf-data-extractor",
    codeUrl: "https://github.com/prncepal9120/pdf-data-extractor",
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
