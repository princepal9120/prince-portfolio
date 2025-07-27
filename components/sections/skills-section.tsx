"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FadeIn from "@/components/animations/fade-in";
import {
  Code,
  Smartphone,
  BrainCircuit,
  Monitor,
  Server,
  Settings,
  Wrench,
} from "lucide-react";

import {
  SiReact,
  SiHuggingface,
  SiGooglegemini,
  SiNextdotjs,
  SiLangchain,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiJsonwebtokens,
  SiExpo,
  SiDocker,
  SiAmazon,
  SiGit,
  SiN8N,
  SiPostman,
  SiOpenai,
  SiPython,
  SiSupabase,
  SiFirebase,
  SiReactquery,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiFastapi,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import {
  FaServer,
  FaMobileAlt,
  FaRobot,
  FaLaptopCode,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

interface Skill {
  name: string;
}

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay: number;
}

// 🧠 Map skill names to icons
const skillIconMap: Record<string, JSX.Element> = {
  // Frontend
  React: <SiReact size={24} />,
  "Next.js": <SiNextdotjs size={24} />,
  TypeScript: <SiTypescript size={24} />,
  JavaScript: <SiJavascript size={24} />,
  HTML5: <SiHtml5 size={24} />,
  CSS3: <SiCss3 size={24} />,
  "Tailwind CSS": <SiTailwindcss size={24} />,
  Redux: <SiRedux size={24} />,
  Zustand: <FaDatabase size={24} />,
  "React Query": <SiReactquery size={24} />,
  "Shadcn UI": <FaLaptopCode size={24} />,
  Vite: <SiVite size={24} />,

  // Backend
  "Node.js": <SiNodedotjs size={24} />,
  Express: <SiExpress size={24} />,
  Python: <SiPython size={24} />,
  FastAPI: <SiFastapi size={24} />,
  MongoDB: <SiMongodb size={24} />,
  PostgreSQL: <SiPostgresql size={24} />,
  Supabase: <SiSupabase size={24} />,
  Firebase: <SiFirebase size={24} />,
  "REST APIs": <FaServer size={24} />,
  JWT: <SiJsonwebtokens size={24} />,

  // Mobile
  "React Native": <SiReact size={24} />,
  Expo: <SiExpo size={24} />,
  "Redux Toolkit": <SiRedux size={24} />,
  "Mobile UI/UX": <FaMobileAlt size={24} />,
  "Native APIs": <FaMobileAlt size={24} />,

  // AI/ML
  OpenAI: <SiOpenai size={24} />,
  "Gemini API": <SiGooglegemini size={24} />,
  Langchain: <SiLangchain size={24} />,
  Langgraph: <SiLangchain size={24} />,
  "Whisper API": <FaRobot size={24} />,
  HuggingFace: <SiHuggingface size={24} />,
  n8n: <SiN8N size={24} />,

  // DevOps
  Docker: <SiDocker size={24} />,
  AWS: <SiAmazon size={24} />,
  Vercel: <SiVercel size={24} />,
  Netlify: <SiNetlify size={24} />,

  // Tools
  Git: <SiGit size={24} />,
  VSCode: <BiLogoVisualStudio size={24} />,
  Postman: <SiPostman size={24} />,
};

const frontendSkills: Skill[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Tailwind CSS" },
  { name: "Redux" },
  { name: "Zustand" },
  { name: "React Query" },
  { name: "Shadcn UI" },
  { name: "Vite" },
];

const backendSkills: Skill[] = [
  { name: "Node.js" },
  { name: "Express" },
  { name: "Python" },
  { name: "FastAPI" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Supabase" },
  { name: "Firebase" },
  { name: "REST APIs" },
  { name: "JWT" },
];

const mobileSkills: Skill[] = [
  { name: "React Native" },
  { name: "Expo" },
  { name: "Redux Toolkit" },
  { name: "Mobile UI/UX" },
  { name: "Native APIs" },
];

const aiSkills: Skill[] = [
  { name: "OpenAI" },

  { name: "Langchain" },
  { name: "Langgraph" },
  { name: "Whisper API" },
  { name: "HuggingFace" },
  { name: "n8n" },
];

const devopsSkills: Skill[] = [
  { name: "Docker" },
  { name: "AWS" },
  { name: "Vercel" },
  { name: "Netlify" },
];

const toolsSkills: Skill[] = [
  { name: "Git" },
  { name: "VSCode" },
  { name: "Postman" },
];

function SkillCategory({ title, icon, skills, delay }: SkillCategoryProps) {
  return (
    <FadeIn delay={delay} className="mb-8">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-sm border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="mb-3 text-muted-foreground group-hover:text-primary transition-colors duration-300">
              {skillIconMap[skill.name] || <FaLaptopCode size={24} />}
            </div>
            <span className="text-sm font-medium text-center leading-tight">
              {skill.name}
            </span>
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
          <TabsList className="mb-8 flex flex-wrap h-auto p-1 gap-1">
            <TabsTrigger
              value="all"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              AI/ML
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              DevOps
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="flex-1 min-w-[80px] text-xs sm:text-sm"
            >
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6 space-y-8">
            <SkillCategory
              title="Frontend Development"
              icon={<Monitor className="h-5 w-5 text-primary" />}
              skills={frontendSkills}
              delay={0.1}
            />
            <SkillCategory
              title="Backend Development"
              icon={<Server className="h-5 w-5 text-primary" />}
              skills={backendSkills}
              delay={0.2}
            />
            <SkillCategory
              title="Mobile Development"
              icon={<Smartphone className="h-5 w-5 text-primary" />}
              skills={mobileSkills}
              delay={0.3}
            />
            <SkillCategory
              title="AI/ML Development"
              icon={<BrainCircuit className="h-5 w-5 text-primary" />}
              skills={aiSkills}
              delay={0.4}
            />
            <SkillCategory
              title="DevOps & Cloud"
              icon={<Settings className="h-5 w-5 text-primary" />}
              skills={devopsSkills}
              delay={0.5}
            />
            <SkillCategory
              title="Development Tools"
              icon={<Wrench className="h-5 w-5 text-primary" />}
              skills={toolsSkills}
              delay={0.6}
            />
          </TabsContent>

          <TabsContent value="frontend">
            <SkillCategory
              title="Frontend Development"
              icon={<Monitor className="h-5 w-5 text-primary" />}
              skills={frontendSkills}
              delay={0.1}
            />
          </TabsContent>

          <TabsContent value="backend">
            <SkillCategory
              title="Backend Development"
              icon={<Server className="h-5 w-5 text-primary" />}
              skills={backendSkills}
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
              title="AI/ML Development"
              icon={<BrainCircuit className="h-5 w-5 text-primary" />}
              skills={aiSkills}
              delay={0.1}
            />
          </TabsContent>

          <TabsContent value="devops">
            <SkillCategory
              title="DevOps & Cloud"
              icon={<Settings className="h-5 w-5 text-primary" />}
              skills={devopsSkills}
              delay={0.1}
            />
          </TabsContent>

          <TabsContent value="tools">
            <SkillCategory
              title="Development Tools"
              icon={<Wrench className="h-5 w-5 text-primary" />}
              skills={toolsSkills}
              delay={0.1}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
