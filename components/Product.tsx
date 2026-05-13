import { Building2, Layers, Trophy } from "lucide-react";
import { content } from "@/content";
import { SectionShell } from "./ui/SectionShell";
import { Card } from "./ui/Card";

const iconMap = { Building2, Layers, Trophy };

export function Product() {
  return (
    <SectionShell
      id="product"
      eyebrow={content.product.eyebrow}
      title={content.product.title}
      subtitle={content.product.subtitle}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {content.product.cards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <Card key={card.title} index={i}>
              <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 font-display text-lg font-semibold text-ink md:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{card.body}</p>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
