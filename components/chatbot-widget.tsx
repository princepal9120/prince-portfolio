"use client";

import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ChatbotWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Preview Card - Industry Style */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-4 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 animate-in slide-in-from-bottom-2 duration-300">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Prince AI
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    ● Recruiter Assistant
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm p-3">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                👋 Hi! I&apos;m Prince AI - your intelligent recruiter
                assistant.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-bl-sm p-3">
              <p className="text-sm text-gray-800 dark:text-gray-200 mb-2 font-medium">
                🎯 Perfect for Recruiters & Hiring Managers:
              </p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Deep dive into Prince&apos;s technical expertise</li>
                <li>• Explore his 15+ real-world projects</li>
                <li>• Understand his problem-solving approach</li>
                <li>• Get insights on culture fit & work style</li>
                <li>• Ask about specific tech stacks & experience</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl rounded-bl-sm p-3">
              <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                � Ask me: &quot;Tell me about Prince&apos;s AI projects&quot; or
                &quot;How does he approach full-stack development?&quot;
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl rounded-bl-sm p-3">
              <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                ⚡ Get comprehensive candidate insights in seconds - no need to
                schedule initial screening calls!
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-b-2xl">
            <Link
              href="https://chatbot.princepal.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              Click to Start
              <MessageCircle className="w-4 h-4" />
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
              Get comprehensive candidate insights instantly
            </p>
          </div>

          {/* Arrow pointer */}
          <div className="absolute top-full right-8 -mt-2">
            <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white dark:border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Main Chat Button - Industry Style */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <Link
          href="https://chatbot.princepal.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 relative overflow-hidden">
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-ping opacity-20"></div>

            {/* Icon */}
            <MessageCircle className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />

            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">1</span>
            </div>
          </div>

          {/* Simple tooltip for accessibility */}
          <span className="sr-only">
            Chat with Prince AI - Recruiter Assistant for Deep Candidate
            Insights
          </span>
        </Link>
      </div>
    </div>
  );
}
