import type { MDXComponents } from 'mdx/types'
import MDXCustomComponents from '@/components/mdx-components'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...MDXCustomComponents,
        ...components,
    }
}