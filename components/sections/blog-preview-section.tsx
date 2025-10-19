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
        <section className="py-16 bg-muted/20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-6 w-6 text-cyan-400" />
                        <h2 className="text-3xl font-bold">Blogs</h2>
                    </div>
                    <p className="text-muted-foreground mb-12">
                        A collection of my tough work experiences and ideas on technology, programming languages, databases, cloud and frameworks.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recentPosts.map((post, index) => (
                        <FadeIn key={post.slug} delay={0.1 * index} direction="up">
                            <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-cyan-400/30 group bg-card/50">
                                <CardContent className="p-6 flex-1">
                                    {/* Badge for category */}
                                    <div className="mb-3">
                                        <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/20">
                                            {post.tags[0] || "Article"}
                                        </Badge>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </CardContent>

                                <CardFooter className="p-6 pt-0">
                                    <Link href={`/blog/${post.slug}`} className="w-full">
                                        <Button
                                            variant="ghost"
                                            className="w-full gap-2 justify-start px-0 hover:text-cyan-400"
                                        >
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                {/* View All Button */}
                {posts.length > 3 && (
                    <FadeIn delay={0.4}>
                        <div className="flex justify-center mt-12">
                            <Link href="/blog">
                                <Button className="gap-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-8">
                                    View All Posts
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    );
}
