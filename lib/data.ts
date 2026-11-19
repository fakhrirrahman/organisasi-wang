import { Campus, Program, ScheduleItem, Testimonial, FAQItem, SpeechTopic, FounderInfo } from "@/types";

export const CONTACT_INFO = {
  whatsapp: "+62 812-3886-8140",
  whatsappClean: "6281238868140",
  whatsappLink: "https://wa.me/6281238868140?text=Halo%20Fortaipubing%20Bima%2C%20saya%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20latihan%20public%20speaking...",
  email: "fortaipubing.bima@gmail.com",
  location: "Kota Bima, Nusa Tenggara Barat (NTB)",
  baseCamp: "Kompleks Kampus STKIP Taman Siswa Bima",
  founder: "Muhamad Kaisar",
  foundedDate: "25 Oktober 2025",
  tagline: "Speak • Share • Inspire",
};

export const FOUNDER_DATA: FounderInfo = {
  name: "Muhamad Kaisar",
  role: "Inisiator & Pendiri Fortaipubing",
  origin: "NTT, Pulau Flores (Kabupaten Manggarai Timur)",
  foundedDate: "25 Oktober 2025",
  quote: "Kemampuan berbicara bukan bakat dari lahir, tapi otot mental yang harus dilatih. Jangan biarkan gagasan hebatmu terkubur hanya karena takut salah kata.",
  story: [
    "Muhamad Kaisar adalah seorang mahasiswa perantau asal Pulau Flores, Manggarai Timur (NTT) yang menempuh studi di Kota Bima (NTB).",
    "Selama berinteraksi di lingkungan kampus, ia mengamati bahwa banyak rekan mahasiswanya memiliki ide-ide brilian dan wawasan luas, namun sering kali terhambat saat harus berbicara di depan forum umum.",
    "Kebiasaan berkomunikasi harian menggunakan bahasa daerah (Bahasa Bima) membuat banyak mahasiswa canggung, kaku, atau kurang percaya diri saat dituntut bertutur kata dalam Bahasa Indonesia yang runut dan formal di depan audiens.",
    "Melihat tantangan nyata ini, pada 25 Oktober 2025 Kaisar mendirikan Fortaipubing (Forum Training Public Speaking) sebagai wadah akar rumput terstruktur bagi mahasiswa se-Kota Bima untuk berani tampil, saling mengoreksi tanpa takut dihakimi, dan mengasah kepemimpinan lisan."
  ]
};

export const CAMPUSES: Campus[] = [
  {
    name: "STKIP Taman Siswa Bima",
    shortName: "STKIP Tamsis Bima",
    city: "Kota Bima",
    badgeColor: "bg-[#FFD84D]",
    isMainBase: true
  },
  {
    name: "Sekolah Tinggi Ilmu Ekonomi Bima",
    shortName: "STIE Bima",
    city: "Kota Bima",
    badgeColor: "bg-[#38BDF8]"
  },
  {
    name: "Institut Agama Islam Muhammadiyah Bima",
    shortName: "IAIM Bima",
    city: "Kota Bima",
    badgeColor: "bg-[#00D084]"
  },
  {
    name: "Poltekkes Kemenkes Matras Bima",
    shortName: "Poltekkes Bima",
    city: "Kota Bima",
    badgeColor: "bg-[#FF6B8B]"
  },
  {
    name: "Universitas Nggusuwaru",
    shortName: "UNSWA Bima",
    city: "Kota Bima",
    badgeColor: "bg-[#A78BFA]"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: "vocal-confidence",
    title: "1. Vokal & Keberanian Panggung",
    level: "Tahap Dasar",
    duration: "4 Sesi Intensif",
    badge: "Pondasi Mental",
    description: "Menghancurkan demam panggung, gemetar lutut, dan rasa canggung saat memegang mikrofon. Melatih pernapasan diafragma dan artikulasi kata yang tegas.",
    skills: ["Mengatasi Nervous & Blank", "Pernapasan Diafragma", "Volume & Intonasi Suara", "Kontak Mata & Postur"],
    color: "yellow"
  },
  {
    id: "language-transition",
    title: "2. Transisi Bahasa: Daerah ke Bahasa Indonesia",
    level: "Khas Fortaipubing",
    duration: "4 Sesi Praktik",
    badge: "Fokus Utama Bima",
    description: "Program khusus melatih keluwesan beralih dari bahasa sehari-hari (Bahasa Bima) menuju Bahasa Indonesia yang baku, ekspresif, dan enak didengar tanpa canggung.",
    skills: ["Eliminasi Filler Words (e..., anu)", "Pengkayaan Kosakata Formal", "Struktur Kalimat Efektif", "Dialek Netral & Percaya Diri"],
    color: "blue"
  },
  {
    id: "idea-structure",
    title: "3. Struktur Gagasan & Storytelling",
    level: "Tahap Menengah",
    duration: "4 Sesi Analisis",
    badge: "Logika Bicara",
    description: "Belajar menyusun isi pidato atau presentasi agar tidak berputar-putar. Menggunakan metode PREP (Point, Reason, Example, Point) dan storytelling emosional.",
    skills: ["Teknik Hook Pembuka 15 Detik", "Metode P.R.E.P.", "Storytelling Ringkas & Ngena", "Closing Statement Menggetarkan"],
    color: "pink"
  },
  {
    id: "stage-simulation",
    title: "4. Simulasi Panggung & Debat Spontan",
    level: "Tahap Mahir",
    duration: "Sesi Mingguan",
    badge: "Uji Nyali Nyata",
    description: "Panggung terbuka di hadapan audiens mahasiswa lain. Ditantang berbicara spontan (impromptu speech) selama 2 menit dan menjawab pertanyaan kritis.",
    skills: ["Impromptu Speech Tanpa Teks", "Manajemen Audiens Interaktif", "Menghadapi Pertanyaan Sulit", "Evaluasi Konstruktif 360°"],
    color: "green"
  }
];

