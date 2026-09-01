"use client";

import { useState } from "react";
import { THEME_META, nextTheme } from "@/lib/themes";
import { useTheme } from "@/components/theme-provider";

export function ThemeCycle() {
  const { theme, cycleTheme } = useTheme();
  const { label, icon: Icon } = THEME_META[theme];
  const upcoming = THEME_META[nextTheme(theme)].label;
  const [hinted, setHinted] = useState(false);

  return (
    <span
      className={`theme-cycle-wrap${hinted ? " is-hinted" : ""}`}
      onPointerEnter={() => setHinted(true)}
      onPointerLeave={() => setHinted(false)}
    >
      <button
        type="button"
        className="theme-cycle"
        onClick={cycleTheme}
        onFocus={() => setHinted(true)}
        onBlur={() => setHinted(false)}
        aria-label={`${label} theme. Switch to ${upcoming}.`}
      >
        <Icon aria-hidden className="theme-cycle-icon" strokeWidth={1.6} />
      </button>
      <span className="theme-cycle-tooltip" aria-hidden="true">
        {upcoming}
      </span>
    </span>
  );
}
