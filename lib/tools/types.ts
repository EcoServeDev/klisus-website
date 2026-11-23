/**
 * Shared types for the free tools. Every number a tool shows is traceable:
 * a Factor carries its source, and a CalcResult carries the arithmetic steps
 * and the list of sources used. When a value can't be sourced it is absent
 * — never guessed.
 */

export type Source = {
  id: string;
  name: string;
  publisher: string;
  url: string;
  /** Data year or edition, e.g. "2025". */
  year: string;
};

export type Factor = {
  value: number;
  unit: string;
  sourceId: string;
  /** Data year for this specific value (may differ from the source edition). */
  year?: string;
  note?: string;
};

export type Step = {
  label: string;
  /** Human-readable arithmetic, e.g. "1,000 kWh × 0.4697 kgCO2e/kWh". */
  expr: string;
  value: string;
};

export type CalcResult = {
  steps: Step[];
  sourceIds: string[];
  caveats: string[];
};
