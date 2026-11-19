"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Mic, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Profil", href: "#profil" },
    { label: "Visi & Akar Rumput", href: "#visi" },
    { label: "Kisah Pendiri", href: "#tentang" },
    { label: "Program", href: "#program" },
    { label: "Latihan 60d", href: "#simulator" },
    { label: "Jadwal", href: "#jadwal" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Ticker / Banner */}
      <div className="bg-[#121212] text-[#FFD84D] border-b-2 border-black py-1 px-4 text-xs font-bold flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="flex h-2 w-2 rounded-full bg-[#00D084] animate-ping" />
          <span className="tracking-wide">
            WEB PROFIL RESMI FORTAIPUBING BIMA (NTB) • BERDIRI 25 OKTOBER 2025
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 shrink-0 text-xs text-white/90">
          <span className="bg-[#FFD84D] text-black px-2 py-0.5 rounded font-black text-[10px]">
            BASIS: STKIP TAMAN SISWA BIMA
          </span>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#00D084] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#00D084]" />
            <span>WA: {CONTACT_INFO.whatsapp}</span>
          </a>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-[#FFFDF0] border-b-[3px] border-black px-4 sm:px-6 lg:px-8 shadow-[0_4px_0_0_#000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-lg border-2 border-black bg-[#15803D] overflow-hidden shadow-[2px_2px_0_0_#000] group-hover:rotate-3 transition-transform">
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
                  FORTAIPUBING
                </span>
                <span className="text-[10px] font-black bg-[#FFD84D] px-1.5 py-0.5 rounded border border-black hidden sm:inline-block">
                  BIMA
                </span>
              </div>
              <span className="text-xs font-bold text-black/70 tracking-wider uppercase">
                Speak • Share • Inspire
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block"
            >
              <Button size="default" variant="green" className="gap-1.5">
                <MessageCircle className="w-4 h-4" />
                <span>Tanya WA</span>
              </Button>
            </a>

            <a href="#gabung" className="hidden sm:inline-block">
              <Button size="default" variant="default" className="gap-2">
                <Mic className="w-4 h-4" />
                Gabung Latihan
              </Button>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg border-[3px] border-black bg-[#FFD84D] shadow-[3px_3px_0_0_#000] hover:bg-yellow-400 cursor-pointer"
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
        <div className="lg:hidden border-b-[4px] border-black bg-[#FFF8E7] px-4 py-6 shadow-[0_8px_0_0_#000] animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            <div className="pb-3 border-b-2 border-black/10 flex items-center justify-between">
              <Badge variant="green" size="sm">
                Open Member Mahasiswa
              </Badge>
              <span className="text-xs font-bold text-black/60">
                STKIP Tamsis & Kampus Bima
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg border-2 border-black bg-white font-heading font-black text-base text-black shadow-[3px_3px_0_0_#000] hover:bg-[#FFD84D] active:translate-x-1 active:translate-y-1 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <a
                href={CONTACT_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block"
              >
                <Button size="lg" variant="green" className="w-full">
                  <MessageCircle className="w-5 h-5 mr-1" />
                  Tanya via WhatsApp (+62 812-3886-8140)
                </Button>
              </a>

              <a
                href="#gabung"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block"
              >
                <Button size="lg" variant="default" className="w-full">
                  <Mic className="w-5 h-5" />
                  Daftar Sekarang (Gratis)
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
