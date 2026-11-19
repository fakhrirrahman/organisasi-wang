import React from "react";
import { Badge } from "@/components/ui/badge";
import { PROFILE } from "@/lib/data";
import { User, MapPin, Compass } from "lucide-react";

export function AboutSection() {
  return (
    <section id="pendiri" className="py-16 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="blue" size="default" rotate="left">
            PENDIRI FORUM
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-black tracking-tight">
            Muhamad Kaisar & Tanggal Pendirian
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-semibold">
            Informasi resmi mengenai inisiator dan waktu didirikannya Fortaipubing.
          </p>
        </div>

        {/* Founder Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Identity Box */}
          <div className="md:col-span-5 rounded-2xl border-[4px] border-black bg-[#FFD84D] p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-2xl border-[3px] border-black bg-white flex items-center justify-center shadow-[3px_3px_0_0_#000]">
                <User className="w-8 h-8 text-black" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider text-black/70">
                  Pendiri / Inisiator
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-black">
                  {PROFILE.founder.name}
                </h3>
                <p className="text-xs font-bold text-black/80 mt-1 uppercase">
                  {PROFILE.founder.status} • Asal {PROFILE.founder.origin}
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border-2 border-black bg-white text-xs font-bold text-black/85 space-y-1">
              <div className="text-[10px] text-black/60 uppercase font-black">
                Waktu Pendirian Forum:
              </div>
              <div className="text-sm font-black text-black">
                {PROFILE.foundedDate}
              </div>
            </div>
          </div>

          {/* Context Details */}
          <div className="md:col-span-7 rounded-2xl border-[4px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="font-heading font-black text-xl text-black">
                Profil Singkat Pendiri
              </h4>
              <p className="text-sm sm:text-base text-black/85 font-medium leading-relaxed">
                Forum ini dibuat pada tanggal <strong>{PROFILE.foundedDate}</strong> oleh{" "}
                <strong>{PROFILE.founder.name}</strong>, seorang mahasiswa yang berasal dari{" "}
                <strong>{PROFILE.founder.origin}</strong>.
              </p>
              <p className="text-sm sm:text-base text-black/85 font-medium leading-relaxed">
                Menempuh studi dan beraktivitas di {PROFILE.location.city} ({PROFILE.location.province}),
                Muhamad Kaisar menginisiasi wadah ini untuk rekan-rekan mahasiswanya agar memiliki
                ruang latihan berbicara yang positif dan membangun.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <div className="flex items-center gap-1.5 text-xs font-black text-black/70">
                  <MapPin className="w-3.5 h-3.5 text-red-600" /> Daerah Asal
                </div>
                <div className="text-xs font-bold text-black mt-1">
                  Kab. Manggarai Timur, Flores, NTT
                </div>
              </div>

              <div className="p-3 rounded-lg border-2 border-black bg-[#FFFDF0]">
                <div className="flex items-center gap-1.5 text-xs font-black text-black/70">
                  <Compass className="w-3.5 h-3.5 text-emerald-600" /> Lokasi Forum
                </div>
                <div className="text-xs font-bold text-black mt-1">
                  {PROFILE.location.city}, {PROFILE.location.province}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
