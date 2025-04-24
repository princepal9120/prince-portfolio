"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import FadeIn from "@/components/animations/fade-in";
import { Separator } from "@/components/ui/separator";
import { GraduationCap as Graduation, Code, Lightbulb, Coffee } from "lucide-react";

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
  delay: number;
}

function Milestone({ year, title, description, delay }: MilestoneProps) {
  return (
    <FadeIn delay={delay} className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {year}
        </div>
        <div className="w-0.5 h-full bg-border mt-2"></div>
      </div>
      <div className="pb-8">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </FadeIn>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-muted-foreground mb-8">My background and journey in tech</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <FadeIn delay={0.1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Graduation className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Education & Background</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    I'm currently pursuing my B.Tech in Electrical Engineering at MMMUT, 
                    graduating in 2025. Alongside my studies, I've developed a passion for 
                    software development and AI.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Code className="h-5 w-5 mt-0.5 text-primary" />
                      <span>3x Developer: Full Stack | Mobile | Gen AI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 mt-0.5 text-primary" />
                      <span>Created 20+ DSA problems, solved 100+ bugs, built 15+ projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Coffee className="h-5 w-5 mt-0.5 text-primary" />
                      <span>Passionate about AI, startups, and building cool things</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">My Journey</h3>
                  <div className="space-y-2">
                    <Milestone
                      year="2023"
                      title="Started Freelancing"
                      description="Began building React projects and took on freelance development work."
                      delay={0.3}
                    />
                    <Milestone
                      year="2024"
                      title="Gen AI Projects & SaaS Tools"
                      description="Focused on generative AI applications and building SaaS platforms."
                      delay={0.4}
                    />
                    <Milestone
                      year="2025"
                      title="Ready for Impact"
                      description="Preparing to make a significant impact in the tech world after graduation."
                      delay={0.5}
                    />
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>

        <Separator className="my-12" />

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Values & Vision</h3>
            <p className="text-muted-foreground">
              I believe in continuous learning, problem-solving, and building tools that make a 
              difference. My goal is to create scalable, user-friendly applications that leverage 
              cutting-edge technologies to address real-world challenges. I'm especially interested 
              in the intersection of traditional software development and AI.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}