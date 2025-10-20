"use client";

import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/fade-in";
import { Code } from "lucide-react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="py-4">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Code className="h-5 w-5 text-cyan-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Skills</h2>
          </div>
          {/* <p className="text-muted-foreground text-sm mb-4">
            Technical expertise across multiple domains
          </p> */}
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.id} delay={0.05 * index}>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className="bg-card/30 border border-border/50 rounded-lg p-3 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <h3 className="text-xs font-semibold mb-2 text-cyan-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0.5 bg-muted/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                  {/* {category.skills.length > 6 && (
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5 bg-muted/50">
                      +{category.skills.length - 6}
                    </Badge>
                  )} */}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
