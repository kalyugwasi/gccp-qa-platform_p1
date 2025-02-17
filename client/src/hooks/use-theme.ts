import { useState, useEffect } from "react";

type Theme = "light" | "dark" | "system";

function getSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Try to get theme from localStorage, fallback to system
    const saved = localStorage.getItem("theme") as Theme;
    return saved || "system";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");

    // Set the appropriate theme class
    if (theme === "system") {
      root.classList.add(getSystemTheme());
    } else {
      root.classList.add(theme);
    }

    // Save theme preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    const handler = () => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(getSystemTheme());
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  return {
    theme,
    setTheme: setThemeState,
  };
}
