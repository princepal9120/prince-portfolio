// components/TableOfContents.tsx
'use client'

import React, { useEffect, useState } from 'react'
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

    // Debug: Log headings on mount after a delay to ensure DOM is ready
    useEffect(() => {
        const checkDOMElements = () => {
            console.log('TOC: Headings received:', headings)
            console.log('TOC: Checking DOM for heading elements...')
            headings.forEach(({ id }) => {
                const element = document.getElementById(id)
                console.log(`TOC: Element #${id}`, element ? 'FOUND ✓' : 'NOT FOUND ✗')
                if (element) {
                    console.log(`  - Tag: ${element.tagName}, Text: ${element.textContent?.substring(0, 30)}`)
                }
            })
        }

        // Check immediately and after a delay
        setTimeout(checkDOMElements, 100)
    }, [headings])

    // Track active section on scroll with Intersection Observer
    useEffect(() => {
        // Only run on client side
        if (typeof window === 'undefined') return

        // Wait for DOM to be fully ready
        const setupObserver = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    // Filter visible entries
                    const visibleEntries = entries.filter(entry => entry.isIntersecting)

                    if (visibleEntries.length > 0) {
                        // Get the topmost visible entry
                        const topEntry = visibleEntries.reduce((top, entry) => {
                            return entry.boundingClientRect.top < top.boundingClientRect.top ? entry : top
                        })

                        const id = topEntry.target.id
                        console.log('TOC: Active section changed to:', id)
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
                },
                {
                    // Adjust rootMargin to trigger when heading is near top of viewport
                    rootMargin: '-100px 0px -66% 0px',
                    threshold: [0, 0.25, 0.5, 0.75, 1]
                }
            )

            // Collect and observe all heading elements
            const headingElements: Element[] = []
            headings.forEach(({ id }) => {
                const element = document.getElementById(id)
                if (element) {
                    observer.observe(element)
                    headingElements.push(element)
                } else {
                    console.warn(`TOC: Element with id "${id}" not found in DOM`)
                }
            })

            return () => {
                headingElements.forEach((element) => observer.unobserve(element))
            }
        }

        // Setup observer with a small delay to ensure DOM is ready
        const timeoutId = setTimeout(setupObserver, 100)

        return () => {
            clearTimeout(timeoutId)
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

        // Only run on client side
        if (typeof window === 'undefined') return

        const element = document.getElementById(id)
        if (element) {
            console.log('TOC: Clicked on heading:', id)
            // Update active state immediately for better UX
            setActiveId(id)

            // Use scrollIntoView for proper scroll behavior
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })

            // Update URL hash without jumping
            window.history.replaceState(null, '', `#${id}`)
        } else {
            console.error('TOC: Could not find element with id:', id)
        }
    }

    // Fallback: Also track scroll position manually
    useEffect(() => {
        if (typeof window === 'undefined') return

        let ticking = false

        const updateActiveHeading = () => {
            const scrollY = window.scrollY
            const headingPositions = headings.map(({ id }) => {
                const element = document.getElementById(id)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return {
                        id,
                        top: rect.top + scrollY,
                        bottom: rect.bottom + scrollY
                    }
                }
                return null
            }).filter((pos): pos is { id: string; top: number; bottom: number } => pos !== null)

            // Find the heading closest to the top of the viewport (accounting for offset)
            const offset = 120 // Adjust based on your fixed header height
            const currentPosition = scrollY + offset

            let activeHeading = headingPositions[0]?.id || ''

            for (const pos of headingPositions) {
                if (currentPosition >= pos.top) {
                    activeHeading = pos.id
                } else {
                    break
                }
            }

            if (activeHeading && activeHeading !== activeId) {
                setActiveId(activeHeading)
            }

            ticking = false
        }

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateActiveHeading)
                ticking = true
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Initial update
        updateActiveHeading()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [headings, activeId])

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
