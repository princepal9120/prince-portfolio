"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FadeIn from "@/components/animations/fade-in";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "@/data/experiences";

export default function ExperienceSection() {
    return (
        <section className="py-16 bg-muted/20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-6 w-6 text-cyan-400" />
                        <h2 className="text-3xl font-bold">cool places I worked at</h2>
                    </div>
                    <p className="text-muted-foreground mb-12">
                        A brief about my work experiences where I have worked at and where I am currently working.
                    </p>
                </FadeIn>

                <div className="max-w-5xl mx-auto space-y-6">
                    {experiences.map((exp, index) => (
                        <FadeIn key={exp.id} delay={0.1 * index}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="overflow-hidden border-border/50 hover:border-cyan-400/30 transition-all duration-300 bg-card/50">
                                    <CardContent className="p-0">
                                        <div className="flex items-start gap-6 p-6">
                                            {/* Company Logo */}
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center border-2 border-cyan-400/30">
                                                    <span className="text-2xl font-bold text-cyan-400">
                                                        {exp.company.substring(0, 2).toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-white mb-1 hover:text-cyan-400 transition-colors">
                                                            {exp.company}
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground">
                                                            {exp.role} | {exp.type}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Calendar className="h-4 w-4" />
                                                            <span>{exp.duration}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground mb-4">
                                                    {exp.description}
                                                </p>

                                                {/* Technologies */}
                                                {exp.technologies && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.technologies.map((tech, i) => (
                                                            <Badge
                                                                key={i}
                                                                variant="secondary"
                                                                className="text-xs bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
