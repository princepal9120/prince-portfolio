'use client'

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXProvider } from '@mdx-js/react'

// 🧱 Custom components available inside .mdx files
const components = {
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="text-4xl font-bold mt-8 mb-4 text-primary" {...props} />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="text-3xl font-semibold mt-6 mb-3 text-primary/90" {...props} />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
    ),
    // Example of a custom MDX component:
    // Callout: ({ children }: { children: React.ReactNode }) => (
    //   <div className="p-4 border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded">
    //     {children}
    //   </div>
    // ),
}

interface MDXContentProps {
    code: string
}

/**
 * Renders MDX compiled by Contentlayer (`post.body.code`).
 * Works in Next.js App Router with full client support.
 */
export function MDXContent({ code }: MDXContentProps) {
    const Component = useMDXComponent(code)
    return (
        <MDXProvider components={components}>
            <Component components={components} />
        </MDXProvider>
    )
}
