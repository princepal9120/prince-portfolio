"use client";

import FadeIn from "@/components/animations/fade-in";
import { experiences } from "@/data/experiences";

const ExperienceSection = () => {
    return (
        <section className="py-16">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-12">
                        cool places I worked at
                    </h2>
                </FadeIn>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <FadeIn key={exp.id} delay={0.1 * index}>
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 py-6 border-b border-border/30 last:border-b-0">
                                {/* Left side: Company info */}
                                <div className="flex items-start gap-4 flex-1">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                                        <span className="text-lg font-bold text-cyan-400">
                                            {exp.company.substring(0, 2).toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            {exp.company}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-2">
                                            {exp.role} | {exp.type}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Right side: Duration */}
                                <div className="text-right md:text-left md:w-64 flex-shrink-0">
                                    <p className="text-sm text-muted-foreground">
                                        {exp.duration}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
