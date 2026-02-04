"use client";

import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Stats", href: "#stats" },
  { label: "Contact", href: "#footer" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "features", "stats", "footer"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetStarted = () => {
    const input = document.querySelector<HTMLInputElement>("#chat-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => input.focus(), 600);
    }
  };

  return (
    <nav
      className={`glass-nav sticky top-0 z-[100] h-14 ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-[1.1rem] font-bold" style={{ color: "var(--color-text-primary)" }}>
            OpenBroker
          </span>
          <span
            className="relative -top-[5px] ml-1 inline-block rounded-md px-1.5 py-[2px] text-[0.6rem] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #2563EB, #3B82F6)", borderRadius: "6px" }}
          >
            AI
          </span>
        </div>

        {/* Center Pill Nav (desktop only) */}
        <div className="hidden lg:flex items-center rounded-full p-[3px] gap-[2px]" style={{ background: "#F1F5F9" }}>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="rounded-full px-4 py-1.5 text-[0.8125rem] font-medium transition-all duration-200"
              style={{
                color: activeSection === item.href ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                background: activeSection === item.href ? "white" : "transparent",
                boxShadow: activeSection === item.href ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Get Started (desktop) */}
        <button
          onClick={handleGetStarted}
          className="btn-accent hidden lg:inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold"
          style={{ boxShadow: "0 2px 8px rgba(37,99,235,0.25)" }}
        >
          Get Started
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center w-11 h-11 bg-transparent border-none cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 z-[99] flex flex-col items-center justify-center gap-7 lg:hidden"
          style={{
            top: "56px",
            background: "rgba(255,255,255,0.98)",
            WebkitBackdropFilter: "blur(20px)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-2xl font-bold border-none bg-transparent cursor-pointer"
              style={{ color: "var(--color-text-primary)", textDecoration: "none", fontFamily: "inherit" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
