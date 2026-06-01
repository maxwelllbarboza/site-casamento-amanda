import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/wedding/Navbar";
import { Hero } from "@/components/wedding/Hero";
import { Story } from "@/components/wedding/Story";
import { Gallery } from "@/components/wedding/Gallery";
import { VideoSection } from "@/components/wedding/VideoSection";
import { EventInfo } from "@/components/wedding/EventInfo";
import { RSVP } from "@/components/wedding/RSVP";
import { Gifts } from "@/components/wedding/Gifts";
import { Messages } from "@/components/wedding/Messages";
import { Footer } from "@/components/wedding/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda & Vinicius — 14 de Novembro de 2026" },
      {
        name: "description",
        content:
          "O casamento de Amanda e Vinicius. Acompanhe nossa história, confirme presença e celebre conosco em 14 de Novembro de 2026.",
      },
      { property: "og:title", content: "Amanda & Vinicius — Nosso Casamento" },
      {
        property: "og:description",
        content: "Nossa história, fotos, lista de presentes e confirmação de presença.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Story />
      <Gallery />
      <VideoSection />
      <EventInfo />
      <Gifts />
      <RSVP />
      <Messages />
      <Footer />
    </main>
  );
}
