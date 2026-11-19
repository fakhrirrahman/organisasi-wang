"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  headerColor?: string;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  headerColor = "bg-[#FFD84D]",
}: ModalProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 w-full max-w-lg rounded-xl border-[4px] border-black bg-[#FFFDF0]",
          "shadow-[8px_8px_0_0_#000] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "flex items-center justify-between border-b-[3px] border-black p-4 sm:p-5",
            headerColor
          )}
        >
          <h3 className="font-heading font-black text-lg sm:text-xl text-black uppercase tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white text-black shadow-[2px_2px_0_0_#000] hover:bg-red-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="h-5 w-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}

