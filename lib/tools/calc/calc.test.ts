import { describe, expect, it } from "vitest";
import { calcCarbonPricing } from "@/lib/tools/calc/carbon-pricing";
import { calcCbamCost, checkCbamCode } from "@/lib/tools/calc/cbam";
import { calcCloud, serversToKwh } from "@/lib/tools/calc/cloud";
import { calcElectricity } from "@/lib/tools/calc/electricity";
import { calcFreight } from "@/lib/tools/calc/freight";
import { calcFuel } from "@/lib/tools/calc/fuel";
import { calcProduct } from "@/lib/tools/calc/product";
import { calcSolar, irrOf, npvOf } from "@/lib/tools/calc/solar";
import { FREE_ALLOCATION_REMAINING } from "@/lib/tools/factors/cbam";
import { GRID, gridFor } from "@/lib/tools/factors/grid";
import { SOURCES } from "@/lib/tools/factors/sources";

const UAE = gridFor("ARE")!.factor.value; // 0.4697

describe("data integrity", () => {
  it("every grid factor is positive, sourced and dated", () => {
    expect(GRID.length).toBeGreaterThan(50);
    for (const g of GRID) {
      expect(g.factor.value).toBeGreaterThan(0);
      expect(g.factor.value).toBeLessThan(1.2);
      expect(SOURCES[g.factor.sourceId]).toBeDefined();
      expect(g.factor.year).toMatch(/^20\d\d$/);
    }
  });
  it("free allocation falls monotonically to zero in 2034", () => {
    const ys = Object.keys(FREE_ALLOCATION_REMAINING).map(Number).sort();
    for (let i = 1; i < ys.length; i++) expect(FREE_ALLOCATION_REMAINING[ys[i]]).toBeLessThan(FREE_ALLOCATION_REMAINING[ys[i - 1]]);
    expect(FREE_ALLOCATION_REMAINING[2026]).toBe(0.975);
    expect(FREE_ALLOCATION_REMAINING[2034]).toBe(0);
  });
});

describe("electricity", () => {
  it("monthly kWh is annualised and multiplied by the grid factor", () => {
    const r = calcElectricity({ kwh: 1000, period: "month", country: "ARE", renewableShare: 0 })!;
    expect(r.annualKwh).toBe(12000);
    expect(r.locationKg).toBeCloseTo(12000 * UAE, 6);
    expect(r.marketKg).toBe(r.locationKg);
  });
  it("renewable share reduces the market-based figure only", () => {
    const r = calcElectricity({ kwh: 10000, period: "year", country: "ARE", renewableShare: 0.25 })!;
    expect(r.marketKg).toBeCloseTo(r.locationKg * 0.75, 6);
  });
  it("unknown country → null (typed absence)", () => {
    expect(calcElectricity({ kwh: 1, period: "year", country: "XXX", renewableShare: 0 })).toBeNull();
  });
});

describe("fuel", () => {
  it("100 L diesel = 266.155 kgCO2e (DESNZ 2025)", () => {
    expect(calcFuel([{ fuelId: "diesel", unit: "litres", quantity: 100 }]).totalKg).toBeCloseTo(266.155, 3);
  });
  it("sums lines and skips units DESNZ doesn't publish", () => {
    const r = calcFuel([
      { fuelId: "diesel", unit: "litres", quantity: 100 },
      { fuelId: "coal-industrial", unit: "litres", quantity: 999 },
      { fuelId: "natural-gas", unit: "cubic metres", quantity: 1000 },
    ]);
    expect(r.totalKg).toBeCloseTo(266.155 + 2066.72, 2);
    expect(r.lines[1].kg).toBeNull();
  });
});

describe("freight", () => {
  it("t × km × intensity per leg", () => {
    const r = calcFreight([
      { modeId: "hgv-all", tonnes: 10, km: 100 },
      { modeId: "sea-container", tonnes: 10, km: 10000 },
    ]);
    expect(r.totalTkm).toBe(101000);
    expect(r.totalKg).toBeCloseTo(1000 * 0.10163 + 100000 * 0.01612, 6);
  });
});

describe("product", () => {
  it("materials + energy + transport", () => {
    const r = calcProduct({
      materials: [
        { materialId: "glass", kg: 0.5 },
        { materialId: "custom", kg: 0.5, customKgPerKg: 2 },
      ],
      processKwh: 1,
      country: "ARE",
      transportModeId: "hgv-all",
      transportKm: 100,
    });
    expect(r.materialsKg).toBeCloseTo(0.5 * 1.40276667 + 1, 6);
    expect(r.energyKg).toBeCloseTo(UAE, 6);
    expect(r.transportKg).toBeCloseTo(0.001 * 100 * 0.10163, 9);
    expect(r.sourceIds).toEqual(expect.arrayContaining(["desnz", "userInput", "ember"]));
  });
  it("custom material without a factor is excluded, not zeroed", () => {
    const r = calcProduct({ materials: [{ materialId: "custom", kg: 1 }], processKwh: 0, country: "ARE", transportModeId: "", transportKm: 0 });
    expect(r.steps).toHaveLength(0);
  });
});

