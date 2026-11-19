import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { TickerBanner } from "@/components/sections/ticker-banner";
import { ProfileOverview } from "@/components/sections/profile-overview";
import { WhyFortaipubing } from "@/components/sections/why-fortaipubing";
import { FounderStory } from "@/components/sections/founder-story";
import { StructuredCurriculum } from "@/components/sections/structured-curriculum";
import { InteractiveSpeechTimer } from "@/components/sections/interactive-speech-timer";
import { CampusNetwork } from "@/components/sections/campus-network";
import { WeeklyAgenda } from "@/components/sections/weekly-agenda";
import { Testimonials } from "@/components/sections/testimonials";
import { RegistrationSection } from "@/components/sections/registration-section";
import { FAQSection } from "@/components/sections/faq-section";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E7] text-[#121212] selection:bg-[#FFD84D] selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section with Official Logo & Core Badges */}
        <HeroSection />

        {/* High-energy Marquee Ticker */}
        <TickerBanner />

        {/* Profil Resmi Organisasi, Legalitas Akar Rumput & Kontak WhatsApp */}
        <ProfileOverview />

        {/* Latar Belakang & Visi (Bahasa Bima vs Percaya Diri Bahasa Indonesia) */}
        <WhyFortaipubing />

        {/* Kisah Pendiri (Muhamad Kaisar - 25 Okt 2025 - Flores ke Kota Bima) */}
        <FounderStory />

        {/* 4 Pilar Kurikulum Latihan Terstruktur */}
        <StructuredCurriculum />

        {/* Simulator Interaktif: Latihan Bicara 60 Detik */}
        <InteractiveSpeechTimer />

        {/* Jaringan Kampus: STKIP Taman Siswa & Mitra se-Kota Bima */}
        <CampusNetwork />

        {/* Jadwal & Agenda Latihan Tatap Muka */}
        <WeeklyAgenda />

        {/* Testimoni Transformasi Mahasiswa */}
        <Testimonials />

        {/* Form Pendaftaran Anggota Baru (100% Gratis) */}
        <RegistrationSection />

        {/* FAQ & Bantuan Informasi */}
        <FAQSection />
      </main>

      {/* Floating Neobrutalist WhatsApp Widget */}
      <WhatsAppFloat />

      {/* Footer with Cultural Pride & Contacts */}
      <Footer />
    </div>
  );
}
