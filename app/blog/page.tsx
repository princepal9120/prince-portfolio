import { Metadata } from 'next'
import Link from 'next/link'
import FadeIn from '@/components/animations/fade-in'
import { allPosts } from 'contentlayer/generated'

export const metadata: Metadata = {
    title: 'Blog | Prince Pal - Technical Articles & Project Deep Dives',
    description:
        'In-depth technical articles about microservices, AI/ML, full-stack development, and software architecture',
}

export default function BlogPage() {
    const blogPosts = allPosts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <div className="min-h-screen pt-4  pb-6">
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8m mt-20">
                {/* <FadeIn>
                    <div className="mb-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">
                            Prince's Blog
                        </h1>
                    </div>
                </FadeIn> */}

                <FadeIn delay={0.2}>
                    {blogPosts.length === 0 ? (
                        <div className="text-center py-16">
                            <h3 className="text-xl font-semibold mb-3 text-muted-foreground">
                                No Blog Posts Yet
                            </h3>
                            <p className="text-muted-foreground">
                                Blog posts will appear here once they are added.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {blogPosts.map((post, index) => (
                                <FadeIn key={post.slug} delay={0.1 * (index + 1)}>
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group">
                                        <div className="text-muted-foreground text-sm sm:text-base sm:w-40 flex-shrink-0">
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            })}
                                            {post.featured && (
                                                <div className="mt-1">
                                                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                                        Published
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="block group-hover:text-primary transition-colors"
                                            >
                                                <h2 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:underline">
                                                    {post.title}
                                                </h2>
                                            </Link>

                                            <p className="text-muted-foreground mb-3 leading-relaxed">
                                                {post.description}
                                            </p>

                                            {post.tags?.length ? (
                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    {post.tags.slice(0, 4).map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : null}

                                            {post.readTime && (
                                                <div className="text-sm text-muted-foreground">
                                                    {post.readTime}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    )}
                </FadeIn>
            </div>
        </div>
    )
}