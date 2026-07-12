export type ThemeMode = "light" | "dark";

export const baseTheme = {
  colors: {
    primary: "#4361ee",
    secondary: "#7c3aed",
    accent: "#22c55e",
    background: "#f8faff",
    surface: "#ffffff",
    surfaceAlt: "#eef2ff",
    text: "#0f172a",
    muted: "#64748b",
    border: "rgba(15, 23, 42, 0.12)",
  },
  shadows: {
    sm: "0 10px 30px rgba(15, 23, 42, 0.08)",
    md: "0 20px 45px rgba(15, 23, 42, 0.12)",
  },
  radius: {
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1280px",
  },
};

export const createTheme = (mode: ThemeMode) => ({
  ...baseTheme,
  mode,
  colors: {
    ...baseTheme.colors,
    background: mode === "dark" ? "#07111f" : baseTheme.colors.background,
    surface: mode === "dark" ? "#0f172a" : baseTheme.colors.surface,
    surfaceAlt: mode === "dark" ? "#111c35" : baseTheme.colors.surfaceAlt,
    text: mode === "dark" ? "#f8fafc" : baseTheme.colors.text,
    muted: mode === "dark" ? "#94a3b8" : baseTheme.colors.muted,
    border: mode === "dark" ? "rgba(255, 255, 255, 0.1)" : baseTheme.colors.border,
    primary: mode === "dark" ? "#7c93ff" : baseTheme.colors.primary,
    accent: mode === "dark" ? "#34d399" : baseTheme.colors.accent,
    secondary: mode === "dark" ? "#9f7aea" : baseTheme.colors.secondary,
  },
});

export type AppTheme = ReturnType<typeof createTheme>;
