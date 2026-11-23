/** Display formatting. Calculations never round; only the UI does. */

export function fmt(n: number, maxFrac = 2): string {
  if (!Number.isFinite(n)) return "—";
  return n.toLocaleString("en-US", { maximumFractionDigits: maxFrac });
}

/** Significant-figure formatting for factors (keeps small values legible). */
export function fmtFactor(n: number): string {
  if (!Number.isFinite(n)) return "—";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 100) return fmt(n, 1);
  if (abs >= 1) return fmt(n, 4);
  return n.toPrecision(4).replace(/\.?0+$/, "");
}

/** kg → readable mass of CO2e (kg below one tonne, t above). */
export function fmtMass(kg: number): { value: string; unit: string } {
  if (!Number.isFinite(kg)) return { value: "—", unit: "" };
  if (Math.abs(kg) >= 1000) return { value: fmt(kg / 1000, 2), unit: "tCO2e" };
  return { value: fmt(kg, 1), unit: "kgCO2e" };
}

export function fmtMoney(n: number, currency = "€"): string {
  if (!Number.isFinite(n)) return "—";
  const sign = n < 0 ? "−" : "";
  return `${sign}${currency}${Math.abs(n).toLocaleString("en-US", { maximumFractionDigits: 0 })}`;
}

export function fmtPct(n: number, maxFrac = 1): string {
  return `${fmt(n * 100, maxFrac)}%`;
}

/** Parse a user-typed number; empty or invalid → null (typed absence). */
export function parseNum(s: string): number | null {
  if (s.trim() === "") return null;
  const n = Number(s.replace(/,/g, ""));
  return Number.isFinite(n) ? n : null;
}