export const STATS = [
  { number: "25 Okt 2025", label: "Tanggal Berdiri", desc: "Didirikan oleh Muhamad Kaisar" },
  { number: "100+", label: "Mahasiswa Terlatih", desc: "Dari berbagai fakultas di Kota Bima" },
  { number: "5+", label: "Kampus Terkoneksi", desc: "STKIP Taman Siswa & kampus mitra" },
  { number: "100%", label: "Praktik Langsung", desc: "Tanpa teori membosankan, langsung mic on!" }
];

export const SCHEDULES: ScheduleItem[] = [
  {
    day: "Setiap Sabtu",
    time: "15.30 - 17.30 WITA",
    title: "Sesi Latihan Rutin & Bedah Topik",
    type: "Latihan Wajib",
    location: "Kompleks Kampus STKIP Taman Siswa Bima",
    badgeColor: "yellow",
    description: "Latihan teknik vokal, pengucapan kata formal, dan giliran bicara 2 menit untuk setiap anggota."
  },
  {
    day: "Setiap Rabu Malam",
    time: "19.30 - 21.00 WITA",
    title: "Diskusi Gagasan & Speech Clinic Online",
    type: "Review & Sharing",
    location: "Google Meet / Grup WhatsApp Forum",
    badgeColor: "blue",
    description: "Bedah materi presentasi kuliah, review video latihan anggota, dan tips khusus memilih diksi yang kuat."
  },
  {
    day: "Akhir Bulan",
    time: "09.00 - 12.00 WITA",
    title: "Bima Youth Open Mic & Showcase",
    type: "Panggung Bebas",
    location: "Auditorium / Ruang Terbuka Hijau Kota Bima",
    badgeColor: "pink",
    description: "Ajang unjuk kebolehan pidato terbuka di hadapan publik mahasiswa dan masyarakat umum Kota Bima."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Fahrul Rasyid",
    campus: "STKIP Taman Siswa Bima",
    major: "Pendidikan Bahasa & Sastra Indonesia",
    before: "Sering keringat dingin pas presentasi. Karena terbiasa ngomong Mbojo sama teman kos, lidah kaku waktu harus pakai Bahasa Indonesia resmi di depan dosen.",
    after: "Sekarang sudah jadi moderator seminar kampus! Fortaipubing bikin saya paham bahwa salah ngomong itu wajar, yang penting berani mulai.",
    quote: "Fortaipubing adalah panggung paling suportif di Kota Bima. Gak ada yang ngetawain pas kita belibet!",
    tag: "Moderator Seminar",
    color: "yellow"
  },
  {
    id: "2",
    name: "Nurul Aulia",
    campus: "STIE Bima",
    major: "Manajemen Bisnis",
    before: "Kalau disuruh tanya atau berpendapat pas kuliah umum, jantung berdebar kencang sampai akhirnya diam terus.",
    after: "Dapat nilai A untuk presentasi proposal bisnis. Dosen puji intonasi vokal dan ketenangan saya waktu jawab sanggahan.",
    quote: "Metode latihan 2 menitnya gila sih, bikin otot mental berbicara jadi terbentuk otomatis.",
    tag: "Best Presenter",
    color: "blue"
  },
  {
    id: "3",
    name: "Ilham Firmansyah",
    campus: "STKIP Taman Siswa Bima",
    major: "Pendidikan Guru Sekolah Dasar (PGSD)",
    before: "Calon guru tapi takut bicara di depan banyak orang. Suka bingung nyusun kata-kata pembuka.",
    after: "Percaya diri mengajar saat microteaching. Struktur pembuka 15 detiknya sangat membantu membuat audiens fokus.",
    quote: "Kaisar dan teman-teman mentor mengajarkan kami dengan sabar dari nol. Salut buat forum ini!",
    tag: "Calon Guru Inspiratif",
    color: "pink"
  }
];

