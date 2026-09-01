import {
  Flower2,
  Leaf,
  Moon,
  Snowflake,
  Sun,
  TreePalm,
  type LucideIcon,
} from "lucide-react";

export const THEMES = [
  "dark",
  "light",
  "winter",
  "spring",
  "summer",
  "fall",
] as const;

export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = "pv-theme";

export const THEME_META: Record<
  Theme,
  { label: string; icon: LucideIcon }
> = {
  dark: { label: "Dark", icon: Moon },
  light: { label: "Light", icon: Sun },
  winter: { label: "Winter", icon: Snowflake },
  spring: { label: "Spring", icon: Flower2 },
  summer: { label: "Summer", icon: TreePalm },
  fall: { label: "Fall", icon: Leaf },
};

export function isTheme(value: string | null): value is Theme {
  return THEMES.includes(value as Theme);
}

export function nextTheme(theme: Theme): Theme {
  const index = THEMES.indexOf(theme);
  return THEMES[(index + 1) % THEMES.length];
}
