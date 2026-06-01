import { useEffect, useState } from "react";

interface CountdownProps {
  target: Date;
}

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

export function Countdown({ target }: CountdownProps) {
  const [t, setT] = useState(() => diff(target));
  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Dias", value: t.days },
    { label: "Horas", value: t.hours },
    { label: "Minutos", value: t.minutes },
    { label: "Segundos", value: t.seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-6">
      {items.map((it, i) => (
        <div key={it.label} className="flex items-center">
          <div className="flex flex-col items-center min-w-[64px] sm:min-w-[88px]">
            <span className="font-serif text-4xl sm:text-6xl text-gradient-gold tabular-nums">
              {String(it.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1">
              {it.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="text-gold/40 mx-1 sm:mx-2 text-2xl font-serif">·</span>
          )}
        </div>
      ))}
    </div>
  );
}
