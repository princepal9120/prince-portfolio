"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowRight, FileText } from "lucide-react";
import Link from "next/link";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "📦" },
  { name: "TypeScript", icon: "🔷" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Python", icon: "🐍" },
];

export default function HeroSection() {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Mobile Developer", "Gen AI Developer"],
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
              👋 Hi, I'm
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
            <Link href="/projects" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                View My Work
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#resume" className="w-full sm:w-auto">
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 items-center justify-center px-2"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all"
              >
                <span className="text-xl sm:text-2xl">{tech.icon}</span>
                <span className="text-xs sm:text-sm font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
