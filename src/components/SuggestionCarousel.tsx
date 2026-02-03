"use client";

import { useState, useEffect } from "react";
import { FileCheck, TrendingDown, DollarSign, RefreshCw } from "lucide-react";

const suggestions = [
  {
    icon: FileCheck,
    text: "Help me get pre-qualified",
    prompt: "Help me get pre-qualified for a mortgage",
  },
  {
    icon: TrendingDown,
    text: "What's my estimated rate?",
    prompt: "What's my estimated mortgage rate?",
  },
  {
    icon: DollarSign,
    text: "Show me today's rates",
    prompt: "Show me today's mortgage rates",
  },
  {
    icon: RefreshCw,
    text: "I want to refinance",
    prompt: "I want to refinance my mortgage",
  },
];

interface SuggestionCarouselProps {
  onSelect: (prompt: string) => void;
  exiting?: boolean;
}

export default function SuggestionCarousel({
  onSelect,
  exiting = false,
}: SuggestionCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (exiting) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [exiting]);

  return (
    <div
      className={`w-full max-w-[640px] md:max-w-[720px] mx-auto ${
        exiting ? "animate-fade-out-up" : ""
      }`}
    >
      {/* Mobile: horizontal scroll */}
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 sm:hidden px-1 scrollbar-hide">
        {suggestions.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => onSelect(item.prompt)}
              className={`flex-shrink-0 snap-center w-[200px] flex items-center gap-3 p-3.5 rounded-xl border bg-white transition-all duration-300 text-left ${
                isActive
                  ? "border-primary/40 shadow-md scale-[1.02]"
                  : "border-border/50 hover:border-border hover:shadow-sm"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  isActive ? "bg-primary/15" : "bg-muted"
                }`}
              >
                <Icon
                  className={`w-4.5 h-4.5 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </div>
              <span className="text-sm text-foreground font-medium leading-tight">
                {item.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tablet/Desktop: grid */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {suggestions.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => onSelect(item.prompt)}
              className={`flex items-center gap-3 p-3.5 rounded-xl border bg-white transition-all duration-300 text-left ${
                isActive
                  ? "border-primary/40 shadow-md scale-[1.02]"
                  : "border-border/50 hover:border-border hover:shadow-sm"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  isActive ? "bg-primary/15" : "bg-muted"
                }`}
              >
                <Icon
                  className={`w-4.5 h-4.5 transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
              </div>
              <span className="text-sm text-foreground font-medium leading-tight">
                {item.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