describe("cloud", () => {
  it("servers × W × h → kWh, then × PUE × grid", () => {
    expect(serversToKwh(10, 200, 8760)).toBe(17520);
    const r = calcCloud({ country: "ARE", itKwh: 17520, pue: 1.5, renewableShare: 0 })!;
    expect(r.facilityKwh).toBe(26280);
    expect(r.locationKg).toBeCloseTo(26280 * UAE, 6);
  });
  it("PUE below 1 is rejected", () => {
    expect(calcCloud({ country: "ARE", itKwh: 1, pue: 0.9, renewableShare: 0 })).toBeNull();
  });
});

describe("CBAM code checker", () => {
  it.each([
    ["7208 51 20", "in"], // flat-rolled steel
    ["720211", "in"], // ferro-manganese stays in
    ["72023000", "excluded"], // ferro-silico-manganese excluded
    ["7204 10 00", "excluded"], // scrap excluded
    ["7202", "check"], // ambiguous heading
    ["2523", "check"], // only some cement codes
    ["31056000", "excluded"],
    ["3105 20 10", "in"],
    ["7604.29.10", "in"],
    ["2804 10 00", "in"],
    ["6109 10 00", "out"], // T-shirts
    ["7315 11", "out"], // chains — not in Annex I
    ["72", "invalid"],
  ])("%s → %s", (code, status) => {
    expect(checkCbamCode(code).status).toBe(status);
  });
});

describe("CBAM cost", () => {
  it("worked example: 1000 t steel at 2.0 t/t, benchmark 1.288, €80 flat", () => {
    const r = calcCbamCost({ tonnes: 1000, intensity: 2, benchmark: 1.288, price: { start: 80, growth: 0 }, paidAbroad: 0 })!;
    const y26 = r.rows[0];
    expect(y26.embedded).toBe(2000);
    expect(y26.adjustment).toBeCloseTo(1000 * 1.288 * 0.975, 6); // 1255.8
    expect(y26.certificates).toBeCloseTo(744.2, 6);
    expect(y26.cost).toBeCloseTo(744.2 * 80, 4);
    const y34 = r.rows[r.rows.length - 1];
    expect(y34.certificates).toBe(2000);
    expect(y34.cost).toBe(160000);
  });
  it("adjustment never exceeds embedded emissions; carbon price paid abroad is deducted", () => {
    const r = calcCbamCost({ tonnes: 100, intensity: 0.5, benchmark: 1.288, price: { start: 80, growth: 0 }, paidAbroad: 30 })!;
    expect(r.rows[0].certificates).toBe(0);
    expect(r.rows[8].cost).toBeCloseTo(50 * (80 - 30), 6);
  });
});

describe("carbon pricing", () => {
  it("applies share, reduction, phase-out and domestic price", () => {
    const flat = { start: 100, growth: 0 };
    const r = calcCarbonPricing({
      emissions: 1000,
      exposedShare: 0.5,
      annualReduction: 0,
      applyPhaseOut: true,
      domesticPrice: 20,
      scenarios: { low: flat, base: flat, high: flat },
    })!;
    expect(r.rows[0].cost.base).toBeCloseTo(500 * 0.025 * 80, 6);
    expect(r.rows[8].cost.base).toBeCloseTo(500 * 1 * 80, 6);
  });
});

describe("solar", () => {
  it("NPV and IRR are consistent", () => {
    const cfs = [-1000, 300, 300, 300, 300, 300];
    const irr = irrOf(cfs)!;
    expect(npvOf(irr, cfs)).toBeCloseTo(0, 4);
    expect(irr).toBeCloseTo(0.1524, 3);
  });
  it("simple payback with no escalation or degradation", () => {
    const r = calcSolar({
      kwp: 10,
      yieldKwhPerKwp: 1000,
      capex: 10000,
      tariff: 0.25,
      escalation: 0,
      degradation: 0,
      omShare: 0,
      discountRate: 0.08,
      years: 25,
      country: "ARE",
    })!;
    expect(r.firstYearKwh).toBe(10000);
    expect(r.paybackYears).toBeCloseTo(4, 6);
    expect(r.co2FirstYearKg).toBeCloseTo(10000 * UAE, 6);
  });
});
