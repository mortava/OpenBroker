"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import AnimatedHomeIcon from "@/components/AnimatedHomeIcon";
import SuggestionCarousel from "@/components/SuggestionCarousel";
import ChatInput from "@/components/ChatInput";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  type: "text" | "iframe";
}

interface ChatInterfaceProps {
  iframeSrc: string;
}

function getResponseText(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("refinance")) {
    return "Let me help you explore refinancing options. Our AI assistant below will walk you through the process and help determine if refinancing is right for you.";
  }
  if (lower.includes("rate") && !lower.includes("pre-qual")) {
    return "Great question! Let's find out what rates you may qualify for. Our AI assistant will guide you through a quick process to estimate your rate.";
  }
  if (lower.includes("pre-qual") || lower.includes("pre-qualified") || lower.includes("qualify")) {
    return "Let's get you pre-qualified! Our AI assistant below will guide you through a simple, conversational process. No hard credit pull required.";
  }
  if (lower.includes("today") && lower.includes("rate")) {
    return "I'll show you today's rates. Our AI assistant below can give you personalized rate information based on your situation.";
  }
  return "I'd be happy to help! Our AI mortgage assistant below will guide you through whatever you need. Just follow the conversation to get started.";
}

export default function ChatInterface({ iframeSrc }: ChatInterfaceProps) {
  const [conversationStarted, setConversationStarted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);

  const handleSend = () => {
    const text = inputValue.trim();
    if (!text) return;

    setInputValue("");

    if (!conversationStarted) {
      // Trigger exit animation
      setIsExiting(true);

      // After exit animation, switch to conversation layout
      setTimeout(() => {
        setConversationStarted(true);
        setIsExiting(false);

        // Add user message
        const userMsg: Message = {
          id: crypto.randomUUID(),
          role: "user",
          content: text,
          type: "text",
        };
        setMessages([userMsg]);

        // Add assistant response after delay
        setTimeout(() => {
          const assistantMsg: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: getResponseText(text),
            type: "text",
          };
          setMessages((prev) => [...prev, assistantMsg]);

          // Reveal iframe after another delay
          setTimeout(() => {
            const iframeMsg: Message = {
              id: crypto.randomUUID(),
              role: "assistant",
              content: "",
              type: "iframe",
            };
            setMessages((prev) => [...prev, iframeMsg]);
          }, 500);
        }, 400);
      }, 300);
    } else {
      // Already in conversation, add message and re-route to iframe
      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: text,
        type: "text",
      };
      setMessages((prev) => [...prev, userMsg]);

      setTimeout(() => {
        const assistantMsg: Message = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: getResponseText(text),
          type: "text",
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }, 400);
    }
  };

  const handleCardSelect = (prompt: string) => {
    setInputValue(prompt);
    // Auto-send after a brief moment
    setTimeout(() => {
      const text = prompt.trim();
      if (!text) return;

      setInputValue("");

      if (!conversationStarted) {
        setIsExiting(true);
        setTimeout(() => {
          setConversationStarted(true);
          setIsExiting(false);

          const userMsg: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
            type: "text",
          };
          setMessages([userMsg]);

          setTimeout(() => {
            const assistantMsg: Message = {
              id: crypto.randomUUID(),
              role: "assistant",
              content: getResponseText(text),
              type: "text",
            };
            setMessages((prev) => [...prev, assistantMsg]);

            setTimeout(() => {
              const iframeMsg: Message = {
                id: crypto.randomUUID(),
                role: "assistant",
                content: "",
                type: "iframe",
              };
              setMessages((prev) => [...prev, iframeMsg]);
            }, 500);
          }, 400);
        }, 300);
      }
    }, 150);
  };

  // Empty state
  if (!conversationStarted) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="flex flex-col items-center gap-6 w-full max-w-[720px]">
          {/* Animated icon */}
          <AnimatedHomeIcon exiting={isExiting} />

          {/* Title */}
          <div
            className={`text-center ${
              isExiting ? "animate-fade-out-up" : "animate-fade-in"
            }`}
            style={!isExiting ? { animationDelay: "0.1s" } : undefined}
          >
            <h1 className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mb-2">
              Your AI Mortgage Assistant
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
              Get pre-qualified in minutes with our AI-powered assistant.
              Ask anything about mortgages, rates, or the home buying process.
            </p>
          </div>

          {/* Suggestion cards */}
          <div
            className="w-full"
            style={!isExiting ? { animationDelay: "0.2s" } : undefined}
          >
            <SuggestionCarousel onSelect={handleCardSelect} exiting={isExiting} />
          </div>

          {/* Centered input */}
          <div
            className={`w-full mt-2 ${
              isExiting ? "" : "animate-fade-in"
            }`}
            style={!isExiting ? { animationDelay: "0.3s" } : undefined}
          >
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSend}
            />
          </div>
        </div>
      </section>
    );
  }

  // Conversation state
  return (
    <section className="min-h-screen flex flex-col bg-background">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
        <div className="w-full max-w-[640px] md:max-w-[720px] mx-auto space-y-4">
          {messages.map((msg) => {
            if (msg.type === "iframe") {
              return (
                <div key={msg.id} className="w-full animate-fade-in-up">
                  <p className="text-xs text-muted-foreground mb-2 px-1">
                    Starting your pre-qualification process...
                  </p>
                  <div className="card-shadow rounded-xl overflow-hidden bg-white border border-border/50">
                    <iframe
                      src={iframeSrc}
                      title="Pre-Qualification Assistant"
                      className="w-full h-[480px] sm:h-[580px] md:h-[680px] lg:h-[780px] border-0"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              );
            }

            if (msg.role === "user") {
              return (
                <div key={msg.id} className="flex justify-end animate-fade-in-up">
                  <div className="message-bubble bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                    <p className="text-sm sm:text-base">{msg.content}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={msg.id} className="flex justify-start animate-fade-in-up">
                <div className="message-bubble bg-muted/60 text-foreground rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm sm:text-base">{msg.content}</p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Sticky input */}
      <ChatInput
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        isSticky
      />
    </section>
  );
}
