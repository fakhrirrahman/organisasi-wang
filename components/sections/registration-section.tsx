"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Modal } from "@/components/ui/modal";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    campus: "STKIP Taman Siswa Bima",
    major: "",
    whatsapp: "",
    experience: "Pemula (Gemetar & Canggung)",
    motivation: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!formData.major.trim()) newErrors.major = "Jurusan & semester wajib diisi";
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Nomor WhatsApp aktif wajib diisi";
    } else if (!/^(\+62|62|08)[0-9]{8,13}$/.test(formData.whatsapp.replace(/\s+/g, ""))) {
      newErrors.whatsapp = "Format nomor WhatsApp tidak valid (contoh: 08123456789)";
    }
    if (!formData.motivation.trim()) {
      newErrors.motivation = "Ceritakan sedikit alasanmu ingin belajar bicara";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedName(formData.fullName);
      setIsModalOpen(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
        });
      } catch {
        // fallback
      }
      // Reset form
      setFormData({
        fullName: "",
        campus: "STKIP Taman Siswa Bima",
        major: "",
        whatsapp: "",
        experience: "Pemula (Gemetar & Canggung)",
        motivation: "",
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="gabung" className="py-20 bg-[#FFF8E7] bg-grid-pattern border-b-[4px] border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-14">
          <Badge variant="green" size="default" rotate="left">
            PENDAFTARAN ANGGOTA BARU
          </Badge>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight">
            Ambil Mikrofonmu! Gabung{" "}
            <span className="bg-[#FFD84D] px-2 py-0.5 border-2 border-black inline-block rotate-1 shadow-[3px_3px_0_0_#000]">
              Sekarang Juga
            </span>
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-semibold leading-relaxed">
            100% Gratis untuk seluruh mahasiswa se-Kota Bima. Tidak ada seleksi rumit,
            hanya dibutuhkan kemauan untuk belajar dan berani mencoba.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="rounded-2xl border-[4px] border-black bg-white p-6 sm:p-10 shadow-[8px_8px_0_0_#000] relative">
          <div className="flex items-center justify-between pb-6 mb-6 border-b-2 border-black/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 border border-black" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black" />
              <span className="w-3 h-3 rounded-full bg-green-500 border border-black" />
              <span className="font-heading font-black text-xs uppercase tracking-wider ml-2">
                FORM_REGISTRASI_2026.TXT
              </span>
            </div>
            <span className="text-xs font-black bg-[#BBF7D0] px-2.5 py-1 rounded border border-black text-emerald-900">
              KUOTA TERBUKA
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nama Lengkap */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-black">
                  Nama Lengkap Mahasiswa *
                </label>
                <Input
                  placeholder="Contoh: Muhammad Ilham"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  error={errors.fullName}
                />
              </div>

              {/* Asal Kampus */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-black">
                  Asal Kampus di Bima *
                </label>
                <select
                  value={formData.campus}
                  onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  className="flex h-12 w-full rounded-lg border-[3px] border-black bg-white px-4 py-2 text-sm font-semibold text-black shadow-[3px_3px_0_0_#000] transition-all outline-none focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[5px_5px_0_0_#000]"
                >
                  <option value="STKIP Taman Siswa Bima">STKIP Taman Siswa Bima (Basis Utama)</option>
                  <option value="STIE Bima">STIE Bima</option>
                  <option value="IAI Muhammadiyah Bima">IAI Muhammadiyah Bima</option>
                  <option value="Poltekkes Kemenkes Bima">Poltekkes Kemenkes Bima</option>
                  <option value="Universitas Nggusuwaru">Universitas Nggusuwaru (UNSWA)</option>
                  <option value="Kampus Lainnya di Kota Bima">Kampus Lainnya di Kota Bima</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Program Studi & Semester */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-black">
                  Jurusan / Semester *
                </label>
                <Input
                  placeholder="Contoh: PGSD / Semester 4"
                  value={formData.major}
                  onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                  error={errors.major}
                />
              </div>

              {/* Nomor WhatsApp */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-wider text-black">
                  Nomor WhatsApp Aktif *
                </label>
                <Input
                  placeholder="0812xxxxxxxx"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  error={errors.whatsapp}
                />
              </div>
            </div>

            {/* Level Pengalaman */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-black">
                Seberapa Sering Kamu Berbicara di Depan Umum?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  "Pemula (Gemetar & Canggung)",
                  "Menengah (Kadang Blank)",
                  "Terbiasa (Ingin Lebih Tajam)",
                ].map((exp) => (
                  <button
                    type="button"
                    key={exp}
                    onClick={() => setFormData({ ...formData, experience: exp })}
                    className={`p-3 rounded-lg border-2 border-black text-xs font-black text-left cursor-pointer transition-all ${
                      formData.experience === exp
                        ? "bg-[#FFD84D] shadow-[3px_3px_0_0_#000] translate-x-[-1px] translate-y-[-1px]"
                        : "bg-white hover:bg-neutral-50 shadow-[1px_1px_0_0_#000]"
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Motivasi */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-black">
                Apa Hal yang Paling Ingin Kamu Tingkatkan? *
              </label>
              <Textarea
                placeholder="Contoh: Saya ingin lancar presentasi tugas kuliah tanpa terbata-bata, dan ingin terbiasa memakai Bahasa Indonesia yang formal..."
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                error={errors.motivation}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                variant="default"
                disabled={isSubmitting}
                className="w-full text-base sm:text-lg"
              >
                {isSubmitting ? (
                  "Mengirim Data Pendaftaran..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Pendaftaran & Masuk Grup Latihan
                  </>
                )}
              </Button>
            </div>

            <p className="text-center text-xs font-bold text-black/60 pt-2">
              🔒 Data pendaftaran kamu aman dan digunakan untuk pendataan anggota forum.
            </p>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Pendaftaran Berhasil!"
        headerColor="bg-[#BBF7D0]"
      >
        <div className="space-y-4 text-center">
          <div className="w-16 h-16 rounded-2xl border-[3px] border-black bg-[#FFD84D] mx-auto flex items-center justify-center shadow-[4px_4px_0_0_#000]">
            <CheckCircle2 className="w-10 h-10 text-black stroke-[2.5]" />
          </div>

          <h4 className="font-heading font-black text-2xl text-black">
            Selamat Bergabung, {submittedName}!
          </h4>

          <p className="text-sm font-semibold text-black/80 leading-relaxed">
            Data kamu telah tercatat di basis anggota Fortaipubing.
            Koordinator forum akan segera menghubungimu untuk konfirmasi sesi latihan perdana di Kota Bima.
          </p>

          <div className="p-4 rounded-xl border-2 border-black bg-[#FFFDF0] text-left text-xs font-bold text-black/90 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span><strong>Jadwal Latihan Rutin:</strong> Setiap Sabtu, 15.30 WITA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span><strong>Lokasi:</strong> Kampus STKIP Taman Siswa Bima</span>
            </div>
          </div>

          <div className="pt-2">
            <Button
              size="default"
              variant="default"
              onClick={() => setIsModalOpen(false)}
              className="w-full"
            >
              Tutup & Siap Hadir di Panggung
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
