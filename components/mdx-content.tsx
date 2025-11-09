'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'

interface MDXClientWrapperProps {
    code: string
}

export function MDXClientWrapper({ code }: MDXClientWrapperProps) {
    const Component = useMDXComponent(code)
    
    return (
        <div className="prose dark:prose-invert max-w-none">
            <Component />
        </div>
    )
}
