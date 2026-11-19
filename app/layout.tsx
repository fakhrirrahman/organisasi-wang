import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Fortaipubing — Forum Training Public Speaking Mahasiswa Bima",
  description:
    "Wadah latihan public speaking terstruktur mahasiswa di Kota Bima (NTB). Speak, Share, Inspire! Percaya diri berbahasa Indonesia di depan audiens.",
  keywords: [
    "Fortaipubing",
    "Public Speaking Bima",
    "Mahasiswa STKIP Taman Siswa Bima",
    "Muhamad Kaisar",
    "Komunitas Public Speaking NTB",
    "Latihan Berbicara Bahasa Indonesia"
  ],
  authors: [{ name: "Muhamad Kaisar" }],
  openGraph: {
    title: "Fortaipubing — Speak • Share • Inspire",
    description: "Forum Training Public Speaking Mahasiswa di Kota Bima (NTB)",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#FFF8E7] text-[#121212] antialiased">
        {children}
      </body>
    </html>
  );
}
