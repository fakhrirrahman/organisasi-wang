import React from "react";
import { cn } from "@/lib/utils";

interface TickerProps {
  items: string[];
  variant?: "yellow" | "dark" | "blue" | "pink";
  className?: string;
  speed?: "normal" | "slow" | "fast";
}

export function Ticker({
  items,
  variant = "yellow",
  className,
}: TickerProps) {
  const bgStyles = {
    yellow: "bg-[#FFD84D] text-black border-black",
    dark: "bg-[#121212] text-[#FFD84D] border-black",
    blue: "bg-[#38BDF8] text-black border-black",
    pink: "bg-[#FF6B8B] text-black border-black",
  };

  // Duplicate items 4 times to ensure seamless infinite scroll on wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y-[3px] py-2.5 font-heading font-black text-sm sm:text-base tracking-wider uppercase select-none",
        bgStyles[variant],
        className
      )}
    >
      <div className="flex w-max animate-marquee space-x-6">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span>{item}</span>
            <span className="inline-block text-lg">★</span>
          </div>
        ))}
      </div>
    </div>
  );
}
