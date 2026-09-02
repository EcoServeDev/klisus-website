/**
 * The three-layer system diagram: environmental change flows through the
 * KliSus intelligence layer into economic decisions. Quiet, vertical, still.
 */

function Connector() {
  return (
    <div className="relative ml-8 flex h-6 w-px items-center justify-center bg-paper-line" aria-hidden="true">
      <span className="absolute h-1 w-1 rounded-full bg-green-ink animate-pulse-once" />
    </div>
  );
}

export default function LayerDiagram() {
  return (
    <div className="flex max-w-md flex-col items-start">
      <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-paper-muted">
        Environmental Change
      </p>
      <Connector />
      <div className="rounded-[2px] border border-green-ink/40 bg-paper-surface px-8 py-4">
        <p className="font-display text-[20px] text-ink">
          KliSus Intelligence Layer
        </p>
      </div>
      <Connector />
      <p className="font-mono text-[13px] uppercase tracking-[0.08em] text-paper-muted">
        Economic Decisions
      </p>
    </div>
  );
}
