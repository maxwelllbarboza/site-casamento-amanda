import { useState } from "react";
import { SectionTitle } from "./SectionTitle";

const gifts = [
  {
    name: "Jantar Romântico",
    desc: "Para celebrarmos o nosso amor a dois.",
    price: 100,
    icon: "🍷",
  },
  {
    name: "Passeio na Lua de Mel",
    desc: "Um passeio inesquecível em destino dos sonhos.",
    price: 150,
    icon: "🌅",
  },
  {
    name: "Café da Manhã Especial",
    desc: "Comecinho de dia perfeito juntos.",
    price: 80,
    icon: "☕",
  },
  {
    name: "Sofá da Casa Nova",
    desc: "O cantinho dos abraços de domingo.",
    price: 300,
    icon: "🛋️",
  },
  {
    name: "Geladeira dos Sonhos",
    desc: "Para o nosso primeiro lar.",
    price: 500,
    icon: "❄️",
  },
  {
    name: "Ajuda para a Lua de Mel",
    desc: "Toda contribuição é bem-vinda!",
    price: 200,
    icon: "✈️",
  },
  {
    name: "Reforma do Lar",
    desc: "Para transformar a casa em um lar.",
    price: 250,
    icon: "🏡",
  },
  {
    name: "Finalização da Casa",
    desc: "Os detalhes finais que fazem a diferença.",
    price: 1000,
    icon: "🔑",
  },
];

export function Gifts() {
  const [selected, setSelected] = useState<(typeof gifts)[number] | null>(null);

  return (
    <section id="presentes" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Lista de Presentes"
          title="Presenteie os Noivos"
          subtitle="Cada contribuição é simbólica e nos ajuda a construir nosso novo lar e nossa lua de mel. Obrigado de coração!"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {gifts.map((g) => (
            <article
              key={g.name}
              className="group flex flex-col p-6 rounded-2xl bg-card border border-gold/15 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="aspect-square rounded-xl bg-gradient-rose flex items-center justify-center text-6xl mb-4">
                {g.icon}
              </div>
              <h3 className="font-serif text-xl text-foreground">{g.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 flex-1">
                {g.desc}
              </p>
              <p className="font-serif text-2xl text-gradient-gold mt-4">
                R$ {g.price.toLocaleString("pt-BR")}
              </p>
              <button
                onClick={() => setSelected(g)}
                className="mt-4 py-3 rounded-full border border-gold/40 text-foreground hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent uppercase tracking-[0.2em] text-[11px] transition-all"
              >
                Presentear
              </button>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4 animate-float-up"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-md w-full p-8 shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="text-5xl mb-3">{selected.icon}</div>
              <h3 className="font-serif text-2xl">{selected.name}</h3>
              <p className="font-serif text-3xl text-gradient-gold mt-2">
                R$ {selected.price.toLocaleString("pt-BR")}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <button className="w-full py-3 rounded-full bg-gradient-gold text-primary-foreground uppercase tracking-[0.2em] text-xs shadow-soft">
                Pagar com PIX
              </button>
              <button className="w-full py-3 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 uppercase tracking-[0.2em] text-xs">
                Pagar com Cartão
              </button>
            </div>

            <label className="block mt-5">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Mensagem de carinho (opcional)
              </span>
              <textarea
                rows={3}
                className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                placeholder="Escreva uma palavra carinhosa para os noivos…"
              />
            </label>

            <button
              onClick={() => setSelected(null)}
              className="mt-5 w-full text-sm text-muted-foreground hover:text-foreground"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
