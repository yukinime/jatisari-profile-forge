import { GraduationCap, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { navItems, sekolah } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="truncate text-lg font-extrabold">{sekolah.namaSingkat}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Satuan pendidikan kejuruan di Jatisari, Kabupaten Karawang, Jawa Barat yang berfokus
            pada pengembangan kompetensi, karakter, dan kesiapan peserta didik menghadapi dunia
            kerja.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: Instagram, label: `Instagram: ${sekolah.sosial.instagram}` },
              { icon: Facebook, label: `Facebook: ${sekolah.sosial.facebook}` },
              { icon: Youtube, label: `YouTube: ${sekolah.sosial.youtube}` },
            ].map(({ icon: I, label }) => (
              <span
                key={label}
                title={label}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl bg-primary-foreground/10"
              >
                <I className="h-5 w-5" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Tautan Cepat</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="focus-ring rounded text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Kontak</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{sekolah.alamat}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{sekolah.telepon}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{sekolah.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © 2026 {sekolah.namaSingkat}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
