import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="yellow" size="default" rotate="left">
            BUKTI TRANSFORMASI MAHASISWA
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Dari Grogi Jadi Berani: Kata Mereka yang{" "}
            <span className="bg-[#A78BFA] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Telah Berlatih
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Mereka dulu memiliki kegelisahan yang persis sama denganmu: takut salah kata,
            lidah kelu, dan minder. Inilah cerita perubahan mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className="rounded-2xl border-[3px] border-black bg-white p-6 sm:p-7 shadow-[6px_6px_0_0_#000] flex flex-col justify-between hover:-translate-y-1 transition-transform relative"
            >
              {/* Badge sticker */}
              <div className="flex items-center justify-between mb-4">
                <Badge variant={idx === 0 ? "yellow" : idx === 1 ? "blue" : "pink"} size="sm">
                  {item.tag}
                </Badge>
                <Quote className="w-6 h-6 text-black/30" />
              </div>

              {/* Main quote */}
              <div className="space-y-4">
                <p className="font-heading font-black text-lg text-black leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Before vs After comparison */}
                <div className="space-y-2 pt-2 text-xs font-semibold">
                  <div className="p-2.5 rounded-lg border border-red-300 bg-red-50 text-red-950">
                    <strong className="text-red-700 block text-[10px] uppercase">Dulu:</strong>
                    {item.before}
                  </div>
                  <div className="p-2.5 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-950">
                    <strong className="text-emerald-700 block text-[10px] uppercase">Sekarang:</strong>
                    {item.after}
                  </div>
                </div>
              </div>

              {/* Student Bio */}
              <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-black bg-[#121212] text-white flex items-center justify-center font-heading font-black text-sm shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-black text-sm text-black">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-bold text-black/60">
                    {item.campus} • {item.major}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
