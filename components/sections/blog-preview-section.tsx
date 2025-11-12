"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

// Export component for dynamic import
export default function BlogPreviewSection() {
    // Get only first 3 posts for preview
    const allPosts = getAllPosts();
    const previewPosts = allPosts.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section id="blog" className="py-16 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-slate-600" />
                        <h2 className="text-3xl font-bold tracking-tight text-white">Blogs</h2>
                    </div>
                    <p className="text-muted-foreground mb-12 max-w-2xl">
                        Thoughts, tutorials, and insights on software development, AI, and technology.
                    </p>
                </FadeIn>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {previewPosts.map((post, index) => (
                        <FadeIn key={post.slug} delay={0.1 * index} direction="up">
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="h-full flex flex-col hover:shadow-lg hover:border-slate-200/30 transition-all duration-300 bg-card/40 group">
                                    <CardContent className="p-5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <Badge className="mb-3 bg-slate-600/10 text-slate-600 border-slate-600/30 hover:bg-slate-600/20 text-[10px] px-1.5 py-0.5">
                                                {post.tags[0] || "Article"}
                                            </Badge>
                                            <h3 className="text-base font-semibold mb-2 group-hover:text-slate-600 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                                                {post.description}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </FadeIn>
                    ))}
                </motion.div>

                <FadeIn delay={0.4}>
                    <div className="text-center">
                        <Link href="/blog">
                            <div className="flex items-center gap-2 mb-2">
                                <Button className="gap-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold text-xs h-8">
                                    View All
                                    <ArrowRight className="h-3 w-3" />
                                </Button>
                            </div>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
