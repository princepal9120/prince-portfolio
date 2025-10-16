import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Github, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/animations/fade-in'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface BlogPostPageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        return {
            title: 'Blog Post Not Found',
        }
    }

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
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl">
            <FadeIn>
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>

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
                                day: 'numeric'
                            })}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                        </div>
                    </div>
                </header>
            </FadeIn>

            {/* Content */}
            <FadeIn delay={0.2}>
                <article className="prose prose-lg dark:prose-invert max-w-none min-h-screen">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            h1: ({ children }) => <h1 className="text-4xl font-bold mb-6">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-3xl font-semibold mb-6 mt-12">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-2xl font-semibold mb-4 mt-8">{children}</h3>,
                            h4: ({ children }) => <h4 className="text-xl font-semibold mb-3 mt-6">{children}</h4>,
                            p: ({ children }) => <p className="text-lg leading-relaxed mb-6">{children}</p>,
                            code: ({ children }) => <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{children}</code>,
                            pre: ({ children }) => (
                                <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto mb-6">
                                    <pre className="text-green-400 text-sm">{children}</pre>
                                </div>
                            ),
                            img: ({ src, alt }) => (
                                <div className="my-8">
                                    <img src={src} alt={alt} className="w-full rounded-lg shadow-lg" />
                                    {alt && <p className="text-sm text-muted-foreground mt-2 text-center italic">{alt}</p>}
                                </div>
                            ),
                            ul: ({ children }) => <ul className="list-disc list-inside space-y-2 mb-6 ml-4">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">{children}</ol>,
                            li: ({ children }) => <li className="text-lg leading-relaxed">{children}</li>,
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-muted-foreground">
                                    {children}
                                </blockquote>
                            ),
                            a: ({ children, href }) => (
                                <a
                                    href={href}
                                    className="text-primary hover:underline font-medium"
                                    target={href?.startsWith('http') ? '_blank' : undefined}
                                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    {children}
                                </a>
                            ),
                            hr: () => <hr className="border-border my-8" />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>

                    {/* Debug: Show end of content */}
                    <div className="mt-12 p-4 bg-green-100 dark:bg-green-900 rounded">
                        <h3 className="font-bold mb-2">End of Content Marker</h3>
                        <p className="text-sm">Total content length: {post.content.length} characters</p>
                        <p className="text-sm mt-2">Last 200 characters of raw content:</p>
                        <code className="text-xs block mt-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                            {post.content.substring(post.content.length - 200)}
                        </code>
                    </div>
                </article>
            </FadeIn>

            {/* Footer */}
            <FadeIn delay={0.4}>
                <footer className="border-t pt-12 mt-16">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <Button asChild>
                            <Link href="https://github.com/princepal9120" className="gap-2">
                                <Github className="h-4 w-4" />
                                View More Projects
                            </Link>
                        </Button>
                        <Button variant="outline" asChild>
                            <Link href="/contact" className="gap-2">
                                <ExternalLink className="h-4 w-4" />
                                Get In Touch
                            </Link>
                        </Button>
                    </div>

                    <div className="text-center">
                        <p className="text-muted-foreground">
                            Have questions about this article or want to discuss the topic further?
                            <Link href="/contact" className="text-primary hover:underline ml-1">
                                Let's connect!
                            </Link>
                        </p>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/blog">
                            <Button variant="ghost" className="gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                Back to All Articles
                            </Button>
                        </Link>
                    </div>
                </footer>
            </FadeIn>
        </div>
    )
}