"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createTheme, type AppTheme, type ThemeMode } from "@/styles/theme";

interface ThemeContextValue {
  themeMode: ThemeMode;
  toggleTheme: () => void;
  theme: AppTheme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("technest-theme") as ThemeMode | null;
    if (savedTheme === "light" || savedTheme === "dark") {
      setThemeMode(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeMode(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
    window.localStorage.setItem("technest-theme", themeMode);
  }, [themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode((current) => (current === "light" ? "dark" : "light"));
  }, []);

  const theme = useMemo(() => createTheme(themeMode), [themeMode]);

  const value = useMemo(
    () => ({
      themeMode,
      toggleTheme,
      theme,
    }),
    [themeMode, toggleTheme, theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error("useTheme must be used within ThemeContextProvider");
  }
  return value;
}
