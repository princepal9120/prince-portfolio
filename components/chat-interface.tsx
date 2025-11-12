"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, Sparkles, X, Minimize2, Maximize2, Copy, ThumbsUp, ThumbsDown, User, Bot, RotateCcw } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function ChatInterface() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "👋 Hi! I'm Prince AI - your intelligent recruiter assistant. I can help you learn about Prince's experience, skills, projects, and technical expertise. What would you like to know?",
      role: "assistant",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const copyToClipboard = async (content: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedMessageId(messageId);
      setTimeout(() => setCopiedMessageId(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            content: msg.content,
            role: msg.role
          }))
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: data.id || Date.now().toString(),
        content: data.content,
        role: "assistant",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message:", error);

      // Diverse error messages with rotation
      const errorMessages = [
        "🔧 **Technical hiccup!** I'm having trouble connecting right now. Please try again in a moment!",
        "⚡ **Connection issue detected!** My systems are temporarily down. Give me a moment to recover!",
        "🛠️ **Maintenance mode!** I'm currently being updated. Please try again shortly!",
        "🌐 **Network glitch!** Having trouble reaching my servers. Let's try that again!",
        "🔄 **System rebooting!** Give me a moment to refresh my systems. Try again in a bit!"
      ];

      const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      const errorMessage: Message = {
        id: Date.now().toString(),
        content: randomError,
        role: "assistant",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      // Focus back to input after sending
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: "1",
        content: "👋 Hi! I'm Prince AI - your intelligent recruiter assistant. I can help you learn about Prince's experience, skills, projects, and technical expertise. What would you like to know?",
        role: "assistant",
        timestamp: new Date()
      }
    ]);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const formatMessageContent = (content: string) => {
    // Convert markdown-style formatting to HTML
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="inline-code">$1</code>')
      .replace(/\n/g, '<br />')
      .replace(/• (.*?)(<br |>)/g, '<li>$1</li>')
      .replace(/<li>(.*?)<\/li>/g, '<ul class="list-disc ml-4"><li>$1</li></ul>')
      .replace(/### (.*?)(<br |>)/g, '<h3 class="text-lg font-semibold mt-3 mb-1">$1</h3>')
      .replace(/## (.*?)(<br |>)/g, '<h2 class="text-xl font-semibold mt-4 mb-2">$1</h2>')
      .replace(/# (.*?)(<br |>)/g, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>');
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          onClick={() => {
            setIsOpen(true);
            setTimeout(() => inputRef.current?.focus(), 300);
          }}
          className="group block"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>

            {/* Main button */}
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Icon */}
              <MessageCircle className="w-5 h-5 sm:w-8 sm:h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />


            </div>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:inset-auto sm:bottom-4 sm:right-4 sm:top-auto sm:left-auto sm:p-0">
      <div className="relative w-full max-w-[95vw] sm:w-[420px] md:w-[480px] lg:w-[410px] h-[85vh] sm:h-[700px] md:h-[750px] lg:h-[640px] bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <h3 className="font-semibold text-white text-xs sm:text-sm">Prince AI Assistant</h3>
              <p className="text-[10px] sm:text-xs text-green-100 flex items-center gap-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="hidden sm:inline">Online • Ready to help</span>
                <span className="sm:hidden">Online</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={resetChat}
              title="Reset chat"
              className="w-6 h-6 sm:w-8 sm:h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            >
              <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 sm:w-8 sm:h-8 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
            >
              <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Messages */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 sm:space-y-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} group animate-fadeIn`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`flex items-start gap-2 sm:gap-3 max-w-[90%] sm:max-w-[85%] ${message.role === "user" ? "flex-row-reverse gap-2 sm:gap-3" : ""}`}>
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${message.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 ml-2 sm:ml-3"
                      : "bg-gradient-to-r from-green-500 to-teal-600 mr-2 sm:mr-3"
                      }`}>
                      {message.role === "user" ? (
                        <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      )}
                    </div>

                    {/* Message bubble */}
                    <div className={`relative ${message.role === "user" ? "mr-2 sm:mr-3" : "ml-2 sm:ml-3"}`}>
                      <div
                        className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-sm hover:shadow-md transition-all duration-200 ${message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-sm"
                          : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm border border-gray-200 dark:border-gray-700"
                          }`}
                      >
                        <div
                          className="text-[12px] sm:text-sm leading-relaxed whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: formatMessageContent(message.content) }}
                        />
                      </div>

                      {/* Message actions */}
                      <div className={`absolute top-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${message.role === "user" ? "-left-16 sm:-left-20" : "-right-16 sm:-right-20"
                        }`}>
                        <button
                          onClick={() => copyToClipboard(message.content, message.id)}
                          className="w-6 h-6 sm:w-7 sm:h-7 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          {copiedMessageId === message.id ? (
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <Copy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600 dark:text-gray-300" />
                          )}
                        </button>

                      </div>

                      {/* Timestamp */}
                      <p className={`text-[10px] sm:text-xs mt-1 opacity-60 ${message.role === "user" ? "text-right text-purple-100" : "text-left text-gray-500 dark:text-gray-400"
                        }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mr-2 sm:mr-3">
                      <Bot className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-bl-sm px-3 py-2 sm:px-4 sm:py-3 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-[12px] sm:text-sm text-gray-600 dark:text-gray-400">Thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Prince's experience, skills, or projects..."
                  className="flex-1 px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md disabled:shadow-none"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 text-center mt-2 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="hidden sm:inline">Get comprehensive candidate insights instantly • Powered by AI</span>
                <span className="sm:hidden">AI Powered</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Add custom styles for animations and formatting
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
  
  .inline-code {
    background-color: rgba(59, 130, 246, 0.1);
    color: #1e40af;
    padding: 1px 4px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.875em;
  }
  
  .dark .inline-code {
    background-color: rgba(147, 51, 234, 0.2);
    color: #a78bfa;
  }
`;
document.head.appendChild(style);
