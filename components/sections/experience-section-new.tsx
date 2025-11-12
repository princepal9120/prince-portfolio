"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/fade-in";
import { experiences } from "@/data/experiences";
import {
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Calendar,
    Award,
    Code,
} from "lucide-react";

const ExperienceSection = () => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleExpanded = (id: string) => {
        setExpandedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="py-4">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Experience
                    </h2>
                </FadeIn>

                <div className="space-y-2">
                    {experiences.map((exp, index) => (
                        <FadeIn key={exp.id} delay={0.05 * index}>
                            <div className="border border-border/20 rounded-lg overflow-hidden hover:border-border/40 transition-all duration-200 bg-white dark:bg-card">
                                {/* Header */}
                                <div
                                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-card/20 transition-colors"
                                    onClick={() => toggleExpanded(exp.id)}
                                >
                                    {/* Left side */}
                                    <div className="flex items-center gap-2 flex-1">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                                            {exp.link ? (
                                                <img
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    className="w-8 h-8 rounded-full cursor-pointer hover:scale-110 transition-transform"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(exp.link, "_blank");
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    className="w-8 h-8 rounded-full"
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                    {exp.company}
                                                </h3>
                                                {exp.link && (
                                                    <ExternalLink className="w-3 h-3 text-gray-600 dark:text-muted-foreground" />
                                                )}
                                            </div>
                                            <p className="text-gray-600 dark:text-muted-foreground text-xs">
                                                {exp.role} • {exp.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right side */}
                                    <div className="flex items-center justify-between md:w-48">
                                        <p className="text-xs text-gray-600 dark:text-muted-foreground md:text-right flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {exp.duration}
                                        </p>
                                        <div className="ml-2">
                                            {expandedItems.includes(exp.id) ? (
                                                <ChevronUp className="w-4 h-4 text-gray-600 dark:text-muted-foreground" />
                                            ) : (
                                                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-muted-foreground" />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded content */}
                                {expandedItems.includes(exp.id) && (
                                    <div className="px-3 pb-3 border-t border-border/10">
                                        <div className="pt-3 space-y-3">
                                            {/* Achievements */}
                                            {exp.achievements && exp.achievements.length > 0 && (
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Award className="w-4 h-4 text-green-600 dark:text-green-400" />
                                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                                            Key Achievements
                                                        </h4>
                                                    </div>
                                                    <ul className="space-y-1">
                                                        {exp.achievements.map((achievement, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="text-xs text-gray-700 dark:text-muted-foreground pl-6 relative"
                                                            >
                                                                <span className="absolute left-2 top-1.5 w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full"></span>
                                                                {achievement}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Technologies */}
                                            {exp.technologies && exp.technologies.length > 0 && (
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                                                            Technologies Used
                                                        </h4>
                                                    </div>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {exp.technologies.map((tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-xs px-2 py-1 rounded-md 
                                bg-blue-100 text-blue-800 border border-blue-200 
                                dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
