import React from "react";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from "@/lib/data";
import { Languages } from "lucide-react";

export function PurposeSection() {
  return (
    <section id="tujuan" className="py-16 bg-[#FFF8E7] bg-dots-pattern border-b-[4px] border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="pink" size="default" rotate="right">
            TUJUAN BERDIRINYA FORUM
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-black tracking-tight">
            Latar Belakang & Tujuan Utama
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-semibold">
            Alasan utama Muhamad Kaisar mendirikan forum training public speaking ini di Kota Bima.
          </p>
        </div>

        {/* Core Narrative Card */}
        <div className="rounded-2xl border-[4px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] space-y-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#FF6B8B] flex items-center justify-center shrink-0 shadow-[2px_2px_0_0_#000]">
              <Languages className="w-6 h-6 text-black" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-black">
                Tantangan Bahasa Keseharian di Bangku Kuliah
              </h3>
              <p className="text-sm sm:text-base text-black/85 font-medium leading-relaxed">
                {PROFILE.purpose.backgroundReason}
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl border-2 border-black bg-[#FFFDF0] text-sm sm:text-base text-black/90 font-medium leading-relaxed">
            Melihat situasi tersebut, Fortaipubing dibentuk sebagai wadah latihan terstruktur untuk
            membantu teman-teman mahasiswa melatih cara berbicara dan lebih percaya diri berbahasa Indonesia
            saat menyampaikan pandangan di depan audiens.
          </div>
        </div>

        {/* 3 Core Deliverables from Document */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_#000] space-y-3">
            <div className="w-10 h-10 rounded-lg border-2 border-black bg-[#FFD84D] flex items-center justify-center font-black text-sm">
              01
            </div>
            <h4 className="font-heading font-black text-lg text-black">
              Keterampilan Berbicara
            </h4>
            <p className="text-xs sm:text-sm text-black/75 font-medium leading-relaxed">
              Membekali anggota dengan keterampilan dasar cara berbicara yang teratur, jelas,
              dan lugas di hadapan orang banyak.
            </p>
          </div>

          <div className="rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_#000] space-y-3">
            <div className="w-10 h-10 rounded-lg border-2 border-black bg-[#38BDF8] flex items-center justify-center font-black text-sm">
              02
            </div>
            <h4 className="font-heading font-black text-lg text-black">
              Teknik Penyampaian
            </h4>
            <p className="text-xs sm:text-sm text-black/75 font-medium leading-relaxed">
              Mempelajari teknik agar ide atau gagasan yang ada dalam pikiran dapat disampaikan
              secara runut dan mudah dipahami oleh audiens.
            </p>
          </div>

          <div className="rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_#000] space-y-3">
            <div className="w-10 h-10 rounded-lg border-2 border-black bg-[#00D084] flex items-center justify-center font-black text-sm">
              03
            </div>
            <h4 className="font-heading font-black text-lg text-black">
              Rasa Percaya Diri
            </h4>
            <p className="text-xs sm:text-sm text-black/75 font-medium leading-relaxed">
              Membangun keberanian mental agar tidak minder, ragu, atau gugup saat harus berbicara
              menggunakan Bahasa Indonesia di forum publik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
