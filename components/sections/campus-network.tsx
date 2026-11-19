import React from "react";
import { CAMPUSES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Building2, GraduationCap, Users } from "lucide-react";

export function CampusNetwork() {
  const mainCampus = CAMPUSES.find((c) => c.isMainBase);
  const otherCampuses = CAMPUSES.filter((c) => !c.isMainBase);

  return (
    <section className="py-20 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple" size="default" rotate="left">
            JARINGAN MAHASISWA KOTA BIMA
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Basis Anggota Terbuka untuk{" "}
            <span className="bg-[#BAE6FD] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Seluruh Kampus
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Berawal dari ruang kelas di STKIP Taman Siswa Bima, kini Fortaipubing merangkul
            seluruh mahasiswa di Kota Bima yang ingin maju bersama.
          </p>
        </div>

        {/* Featured Campus: STKIP Taman Siswa Bima */}
        {mainCampus && (
          <div className="mb-10 rounded-2xl border-[4px] border-black bg-[#FFD84D] p-6 sm:p-8 shadow-[8px_8px_0_0_#000] relative overflow-hidden">
            <div className="absolute top-4 right-4 hidden sm:block">
              <Badge variant="dark" size="sm">
                BASIS ANGGOTA DOMINAN
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-black text-[#FFD84D] border border-black">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-black/70">
                      Kampus Basis Utama
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-black">
                      {mainCampus.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-semibold text-black/85 leading-relaxed">
                  Sebagian besar inisiator awal dan anggota aktif berasal dari kampus STKIP Taman Siswa Bima,
                  khususnya mahasiswa calon pendidik dan calon pemimpin masyarakat yang ingin mempertajam
                  kemampuan komunikasi verbal di hadapan audiens.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs font-bold bg-white px-3 py-1 rounded-md border-2 border-black">
                    Lokasi Latihan Rutin
                  </span>
                  <span className="text-xs font-bold bg-white px-3 py-1 rounded-md border-2 border-black">
                    Fakultas Keguruan & Ilmu Pendidikan
                  </span>
                  <span className="text-xs font-bold bg-white px-3 py-1 rounded-md border-2 border-black">
                    Kota Bima, NTB
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-center items-center text-center p-6 rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000]">
                <div className="font-heading font-black text-4xl text-black">
                  65%+
                </div>
                <div className="text-xs font-black uppercase text-black/70 mt-1">
                  Anggota dari STKIP Taman Siswa
                </div>
                <div className="text-[11px] font-semibold text-black/60 mt-2">
                  Menjadi motor penggerak kebiasaan berbicara positif di lingkungan kampus.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Campuses Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-heading font-black text-lg text-black uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-5 h-5 text-black" />
              Kampus Mitra & Rekan Mahasiswa di Kota Bima:
            </h4>
            <span className="text-xs font-bold text-black/60">Semua Kampus Dirangkul</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCampuses.map((campus, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border-[3px] border-black bg-white shadow-[4px_4px_0_0_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#000] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center font-black text-xs ${campus.badgeColor}`}
                  >
                    0{idx + 2}
                  </span>
                  <Badge variant="white" size="sm">
                    {campus.city}
                  </Badge>
                </div>
                <h5 className="font-heading font-black text-base text-black">
                  {campus.shortName}
                </h5>
                <p className="text-xs text-black/70 font-semibold mt-1">
                  {campus.name}
                </p>
                <div className="mt-4 pt-3 border-t border-black/10 text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>Delegasi Mahasiswa Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
