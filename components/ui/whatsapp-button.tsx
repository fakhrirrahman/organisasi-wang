"use client";

import React from "react";
import { PROFILE } from "@/lib/data";

export function WhatsAppButton() {
  return (
    <aside
      aria-label="Kontak WhatsApp"
      className="fixed bottom-6 right-6 z-50 select-none"
    >
      <a
        href={PROFILE.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp Fortaipubing di +62 812-3886-8140"
        title="Hubungi WhatsApp: +62 812-3886-8140"
        className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border-[3px] border-black bg-[#25D366] text-white shadow-[4px_4px_0_0_#000] transition-all duration-150 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_0_#000] cursor-pointer"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-7 w-7 sm:h-8 sm:w-8 fill-white stroke-black"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </aside>
  );
}

