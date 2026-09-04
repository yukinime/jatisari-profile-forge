import { useEffect, useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { navItems, sekolah } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#beranda");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.5] },
    );
    navItems.forEach((i) => {
      const el = document.querySelector(i.href);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#beranda" className="flex min-w-0 items-center gap-3 focus-ring rounded-xl">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold tracking-tight text-primary">
              {sekolah.namaSingkat}
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Kabupaten Karawang, Jawa Barat
            </span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="ml-auto hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`focus-ring rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active === item.href
                  ? "bg-secondary text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href="#ppdb" className="btn-accent ml-2">
            Daftar / Informasi PPDB
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className="focus-ring ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border text-primary xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div id="menu-mobile" className="border-t border-border bg-background xl:hidden">
          <nav aria-label="Navigasi mobile" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#ppdb"
              onClick={() => setOpen(false)}
              className="btn-accent mt-3 w-full justify-center"
            >
              Daftar / Informasi PPDB
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
