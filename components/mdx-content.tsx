// components/mdx-content.tsx
'use client'

import * as React from 'react'
import MDXComponents from './mdx-components'

interface MDXContentProps {
    code: string
}

export function MDXContent({ code }: MDXContentProps) {
    const Component = React.useMemo(() => {
        try {
            // Make React available in the scope
            const fn = new Function('React', code)
            return fn(React).default
        } catch (error) {
            console.error('Error rendering MDX:', error)
            return () => <div>Error loading content</div>
        }
    }, [code])

    return <Component components={MDXComponents} />
}