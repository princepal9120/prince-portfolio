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
      <h3 className="text-xl font-semibold text-white mb-6">Tools that I have used</h3>

      {/* Row 1 */}
      <div className="flex overflow-hidden mb-4">
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20 pb-8">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Gradient orbs */}
      <motion.div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-4">
            <motion.div variants={itemVariants}>
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3" whileHover={{ scale: 1.02 }}>
                <span className="text-white">Prince Pal</span>
                <br />
                <motion.span className="text-cyan-400 text-xl md:text-2xl" animate={{ textShadow: ["0 0 20px rgba(34,211,238,0.3)", "0 0 40px rgba(34,211,238,0.5)", "0 0 20px rgba(34,211,238,0.3)"] }} transition={{ duration: 2, repeat: Infinity }}>
                  Problem Solver & Backend Engineer
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* About Section */}
            <motion.div variants={itemVariants} className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">About Me</h2>
                <p className="leading-relaxed">
                  I’m a <span className="text-cyan-400 font-medium">problem solver</span> who learns quickly and loves exploring the core side of technology — <span className="text-cyan-400 font-medium">backend systems</span> and <span className="text-cyan-400 font-medium">AI/ML</span>. I’ve built several backend projects including <span className="text-cyan-400 font-medium">microservices using Go and Node.js</span>.
                </p>

                <p className="leading-relaxed mt-3">
                  I come from a small village and I’m the <span className="text-cyan-400 font-medium">first engineer in my family</span>. From studying in a government school under the state board to coding professionally, I’ve evolved by <span className="text-cyan-400 font-medium">learning something new every day</span>. Growth never stops.
                </p>

                <p className="leading-relaxed mt-3">
                  My primary strength lies in <span className="text-cyan-400 font-medium">backend development</span>, but I also handle <span className="text-cyan-400 font-medium">frontend design</span> when needed — often using <span className="text-cyan-400 font-medium">Cursor</span> or <span className="text-cyan-400 font-medium">Claude AI</span> to bring my ideas to life.
                </p>

                <p className="leading-relaxed mt-3">
                  I love <span className="text-cyan-400 font-medium">reading</span>, building meaningful projects, and pushing myself to achieve more. I’ve also completed <span className="text-cyan-400 font-medium">freelance projects</span> for clients — turning their ideas into working products.
                </p>

                <p className="leading-relaxed mt-3 italic text-foreground/70">
                  Every line of code I write is a small step forward from where I started.
                </p>
              </div>

              <div>
                <p className="leading-relaxed">
                  I'm <span className="text-cyan-400 font-medium">open to work</span>, freelance, or collaborate.{" "}
                  <Link href="/contact" className="text-cyan-400 hover:underline font-medium">
                    Contact Me
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/princepal9120" },
                { icon: Linkedin, href: "https://linkedin.com/in/prince9120" },
                { icon: Twitter, href: "https://twitter.com/prince_twets" },
                { icon: Mail, href: "mailto:princepal9120@gmail.com" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ scale: 1.2, rotate: 360 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
                  <Link href={social.href} target="_blank">
                    <Button variant="ghost" size="icon" className="hover:bg-cyan-400/10 hover:text-cyan-400">
                      <social.icon className="h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05, rotate: 2 }} transition={{ duration: 0.3 }} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-cyan-400/20 shadow-2xl shadow-cyan-400/10">
              <motion.div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
              <Image src="/profile.png" alt="Prince Pal" fill className="object-cover" priority />
            </div>
          </motion.div>
        </motion.div>

        {/* Tools Section */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="mt-12">
          <TechLogos />
        </motion.div>
      </div>
    </section>
  );
}
