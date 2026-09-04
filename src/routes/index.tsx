import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  Map as MapIcon,
  CalendarDays,
  Quote,
  CheckCircle2,
} from "lucide-react";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";
import { Icon } from "@/components/site/Icon";
import {
  berita,
  fasilitas,
  galeriKategori,
  heroStats,
  kegiatan,
  keunggulan,
  kompetensi,
  misi,
  sekolah,
  visi,
} from "@/content/site";

import heroImg from "@/assets/hero-sekolah.jpg";
import profilImg from "@/assets/profil-sekolah.jpg";
import kegiatanImg from "@/assets/kegiatan-1.jpg";
import fasilitasImg from "@/assets/fasilitas-1.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMKN 1 Jatisari | Sekolah Menengah Kejuruan Kabupaten Karawang" },
      {
        name: "description",
        content:
          "Website profil SMK Negeri 1 Jatisari, Kabupaten Karawang, Jawa Barat. Informasi profil sekolah, kompetensi keahlian, fasilitas, kegiatan, galeri, dan informasi PPDB.",
      },
      {
        property: "og:title",
        content: "SMKN 1 Jatisari | Sekolah Menengah Kejuruan Kabupaten Karawang",
      },
      {
        property: "og:description",
        content:
          "Profil sekolah, kompetensi keahlian, fasilitas, kegiatan, galeri, dan informasi PPDB SMK Negeri 1 Jatisari.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Beranda,
});

