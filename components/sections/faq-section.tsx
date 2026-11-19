"use client";

import React, { useState } from "react";
import { FAQS, CONTACT_INFO } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { AccordionItem } from "@/components/ui/accordion";
import { MessageCircle, PhoneCall } from "lucide-react";

type FAQCategory = "semua" | "umum" | "latihan" | "keanggotaan";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<FAQCategory>("semua");

  const filteredFaqs =
    filter === "semua" ? FAQS : FAQS.filter((f) => f.category === filter);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories: { id: FAQCategory; label: string }[] = [
    { id: "semua", label: "Semua Tanya Jawab" },
    { id: "umum", label: "Tentang Forum" },
    { id: "latihan", label: "Metode & Jadwal" },
    { id: "keanggotaan", label: "Syarat Gabung" },
  ];

  return (
    <section id="faq" className="py-20 bg-[#FFFDF0] border-b-[4px] border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <Badge variant="blue" size="default" rotate="left">
            PERTANYAAN SERING DIAJUKAN
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Semua yang Perlu Kamu Tahu tentang{" "}
            <span className="bg-[#BAE6FD] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Fortaipubing
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            Masih ada keraguan sebelum ikut latihan? Temukan jawabannya di bawah ini
            atau hubungi langsung koordinator kami.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-lg border-2 border-black font-heading font-black text-xs uppercase tracking-wider cursor-pointer transition-all ${
                filter === cat.id
                  ? "bg-[#FFD84D] shadow-[3px_3px_0_0_#000] translate-x-[-1px] translate-y-[-1px]"
                  : "bg-white hover:bg-neutral-100 shadow-[1px_1px_0_0_#000]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onToggle={() => toggleAccordion(idx)}
              index={idx}
            />
          ))}
        </div>

        {/* Contact direct link to WhatsApp */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl border-[3px] border-black bg-[#BBF7D0] shadow-[6px_6px_0_0_#000] space-y-3">
          <div className="flex items-center justify-center gap-2 font-heading font-black text-xl text-black">
            <MessageCircle className="w-6 h-6 stroke-[2.5]" />
            Punya Pertanyaan Spesifik yang Belum Terjawab?
          </div>
          <p className="text-sm font-semibold text-black/85 max-w-xl mx-auto">
            Koordinator kami siap membantu menjawab pertanyaan seputar program, jadwal latihan,
            hingga kolaborasi antar kampus di Kota Bima.
          </p>
          <div className="pt-2">
            <a
              href={CONTACT_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-[3px] border-black bg-white font-heading font-black text-sm uppercase tracking-wider shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              Chat WhatsApp Langsung: {CONTACT_INFO.whatsapp} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
