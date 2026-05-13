import { content } from "@/content";
import { SectionShell } from "./ui/SectionShell";
import { Card } from "./ui/Card";

export function Quality() {
  return (
    <SectionShell
      id="quality"
      title={content.quality.title}
      subtitle={content.quality.subtitle}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {content.quality.cards.map((card, i) => (
          <Card key={card.title} index={i}>
            <div className="font-display text-xs font-medium uppercase tracking-widest text-accent">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-6 font-display text-lg font-semibold text-ink md:text-xl">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{card.body}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
