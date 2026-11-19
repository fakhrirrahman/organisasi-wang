import React from "react";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from "@/lib/data";
import { GraduationCap, MapPin, Users } from "lucide-react";

export function MembershipSection() {
  return (
    <section id="keanggotaan" className="py-16 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="green" size="default" rotate="left">
            KEANGGOTAAN & LOKASI
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-black tracking-tight">
            Basis Mahasiswa di Kota Bima
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-semibold">
            Informasi mengenai domisili forum dan persebaran anggota mahasiswa.
          </p>
        </div>

        {/* 2 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card Basis Dominan: STKIP Taman Siswa */}
          <div className="rounded-2xl border-[4px] border-black bg-[#FFD84D] p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-black/70">
                Dominan Anggota
              </span>
              <h3 className="font-heading font-black text-2xl text-black">
                {PROFILE.membership.dominant}
              </h3>
              <p className="text-sm text-black/85 font-medium leading-relaxed">
                Mayoritas anggota yang aktif berlatih di dalam forum training public speaking ini
                didominasi oleh kalangan mahasiswa dari kampus <strong>STKIP Taman Siswa Bima</strong>.
              </p>
            </div>

            <div className="pt-3 border-t-2 border-black/20 text-xs font-black text-black">
              ★ BASIS UTAMA AKTIVITAS FORUM
            </div>
          </div>

          {/* Card Kampus Lain di Kota Bima */}
          <div className="rounded-2xl border-[4px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#38BDF8] flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                <Users className="w-6 h-6 text-black" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-black/70">
                Keterbukaan Forum
              </span>
              <h3 className="font-heading font-black text-2xl text-black">
                Mahasiswa Kampus Lain di Kota Bima
              </h3>
              <p className="text-sm text-black/85 font-medium leading-relaxed">
                Meskipun didominasi oleh mahasiswa STKIP Taman Siswa, forum ini juga diikuti oleh
                mahasiswa dari <strong>kampus-kampus lain yang ada di Kota Bima</strong> yang memiliki
                semangat yang sama untuk belajar berbicara di depan audiens.
              </p>
            </div>

            <div className="p-3 rounded-lg border-2 border-black bg-[#FFFDF0] flex items-center gap-2 text-xs font-bold text-black">
              <MapPin className="w-4 h-4 text-red-600 shrink-0" />
              <span>Letak Forum: {PROFILE.location.city}, {PROFILE.location.province}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

