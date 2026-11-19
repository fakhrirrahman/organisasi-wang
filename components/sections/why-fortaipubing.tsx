import React from "react";
import { CheckCircle2, Languages, ShieldCheck, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function WhyFortaipubing() {
  return (
    <section id="visi" className="py-20 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="pink" size="default" rotate="left">
            LATAR BELAKANG & VISI UTAMA
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Kenapa Mahasiswa Bima Membutuhkan{" "}
            <span className="bg-[#FFD84D] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Fortaipubing?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Mahasiswa di Bima itu cerdas dan penuh gagasan. Namun ada satu jurang
            komunikasi yang sering membuat mereka menahan diri saat berada di forum umum.
          </p>
        </div>

        {/* Comparison: Realita Kampus vs Solusi Forum */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card Tantangan */}
          <div className="rounded-2xl border-[3px] border-black bg-[#FFE4E6] p-6 sm:p-8 shadow-[6px_6px_0_0_#000] relative">
            <div className="absolute -top-4 left-6">
              <span className="bg-red-500 text-white font-heading font-black text-xs uppercase px-3 py-1 rounded-md border-2 border-black shadow-[2px_2px_0_0_#000]">
                TANTANGAN NYATA DI KAMPUS
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="font-heading font-black text-2xl text-black">
                Dominan Bahasa Daerah, Kaku di Panggung Formal
              </h3>
              <p className="text-sm sm:text-base text-black/80 font-medium leading-relaxed">
                Dalam pergaulan harian di kos, tongkrongan, hingga kampus di Bima,
                interaksi alami didominasi oleh <strong>Bahasa Bima (Nggahi Mbojo)</strong>.
                Ketika tiba giliran:
              </p>

              <ul className="space-y-3 pt-2 text-sm sm:text-base font-semibold text-black/90">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-400 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-black">✕</span>
                  </div>
                  <span>Presentasi tugas kuliah mendadak terbata-bata karena bingung memilih kosakata Bahasa Indonesia yang baku.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-400 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-black">✕</span>
                  </div>
                  <span>Gugup dan gemetar saat seminar proposal atau sidang skripsi di hadapan dosen penguji.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-400 border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-black">✕</span>
                  </div>
                  <span>Memilih diam saat diskusi panel atau debat karena takut ditertawakan teman saat kata-kata keliru.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card Solusi Fortaipubing */}
          <div className="rounded-2xl border-[3px] border-black bg-[#DCFCE7] p-6 sm:p-8 shadow-[6px_6px_0_0_#000] relative">
            <div className="absolute -top-4 left-6">
              <span className="bg-[#00D084] text-black font-heading font-black text-xs uppercase px-3 py-1 rounded-md border-2 border-black shadow-[2px_2px_0_0_#000]">
                JAWABAN TERSTRUKTUR FORTAIPUBING
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="font-heading font-black text-2xl text-black">
                Bukan Melupakan Budaya, Tapi Menguasai Panggung Nasional
              </h3>
              <p className="text-sm sm:text-base text-black/80 font-medium leading-relaxed">
                Bahasa daerah adalah kekayaan identitas kita. Fortaipubing hadir untuk melengkapi
                kemampuan mahasiswa Bima agar <strong>dwi-bahasa yang seimbang</strong>:
              </p>

              <ul className="space-y-3 pt-2 text-sm sm:text-base font-semibold text-black/90">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00D084] border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3] text-black" />
                  </div>
                  <span>Melatih transisi kata secara natural dari dialek harian ke Bahasa Indonesia akademis dan profesional.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00D084] border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3] text-black" />
                  </div>
                  <span>Menyediakan panggung mingguan yang suportif: setiap peserta wajib memegang mikrofon dan berbicara.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#00D084] border border-black flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3] text-black" />
                  </div>
                  <span>Membangun rasa persaudaraan antar-kampus di Kota Bima dengan semangat belajar bersama tanpa kasta.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_#000] space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg border-2 border-black bg-[#FFD84D] flex items-center justify-center shadow-[2px_2px_0_0_#000]">
              <Languages className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="font-heading font-black text-xl text-black">
              Fasilitasi Bahasa Indonesia Baku
            </h4>
            <p className="text-sm text-black/75 font-medium leading-relaxed">
              Latihan kosakata terstruktur yang dirancang bertahap, mulai dari teknik berbicara 1 menit hingga pidato tematik 5 menit.
            </p>
          </div>

          <div className="rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_#000] space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg border-2 border-black bg-[#38BDF8] flex items-center justify-center shadow-[2px_2px_0_0_#000]">
              <HeartHandshake className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="font-heading font-black text-xl text-black">
              Ekosistem Aman & Zero-Judgement
            </h4>
            <p className="text-sm text-black/75 font-medium leading-relaxed">
              Di sini, salah bicara adalah bagian dari proses. Tidak ada penonton yang mencemooh, yang ada adalah tepuk tangan penyemangat.
            </p>
          </div>

          <div className="rounded-xl border-[3px] border-black bg-white p-6 shadow-[4px_4px_0_0_#000] space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-lg border-2 border-black bg-[#FF6B8B] flex items-center justify-center shadow-[2px_2px_0_0_#000]">
              <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <h4 className="font-heading font-black text-xl text-black">
              Kurikulum Praktik Teruji
            </h4>
            <p className="text-sm text-black/75 font-medium leading-relaxed">
              Bukan hanya teori bicara, melainkan teknik olah napas, kontrol gestur tangan, modulasi volume suara, dan logika argumen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
