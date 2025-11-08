// app/blog/[slug]/page.tsx
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/mdx-content'
import { Calendar, Clock, User } from 'lucide-react'

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = allPosts.find((p) => p.slug === params?.slug)

    if (!post) notFound()

    return (
        <article className="max-w-4xl mx-auto px-6 py-12 mt-10">
            {/* Header */}
            <header className="mb-12">
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {post.title}
                </h1>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    {post.date && (
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </div>
                    )}

                    {post.author && (
                        <div className="flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                    )}

                    {post.readTime && (
                        <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    )}
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Description */}
                {post.description && (
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {post.description}
                    </p>
                )}

                {/* Simple divider */}
                <hr className="mt-8 border-border" />
            </header>

            {/* MDX content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXContent code={post.body.code} />
            </div>
        </article>
    )
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }))
}