"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "@/components/animations/fade-in";
import { Code, Smartphone, BrainCircuit } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
}

const fullStackSkills: Skill[] = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Redux", level: 80 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 85 },
  { name: "MongoDB", level: 90 },
  { name: "PostgreSQL", level: 75 },
  { name: "TypeScript", level: 80 },
  { name: "REST APIs", level: 90 },
  { name: "Shadcn UI", level: 85 },
  { name: "JWT", level: 80 },
];

const mobileSkills: Skill[] = [
  { name: "React Native", level: 85 },
  { name: "Expo", level: 90 },
  { name: "Tailwind RN", level: 80 },
  { name: "Redux Toolkit", level: 85 },
  { name: "Mobile UI/UX", level: 75 },
  { name: "Native APIs", level: 70 },
];

const aiSkills: Skill[] = [
  { name: "Gemini API", level: 80 },
  { name: "OpenAI", level: 85 },
  { name: "Langchain", level: 75 },
  { name: "Python", level: 70 },
  { name: "Fastapi", level: 80 },
  {name: "Langgraph", level: 70},
  { name: "Whisper API", level: 65 },
  { name: "TTS", level: 70 },
];

const otherSkills: Skill[] = [
  { name: "Git", level: 90 },
  { name: "Docker", level: 65 },
  { name: "VSCode", level: 95 },
  { name: "Postman", level: 85 },
  {name: "AWS", level: 55}
];

function SkillCategory({ title, icon, skills, delay }: SkillCategoryProps) {
  return (
    <FadeIn delay={delay} className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
            className="bg-card p-4 rounded-lg shadow-sm border hover:border-primary/50 transition-all"
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  );
}

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Skills</h2>
          <p className="text-muted-foreground mb-8">Technologies I work with</p>
        </FadeIn>

        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="mb-8 flex flex-wrap h-auto p-1 gap-2">
            <TabsTrigger value="all" className="flex-1 min-w-[100px]">All Skills</TabsTrigger>
            <TabsTrigger value="fullstack" className="flex-1 min-w-[100px]">Full Stack</TabsTrigger>
            <TabsTrigger value="mobile" className="flex-1 min-w-[100px]">Mobile</TabsTrigger>
            <TabsTrigger value="ai" className="flex-1 min-w-[100px]">Gen AI</TabsTrigger>
            <TabsTrigger value="other" className="flex-1 min-w-[100px]">Other</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-8">
            <SkillCategory
              title="Full Stack Development"
              icon={<Code className="h-5 w-5 text-primary" />}
              skills={fullStackSkills}
              delay={0.1}
            />
            <SkillCategory
              title="Mobile Development"
              icon={<Smartphone className="h-5 w-5 text-primary" />}
              skills={mobileSkills}
              delay={0.2}
            />
            <SkillCategory
              title="Gen AI Development"
              icon={<BrainCircuit className="h-5 w-5 text-primary" />}
              skills={aiSkills}
              delay={0.3}
            />
            <SkillCategory
              title="Other Skills"
              icon={<Code className="h-5 w-5 text-primary" />}
              skills={otherSkills}
              delay={0.4}
            />
          </TabsContent>

          <TabsContent value="fullstack">
            <SkillCategory
              title="Full Stack Development"
              icon={<Code className="h-5 w-5 text-primary" />}
              skills={fullStackSkills}
              delay={0.1}
            />
          </TabsContent>

          <TabsContent value="mobile">
            <SkillCategory
              title="Mobile Development"
              icon={<Smartphone className="h-5 w-5 text-primary" />}
              skills={mobileSkills}
              delay={0.1}
            />
          </TabsContent>

          <TabsContent value="ai">
            <SkillCategory
              title="Gen AI Development"
              icon={<BrainCircuit className="h-5 w-5 text-primary" />}
              skills={aiSkills}
              delay={0.1}
            />
          </TabsContent>

          <TabsContent value="other">
            <SkillCategory
              title="Other Skills"
              icon={<Code className="h-5 w-5 text-primary" />}
              skills={otherSkills}
              delay={0.1}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}