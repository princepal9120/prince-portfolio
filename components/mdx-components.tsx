import React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import CodeBlock from "./code-block"



const MDXComponents = {
    // Headings - Preserve id from rehype-slug while applying custom styles
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-8 scroll-mt-24 text-gray-900 dark:text-gray-100"
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 mt-8 sm:mt-10 pb-2 border-b border-gray-200 dark:border-gray-700 scroll-mt-24 text-gray-900 dark:text-gray-100"
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 mt-6 sm:mt-8 scroll-mt-24 text-gray-900 dark:text-gray-100"
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className="text-base sm:text-lg md:text-xl font-semibold mb-2 mt-4 sm:mt-6 scroll-mt-24 text-gray-900 dark:text-gray-100"
            {...props}
        />
    ),

    // Text
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 mb-4 sm:mb-5 text-gray-800 dark:text-gray-200" {...props} />
    ),

    // Lists
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="list-disc pl-5 sm:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200" {...props} />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="list-decimal pl-5 sm:pl-6 mb-4 sm:mb-5 space-y-1.5 sm:space-y-2 text-gray-800 dark:text-gray-200" {...props} />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7" {...props} />
    ),

    // Blockquote
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className="border-l-2 sm:border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/50 pl-3 sm:pl-4 pr-3 sm:pr-4 py-2 sm:py-3 my-4 sm:my-6 italic text-sm sm:text-base text-gray-800 dark:text-gray-100"
            {...props}
        />
    ),

    // Code
    code: (props: React.HTMLAttributes<HTMLElement>) => {
        const { children, className, ...rest } = props
        const isInline = !className

        if (isInline) {
            return (
                <code
                    className="px-1 sm:px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-xs sm:text-sm font-mono text-pink-600 dark:text-pink-300 border border-gray-200 dark:border-gray-700 break-words"
                    {...rest}
                >
                    {children}
                </code>
            )
        }

        return (
            <code className={className} {...rest}>
                {children}
            </code>
        )
    },

    // Pre with copy button
    pre: CodeBlock,

    // Images
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        const { alt, src, ...rest } = props
        return (
            <figure className="my-6 sm:my-8 -mx-4 sm:mx-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={src || ""}
                    alt={alt || ""}
                    className="w-full rounded-none sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-700 shadow-sm"
                    {...rest}
                />
                {alt && (
                    <figcaption className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 text-center italic px-4 sm:px-0">
                        {alt}
                    </figcaption>
                )}
            </figure>
        )
    },

    // Horizontal rule
    hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
        <hr className="my-6 sm:my-8 border-gray-200 dark:border-gray-700" {...props} />
    ),

    // Strong and emphasis
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-bold text-gray-900 dark:text-white" {...props} />
    ),
    em: (props: React.HTMLAttributes<HTMLElement>) => (
        <em className="italic text-gray-800 dark:text-gray-200" {...props} />
    ),

    // Links
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const isExternal = href?.startsWith("http")
        return (
            <a
                href={href}
                className="text-black-600 dark:text-white-100 hover:text-white-600 dark:hover:text-white-300 underline underline-offset-2 font-medium transition-colors"
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                {...props}
            >
                {children}
            </a>
        )
    },

    // Tables - ENHANCED for mobile
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto rounded-none sm:rounded-lg border-y sm:border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
        </div>
    ),
    thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
    ),
    tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800" {...props} />
    ),
    tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors" {...props} />
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className="px-3 sm:px-4 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider border-b-2 border-gray-200 dark:border-gray-700"
            {...props}
        />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className="px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700"
            {...props}
        />
    ),

    // Additional elements
    del: (props: React.HTMLAttributes<HTMLElement>) => (
        <del className="line-through text-gray-500 dark:text-gray-500" {...props} />
    ),
    kbd: (props: React.HTMLAttributes<HTMLElement>) => (
        <kbd className="px-2 py-1 text-sm font-mono bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded" {...props} />
    ),
    sub: (props: React.HTMLAttributes<HTMLElement>) => <sub {...props} />,
    sup: (props: React.HTMLAttributes<HTMLElement>) => <sup {...props} />,

    // Custom components
    Card: (props: React.ComponentPropsWithoutRef<typeof Card>) => (
        <Card className="my-6 border-gray-200 dark:border-gray-700" {...props} />
    ),
    CardContent: (props: React.ComponentPropsWithoutRef<typeof CardContent>) => (
        <CardContent className="text-gray-800 dark:text-gray-200" {...props} />
    ),
    Badge: (props: React.ComponentPropsWithoutRef<typeof Badge>) => (
        <Badge {...props} />
    ),
}

export default MDXComponents