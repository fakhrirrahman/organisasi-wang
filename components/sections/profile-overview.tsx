import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO, FOUNDER_DATA } from "@/lib/data";
import {
  Building2,
  Calendar,
  Compass,
  MapPin,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";

export function ProfileOverview() {
  return (
    <section id="profil" className="py-20 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="yellow" size="default" rotate="left">
            PROFIL RESMI ORGANISASI
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Mengenal Lebih Dekat{" "}
            <span className="bg-[#BAE6FD] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Fortaipubing Bima
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Ringkasan identitas, pendiri, legalitas gerakan akar rumput, dan visi-misi forum
            latihan public speaking mahasiswa di Kota Bima.
          </p>
        </div>

        {/* Profile Card & Info Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official ID Card */}
          <div className="lg:col-span-5 rounded-2xl border-[4px] border-black bg-white p-6 sm:p-8 shadow-[8px_8px_0_0_#000] space-y-6">
            <div className="flex items-center justify-between border-b-2 border-black/10 pb-4">
              <span className="font-heading font-black text-xs uppercase tracking-wider text-black/60">
                KARTU IDENTITAS FORUM
              </span>
              <span className="text-xs font-black bg-[#BBF7D0] px-2.5 py-0.5 rounded border border-black text-emerald-900">
                AKTIF SEJAK 2025
              </span>
            </div>

            {/* Profile Avatar / Logo with Flag */}
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-xl border-[3px] border-black bg-[#0d5c2d] overflow-hidden shadow-[4px_4px_0_0_#000] shrink-0">
                <Image
                  src="/images/fortaipubing-logo.jpeg"
                  alt="Fortaipubing Badge"
                  fill
                  className="object-cover p-1"
                />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl text-black">
                  FORTAIPUBING
                </h3>
                <p className="text-xs font-black text-black/70 uppercase tracking-wider">
                  Forum Training Public Speaking
                </p>
                <div className="mt-1">
                  <span className="text-[11px] font-black bg-[#FFD84D] px-2 py-0.5 rounded border border-black inline-block">
                    &quot;{CONTACT_INFO.tagline}&quot;
                  </span>
                </div>
              </div>
            </div>

            {/* Details Table */}
            <div className="space-y-3 pt-2 text-xs sm:text-sm font-bold text-black/85">
              <div className="flex items-start justify-between p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <span className="text-black/60 flex items-center gap-1.5 shrink-0">
                  <Calendar className="w-4 h-4 text-amber-600" /> Tanggal Berdiri:
                </span>
                <span className="text-right">{CONTACT_INFO.foundedDate}</span>
              </div>

              <div className="flex items-start justify-between p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <span className="text-black/60 flex items-center gap-1.5 shrink-0">
                  <Users className="w-4 h-4 text-blue-600" /> Inisiator & Pendiri:
                </span>
                <span className="text-right">
                  <strong>{FOUNDER_DATA.name}</strong>
                  <span className="block text-[11px] text-black/60">
                    (Mhs. NTT, Flores, Manggarai Timur)
                  </span>
                </span>
              </div>

              <div className="flex items-start justify-between p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <span className="text-black/60 flex items-center gap-1.5 shrink-0">
                  <MapPin className="w-4 h-4 text-red-600" /> Wilayah Forum:
                </span>
                <span className="text-right">{CONTACT_INFO.location}</span>
              </div>

              <div className="flex items-start justify-between p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <span className="text-black/60 flex items-center gap-1.5 shrink-0">
                  <Building2 className="w-4 h-4 text-emerald-600" /> Kampus Basis:
                </span>
                <span className="text-right">STKIP Taman Siswa Bima</span>
              </div>

              <div className="flex items-start justify-between p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <span className="text-black/60 flex items-center gap-1.5 shrink-0">
                  <MessageCircle className="w-4 h-4 text-emerald-600" /> Kontak WhatsApp:
                </span>
                <a
                  href={CONTACT_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-right text-black font-black underline hover:text-emerald-700"
                >
                  {CONTACT_INFO.whatsapp}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visi & Misi */}
          <div className="lg:col-span-7 space-y-6">
            {/* Visi Box */}
            <div className="rounded-2xl border-[3px] border-black bg-[#FFD84D] p-6 sm:p-8 shadow-[6px_6px_0_0_#000] space-y-3">
              <div className="flex items-center gap-2">
                <Target className="w-6 h-6 text-black stroke-[2.5]" />
                <h3 className="font-heading font-black text-xl uppercase tracking-wider text-black">
                  Visi Fortaipubing
                </h3>
              </div>
              <p className="font-heading font-black text-lg sm:text-xl text-black leading-snug">
                &ldquo;Mewujudkan mahasiswa Kota Bima yang berani bersuara lantang, cakap
                dan luwes berbahasa Indonesia resmi di depan audiens, serta berdaya saing di panggung nasional.&rdquo;
              </p>
            </div>

            {/* Misi Box */}
            <div className="rounded-2xl border-[3px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-black stroke-[2.5]" />
                <h3 className="font-heading font-black text-xl uppercase tracking-wider text-black">
                  Misi Utama Forum
                </h3>
              </div>

              <div className="space-y-3 pt-1 text-sm font-semibold text-black/85">
                <div className="flex items-start gap-3 p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                  <span className="w-6 h-6 rounded-md bg-[#BAE6FD] border border-black flex items-center justify-center font-black text-xs shrink-0">
                    1
                  </span>
                  <p>
                    <strong>Membangun Kepercayaan Diri:</strong> Menyediakan panggung latihan
                    mingguan yang aman tanpa perundungan (zero-judgement), di mana kesalahan bicara
                    dianggap sebagai proses belajar alami.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                  <span className="w-6 h-6 rounded-md bg-[#FED7E2] border border-black flex items-center justify-center font-black text-xs shrink-0">
                    2
                  </span>
                  <p>
                    <strong>Jembatan Bahasa Daerah ke Nasional:</strong> Melatih transisi bertutur
                    dari kebiasaan bahasa sehari-hari (Bahasa Bima) ke Bahasa Indonesia baku tanpa
                    mengurangi rasa bangga pada identitas kedaerahan.
                  </p>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                  <span className="w-6 h-6 rounded-md bg-[#BBF7D0] border border-black flex items-center justify-center font-black text-xs shrink-0">
                    3
                  </span>
                  <p>
                    <strong>Solidaritas Antar-Kampus:</strong> Mempererat jejaring komunikasi
                    antara mahasiswa STKIP Taman Siswa, STIE Bima, IAIM, Poltekkes, dan kampus lain di Kota Bima.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
