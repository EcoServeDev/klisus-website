import BracketLabel from "@/components/ui/bracket-label";

/**
 * Bottom-anchored hero telemetry: one ruled strip of mono fields — the
 * dossier's replacement for the floating hero card. Renders in flow as the
 * last child of the hero section.
 */

export type TelemetryField = {
  label: string;
  value?: string;
  bracket?: { text: string; tone: "green" | "amber" | "neutral" };
};

export default function TelemetryStrip({
  fields,
  caption,
}: {
  fields: TelemetryField[];
  caption?: string;
}) {
  return (
    <div className="relative border-t border-line bg-forest-black/70 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid grid-cols-2 border-x border-line md:grid-cols-4">
          {fields.map((field, i) => (
            <div
              key={field.label}
              className={`border-line px-4 py-3 ${i % 2 === 1 ? "border-l" : ""} ${
                i >= 2 ? "border-t" : ""
              } md:border-t-0 ${i > 0 ? "md:border-l" : "md:border-l-0"}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
                {field.label}
              </p>
              {field.bracket ? (
                <p className="mt-1">
                  <BracketLabel tone={field.bracket.tone}>
                    {field.bracket.text}
                  </BracketLabel>
                </p>
              ) : (
                <p className="mt-1 font-mono text-[13px] text-cream">{field.value}</p>
              )}
            </div>
          ))}
          {caption ? (
            <p className="col-span-2 border-t border-line px-4 py-2 font-mono text-[10px] text-muted md:col-span-4">
              {caption}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
