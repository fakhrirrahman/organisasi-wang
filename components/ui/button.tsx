import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "secondary"
    | "pink"
    | "green"
    | "orange"
    | "outline"
    | "ghost"
    | "dark";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantStyles = {
      default:
        "bg-[#FFD84D] text-black hover:bg-[#FACC15] shadow-[4px_4px_0_0_#000]",
      secondary:
        "bg-[#38BDF8] text-black hover:bg-[#0EA5E9] shadow-[4px_4px_0_0_#000]",
      pink: "bg-[#FF6B8B] text-black hover:bg-[#F43F5E] shadow-[4px_4px_0_0_#000]",
      green:
        "bg-[#00D084] text-black hover:bg-[#10B981] shadow-[4px_4px_0_0_#000]",
      orange:
        "bg-[#FF7A00] text-black hover:bg-[#EA580C] shadow-[4px_4px_0_0_#000]",
      outline:
        "bg-[#FFFDF0] text-black hover:bg-[#FFF] shadow-[4px_4px_0_0_#000]",
      ghost:
        "bg-transparent text-black border-transparent shadow-none hover:bg-black/10 hover:border-black hover:shadow-[3px_3px_0_0_#000]",
      dark: "bg-[#121212] text-white hover:bg-black shadow-[4px_4px_0_0_#FFD84D]",
    };

    const sizeStyles = {
      sm: "h-9 px-3 text-xs font-bold gap-1.5",
      default: "h-11 px-5 py-2 text-sm font-black gap-2 tracking-wide",
      lg: "h-14 px-8 text-base font-black gap-2.5 tracking-wider uppercase",
      icon: "h-11 w-11 p-0 flex items-center justify-center",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg border-[3px] border-black select-none",
          "transition-all duration-150 ease-out cursor-pointer",
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000]",
          "active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_0_#000]",
          "disabled:opacity-50 disabled:pointer-events-none disabled:transform-none disabled:shadow-[2px_2px_0_0_#000]",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
