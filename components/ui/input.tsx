import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-lg border-[3px] border-black bg-white px-4 py-2 text-sm font-semibold text-black placeholder:text-black/40",
            "shadow-[3px_3px_0_0_#000] transition-all outline-none",
            "focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[5px_5px_0_0_#000] focus:border-black focus:bg-[#FFFDF0]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-600 bg-red-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 border border-red-600 inline-block rounded">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
