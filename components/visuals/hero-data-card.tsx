/**
 * Hero evidence card: a fictional, clearly-labeled sample of what an
 * assessment returns — four measured rows, no marketing voice.
 */

import Tag from "@/components/ui/tag";

function Row({
  label,
  value,
  tag,
}: {
  label: string;
  value?: string;
  tag?: React.ReactNode;
}) {
  return (
    <div className="py-3 first:pt-0">
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <div className="mt-1 flex items-center justify-between gap-4">
        {value ? (
          <p className="font-mono text-[13px] text-cream">{value}</p>
        ) : (
          <span />
        )}
        {tag ?? null}
      </div>
    </div>
  );
}

export default function HeroDataCard() {
  return (
    <div className="max-w-sm rounded-sm border border-line bg-surface-1/95 p-6 shadow-2xl">
      <div className="divide-y divide-line">
        <Row label="Production plot" value="17.4521° N, 78.3845° E" />
        <Row label="Analysis period" value="31 Dec 2020 → Present" />
        <Row
          label="Observed land change"
          tag={<Tag tone="amber">REVIEW REQUIRED</Tag>}
        />
        <Row
          label="Evidence record"
          tag={<Tag tone="green">GENERATED</Tag>}
        />
      </div>
      <p className="mt-4 text-[11px] text-muted">
        Illustrative example — fictional coordinates
      </p>
    </div>
  );
}
