"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setCurrentTheme(prefersDark ? "dark" : "light");
    } else {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!currentTheme) return null; // Avoid rendering until the theme is determined

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative h-8 w-8"
      onClick={toggleTheme}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all ${currentTheme === "dark" ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
          }`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${currentTheme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
          }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
