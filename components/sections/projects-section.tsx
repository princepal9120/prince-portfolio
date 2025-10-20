"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, Layers } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { projects } from "@/data";


export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("fullstack");
  const router = useRouter();

  const filteredProjects = projects.filter((project) => project.type === activeTab);

  // Featured projects (first 6)
  const featuredProjects = filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-8 bg-muted/20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Header */}
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-5 w-5 text-cyan-400" />
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            Recent work across different technologies
          </p>
        </FadeIn>

        {/* Category Tabs */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-8"
        >
          <TabsList className="mb-4 flex flex-wrap h-auto p-1 bg-muted/50 gap-1">
            
            <TabsTrigger
              value="fullstack"
              className="flex-1 text-xs data-[state=active]:bg-cyan-400 data-[state=active]:text-black"
            >
              fullstack
            </TabsTrigger>
            
            <TabsTrigger
              value="ai"
              className="flex-1 text-xs data-[state=active]:bg-cyan-400 data-[state=active]:text-black"
            >
              AI/ML
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map(
                (project, index) => (
                  <FadeIn key={index} delay={0.03 * index} direction="up">
                    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-cyan-400/30 group">
                      <div className="h-40 overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-4 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-base font-semibold group-hover:text-cyan-400 transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="text-[10px] whitespace-nowrap ml-2 bg-cyan-400/10 text-cyan-400 border-cyan-400/30 px-1.5 py-0.5"
                          >
                            {project.type === "fullstack"
                              ? "Backend"
                              : project.type === "mobile"
                                ? "Mobile"
                                : "AI"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-auto">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0.5">
                              {tech}
                            </Badge>
                          ))}

                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex gap-1.5">
                        {project.demoUrl && (
                          <Link
                            href={project.demoUrl}
                            className="flex-1"
                            target="_blank"
                          >
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full gap-1 text-[10px] h-7"
                            >
                              <ExternalLink className="h-2.5 w-2.5" />
                              View
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
                              className="w-full gap-1 text-[10px] h-7 border-cyan-400/30 hover:bg-cyan-400/10"
                            >
                              <Github className="h-2.5 w-2.5" />
                              Code
                            </Button>
                          </Link>
                        )}
                      </CardFooter>
                    </Card>
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
                      className="gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8"
                    >
                      View More Projects
                      <Layers className="h-4 w-4" />
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
