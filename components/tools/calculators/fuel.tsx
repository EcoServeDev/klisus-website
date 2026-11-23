"use client";

import { useState } from "react";
import { CalcLayout, InputCard, NumberField, RowButton, SelectField } from "@/components/tools/fields";
import { ResultPanel, resultText } from "@/components/tools/result-panel";
import { calcFuel } from "@/lib/tools/calc/fuel";
import { FUELS, type FuelUnit } from "@/lib/tools/factors/fuels";
import { fmtMass, parseNum } from "@/lib/tools/format";

type Row = { fuelId: string; unit: FuelUnit; qty: string };

const FUEL_OPTIONS = FUELS.map((f) => ({ value: f.id, label: f.name }));

function unitsFor(fuelId: string): FuelUnit[] {
  const f = FUELS.find((x) => x.id === fuelId);
  return f ? (Object.keys(f.perUnit) as FuelUnit[]) : [];
}

export default function FuelCalculator() {
  const [rows, setRows] = useState<Row[]>([{ fuelId: "diesel", unit: "litres", qty: "500" }]);

  const update = (i: number, patch: Partial<Row>) =>
    setRows((rs) =>
      rs.map((r, j) => {
        if (j !== i) return r;
        const next = { ...r, ...patch };
        const units = unitsFor(next.fuelId);
        if (!units.includes(next.unit)) next.unit = units[0];
        return next;
      }),
    );

  const lines = rows
    .map((r) => ({ fuelId: r.fuelId, unit: r.unit, quantity: parseNum(r.qty) }))
    .filter((l): l is { fuelId: string; unit: FuelUnit; quantity: number } => l.quantity !== null);
  const res = lines.length ? calcFuel(lines) : null;
  const m = res ? fmtMass(res.totalKg) : null;

  return (
    <CalcLayout
      inputs={
        <InputCard>
          {rows.map((r, i) => (
            <div key={i} className="rounded-xl border border-paper-line/70 bg-paper-surface/60 p-4">
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                <SelectField label="Fuel" value={r.fuelId} onChange={(v) => update(i, { fuelId: v })} options={FUEL_OPTIONS} />
                <SelectField
                  label="Unit"
                  value={r.unit}
                  onChange={(v) => update(i, { unit: v as FuelUnit })}
                  options={unitsFor(r.fuelId).map((u) => ({ value: u, label: u }))}
                />
              </div>
              <div className="mt-4">
                <NumberField label="Quantity used" value={r.qty} onChange={(v) => update(i, { qty: v })} unit={r.unit === "kWh (Net CV)" ? "kWh" : r.unit} />
              </div>
              {rows.length > 1 ? (
                <div className="mt-3 text-right">
                  <RowButton tone="remove" onClick={() => setRows((rs) => rs.filter((_, j) => j !== i))}>
                    Remove
                  </RowButton>
                </div>
              ) : null}
            </div>
          ))}
          <RowButton onClick={() => setRows((rs) => [...rs, { fuelId: "lpg", unit: "litres", qty: "" }])}>+ Add another fuel</RowButton>
        </InputCard>
      }
      result={
        <ResultPanel
          label="Scope 1 combustion emissions"
          value={m?.value}
          unit={m?.unit}
          empty={res ? null : "Enter a quantity to see emissions."}
          steps={res?.steps ?? []}
          sourceIds={["desnz"]}
          caveats={res?.caveats ?? []}
          copyText={res && m ? resultText("Fuel emissions (Scope 1)", `${m.value} ${m.unit}`, res.steps, res.sourceIds) : undefined}
        />
      }
    />
  );
}
