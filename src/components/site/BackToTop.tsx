import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="focus-ring fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-elevated transition-transform hover:-translate-y-0.5"
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
