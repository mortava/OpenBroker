"use client";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-[1] text-center"
      role="contentinfo"
      style={{
        background: "#0F172A",
        padding: "52px 24px 40px",
        paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Top accent line */}
      <div className="footer-accent-line" />

      {/* Footer Navigation */}
      <nav
        className="flex flex-wrap justify-center gap-x-5 gap-y-3.5 mb-6"
        aria-label="Footer navigation"
      >
        {["Contact Us", "Terms of Use", "Privacy & Security"].map((label) => (
          <button
            key={label}
            className="bg-transparent border-none cursor-pointer font-inherit transition-colors duration-200 hover:!text-white"
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.8125rem",
              fontWeight: 500,
            }}
          >
            {label}
          </button>
        ))}
        <a
          href="https://nmlsconsumeraccess.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-200 hover:!text-white flex items-center gap-1"
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.8125rem",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          NMLS Consumer Access
          <span style={{ fontSize: "0.75rem" }}>&#8599;</span>
        </a>
      </nav>

      {/* Footer Text Lines */}
      <div className="space-y-1.5">
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", margin: 0 }}>
          &copy;2026 TraceAos. All rights reserved.
        </p>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", margin: 0 }}>
          This site was built for:{" "}
          <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>OpenBroker</span>{" "}
          [nmls]
        </p>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", margin: 0 }}>
          [Add]
        </p>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", margin: 0 }}>
          Need Help? Contact:{" "}
          <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>OB AI</span>
          {" | "}
          <a
            href="tel:[Call]"
            className="transition-colors duration-200 hover:!text-white"
            style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
          >
            [Call]
          </a>
          {" | "}
          <a
            href="mailto:sales@qualr.com"
            className="transition-colors duration-200 hover:!text-white"
            style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
          >
            sales@qualr.com
          </a>
        </p>
      </div>

      {/* Legal Disclaimer */}
      <p
        className="mx-auto"
        style={{
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.7rem",
          maxWidth: 680,
          marginTop: 20,
          lineHeight: 1.6,
        }}
      >
        By using this site, you authorize us to contact you by phone, email, or text (message/data rates may apply), including AI-assisted communications, even if you are on a Do Not Call list. You may opt out anytime via the Contact Us form. Rates and programs may change without notice. Nothing on this site is an offer, approval, or commitment to lend or sell any financial instrument. This site is for informational purposes only.
      </p>

      {/* Equal Housing Lender */}
      <div
        className="flex items-center justify-center gap-2 mt-[18px]"
        style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
        </svg>
        <span>Equal Housing Lender</span>
      </div>
    </footer>
  );
}
