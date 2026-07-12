"use client";

import { AuthProvider } from "@/context/AuthContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { ThemeBoundary } from "@/components/ThemeBoundary";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ThemeBoundary>
        <AuthProvider>
          <ToastProvider>{children}</ToastProvider>
        </AuthProvider>
      </ThemeBoundary>
    </ThemeContextProvider>
  );
}
