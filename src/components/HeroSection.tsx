"use client";

import { useEffect, useRef, useState } from "react";

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
  const [showIframe, setShowIframe] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(600);

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

  // Listen for iframe resize messages (if the embedded app sends them)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data.height === "number") {
        setIframeHeight(Math.max(400, Math.min(event.data.height, window.innerHeight - 200)));
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // Auto-expand iframe based on viewport when showing
  useEffect(() => {
    if (showIframe) {
      const updateHeight = () => {
        // Calculate available height minus header and some padding
        const availableHeight = window.innerHeight - 120;
        setIframeHeight(Math.max(500, availableHeight));
      };
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, [showIframe]);

  const handleLaunch = () => {
    setShowIframe(true);
    // Scroll to iframe after a brief delay
    setTimeout(() => {
      const container = document.getElementById("loan-builder-container");
      if (container) {
        container.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative z-[1] flex flex-col items-center text-center"
      style={{ padding: showIframe ? "32px 24px 48px" : "48px 24px 64px", minHeight: showIframe ? "auto" : "calc(100vh - 56px)", justifyContent: showIframe ? "flex-start" : "center" }}
      aria-labelledby="hero-heading"
    >
      {/* Hero Content - Hidden when iframe is shown */}
      {!showIframe && (
        <>
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
              marginBottom: 24,
            }}
          >
            Get pre-qualified in minutes with our AI-powered assistant. Ask anything about mortgages, rates, or the home buying process.
          </p>

          {/* Suggestion Carousel / Quick Actions */}
          <div className="hero-stagger w-full mb-10" style={{ maxWidth: 640 }}>
            <div
              className="flex gap-2 flex-wrap justify-center max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:justify-start max-sm:px-4 scrollbar-hide"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={handleLaunch}
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

          {/* Glowing Launch Button */}
          <div className="hero-stagger">
            <button
              onClick={handleLaunch}
              className="btn-glow"
              aria-label="Launch MyLoan Builder"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
              Launch MyLoan Builder
            </button>
          </div>
        </>
      )}

      {/* Iframe Container - Shown after launch */}
      {showIframe && (
        <div
          id="loan-builder-container"
          className="w-full mx-auto animate-fade-in-up"
          style={{ maxWidth: 1120 }}
        >
          {/* Header bar with back button */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowIframe(false)}
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--color-accent)]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "#22C55E" }}
              />
              <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
                MyLoan Builder
              </span>
            </div>
          </div>

          {/* Iframe */}
          <div className="iframe-container">
            <iframe
              src="https://obagent.qualr.com"
              title="MyLoan GURU - AI Mortgage Assistant"
              style={{
                height: iframeHeight,
                minHeight: 500,
                transition: "height 0.3s ease",
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="eager"
            />
          </div>
        </div>
      )}
    </section>
  );
}
