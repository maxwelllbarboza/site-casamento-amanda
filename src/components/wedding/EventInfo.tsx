import { SectionTitle } from "./SectionTitle";

const info = [
  {
    label: "Cerimônia",
    value: "14 de Novembro de 2026",
    sub: "Sábado · 16h00",
  },
  {
    label: "Local",
    value: "Espaço Villa Bella",
    sub: "Rua das Flores, 1234 · São Paulo",
  },
  {
    label: "Recepção",
    value: "A seguir, no mesmo local",
    sub: "Coquetel · Jantar · Festa",
  },
  {
    label: "Dress Code",
    value: "Black Tie Opcional",
    sub: "Tons sóbrios · evite branco",
  },
  {
    label: "Estacionamento",
    value: "Valet gratuito",
    sub: "Disponível no local",
  },
  { label: "Contato", value: "(11) 99999-9999", sub: "Cerimonialista · Júlia" },
];

export function EventInfo() {
  return (
    <section id="evento" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="O Grande Dia"
          title="Informações do Evento"
          subtitle="Tudo o que você precisa saber para celebrar com a gente."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {info.map((it) => (
            <div
              key={it.label}
              className="p-8 rounded-2xl border border-gold/20 bg-card shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-primary">
                {it.label}
              </span>
              <p className="font-serif text-2xl mt-3 text-foreground">
                {it.value}
              </p>
              <p className="text-sm text-muted-foreground mt-2">{it.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-card border border-gold/20 aspect-[16/9]">
          <iframe
            title="Mapa do local"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66%2C-23.57%2C-46.62%2C-23.54&amp;layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
