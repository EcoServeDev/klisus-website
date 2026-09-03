import type { CSSProperties } from "react";
import CompareSlider from "@/components/visuals/compare-slider";
import EvidencePlate from "@/components/visuals/evidence-plate";
import Reveal from "@/components/visuals/reveal";
import { PLATES } from "@/lib/plates";

/**
 * CHANGE EVIDENCE — the skeptic's tools: a draggable 2020↔2025 comparison,
 * the same frames in near-infrared, and the NDVI-change summary.
 */

// The comparison figure spans both acquisition windows — its caption must
// say so rather than borrow a single frame's dates.
const COMPARE_PLATE = {
  ...PLATES["apui-2025"],
  dates: "MEDIAN JUN–SEP 2020 → MEDIAN JUN–SEP 2025",
  copernicusYears: "2020–2025",
};

const NIR_PAIR_META =
  `${PLATES["apui-nir-2020"].place} · ${PLATES["apui-nir-2020"].coords} · SENTINEL-2 L2A · ` +
  "NEAR-INFRARED (NIR-R-G) · MEDIAN JUN–SEP 2020 / 2025 · 10 M/PX";

export default function ChangeEvidenceSection() {
  return (
    <section>
      <h2 className="sr-only">Change evidence</h2>
      <div className="mx-auto max-w-6xl space-y-16 px-6 py-20 sm:space-y-20 sm:py-24">
        {/* (a) the comparison — direct interrogation */}
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            Change evidence
          </p>
          <div className="mt-6" style={{ "--i": 1 } as CSSProperties}>
            <EvidencePlate plate={COMPARE_PLATE} n="02">
              <CompareSlider
                before={PLATES["apui-2020"]}
                after={PLATES["apui-2025"]}
                beforeChip="JUN–SEP 2020"
                afterChip="JUN–SEP 2025"
              />
            </EvidencePlate>
          </div>
        </Reveal>

        {/* (b) the same frames through the sensor's channel */}
        <Reveal>
          <p className="kicker" style={{ "--i": 0 } as CSSProperties}>
            What the sensor sees
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2" style={{ "--i": 1 } as CSSProperties}>
            <div>
              <EvidencePlate plate={PLATES["apui-nir-2020"]} n="03" hideCaption />
              <p className="mt-3 text-[13px] font-semibold text-paper-muted">
                Median Jun–Sep 2020
              </p>
            </div>
            <div>
              <EvidencePlate plate={PLATES["apui-nir-2025"]} n="04" hideCaption />
              <p className="mt-3 text-[13px] font-semibold text-paper-muted">
                Median Jun–Sep 2025
              </p>
            </div>
          </div>
          <div className="mt-6 max-w-[70ch]" style={{ "--i": 2 } as CSSProperties}>
            <p className="text-[16px] leading-relaxed text-ink">
              {PLATES["apui-nir-2020"].finding}
            </p>
            <p className="mt-2 font-mono text-[11px] text-paper-muted">{NIR_PAIR_META}</p>
            <p className="mt-1 font-mono text-[10px] text-paper-muted/90">
              Contains modified Copernicus Sentinel data (2020, 2025), processed by KliSus
            </p>
          </div>
        </Reveal>

        {/* (c) the analytical summary */}
        <Reveal>
          <div style={{ "--i": 0 } as CSSProperties}>
            <EvidencePlate plate={PLATES["apui-ndvi-delta"]} n="05" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
