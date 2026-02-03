"use client";

import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isSticky?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  isSticky = false,
}: ChatInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div
      className={`w-full transition-all duration-400 ${
        isSticky
          ? "sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-border/50 chat-input-shadow px-4 py-3 sm:px-6 sm:py-4"
          : "px-4 sm:px-6"
      }`}
      style={isSticky ? { paddingBottom: "max(12px, env(safe-area-inset-bottom))" } : undefined}
    >
      <div className="w-full max-w-[640px] md:max-w-[720px] mx-auto">
        <div className="relative flex items-center rounded-2xl border border-input shadow-md transition-colors duration-200 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 bg-white">
          <input
            id="chat-input"
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about mortgages, rates, or getting pre-qualified..."
            className="w-full bg-transparent py-3.5 pl-5 pr-14 text-sm sm:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            autoComplete="off"
          />
          <button
            onClick={onSend}
            disabled={!value.trim()}
            className="absolute right-2 w-9 h-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center transition-all duration-200 hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