export const SPEECH_PROMPTS: SpeechTopic[] = [
  {
    id: "t1",
    title: "Pendidikan di Mata Pemuda Bima",
    category: "Pendidikan & Masa Depan",
    difficulty: "Pemula",
    prompt: "Jika kamu diberi waktu 60 detik untuk berpidato di hadapan ribuan mahasiswa Bima, apa satu pesan penting tentang pentingnya percaya diri berbahasa yang ingin kamu sampaikan?",
    tips: "Gunakan pembuka dengan pertanyaan mengejutkan: 'Pernahkah teman-teman merasa ide di kepala penuh, tapi macet di lidah?'"
  },
  {
    id: "t2",
    title: "Dari Bahasa Daerah Menuju Panggung Nasional",
    category: "Sosial & Budaya",
    difficulty: "Menengah",
    prompt: "Mengapa mencintai bahasa daerah (Bahasa Bima) dan mahir berbahasa Indonesia formal bukanlah dua hal yang bertentangan, melainkan kekuatan ganda?",
    tips: "Gunakan pola PREP: Sebutkan Point utama bahwa identitas lokal dan kemahiran nasional bisa saling melengkapi."
  },
  {
    id: "t3",
    title: "Melawan Rasa Takut Gagal",
    category: "Motivasi",
    difficulty: "Pemula",
    prompt: "Ceritakan satu momen ketika kamu merasa sangat gugup, dan bagaimana caramu melangkah melewatinya meskipun tanganmu gemetar.",
    tips: "Fokus pada emosi dan satu kata kunci penutup yang mengajak pendengar untuk berani mencoba."
  },
  {
    id: "t4",
    title: "Pemimpin yang Mendengarkan",
    category: "Kepemimpinan",
    difficulty: "Tantangan",
    prompt: "Seorang pembicara publik hebat bukan hanya orang yang pandai berkata-kata, tetapi juga orang yang peka mendengarkan kebutuhan audiensnya. Buktikan!",
    tips: "Berikan contoh konkret situasi kampus di mana komunikasi dua arah menyelesaikan masalah mahasiswa."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Apa itu Fortaipubing?",
    answer: "Fortaipubing (Forum Training Public Speaking) adalah forum latihan public speaking terstruktur yang berpusat di Kota Bima (NTB). Didirikan pada 25 Oktober 2025 oleh Muhamad Kaisar, forum ini bertujuan melatih keberanian, teknik berbicara, dan rasa percaya diri mahasiswa dalam menyampaikan gagasan di depan publik berbahasa Indonesia.",
    category: "umum"
  },
  {
    question: "Apakah mahasiswa dari luar STKIP Taman Siswa boleh bergabung?",
    answer: "Sangat boleh! Meskipun mayoritas anggota berasal dari STKIP Taman Siswa Bima, Fortaipubing terbuka lebar untuk seluruh mahasiswa dari kampus mana pun di Kota Bima dan sekitarnya (STIE Bima, IAIM Bima, Poltekkes Bima, UNSWA Bima, dll.).",
    category: "keanggotaan"
  },
  {
    question: "Saya sangat pemalu dan sering gugup parah, apakah forum ini cocok untuk saya?",
    answer: "Justru forum ini dibuat khusus untuk Anda! Di Fortaipubing, tidak ada senioritas dan tidak ada penghakiman. Semua anggota pernah mengalami lutut gemetar dan lidah kelu. Kita belajar bersama dari nol lewat simulasi bertahap.",
    category: "latihan"
  },
  {
    question: "Kenapa fokusnya melatih Bahasa Indonesia bagi mahasiswa Bima?",
    answer: "Karena dalam keseharian di Bima, interaksi dominan menggunakan Bahasa Daerah Bima (Nggahi Mbojo). Akibatnya, saat menghadapi seminar proposal, skripsi, debat, atau wawancara kerja yang menuntut Bahasa Indonesia formal, banyak mahasiswa merasa canggung. Kami ingin mahasiswa Bima unggul dan fasih di panggung nasional!",
    category: "umum"
  },
  {
    question: "Apakah ada biaya pendaftaran untuk ikut latihan?",
    answer: "Tidak ada pungutan biaya member alias 100% GRATIS untuk mahasiswa yang berkomitmen belajar! Fortaipubing adalah komunitas akar rumput non-korporat yang digerakkan oleh semangat kebersamaan pemuda mahasiswa.",
    category: "keanggotaan"
  },
  {
    question: "Bagaimana cara bertanya lebih lanjut ke koordinator?",
    answer: "Kamu bisa langsung menghubungi koordinator Fortaipubing melalui WhatsApp resmi di +62 812-3886-8140 untuk konsultasi jadwal, kolaborasi kampus, atau informasi latihan berikutnya.",
    category: "keanggotaan"
  },
  {
    question: "Kapan dan di mana jadwal latihan rutinnya?",
    answer: "Latihan rutin tatap muka diadakan setiap hari Sabtu pukul 15.30 WITA di lingkungan kampus STKIP Taman Siswa Bima, serta sesi online dan bedah materi di pertengahan pekan via Google Meet.",
    category: "latihan"
  }
];
