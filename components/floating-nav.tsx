"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Rss, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/princepal9120",
            label: "GitHub"
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/prince9120",
            label: "LinkedIn"
        },
        {
            icon: Twitter,
            href: "https://twitter.com/prince_twets",
            label: "Twitter"
        },
        {
            icon: MessageCircle,
            href: "#",
            label: "Medium"
        },
        {
            icon: Mail,
            href: "mailto:princepal9120@gmail.com",
            label: "Email"
        },
        {
            icon: Rss,
            href: "/blog",
            label: "RSS"
        }
    ];

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
            <div className="bg-background/80 backdrop-blur-lg border border-cyan-400/20 rounded-full px-6 py-3 shadow-lg shadow-cyan-400/10">
                <div className="flex items-center gap-2">
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={link.label}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10 w-10 rounded-full hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                                    aria-label={link.label}
                                >
                                    <link.icon className="h-5 w-5" />
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
