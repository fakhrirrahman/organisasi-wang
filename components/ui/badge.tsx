import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "yellow"
    | "blue"
    | "pink"
    | "green"
    | "purple"
    | "orange"
    | "dark"
    | "white";
  size?: "sm" | "default" | "lg";
  rotate?: "none" | "left" | "right";
}

function Badge({
  className,
  variant = "yellow",
  size = "default",
  rotate = "none",
  ...props
}: BadgeProps) {
  const variantStyles = {
    yellow: "bg-[#FFD84D] text-black",
    blue: "bg-[#38BDF8] text-black",
    pink: "bg-[#FF6B8B] text-black",
    green: "bg-[#00D084] text-black",
    purple: "bg-[#A78BFA] text-black",
    orange: "bg-[#FF7A00] text-black",
    dark: "bg-[#121212] text-[#FFD84D]",
    white: "bg-white text-black",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-xs font-black",
    default: "px-3.5 py-1 text-xs sm:text-sm font-black",
    lg: "px-4 py-1.5 text-sm sm:text-base font-black",
  };

  const rotateStyles = {
    none: "rotate-0",
    left: "-rotate-2 hover:rotate-0 transition-transform",
    right: "rotate-2 hover:rotate-0 transition-transform",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border-2 border-black shadow-[2px_2px_0_0_#000] tracking-wider uppercase select-none",
        variantStyles[variant],
        sizeStyles[size],
        rotateStyles[rotate],
        className
      )}
      {...props}
    />
  );
}

export { Badge };

