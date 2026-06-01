import hero from "@/assets/hero-couple.jpg";
import { Countdown } from "./Countdown";

const WEDDING_DATE = new Date("2026-11-14T16:00:00-03:00");

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Amanda e Vinicius"
          width={1080}
          height={1920}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-16">
        <span className="text-xs uppercase tracking-[0.5em] text-primary animate-shimmer">
          14 · Novembro · 2026
        </span>

        <h1 className="mt-6 font-script text-7xl sm:text-8xl md:text-[10rem] leading-none text-gradient-gold animate-float-up">
          Amanda
          <span className="block font-serif text-3xl sm:text-4xl md:text-5xl text-foreground/80 my-2 tracking-[0.4em]">
            &amp;
          </span>
          Vinicius
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-foreground/75 italic font-serif animate-float-up">
          "Escolhi você. E escolherei, todos os dias, pelo resto da nossa vida."
        </p>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-background/60 backdrop-blur-md border border-gold/20 shadow-card animate-float-up">
          <Countdown target={WEDDING_DATE} />
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 animate-float-up">
          <a
            href="#historia"
            className="px-8 py-4 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition-all uppercase tracking-[0.2em] text-xs"
          >
            Conheça Nossa História
          </a>
          <a
            href="#presentes"
            className="px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground hover:opacity-95 hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-xs shadow-soft"
          >
            Presentear os Noivos
          </a>
        </div>

        <a
          href="#historia"
          aria-label="Rolar para baixo"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/70"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary to-transparent animate-shimmer" />
        </a>
      </div>
    </section>
  );
}
