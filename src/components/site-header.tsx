"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeCycle } from "@/components/theme-cycle";

const NAV: {
  href: string;
  label: string;
  target?: string;
  rel?: string;
}[] = [
  { href: "/#work", label: "Work" },
  { href: "/#rails", label: "Rails" },
  { href: "/#approach", label: "Approach" },
  { href: "/#contact", label: "Contact" },
  { href: "/book-a-call", label: "Book a call" },
  { href: "/resume", label: "Resume" },
];

function hashId(href: string) {
  return href.startsWith("/#") ? href.slice(2) : null;
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "instant", block: "start" });
  return true;
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 760px)").matches) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let attempts = 0;
    let frame = 0;
    const tryScroll = () => {
      if (scrollToId(id) || attempts++ > 20) return;
      frame = requestAnimationFrame(tryScroll);
    };
    tryScroll();
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  function onNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    const id = hashId(href);

    if (id && pathname === "/") {
      setOpen(false);
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, "", href);
      }
      requestAnimationFrame(() => scrollToId(id));
      return;
    }

    // Closing the hamburger sets display:none on the <a> and can cancel a
    // native click. Push the route instead so path and /#section links work.
    setOpen(false);
    router.push(href);
  }

  function onWordmarkClick(event: MouseEvent<HTMLAnchorElement>) {
    setOpen(false);
    if (pathname !== "/") return;
    event.preventDefault();
    if (window.location.hash) {
      window.history.pushState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <a href="/" className="wordmark" onClick={onWordmarkClick}>
        <span className="wordmark-name">Paul Vudmaska</span>
        <span className="wordmark-role">AI Consulting</span>
      </a>
      <nav className="site-nav" id="primary-nav" aria-label="Primary">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.target}
            rel={item.rel}
            onClick={(event) => onNavClick(event, item.href)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X aria-hidden className="menu-toggle-icon" strokeWidth={1.8} />
          ) : (
            <Menu aria-hidden className="menu-toggle-icon" strokeWidth={1.8} />
          )}
        </button>
        <ThemeCycle />
      </div>
    </header>
  );
}
