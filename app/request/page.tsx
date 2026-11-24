import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RequestForm from "@/components/request/request-form";

export const metadata: Metadata = {
  title: "Request a Plot Assessment",
  description:
    "Request early access to KliSus Plot Check: plot-level satellite evidence to support EUDR due diligence.",
};

export default function RequestPage() {
  return (
    <section className="dark-band relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden bg-forest-black px-4 py-16 sm:px-6">
      <Image
        src="/plates/apui-hero-2025.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-60 blur-[4px]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-forest-black/70" aria-hidden="true" />

      <div className="relative w-full max-w-lg rounded-2xl bg-paper p-6 shadow-[0_2px_4px_rgba(13,21,18,0.1),0_24px_60px_rgba(13,21,18,0.4)] sm:p-10">
        <p className="kicker">Early access</p>
        <h1 className="font-display mt-4 text-[26px] font-medium text-ink sm:text-[30px]">
          Request a plot assessment
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-paper-muted">
          Plot Check is invite-only while we onboard early users. Tell us about your plots and
          we&apos;ll get back to you.{" "}
          <Link href="/solutions/eudr-land-evidence" className="font-medium text-green-ink hover:underline">
            What you receive
          </Link>
          .
        </p>
        <RequestForm />
        <p className="mt-6 border-t border-paper-line pt-5 text-[14px] text-paper-muted">
          Already have an access code?{" "}
          <a href="/plot-check" className="font-medium text-green-ink hover:underline">
            Open Plot Check
          </a>
        </p>
      </div>
    </section>
  );
}
