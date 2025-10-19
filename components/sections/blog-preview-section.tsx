"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
    // Show only the first 3 posts
    const recentPosts = posts.slice(0, 3);

    if (recentPosts.length === 0) {
        return null;
    }

    return (
        <section className="py-8 bg-muted/20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-5 w-5 text-cyan-400" />
                        <h2 className="text-2xl md:text-3xl font-bold">Blogs</h2>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">
                        Technical articles and insights
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {recentPosts.map((post, index) => (
                        <FadeIn key={post.slug} delay={0.05 * index} direction="up">
                            <Link href={`/blog/${post.slug}`}>
                                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-cyan-400/30 group bg-card/50 cursor-pointer">
                                    <CardContent className="p-4 flex-1">
                                        {/* Badge for category */}
                                        <div className="mb-2">
                                            <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/20 text-[10px] px-1.5 py-0.5">
                                                {post.tags[0] || "Article"}
                                            </Badge>
                                        </div>

                                        <h3 className="text-base font-semibold mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-2.5 w-2.5" />
                                                <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric'
                                                })}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-2.5 w-2.5" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                {/* View All Button */}
                {posts.length > 3 && (
                    <FadeIn delay={0.3}>
                        <div className="flex justify-center mt-6">
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
