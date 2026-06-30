'use client';

import React, { useState } from 'react';
import { 
  BookOpen, Layers, Cpu, Radio, Heart, Sparkles, Sun, Moon, 
  Play, ChevronRight, CheckCircle2, XCircle, MonitorPlay, User, Award, Lock, AlertTriangle
} from 'lucide-react';
import AIPrompter from '@/components/AIPrompter';

const fileMateriSistem = [
  {
    id: "01",
    label: "Dasar Kreativitas",
    judul: "Kluster 01: Fondasi & Paradigma Kreativitas Digital",
    tagline: "Taksonomi Kreasi Konten, Pergeseran Konsumsi, dan Integritas Akademik",
    videoUrl: "https://youtu.be/iaxmNuV1wtA?si=uzpeQt6XF72NR5um", 
    konten: "Kreativitas digital dalam ranah Pendidikan Teknik Informatika (PTI) bukan sebatas penguasaan operasional atas software grafis, melainkan sebuah kompetensi kognitif instruksional tingkat tinggi. Memasuki era Web3, desentralisasi data, dan kehadiran Generative AI, batasan tradisional antara penikmat informasi pasif (consumers) dan pencipta pesan aktif (producers) telah lebur sepenuhnya menjadi konsep 'Prosumer'. Mahasiswa PTI dituntut tidak hanya mampu menyerap informasi, tetapi juga mereduksi materi riset ilmiah yang kaku menjadi deliverable media yang adaptif, interaktif, transparan, dan berdaya pikat tinggi tanpa mendegradasi bobot keilmuannya. Proses ini melibatkan dekonstruksi pesan, analisis kebutuhan audiens (user persona), serta pemilihan saluran distribusi media yang tepat.",
    subPoin: [
      { t: "1.1 Integritas & Kebaruan Struktural", d: "Menghasilkan karya digital wajib bersandar pada etika penemuan. Mahasiswa harus memahami garis demarkasi yang tegas antara pencarian inspirasi (moodboarding/benchmarking) dengan tindakan plagiarisme visual atau pencurian kekayaan intelektual (HAKI)." },
      { t: "1.2 Akselerasi Media Instruksional", d: "Mengubah teks kurikulum konvensional yang padat menjadi infografis modular, e-modul interaktif, atau media simulasi mandiri yang mempercepat retensi memori dan pemahaman peserta didik." },
      { t: "1.3 Nilai Guna Konten Kontekstual", d: "Penciptaan produk kreatif harus berorientasi pada pemecahan masalah riil masyarakat (problem-solving). Contohnya meliputi pembuatan panduan infografis keamanan siber untuk lansia atau perancangan landing page digitalisasi UMKM lokal." }
    ]
  },
  {
    id: "02",
    label: "Desain UI/UX",
    judul: "Kluster 02: Metodologi Desain Atomik & Arsitektur Figma",
    tagline: "Sains Visual Brad Frost, Komposisi Reusable Komponen, dan Standardisasi Developer",
    // VIDEO BARU YANG KAMU BERIKAN UNTUK MODUL 2
    videoUrl: "https://youtu.be/R2Bsn1WJkUw?si=_4iCAHdvlEj-T9Azhttps://youtu.be/R2Bsn1WJkUw?si=_4iCAHdvlEj-T9Az",
    konten: "Metodologi Desain Atomik (Atomic Design) yang dicetuskan oleh Brad Frost dan Dan Maul merupakan sebuah pendekatan struktural yang merevolusi cara desainer UI/UX membangun sistem desain produk digital yang konsisten, berulang (repeatable), dan scalable. Alih-alih merancang halaman web secara terisolasi dari nol, metodologi ini mengajarkan desainer untuk memecah seluruh komponen antarmuka menyerupai bagan tabel periodik kimia: dimulai dari unsur terkecil yang tidak bisa didekonstruksi lagi (Atoms), digabungkan menjadi kesatuan unit fungsional (Molecules), diorganisasikan ke dalam blok antarmuka kompleks yang mandiri (Organisms), diterapkan pada tata letak cetak biru tanpa konten asli (Templates), hingga menghasilkan representasi produk final yang berisi data riil (Pages). Penerapan sistem ini di Figma secara konsisten mempermudah kolaborasi lintas fungsi karena struktur penamaan dan pewarisan aset digital menjadi sejalan dengan arsitektur koding pengembang software.",
    subPoin: [
      { t: "2.1 Struktur Unsur Atoms & Hierarki Dasar", d: "Memahami Atoms sebagai komponen paling mendasar seperti teks label tunggal, ikon mentah, bidang input kosong, atau kontainer persegi. Menyatukan elemen dasar ini secara konsisten sebelum beranjak ke tahap makro." },
      { t: "2.2 Formasi Rekayasa Molecules & Organisms", d: "Mengombinasikan beberapa atom (misal: ikon makanan, teks nama, dan tombol tambah) menjadi satu Molecule fungsional, lalu menyusun rangkaian Molecule tersebut ke dalam sebuah kontainer grid statis (Organism) yang siap pakai." },
      { t: "2.3 Efisiensi Pipeline Kolaborasi Developer", d: "Menyamakan ukuran standar bounding box (misal: menyamakan skala ikon menjadi 26x26 atau 30x30 piksel) serta menggunakan Auto-Layout agar susunan komponen responsif dan tidak membingungkan programmer saat proses koding layout." }
    ]
  },
  {
    id: "03",
    label: "Pemodelan 3D",
    judul: "Kluster 03: Rekayasa Aset 3 Dimensi & Rendering Engine",
    tagline: "Pipeline Blender, Optimalisasi Poligon WebGL, dan Teori Pencahayaan Fisik",
    videoUrl: "https://youtu.be/Om4vQgsyv5c?si=8SDs4s6ikB-FF-i5",
    konten: "Eksplorasi ruang koordinat kartesian tiga dimensi (X, Y, Z) menggunakan Blender membuka potensi tak terbatas dalam memvisualisasikan media simulasi edukatif yang imersif. Pipeline pengerjaan aset 3D untuk kebutuhan web modern menuntut efisiensi tinggi pada tingkat poligon (Low-Poly Modeling). Hal ini krusial agar aset grafis tersebut ringan saat dimuat secara real-time oleh rendering engine berbasis browser seperti WebGL atau Three.js tanpa membebani kartu grafis perangkat pengguna. Proses kemudian dilanjutkan dengan pemetaan tekstur (UV Unwrapping) dan manipulasi pencahayaan berbasis kalkulasi matematis gelombang cahaya.",
    subPoin: [
      { t: "3.1 Matriks Three-Point Lighting", d: "Konfigurasi presisi pencahayaan studio: Key Light sebagai sumber cahaya utama penentu karakter objek, Fill Light ditempatkan berlawanan untuk mereduksi kepekatan bayangan, dan Back Light memancar dari belakang untuk memunculkan garis rim light pemisah objek dari latar belakang." },
      { t: "3.2 PBR Node Shader Engineering", d: "Menyusun rangkaian logika Node material berbasis Physically Based Rendering (PBR). Mengatur nilai Roughness, Metallic, Specular, dan Transmission untuk menyimulasikan tekstur material dunia nyata seperti kaca glassmorphic, plastik polimer, atau kuningan." },
      { t: "3.3 Skeletal Rigging & Interpolasi", d: "Menanamkan struktur tulang siber (Armature/Bones) ke dalam objek mesh 3D, melakukan pembobotan vertex (Weight Painting), dan mengatur keyframe animasi guna menciptakan pergerakan translasi dan rotasi yang organis." }
    ]
  },
  {
    id: "04",
    label: "Etika AI",
    judul: "Kluster 04: Prompt Engineering Formal & Etika Artificial Intelligence",
    tagline: "Kerangka Kerja RCTC, Mitigasi Halusinasi Data, dan Atribusi Regulasi Lisensi",
    videoUrl: "https://youtu.be/tvF7_fO8dJY?si=FTPIl1mmdA3c-zNC",
    konten: "Kecerdasan Buatan Generatif (Generative AI) wajib diposisikan secara proporsional sebagai partner akselerasi (co-pilot) kreatif, bukan sebagai pengganti nalar kritis dan logika pemecahan masalah mahasiswa. Penguasaan Prompt Engineering melalui kerangka kerja terstruktur memungkinkan penciptaan aset mikro-konten, draf teks instruksional, atau purwarupa baris kode pemrograman secara cepat dan presisi. Etika pemanfaatan AI mengharuskan mahasiswa memahami batasan bias algoritma, validasi kebenaran output (anti-halusinasi), serta transparansi akademis dalam melaporkan penggunaan tools AI pada karya ilmiah maupun praktikum.",
    subPoin: [
      { t: "4.1 Formulasi Prompting RCTC", d: "Menyusun instruksi AI yang presisi dengan memuat empat elemen wajib: Role (menetapkan peran spesifik AI), Context (latar belakang batasan situasi), Task (tugas inti yang harus dieksekusi), dan Constraint (batasan ketat format atau larangan output)." },
      { t: "4.2 Metodologi Few-Shot Prompting", d: "Teknik rekayasa instruksi dengan menyertakan beberapa pasang contoh input-output konkret ke dalam perintah sebelum AI mengeksekusi tugas akhir. Strategi ini terbukti efektif meminimalisasi deviasi data atau kesalahan logika AI." },
      { t: "4.3 Regulasi Lisensi & Atribusi HAKI", d: "Memahami kepatuhan hukum internasional terkait penggunaan karya komparatif, hak cipta gambar hasil generator AI, serta implementasi atribusi lisensi Creative Commons (CC BY-NC-SA) untuk pendistribusian media pembelajaran." }
    ]
  },
  {
    id: "05",
    label: "Wellbeing",
    judul: "Kluster 05: Kesejahteraan Digital & Aksesibilitas Inklusif",
    tagline: "Manajemen Siklus Dopamin, Kelelahan Kognitif, dan Desain Web Inklusif",
    videoUrl: "https://youtu.be/rxW8AAxD-HM?si=uHJBbWl6VOss7qqD",
    konten: "Produktivitas kreativitas digital yang berkelanjutan wajib diimbangi dengan kesadaran penuh terhadap Kesejahteraan Digital (Digital Wellbeing). Sebagai calon profesional IT dan pengembang media, mahasiswa rentan mengalami sindrom burnout dan kelelahan kognitif (cognitive fatigue) akibat paparan layar gawai berlebih (screen-time) serta distraksi konstan dari algoritma retensi media sosial. Selain menjaga kesehatan mental diri, etika pengembang software modern juga menuntut penciptaan produk teknologi yang inklusif, ramah aksesibilitas, dan tidak mendeskreditkan kelompok pengguna tertentu.",
    subPoin: [
      { t: "5.1 Mitigasi Dopamine Loop", d: "Menganalisis arsitektur platform digital yang dirancang memicu adiksi (infinite scroll, push notification), serta menerapkan teknik pembatasan konsumsi informasi acak demi menjaga kejernihan fokus kreasi." },
      { t: "5.2 Standardisasi Aksesibilitas Web", d: "Merancang website pembelajaran yang ramah bagi penyandang disabilitas (aksesibilitas inklusif), seperti menyediakan teks alternatif (alt text) untuk screen reader tuna netra dan sistem navigasi keyboard intuitif tanpa mouse." },
      { t: "5.3 Ergonomis & Penjadwalan Fokus", d: "Menerapkan teknik manajemen waktu formal (seperti metode Pomodoro) dan pengaturan tata ruang kerja fisik yang ergonomis untuk meminimalisasi risiko cedera fisik (RSI) dan ketegangan otot mata." }
    ]
  }
];

