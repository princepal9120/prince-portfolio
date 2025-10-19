"use client";

import FadeIn from "@/components/animations/fade-in";
import { experiences } from "@/data/experiences";

const ExperienceSection = () => {
    return (
        <section className="py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Experience
                    </h2>
                </FadeIn>

                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <FadeIn key={exp.id} delay={0.05 * index}>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-4 border-b border-border/20 last:border-b-0 hover:bg-card/20 transition-colors rounded-lg px-2">
                                {/* Left side: Company info */}
                                <div className="flex items-center gap-2 flex-1">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center flex-shrink-0 border border-cyan-400/30">
                                        <img src={exp.logo} alt={exp.company} className="w-8 h-8 rounded-full" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white">
                                            {exp.company}
                                        </h3>
                                        <p className="text-muted-foreground text-xs">
                                            {exp.role} • {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Right side: Duration */}
                                <div className="md:w-48 flex-shrink-0">
                                    <p className="text-xs text-muted-foreground md:text-right">
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
