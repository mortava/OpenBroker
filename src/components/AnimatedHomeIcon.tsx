"use client";

interface AnimatedHomeIconProps {
  exiting?: boolean;
}

export default function AnimatedHomeIcon({ exiting = false }: AnimatedHomeIconProps) {
  return (
    <div
      className={`${exiting ? "animate-fade-out-up" : "animate-float animate-gentle-pulse"}`}
    >
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="homeGrad" x1="8" y1="8" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(221.2, 83.2%, 53.3%)" />
            <stop offset="1" stopColor="hsl(221.2, 83.2%, 43%)" />
          </linearGradient>
        </defs>
        {/* Rounded background */}
        <rect width="56" height="56" rx="16" fill="hsl(221.2, 83.2%, 53.3%)" fillOpacity="0.1" />
        {/* House roof */}
        <path
          d="M28 14L12 26H16V40H24V32H32V40H40V26H44L28 14Z"
          fill="url(#homeGrad)"
        />
        {/* Door */}
        <rect x="24" y="32" width="8" height="8" rx="1" fill="hsl(221.2, 83.2%, 53.3%)" fillOpacity="0.3" />
        {/* Window left */}
        <rect x="18" y="28" width="5" height="5" rx="1" fill="white" fillOpacity="0.6" />
        {/* Window right */}
        <rect x="33" y="28" width="5" height="5" rx="1" fill="white" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
