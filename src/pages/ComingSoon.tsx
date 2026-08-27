import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import klisusLogo from "@/assets/klisus-logo.jpeg";

const SECTIONS: Record<string, { title: string; note?: string }> = {
  "/land-checker": {
    title: "Land Checker",
    note: "Free land checker — live 14 Sep 2026",
  },
  "/reports": { title: "EUDR Reports" },
  "/methodology": { title: "Methodology" },
  "/research": { title: "Research" },
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const section = SECTIONS[pathname] ?? { title: "Klisus" };

  return (
    <>
      <Helmet>
        <title>{`${section.title} — Coming Soon | Klisus`}</title>
        {/* placeholder pages shouldn't get indexed */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex min-h-screen flex-col bg-[#0F0F0F] text-white antialiased">
        <header className="border-b border-white/10 px-6 py-4 sm:px-8">
          <Link to="/" aria-label="Klisus home" className="inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
              <img src={klisusLogo} alt="" className="block h-full w-full object-contain" />
            </span>
            <span className="text-[15px] font-bold tracking-[0.22em]">KLISUS</span>
          </Link>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 pb-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#6f6f6f]">
            {section.title}
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-medium tracking-[-0.01em]">
            Coming <span className="text-[#A8D5A8]">soon</span>
          </h1>
          {section.note && (
            <p className="text-[15px] text-[#9a9a9a]">{section.note}</p>
          )}
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[13.5px] text-white transition-colors duration-200 hover:border-[#A8D5A8] hover:text-[#A8D5A8]"
          >
            Back to home
          </Link>
        </main>
      </div>
    </>
  );
};

export default ComingSoon;
