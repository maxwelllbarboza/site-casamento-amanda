import { useState, type FormEvent } from "react";
import { SectionTitle } from "./SectionTitle";

interface Msg {
  name: string;
  text: string;
}

const seed: Msg[] = [
  {
    name: "Mariana & João",
    text: "Que esse amor seja eterno como o nosso carinho por vocês. Felicidades!",
  },
  {
    name: "Tio Roberto",
    text: "Vocês são lindos juntos. Que Deus abençoe essa nova jornada.",
  },
  {
    name: "Camila",
    text: "Amanda, você merece todo o amor do mundo. Vini, cuide bem dela!",
  },
  {
    name: "Família Souza",
    text: "Mal podemos esperar para celebrar com vocês. Contagem regressiva!",
  },
];

export function Messages() {
  const [list, setList] = useState<Msg[]>(seed);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setList([{ name: name.trim(), text: text.trim() }, ...list]);
    setName("");
    setText("");
  };

  return (
    <section id="mensagens" className="py-24 sm:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Mural"
          title="Deixe uma Mensagem"
          subtitle="Para Amanda e Vinicius, com todo o carinho."
        />

        <form
          onSubmit={submit}
          className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-card border border-gold/20 shadow-card mb-12"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none mb-4"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            placeholder="Escreva uma mensagem para os noivos…"
            className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <button
            type="submit"
            className="mt-4 w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-gold text-primary-foreground uppercase tracking-[0.2em] text-xs shadow-soft hover:opacity-95"
          >
            Enviar Mensagem
          </button>
        </form>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto">
          {list.map((m, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-6 p-6 rounded-2xl bg-card border border-gold/15 shadow-card"
            >
              <p className="text-foreground/85 font-serif italic text-lg leading-relaxed">
                "{m.text}"
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary">
                — {m.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
