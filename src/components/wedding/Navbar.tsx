import { useEffect, useState } from "react";

const links = [
  { href: "#historia", label: "Nossa História" },
  { href: "#galeria", label: "Galeria" },
  { href: "#video", label: "Vídeo" },
  { href: "#evento", label: "Evento" },
  { href: "#presentes", label: "Presentes" },
  { href: "#rsvp", label: "Confirmar" },
  { href: "#mensagens", label: "Mensagens" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className="font-script text-2xl sm:text-3xl text-gradient-gold"
        >
          A &amp; V
        </a>
        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className="lg:hidden p-2 text-foreground"
        >
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-6 h-px bg-current mb-1.5" />
          <span className="block w-4 h-px bg-current ml-auto" />
        </button>
      </nav>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/60">
          <ul className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
