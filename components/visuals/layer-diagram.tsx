/**
 * The three-layer system diagram: environmental change flows through the
 * KliSus intelligence layer into economic decisions. Quiet, vertical, still.
 */

function Connector() {
  return (
    <div className="relative flex h-6 w-px items-center justify-center bg-line" aria-hidden="true">
      <span className="absolute h-1 w-1 rounded-full bg-ndvi-green animate-pulse-once" />
    </div>
  );
}

export default function LayerDiagram() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center text-center">
      <p className="text-[16px] text-muted">Environmental Change</p>
      <Connector />
      <div className="rounded-sm border border-ndvi-green/40 bg-surface-2 px-8 py-4">
        <p className="font-display text-[20px] text-cream">
          KliSus Intelligence Layer
        </p>
      </div>
      <Connector />
      <p className="text-[16px] text-muted">Economic Decisions</p>
    </div>
  );
}
