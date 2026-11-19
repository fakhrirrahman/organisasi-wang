import React from "react";
import Image from "next/image";
import { MapPin, Calendar, MessageCircle, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-[4px] border-black bg-[#121212] text-white">
      {/* Decorative colored top border */}
      <div className="h-3 w-full bg-tembe-motif" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl border-2 border-white bg-[#15803D] overflow-hidden shadow-[3px_3px_0_0_#FFD84D]">
                <Image
                  src="/images/fortaipubing-logo.jpeg"
                  alt="Fortaipubing Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl tracking-tight text-[#FFD84D]">
                  {PROFILE.name.toUpperCase()}
                </h3>
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">
                  {PROFILE.fullName}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
              {PROFILE.purpose.coreGoal}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="yellow" size="sm">
                {PROFILE.tagline}
              </Badge>
              <Badge variant="blue" size="sm">
                {PROFILE.location.city} • {PROFILE.location.province}
              </Badge>
            </div>
          </div>

          {/* Column 2: Founder Details */}
          <div className="lg:col-span-4 space-y-3 rounded-xl border-2 border-white/20 bg-white/5 p-5">
            <span className="font-heading font-black text-xs uppercase tracking-wider text-[#FFD84D] block">
              Informasi Pendiri
            </span>
            <p className="text-xs text-gray-300 leading-relaxed">
              Didirikan oleh <strong className="text-white">{PROFILE.founder.name}</strong>, seorang{" "}
              {PROFILE.founder.status.toLowerCase()} yang berasal dari{" "}
              <span className="text-[#38BDF8]">{PROFILE.founder.origin}</span>.
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-1 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B8B]" /> Tanggal: {PROFILE.foundedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00D084]" /> Domisili: {PROFILE.location.city}, {PROFILE.location.province}
              </span>
            </div>
          </div>

          {/* Column 3: Contact & Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-[#FFD84D]">
              Narahubung & Kontak
            </h4>

            <div className="text-xs text-gray-300 space-y-2">
              <p>Untuk pertanyaan lebih lanjut mengenai forum, hubungi WhatsApp resmi:</p>
              <a
                href={PROFILE.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-heading font-black text-sm text-[#00D084] hover:underline"
              >
                <MessageCircle className="w-4 h-4 text-[#00D084]" />
                {PROFILE.contact.whatsapp}
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00D084]" />
              </a>
            </div>

            <ul className="space-y-1 text-xs font-semibold text-gray-300 pt-2 border-t border-white/10">
              <li>
                <a href="#pendiri" className="hover:text-[#FFD84D] transition-colors">
                  Tentang Pendiri
                </a>
              </li>
              <li>
                <a href="#tujuan" className="hover:text-[#FFD84D] transition-colors">
                  Tujuan Berdirinya Forum
                </a>
              </li>
              <li>
                <a href="#keanggotaan" className="hover:text-[#FFD84D] transition-colors">
                  Keanggotaan Mahasiswa
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© 2025–2026 {PROFILE.name} ({PROFILE.fullName}). Web Profil Resmi.</p>
          <div className="flex items-center gap-2">
            <span>STKIP Taman Siswa Bima & Kampus Kota Bima</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
