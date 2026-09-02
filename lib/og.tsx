/**
 * Shared OG card (Satori): the product's report-card pattern adapted for the
 * marketing site. 1200×630, forest-black ground, eyebrow / headline / footer.
 * Inter-only — Satori needs static TTFs (assets/, traced via next.config).
 */

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

async function font(file: string) {
  return readFile(path.join(process.cwd(), "assets", file));
}

export async function ogCard({ title, subtitle }: { title: string; subtitle?: string }) {
  const [regular, semibold] = await Promise.all([
    font("Inter-Regular.ttf"),
    font("Inter-SemiBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#0D1512",
          color: "#EDE7DA",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9A937F",
          }}
        >
          KliSus · Climate Intelligence &amp; Economics
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: 28, color: "#9A937F", maxWidth: 900, lineHeight: 1.4 }}>
              {subtitle}
            </div>
          ) : null}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2A362F",
            paddingTop: 28,
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9A937F",
          }}
        >
          <span>klisus.com</span>
          <span style={{ color: "#4BA36A" }}>Evidence for decisions</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
        { name: "Inter", data: semibold, weight: 600 as const, style: "normal" as const },
      ],
    },
  );
}
