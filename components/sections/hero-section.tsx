import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Users, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFF8E7] bg-grid-pattern pt-10 pb-16 lg:pt-16 lg:pb-20 border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines & Profile Summary */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="yellow" size="default" rotate="left">
                WEB PROFIL RESMI
              </Badge>
              <Badge variant="green" size="default">
                EST. {PROFILE.foundedDate}
              </Badge>
              <Badge variant="blue" size="default">
                <MapPin className="w-3.5 h-3.5 inline mr-1" />
                {PROFILE.location.city} • {PROFILE.location.province}
              </Badge>
            </div>

            <div className="space-y-2">
              <h1 className="font-heading font-black text-4xl sm:text-5xl xl:text-6xl text-black leading-[1.08] tracking-tight">
                {PROFILE.name.toUpperCase()}
              </h1>
              <p className="font-heading font-bold text-xl sm:text-2xl text-black/80">
                {PROFILE.fullName}
              </p>
              <div className="inline-block bg-[#FFD84D] px-3 py-1 rounded-md border-2 border-black font-heading font-black text-sm uppercase tracking-wider shadow-[3px_3px_0_0_#000]">
                &quot;{PROFILE.tagline}&quot;
              </div>
            </div>

            <p className="text-base sm:text-lg text-black/85 font-medium leading-relaxed max-w-2xl">
              {PROFILE.purpose.coreGoal}
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <div className="text-[10px] font-black uppercase text-black/60 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-600" /> Tanggal Berdiri
                </div>
                <div className="font-heading font-black text-sm text-black mt-1">
                  {PROFILE.foundedDate}
                </div>
              </div>

              <div className="p-3.5 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <div className="text-[10px] font-black uppercase text-black/60 flex items-center gap-1">
                  <Users className="w-3 h-3 text-blue-600" /> Pendiri Forum
                </div>
                <div className="font-heading font-black text-sm text-black mt-1">
                  {PROFILE.founder.name}
                </div>
                <div className="text-[10px] text-black/70 font-semibold">
                  Mhs. NTT (Flores)
                </div>
              </div>

              <div className="p-3.5 rounded-xl border-2 border-black bg-white shadow-[3px_3px_0_0_#000]">
                <div className="text-[10px] font-black uppercase text-black/60 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-red-600" /> Basis Anggota
                </div>
                <div className="font-heading font-black text-sm text-black mt-1">
                  STKIP Taman Siswa
                </div>
                <div className="text-[10px] text-black/70 font-semibold">
                  & Kampus Kota Bima
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#tujuan">
                <Button size="default" variant="default">
                  Lihat Tujuan Forum ↓
                </Button>
              </a>
              <a href="#kontak">
                <Button size="default" variant="outline">
                  <MessageCircle className="w-4 h-4 mr-1.5" />
                  Hubungi Kontak Forum
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Official Flag / Logo Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border-[4px] border-black bg-white p-5 sm:p-6 shadow-[8px_8px_0_0_#000] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-black/10">
                <span className="font-heading font-black text-xs uppercase tracking-wider text-black/70">
                  LAMBANG & BENDERA RESMI
                </span>
                <span className="text-[10px] font-black bg-[#BBF7D0] px-2 py-0.5 rounded border border-black text-emerald-900">
                  PUBLIC SPEAKING FORUM
                </span>
              </div>

              {/* Official Image Container */}
              <div className="relative w-full aspect-16/10 rounded-xl border-[3px] border-black overflow-hidden bg-[#0d5c2d] shadow-[4px_4px_0_0_#000]">
                <Image
                  src="/images/fortaipubing-logo.jpeg"
                  alt="Bendera Resmi Fortaipubing"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="p-3 rounded-lg border-2 border-black bg-[#FFFDF0] text-center space-y-0.5">
                <div className="font-heading font-black text-xs uppercase tracking-wider text-black">
                  {PROFILE.name} • Kota Bima (NTB)
                </div>
                <div className="text-xs font-bold text-black/70">
                  &quot;{PROFILE.tagline}&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
