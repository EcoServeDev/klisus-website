"use client";

import { useState } from "react";
import { CalcLayout, InputCard, NumberField, Segmented, SelectField } from "@/components/tools/fields";
import { ResultPanel, resultText, YearBars } from "@/components/tools/result-panel";
import { calcCbamCost } from "@/lib/tools/calc/cbam";
import { BENCHMARK_PRESETS, PRICE_SCENARIOS, type ScenarioKey } from "@/lib/tools/factors/cbam";
import { fmt, fmtMoney, fmtPct, parseNum } from "@/lib/tools/format";

const PRESET_OPTIONS = BENCHMARK_PRESETS.map((b) => ({
  value: b.id,
  label: b.value === null ? b.name : `${b.name} · ${b.value} tCO2e/t`,
  group: b.sector ?? "Custom",
}));

export default function CbamCostCalculator() {
  const [tonnes, setTonnes] = useState("1000");
  const [intensity, setIntensity] = useState("2.1");
  const [preset, setPreset] = useState("hot-metal");
  const [customBench, setCustomBench] = useState("");
  const [scenario, setScenario] = useState<ScenarioKey>("base");
  const [start, setStart] = useState(String(PRICE_SCENARIOS.base.start));
  const [growth, setGrowth] = useState(String(PRICE_SCENARIOS.base.growth));
  const [paid, setPaid] = useState("");

  const pickScenario = (k: ScenarioKey) => {
    setScenario(k);
    setStart(String(PRICE_SCENARIOS[k].start));
    setGrowth(String(PRICE_SCENARIOS[k].growth));
  };

  const p = BENCHMARK_PRESETS.find((b) => b.id === preset);
  const benchmark = p?.value === null ? parseNum(customBench) : (p?.value ?? null);
  const t = parseNum(tonnes);
  const i = parseNum(intensity);
  const s = parseNum(start);
  const g = parseNum(growth) ?? 0;

  const res =
    t !== null && i !== null && benchmark !== null && s !== null
      ? calcCbamCost({ tonnes: t, intensity: i, benchmark, price: { start: s, growth: g }, paidAbroad: parseNum(paid) ?? 0 })
      : null;

  const first = res?.rows[0];
  const last = res?.rows[res.rows.length - 1];

  return (
    <CalcLayout
      inputs={
        <div className="space-y-5">
          <InputCard title="Your goods">
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Quantity exported to the EU per year" unit="tonnes" value={tonnes} onChange={setTonnes} />
              <NumberField
                label="Embedded emissions"
                unit="tCO2e/t"
                value={intensity}
                onChange={setIntensity}
                help="Your installation's specific emissions per tonne of product (direct, plus precursors). Ask your plant or MRV provider."
              />
            </div>
            <SelectField
              label="Product route (sets the free-allocation benchmark)"
              value={preset}
              onChange={setPreset}
              options={PRESET_OPTIONS}
              help="Presets are EU ETS 2021–2025 product benchmarks, used as a proxy. For an exact figure, enter the CBAM benchmark for your CN code."
            />
            {p?.value === null ? (
              <NumberField label="CBAM benchmark for my CN code" unit="tCO2e/t" value={customBench} onChange={setCustomBench} />
            ) : null}
          </InputCard>

          <InputCard title="Carbon prices">
            <Segmented
              label="EU allowance price path"
              value={scenario}
              onChange={pickScenario}
              options={(Object.keys(PRICE_SCENARIOS) as ScenarioKey[]).map((k) => ({ value: k, label: PRICE_SCENARIOS[k].label }))}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Price in 2026" unit="€/tCO2e" value={start} onChange={setStart} />
              <NumberField label="Change per year" unit="€/yr" value={growth} onChange={setGrowth} min={-1000} />
            </div>
            <NumberField
              label="Carbon price already paid at home (optional)"
              unit="€/tCO2e"
              value={paid}
              onChange={setPaid}
              placeholder="0"
              help="An explicit carbon tax or ETS price effectively paid where the goods are made. It reduces the CBAM due."
            />
          </InputCard>
        </div>
      }
      result={
        <ResultPanel
          label="CBAM cost, 2026–2034"
          value={res ? fmtMoney(res.total) : null}
          empty={res ? null : "Enter quantity, embedded emissions and a benchmark."}
          sub={
            first && last ? (
              <>
                {fmtMoney(first.costPerTonne)}/t in {first.year} → {fmtMoney(last.costPerTonne)}/t in {last.year} as free allocation falls from{" "}
                {fmtPct(first.freeShare)} to {fmtPct(last.freeShare)}
              </>
            ) : null
          }
          steps={res?.steps ?? []}
          sourceIds={res?.sourceIds ?? ["cbamReg", "etsDirective"]}
          caveats={res?.caveats ?? []}
          copyText={res ? resultText("CBAM cost 2026–2034", fmtMoney(res.total), res.steps, res.sourceIds) : undefined}
        >
          {res ? (
            <>
              <YearBars rows={res.rows.map((r) => ({ label: String(r.year), value: r.cost }))} format={(n) => fmtMoney(n)} />
              <p className="mt-2 font-mono text-[11px] text-muted">
                Certificates in 2034: {fmt(last!.certificates, 0)} of {fmt(last!.embedded, 0)} tCO2e embedded
              </p>
            </>
          ) : null}
        </ResultPanel>
      }
    />
  );
}
