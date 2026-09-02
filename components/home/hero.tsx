import Button from "@/components/ui/button";
import EvidencePlate from "@/components/visuals/evidence-plate";
import { PLATES } from "@/lib/plates";

/**
 * 01 — HERO. The evidence leads: headline beside PLATE 01, a framed
 * true-color survey plate of the Apuí frontier with one annotated clearing.
 * Light page, no backdrop imagery — the plate is an exhibit, not a mood.
 */
export default function Hero() {
  return (
    <section>
      <div className="border-t border-paper-line">
        <div className="mx-auto flex h-10 max-w-6xl items-center px-6">
          <span className="voice-label">
            SURVEY / CLIMATE INTELLIGENCE &amp; ECONOMICS
          </span>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-x-6 gap-y-10 px-6 pb-20 pt-10 lg:grid-cols-12">
        <div className="animate-fade-up lg:col-span-5">
          <h1 className="font-display max-w-[13ch] text-[36px] text-ink sm:text-[44px] lg:text-[56px]">
            Evidence for decisions in a changing climate.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
            KliSus combines Earth observation, geospatial intelligence, and
            environmental analysis to help businesses, institutions, and
            investors assess environmental risk, evaluate climate and nature
            claims, and make better-informed decisions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/solutions/eudr-land-evidence" size="lg">
              Explore EUDR Land Evidence →
            </Button>
            <Button href="mailto:teams@klisus.com" variant="secondary" size="lg">
              Talk to KliSus
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7">
          <EvidencePlate
            plate={PLATES["apui-hero"]}
            n="01"
            priority
            annotations={[
              { x: 40, y: 34, w: 18, h: 38, label: "CLEARED AFTER BASELINE", tone: "rust" },
            ]}
            className="animate-fade-up"
          />
        </div>
      </div>
    </section>
  );
}
