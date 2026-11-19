import React from "react";
import { Ticker } from "@/components/ui/ticker";
import { PROFILE } from "@/lib/data";

export function TickerBanner() {
  const items = [
    PROFILE.name.toUpperCase(),
    PROFILE.tagline.toUpperCase(),
    PROFILE.fullName.toUpperCase(),
    `PENDIRI: ${PROFILE.founder.name.toUpperCase()}`,
    `EST. ${PROFILE.foundedDate.toUpperCase()}`,
    `${PROFILE.location.city.toUpperCase()} (${PROFILE.location.province.toUpperCase()})`,
    "STKIP TAMAN SISWA BIMA",
  ];

  return (
    <div className="w-full">
      <Ticker items={items} variant="dark" />
    </div>
  );
}
