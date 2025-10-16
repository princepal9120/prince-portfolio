import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const MDXComponents = {
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient" {...props}>
            {children}
        </h1>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-3xl font-semibold mb-6 mt-12" {...props}>
            {children}
        </h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="text-2xl font-semibold mb-4 mt-8" {...props}>
            {children}
        </h3>
    ),
    h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className="text-xl font-semibold mb-3 mt-6" {...props}>
            {children}
        </h4>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-lg leading-relaxed mb-6" {...props}>
            {children}
        </p>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc list-inside space-y-2 mb-6 ml-4" {...props}>
            {children}
        </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal list-inside space-y-2 mb-6 ml-4" {...props}>
            {children}
        </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="text-lg leading-relaxed" {...props}>
            {children}
        </li>
    ),
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-muted-foreground" {...props}>
            {children}
        </blockquote>
    ),
    code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-muted px-2 py-1 rounded text-sm font-mono" {...props}>
            {children}
        </code>
    ),
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
        <div className="bg-gray-900 p-6 rounded-lg overflow-x-auto mb-6">
            <pre className="text-green-400 text-sm" {...props}>
                {children}
            </pre>
        </div>
    ),
    img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <div className="my-8">
            <img
                src={src}
                alt={alt}
                className="w-full rounded-lg shadow-lg"
                {...props}
            />
            {alt && (
                <p className="text-sm text-muted-foreground mt-2 text-center italic">
                    {alt}
                </p>
            )}
        </div>
    ),
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="border-border my-8" {...props} />
    ),
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-foreground" {...props}>
            {children}
        </strong>
    ),
    em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <em className="italic" {...props}>
            {children}
        </em>
    ),
    a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
            href={href}
            className="text-primary hover:underline font-medium"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            {...props}
        >
            {children}
        </a>
    ),
    // Custom components
    Card: ({ children, ...props }: React.ComponentProps<typeof Card>) => (
        <Card className="my-6" {...props}>
            {children}
        </Card>
    ),
    CardContent: ({ children, ...props }: React.ComponentProps<typeof CardContent>) => (
        <CardContent {...props}>
            {children}
        </CardContent>
    ),
    Badge: ({ children, ...props }: React.ComponentProps<typeof Badge>) => (
        <Badge {...props}>
            {children}
        </Badge>
    ),
}

export default MDXComponents