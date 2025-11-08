// components/TableOfContents.tsx
'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface Heading {
    text: string
    id: string
    level: number
    children?: Heading[]
}

interface TOCProps {
    headings: { text: string; id: string; level?: number }[]
}

// Build a tree structure from flat headings array
function buildHeadingTree(flatHeadings: { text: string; id: string; level?: number }[]): Heading[] {
    const tree: Heading[] = []
    const stack: Heading[] = []

    flatHeadings.forEach((heading) => {
        const node: Heading = {
            text: heading.text,
            id: heading.id,
            level: heading.level || 2,
            children: []
        }

        // Find the correct parent based on heading level
        while (stack.length > 0 && stack[stack.length - 1].level >= node.level) {
            stack.pop()
        }

        if (stack.length === 0) {
            tree.push(node)
        } else {
            stack[stack.length - 1].children?.push(node)
        }

        stack.push(node)
    })

    return tree
}

export function TableOfContents({ headings }: TOCProps) {
    const [activeId, setActiveId] = useState<string>('')
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())

    // Build hierarchical structure
    const headingTree = buildHeadingTree(headings)

    // Initialize all sections as expanded
    useEffect(() => {
        const allH2Ids = new Set(headings.filter(h => h.level === 2).map(h => h.id))
        setExpandedSections(allH2Ids)
    }, [headings])

    // Track active section on scroll with Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id
                        setActiveId(id)

                        // Auto-expand parent section when child becomes active
                        const activeHeading = headings.find(h => h.id === id)
                        if (activeHeading && activeHeading.level === 3) {
                            // Find parent H2
                            const currentIndex = headings.findIndex(h => h.id === id)
                            for (let i = currentIndex - 1; i >= 0; i--) {
                                if (headings[i].level === 2) {
                                    setExpandedSections(prev => new Set(prev).add(headings[i].id))
                                    break
                                }
                            }
                        }
                    }
                })
            },
            {
                rootMargin: '-100px 0px -80% 0px',
                threshold: [0, 1]
            }
        )

        // Observe all heading elements
        const headingElements: Element[] = []
        headings.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) {
                observer.observe(element)
                headingElements.push(element)
            }
        })

        return () => {
            headingElements.forEach((element) => observer.unobserve(element))
        }
    }, [headings])

    const toggleSection = (id: string) => {
        setExpandedSections(prev => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            return next
        })
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            // Update active state immediately for better UX
            setActiveId(id)

            // Calculate proper scroll position
            const top = element.getBoundingClientRect().top + window.scrollY - 100

            // Smooth scroll to element
            window.scrollTo({
                top,
                behavior: 'smooth'
            })

            // Update URL hash without jumping
            if (window.history.pushState) {
                window.history.pushState(null, '', `#${id}`)
            }
        }
    }

    if (headings.length === 0) return null

    const renderHeading = (heading: Heading, depth: number = 0) => {
        const isActive = activeId === heading.id
        const hasChildren = heading.children && heading.children.length > 0
        const isExpanded = expandedSections.has(heading.id)
        const isH2 = heading.level === 2

        return (
            <li key={heading.id} className="relative">
                <div className="flex items-start group">
                    {/* Expand/Collapse button for H2 with children */}
                    {isH2 && hasChildren && (
                        <button
                            onClick={() => toggleSection(heading.id)}
                            className="flex-shrink-0 w-5 h-5 mt-0.5 mr-1 flex items-center justify-center rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                            {isExpanded ? (
                                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                            ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
                            )}
                        </button>
                    )}

                    {/* Spacer for H2 without children */}
                    {isH2 && !hasChildren && <div className="w-6" />}

                    {/* Heading link */}
                    <a
                        href={`#${heading.id}`}
                        onClick={(e) => handleClick(e, heading.id)}
                        className={`flex-1 py-1.5 px-2 rounded-md text-sm transition-all duration-200 ${isH2 ? 'font-medium' : 'font-normal pl-3'
                            } ${isActive
                                ? 'text-primary bg-primary/10 dark:bg-primary/20 font-semibold'
                                : 'text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                    >
                        {/* Active indicator dot */}
                        {isActive && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 animate-pulse" />
                        )}
                        {heading.text}
                    </a>
                </div>

                {/* Render children (H3s) */}
                {hasChildren && isExpanded && (
                    <ul className="ml-6 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-800 pl-2">
                        {heading.children!.map((child) => renderHeading(child, depth + 1))}
                    </ul>
                )}
            </li>
        )
    }

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto toc-scrollbar pr-2">
            <div className="pb-4  rounded-lg p-4  ">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">
                        Table of Contents
                    </h4>
                    <button
                        onClick={() => {
                            const allH2Ids = headings.filter(h => h.level === 2).map(h => h.id)
                            if (expandedSections.size === allH2Ids.length) {
                                setExpandedSections(new Set())
                            } else {
                                setExpandedSections(new Set(allH2Ids))
                            }
                        }}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {expandedSections.size === headings.filter(h => h.level === 2).length
                            ? 'Collapse All'
                            : 'Expand All'}
                    </button>
                </div>

                <ul className="space-y-1">
                    {headingTree.map((heading) => renderHeading(heading))}
                </ul>
            </div>
        </nav>
    )
}
