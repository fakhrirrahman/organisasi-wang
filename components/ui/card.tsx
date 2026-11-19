import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    color?: "white" | "yellow" | "blue" | "pink" | "green" | "purple" | "cream";
    hoverEffect?: boolean;
    shadowSize?: "sm" | "default" | "lg" | "xl";
  }
>(
  (
    {
      className,
      color = "white",
      hoverEffect = false,
      shadowSize = "default",
      ...props
    },
    ref
  ) => {
    const colorStyles = {
      white: "bg-white",
      yellow: "bg-[#FFD84D]",
      blue: "bg-[#BAE6FD]",
      pink: "bg-[#FED7E2]",
      green: "bg-[#BBF7D0]",
      purple: "bg-[#DDD6FE]",
      cream: "bg-[#FFFDF0]",
    };

    const shadowStyles = {
      sm: "shadow-[3px_3px_0_0_#000]",
      default: "shadow-[5px_5px_0_0_#000]",
      lg: "shadow-[7px_7px_0_0_#000]",
      xl: "shadow-[10px_10px_0_0_#000]",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border-[3px] border-black text-[#121212]",
          colorStyles[color],
          shadowStyles[shadowSize],
          hoverEffect &&
            "transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000]",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-heading font-black text-xl sm:text-2xl leading-tight tracking-tight text-black",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-black/80 font-medium leading-relaxed", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 border-t-2 border-black/10 mt-4",
      className
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
