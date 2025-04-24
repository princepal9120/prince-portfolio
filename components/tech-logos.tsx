"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "📦" },
  { name: "TypeScript", icon: "🔷" },
  { name: "OpenAI", icon: "🤖" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "LangChain", icon: "🔗" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "React Native", icon: "📱" },
  { name: "Expo", icon: "🔮" },
  { name: "Supabase", icon: "⚡" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "OpenAI", icon: "🤖" },
  { name: "Hugging Face", icon: "🤗" },
  { name: "LangChain", icon: "🔗" },
];

export default function TechLogos() {
  const [logos, setLogos] = useState([]);

  // Duplicate the logos to create a seamless infinite effect
  useEffect(() => {
    setLogos([...techStack, ...techStack]);
  }, []);

  return (
    <div className="w-full overflow-hidden py-8  bg-gradient-to-b from-background to-background/80">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-70%"],
        }}
        transition={{
          x: {
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {logos.map((tech, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-2 flex-shrink-0 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-card-foreground shadow-sm"
          >
            <span className="text-lg">{tech.icon}</span>
            <span className="font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
