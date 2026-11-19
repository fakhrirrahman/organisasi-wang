"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Tentang & Pendiri", href: "#pendiri" },
    { label: "Tujuan Forum", href: "#tujuan" },
    { label: "Filosofi Slogan", href: "#filosofi" },
    { label: "Keanggotaan", href: "#keanggotaan" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Banner */}
      <div className="bg-[#121212] text-[#FFD84D] border-b-2 border-black py-1 px-4 text-xs font-bold flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="flex h-2 w-2 rounded-full bg-[#00D084]" />
          <span className="tracking-wide">
            WEB PROFIL RESMI {PROFILE.name.toUpperCase()} • {PROFILE.fullName.toUpperCase()}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 shrink-0 text-xs text-white/90">
          <span className="bg-[#FFD84D] text-black px-2 py-0.5 rounded font-black text-[10px]">
            BASIS: STKIP TAMAN SISWA
          </span>
          <span>{PROFILE.location.city}, {PROFILE.location.province}</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-[#FFFDF0] border-b-[3px] border-black px-4 sm:px-6 lg:px-8 shadow-[0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-lg border-2 border-black bg-[#15803D] overflow-hidden shadow-[2px_2px_0_0_#000] shrink-0">
              <Image
                src="/images/fortaipubing-logo.jpeg"
                alt="Logo Fortaipubing"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter text-black">
                  {PROFILE.name.toUpperCase()}
                </span>
                <span className="text-[10px] font-black bg-[#FFD84D] px-1.5 py-0.5 rounded border border-black hidden sm:inline-block">
                  BIMA
                </span>
              </div>
              <span className="text-xs font-bold text-black/70 tracking-wider uppercase">
                {PROFILE.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-bold text-black rounded-md hover:bg-[#FFD84D] hover:border-2 hover:border-black hover:shadow-[2px_2px_0_0_#000] transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="#kontak" className="hidden sm:inline-block">
              <Button size="default" variant="default" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Kontak Forum
              </Button>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border-[3px] border-black bg-[#FFD84D] shadow-[3px_3px_0_0_#000] hover:bg-yellow-400 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 stroke-[3]" />
              ) : (
                <Menu className="h-6 w-6 stroke-[3]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-[4px] border-black bg-[#FFF8E7] px-4 py-6 shadow-[0_8px_0_0_#000]">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg border-2 border-black bg-white font-heading font-black text-base text-black shadow-[3px_3px_0_0_#000] hover:bg-[#FFD84D] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block"
              >
                <Button size="default" variant="default" className="w-full gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Hubungi Kontak ({PROFILE.contact.whatsapp})
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
