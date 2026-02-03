"use client";

import { Users, Target, Heart, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      icon: Users,
      title: "Client-First Approach",
      description:
        "We put your needs at the center of everything we do, providing personalized guidance throughout your mortgage journey.",
    },
    {
      icon: Target,
      title: "Precision & Accuracy",
      description:
        "Our AI-powered tools ensure you receive accurate quotes and pre-qualifications with speed and reliability.",
    },
    {
      icon: Heart,
      title: "Trusted Partnership",
      description:
        "Building lasting relationships with our clients through transparency, honesty, and exceptional service.",
    },
    {
      icon: TrendingUp,
      title: "Industry Expertise",
      description:
        "Decades of combined experience navigating the mortgage industry to find the best solutions for you.",
    },
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-12 md:py-16 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2
            id="about-heading"
            className="font-heading font-semibold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4 text-balance"
          >
            Why Choose [COMPANY_SHORT_NAME]
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-pretty">
            We combine cutting-edge technology with personalized service to make
            your home financing experience seamless and stress-free.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-4 sm:p-5 rounded-lg sm:rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 py-6 sm:py-8 bg-muted/30 rounded-xl sm:rounded-2xl">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 px-4">
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-0.5 sm:mb-1">
                25+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Exp.</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-0.5 sm:mb-1">
                12K+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-0.5 sm:mb-1">
                $3B+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Funded</div>
            </div>
            <div className="text-center">
              <div className="font-heading font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-0.5 sm:mb-1">
                4.9
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
