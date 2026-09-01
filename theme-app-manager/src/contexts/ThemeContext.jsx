import { createContext, useContext, useState, useEffect } from "react";

// Create the Context:
export const ThemeContext = createContext(null);

const THEME_KEY = "app-theme";

// Create Provider Component:
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return "light";
  });

  // Apply Theme Class to <html> and persist in Local Storage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, setTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside a ThemeProvider");
  }
  return ctx;
}
