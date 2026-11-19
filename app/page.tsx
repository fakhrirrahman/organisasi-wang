import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TickerBanner } from "@/components/sections/ticker-banner";
import { AboutSection } from "@/components/sections/about-section";
import { PurposeSection } from "@/components/sections/purpose-section";
import { MembershipSection } from "@/components/sections/membership-section";
import { ContactSection } from "@/components/sections/contact-section";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#121212] selection:bg-[#FFD84D] selection:text-black">
      {/* Header Navigasi */}
      <Navbar />

      {/* Konten Utama Web Profile */}
      <main className="flex-1 flex flex-col">
        {/* Hero Profil: Logo Resmi, Tagline, dan Identitas Utama */}
        <HeroSection />

        {/* Ticker Berjalan */}
        <TickerBanner />

        {/* Profil Pendiri: Muhamad Kaisar & Tanggal Pendirian 25 Okt 2025 */}
        <AboutSection />

        {/* Tujuan Berdirinya Forum & Latar Belakang Bahasa Daerah */}
        <PurposeSection />

        {/* Keanggotaan & Lokasi: STKIP Taman Siswa & Kampus Kota Bima */}
        <MembershipSection />

        {/* Kontak WhatsApp untuk Pertanyaan Lebih Lanjut */}
        <ContactSection />
      </main>

      {/* Icon WA Bulat Melayang di Pojok Kanan Bawah */}
      <WhatsAppButton />

      {/* Footer Profil */}
      <Footer />
    </div>
  );
}
