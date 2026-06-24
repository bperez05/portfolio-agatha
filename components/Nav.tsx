"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "background 0.3s, backdrop-filter 0.3s",
      background: scrolled ? "rgba(15,15,15,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
    }}>
      <nav style={{
        maxWidth: 860, margin: "0 auto", padding: "1.25rem 1.5rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text-primary)" }}>
          AE
        </span>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }} className="nav-desktop">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{
                color: active === l.href ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none", fontSize: "0.875rem", fontWeight: 400, transition: "color 0.2s",
              }}
                onMouseEnter={(e) => { if (active !== l.href) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"; }}
                onMouseLeave={(e) => { if (active !== l.href) (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)"; }}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        <button aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)} className="nav-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1px", background: "var(--text-primary)", transition: "all 0.2s", transformOrigin: "center",
              transform: menuOpen && i === 0 ? "rotate(45deg) translate(4px, 4px)" : menuOpen && i === 2 ? "rotate(-45deg) translate(4px, -4px)" : menuOpen && i === 1 ? "scaleX(0)" : "none",
            }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "1rem 1.5rem 1.5rem" }} className="nav-hamburger">
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ color: active === l.href ? "var(--accent)" : "var(--text-primary)", textDecoration: "none", fontSize: "1rem" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) { .nav-desktop { display: flex !important; } .nav-hamburger { display: none !important; } }
        @media (max-width: 639px) { .nav-desktop { display: none !important; } .nav-hamburger { display: flex !important; } }
      `}</style>
    </header>
  );
}
