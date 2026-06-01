import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Cat = "Todas" | "Namoro" | "Viagens" | "Noivado" | "Família";

const photos: { src: string; cat: Exclude<Cat, "Todas">; alt: string }[] = [
  { src: g1, cat: "Namoro", alt: "Casal em campo florido" },
  { src: g2, cat: "Noivado", alt: "Mãos com aliança" },
  { src: g3, cat: "Viagens", alt: "Pôr do sol na praia" },
  { src: g4, cat: "Viagens", alt: "Casal em Paris" },
  { src: g5, cat: "Família", alt: "Jantar romântico" },
  { src: g6, cat: "Noivado", alt: "Buquê de noiva" },
  { src: g1, cat: "Namoro", alt: "Casal sorrindo" },
  { src: g3, cat: "Viagens", alt: "Silhuetas na praia" },
];

const cats: Cat[] = ["Todas", "Namoro", "Viagens", "Noivado", "Família"];

export function Gallery() {
  const [cat, setCat] = useState<Cat>("Todas");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = cat === "Todas" ? photos : photos.filter((p) => p.cat === cat);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Memórias"
          title="Nossa Galeria"
          subtitle="Momentos eternizados em cada clique."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] border transition-all ${
                cat === c
                  ? "bg-gradient-gold text-primary-foreground border-transparent shadow-soft"
                  : "border-gold/30 text-foreground/70 hover:bg-gold/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((p, i) => (
            <button
              key={`${p.src}-${i}`}
              onClick={() => setLightbox(p.src)}
              className="block mb-4 w-full overflow-hidden rounded-xl shadow-card group break-inside-avoid"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 animate-float-up"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-background text-3xl"
            aria-label="Fechar"
          >
            ×
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-soft"
          />
        </div>
      )}
    </section>
  );
}
