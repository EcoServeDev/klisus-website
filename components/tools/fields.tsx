"use client";

/**
 * Form primitives for the calculators. Numbers are held as strings in state
 * so a field can be empty (typed absence) rather than silently 0.
 */

import { useId, type ReactNode } from "react";

const INPUT =
  "w-full rounded-lg border border-paper-line bg-paper px-3 py-2.5 text-[15px] text-ink " +
  "transition-colors placeholder:text-paper-muted/60 hover:border-ink/30 " +
  "focus:border-green-ink focus:outline-none focus:ring-2 focus:ring-green-ink/20";

export function Field({
  label,
  help,
  children,
  htmlFor,
}: {
  label: ReactNode;
  help?: ReactNode;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={htmlFor} className="mb-1.5 block text-[13px] font-semibold text-ink">
        {label}
      </label>
      {children}
      {help ? <p className="mt-1.5 text-[12px] leading-relaxed text-paper-muted">{help}</p> : null}
    </div>
  );
}

export function NumberField({
  label,
  value,
  onChange,
  unit,
  help,
  placeholder,
  min = 0,
  step = "any",
}: {
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  help?: ReactNode;
  placeholder?: string;
  min?: number;
  step?: string;
}) {
  const id = useId();
  return (
    <Field label={label} help={help} htmlFor={id}>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`${INPUT} font-mono ${unit ? "pr-20" : ""}`}
        />
        {unit ? (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center font-mono text-[12px] text-paper-muted">
            {unit}
          </span>
        ) : null}
      </div>
    </Field>
  );
}

export function TextField({
  label,
  value,
  onChange,
  help,
  placeholder,
  mono = false,
}: {
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  help?: ReactNode;
  placeholder?: string;
  mono?: boolean;
}) {
  const id = useId();
  return (
    <Field label={label} help={help} htmlFor={id}>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`${INPUT} ${mono ? "font-mono" : ""}`}
        autoComplete="off"
      />
    </Field>
  );
}

export type Option = { value: string; label: string; group?: string };

export function SelectField({
  label,
  value,
  onChange,
  options,
  help,
}: {
  label: ReactNode;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  help?: ReactNode;
}) {
  const id = useId();
  const groups = [...new Set(options.map((o) => o.group ?? ""))];
  return (
    <Field label={label} help={help} htmlFor={id}>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className={`${INPUT} appearance-none bg-[length:10px] pr-9`} style={SELECT_ARROW}>
        {groups.length > 1
          ? groups.map((g) => (
              <optgroup key={g} label={g}>
                {options
                  .filter((o) => (o.group ?? "") === g)
                  .map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
              </optgroup>
            ))
          : options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
      </select>
    </Field>
  );
}

const SELECT_ARROW = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 3.5 5 6.5 8 3.5' fill='none' stroke='%235c5346' stroke-width='1.5'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.85rem center",
} as const;

export function Segmented<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: ReactNode;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-1.5 block text-[13px] font-semibold text-ink">{label}</legend>
      <div className="inline-flex rounded-lg border border-paper-line bg-paper-surface p-1">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
              value === o.value ? "bg-paper text-ink shadow-[0_1px_2px_rgba(13,21,18,0.08)]" : "text-paper-muted hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Checkbox({
  label,
  checked,
  onChange,
  help,
}: {
  label: ReactNode;
  checked: boolean;
  onChange: (v: boolean) => void;
  help?: ReactNode;
}) {
  const id = useId();
  return (
    <div className="flex gap-3">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 h-4 w-4 flex-none accent-[var(--green-ink)]"
      />
      <div>
        <label htmlFor={id} className="text-[14px] font-medium text-ink">
          {label}
        </label>
        {help ? <p className="mt-0.5 text-[12px] leading-relaxed text-paper-muted">{help}</p> : null}
      </div>
    </div>
  );
}

/** Two-column layout: inputs left, sticky result right (stacks on mobile). */
export function CalcLayout({ inputs, result }: { inputs: ReactNode; result: ReactNode }) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-8">
      <div className="min-w-0">{inputs}</div>
      <div className="min-w-0">{result}</div>
    </div>
  );
}

/** Card wrapping a calculator's inputs. */
export function InputCard({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <section className="rounded-2xl border border-paper-line/70 bg-paper p-5 shadow-[var(--shadow-soft)] sm:p-7">
      {title ? <h2 className="mb-5 text-[15px] font-semibold text-ink">{title}</h2> : null}
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export function RowButton({ children, onClick, tone = "add" }: { children: ReactNode; onClick: () => void; tone?: "add" | "remove" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        tone === "add"
          ? "inline-flex items-center gap-1.5 rounded-full border border-dashed border-green-ink/40 px-4 py-2 text-[13px] font-medium text-green-ink transition-colors hover:border-green-ink hover:bg-green-wash"
          : "text-[12px] font-medium text-paper-muted underline-offset-2 transition-colors hover:text-risk-rust hover:underline"
      }
    >
      {children}
    </button>
  );
}
