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
            className="absolute top-3 right-3 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Copy code"
        >
            {copied ? (
                <Check className="w-4 h-4 text-green-400" />
            ) : (
                <Copy className="w-4 h-4 text-gray-300" />
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
        <div className="relative group my-6">
            <pre
                className="bg-[#0d1117] text-gray-100 p-4 rounded-lg overflow-x-auto border border-gray-800"
                {...props}
            >
                {children}
            </pre>
            <CopyButton text={textContent} />
        </div>
    )
}
