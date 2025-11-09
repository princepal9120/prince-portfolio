"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Code,
  Lightbulb,
  Coffee,
  CodeSquare,
  Briefcase,
  BrainCircuit,
  Smartphone,
} from "lucide-react";


// Component 1: Personal Info & Background
function PersonalBackground() {
  return (
    <FadeIn delay={0.1}>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">About Me</h3>
          </div>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            I'm a Software Engineer pursuing B.Tech at MMMUT (SGPA: 8.58),
            graduating in 2025. Currently working at BIK.ai building AI
            solutions, with experience across full-stack, mobile, and AI
            development.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <Code className="h-4 w-4 mt-0.5 text-primary" />
              <span className="text-sm">
                3x Developer: Full Stack | Mobile | Gen AI
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Lightbulb className="h-4 w-4 mt-0.5 text-primary" />
              <span className="text-sm">
                Created 50+ DSA problems, solved 900+ coding challenges
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CodeSquare className="h-4 w-4 mt-0.5 text-primary" />
              <span className="text-sm">
                Knight (1850+) at LeetCode, 3⭐ at CodeChef
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Coffee className="h-4 w-4 mt-0.5 text-primary" />
              <span className="text-sm">
                Passionate about AI, startups, and building impactful solutions
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

// Component 2: Experience & Skills
function ExperienceSkills() {
  return (
    <FadeIn delay={0.2}>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Experience & Skills</h3>
          </div>

          {/* Recent Experience */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-sm">Recent Experience</h4>
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">
                    BIK.ai() - Software Engineer 
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Gen AI
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Jul 2025 - Present | AI shopping assistant with LangChain &
                  GCP
                </p>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">
                    Dodoozy - Mobile Developer Intern
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Mobile
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Apr 2025 - Jun 2025 | 15+ React Native components, 40% faster
                  renders
                </p>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-sm">
                    Blackbytt - Software Development Intern
                  </span>
                  <Badge variant="outline" className="text-xs">
                    Full Stack
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Oct 2024 - Dec 2024 | UI/UX revamp, 25% faster database reads
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground mb-8">
            My background and professional journey
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PersonalBackground />
          <ExperienceSkills />
        </div>

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in continuous learning and building tools that make a
              difference. My goal is to create scalable applications that
              leverage cutting-edge technologies to address real-world
              challenges, especially at the intersection of traditional software
              development and AI.
            </p>


          </div>
        </FadeIn>
      </div>
    </section>
  );
}
