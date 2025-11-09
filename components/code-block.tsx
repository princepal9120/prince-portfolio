"use client"

import React, { useState } from "react"
import { Check, Copy } from "lucide-react"

// Copy button component for code blocks
function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors opacity-0 sm:group-hover:opacity-100 touch:opacity-100"
            aria-label="Copy code"
        >
            {copied ? (
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
            ) : (
                <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300" />
            )}
        </button>
    )
}

// Pre component with copy functionality
export default function CodeBlock({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) {
    const textContent = React.Children.toArray(children)
        .map((child) => {
            if (React.isValidElement(child)) {
                // TypeScript-safe cast
                const element = child as React.ReactElement<{ children?: React.ReactNode }>
                return element.props.children || ""
            }
            return child
        })
        .join("")

    return (
        <div className="relative group my-4 sm:my-6 -mx-4 sm:mx-0">
            <pre
                className="bg-[#0d1117] text-gray-100 p-3 sm:p-4 rounded-none sm:rounded-lg overflow-x-auto border-y sm:border border-gray-800 text-xs sm:text-sm"
                {...props}
            >
                {children}
            </pre>
            <CopyButton text={textContent} />
        </div>
    )
}
