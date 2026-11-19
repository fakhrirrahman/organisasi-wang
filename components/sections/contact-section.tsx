import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/data";
import { MessageCircle, PhoneCall, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontak" className="py-16 bg-[#FFF8E7] border-b-[4px] border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="max-w-xl mx-auto space-y-3 mb-10">
          <Badge variant="yellow" size="default" rotate="left">
            INFORMASI & PERTANYAAN
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-black tracking-tight">
            Ingin Bertanya Lebih Lanjut?
          </h2>
          <p className="text-sm sm:text-base text-black/75 font-semibold">
            Bagi yang ingin mengetahui informasi lebih lanjut mengenai forum atau kegiatan Fortaipubing,
            dapat langsung menghubungi nomor WhatsApp resmi di bawah ini.
          </p>
        </div>

        {/* Contact Card */}
        <div className="rounded-2xl border-[4px] border-black bg-white p-6 sm:p-10 shadow-[6px_6px_0_0_#000] max-w-xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl border-[3px] border-black bg-[#BBF7D0] mx-auto flex items-center justify-center shadow-[3px_3px_0_0_#000]">
            <PhoneCall className="w-8 h-8 text-black" />
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-wider text-black/60">
              WhatsApp Resmi Fortaipubing
            </span>
            <div className="font-heading font-black text-2xl sm:text-3xl text-black mt-1">
              {PROFILE.contact.whatsapp}
            </div>
            <p className="text-xs text-black/70 font-semibold mt-1">
              {PROFILE.location.city}, {PROFILE.location.province}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={PROFILE.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto"
            >
              <Button size="lg" variant="default" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-1" />
                Hubungi via WhatsApp
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

