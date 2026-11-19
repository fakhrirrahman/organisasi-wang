import React from "react";
import Image from "next/image";
import { Heart, MapPin, Calendar, ArrowUpRight, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO, FOUNDER_DATA } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t-[4px] border-black bg-[#121212] text-white">
      {/* Decorative colored top border */}
      <div className="h-3 w-full bg-tembe-motif" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-xl border-2 border-white bg-[#15803D] overflow-hidden shadow-[4px_4px_0_0_#FFD84D]">
                <Image
                  src="/images/fortaipubing-logo.jpeg"
                  alt="Fortaipubing Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl tracking-tight text-[#FFD84D]">
                  FORTAIPUBING
                </h3>
                <p className="text-xs font-bold text-white/80 uppercase tracking-widest">
                  Forum Training Public Speaking
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              Web profil resmi forum latihan public speaking mahasiswa di Kota Bima (NTB).
              Membentuk generasi muda yang berani menyampaikan gagasan, percaya diri
              berbahasa Indonesia formal, dan siap menjadi pemimpin di panggung publik.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="yellow" size="sm">
                Speak • Share • Inspire
              </Badge>
              <Badge variant="blue" size="sm">
                Bima • NTB
              </Badge>
              <Badge variant="pink" size="sm">
                Didirikan 25 Okt 2025
              </Badge>
            </div>
          </div>

          {/* Column 2: Founder Tribute */}
          <div className="lg:col-span-4 space-y-4 rounded-xl border-2 border-white/20 bg-white/5 p-5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-md bg-[#FFD84D] text-black">
                <Heart className="w-4 h-4 fill-black" />
              </span>
              <span className="font-heading font-black text-sm uppercase tracking-wider text-[#FFD84D]">
                Inisiatif Mahasiswa untuk Bima
              </span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              Didirikan oleh <strong className="text-white">{FOUNDER_DATA.name}</strong>, seorang
              mahasiswa perantau asal <span className="text-[#38BDF8]">NTT, Pulau Flores (Kab. Manggarai Timur)</span>.
              Digerakkan oleh kepedulian melihat rekan-rekan kuliahnya membutuhkan wadah latihan
              yang ramah dan suportif untuk mengasah kelancaran berbicara dalam Bahasa Indonesia.
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#00D084]" /> Kota Bima, NTB
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B8B]" /> 25 Okt 2025
              </span>
            </div>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-black text-base uppercase tracking-wider text-[#FFD84D]">
              Sekretariat & Kontak
            </h4>

            <div className="space-y-3 text-xs text-gray-300">
              <div>
                <span className="text-white font-bold block">Pusat Latihan:</span>
                <span>Kompleks Kampus STKIP Taman Siswa Bima, Kota Bima, NTB</span>
              </div>

              <div>
                <span className="text-white font-bold block">Kontak WhatsApp:</span>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD84D] font-black underline hover:text-white inline-flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 inline text-[#00D084]" />
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
            </div>

            <ul className="space-y-1.5 text-xs font-semibold text-gray-300 pt-2 border-t border-white/10">
              <li>
                <a href="#profil" className="hover:text-[#FFD84D] transition-colors flex items-center justify-between py-1">
                  <span>Profil & Visi Forum</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#FFD84D] transition-colors flex items-center justify-between py-1">
                  <span>4 Pilar Program Latihan</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-[#FFD84D] transition-colors flex items-center justify-between py-1">
                  <span>Jadwal Sesi Tatap Muka</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2025–2026 Fortaipubing (Forum Training Public Speaking Bima). Web Profile & Komunitas Mahasiswa.</p>
          <div className="flex items-center gap-4">
            <span className="text-white/80 font-bold">STKIP Taman Siswa Bima & Kampus Mitra</span>
            <span>•</span>
            <span className="text-[#FFD84D] font-bold">Dana Mbojo Bersuara</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
