"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/fade-in";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

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
    const recentPosts = posts.slice(0, 3);
    if (recentPosts.length === 0) return null;

    return (
        <section className="pt-16 pb-10 bg-muted/10 relative z-10">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <FadeIn>
                    <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="h-5 w-5 text-cyan-400" />
                        <h2 className="text-3xl font-bold tracking-tight text-white">Blogs</h2>
                    </div>
                    <p className="text-muted-foreground text-sm mb-10">
                        Technical articles and insights
                    </p>
                </FadeIn>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentPosts.map((post, index) => (
                        <FadeIn key={post.slug} delay={0.05 * index} direction="up">
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="h-full flex flex-col hover:shadow-lg hover:border-cyan-400/30 transition-all duration-300 bg-card/40 group">
                                    <CardContent className="p-5 flex-1 flex flex-col justify-between">
                                        <div>
                                            <Badge className="mb-3 bg-cyan-400/10 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/20 text-[10px] px-1.5 py-0.5">
                                                {post.tags[0] || "Article"}
                                            </Badge>

                                            <h3 className="text-base font-semibold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                                {post.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-auto">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>
                                                    {new Date(post.date).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                {/* View All */}
                {posts.length > 3 && (
                    <FadeIn delay={0.3}>
                        <div className="flex justify-center mt-8 mb-0">
                            <Link href="/blog">
                                <Button className="gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold text-xs h-8">
                                    View All
                                    <ArrowRight className="h-3 w-3" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
