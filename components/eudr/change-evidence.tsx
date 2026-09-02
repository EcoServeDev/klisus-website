import SectionRule from "@/components/ui/section-rule";
import CompareSlider from "@/components/visuals/compare-slider";
import EvidencePlate from "@/components/visuals/evidence-plate";
import { PLATES } from "@/lib/plates";

/**
 * CHANGE EVIDENCE — the skeptic's tools, in the plate language:
 * a draggable 2020↔2025 comparison, the same frames in near-infrared,
 * and the NDVI-change plate that inks only where greenness changed.
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
      <SectionRule label="CHANGE EVIDENCE" srTitle="Change evidence" />
      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-20 pt-10 sm:space-y-20 sm:pb-28">
        {/* (a) the comparison — direct interrogation */}
        <EvidencePlate plate={COMPARE_PLATE} n="02">
          <CompareSlider
            before={PLATES["apui-2020"]}
            after={PLATES["apui-2025"]}
            beforeChip="JUN–SEP 2020"
            afterChip="JUN–SEP 2025"
          />
        </EvidencePlate>

        {/* (b) the same frames through the sensor's channel */}
        <div>
          <p className="voice-label">WHAT THE SENSOR SEES</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <EvidencePlate plate={PLATES["apui-nir-2020"]} n="03" hideCaption />
              <p className="voice-label mt-3">MEDIAN JUN–SEP 2020</p>
            </div>
            <div>
              <EvidencePlate plate={PLATES["apui-nir-2025"]} n="04" hideCaption />
              <p className="voice-label mt-3">MEDIAN JUN–SEP 2025</p>
            </div>
          </div>
          <div className="mt-6 max-w-[70ch]">
            <p className="text-[16px] leading-relaxed text-ink">
              {PLATES["apui-nir-2020"].finding}
            </p>
            <p className="voice-label mt-2 normal-case tracking-[0.02em]">{NIR_PAIR_META}</p>
            <p className="mt-1 font-mono text-[10px] text-paper-muted/90">
              Contains modified Copernicus Sentinel data (2020, 2025), processed by KliSus
            </p>
          </div>
        </div>

        {/* (c) the analytical summary */}
        <EvidencePlate plate={PLATES["apui-ndvi-delta"]} n="05" />
      </div>
    </section>
  );
}
