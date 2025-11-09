// app/blog/[slug]/page.tsx

import { allPosts } from '.contentlayer/generated'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import { TableOfContents } from '@/components/tableofcontent'
import { extractHeadings } from '@/lib/extractheadings'
import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogPageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPostPage(props: BlogPageProps) {
    const params = await props.params
    const { slug } = params
    const post = allPosts.find((p) => p.slug === slug)

    if (!post) notFound()

    const headings = extractHeadings(post.body.raw)

    return (
        <div className="w-full mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-10 sm:mt-16">
            <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-6 lg:gap-10">

                {/* LEFT SIDEBAR: Blog List */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24 space-y-4">
                        <h2 className="text-lg font-semibold mb-3">All Blogs</h2>
                        <ul className="space-y-2 text-sm">
                            {allPosts.map((p) => (
                                <li key={p.slug}>
                                    <Link
                                        href={`/blog/${p.slug}`}
                                        className={`block transition-colors hover:text-primary line-clamp-2 ${p.slug === slug
                                                ? 'text-primary font-semibold'
                                                : 'text-muted-foreground'
                                            }`}
                                    >
                                        {p.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* MAIN CONTENT */}
                <article className="w-full max-w-8xl mx-auto lg:mx-0">
                    <header className="mb-8 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                            {post.title}
                        </h1>

                        {/* Metadata */}
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
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
                        {Array.isArray(post?.tags) && post?.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                                {post.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] sm:text-xs font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary text-secondary-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Description */}
                        {post.description && (
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                                {post.description}
                            </p>
                        )}

                        <hr className="mt-8 border-border" />
                    </header>

                    {/* Mobile TOC */}
                    {headings.length > 0 && (
                        <div className="xl:hidden mb-8 border border-gray-200 dark:border-gray-800 rounded-lg p-4 bg-gray-50/50 dark:bg-gray-900/50">
                            <details className="group">
                                <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-sm">
                                    <span>Table of Contents</span>
                                    <svg
                                        className="w-5 h-5 transition-transform group-open:rotate-180"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </summary>
                                <div className="mt-4 max-h-[60vh] overflow-y-auto toc-scrollbar">
                                    <TableOfContents headings={headings} />
                                </div>
                            </details>
                        </div>
                    )}

                    {/* MDX CONTENT */}
                    <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                        <MDXRemote source={post.body.raw} />
                    </div>
                </article>

                {/* RIGHT SIDEBAR: TOC (Desktop) */}
                {headings.length > 0 && (
                    <aside className="hidden xl:block">
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
    return allPosts.map((post) => ({ slug: post.slug }))
}
