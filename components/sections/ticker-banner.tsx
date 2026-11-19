import React from "react";
import { Ticker } from "@/components/ui/ticker";

export function TickerBanner() {
  const items = [
    "FORTAIPUBING BIMA",
    "SPEAK • SHARE • INSPIRE",
    "LATIH BICARA LANTANG",
    "BASIS: STKIP TAMAN SISWA BIMA",
    "DARI MAHASISWA UNTUK MAHASISWA",
    "BEBAS SALAH & SALING DUKUNG",
    "KOTA BIMA • NTB",
    "DIDIRIKAN MUHAMAD KAISAR",
    "25 OKTOBER 2025",
  ];

  return (
    <div className="w-full">
      <Ticker items={items} variant="dark" />
    </div>
  );
}
