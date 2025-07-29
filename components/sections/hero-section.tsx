"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowRight, FileText, Route } from "lucide-react";
import Link from "next/link";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiExpo,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiGooglegemini,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiGit,
  SiPostman,
  SiN8N,
  SiLinux,
  SiNumpy,
  SiPandas,
  SiStreamlit,
  SiSocketdotio,
  SiGraphql,
} from "react-icons/si";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaMobileAlt, FaReact, FaRobot, FaCode, FaHeart } from "react-icons/fa";

// Enhanced tech stack with React Icons
const techStack = [
  // Frontend
  { name: "React", icon: SiReact, category: "frontend", color: "#61DAFB" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "frontend",
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "frontend",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "frontend",
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    category: "frontend",
    color: "#06B6D4",
  },
  { name: "HTML5", icon: SiHtml5, category: "frontend", color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, category: "frontend", color: "#1572B6" },
  { name: "Redux", icon: SiRedux, category: "frontend", color: "#764ABC" },
  { name: "Vite", icon: SiVite, category: "frontend", color: "#646CFF" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, category: "backend", color: "#339933" },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "backend",
    color: "#000000",
  },
  { name: "Python", icon: SiPython, category: "backend", color: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, category: "backend", color: "#009688" },
  { name: "JWT", icon: SiJsonwebtokens, category: "backend", color: "#000000" },
  { name: "GraphQL", icon: SiGraphql, category: "backend", color: "#E10098" },
  {
    name: "Socket.io",
    icon: SiSocketdotio,
    category: "backend",
    color: "#010101",
  },

  // Databases
  { name: "MongoDB", icon: SiMongodb, category: "database", color: "#47A248" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "database",
    color: "#336791",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    category: "database",
    color: "#3ECF8E",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    category: "database",
    color: "#FFCA28",
  },

  // Mobile
  {
    name: "React Native",
    icon: FaReact,
    category: "mobile",
    color: "#61DAFB",
  },
  { name: "Expo", icon: SiExpo, category: "mobile", color: "#000020" },

  // AI & ML
  { name: "OpenAI", icon: SiOpenai, category: "ai", color: "#412991" },
  {
    name: "Hugging Face",
    icon: SiHuggingface,
    category: "ai",
    color: "#FF9D00",
  },
  { name: "LangChain", icon: SiLangchain, category: "ai", color: "#1C3C3C" },
  {
    name: "Google Gemini",
    icon: SiGooglegemini,
    category: "ai",
    color: "#4285F4",
  },
  { name: "NumPy", icon: SiNumpy, category: "ai", color: "#013243" },
  { name: "Pandas", icon: SiPandas, category: "ai", color: "#150458" },
  { name: "Streamlit", icon: SiStreamlit, category: "ai", color: "#FF4B4B" },
  { name: "Gradio", icon: FaCode, category: "ai", color: "#FF7C00" },

  // DevOps & Tools
  { name: "Docker", icon: SiDocker, category: "devops", color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, category: "devops", color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, category: "devops", color: "#000000" },
  { name: "Git", icon: SiGit, category: "devops", color: "#F05032" },
  { name: "Postman", icon: SiPostman, category: "devops", color: "#FF6C37" },
  { name: "n8n", icon: SiN8N, category: "devops", color: "#EA4B71" },
  { name: "Linux", icon: SiLinux, category: "devops", color: "#FCC624" },
  {
    name: "Cursor",
    icon: BsFillDiamondFill,
    category: "devops",
    color: "#007ACC",
  },
  { name: "Lovable", icon: FaHeart, category: "devops", color: "#E91E63" },
];

// Enhanced TechLogos component with more skills
function TechLogos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative"
    >
      <p className="text-sm text-muted-foreground mb-8">
        Technologies I work with
      </p>

      {/* First row - scrolling right */}
      <div className="flex overflow-hidden mb-4">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-8 pr-8"
        >
          {[...techStack, ...techStack].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 whitespace-nowrap hover:bg-card/80 transition-all duration-300 group"
              >
                <IconComponent
                  className="text-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ color: tech.color }}
                />
                <span className="text-sm font-medium text-foreground/80">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Second row - scrolling left */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
          className="flex gap-8 pr-8"
        >
          {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map(
            (tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 whitespace-nowrap hover:bg-card/80 transition-all duration-300 group"
                >
                  <IconComponent
                    className="text-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-medium text-foreground/80">
                    {tech.name}
                  </span>
                </div>
              );
            }
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Problem Solver",
      "Software Engineer",
      "AI Engineer",
      "Full Stack Developer",
      "Mobile Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-gradient-to-b from-background to-background/80 relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary font-medium mb-2 text-base sm:text-lg">
              👋 Hi, I&apos;m
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
          >
            Prince Pal
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground mb-6 min-h-[3rem]"
          >
            <span>{text}</span>
            <Cursor cursorStyle="_" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
          >
            Passionate about building scalable apps with cutting-edge
            technologies that solve real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Hire me
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Link
              href={
                "https://drive.google.com/file/d/1tsz1a2Di42xceCP9Sno2QaHIWpa15ZSL/view?usp=drive_link"
              }
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2"
              >
                Resume
                <FileText className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
          <TechLogos />
        </div>
      </div>
    </section>
  );
}
