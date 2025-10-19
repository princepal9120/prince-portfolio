"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/fade-in";

export default function ContributionGraph() {
    // Generate contribution data (simplified for demo)
    const generateContributions = () => {
        const contributions = [];
        const months = 12;
        const weeksPerMonth = 4;

        for (let month = 0; month < months; month++) {
            for (let week = 0; week < weeksPerMonth; week++) {
                for (let day = 0; day < 7; day++) {
                    const level = Math.floor(Math.random() * 5); // 0-4 contribution levels
                    contributions.push({ month, week, day, level });
                }
            }
        }
        return contributions;
    };

    const contributions = generateContributions();

    const getColor = (level: number) => {
        const colors = [
            "bg-muted/30",           // No contributions
            "bg-green-400/20",        // Low
            "bg-green-400/40",        // Medium-low
            "bg-green-400/60",        // Medium
            "bg-green-400",           // High
        ];
        return colors[level];
    };

    return (
        <section className="py-8">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <h3 className="text-lg font-semibold mb-4">1844 contributions in the last year</h3>

                    <div className="bg-card/30 rounded-lg p-4 border border-border/30 overflow-x-auto">
                        {/* Month labels */}
                        <div className="flex gap-1 mb-2 text-xs text-muted-foreground">
                            {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month) => (
                                <div key={month} className="w-12 text-center">
                                    {month}
                                </div>
                            ))}
                        </div>

                        {/* Contribution grid */}
                        <div className="flex gap-1">
                            {Array.from({ length: 53 }).map((_, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                                        const contribution = contributions[weekIndex * 7 + dayIndex];
                                        return (
                                            <motion.div
                                                key={`${weekIndex}-${dayIndex}`}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: (weekIndex * 7 + dayIndex) * 0.001,
                                                    duration: 0.2
                                                }}
                                                className={`w-3 h-3 rounded-sm ${contribution ? getColor(contribution.level) : "bg-muted/30"
                                                    } hover:ring-2 hover:ring-green-400 transition-all cursor-pointer`}
                                                title={`${contribution?.level || 0} contributions`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                            <span>Less</span>
                            <div className="flex gap-1">
                                {[0, 1, 2, 3, 4].map((level) => (
                                    <div
                                        key={level}
                                        className={`w-3 h-3 rounded-sm ${getColor(level)}`}
                                    />
                                ))}
                            </div>
                            <span>More</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
