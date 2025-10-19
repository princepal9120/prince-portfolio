"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Github, Layers, Globe, Play } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectsSectionImproved() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [activeTab, setActiveTab] = useState("all");

    const filteredProjects =
        activeTab === "all"
            ? projects
            : projects.filter((project) => project.type === activeTab);

    // Featured projects (first 6)
    const featuredProjects = filteredProjects.slice(0, 6);

    return (
        <section id="projects" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                {/* Projects Header */}
                <FadeIn>
                    <div className="flex items-center gap-2 mb-2">
                        <Layers className="h-6 w-6 text-cyan-400" />
                        <h2 className="text-3xl font-bold">Projects</h2>
                    </div>
                    <p className="text-muted-foreground mb-12">
                        I've been actively engaged in a few side projects lately, exploring diverse technologies & ideas. Here's a quick glimpse of my ongoing and completed projects:
                    </p>
                </FadeIn>

                {/* Category Tabs */}
                <Tabs
                    defaultValue="all"
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full mb-8"
                >
                    <TabsList className="mb-8 flex flex-wrap h-auto p-1 bg-muted/50 border border-border/50">
                        <TabsTrigger
                            value="all"
                            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-black font-medium"
                        >
                            All Projects
                        </TabsTrigger>
                        <TabsTrigger
                            value="fullstack"
                            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-black font-medium"
                        >
                            Full Stack
                        </TabsTrigger>
                        <TabsTrigger
                            value="mobile"
                            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-black font-medium"
                        >
                            Mobile
                        </TabsTrigger>
                        <TabsTrigger
                            value="ai"
                            className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-400 data-[state=active]:to-purple-600 data-[state=active]:text-black font-medium"
                        >
                            AI/ML
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value={activeTab} className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {(showAllProjects ? filteredProjects : featuredProjects).map(
                                (project, index) => (
                                    <FadeIn key={project.id} delay={0.05 * index} direction="up">
                                        <motion.div
                                            whileHover={{ y: -8 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Card className="overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 border-border/50 hover:border-cyan-400/30 bg-card/50 backdrop-blur-sm group">
                                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-cyan-400/10 to-purple-600/10">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                                                    {/* Play button overlay for video */}
                                                    {project.videoUrl && (
                                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            <div className="w-16 h-16 rounded-full bg-cyan-400/90 flex items-center justify-center">
                                                                <Play className="h-8 w-8 text-black ml-1" />
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Status Badge */}
                                                    <div className="absolute top-4 right-4">
                                                        <Badge
                                                            className={`${project.status === "operational"
                                                                    ? "bg-green-500/90 text-white"
                                                                    : "bg-yellow-500/90 text-black"
                                                                } backdrop-blur-sm`}
                                                        >
                                                            <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse" />
                                                            {project.status === "operational"
                                                                ? "All Systems Operational"
                                                                : "Maintenance"}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <CardContent className="p-6 flex-1">
                                                    <div className="flex items-start justify-between mb-3">
                                                        <h3 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors line-clamp-1 flex-1">
                                                            {project.title}
                                                        </h3>
                                                        <div className="flex gap-2 ml-2">
                                                            {project.demoUrl && (
                                                                <Globe className="h-5 w-5 text-cyan-400" />
                                                            )}
                                                            {project.codeUrl && (
                                                                <Github className="h-5 w-5 text-muted-foreground" />
                                                            )}
                                                        </div>
                                                    </div>

                                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                                        {project.description}
                                                    </p>

                                                    {/* Technologies Section */}
                                                    <div className="mb-4">
                                                        <p className="text-xs text-cyan-400 font-semibold mb-2">
                                                            Technologies
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.technologies.slice(0, 5).map((tech, i) => (
                                                                <Badge
                                                                    key={i}
                                                                    variant="secondary"
                                                                    className="text-xs bg-muted/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors"
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                            {project.technologies.length > 5 && (
                                                                <Badge variant="secondary" className="text-xs">
                                                                    +{project.technologies.length - 5}
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardContent>

                                                <CardFooter className="p-6 pt-0 flex gap-3">
                                                    {project.demoUrl && (
                                                        <Link
                                                            href={project.demoUrl}
                                                            className="flex-1"
                                                            target="_blank"
                                                        >
                                                            <Button
                                                                variant="default"
                                                                className="w-full gap-2 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-black font-semibold"
                                                            >
                                                                View Details
                                                                <ExternalLink className="h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                    )}
                                                    {project.codeUrl && (
                                                        <Link
                                                            href={project.codeUrl}
                                                            className={project.demoUrl ? "" : "flex-1"}
                                                            target="_blank"
                                                        >
                                                            <Button
                                                                variant="outline"
                                                                className={`${project.demoUrl ? "" : "w-full"} gap-2 border-cyan-400/30 hover:bg-cyan-400/10`}
                                                            >
                                                                <Github className="h-4 w-4" />
                                                                {!project.demoUrl && "View Code"}
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
                        {!showAllProjects && filteredProjects.length > 6 && (
                            <FadeIn delay={0.3}>
                                <div className="flex justify-center mt-12">
                                    <Button
                                        onClick={() => setShowAllProjects(true)}
                                        className="gap-2 bg-gradient-to-r from-cyan-400 to-purple-600 hover:from-cyan-500 hover:to-purple-700 text-black font-semibold px-8 py-6 text-lg"
                                    >
                                        View More Projects
                                        <Layers className="h-5 w-5" />
                                    </Button>
                                </div>
                            </FadeIn>
                        )}

                        {/* Show Less Button */}
                        {showAllProjects && (
                            <FadeIn delay={0.3}>
                                <div className="flex justify-center mt-12">
                                    <Button
                                        onClick={() => setShowAllProjects(false)}
                                        variant="outline"
                                        className="gap-2 border-cyan-400/30 hover:bg-cyan-400/10 px-8 py-6"
                                    >
                                        Show Less
                                    </Button>
                                </div>
                            </FadeIn>
                        )}
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
