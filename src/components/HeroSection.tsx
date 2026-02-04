"use client";

import { useEffect, useRef } from "react";

const quickActions = [
  {
    label: "Help me get pre-qualified",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    label: "What's my estimated rate?",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    label: "Show me today's rates",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
  },
  {
    label: "I want to refinance",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".hero-stagger");
    if (!els) return;
    els.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(24px)";
      setTimeout(() => {
        htmlEl.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        htmlEl.style.opacity = "1";
        htmlEl.style.transform = "translateY(0)";
      }, i * 80);
    });
  }, []);

  const handlePillClick = (text: string) => {
    const input = document.querySelector<HTMLInputElement>("#chat-input");
    if (input) {
      // Use native setter to work with React
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
      if (nativeSetter) nativeSetter.call(input, text);
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.focus();
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-[1] flex flex-col items-center justify-center text-center"
      style={{ minHeight: "calc(100vh - 56px)", padding: "48px 24px 64px" }}
      aria-labelledby="hero-heading"
    >
      {/* Pulsing Icon */}
      <div className="hero-stagger relative mb-7" style={{ width: 72, height: 72 }}>
        <div
          className="animate-pulse-ring absolute rounded-full"
          style={{
            width: 72,
            height: 72,
            top: 0,
            left: 0,
            border: "2px solid rgba(37, 99, 235, 0.3)",
          }}
        />
        <div
          className="relative z-[1] flex items-center justify-center rounded-full"
          style={{
            width: 72,
            height: 72,
            background: "linear-gradient(135deg, #2563EB, #3B82F6)",
            boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
          </svg>
        </div>
      </div>

      {/* Heading */}
      <h1
        id="hero-heading"
        className="hero-stagger gradient-text"
        style={{
          fontSize: "clamp(2.25rem, 5vw, 4rem)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1.05,
          marginBottom: 14,
        }}
      >
        Your AI Mortgage Assistant
      </h1>

      {/* Subtitle */}
      <p
        className="hero-stagger mx-auto"
        style={{
          maxWidth: 480,
          color: "var(--color-text-secondary)",
          fontSize: "1.0625rem",
          lineHeight: 1.65,
          marginBottom: 36,
        }}
      >
        Get pre-qualified in minutes with our AI-powered assistant. Ask anything about mortgages, rates, or the home buying process.
      </p>

      {/* Command Bar Chat Input */}
      <div className="hero-stagger glass-input flex items-center w-full mx-auto" style={{ maxWidth: 640, padding: 6, marginBottom: 16 }}>
        <input
          id="chat-input"
          type="text"
          placeholder="Ask about mortgages, rates, or getting pre-qualified..."
          className="flex-1 border-none outline-none bg-transparent"
          style={{
            fontSize: "0.95rem",
            color: "var(--color-text-primary)",
            padding: "12px 16px",
            fontFamily: "inherit",
          }}
        />
        <button
          className="btn-accent flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ width: 40, height: 40 }}
          aria-label="Send message"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Try Asking + Pills */}
      <div className="hero-stagger w-full" style={{ maxWidth: 640 }}>
        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.8rem", fontWeight: 500, marginBottom: 10 }}>
          Try asking:
        </p>
        <div
          className="flex gap-2 flex-wrap justify-center max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:justify-start max-sm:px-4 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={() => handlePillClick(action.label)}
              className="glass-pill flex items-center gap-[7px] whitespace-nowrap cursor-pointer max-sm:flex-shrink-0"
              style={{
                padding: "8px 16px",
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: "var(--color-text-primary)",
                fontFamily: "inherit",
                scrollSnapAlign: "start",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={action.icon} />
              </svg>
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
