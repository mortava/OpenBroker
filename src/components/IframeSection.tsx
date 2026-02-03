"use client";

import { Bot, Calculator } from "lucide-react";

interface IframeSectionProps {
  id: string;
  title: string;
  subtitle: string;
  iframeSrc?: string;
  icon: "bot" | "calculator";
  reversed?: boolean;
}

export default function IframeSection({
  id,
  title,
  subtitle,
  iframeSrc,
  icon,
  reversed = false,
}: IframeSectionProps) {
  const IconComponent = icon === "bot" ? Bot : Calculator;

  return (
    <section
      id={id}
      className={`py-8 sm:py-10 md:py-12 ${reversed ? "bg-muted/30" : "bg-background"}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header - Centered */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-3">
            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
            <span>{icon === "bot" ? "AI-Powered" : "Instant Quote"}</span>
          </div>

          <h2
            id={`${id}-heading`}
            className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-foreground mb-1.5 sm:mb-2"
          >
            {title}
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Iframe - Full Width */}
        <div className="card-shadow rounded-lg sm:rounded-xl overflow-hidden bg-white">
          {iframeSrc ? (
            <iframe
              src={iframeSrc}
              title={title}
              className="w-full h-[480px] sm:h-[580px] md:h-[680px] lg:h-[780px] border-0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          ) : (
            <div className="w-full h-[350px] sm:h-[450px] flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
              <div className="text-center p-4 sm:p-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <IconComponent
                    className="w-7 h-7 sm:w-8 sm:h-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-1.5">
                  {icon === "bot"
                    ? "AI Pre-Qual Assistant"
                    : "Rate Quote Calculator"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Embed URL will be configured here
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
