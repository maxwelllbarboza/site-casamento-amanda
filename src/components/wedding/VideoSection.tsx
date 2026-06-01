import { SectionTitle } from "./SectionTitle";
import hero from "@/assets/hero-couple.jpg";

export function VideoSection() {
  return (
    <section id="video" className="py-24 sm:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <SectionTitle
          eyebrow="Mensagem dos Noivos"
          title="Nosso Vídeo"
          subtitle="Um recado especial de Amanda e Vinicius para você."
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-soft group cursor-pointer">
            <img
              src={hero}
              alt="Prévia do vídeo dos noivos"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                <span className="ml-2 text-3xl text-primary">▶</span>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-sm text-muted-foreground italic">
            Clique para assistir · 02:34
          </p>
        </div>
      </div>
    </section>
  );
}
