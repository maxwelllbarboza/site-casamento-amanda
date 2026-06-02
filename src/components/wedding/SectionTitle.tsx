interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  const alignCls =
    align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-3 mb-12`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.4em] text-primary/80">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground">
        {title}
      </h2>
      {align === "center" && (
        <div className="divider-ornament w-full max-w-xs mt-2">
          <span className="text-lg">♥</span>
        </div>
      )}
      {subtitle && (
        <p className="max-w-2xl text-muted-foreground text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
