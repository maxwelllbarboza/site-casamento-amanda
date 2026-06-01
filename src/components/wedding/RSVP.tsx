import { useState, type FormEvent } from "react";
import { SectionTitle } from "./SectionTitle";

export function RSVP() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="RSVP"
          title="Confirme sua Presença"
          subtitle="Sua presença é o presente mais valioso. Por favor, confirme até 30 de Setembro de 2026."
        />

        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl bg-card border border-gold/20 shadow-soft">
          {sent ? (
            <div className="text-center py-8 animate-float-up">
              <div className="text-5xl mb-4">♥</div>
              <h3 className="font-serif text-3xl text-gradient-gold">Obrigado!</h3>
              <p className="mt-3 text-muted-foreground">
                Sua confirmação foi recebida. Mal podemos esperar para celebrar com você.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <Field label="Nome completo" name="name" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Telefone" name="phone" type="tel" required />
                <Field label="E-mail" name="email" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Acompanhantes" name="guests" type="number" defaultValue="0" />
                <Field label="Restrições alimentares" name="diet" placeholder="Ex.: vegetariano" />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-gold text-primary-foreground uppercase tracking-[0.25em] text-xs shadow-soft hover:opacity-95 hover:scale-[1.01] transition-all"
              >
                Confirmar Presença
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-2 w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
      />
    </label>
  );
}
