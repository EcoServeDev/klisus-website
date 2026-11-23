"use client";

import { useState } from "react";
import CountrySelect, { useCountry } from "@/components/tools/country-select";
import { CalcLayout, InputCard, NumberField, RowButton, SelectField, TextField } from "@/components/tools/fields";
import { ResultPanel, resultText } from "@/components/tools/result-panel";
import { calcProduct } from "@/lib/tools/calc/product";
import { FREIGHT_MODES } from "@/lib/tools/factors/freight";
import { MATERIALS } from "@/lib/tools/factors/materials";
import { fmt, fmtMass, parseNum } from "@/lib/tools/format";

type Row = { materialId: string; kg: string; customName: string; customFactor: string };

const MATERIAL_OPTIONS = [
  ...MATERIALS.map((m) => ({ value: m.id, label: m.name, group: m.group })),
  { value: "custom", label: "Custom material (enter your own factor)", group: "Custom" },
];
const MODE_OPTIONS = [{ value: "", label: "No inbound transport", group: "None" }, ...FREIGHT_MODES.map((m) => ({ value: m.id, label: m.name, group: m.group }))];

export default function ProductCalculator() {
  const [country, setCountry] = useCountry();
  const [rows, setRows] = useState<Row[]>([
    { materialId: "pet", kg: "0.03", customName: "", customFactor: "" },
    { materialId: "board", kg: "0.01", customName: "", customFactor: "" },
  ]);
  const [kwh, setKwh] = useState("0.05");
  const [mode, setMode] = useState("hgv-all");
  const [km, setKm] = useState("300");
  const [units, setUnits] = useState("");

  const update = (i: number, patch: Partial<Row>) => setRows((rs) => rs.map((r, j) => (j === i ? { ...r, ...patch } : r)));

  const res = calcProduct({
    materials: rows.map((r) => ({
      materialId: r.materialId,
      kg: parseNum(r.kg) ?? 0,
      customName: r.customName,
      customKgPerKg: parseNum(r.customFactor) ?? undefined,
    })),
    processKwh: parseNum(kwh) ?? 0,
    country,
    transportModeId: mode,
    transportKm: parseNum(km) ?? 0,
  });
  const has = res.steps.length > 0;
  const m = fmtMass(res.totalKg);
  const unitsN = parseNum(units);

  return (
    <CalcLayout
      inputs={
        <div className="space-y-5">
          <InputCard title="Materials in one unit of product">
            {rows.map((r, i) => (
              <div key={i} className="rounded-xl border border-paper-line/70 bg-paper-surface/60 p-4">
                <div className="grid gap-4 sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                  <SelectField label="Material" value={r.materialId} onChange={(v) => update(i, { materialId: v })} options={MATERIAL_OPTIONS} />
                  <NumberField label="Mass per unit" unit="kg" value={r.kg} onChange={(v) => update(i, { kg: v })} />
                </div>
                {r.materialId === "custom" ? (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <TextField label="Material name" value={r.customName} onChange={(v) => update(i, { customName: v })} placeholder="e.g. Hot-rolled steel coil" />
                    <NumberField
                      label="Emission factor"
                      unit="kgCO2e/kg"
                      value={r.customFactor}
                      onChange={(v) => update(i, { customFactor: v })}
                      help="From your supplier or an EPD."
                    />
                  </div>
                ) : null}
                {rows.length > 1 ? (
                  <div className="mt-3 text-right">
                    <RowButton tone="remove" onClick={() => setRows((rs) => rs.filter((_, j) => j !== i))}>
                      Remove
                    </RowButton>
                  </div>
                ) : null}
              </div>
            ))}
            <RowButton onClick={() => setRows((rs) => [...rs, { materialId: "pp", kg: "", customName: "", customFactor: "" }])}>+ Add a material</RowButton>
          </InputCard>

          <InputCard title="Your process and inbound transport">
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Electricity per unit" unit="kWh" value={kwh} onChange={setKwh} />
              <CountrySelect value={country} onChange={setCountry} label="Factory country" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <SelectField label="Materials arrive by" value={mode} onChange={setMode} options={MODE_OPTIONS} />
              <NumberField label="Distance" unit="km" value={km} onChange={setKm} />
            </div>
            <NumberField
              label="Units produced per year (optional)"
              value={units}
              onChange={setUnits}
              help="Scales the per-unit result to an annual total."
            />
          </InputCard>
        </div>
      }
      result={
        <ResultPanel
          label="Cradle-to-gate per unit"
          value={m.value}
          unit={m.unit}
          empty={has ? null : "Add at least one material with a mass."}
          sub={
            has ? (
              <>
                Materials {fmt(res.materialsKg, 3)} · energy {fmt(res.energyKg, 3)} · transport {fmt(res.transportKg, 3)} kgCO2e
                {unitsN ? (
                  <>
                    <br />
                    Annual: {fmtMass(res.totalKg * unitsN).value} {fmtMass(res.totalKg * unitsN).unit} for {fmt(unitsN)} units
                  </>
                ) : null}
              </>
            ) : null
          }
          steps={res.steps}
          sourceIds={res.sourceIds.length ? res.sourceIds : ["desnz"]}
          caveats={res.caveats}
          copyText={has ? resultText("Product footprint (cradle-to-gate, per unit)", `${m.value} ${m.unit}`, res.steps, res.sourceIds) : undefined}
        />
      }
    />
  );
}
