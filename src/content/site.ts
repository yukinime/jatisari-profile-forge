/**
 * ============================================================
 * PUSAT DATA KONTEN WEBSITE SMKN 1 JATISARI
 * ------------------------------------------------------------
 * Semua teks, daftar, dan placeholder website ada di file ini.
 * Untuk memperbarui data resmi sekolah, cukup ubah nilai di
 * bawah ini — tidak perlu menyentuh kode komponen.
 * Nilai bertanda [ ... ] adalah PLACEHOLDER yang harus diganti
 * dengan data resmi sekolah.
 * ============================================================
 */

export const sekolah = {
  nama: "SMK Negeri 1 Jatisari",
  namaSingkat: "SMKN 1 Jatisari",
  jenjang: "Sekolah Menengah Kejuruan",
  status: "Negeri",
  lokasi: "Jatisari, Kabupaten Karawang, Jawa Barat",
  npsn: "[NPSN resmi sekolah]",
  akreditasi: "[Akreditasi resmi sekolah]",
  website: "[Website resmi sekolah]",
  alamat: "[Alamat resmi sekolah]",
  telepon: "[Nomor telepon resmi sekolah]",
  email: "[Email resmi sekolah]",
  maps: "[Link Google Maps resmi sekolah]",
  ppdbLink: "[Link PPDB resmi]",
  ppdbJadwal: "[Jadwal PPDB resmi]",
  sosial: {
    instagram: "[Instagram resmi sekolah]",
    facebook: "[Facebook resmi sekolah]",
    youtube: "[YouTube resmi sekolah]",
  },
};

export const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil", href: "#profil" },
  { label: "Kompetensi Keahlian", href: "#kompetensi" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Berita", href: "#berita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

export const heroStats = ["SMK Negeri", "Jatisari", "Karawang", "Jawa Barat"];

export const visi =
  "Menjadi sekolah kejuruan yang unggul dalam menghasilkan lulusan kompeten, berkarakter, adaptif, dan mampu bersaing di dunia kerja maupun melanjutkan pendidikan.";

export const misi = [
  "Menyelenggarakan pembelajaran kejuruan yang berkualitas dan relevan dengan kebutuhan dunia kerja.",
  "Mengembangkan karakter, kedisiplinan, tanggung jawab, kreativitas, dan kemandirian peserta didik.",
  "Meningkatkan kompetensi peserta didik melalui praktik dan pengalaman pembelajaran berbasis dunia kerja.",
  "Mendorong pemanfaatan teknologi dalam proses pembelajaran.",
  "Membangun kemitraan yang positif dengan dunia usaha dan dunia industri.",
];

/**
 * DAFTAR KOMPETENSI KEAHLIAN
 * Ganti `nama` dan `deskripsi` dengan kompetensi keahlian resmi
 * yang dibuka di SMKN 1 Jatisari. `icon` memakai nama ikon Lucide.
 */
export const kompetensi: { nama: string; deskripsi: string; icon: string }[] = [
  {
    nama: "[Kompetensi Keahlian 1]",
    deskripsi: "[Deskripsi singkat kompetensi keahlian sesuai data resmi sekolah]",
    icon: "Cpu",
  },
  {
    nama: "[Kompetensi Keahlian 2]",
    deskripsi: "[Deskripsi singkat kompetensi keahlian sesuai data resmi sekolah]",
    icon: "Wrench",
  },
  {
    nama: "[Kompetensi Keahlian 3]",
    deskripsi: "[Deskripsi singkat kompetensi keahlian sesuai data resmi sekolah]",
    icon: "Briefcase",
  },
  {
    nama: "[Kompetensi Keahlian 4]",
    deskripsi: "[Deskripsi singkat kompetensi keahlian sesuai data resmi sekolah]",
    icon: "Sprout",
  },
  {
    nama: "[Kompetensi Keahlian 5]",
    deskripsi: "[Deskripsi singkat kompetensi keahlian sesuai data resmi sekolah]",
    icon: "MonitorSmartphone",
  },
];

export const keunggulan = [
  {
    judul: "Pendidikan Berbasis Kompetensi",
    deskripsi:
      "Pembelajaran diarahkan pada penguasaan kompetensi yang terukur sesuai kurikulum pendidikan vokasi.",
    icon: "GraduationCap",
  },
  {
    judul: "Pembelajaran Praktik",
    deskripsi:
      "Peserta didik dibiasakan belajar melalui praktik agar keterampilan terbentuk secara nyata.",
    icon: "Hammer",
  },
  {
    judul: "Pengembangan Karakter",
    deskripsi:
      "Kedisiplinan, tanggung jawab, dan kemandirian ditanamkan dalam keseharian sekolah.",
    icon: "HeartHandshake",
  },
  {
    judul: "Lingkungan Belajar yang Mendukung",
    deskripsi:
      "Suasana belajar yang tertib, aman, dan kondusif untuk mendukung perkembangan peserta didik.",
    icon: "Trees",
  },
  {
    judul: "Penguatan Kesiapan Dunia Kerja",
    deskripsi:
      "Peserta didik dipersiapkan memasuki dunia kerja maupun melanjutkan pendidikan ke jenjang berikutnya.",
    icon: "Target",
  },
  {
    judul: "Pengembangan Teknologi dan Kreativitas",
    deskripsi:
      "Pemanfaatan teknologi dan ruang berkarya mendorong kreativitas peserta didik.",
    icon: "Lightbulb",
  },
];

export const fasilitas = [
  { nama: "Ruang Kelas", icon: "School" },
  { nama: "Laboratorium", icon: "FlaskConical" },
  { nama: "Bengkel/Workshop", icon: "Wrench" },
  { nama: "Perpustakaan", icon: "BookOpen" },
  { nama: "Sarana Olahraga", icon: "Volleyball" },
  { nama: "Ruang Praktik", icon: "Cog" },
  { nama: "Area Kegiatan Siswa", icon: "Users" },
  { nama: "Fasilitas Pendukung Lainnya", icon: "Building2" },
];

export const kegiatan = [
  "Pembelajaran praktik",
  "Kegiatan ekstrakurikuler",
  "Organisasi siswa",
  "Projek dan kreativitas",
  "Kegiatan sekolah",
  "Persiapan memasuki dunia kerja",
];

/** Contoh struktur berita. Ganti dengan berita resmi sekolah. */
export const berita = [
  {
    judul: "Kegiatan Pembelajaran dan Praktik Siswa",
    tanggal: "[Tanggal publikasi]",
    ringkasan:
      "[Ringkasan berita resmi sekolah mengenai kegiatan pembelajaran dan praktik peserta didik]",
  },
  {
    judul: "Pengembangan Kompetensi Peserta Didik",
    tanggal: "[Tanggal publikasi]",
    ringkasan:
      "[Ringkasan berita resmi sekolah mengenai program pengembangan kompetensi peserta didik]",
  },
  {
    judul: "Kegiatan Sekolah dan Prestasi Siswa",
    tanggal: "[Tanggal publikasi]",
    ringkasan:
      "[Ringkasan berita resmi sekolah mengenai kegiatan sekolah dan prestasi siswa]",
  },
];

export const galeriKategori = [
  "Kegiatan Sekolah",
  "Pembelajaran",
  "Praktik Kejuruan",
  "Ekstrakurikuler",
  "Lingkungan Sekolah",
];
