/**
 * TEMPORARY SHIM — the pill chip is retired; Tag now renders BracketLabel so
 * un-migrated call sites keep building. Migrate imports to
 * `@/components/ui/bracket-label`, then delete this file.
 */
import BracketLabel from "@/components/ui/bracket-label";

type Tone = "neutral" | "green" | "amber" | "paper";

export default function Tag({
  children,
  tone = "neutral",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <BracketLabel tone={tone} className={className}>
      {children}
    </BracketLabel>
  );
}
