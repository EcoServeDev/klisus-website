import Image from "next/image";
import Link from "next/link";

/**
 * Footer: four columns, then the site-wide disclaimer (verbatim from the
 * content doc — do not edit), then the baseline row.
 */

// href: null renders a non-interactive "soon" entry — never a dead "#" link.
const COLUMNS: { title: string; links: { label: string; href: string | null; external?: boolean }[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "EUDR Land Evidence", href: "/solutions/eudr-land-evidence" },
      { label: "Climate Intelligence", href: "/intelligence" },
      { label: "Plot Check tool", href: "/plot-check" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Intelligence", href: "/intelligence" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Substack", href: null },
      { label: "X", href: "https://x.com/Klisus_io", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/klisus/", external: true },
    ],
  },
];

const DISCLAIMER =
  "KliSus provides environmental intelligence, analytical information, and decision-support " +
  "outputs. Our materials and services do not constitute legal, financial, investment, " +
  "regulatory, or professional advice, and do not guarantee compliance, commercial outcomes, " +
  "or investment performance. Customers remain responsible for their own assessments, " +
  "decisions, due-diligence processes, and regulatory obligations.";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.28em] text-cream">
              <Image src="/klisus-logo.png" alt="" width={22} height={22} />
              KliSus
            </p>
            <p className="voice-label mt-2">Climate Intelligence &amp; Economics</p>
            <p className="mt-4 font-mono text-[13px] text-muted">
              <a href="mailto:teams@klisus.com" className="transition-colors hover:text-cream">
                teams@klisus.com
              </a>
              <br />
              Dubai, UAE
            </p>
          </div>
          {COLUMNS.map((col, ci) => (
            <div key={col.title}>
              <p className="voice-label mb-4">{`0${ci + 1} / ${col.title}`}</p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === null ? (
                      <span className="text-[14px] text-muted">
                        {link.label}{" "}
                        <span className="font-mono text-[11px] uppercase tracking-[0.08em]">
                          · soon
                        </span>
                      </span>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-muted transition-colors hover:text-cream"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href as never}
                        className="text-[14px] text-muted transition-colors hover:text-cream"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-line pt-8 text-[12px] leading-relaxed text-muted">
          {DISCLAIMER}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="voice-label">KliSus / Climate Intelligence &amp; Economics</p>
          <p className="font-mono text-[11px] uppercase text-muted">
            © {new Date().getFullYear()} · 25.2048° N, 55.2708° E — Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
