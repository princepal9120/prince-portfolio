"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data";
import { motion } from "framer-motion";


export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.type === activeTab);

  // Featured projects (first 6)
  const featuredProjects = filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 bg-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Projects Header */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-cyan-400/10 rounded-lg border border-cyan-400/20">
              <Layers className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
          </div>
          <p className="text-muted-foreground mb-12 text-lg">
            Exploring diverse technologies and building innovative solutions
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-8"
        >
          <TabsList className="mb-8 flex flex-wrap h-auto p-1.5 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-xl">
            <TabsTrigger
              value="all"
              className="flex-1 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:shadow-lg font-medium transition-all"
            >
              All Projects
            </TabsTrigger>
            <TabsTrigger
              value="fullstack"
              className="flex-1 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:shadow-lg font-medium transition-all"
            >
              Full Stack
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="flex-1 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:shadow-lg font-medium transition-all"
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="flex-1 rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-cyan-500 data-[state=active]:text-black data-[state=active]:shadow-lg font-medium transition-all"
            >
              Gen AI
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map(
                (project, index) => (
                  <FadeIn key={index} delay={0.05 * index} direction="up">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 group relative">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-purple-600/0 group-hover:from-cyan-400/5 group-hover:via-purple-600/5 group-hover:to-cyan-400/5 transition-all duration-500 rounded-lg" />
                        
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
                          
                          {/* Floating badge */}
                          <div className="absolute top-3 right-3">
                            <Badge
                              variant="outline"
                              className="bg-black/60 backdrop-blur-md text-cyan-400 border-cyan-400/50 text-xs font-semibold px-3 py-1"
                            >
                              {project.type === "fullstack"
                                ? "Full Stack"
                                : project.type === "mobile"
                                  ? "Mobile"
                                  : "Gen AI"}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-6 flex-1 relative z-10">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1 bg-gradient-to-r from-white to-cyan-400 bg-clip-text group-hover:text-transparent">
                            {project.title}
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <Badge 
                                key={i} 
                                variant="secondary" 
                                className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge 
                                variant="secondary" 
                                className="text-xs bg-purple-600/10 text-purple-400 border border-purple-400/20"
                              >
                                +{project.technologies.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                        
                        <CardFooter className="p-6 pt-0 flex gap-3 relative z-10">
                          {project.demoUrl && (
                            <Link
                              href={project.demoUrl}
                              className="flex-1"
                              target="_blank"
                            >
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full gap-2 text-xs bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-black font-semibold shadow-lg shadow-cyan-400/20"
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                                Live Demo
                              </Button>
                            </Link>
                          )}
                          {project.codeUrl && (
                            <Link
                              href={project.codeUrl}
                              className="flex-1"
                              target="_blank"
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full gap-2 text-xs border-cyan-400/30 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all"
                              >
                                <Github className="h-3.5 w-3.5" />
                                Code
                              </Button>
                            </Link>
                          )}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </FadeIn>
                )
              )}
            </div>

            {/* View More Button */}
            {filteredProjects.length > 6 && (
              <FadeIn delay={0.3}>
                <div className="flex justify-center mt-12">
                  <Link href="/projects">
                    <Button
                      className="gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-black font-bold px-10 py-6 text-base rounded-xl shadow-2xl shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                      Explore All Projects
                      <Layers className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
