import React from "react";
import { SCHEDULES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";

export function WeeklyAgenda() {
  const colorMap = {
    yellow: "bg-[#FFD84D]",
    blue: "bg-[#BAE6FD]",
    pink: "bg-[#FED7E2]",
    green: "bg-[#BBF7D0]",
  };

  return (
    <section id="jadwal" className="py-20 bg-[#FFF8E7] bg-dots-pattern border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="orange" size="default" rotate="right">
            AGENDA & WAKTU LATIHAN
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Jadwal Latihan Rutin di{" "}
            <span className="bg-[#00D084] px-2 py-0.5 border-2 border-black inline-block rotate-[-1deg] shadow-[3px_3px_0_0_#000]">
              Kota Bima
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Konsistensi adalah kunci mengasah lidah dan mental. Temukan jadwal yang pas
            dan hadiri sesinya setiap pekan.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCHEDULES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-heading font-black text-xs uppercase px-3 py-1 rounded-md border-2 border-black shadow-[2px_2px_0_0_#000] ${colorMap[item.badgeColor]}`}
                  >
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-bold text-black/60">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.day}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-heading font-black text-xl text-black">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-800 mt-2 bg-amber-50 p-2 rounded-lg border border-amber-300">
                    <Clock className="w-4 h-4 shrink-0 text-amber-700" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <p className="text-sm text-black/75 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Location */}
                <div className="pt-2 flex items-start gap-2 text-xs font-bold text-black/85 bg-[#FFFDF0] p-3 rounded-lg border border-black/15">
                  <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Status */}
              <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-black">
                <span className="text-emerald-700">● TERBUKA UNTUK ANGGOTA</span>
                <a href="#gabung" className="text-black underline hover:text-blue-600">
                  Ikut Sesi Ini →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
