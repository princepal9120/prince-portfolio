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
  SiGit,
  SiPostman,
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
import { FaReact, FaRobot, FaServer } from "react-icons/fa";
import { useState } from "react";

// Enhanced tech stack
const techStack = [
  { name: "React", icon: SiReact, category: "frontend", color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend", color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, category: "frontend", color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend", color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "#06B6D4" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, category: "backend", color: "#339933" },
  { name: "Express.js", icon: SiExpress, category: "backend", color: "#141111" },
  { name: "Python", icon: SiPython, category: "backend", color: "#e9e338" },
  { name: "FastAPI", icon: SiFastapi, category: "backend", color: "#009688" },
  { name: "Go", icon: SiGo, category: "backend", color: "#2d82c7" },
  { name: "NestJS", icon: SiNestjs, category: "backend", color: "#dc1308" },
  { name: "JWT", icon: SiJsonwebtokens, category: "backend", color: "#f7f0f0" },
  { name: "GraphQL", icon: SiGraphql, category: "backend", color: "#E10098" },
  { name: "gRPC", icon: FaServer, category: "backend", color: "#2786eb" },
  { name: "Socket.io", icon: SiSocketdotio, category: "backend", color: "#010101" },

  // Databases
  { name: "MongoDB", icon: SiMongodb, category: "database", color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database", color: "#336791" },
  { name: "Supabase", icon: SiSupabase, category: "database", color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, category: "database", color: "#FFCA28" },

  // Mobile
  { name: "React Native", icon: FaReact, category: "mobile", color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, category: "mobile", color: "#000020" },

  // AI & ML
  { name: "OpenAI", icon: SiOpenai, category: "ai", color: "#412991" },
  { name: "Hugging Face", icon: SiHuggingface, category: "ai", color: "#FF9D00" },
  { name: "LangChain", icon: SiLangchain, category: "ai", color: "#1C3C3C" },
  { name: "Google Gemini", icon: SiGooglegemini, category: "ai", color: "#4285F4" },
  { name: "NumPy", icon: SiNumpy, category: "ai", color: "#013243" },
  { name: "Pandas", icon: SiPandas, category: "ai", color: "#150458" },
  { name: "Streamlit", icon: SiStreamlit, category: "ai", color: "#FF4B4B" },
  { name: "PyTorch", icon: SiPytorch, category: "ai", color: "#EE4C2C" },
  { name: "Scikit-learn", icon: SiScikitlearn, category: "ai", color: "#F7931E" },
  { name: "Transformers", icon: FaRobot, category: "ai", color: "#FFD21E" },

  // DevOps
  { name: "Docker", icon: SiDocker, category: "devops", color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, category: "devops", color: "#FF9900" },
  { name: "Git", icon: SiGit, category: "devops", color: "#F05032" },
  { name: "Postman", icon: SiPostman, category: "devops", color: "#FF6C37" },
  { name: "Linux", icon: SiLinux, category: "devops", color: "#FCC624" },
];

function TechLogos() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="relative">
      <h3 className="text-xl font-semibold text-white mb-4">Technologies that I have used</h3>

      {/* Row 1 */}
      <div className="flex overflow-hidden mb-3">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}
          className="flex gap-8 pr-8"
        >
          {[...techStack, ...techStack].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={`${tech.name}-${index}`} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 whitespace-nowrap hover:bg-card/80 transition-all duration-300 group">
                <IconComponent className="text-lg group-hover:scale-110 transition-transform duration-300" style={{ color: tech.color }} />
                <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [-2000, 0] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
          className="flex gap-8 pr-8"
        >
          {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={`${tech.name}-reverse-${index}`} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 whitespace-nowrap hover:bg-card/80 transition-all duration-300 group">
                <IconComponent className="text-lg group-hover:scale-110 transition-transform duration-300" style={{ color: tech.color }} />
                <span className="text-sm font-medium text-foreground/80">{tech.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [animateImage, setAnimateImage] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[70vh] flex items-center justify-center mt-8 relative overflow-hidden pt-6 pb-4">
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-6 items-center"
        >
          {/* Left Section - Concise About */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Hi, I’m <span className="text-cyan-400">Prince Pal</span>
            </h1>
            <motion.h2
              className="text-cyan-400 text-lg md:text-xl font-medium"
              animate={{
                textShadow: [
                  "0 0 20px rgba(34,211,238,0.3)",
                  "0 0 40px rgba(34,211,238,0.5)",
                  "0 0 20px rgba(34,211,238,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Backend Engineer & Problem Solver
            </motion.h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Passionate about <span className="text-cyan-400 font-medium">scalable backend systems</span> and <span className="text-cyan-400 font-medium">AI-driven technologies</span>.
              I enjoy turning complex ideas into elegant solutions using Go, Node.js, and modern tools.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              I’m a <span className="text-cyan-400 font-medium">self-taught engineer</span> from a small village — building projects that combine <span className="text-cyan-400 font-medium">creativity</span>, <span className="text-cyan-400 font-medium">logic</span>, and <span className="text-cyan-400 font-medium">impact</span>.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed">
              Currently open to <span className="text-cyan-400 font-medium">freelance, collaborations,</span> and <span className="text-cyan-400 font-medium">full-time opportunities</span>.{" "}
              <Link href="/contact" className="text-cyan-400 hover:underline font-medium">
                Let’s connect →
              </Link>
            </p>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div className="relative flex justify-center lg:justify-end">
            <motion.div
              onClick={() => setAnimateImage(!animateImage)}
              animate={animateImage ? { scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] } : { scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-cyan-400/20 shadow-lg shadow-cyan-400/10 cursor-pointer"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
              <Image src="/profile.png" alt="Prince Pal" fill className="object-cover" priority />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skill / Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6"
        >
          <TechLogos />
        </motion.div>
      </div>
    </section>
  );
}
