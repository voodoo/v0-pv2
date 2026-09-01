"use client";

import { useTheme } from "@/components/theme-provider";
import { CAL_EMBED_URL } from "@/lib/booking";

export function CalendarEmbed() {
  const { theme } = useTheme();
  const calTheme = theme === "dark" ? "dark" : "light";

  return (
    <div className="calendar-embed">
      <iframe
        title="Book a 15-minute meeting with Paul Vudmaska"
        src={`${CAL_EMBED_URL}?embed=true&theme=${calTheme}`}
        allow="payment"
        loading="lazy"
      />
    </div>
  );
}
