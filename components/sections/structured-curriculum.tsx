import React from "react";
import { PROGRAMS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock } from "lucide-react";

export function StructuredCurriculum() {
  const colorMap = {
    yellow: "bg-[#FFD84D]",
    blue: "bg-[#BAE6FD]",
    pink: "bg-[#FED7E2]",
    green: "bg-[#BBF7D0]",
    purple: "bg-[#DDD6FE]",
    orange: "bg-[#FFEDD5]",
  };

  return (
    <section id="program" className="py-20 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="blue" size="default" rotate="left">
            KURIKULUM TERSTRUKTUR
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            4 Pilar Latihan Bertahap di{" "}
            <span className="bg-[#FF6B8B] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Fortaipubing
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Tidak ada yang dibiarkan bingung atau langsung disuruh pidato tanpa bimbingan.
            Semua tahapan dirancang sistematis dari mengolah napas hingga menguasai audiens.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROGRAMS.map((prog, idx) => (
            <div
              key={prog.id}
              className="rounded-2xl border-[3px] border-black bg-white p-6 sm:p-8 shadow-[6px_6px_0_0_#000] hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000] transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Program Top Header */}
                <div className="flex items-center justify-between gap-2 border-b-2 border-black/10 pb-4">
                  <span
                    className={`font-heading font-black text-xs uppercase px-3 py-1 rounded-md border-2 border-black shadow-[2px_2px_0_0_#000] ${colorMap[prog.color]}`}
                  >
                    {prog.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-black/70">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                {/* Title & Level */}
                <div>
                  <span className="text-xs font-black uppercase text-black/60 tracking-wider">
                    {prog.level}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-black mt-0.5">
                    {prog.title}
                  </h3>
                </div>

                <p className="text-sm text-black/80 font-medium leading-relaxed">
                  {prog.description}
                </p>

                {/* Skills Mastered */}
                <div className="pt-2">
                  <div className="text-xs font-black uppercase tracking-wider text-black/70 mb-2.5">
                    Keterampilan yang Ditargetkan:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {prog.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 p-2 rounded-lg border border-black/20 bg-[#FFFDF0] text-xs font-bold text-black"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Step Indicator */}
              <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-black">
                <span className="text-black/60 uppercase">Tahapan #{idx + 1} dari 4</span>
                <span className="bg-[#121212] text-white px-2 py-0.5 rounded text-[10px]">
                  TERMASUK SIMULASI MIC
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-xl border-[3px] border-black bg-[#FFD84D] p-6 shadow-[6px_6px_0_0_#000] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-heading font-black text-xl text-black">
              Ingin langsung menguji kesiapan bicaramu?
            </h4>
            <p className="text-sm font-semibold text-black/80">
              Coba simulator latihan bicara 60 detik di bawah ini dengan topik acak!
            </p>
          </div>
          <a href="#simulator" className="shrink-0">
            <button className="px-5 py-3 rounded-lg border-2 border-black bg-black text-white font-heading font-black text-xs uppercase tracking-wider shadow-[3px_3px_0_0_#FFF] hover:bg-neutral-800 transition-all cursor-pointer">
              Buka Simulator 60 Detik →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
