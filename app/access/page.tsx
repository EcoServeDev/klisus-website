"use client";

/**
 * Invite gate for Klisus Plot Check. Enforcement happens at the edge
 * (Caddy redirects /plot-check* here without the invite cookie); this page
 * is the UX: enter the shared access code, receive the cookie, continue.
 * A soft gate for the invite-only phase — not a security boundary.
 */

import Image from "next/image";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const ACCESS_CODE = "Klisus@2026";
const COOKIE = "klisus_invite=granted-k26; path=/; max-age=2592000; secure; samesite=lax";

function safeNext(raw: string | null): string {
  if (raw && raw.startsWith("/plot-check") && !raw.startsWith("//")) return raw;
  return "/plot-check";
}

function AccessForm() {
  const params = useSearchParams();
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim() === ACCESS_CODE) {
      document.cookie = COOKIE;
      window.location.assign(safeNext(params.get("next")));
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={submit} className="mt-8">
      <label htmlFor="access-code" className="block text-[14px] font-medium text-paper-muted">
        Access code
      </label>
      <input
        id="access-code"
        type="password"
        value={code}
        onChange={(e) => {
          setCode(e.target.value);
          setError(false);
        }}
        autoFocus
        autoComplete="off"
        className="mt-2 w-full rounded-lg border border-paper-line bg-paper px-4 py-3 text-[16px] text-ink outline-none focus:border-green-ink"
      />
      {error ? (
        <p role="alert" className="mt-2 text-[14px] text-risk-rust">
          That code isn&apos;t right. Check your invite and try again.
        </p>
      ) : null}
      <button
        type="submit"
        className="group mt-5 inline-flex w-full items-center justify-between rounded-full bg-forest-black py-2 pl-6 pr-2 text-[16px] font-medium text-cream transition-colors hover:bg-surface-2"
      >
        <span>Enter Plot Check</span>
        <span
          className="grid h-9 w-9 place-items-center rounded-full bg-ndvi-green text-forest-black"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9m0 0L7.75 3.25M11.5 7l-3.75 3.75"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </form>
  );
}

export default function AccessPage() {
  return (
    <section className="dark-band relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-forest-black px-6 py-16">
      <Image
        src="/plates/apui-hero-2025.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-60 blur-[4px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-forest-black/70" aria-hidden="true" />

      <div className="relative w-full max-w-md rounded-2xl bg-paper p-8 shadow-[0_2px_4px_rgba(13,21,18,0.1),0_24px_60px_rgba(13,21,18,0.4)] sm:p-10">
        <p className="kicker">Invite only</p>
        <h1 className="font-display mt-4 text-[26px] font-medium text-ink sm:text-[30px]">
          Klisus Plot Check is currently invite-only.
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-paper-muted">
          Enter your access code to continue. Don&apos;t have one?{" "}
          <a href="/request" className="font-medium text-green-ink hover:underline">
            Request an invite
          </a>
          .
        </p>
        <Suspense fallback={null}>
          <AccessForm />
        </Suspense>
      </div>
    </section>
  );
}
