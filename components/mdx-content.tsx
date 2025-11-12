'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import MDXComponents from './mdx-components'

interface MDXClientWrapperProps {
    code: string
}

export function MDXClientWrapper({ code }: MDXClientWrapperProps) {
    const Component = useMDXComponent(code)

    if (!Component) {
        return <div>Loading content...</div>
    }

    return (
        <div className="mdx-content">
            <Component components={MDXComponents} />
        </div>
    )
}
