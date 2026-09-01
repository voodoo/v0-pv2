import type { Metadata } from "next";
import { CalendarEmbed } from "@/components/calendar-embed";

export const metadata: Metadata = {
  title: "Book a call · Paul Vudmaska",
  description: "Book a 15-minute fit call with Paul Vudmaska.",
};

export default function BookACallPage() {
  return (
    <main id="top" className="page book-page">
      <section className="hero">
        <a className="book-back" href="/">
          ← Home
        </a>
        <p className="eyebrow">Consulting</p>
        <h1>Book a 15-minute fit call</h1>
        <p className="lede">
          A short conversation to see whether the problem is crisp enough to
          work on together.
        </p>
        <CalendarEmbed />
      </section>
    </main>
  );
}
