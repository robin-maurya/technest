"use client";

import { ThemeProvider } from "styled-components";
import { useTheme } from "@/context/ThemeContext";
import { GlobalStyles } from "@/styles/global";

export function ThemeBoundary({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
