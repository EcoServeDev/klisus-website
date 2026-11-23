"use client";

import { useState } from "react";
import { CalcLayout, InputCard, NumberField, RowButton, SelectField } from "@/components/tools/fields";
import { ResultPanel, resultText } from "@/components/tools/result-panel";
import { calcFreight } from "@/lib/tools/calc/freight";
import { FREIGHT_MODES } from "@/lib/tools/factors/freight";
import { fmt, fmtMass, parseNum } from "@/lib/tools/format";

type Row = { modeId: string; tonnes: string; km: string };

const MODE_OPTIONS = FREIGHT_MODES.map((m) => ({ value: m.id, label: m.name, group: m.group }));

export default function FreightCalculator() {
  const [rows, setRows] = useState<Row[]>([
    { modeId: "hgv-all", tonnes: "18", km: "120" },
    { modeId: "sea-container", tonnes: "18", km: "11000" },
  ]);
  const update = (i: number, patch: Partial<Row>) => setRows((rs) => rs.map((r, j) => (j === i ? { ...r, ...patch } : r)));

  const legs = rows
    .map((r) => ({ modeId: r.modeId, tonnes: parseNum(r.tonnes), km: parseNum(r.km) }))
    .filter((l): l is { modeId: string; tonnes: number; km: number } => l.tonnes !== null && l.km !== null);
  const res = legs.length ? calcFreight(legs) : null;
  const m = res ? fmtMass(res.totalKg) : null;

  return (
    <CalcLayout
      inputs={
        <InputCard>
          {rows.map((r, i) => (
            <div key={i} className="rounded-xl border border-paper-line/70 bg-paper-surface/60 p-4">
              <p className="mb-3 font-mono text-[12px] uppercase tracking-[0.08em] text-paper-muted">Leg {i + 1}</p>
              <SelectField label="Mode" value={r.modeId} onChange={(v) => update(i, { modeId: v })} options={MODE_OPTIONS} />
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <NumberField label="Weight carried" unit="tonnes" value={r.tonnes} onChange={(v) => update(i, { tonnes: v })} />
                <NumberField label="Distance" unit="km" value={r.km} onChange={(v) => update(i, { km: v })} />
              </div>
              {rows.length > 1 ? (
                <div className="mt-3 text-right">
                  <RowButton tone="remove" onClick={() => setRows((rs) => rs.filter((_, j) => j !== i))}>
                    Remove leg
                  </RowButton>
                </div>
              ) : null}
            </div>
          ))}
          <RowButton onClick={() => setRows((rs) => [...rs, { modeId: "rail", tonnes: rs[rs.length - 1]?.tonnes ?? "", km: "" }])}>
            + Add a leg
          </RowButton>
        </InputCard>
      }
      result={
        <ResultPanel
          label="Shipment emissions"
          value={m?.value}
          unit={m?.unit}
          sub={res ? <>{fmt(res.totalTkm)} tonne-km in total</> : null}
          empty={res ? null : "Enter weight and distance for at least one leg."}
          steps={res?.steps ?? []}
          sourceIds={["desnz"]}
          caveats={res?.caveats ?? []}
          copyText={res && m ? resultText("Freight emissions", `${m.value} ${m.unit}`, res.steps, res.sourceIds) : undefined}
        />
      }
    />
  );
}
