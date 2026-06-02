export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-gold/15">
      <div className="container mx-auto px-6 text-center">
        <p className="font-script text-5xl text-gradient-gold">
          Amanda &amp; Vinicius
        </p>
        <div className="divider-ornament max-w-xs mx-auto mt-6">
          <span>♥</span>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          14 de Novembro de 2026 · São Paulo
        </p>
        <p className="mt-2 text-xs text-muted-foreground/70">
          Feito com amor para o nosso para sempre.
        </p>
      </div>
    </footer>
  );
}
