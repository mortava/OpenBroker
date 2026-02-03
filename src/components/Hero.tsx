"use client";

import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center gradient-mesh overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-5 sm:mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            <span>Trusted by Thousands of Mid-South Homeowners</span>
          </div>

          {/* Main Heading */}
          <h1
            id="hero-heading"
            className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-5 animate-fade-in text-balance leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Your Dream Home{" "}
            <span className="text-primary">Starts Here</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in text-pretty"
            style={{ animationDelay: "0.3s" }}
          >
            Get pre-qualified in minutes with our AI-powered assistant.
            Experience the fastest, most seamless mortgage process in the industry.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("prequal")}
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto"
            >
              Get Pre-Qualified
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("rates")}
              className="text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
            >
              Check My Rate
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-xs sm:text-sm text-foreground">
                5-Min Pre-Qual
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                AI-powered decisions
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-xs sm:text-sm text-foreground">
                Bank Security
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                Data always protected
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading font-semibold text-xs sm:text-sm text-foreground">
                Expert Team
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                Support every step
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
