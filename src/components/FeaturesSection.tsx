"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "path",
    path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Client-First Approach",
    desc: "We put your needs at the center of everything we do, providing personalized guidance throughout your mortgage journey.",
  },
  {
    icon: "circles",
    path: "",
    title: "Precision & Accuracy",
    desc: "Our AI-powered tools ensure you receive accurate quotes and pre-qualifications with speed and reliability.",
  },
  {
    icon: "path",
    path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Trusted Partnership",
    desc: "Building lasting relationships with our clients through transparency, honesty, and exceptional service.",
  },
  {
    icon: "path",
    path: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    title: "Industry Expertise",
    desc: "Decades of combined experience navigating the mortgage industry to find the best solutions for you.",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fadeEls = el.querySelectorAll(".fade-up");
            fadeEls.forEach((fadeEl) => fadeEl.classList.add("visible"));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-[1]"
      style={{ padding: "80px 24px 80px", contain: "layout style" }}
      aria-labelledby="features-heading"
    >
      <div className="mx-auto max-w-[1120px]">
        {/* Badge */}
        <div className="text-center">
          <span
            className="fade-up inline-block rounded-full"
            style={{
              background: "var(--color-accent-light)",
              color: "var(--color-accent)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
              padding: "4px 12px",
              marginBottom: 14,
            }}
          >
            WHY OPENBROKER
          </span>
        </div>

        {/* Heading */}
        <h2
          id="features-heading"
          className="fade-up delay-1 text-center"
          style={{
            fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--color-text-primary)",
            marginBottom: 12,
          }}
        >
          Why Choose OpenBroker
        </h2>

        {/* Subtitle */}
        <p
          className="fade-up delay-2 mx-auto text-center"
          style={{
            maxWidth: 560,
            color: "var(--color-text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.65,
            marginBottom: 48,
          }}
        >
          We combine cutting-edge technology with personalized service to make your home financing experience seamless and stress-free.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`fade-up delay-${i + 1} glass-card`}
              style={{ padding: 28 }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #2563EB, #3B82F6)",
                }}
              >
                {feature.icon === "circles" ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.path} />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: "1.0625rem",
                  color: "var(--color-text-primary)",
                  marginTop: 0,
                  marginBottom: 8,
                }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "0.9375rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
