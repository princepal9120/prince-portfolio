// app/blog/[slug]/page.tsx

import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import { Calendar, Clock, User } from 'lucide-react'
import { MDXContent } from '@/components/mdx-content';
import { TableOfContents } from '@/components/TableOfContents';
import { extractHeadings } from '@/lib/extractHeadings';


interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}


export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = allPosts.find((p) => p.slug === slug)

    if (!post) notFound()

    const headings = extractHeadings(post.body.raw)

    return (
        <div className="max-w-7xl mx-auto pl-6 pr-0 py-12 mt-10">
            <div className="flex gap-18">
                {/* Main content */}
                <article className="flex-1 max-w-5xl">
                    {/* Header */}
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    {post.date && (
                        <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
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
                {post?.tags && post?.tags?.length > 0 && (
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

                <hr className="mt-8 border-border" />
            </header>

                    {/* MDX content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <MDXContent code={post.body.code} />
                    </div>
                </article>

                {/* Table of contents - sidebar */}
                {headings.length > 0 && (
                    <aside className="hidden xl:block w-74 flex-shrink-0">
                        <div className="sticky top-24">
                            <TableOfContents headings={headings} />
                        </div>
                    </aside>
                )}
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }))
}
