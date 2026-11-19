import React from "react";
import { FOUNDER_DATA } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Quote, MapPin, Calendar } from "lucide-react";

export function FounderStory() {
  return (
    <section id="tentang" className="py-20 bg-[#FFF8E7] bg-dots-pattern border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="yellow" size="default" rotate="right">
            KISAH & INSPIRASI PENDIRI
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Dari Flores untuk Bima: Perjalanan{" "}
            <span className="bg-[#BAE6FD] px-2 py-0.5 border-2 border-black inline-block rotate-[-1deg] shadow-[3px_3px_0_0_#000]">
              Muhamad Kaisar
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Kisah di balik lahirnya wadah latihan public speaking pada 25 Oktober 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border-[4px] border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
              {/* Brutalist Tape sticker effect */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFD84D] text-black font-black text-xs px-6 py-1 border-2 border-black shadow-[2px_2px_0_0_#000] rotate-[-2deg] uppercase tracking-wider">
                INISIATOR FORUM
              </div>

              {/* Founder Avatar / Illustration Container */}
              <div className="relative w-full aspect-square rounded-xl border-[3px] border-black bg-gradient-to-br from-[#FFD84D] via-[#FFE885] to-[#38BDF8] p-4 flex flex-col items-center justify-center text-center shadow-[4px_4px_0_0_#000] overflow-hidden">
                <div className="w-28 h-28 rounded-full border-[3px] border-black bg-white flex items-center justify-center shadow-[4px_4px_0_0_#000] mb-4">
                  <span className="font-heading font-black text-4xl text-black">MK</span>
                </div>
                <div className="font-heading font-black text-2xl text-black">
                  {FOUNDER_DATA.name}
                </div>
                <div className="text-xs font-bold text-black/75 uppercase tracking-wider mt-1">
                  {FOUNDER_DATA.role}
                </div>

                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <Badge variant="dark" size="sm">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    Asal NTT (Flores)
                  </Badge>
                  <Badge variant="pink" size="sm">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    25 Okt 2025
                  </Badge>
                </div>
              </div>

              {/* Quick Details List */}
              <div className="mt-6 space-y-2.5 text-xs sm:text-sm font-bold text-black/85">
                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-[#FFFDF0]">
                  <span className="text-black/60">Daerah Asal:</span>
                  <span>NTT, Manggarai Timur (Flores)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-[#FFFDF0]">
                  <span className="text-black/60">Kota Perjuangan:</span>
                  <span>Kota Bima, NTB</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg border-2 border-black bg-[#FFFDF0]">
                  <span className="text-black/60">Basis Anggota:</span>
                  <span>STKIP Taman Siswa & Kampus Bima</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Steps & Quote */}
          <div className="lg:col-span-7 space-y-6">
            {/* Story cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-2 font-heading font-black text-base text-black mb-1">
                  <span className="w-6 h-6 rounded-md bg-[#FFD84D] border-2 border-black flex items-center justify-center text-xs">
                    1
                  </span>
                  Merantau dan Mengamati Lingkungan Kampus
                </div>
                <p className="text-sm text-black/80 font-medium leading-relaxed pl-8">
                  Sebagai mahasiswa perantau dari Pulau Flores (Kabupaten Manggarai Timur, NTT),
                  Kaisar berinteraksi setiap hari dengan mahasiswa Bima. Ia terpukau dengan
                  daya nalar dan kecerdasan teman-temannya di bangku kuliah STKIP Taman Siswa dan kampus sekitar.
                </p>
              </div>

              <div className="p-5 rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-2 font-heading font-black text-base text-black mb-1">
                  <span className="w-6 h-6 rounded-md bg-[#38BDF8] border-2 border-black flex items-center justify-center text-xs">
                    2
                  </span>
                  Menemukan Keterbatasan yang Bisa Diatasi
                </div>
                <p className="text-sm text-black/80 font-medium leading-relaxed pl-8">
                  Kaisar menyadari bahwa kendala utama teman-temannya bukan pada isi kepala,
                  melainkan pada kebiasaan lidah. Karena keseharian dominan memakai Bahasa Bima,
                  banyak yang merasa canggung dan kurang percaya diri saat diminta berbicara
                  Bahasa Indonesia resmi di depan audiens kelas.
                </p>
              </div>

              <div className="p-5 rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-2 font-heading font-black text-base text-black mb-1">
                  <span className="w-6 h-6 rounded-md bg-[#00D084] border-2 border-black flex items-center justify-center text-xs">
                    3
                  </span>
                  Mendirikan Fortaipubing (25 Oktober 2025)
                </div>
                <p className="text-sm text-black/80 font-medium leading-relaxed pl-8">
                  Alih-alih membiarkan teman-temannya berjuang sendiri, Kaisar menggagas forum latihan
                  berbicara terstruktur. Sebuah ruang latihan egaliter di Kota Bima dengan moto
                  <strong> &quot;Speak • Share • Inspire&quot;</strong> agar setiap mahasiswa punya panggung untuk bersuara lantang.
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-xl border-[3px] border-black bg-[#FFD84D] p-6 shadow-[6px_6px_0_0_#000] relative">
              <Quote className="w-10 h-10 text-black/20 absolute right-4 top-4" />
              <p className="font-heading font-black text-lg text-black leading-snug">
                &ldquo;{FOUNDER_DATA.quote}&rdquo;
              </p>
              <div className="mt-3 text-xs font-black uppercase tracking-wider text-black/80">
                — {FOUNDER_DATA.name}, Pendiri Fortaipubing (Bima, NTB)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
