import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/gallery-1.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const moments = [
  { date: "Março · 2019", title: "Como nos conhecemos", text: "Um encontro casual entre amigos em comum que mudou tudo. Bastou um olhar para sabermos que algo especial estava começando.", img: g1 },
  { date: "Maio · 2019", title: "Primeiro encontro", text: "Jantar à luz de velas, conversa que parecia não ter fim. Voltamos para casa de mãos dadas e com a certeza de que queríamos mais.", img: g5 },
  { date: "Agosto · 2019", title: "Início do namoro", text: "Um pedido simples, um sim cheio de borboletas no estômago. Daquele dia em diante, sempre juntos.", img: g3 },
  { date: "2021", title: "Nossa primeira viagem", text: "Paris, sob a luz dourada da torre. Descobrimos o mundo e descobrimos o quanto cabemos um no outro.", img: g4 },
  { date: "Dezembro · 2024", title: "O pedido", text: "Joelho no chão, anel na mão tremendo e lágrimas de felicidade. Era o sim mais óbvio e mais emocionado da nossa vida.", img: g2 },
  { date: "2026", title: "Preparativos para o grande dia", text: "Cada detalhe pensado com amor para celebrar com quem mais amamos. Falta pouco para o nosso para sempre.", img: g6 },
];

export function Story() {
  return (
    <section id="historia" className="relative py-24 sm:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Nossa Jornada"
          title="Nossa História"
          subtitle="Cada capítulo escrito a dois, cada lembrança guardada com carinho."
        />

        <div className="relative mt-16 max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent md:-translate-x-px" />

          <div className="space-y-16">
            {moments.map((m, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={m.title}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    reverse ? "md:[direction:rtl]" : ""
                  }`}
                >
                  <div className={`pl-16 md:pl-0 ${reverse ? "md:pr-12 [direction:ltr]" : "md:pl-12"}`}>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary">{m.date}</span>
                    <h3 className="font-serif text-3xl sm:text-4xl mt-2 text-foreground">{m.title}</h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{m.text}</p>
                  </div>

                  <div className={`pl-16 md:pl-0 ${reverse ? "md:pl-12 [direction:ltr]" : "md:pr-12"}`}>
                    <div className="overflow-hidden rounded-2xl shadow-card aspect-[4/5]">
                      <img
                        src={m.img}
                        alt={m.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-gold ring-4 ring-background shadow-soft" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
