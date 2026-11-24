"use client";

/**
 * Early-access request. Posts to the product API's existing waitlist endpoint
 * (klisus/apps/api — POST /api/waitlist: email, plots_estimate, role ≤64).
 * Role carries "<role> · <blocker>[ · from:<slug>]" so we can count how many
 * operators are blocked on supplier polygons — the trigger for building the
 * supplier portal. No backend change; Caddy exempts this path from the gate.
 */

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

const ENDPOINT = "/plot-check/api/waitlist";

const ROLES = [
  { value: "operator", label: "EU operator / importer" },
  { value: "trader", label: "Trader" },
  { value: "exporter", label: "Exporter / processor" },
  { value: "coop", label: "Co-operative / producer group" },
  { value: "other", label: "Other" },
];

const BLOCKERS = [
  { value: "supplier-polygons", label: "Getting usable plot polygons from suppliers" },
  { value: "plot-checks", label: "Checking plots for land-use change since 2020" },
  { value: "dds", label: "Preparing geolocation data for the due diligence statement" },
  { value: "other", label: "Something else" },
];

const input =
  "mt-2 w-full rounded-lg border border-paper-line bg-paper px-4 py-3 text-[16px] text-ink outline-none focus:border-green-ink";
const label = "block text-[14px] font-medium text-paper-muted";

function Form() {
  const params = useSearchParams();
  const from = (params.get("from") ?? "").replace(/[^a-z0-9-]/gi, "").slice(0, 24);

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("operator");
  const [plots, setPlots] = useState("");
  const [blocker, setBlocker] = useState("supplier-polygons");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const n = Number(plots);
    if (!Number.isInteger(n) || n < 1) return;
    setState("sending");
    const roleField = [role, blocker, from && `from:${from}`].filter(Boolean).join(" · ").slice(0, 64);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, plots_estimate: Math.min(n, 1_000_000), role: roleField }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "done") {
    return (
      <div role="status" className="mt-8 rounded-xl border border-paper-line bg-paper-surface p-6">
        <p className="text-[17px] font-semibold text-ink">Thanks — we have your request.</p>
        <p className="mt-2 text-[15px] leading-relaxed text-paper-muted">
          We&apos;ll reply from teams@klisus.com with an access code or next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-5">
      <div>
        <label htmlFor="rq-email" className={label}>
          Work email
        </label>
        <input
          id="rq-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={input}
        />
      </div>
      <div>
        <label htmlFor="rq-role" className={label}>
          You are
        </label>
        <select id="rq-role" value={role} onChange={(e) => setRole(e.target.value)} className={input}>
          {ROLES.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="rq-plots" className={label}>
          Roughly how many plots?
        </label>
        <input
          id="rq-plots"
          type="number"
          inputMode="numeric"
          min={1}
          step={1}
          required
          value={plots}
          onChange={(e) => setPlots(e.target.value)}
          className={input}
        />
      </div>
      <fieldset>
        <legend className={label}>Biggest blocker right now</legend>
        <div className="mt-2 space-y-2">
          {BLOCKERS.map((b) => (
            <label key={b.value} className="flex cursor-pointer items-start gap-3 text-[15px] text-ink">
              <input
                type="radio"
                name="blocker"
                value={b.value}
                checked={blocker === b.value}
                onChange={() => setBlocker(b.value)}
                className="mt-1 accent-[var(--color-green-ink)]"
              />
              {b.label}
            </label>
          ))}
        </div>
      </fieldset>

      {state === "error" ? (
        <p role="alert" className="text-[14px] text-risk-rust">
          That didn&apos;t go through. Please email{" "}
          <a href="mailto:teams@klisus.com" className="font-medium underline">
            teams@klisus.com
          </a>{" "}
          instead.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-forest-black px-6 py-3 text-[16px] font-medium text-cream transition-colors hover:bg-surface-2 disabled:opacity-60"
      >
        {state === "sending" ? "Sending…" : "Request access"}
      </button>
      <p className="text-[13px] leading-relaxed text-paper-muted">
        We use your email only to reply about this request.
      </p>
    </form>
  );
}

export default function RequestForm() {
  return (
    <Suspense fallback={null}>
      <Form />
    </Suspense>
  );
}
