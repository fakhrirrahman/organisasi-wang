export interface ProfileData {
  name: string;
  fullName: string;
  tagline: string;
  foundedDate: string;
  founder: {
    name: string;
    origin: string;
    status: string;
  };
  location: {
    city: string;
    province: string;
  };
  membership: {
    dominant: string;
    description: string;
  };
  purpose: {
    coreGoal: string;
    backgroundReason: string;
  };
  contact: {
    whatsapp: string;
    whatsappClean: string;
    whatsappLink: string;
  };
}

export const PROFILE: ProfileData = {
  name: "Fortaipubing",
  fullName: "Forum Training Public Speaking",
  tagline: "Speak • Share • Inspire",
  foundedDate: "25 Oktober 2025",
  founder: {
    name: "Muhamad Kaisar",
    origin: "NTT, Pulau Flores, Kab. Manggarai Timur",
    status: "Mahasiswa"
  },
  location: {
    city: "Kota Bima",
    province: "Nusa Tenggara Barat (NTB)"
  },
  membership: {
    dominant: "Mahasiswa STKIP Taman Siswa Bima",
    description: "Mayoritas anggota di dalam forum didominasi oleh kalangan mahasiswa STKIP Taman Siswa Bima, namun terbuka juga bagi mahasiswa dari kampus-kampus lain yang ada di Kota Bima."
  },
  purpose: {
    coreGoal: "Melatih public speaking atau cara berbicara seseorang melalui program terstruktur, dirancang untuk membekali seseorang dengan keterampilan, teknik, dan rasa percaya diri agar menyampaikan gagasan yang jelas di depan audiens.",
    backgroundReason: "Didirikan karena Muhamad Kaisar melihat adanya keterbatasan dari teman-temannya di bangku kuliah dalam berbahasa Indonesia dikarenakan mereka sering menggunakan Bahasa Bima / Bahasa daerah dalam kehidupan sehari-hari."
  },
  contact: {
    whatsapp: "+62 812-3886-8140",
    whatsappClean: "6281238868140",
    whatsappLink: "https://wa.me/6281238868140?text=Halo%20Fortaipubing%20Bima%2C%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20forum%20public%20speaking..."
  }
};
