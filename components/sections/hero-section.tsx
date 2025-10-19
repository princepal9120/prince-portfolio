"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
  SiPytorch,
  SiScikitlearn,
  SiGo,
  SiNestjs,
} from "react-icons/si";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaMobileAlt, FaReact, FaRobot, FaCode, FaHeart, FaServer } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";

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
  // { name: "HTML5", icon: SiHtml5, category: "frontend", color: "#E34F26" },
  // { name: "CSS3", icon: SiCss3, category: "frontend", color: "#1572B6" },
  // { name: "Redux", icon: SiRedux, category: "frontend", color: "#764ABC" },
  // { name: "Vite", icon: SiVite, category: "frontend", color: "#646CFF" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, category: "backend", color: "#339933" },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "backend",
    color: "#141111ff",
  },
  { name: "Python", icon: SiPython, category: "backend", color: "#e9e338ff" },
  { name: "FastAPI", icon: SiFastapi, category: "backend", color: "#009688" },
  { name: "Go", icon: SiGo, category: "backend", color: "#2d82c7ff" },
  { name: "NestJS", icon: SiNestjs, category: "backend", color: "#dc1308ff" },
  { name: "JWT", icon: SiJsonwebtokens, category: "backend", color: "#f7f0f0ff" },
  { name: "GraphQL", icon: SiGraphql, category: "backend", color: "#E10098" },
  { name: "gRPC", icon: FaServer, category: "backend", color: "#2786ebff" },
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
  { name: "PyTorch", icon: SiPytorch, category: "ai", color: "#EE4C2C" },
  { name: "Transformers", icon: FaRobot, category: "ai", color: "#FFD21E" },
  // { name: "NLP", icon: TbBrain, category: "ai", color: "#4A90E2" },
  // { name: "NLTK", icon: FaCode, category: "ai", color: "#2E8B57" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "ai", color: "#F7931E" },


  // DevOps & Tools
  { name: "Docker", icon: SiDocker, category: "devops", color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, category: "devops", color: "#FF9900" },
  // { name: "Vercel", icon: SiVercel, category: "devops", color: "#000000" },
  { name: "Git", icon: SiGit, category: "devops", color: "#F05032" },
  { name: "Postman", icon: SiPostman, category: "devops", color: "#FF6C37" },
  // { name: "n8n", icon: SiN8N, category: "devops", color: "#EA4B71" },
  { name: "Linux", icon: SiLinux, category: "devops", color: "#FCC624" },
  // {
  //   name: "Cursor",
  //   icon: BsFillDiamondFill,
  //   category: "devops",
  //   color: "#007ACC",
  // },
  // { name: "Lovable", icon: FaHeart, category: "devops", color: "#E91E63" },
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
      <h3 className="text-xl font-semibold text-white mb-6">Tools that I have used</h3>

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
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10 px-4">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-cyan-400 font-medium mb-2"
              >
                Hello! I'm developer from Delhi, India. I enjoy programming and exploring technology.
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="text-white">Ayush Singh</span>
                <br />
                <span className="text-cyan-400">aka shydev</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 text-gray-300"
            >
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">About Me</h2>
                <p className="leading-relaxed">
                  I've participated in <span className="text-cyan-400 font-medium">10+ hackathons & Startups</span> and won 6 of them.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">What I do?</h3>
                <p className="leading-relaxed">
                  I've delivered <span className="text-cyan-400 font-medium">10+ freelance projects</span>, indexed at two startups and failed to build my own startup twice. <span className="text-cyan-400 font-medium">#LifeGoodsOn</span>, I'm also active on X where I share fannies and <span className="text-cyan-400 font-medium">#buildinPublic</span>.
                </p>
              </div>

              <div>
                <p className="leading-relaxed">
                  I'm an <span className="text-cyan-400 font-medium">AWS Cloud Club Captain</span>, a maintainer and contributor of open-source projects. When not coding, I read books, speak at a tier knrge YouTube.
                </p>
              </div>

              <div>
                <p className="leading-relaxed">
                  I'm <span className="text-cyan-400 font-medium">open to work</span>, freelance, or collaborate. <Link href="/contact" className="text-cyan-400 hover:underline font-medium">Contact Me</Link>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <Link href="https://github.com/princepal9120" target="_blank">
                <Button variant="ghost" size="icon" className="hover:bg-cyan-400/10 hover:text-cyan-400">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/prince-pal" target="_blank">
                <Button variant="ghost" size="icon" className="hover:bg-cyan-400/10 hover:text-cyan-400">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://twitter.com/princepal9120" target="_blank">
                <Button variant="ghost" size="icon" className="hover:bg-cyan-400/10 hover:text-cyan-400">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:ayush.3327@knightmail.com">
                <Button variant="ghost" size="icon" className="hover:bg-cyan-400/10 hover:text-cyan-400">
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-cyan-400/20 shadow-2xl shadow-cyan-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-transparent" />
              <Image
                src="/profile.jpg"
                alt="Ayush Singh"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-20"
        >
          <TechLogos />
        </motion.div>
      </div>
    </section>
  );
}
