import { content } from "@/content";
import { SectionShell } from "./ui/SectionShell";
import { MetricTile } from "./ui/MetricTile";

export function Proof() {
  return (
    <SectionShell
      id="proof"
      eyebrow={content.proof.eyebrow}
      title={content.proof.title}
      subtitle={content.proof.subtitle}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.proof.metrics.map((m, i) => (
          <MetricTile
            key={m.label}
            value={m.value}
            prefix={m.prefix}
            suffix={m.suffix}
            label={m.label}
            emphasis={m.emphasis}
            decimals={m.decimals}
            index={i}
          />
        ))}
      </div>
    </SectionShell>
  );
}
