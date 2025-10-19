import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-400/20 py-12 bg-muted/30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-2">
              © {new Date().getFullYear()} Developed with ❤️ by Prince
            </p>
            <p className="text-xs text-muted-foreground">
              Alternatively, you can schedule a call with me to discuss anything you'd like. I'm always open for new ideas and opportunities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/princepal9120"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/prince9120"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://twitter.com/prince_twets"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="mailto:princepal9120@gmail.com"
              className="text-muted-foreground hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        {/* Quote of the day */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground italic">
            "Do the seemingly hopeless tasks after all, you call it madness, I call it strength."
          </p>
        </div>
      </div>
    </footer>
  );
}
