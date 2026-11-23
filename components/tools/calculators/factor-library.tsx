"use client";

import { useMemo, useState } from "react";
import { SelectField, TextField } from "@/components/tools/fields";
import { FREE_ALLOCATION_REMAINING } from "@/lib/tools/factors/cbam";
import { FREIGHT_MODES } from "@/lib/tools/factors/freight";
import { FUELS } from "@/lib/tools/factors/fuels";
import { GRID } from "@/lib/tools/factors/grid";
import { MATERIALS } from "@/lib/tools/factors/materials";
import { SOURCES } from "@/lib/tools/factors/sources";
import { fmtFactor } from "@/lib/tools/format";

type Row = { category: string; item: string; value: number; unit: string; sourceId: string; year: string };

function allRows(): Row[] {
  const rows: Row[] = [];
  for (const g of GRID) rows.push({ category: "Grid electricity", item: g.name, value: g.factor.value, unit: "kgCO2e/kWh", sourceId: "ember", year: g.factor.year ?? "" });
  for (const f of FUELS)
    for (const [unit, v] of Object.entries(f.perUnit))
      rows.push({ category: "Fuels", item: f.name, value: v as number, unit: `kgCO2e/${unit}`, sourceId: "desnz", year: "2025" });
  for (const m of FREIGHT_MODES) rows.push({ category: "Freight", item: `${m.group}: ${m.name}`, value: m.kgPerTkm, unit: "kgCO2e/tonne·km", sourceId: "desnz", year: "2025" });
  for (const m of MATERIALS) rows.push({ category: "Materials", item: `${m.group}: ${m.name}`, value: m.kgPerTonne, unit: "kgCO2e/tonne", sourceId: "desnz", year: "2025" });
  for (const [y, v] of Object.entries(FREE_ALLOCATION_REMAINING))
    rows.push({ category: "CBAM", item: `Free allocation remaining, ${y}`, value: v * 100, unit: "%", sourceId: "etsDirective", year: y });
  return rows;
}

const ROWS = allRows();
const CATS = ["All", ...new Set(ROWS.map((r) => r.category))];

export default function FactorLibrary() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return ROWS.filter((r) => (cat === "All" || r.category === cat) && (!needle || `${r.item} ${r.unit} ${r.category}`.toLowerCase().includes(needle)));
  }, [q, cat]);

  const download = () => {
    const esc = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const lines = ["category,item,value,unit,source,source_url,data_year"].concat(
      filtered.map((r) => {
        const s = SOURCES[r.sourceId];
        return [esc(r.category), esc(r.item), r.value, esc(r.unit), esc(`${s.publisher} — ${s.name}`), esc(s.url), esc(r.year)].join(",");
      }),
    );
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "klisus-emission-factors.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-2xl border border-paper-line/70 bg-paper p-5 shadow-[var(--shadow-soft)] sm:p-7">
      <div className="grid gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_auto] sm:items-end">
        <TextField label="Search" value={q} onChange={setQ} placeholder="e.g. India, diesel, container" />
        <SelectField label="Category" value={cat} onChange={setCat} options={CATS.map((c) => ({ value: c, label: c }))} />
        <button
          type="button"
          onClick={download}
          className="h-[46px] rounded-lg bg-forest-black px-5 text-[14px] font-medium text-cream transition-colors hover:bg-surface-2"
        >
          Download CSV
        </button>
      </div>
      <p className="mt-4 text-[13px] text-paper-muted">
        {filtered.length} of {ROWS.length} factors
      </p>
      <div className="mt-3 max-h-[70vh] overflow-auto rounded-lg border border-paper-line">
        <table className="w-full min-w-[640px] text-left text-[13px]">
          <thead className="sticky top-0 bg-paper-surface text-[12px] uppercase tracking-[0.06em] text-paper-muted">
            <tr>
              <th className="px-3 py-2.5 font-semibold">Category</th>
              <th className="px-3 py-2.5 font-semibold">Item</th>
              <th className="px-3 py-2.5 text-right font-semibold">Value</th>
              <th className="px-3 py-2.5 font-semibold">Unit</th>
              <th className="px-3 py-2.5 font-semibold">Source</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => {
              const s = SOURCES[r.sourceId];
              return (
                <tr key={i} className="border-t border-paper-line/70">
                  <td className="px-3 py-2 text-paper-muted">{r.category}</td>
                  <td className="px-3 py-2 text-ink">{r.item}</td>
                  <td className="px-3 py-2 text-right font-mono text-ink">{fmtFactor(r.value)}</td>
                  <td className="px-3 py-2 font-mono text-[12px] text-paper-muted">{r.unit}</td>
                  <td className="px-3 py-2 text-[12px] text-paper-muted">
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline decoration-paper-line underline-offset-2 hover:text-ink">
                      {s.publisher.replace(/ \(.*\)$/, "")}
                    </a>{" "}
                    <span className="font-mono">{r.year}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
