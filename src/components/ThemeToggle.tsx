"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Moon, Sun } from "lucide-react";

function runThemeTransition(duration = 320) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  window.setTimeout(() => {
    root.classList.remove("theme-transition");
  }, duration);
}

const ThemeToggle: React.FC<{ className?: string }> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    runThemeTransition();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={toggle}
          aria-label="Toggle theme"
          className={className}
        >
          {/* Animated icon swap (from shadcn pattern) */}
          <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        {resolvedTheme === "dark" ? "Switch to light" : "Switch to dark"}
      </TooltipContent>
    </Tooltip>
  );
};

export default ThemeToggle;