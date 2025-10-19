"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { Calendar, Clock, ArrowRight, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    tags: string[];
    description: string;
    readTime: string;
}

interface BlogPreviewSectionProps {
    posts: BlogPost[];
}

export default function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
    // Show only the first 3 posts
    const recentPosts = posts.slice(0, 3);

    if (recentPosts.length === 0) {
        return null;
    }

    return (
        <section className="py-16 bg-muted/20 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
            <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl" />
            
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-purple-600/10 rounded-lg border border-purple-600/20">
                            <BookOpen className="h-6 w-6 text-purple-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                            Latest Insights
                        </h2>
                        <TrendingUp className="h-5 w-5 text-purple-400 animate-pulse" />
                    </div>
                    <p className="text-muted-foreground mb-12 text-lg">
                        Deep dives into technology, architecture, and developer experiences
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentPosts.map((post, index) => (
                        <FadeIn key={post.slug} delay={0.1 * index} direction="up">
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <Card className="h-full flex flex-col bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group relative overflow-hidden">
                                        {/* Animated gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/0 to-cyan-400/0 group-hover:from-purple-600/5 group-hover:via-cyan-400/5 group-hover:to-purple-600/5 transition-all duration-500" />
                                        
                                        {/* Decorative corner accent */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <CardContent className="p-6 flex-1 relative z-10">
                                            {/* Tag badge with icon */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <Badge className="bg-purple-600/10 text-purple-400 border-purple-400/30 hover:bg-purple-600/20 font-semibold px-3 py-1">
                                                    <Sparkles className="h-3 w-3 mr-1" />
                                                    {post.tags[0] || "Article"}
                                                </Badge>
                                            </div>

                                            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug bg-gradient-to-r from-white to-purple-400 bg-clip-text group-hover:text-transparent">
                                                {post.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                                                {post.description}
                                            </p>

                                            {/* Meta information with enhanced styling */}
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-4 border-t border-border/30">
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-3.5 w-3.5 text-purple-400" />
                                                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="h-3.5 w-3.5 text-cyan-400" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                            </div>
                                        </CardContent>

                                        <CardFooter className="p-6 pt-0 relative z-10">
                                            <Button
                                                variant="ghost"
                                                className="w-full gap-2 justify-between px-4 group-hover:bg-purple-400/10 group-hover:text-purple-400 transition-all"
                                            >
                                                <span className="font-semibold">Read Article</span>
                                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>

                {/* View All Button */}
                {posts.length > 3 && (
                    <FadeIn delay={0.4}>
                        <div className="flex justify-center mt-12">
                            <Link href="/blog">
                                <Button className="gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-10 py-6 text-base rounded-xl shadow-2xl shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 hover:scale-105">
                                    View All Articles
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
