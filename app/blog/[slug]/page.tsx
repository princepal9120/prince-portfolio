import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'
import { allPosts } from 'contentlayer/generated'
import { MDXContent } from '@/components/mdx-content'

interface BlogPostPageProps {
    params: Promise<{ slug: string }> // 👈 note: now Promise
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params // ✅ await here
    const post = allPosts.find((post) => post.slug === slug)

    if (!post) return { title: 'Blog Post Not Found' }

    return {
        title: `${post.title} | Prince Pal`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params // ✅ await here too
    const post = allPosts.find((post) => post.slug === slug)

    if (!post) notFound()

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="mb-8">
                        <Link href="/blog">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Blog
                            </Button>
                        </Link>
                    </div>

                    <header className="mb-12">
                        {post.tags?.length ? (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        ) : null}

                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            {post.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </div>
                            {post.readTime && (
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    {post.readTime}
                                </div>
                            )}
                        </div>
                    </header>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <article className="prose prose-lg dark:prose-invert max-w-none">
                        <MDXContent code={post.body.code} />
                    </article>
                </FadeIn>
            </div>
        </div>
    )
}