// BANK KUIS MATRIKS DISESUAIKAN PENUH BERDASARKAN TOPIK TIAP MODUL YANG RELEVAN
const bankKuisSistem: {
  [key: string]: Array<{
    id: number;
    soal: string;
    opsi: string[];
    jawaban: number;
    analisis: string;
  }>;
} = {
  "01": [
    { id: 1, soal: "Berdasarkan video observasi era digital, selain sebagai alat komunikasi dan distribusi, internet memberikan pengaruh besar dalam hal...", opsi: ["Menurunkan harga produksi barang fisik", "Mengubah mentalitas dan pola pandang hidup manusia (Mentality)", "Menghapus kebutuhan riset pemasaran", "Memperpendek rantai pasok agrikultur"], jawaban: 1, analisis: "Internet secara mendasar mengubah pola pikir, ekspektasi, konsep diri, dan cara pandang seseorang dalam kehidupan sehari-hari." },
    { id: 2, soal: "Tahapan perkembangan paradigma pemasaran setelah era 'Product-Oriented' dan 'Consumer-Oriented' menuju era baru saat ini adalah...", opsi: ["System-Oriented Marketing", "Database-Oriented Marketing", "Moment-Oriented Marketing", "AI-Driven Marketing"], jawaban: 2, analisis: "Moment-Oriented Marketing berfokus pada menangkap consumption goals konsumen pada momen-momen spesifik yang dipicu oleh media digital." },
    { id: 3, soal: "Melihat konsumen sebagai entitas utuh yang terhubung dalam 'Network of Associations' bersama komunitas, produk, dan properti disebut...", opsi: ["Atomic Perspective", "Molecular Perspective", "Isolated Analysis", "Demographic Clustering"], jawaban: 1, analisis: "Molecular Perspective memandang konsumen secara kontekstual di dalam jaringan ekosistem interaksi sosial dan lingkungannya, bukan objek terpisah (Atomic)." },
    { id: 4, soal: "Mengapa era digital mempermudah jalannya proses sirkuit pemasaran 'Moment-Oriented'?", opsi: ["Karena menyediakan akses instan terhadap consumption moment", "Sebab internet menghapus sistem pajak penjualan regional", "Karena biaya iklan di koran cetak meningkat tajam", "Sebab seluruh konsumen beralih menggunakan mata uang kripto"], jawaban: 0, analisis: "Alat digital menyediakan instrumen untuk mendeteksi, menganalisis, serta menginduksi pembelian tepat pada momen konsumsi secara real-time." },
    { id: 5, soal: "Aktivitas memotret makanan terlebih dahulu sebelum dikonsumsi untuk dibagikan ke media sosial merupakan contoh perubahan perilaku pada...", opsi: ["Product Durability", "Price Elasticity", "Consumption Goals (Tujuan Konsumsi)", "Supply Chain Matrix"], jawaban: 2, analisis: "Eksposur internet mengubah tujuan konsumsi; makan tidak lagi sekadar pemenuhan biologis lapar melainkan kebutuhan eksistensi atau pemenuhan gol sosial." }
  ],
  "02": [
    { id: 1, soal: "Berdasarkan rujukan utama sistem produk desain visual, siapakah tokoh yang pertama kali mencetuskan dan menulis metodologi Atomic Design?", opsi: ["Dan Maul", "Brad Frost", "Sandhika Galih", "Grant Abbitt"], jawaban: 1, analisis: "Brad Frost adalah tokoh foundational yang menanamkan etos kerja sistem desain produk visual melalui buku Atomic Design miliknya." },
    { id: 2, soal: "Dalam video penjelasan implementasi figma, mengapa penentuan ukuran bounding box ikon (misal dikunci ke 26x26 atau 30x30) sangat penting sebelum dijadikan komponen?", opsi: ["Agar warna ikon otomatis berubah saat mode gelap", "Untuk mempermudah dan menjaga kerapian susunan layout koding saat diekspor oleh Developer", "Supaya file figma otomatis tersimpan ke cloud drive", "Agar jumlah poligon mesh berkurang setengahnya"], jawaban: 1, analisis: "Ukuran aset ikon yang tidak seragam (berantakan) di Figma akan mempersulit developer saat menyusun kode layout antarmuka." },
    { id: 3, soal: "Kombinasi antara satu elemen kotak kontainer, teks judul, ikon, dan button yang bersatu membentuk kesatuan baris bar belanja dikategorikan sebagai...", opsi: ["Atoms", "Molecules", "Organisms", "Templates"], jawaban: 1, analisis: "Molecules terbentuk dari beberapa gabungan objek atom yang saling terikat membentuk fungsionalitas moderat baru." },
    { id: 4, soal: "Manakah tingkatan hierarki dalam Atomic Design yang berperan sebagai cetak biru (blueprint) halaman tanpa menyertakan data atau konten asli?", opsi: ["Atoms", "Organisms", "Templates", "Pages"], jawaban: 2, analisis: "Templates bertindak sebagai struktur layout makro yang menentukan penempatan organisme sebelum diisi dengan teks data riil di tingkat Pages." },
    { id: 5, soal: "Berdasarkan video tutorial, kapan waktu terbaik desainer disarankan untuk mulai mengunci rancangannya ke dalam sistem komponen master?", opsi: ["Di awal tahap awal sketsa coretan kasar", "Ketika layout skema alur interaksi dan ukuran elemen visual sudah divalidasi pasti", "Sebelum melakukan riset analisis kebutuhan pengguna", "Saat laptop pengembang mengalami lag memori"], jawaban: 1, analisis: "Membuat komponen terlalu dini justru memperlambat eksplorasi ide. Sistem komponen master dikunci setelah konsep visual divalidasi." }
  ],
  "03": [
    { id: 1, soal: "Mengapa teknik low-poly modeling dikombinasikan dengan pembatasan jumlah poligon sangat direkomendasikan dalam pembuatan aset 3D Blender untuk website pembelajaran interaktif?", opsi: ["Agar objek menghasilkan efek kilau material yang lebih realistis saat terkena berkas cahaya", "Untuk memperkecil ukuran file kompresi dan meringankan beban rendering engine WebGL pada web browser", "Karena teknik low-poly tidak memerlukan konfigurasi Node PBR Shader sama sekali", "Agar proses penulangan (skeletal rigging) objek mekanik dapat berjalan secara otomatis"], jawaban: 1, analisis: "Aset 3D di web dijalankan secara real-time. Mengurangi jumlah poligon (low-poly) sangat krusial agar performa web tetap lancar tanpa membebani memori perangkat." },
    { id: 2, soal: "Dalam setup pencahayaan Three-Point Lighting di Blender, lampu yang diletakkan di bagian belakang objek dengan arah menghadap kamera bertugas untuk...", opsi: ["Menghapus seluruh bayangan tajam yang dihasilkan oleh lampu utama", "Menerangi sisi gelap objek agar detail tekstur material terlihat jelas", "Menciptakan rim light (garis tepi cahaya) untuk memisahkan siluet objek dari latar belakang", "Menentukan warna dominan atmosfer pada lingkungan simulasi"], jawaban: 2, analisis: "Back Light memancarkan cahaya dari belakang objek menuju kamera, memunculkan garis tepi tipis (rim light) yang mempertegas dimensi spasial objek agar terpisah dari kegelapan latar belakang." },
    { id: 3, soal: "Proses membuka kulit permukaan objek 3D menjadi koordinat peta 2D agar bisa diberi tekstur gambar secara presisi dinamakan...", opsi: ["Skeletal Rigging", "UV Unwrapping", "Weight Painting", "Vertex Extruding"], jawaban: 1, analisis: "UV Unwrapping adalah proses memetakan koordinat 3D (X,Y,Z) menjadi permukaan datar 2D (U,V) agar pemetaan tekstur tekstual berjalan rapi." },
    { id: 4, soal: "Node PBR (Physically Based Rendering) Shader pada Blender digunakan desainer objek untuk...", opsi: ["Mengatur gerakan animasi tulang siber", "Menghitung jumlah poligon secara otomatis", "Menyimulasikan reaksi tekstur material nyata terhadap pantulan cahaya fisis", "Mengekspor kode program langsung ke framework Laravel"], jawaban: 2, analisis: "PBR Shader mengatur atribut fisis seperti Roughness dan Metallic agar objek tampak realistis seperti material asli di dunia nyata." },
    { id: 5, soal: "Proses menanamkan susunan tulang digital (Armature) ke dalam jaring objek (Mesh) 3D untuk kebutuhan animasi disebut...", opsi: ["Rigging", "Rendering", "Sculpting", "Texturing"], jawaban: 0, analisis: "Rigging adalah pipeline penulangan objek 3D agar bagian-bagian tertentu dari model dapat digerakkan secara beraturan." }
  ],
  "04": [
    { id: 1, soal: "Manakah komponen instruksi Prompt Engineering yang bertugas membatasi format, gaya bahasa, atau melarang AI mengeluarkan output informasi tertentu?", opsi: ["Role (Peran AI)", "Context (Latar Belakang Skenario)", "Task (Tugas Inti)", "Constraint (Batasan / Kendala)"], jawaban: 3, analisis: "Constraint bertindak sebagai filter regulasi instruksi yang melarang atau membatasi AI agar tidak memproduksi output di luar parameter aman." },
    { id: 2, soal: "Bagaimana cara kerja teknik Few-Shot Prompting untuk meminimalisasi kesalahan logika atau deviasi jawaban pada Generative AI?", opsi: ["Memberikan ancaman pemutusan server jika AI salah menjawab", "Menyertakan beberapa pasang contoh input-output konkret sebelum instruksi utama dieksekusi", "Meminta AI mencari jawaban di mesin pencari secara berulang-ulang", "Menggunakan bahasa pemrograman biner tingkat rendah"], jawaban: 1, analisis: "Few-shot prompting memberikan referensi contoh pola jawaban kepada AI sehingga hasil akhir jauh lebih akurat dan terstruktur konsisten." },
    { id: 3, soal: "Kondisi di mana Generative AI menghasilkan output informasi palsu yang terkesan meyakinkan namun secara ilmiah salah total dinamakan...", opsi: ["Algorithm Bias", "Data Halusinasi (Hallucination)", "Model Overfitting", "Token Bleeding"], jawaban: 1, analisis: "Halusinasi AI adalah fenomena di mana model bahasa menghasilkan klaim atau data fiktif karena kelemahan keterbatasan basis data probabilitasnya." },
    { id: 4, soal: "Lisensi Creative Commons tipe 'CC BY-NC-SA' mengizinkan orang lain mengunduh dan membagikan karya kita dengan syarat...", opsi: ["Wajib membayar royalti penuh secara komersial", "Mencantumkan atribusi nama, bukan untuk tujuan komersial, dan wajib membagikan ulang dengan lisensi serupa", "Boleh mengubah nama pembuat asli secara bebas", "Hanya boleh dibuka melalui komputer berspesifikasi Linux"], jawaban: 1, analisis: "CC BY (Atribusi), NC (Non-Komersial), SA (Share-Alike) mewajibkan penyebaran media edukasi secara terbuka non-profit dengan mencantumkan nama kreator awal." },
    { id: 5, soal: "Posisi etis yang paling benar bagi seorang mahasiswa PTI dalam memanfaatkan AI dalam lingkungan akademis adalah...", opsi: ["Menjadikan AI sebagai pengganti nalar kritis dan menyalin mentah semua tugas kode", "Memosisikan AI sebagai partner co-pilot akselerasi kreatif dengan tetap memvalidasi kebenaran data secara kritis", "Melarang mutlak penggunaan AI karena melanggar hukum komputer", "Menggunakan AI hanya jika dosen pengampu tidak mengawasi kelas"], jawaban: 1, analisis: "AI adalah alat bantu penunjang produktivitas. Logika inti, pemecahan masalah akhir, dan orisinalitas ide tetap berada sepenuhnya di tangan mahasiswa." }
  ],
  "05": [
    { id: 1, soal: "Mengapa penerapan prinsip kontras warna teks yang tinggi dan teks alternatif (alt text) pada gambar sangat penting dalam etika kreativitas digital?", opsi: ["Agar ukuran file gambar yang diunggah ke hosting server menjadi lebih ringan", "Untuk memenuhi standar aksesibilitas agar karya inklusif dan dapat diakses dengan baik oleh penyandang disabilitas", "Agar algoritma search engine otomatis rekomendasikan karya kita ke halaman utama", "Karena aturan tersebut diwajibkan oleh penyedia lisensi hak cipta Creative Commons"], jawaban: 1, analisis: "Membuat karya digital yang inklusif (Web Accessibility) memastikan bahwa pengguna dengan keterbatasan, seperti buta warna atau gangguan penglihatan, tetap dapat menyerap isi bahan ajar dengan setara." },
    { id: 2, soal: "Siklus adiksi psikologis di platform digital yang dipicu oleh fitur seperti infinite scroll dan push notification yang dapat menurunkan fokus kreatif mahasiswa disebut...", opsi: ["Cognitive Fatigue", "Dopamine Loop", "Repetitive Strain Injury", "Burnout Syndrome"], jawaban: 1, analisis: "Dopamine loop membuat pengguna internet terus menerus mencari kepuasan instan lewat notifikasi baru, memicu penurunan rentang konsentrasi (attention span)." },
    { id: 3, soal: "Alat bantu berupa software pembaca layar yang memproses teks digital menjadi suara untuk membantu pengguna tuna netra mengakses website disebut...", opsi: ["Web Framework Renderer", "Screen Reader", "Voice Command Compiler", "Alt-Text Generator"], jawaban: 1, analisis: "Screen Reader bertugas membaca susunan teks (termasuk Alt Text pada gambar) untuk menyampaikan isi informasi website kepada penyandang tuna netra." },
    { id: 4, soal: "Metode manajemen waktu formal yang membagi waktu kerja menjadi interval fokus penuh (misal 25 menit) diikuti jeda istirahat singkat dinamakan...", opsi: ["Agile Scrum Methodology", "Teknik Pomodoro", "Time Boxing Framework", "Siklus Waterfall"], jawaban: 1, analisis: "Teknik Pomodoro sangat efektif mengurangi kelelahan kognitif (cognitive fatigue) dan menjaga stamina mental saat di depan komputer." },
    { id: 5, soal: "Cedera fisik pada otot atau saraf akibat gerakan berulang dan postur tubuh statis yang salah saat bekerja di depan laptop dalam waktu lama dinamakan...", opsi: ["Repetitive Strain Injury (RSI)", "Computer Vision Syndrome", "Insomnia Akut", "Dopamine Crash"], jawaban: 0, analisis: "RSI (seperti Carpal Tunnel Syndrome) dipicu oleh penggunaan mouse atau keyboard dengan posisi pergelangan tangan yang tidak ergonomis." }
  ]
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeId, setActiveId] = useState("01");
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [isKuisSubmitted, setIsKuisSubmitted] = useState(false);
  const [nilaiKuis, setNilaiKuis] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [modulLulus, setModulLulus] = useState<string[]>([]);
  const [showWarning, setShowWarning] = useState<string | null>(null);

  const gantiModulMateri = (id: string, indexModul: number) => {
    const idModulSebelumnya = fileMateriSistem[indexModul - 1]?.id;

    if (indexModul > 0 && !modulLulus.includes(idModulSebelumnya)) {
      setShowWarning(`Modul "${fileMateriSistem[indexModul - 1].label}" harus dijawab BETUL SEMUA (Skor 100) terlebih dahulu.`);
      setTimeout(() => setShowWarning(null), 4000);
      return;
    }

    if (id === activeId) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveId(id);
      setUserAnswers({});
      setIsKuisSubmitted(false);
      setNilaiKuis(0);
      setIsTransitioning(false);
    }, 250);
  };

  const handlePilihKuis = (soalIdx: number, opsiIdx: number) => {
    if (isKuisSubmitted) return;
    setUserAnswers({ ...userAnswers, [soalIdx]: opsiIdx });
  };

  const daftarKuisAktif = bankKuisSistem[activeId] || bankKuisSistem["01"];
  const jumlahTerjawab = Object.keys(userAnswers).length;
  const persenProgressKuis = Math.round((jumlahTerjawab / daftarKuisAktif.length) * 100);

  const kalkulasiSkor = () => {
    let skorBenar = 0;
    daftarKuisAktif.forEach((item, idx) => {
      if (userAnswers[idx] === item.jawaban) skorBenar += 1;
    });
    
    const skorAkhir = Math.round((skorBenar / daftarKuisAktif.length) * 100);
    setNilaiKuis(skorAkhir);
    setIsKuisSubmitted(true);

    if (skorAkhir === 100) {
      if (!modulLulus.includes(activeId)) {
        setModulLulus([...modulLulus, activeId]);
      }
    }
    
    setTimeout(() => {
      document.getElementById('hasil-kuis-banner')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const currentMateri = fileMateriSistem.find(m => m.id === activeId) || fileMateriSistem[0];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-[#0f172a] text-slate-100' : 'bg-[#f8fafc] text-slate-800'
    }`}>
      
      {/* GLOBAL HEADER NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md shadow-sm transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f172a]/80 border-slate-800' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="container mx-auto px-6 max-w-6xl h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
              U
            </div>
            <div>
              <h1 className={`text-xs md:text-sm font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Universitas Muhammadiyah Surakarta</h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">Mata Kuliah Literasi Dasar // Modul Interaktif</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-xl border transition-all ${
              isDarkMode ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </nav>

      {/* FLOATING ALERTER BANNER */}
      {showWarning && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-11/12 max-w-md bg-amber-500 text-slate-950 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-amber-400 font-sans text-xs font-bold animate-bounce">
          <AlertTriangle size={18} className="shrink-0" />
          <span>{showWarning}</span>
        </div>
      )}

      {/* HERO BANNER SECTION */}
      <header className="container mx-auto px-6 pt-28 pb-4 max-w-6xl">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-3 tracking-wide ${
          isDarkMode ? 'bg-slate-900 text-indigo-400 border border-slate-800' : 'bg-indigo-50 text-indigo-600'
        }`}>
          <Sparkles size={12} /> Platform Pembelajaran Mandiri
        </div>
        <h2 className={`text-2xl md:text-4xl font-extrabold tracking-tight transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Kreativitas Digital & <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Pemrograman Visual</span>
        </h2>
      </header>

      {/* DASHBOARD GRID CONTENT */}
      <div className="container mx-auto px-6 max-w-6xl mt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="lg:col-span-1 space-y-4 lg:sticky lg:top-24">
            <div className={`p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200/60'} shadow-sm`}>
              <span className="text-[10px] font-bold text-slate-400 block mb-3 tracking-wider uppercase">Daftar Modul</span>
              <div className="space-y-1">
                {fileMateriSistem.map((materi, index) => {
                  const isActive = activeId === materi.id;
                  const idModulSebelumnya = fileMateriSistem[index - 1]?.id;
                  const isLocked = index > 0 && !modulLulus.includes(idModulSebelumnya);

                  return (
                    <button
                      key={materi.id}
                      onClick={() => gantiModulMateri(materi.id, index)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all transform border ${
                        isLocked 
                          ? 'opacity-40 cursor-not-allowed border-transparent text-slate-400 bg-slate-500/5' 
                          : isActive 
                          ? 'bg-indigo-600 border-indigo-600 text-white shadow-md translate-x-1' 
                          : 'border-transparent text-slate-400 hover:text-slate-600 hover:bg-slate-100/50'
                      }`}
                    >
                      <span className="truncate">{materi.label}</span>
                      {isLocked ? (
                        <Lock size={12} className="text-slate-400" />
                      ) : (
                        <ChevronRight size={12} className={isActive ? 'text-white rotate-90' : 'text-slate-400'} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* AUTHOR PROFILE INFO */}
            <div className={`p-4 rounded-2xl border text-xs transition-colors duration-300 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-slate-400' : 'bg-white border-slate-200/60 text-slate-500'} shadow-sm`}>
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                <User size={14} className="text-indigo-500" />
                <span className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>FAIZ RIFIYANTO</span>
              </div>
              <p className="text-[11px] leading-relaxed">Asisten Laboratorium Basis Data<br />Pendidikan Teknik Informatika UMS</p>
            </div>
          </aside>

          {/* MAIN CONTAINER WITH TRANSITION */}
          <main className={`lg:col-span-3 space-y-8 transition-all duration-300 transform ${
            isTransitioning ? 'opacity-0 translate-y-4 scale-[0.99]' : 'opacity-100 translate-y-0 scale-100'
          }`}>
            
            {/* DISPLAY MATERI UTAMA */}
            <section className={`p-6 md:p-8 rounded-2xl border shadow-sm transition-all duration-300 ${
              isDarkMode ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white border-slate-200/60'
            }`}>
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
                <span className="text-xs font-bold text-indigo-600 block mb-1 uppercase tracking-wider">// Sesi {currentMateri.id}</span>
                <h3 className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{currentMateri.judul}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{currentMateri.tagline}</p>
              </div>
              
              <p className={`text-xs md:text-sm leading-relaxed text-justify transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {currentMateri.konten}
              </p>

              {/* MATERI CARD MATRIX SUBPOINTS */}
              <div className="grid grid-cols-1 gap-4 mt-6">
                {currentMateri.subPoin.map((sub, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${
                    isDarkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-100 shadow-sm'
                  }`}>
                    <h4 className={`text-xs font-bold mb-1 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {sub.t}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{sub.d}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* VIDEO PLAYER CARD */}
            <section className={`p-6 rounded-2xl border shadow-sm space-y-3 ${isDarkMode ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white border-slate-200/60'}`}>
              <h4 className="text-xs font-bold flex items-center gap-1.5 text-indigo-600 uppercase tracking-wider">
                <MonitorPlay size={14} /> Video Simulasi Pendukung
              </h4>
              <div className="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-black aspect-video relative shadow-inner">
                <iframe
                  key={currentMateri.id}
                  src={currentMateri.videoUrl}
                  title={currentMateri.judul}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            {/* CALL INTERACTIVE AI PROMPTER COMPONENT */}
            <section className={`border-t border-b py-2 ${isDarkMode ? 'border-slate-800' : 'border-slate-100'}`}>
              <AIPrompter />
            </section>

            {/* EVALUASI AUTOMATIC KUIS */}
            <section id="kuis" className={`p-6 md:p-8 rounded-2xl border shadow-sm transition-all duration-300 ${isDarkMode ? 'bg-slate-900/40 border-slate-800/60' : 'bg-white border-slate-200/60'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">🎯 Evaluasi Kompetensi Mandiri</h3>
                  <p className="text-[11px] text-slate-400">Jawab seluruh pertanyaan dengan **skor 100** untuk membuka modul selanjutnya.</p>
                </div>
                
                {/* PROGRESS BAR INTERAKTIF */}
                {!isKuisSubmitted && (
                  <div className="w-full md:w-44 space-y-1">
                    <div className="flex justify-between text-[10px] font-semibold text-slate-400">
                      <span>Progres Jawab</span>
                      <span>{persenProgressKuis}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500 ease-out"
                        style={{ width: `${persenProgressKuis}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-4 mt-6">
                {daftarKuisAktif.map((item, sIdx) => (
                  <div key={item.id} className={`p-4 rounded-xl border space-y-3 transition-all ${isDarkMode ? 'bg-slate-950 border-slate-850' : 'bg-slate-50 border-slate-100'}`}>
                    <p className={`text-xs md:text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{sIdx + 1}. {item.soal}</p>
                    <div className="grid grid-cols-1 gap-1.5">
                      {item.opsi.map((opsi, oIdx) => {
                        const isSelected = userAnswers[sIdx] === oIdx;
                        const isCorrectAnswer = item.jawaban === oIdx;
                        const showSuccessStyle = isKuisSubmitted && isCorrectAnswer;
                        const showWrongStyle = isKuisSubmitted && isSelected && !isCorrectAnswer;

                        return (
                          <button
                            key={oIdx}
                            disabled={isKuisSubmitted}
                            onClick={() => handlePilihKuis(sIdx, oIdx)}
                            className={`text-left p-2.5 rounded-lg text-xs transition-all border flex items-center justify-between group ${
                              showSuccessStyle
                                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-600 font-medium'
                                : showWrongStyle
                                ? 'bg-rose-500/10 border-rose-500 text-rose-600 font-medium'
                                : isSelected 
                                ? 'bg-indigo-600 border-indigo-600 text-white font-semibold shadow-sm scale-[1.005]' 
                                : (isDarkMode ? 'bg-slate-900 border-slate-800/80 text-slate-400 hover:bg-slate-850' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100')
                            }`}
                          >
                            <span>{opsi}</span>
                            {showSuccessStyle && <CheckCircle2 size={14} className="text-emerald-500" />}
                            {showWrongStyle && <XCircle size={14} className="text-rose-500" />}
                          </button>
                        );
                      })}
                    </div>
                    {isKuisSubmitted && (
                      <div className={`p-3 rounded-lg text-xs flex gap-2 border transform transition-all duration-300 ${userAnswers[sIdx] === item.jawaban ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-600' : 'bg-rose-500/5 border-rose-500/20 text-rose-400'}`}>
                        <div>
                          <span className="font-bold block">[Analisis Kunci Jawaban]:</span>
                          <p className="mt-0.5 font-normal text-slate-400 leading-relaxed">{item.analisis}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* ACTION FOOTER BAR */}
              <div id="hasil-kuis-banner" className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200/60 dark:border-slate-800 mt-4">
                {!isKuisSubmitted ? (
                  <button
                    onClick={kalkulasiSkor}
                    disabled={jumlahTerjawab < daftarKuisAktif.length}
                    className={`w-full sm:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg shadow-md transition-all transform duration-300 ${
                      jumlahTerjawab === daftarKuisAktif.length
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white hover:scale-102 active:scale-98'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
                    }`}
                  >
                    Kirim Lembar Jawaban ({jumlahTerjawab}/{daftarKuisAktif.length})
                  </button>
                ) : (
                  <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-inner">
                        <Award size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium uppercase tracking-wide">Skor Perolehan Modul</span>
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                          {nilaiKuis} / 100 Points {nilaiKuis === 100 ? '🎉 (MODUL BERIKUTNYA TERBUKA!)' : '❌ (Harus 100 untuk lulus)'}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => { setUserAnswers({}); setIsKuisSubmitted(false); setNilaiKuis(0); }}
                      className="w-full sm:w-auto px-4 py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-semibold border transition-all"
                    >
                      Coba Lagi Modul Ini
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* ACADEMIC REFERENCES */}
            <footer className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[10px] text-slate-400 space-y-1 leading-relaxed">
              <p className="font-bold text-slate-500 text-xs tracking-wide uppercase">// Referensi Kurikulum:</p>
              <p>• Kementerian Komunikasi dan Informatika RI. (2021). *Modul Literasi Digital: Cakap Bermedia Digital*. Jakarta: Kominfo.</p>
              <p>• Tim Literasi Dasar UMS. (2026). *Buku Panduan Implementasi Kurikulum Literasi Universitas*. Surakarta: UMS Press.</p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}