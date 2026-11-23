"use client";

import { useState } from "react";
import CountrySelect, { useCountry } from "@/components/tools/country-select";
import { CalcLayout, InputCard, NumberField } from "@/components/tools/fields";
import { ResultPanel, resultText, YearBars } from "@/components/tools/result-panel";
import { calcSolar } from "@/lib/tools/calc/solar";
import { fmt, fmtMoney, fmtPct, parseNum } from "@/lib/tools/format";

export default function SolarCalculator() {
  const [country, setCountry] = useCountry();
  const [kwp, setKwp] = useState("100");
  const [yieldV, setYield] = useState("");
  const [capex, setCapex] = useState("");
  const [tariff, setTariff] = useState("");
  const [esc, setEsc] = useState("2");
  const [deg, setDeg] = useState("0.5");
  const [om, setOm] = useState("1");
  const [disc, setDisc] = useState("8");
  const [years, setYears] = useState("25");

  const n = (s: string) => parseNum(s);
  const vals = [n(kwp), n(yieldV), n(capex), n(tariff)];
  const res = vals.every((v) => v !== null)
    ? calcSolar({
        kwp: vals[0]!,
        yieldKwhPerKwp: vals[1]!,
        capex: vals[2]!,
        tariff: vals[3]!,
        escalation: (n(esc) ?? 0) / 100,
        degradation: (n(deg) ?? 0) / 100,
        omShare: (n(om) ?? 0) / 100,
        discountRate: (n(disc) ?? 0) / 100,
        years: Math.round(n(years) ?? 25),
        country,
      })
    : null;

  return (
    <CalcLayout
      inputs={
        <div className="space-y-5">
          <InputCard title="System">
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="System size" unit="kWp" value={kwp} onChange={setKwp} />
              <NumberField
                label="Specific yield"
                unit="kWh/kWp/yr"
                value={yieldV}
                onChange={setYield}
                placeholder="from Global Solar Atlas"
                help={
                  <>
                    Click your site on{" "}
                    <a href="https://globalsolaratlas.info/" target="_blank" rel="noopener noreferrer" className="text-green-ink underline underline-offset-2">
                      globalsolaratlas.info
                    </a>{" "}
                    and copy &ldquo;Specific photovoltaic power output&rdquo; (PVOUT), per year.
                  </>
                }
              />
            </div>
            <CountrySelect value={country} onChange={setCountry} help="Used for CO2 avoided." />
          </InputCard>
          <InputCard title="Money (any currency, keep it consistent)">
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Installed cost (capex)" value={capex} onChange={setCapex} />
              <NumberField label="Grid tariff you avoid" unit="per kWh" value={tariff} onChange={setTariff} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <NumberField label="Tariff rise" unit="%/yr" value={esc} onChange={setEsc} min={-100} />
              <NumberField label="O&M cost" unit="% capex/yr" value={om} onChange={setOm} />
              <NumberField label="Discount rate" unit="%" value={disc} onChange={setDisc} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <NumberField label="Panel degradation" unit="%/yr" value={deg} onChange={setDeg} />
              <NumberField label="Lifetime" unit="years" value={years} onChange={setYears} />
            </div>
          </InputCard>
        </div>
      }
      result={
        <ResultPanel
          label="Simple payback"
          value={res ? (res.paybackYears === null ? "Not within lifetime" : fmt(res.paybackYears, 1)) : null}
          unit={res && res.paybackYears !== null ? "years" : undefined}
          empty={res ? null : "Enter specific yield, installed cost and tariff."}
          sub={
            res ? (
              <>
                NPV {fmtMoney(res.npv, "")} · IRR {res.irr === null ? "n/a" : fmtPct(res.irr)}
                <br />
                {fmt(res.firstYearKwh)} kWh in year 1
                {res.co2LifetimeKg !== null ? <> · {fmt(res.co2LifetimeKg / 1000, 0)} tCO2e avoided over lifetime</> : null}
              </>
            ) : null
          }
          steps={res?.steps ?? []}
          sourceIds={res?.sourceIds ?? ["globalSolarAtlas", "ember"]}
          caveats={res?.caveats ?? []}
          copyText={
            res
              ? resultText(
                  "Solar savings",
                  `payback ${res.paybackYears === null ? "n/a" : fmt(res.paybackYears, 1) + " years"}, NPV ${fmtMoney(res.npv, "")}`,
                  res.steps,
                  res.sourceIds,
                )
              : undefined
          }
        >
          {res ? (
            <>
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Cumulative cash position</p>
              <YearBars
                rows={res.rows.filter((r) => r.year % 5 === 0 || r.year === 1).map((r) => ({ label: `Y${r.year}`, value: Math.max(0, r.cumulative) }))}
                format={(v) => fmtMoney(v, "")}
              />
            </>
          ) : null}
        </ResultPanel>
      }
    />
  );
}
