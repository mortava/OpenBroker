"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import ContactModal from "@/components/modals/ContactModal";
import TermsModal from "@/components/modals/TermsModal";
import PrivacyModal from "@/components/modals/PrivacyModal";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer
        className="bg-foreground text-background"
        role="contentinfo"
        aria-label="Site footer"
      >
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10">
          {/* Footer Links */}
          <nav
            className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-6"
            aria-label="Footer navigation"
          >
            <button
              onClick={() => setContactOpen(true)}
              className="text-background/80 hover:text-background transition-colors text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-1.5 py-0.5"
            >
              Contact Us
            </button>
            <span className="text-background/40 hidden sm:inline">|</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="text-background/80 hover:text-background transition-colors text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-1.5 py-0.5"
            >
              Terms of Use
            </button>
            <span className="text-background/40 hidden sm:inline">|</span>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-background/80 hover:text-background transition-colors text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-1.5 py-0.5"
            >
              Privacy & Security
            </button>
            <span className="text-background/40 hidden sm:inline">|</span>
            <a
              href="https://nmlsconsumeraccess.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-background/80 hover:text-background transition-colors text-xs sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background/50 rounded px-1.5 py-0.5"
            >
              NMLS Consumer Access
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </nav>

          {/* Company Info */}
          <div className="text-center space-y-3">
            <p className="text-background/90 text-xs sm:text-sm">
              &copy;2026 TraceAos. All rights reserved.
            </p>

            <div className="text-background/80 text-xs sm:text-sm leading-relaxed">
              <p className="mb-2">
                This site was built for:{" "}
                <strong className="text-background">
                  OpenBroker
                </strong>{" "}
                [nmls]
              </p>
              <p className="mb-1.5">
                [Add]
              </p>
              <p className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-0.5 sm:gap-2">
                <span>Need Help? Contact:{" "}
                <strong className="text-background">OB AI</strong></span>
                <span className="hidden sm:inline">|</span>
                <a
                  href="tel:[Call]"
                  className="hover:text-background underline underline-offset-2"
                >
                  [Call]
                </a>
                <span className="hidden sm:inline">|</span>
                <a
                  href="mailto:sales@qualr.com"
                  className="hover:text-background underline underline-offset-2"
                >
                  sales@qualr.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-background/10">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5">
            <p className="text-background/60 text-[10px] sm:text-xs text-center leading-relaxed">
              By using this site, you authorize us to contact you by phone,
              email, or text (message/data rates may apply), including
              AI-assisted communications, even if you are on a Do Not Call list.
              You may opt out anytime via the Contact Us form. Rates and
              programs may change without notice. Nothing on this site is an
              offer, approval, or commitment to lend or sell any financial
              instrument. This site is for informational purposes only.
            </p>
          </div>
        </div>

        {/* Equal Housing Logo */}
        <div className="border-t border-background/10">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 flex justify-center items-center gap-3">
            <div
              className="flex items-center gap-1.5 text-background/60 text-xs"
              aria-label="Equal Housing Lender"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 3L2 9v12h20V9L12 3zm0 2.3l7 4.2v9.5H5V9.5l7-4.2zM11 13h2v4h-2v-4zm0-4h2v2h-2V9z" />
              </svg>
              <span>Equal Housing Lender</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
    </>
  );
}
