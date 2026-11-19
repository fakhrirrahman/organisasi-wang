"use client";

import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <aside
      aria-label="Kontak WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center group select-none"
    >
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 rounded-full border-[3px] border-black bg-[#25D366] px-4 py-3 text-black font-heading font-black text-xs sm:text-sm tracking-wide shadow-[4px_4px_0_0_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_0_#000] cursor-pointer"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white shrink-0">
          <MessageCircle className="h-4 w-4 fill-black stroke-black" />
        </span>
        <div className="flex flex-col text-left pr-1">
          <span className="text-[10px] uppercase font-black text-black/70 leading-none">
            Tanya Koordinator
          </span>
          <span className="text-xs sm:text-sm font-black text-black leading-tight">
            WA: {CONTACT_INFO.whatsapp}
          </span>
        </div>
        <ArrowUpRight className="h-4 w-4 stroke-[3] group-hover:rotate-12 transition-transform" />
      </a>
    </aside>
  );
}
