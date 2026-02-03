"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-2 sm:py-3" : "bg-transparent py-3 sm:py-4"
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="OpenBroker - Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-sm">
              <span className="text-white font-heading font-bold text-[10px] sm:text-xs">
                OB
              </span>
            </div>
            <span className="font-heading font-semibold text-sm sm:text-base text-foreground">
              <span className="hidden sm:inline">OpenBroker</span>
              <span className="inline sm:hidden">OpenBroker</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("prequal")}
              className="text-foreground/80 hover:text-foreground text-sm"
            >
              Get Pre-Qualified
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground text-sm"
            >
              About
            </Button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("prequal")}
              className="shadow-md"
            >
              Start Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 glass border-t border-border/50 shadow-lg animate-fade-in"
          >
            <div className="px-3 py-3 space-y-1">
              <button
                onClick={() => scrollToSection("prequal")}
                className="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-foreground text-sm"
              >
                Get Pre-Qualified
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-foreground text-sm"
              >
                About
              </button>
              <Button
                className="w-full mt-2"
                onClick={() => scrollToSection("prequal")}
              >
                Start Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
