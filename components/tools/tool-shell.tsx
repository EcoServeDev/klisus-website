import Link from "next/link";
import type { ReactNode } from "react";
import CTABand from "@/components/ui/cta-band";
import { TOOLS, toolBySlug } from "@/lib/tools/registry";

/**
 * Server frame for every tool page: breadcrumb, header, the calculator
 * (client), "about this tool" notes, related tools and the closing CTA.
 */
export default function ToolShell({
  slug,
  lede,
  children,
  notes,
}: {
  slug: string;
  lede: ReactNode;
  children: ReactNode;
  notes?: ReactNode;
}) {
  const tool = toolBySlug(slug);
  const related = TOOLS.filter((t) => t.slug !== slug && t.category === tool.category)
    .concat(TOOLS.filter((t) => t.slug !== slug && t.category !== tool.category))
    .slice(0, 3);

  return (
    <>
      <section className="bg-paper-surface">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 sm:pt-16">
          <nav aria-label="Breadcrumb" className="text-[13px] text-paper-muted">
            <Link href="/tools" className="hover:text-ink">
              Free tools
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">{tool.title}</span>
          </nav>
          <p className="kicker mt-6">
            {tool.category} · {tool.method}
          </p>
          <h1 className="font-display mt-4 max-w-[22ch] text-[34px] font-medium text-ink sm:text-[44px]">{tool.title}</h1>
          <div className="mt-5 max-w-[60ch] text-[17px] leading-relaxed text-paper-muted">{lede}</div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">{children}</div>
      </section>

      {notes ? (
        <section className="bg-paper">
          <div className="mx-auto max-w-3xl px-4 py-16 text-[15px] leading-relaxed text-paper-muted sm:px-6 [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:text-ink [&_h2:first-child]:mt-0 [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            {notes}
          </div>
        </section>
      ) : null}

      <section className="border-t border-paper-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">More free tools</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.slug} slug={t.slug} title={t.title} blurb={t.blurb} meta={t.method} />
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Need evidence, not just an estimate?"
        lede="KliSus turns satellite and environmental data into evidence your buyers and lenders can check."
        primary={{ label: "Talk to us", href: "/partnerships" }}
        secondary={{ label: "All free tools", href: "/tools" }}
      />
    </>
  );
}

export function ToolCard({ slug, title, blurb, meta }: { slug: string; title: string; blurb: string; meta: string }) {
  return (
    <Link
      href={`/tools/${slug}` as never}
      className="group flex h-full flex-col rounded-2xl border border-paper-line/70 bg-paper p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
    >
      <span className="text-[17px] font-semibold text-ink">{title}</span>
      <span className="mt-2 flex-1 text-[14px] leading-relaxed text-paper-muted">{blurb}</span>
      <span className="mt-5 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-muted">{meta}</span>
        <span className="text-[14px] font-semibold text-green-ink transition-transform group-hover:translate-x-0.5" aria-hidden="true">
          →
        </span>
      </span>
    </Link>
  );
}
