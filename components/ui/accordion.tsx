"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  const colors = ["#FFD84D", "#BAE6FD", "#FED7E2", "#BBF7D0", "#DDD6FE"];
  const color = colors[index % colors.length];

  return (
    <div
      className={cn(
        "rounded-xl border-[3px] border-black transition-all duration-150 overflow-hidden bg-white",
        isOpen
          ? "shadow-[6px_6px_0_0_#000] translate-x-[-2px] translate-y-[-2px]"
          : "shadow-[4px_4px_0_0_#000] hover:shadow-[5px_5px_0_0_#000]"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left font-heading font-black text-base sm:text-lg text-black cursor-pointer select-none"
        style={{ backgroundColor: isOpen ? color : "#ffffff" }}
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-7 h-7 rounded-md border-2 border-black bg-black text-white text-xs font-black shrink-0">
            {index + 1}
          </span>
          <span>{question}</span>
        </div>
        <div
          className={cn(
            "w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center bg-white shrink-0 transition-transform duration-200 shadow-[2px_2px_0_0_#000]",
            isOpen && "rotate-180 bg-[#121212] text-white"
          )}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      {isOpen && (
        <div className="p-5 pt-3 bg-white border-t-[3px] border-black text-black/85 font-medium text-sm sm:text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
