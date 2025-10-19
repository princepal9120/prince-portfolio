"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-cyan-400/20 py-10 bg-gradient-to-b from-transparent to-muted/40 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-sm text-muted-foreground mb-2 transition-colors duration-500">
            © {new Date().getFullYear()} Developed with ❤️ by Prince
          </p>
          <p className="text-xs text-muted-foreground transition-colors duration-500">
            "A programmer’s life: Debugging the past, coding the future, and surviving on coffee." ☕💻
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {[
            { href: "https://github.com/princepal9120", icon: <Github size={20} />, label: "GitHub" },
            { href: "https://linkedin.com/in/prince9120", icon: <Linkedin size={20} />, label: "LinkedIn" },
            { href: "https://twitter.com/prince_twets", icon: <Twitter size={20} />, label: "Twitter" },
            { href: "mailto:princepal9120@gmail.com", icon: <Mail size={20} />, label: "Email" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`text-muted-foreground hover:text-cyan-400 transition-colors duration-300 ${theme === "dark" ? "hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.5)]" : ""
                  }`}
              >
                {item.icon}
                <span className="sr-only">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Programmer Quote */}
      <motion.div
        className="mt-8 pt-6 border-t border-border/30 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xs italic text-muted-foreground transition-colors duration-500">
          {theme === "dark"
            ? `"In the dark mode of life, let your code be the light." 💡`
            : `"When the world is bright, keep your code clean and tight." ⚡`}
        </p>
      </motion.div>
    </footer>
  );
}
