"use client";

import React from "react";
import Image from "next/image";
import { Mic, ArrowRight, Play, MapPin, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { STATS } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] bg-grid-pattern pt-8 pb-16 lg:pt-14 lg:pb-24 border-b-[4px] border-black">
      {/* Decorative floating badges */}
      <div className="absolute top-10 right-8 hidden lg:block rotate-6 pointer-events-none">
        <Badge variant="pink" size="lg" className="shadow-[4px_4px_0_0_#000]">
          🎤 NO MINDER-MINDER CLUB!
        </Badge>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="yellow" size="default" rotate="left">
                <Flame className="w-3.5 h-3.5 fill-black text-black inline" /> FORUM MAHASISWA BIMA
              </Badge>
              <Badge variant="green" size="default">
                EST. 25 OKTOBER 2025
              </Badge>
              <Badge variant="blue" size="default" className="hidden sm:inline-flex">
                <MapPin className="w-3 h-3 inline" /> KOTA BIMA • NTB
              </Badge>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl text-black leading-[1.08] tracking-tight">
              Latih Lidahmu,{" "}
              <span className="relative inline-block bg-[#FFD84D] px-2 py-0.5 rounded-md border-[3px] border-black shadow-[4px_4px_0_0_#000] rotate-[-1deg]">
                Hancurkan Ragu,
              </span>{" "}
              Bicaralah Lantang di Depan Audiens!
            </h1>

            <p className="text-base sm:text-lg text-black/85 font-semibold leading-relaxed max-w-2xl">
              <strong>Fortaipubing</strong> (Forum Training Public Speaking) adalah ruang latihan
              terstruktur untuk mahasiswa se-Kota Bima. Dibangun agar kamu lebih berani, fasih,
              dan percaya diri menyampaikan gagasan dalam <strong>Bahasa Indonesia formal</strong> tanpa rasa dihakimi.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <div className="w-7 h-7 rounded-md bg-[#FFD84D] border-2 border-black flex items-center justify-center font-black text-xs shrink-0">
                  01
                </div>
                <div>
                  <div className="font-black text-xs sm:text-sm text-black">Transisi Bahasa Harian</div>
                  <div className="text-[11px] text-black/70 font-medium">Dari bahasa daerah Bima ke Bahasa Indonesia baku & luwes.</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <div className="w-7 h-7 rounded-md bg-[#00D084] border-2 border-black flex items-center justify-center font-black text-xs shrink-0">
                  02
                </div>
                <div>
                  <div className="font-black text-xs sm:text-sm text-black">Panggung Bebas Salah</div>
                  <div className="text-[11px] text-black/70 font-medium">Semua anggota saling dukung, evaluasi hangat tanpa bully.</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#gabung" className="w-full sm:w-auto">
                <Button size="lg" variant="default" className="w-full sm:w-auto text-base">
                  <Mic className="w-5 h-5 mr-1" />
                  Gabung Latihan Gratis
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </a>

              <a href="#simulator" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
                  <Play className="w-5 h-5 mr-1 fill-black" />
                  Coba Simulator Bicara 60d
                </Button>
              </a>
            </div>

            {/* Campus affiliation note */}
            <div className="pt-2 flex items-center gap-2 text-xs font-bold text-black/75">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black" />
              <span>Didominasi mahasiswa <strong>STKIP Taman Siswa Bima</strong> & terbuka untuk seluruh kampus di Kota Bima.</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Official Logo */}
          <div className="lg:col-span-5 relative">
            {/* Background offset card decoration */}
            <div className="absolute inset-0 bg-[#38BDF8] rounded-2xl border-[4px] border-black translate-x-3 translate-y-3 hidden sm:block" />

            {/* Main Interactive Card */}
            <div className="relative rounded-2xl border-[4px] border-black bg-[#FFFDF0] p-6 shadow-[8px_8px_0_0_#000] space-y-5">
              {/* Card Header Tag */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 border border-black" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
                  <span className="w-3 h-3 rounded-full bg-green-500 border border-black" />
                  <span className="font-heading font-black text-xs uppercase tracking-wider ml-2">
                    OFFICIAL_BADGE.PNG
                  </span>
                </div>
                <Badge variant="yellow" size="sm">
                  AKTIF & TERSTRUKTUR
                </Badge>
              </div>

              {/* Logo Banner Container */}
              <div className="relative w-full aspect-16/10 rounded-xl border-[3px] border-black overflow-hidden bg-[#0d5c2d] shadow-[4px_4px_0_0_#000] group">
                <Image
                  src="/images/fortaipubing-logo.jpeg"
                  alt="Bendera & Logo Resmi Fortaipubing Bima"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/85 text-white backdrop-blur-xs p-2 rounded-lg border border-white/20 text-center">
                  <span className="font-heading font-black text-xs sm:text-sm text-[#FFD84D] tracking-wider uppercase block">
                    PUBLIC SPEAKING FORUM
                  </span>
                  <span className="text-[11px] font-bold text-white/90">
                    &quot;Speak • Share • Inspire&quot;
                  </span>
                </div>
              </div>

              {/* Card Meta Stats */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-lg border-2 border-black bg-[#FFD84D] shadow-[2px_2px_0_0_#000]">
                  <div className="text-[10px] uppercase font-black text-black/70">Pendiri Forum</div>
                  <div className="font-heading font-black text-sm text-black">Muhamad Kaisar</div>
                  <div className="text-[10px] text-black/80 font-bold">Mahasiswa Asal NTT (Flores)</div>
                </div>

                <div className="p-3 rounded-lg border-2 border-black bg-[#BBF7D0] shadow-[2px_2px_0_0_#000]">
                  <div className="text-[10px] uppercase font-black text-black/70">Pusat Gerakan</div>
                  <div className="font-heading font-black text-sm text-black">Kota Bima (NTB)</div>
                  <div className="text-[10px] text-black/80 font-bold">STKIP Taman Siswa & Mitra</div>
                </div>
              </div>

              {/* Founder quote snippet */}
              <div className="p-3.5 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0_0_#000] text-xs font-semibold italic text-black/85">
                &ldquo;Tujuan forum ini sederhana: melatih teman-teman lebih percaya diri berbahasa Indonesia di depan audiens, mendobrak rasa minder karena terbiasa bahasa daerah sehari-hari.&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-14 pt-8 border-t-[3px] border-black">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform"
              >
                <div className="font-heading font-black text-2xl sm:text-3xl text-black">
                  {stat.number}
                </div>
                <div className="font-heading font-black text-xs uppercase tracking-wider text-black mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-black/70 font-semibold mt-0.5">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
