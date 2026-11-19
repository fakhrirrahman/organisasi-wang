import React from "react";
import { Badge } from "@/components/ui/badge";
import { Mic, Share2, Sparkles } from "lucide-react";

export function PhilosophySection() {
  const values = [
    {
      word: "SPEAK",
      subtitle: "Berani Bersuara",
      badgeColor: "bg-[#FFD84D]",
      icon: <Mic className="w-7 h-7 text-black stroke-[2.5]" />,
      description:
        "Langkah awal adalah keberanian membuka mulut. Melatih lidah agar terbiasa bertutur dalam Bahasa Indonesia yang runut dan jelas, menembus rasa canggung atau gugup akibat kebiasaan dominan bahasa daerah sehari-hari.",
      accent: "Latih Lidah & Hancurkan Ragu",
    },
    {
      word: "SHARE",
      subtitle: "Berbagi Gagasan",
      badgeColor: "bg-[#38BDF8]",
      icon: <Share2 className="w-7 h-7 text-black stroke-[2.5]" />,
      description:
        "Public speaking adalah seni bertukar pikiran. Anggota dilatih menguasai teknik penyampaian agar isi gagasan, wawasan, dan pandangan di bangku kuliah dapat dipahami dengan terang dan jernih oleh audiens.",
      accent: "Penyampaian Runtut & Terstruktur",
    },
    {
      word: "INSPIRE",
      subtitle: "Menginspirasi Sesama",
      badgeColor: "bg-[#00D084]",
      icon: <Sparkles className="w-7 h-7 text-black stroke-[2.5]" />,
      description:
        "Ketika seorang mahasiswa mampu tampil percaya diri di depan umum, ia menjadi teladan positif bagi teman-temannya di kampus Kota Bima untuk tidak lagi minder dan berani unjuk suara di panggung publik.",
      accent: "Menularkan Rasa Percaya Diri",
    },
  ];

  return (
    <section id="filosofi" className="py-16 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <Badge variant="yellow" size="default" rotate="left">
            FILOSOFI & NILAI UTAMA
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-black tracking-tight">
            Makna di Balik Slogan:{" "}
            <span className="bg-[#BAE6FD] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Speak • Share • Inspire
            </span>
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-semibold">
            Tiga pilar semangat yang tertulis pada pita lambang resmi Fortaipubing,
            menjadi panduan bagi setiap mahasiswa yang berlatih.
          </p>
        </div>

        {/* 3 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="rounded-2xl border-[4px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all"
            >
              <div className="space-y-4">
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-14 h-14 rounded-2xl border-[3px] border-black ${val.badgeColor} flex items-center justify-center shadow-[3px_3px_0_0_#000]`}
                  >
                    {val.icon}
                  </div>
                  <span className="text-xs font-black bg-black text-white px-2.5 py-1 rounded-md border border-black">
                    PILAR 0{idx + 1}
                  </span>
                </div>

                {/* Word & Subtitle */}
                <div>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight">
                    {val.word}
                  </h3>
                  <div className="text-xs font-black uppercase tracking-wider text-black/70 mt-0.5">
                    {val.subtitle}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-black/85 font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t-2 border-black/10">
                <span className="text-[11px] font-black uppercase text-black/80 bg-[#FFF8E7] px-2.5 py-1 rounded border border-black/30 block text-center">
                  {val.accent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