function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            light ? "text-highlight" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl ${
          light ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            light ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

function Beranda() {
  const identitas = [
    { label: "Nama", value: sekolah.nama },
    { label: "Jenjang", value: sekolah.jenjang },
    { label: "Status", value: sekolah.status },
    { label: "Lokasi", value: sekolah.lokasi },
    { label: "NPSN", value: sekolah.npsn },
    { label: "Akreditasi", value: sekolah.akreditasi },
    { label: "Website", value: sekolah.website },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section id="beranda" className="relative isolate overflow-hidden bg-primary">
          <img
            src={heroImg}
            width={1600}
            height={1000}
            alt="Suasana lingkungan sekolah menengah kejuruan dengan siswa berseragam"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 -z-10 bg-primary/75" aria-hidden="true" />

          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-semibold text-primary-foreground/85">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Kabupaten Karawang, Jawa Barat
              </span>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                SMKN 1 Jatisari
              </h1>
              <p className="mt-4 text-lg font-semibold text-highlight sm:text-2xl">
                Menyiapkan Generasi Kompeten, Berkarakter, dan Siap Menghadapi Dunia Kerja
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
                SMK Negeri 1 Jatisari merupakan satuan pendidikan kejuruan di Kabupaten Karawang,
                Jawa Barat yang berkomitmen mengembangkan kompetensi peserta didik melalui
                pendidikan vokasi, pembentukan karakter, dan pembelajaran yang relevan dengan
                kebutuhan dunia kerja.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#profil" className="btn-accent justify-center">
                  Jelajahi Sekolah
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#ppdb" className="btn-ghost-light justify-center">
                  Informasi PPDB
                </a>
              </div>
            </div>

            <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {heroStats.map((s) => (
                <li
                  key={s}
                  className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-4 text-center text-sm font-semibold text-primary-foreground backdrop-blur-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= PROFIL ================= */}
        <section id="profil" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <img
                src={profilImg}
                width={1200}
                height={900}
                loading="lazy"
                alt="Kegiatan belajar dan praktik siswa di ruang laboratorium sekolah"
                className="w-full rounded-3xl object-cover shadow-soft"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Profil Sekolah
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary sm:text-3xl lg:text-4xl">
                  Tentang SMKN 1 Jatisari
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  SMK Negeri 1 Jatisari adalah sekolah menengah kejuruan negeri yang berada di
                  wilayah Jatisari, Kabupaten Karawang, Jawa Barat. Sebagai lembaga pendidikan
                  vokasi, SMKN 1 Jatisari berfokus pada pengembangan kompetensi akademik dan
                  keterampilan peserta didik agar memiliki kesiapan melanjutkan pendidikan maupun
                  memasuki dunia kerja.
                </p>

                <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                  {identitas.map((i) => (
                    <div key={i.label} className="card-soft p-4">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {i.label}
                      </dt>
                      <dd className="mt-1 break-words text-sm font-semibold text-primary">
                        {i.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ================= VISI & MISI ================= */}
        <section className="section-pad bg-secondary/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Arah Sekolah"
              title="Visi & Misi"
              desc="Landasan penyelenggaraan pendidikan di SMKN 1 Jatisari."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="card-soft p-7 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Quote className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-primary">Visi</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {visi}
                </p>
              </article>
              <article className="card-soft p-7 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-primary">Misi</h3>
                <ol className="mt-4 space-y-3">
                  {misi.map((m, idx) => (
                    <li key={m} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-secondary text-xs font-bold text-primary">
                        {idx + 1}
                      </span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </div>
        </section>

        {/* ================= KOMPETENSI KEAHLIAN ================= */}
        {/* Ubah daftar kompetensi di src/content/site.ts -> `kompetensi` */}
        <section id="kompetensi" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Program Vokasi"
              title="Kompetensi Keahlian"
              desc="Daftar kompetensi keahlian menyesuaikan data resmi sekolah."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {kompetensi.map((k) => (
                <article key={k.nama} className="card-soft flex flex-col p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon name={k.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">{k.nama}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {k.deskripsi}
                  </p>
                  <a
                    href="#kontak"
                    className="focus-ring mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5"
                  >
                    Lihat Detail
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= KEUNGGULAN ================= */}
        <section className="section-pad bg-secondary/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Keunggulan" title="Mengapa Memilih SMKN 1 Jatisari?" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {keunggulan.map((k) => (
                <article key={k.judul} className="card-soft p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon name={k.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-primary">{k.judul}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {k.deskripsi}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FASILITAS ================= */}
        <section id="fasilitas" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Sarana"
              title="Fasilitas Pendukung Pembelajaran"
              desc="Daftar berikut merupakan kerangka informasi fasilitas; ketersediaan dan foto menyesuaikan data resmi sekolah."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <figure className="overflow-hidden rounded-3xl shadow-soft lg:col-span-1">
                <img
                  src={fasilitasImg}
                  width={1000}
                  height={750}
                  loading="lazy"
                  alt="Ruang perpustakaan dan area belajar sekolah"
                  className="h-64 w-full object-cover lg:h-full"
                />
                <figcaption className="sr-only">[Foto fasilitas resmi]</figcaption>
              </figure>
              <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {fasilitas.map((f) => (
                  <li key={f.nama} className="card-soft flex items-center gap-4 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                      <Icon name={f.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-primary">{f.nama}</p>
                      <p className="text-xs text-muted-foreground">[Foto fasilitas resmi]</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================= PROGRAM / KEGIATAN ================= */}
        <section className="section-pad bg-secondary/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                  Kegiatan Siswa
                </p>
                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-primary sm:text-3xl lg:text-4xl">
                  Belajar, Berkarya, dan Berkembang
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Peserta didik didorong untuk aktif belajar, berlatih, dan mengembangkan diri
                  melalui beragam kegiatan sekolah.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {kegiatan.map((k) => (
                    <li
                      key={k}
                      className="flex items-center gap-3 rounded-2xl bg-background px-4 py-3 text-sm font-medium text-primary shadow-soft"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={kegiatanImg}
                width={1000}
                height={750}
                loading="lazy"
                alt="Siswa mengerjakan projek kelompok di dalam kelas"
                className="w-full rounded-3xl object-cover shadow-soft"
              />
            </div>
          </div>
        </section>

        {/* ================= BERITA ================= */}
        <section id="berita" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Informasi"
              title="Berita Sekolah"
              desc="Struktur berita berikut adalah contoh/placeholder dan akan diisi dengan berita resmi sekolah."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {berita.map((b) => (
                <article key={b.judul} className="card-soft flex flex-col overflow-hidden">
                  <div className="grid h-40 place-items-center bg-secondary text-xs font-semibold text-muted-foreground">
                    [Foto berita resmi]
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {b.tanggal}
                      </span>
                      <span className="rounded-full bg-highlight/25 px-2 py-0.5 font-semibold text-highlight-foreground">
                        Contoh / Placeholder
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-primary">{b.judul}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {b.ringkasan}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="#berita" className="btn-outline">
                Lihat Semua Berita
              </a>
            </div>
          </div>
        </section>

        {/* ================= GALERI ================= */}
        <section id="galeri" className="section-pad bg-secondary/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Dokumentasi"
              title="Galeri Sekolah"
              desc="Area galeri siap diisi dengan dokumentasi resmi kegiatan sekolah."
            />
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {galeriKategori.map((g, i) => (
                <figure
                  key={g}
                  className={`group relative overflow-hidden rounded-2xl bg-background shadow-soft transition-shadow hover:shadow-elevated ${
                    i === 0 ? "col-span-2 row-span-2 sm:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid w-full place-items-center bg-primary/5 px-3 text-center text-xs font-semibold text-muted-foreground transition-colors group-hover:bg-primary/10 ${
                      i === 0 ? "h-52 sm:h-72" : "h-32 sm:h-36"
                    }`}
                  >
                    [Foto galeri resmi]
                  </div>
                  <figcaption className="px-3 py-3 text-xs font-bold text-primary">{g}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PPDB / CTA ================= */}
        <section id="ppdb" className="section-pad bg-primary">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              light
              eyebrow="PPDB"
              title="Siapkan Masa Depanmu Bersama SMKN 1 Jatisari"
              desc="Kenali potensi, kembangkan kompetensi, dan persiapkan diri untuk masa depan."
            />
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="#kontak" className="btn-accent justify-center">
                Informasi PPDB
              </a>
              <a href="#kontak" className="btn-ghost-light justify-center">
                Hubungi Sekolah
              </a>
            </div>
            <p className="mt-6 text-xs text-primary-foreground/70">
              Link pendaftaran: {sekolah.ppdbLink} &middot; Jadwal: {sekolah.ppdbJadwal}
            </p>
          </div>
        </section>

        {/* ================= KONTAK ================= */}
        <section id="kontak" className="section-pad">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Kontak"
              title="Hubungi SMKN 1 Jatisari"
              desc="Data kontak resmi akan dilengkapi oleh pihak sekolah."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="card-soft p-7">
                <h3 className="text-lg font-bold text-primary">{sekolah.nama}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Jatisari, Kabupaten Karawang, Jawa Barat
                </p>
                <ul className="mt-6 space-y-4 text-sm">
                  {[
                    { icon: MapPin, label: "Alamat lengkap", value: sekolah.alamat },
                    { icon: Phone, label: "Telepon", value: sekolah.telepon },
                    { icon: Mail, label: "Email", value: sekolah.email },
                    { icon: Globe, label: "Website", value: sekolah.website },
                  ].map(({ icon: I, label, value }) => (
                    <li key={label} className="flex gap-3">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                        <I className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          {label}
                        </span>
                        <span className="block break-words font-semibold text-primary">
                          {value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="#kontak" className="btn-primary justify-center">
                    <MapIcon className="h-4 w-4" aria-hidden="true" />
                    Buka Google Maps
                  </a>
                  <a href="#kontak" className="btn-outline justify-center">
                    Hubungi Sekolah
                  </a>
                </div>
              </div>

              {/* Ganti blok ini dengan embed Google Maps resmi sekolah */}
              <div className="grid min-h-64 place-items-center rounded-3xl border border-dashed border-border bg-secondary/60 p-8 text-center">
                <div>
                  <MapIcon className="mx-auto h-9 w-9 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-primary">
                    Area peta lokasi sekolah
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{sekolah.maps}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
