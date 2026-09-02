/**
 * Shared OG card (Satori) in the dossier voices: Archivo Expanded (static
 * wdth-125/wght-650 instance) for the headline, Fragment Mono for labels.
 * 1200×630, forest-black ground, ruled footer.
 */

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

async function font(file: string) {
  return readFile(path.join(process.cwd(), "assets", file));
}

export async function ogCard({ title, subtitle }: { title: string; subtitle?: string }) {
  const [display, body, mono] = await Promise.all([
    font("ArchivoExpanded-SemiBold.ttf"),
    font("Archivo-Regular.ttf"),
    font("FragmentMono-Regular.ttf"),
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
          fontFamily: "Archivo",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Fragment Mono",
            fontSize: 24,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9A937F",
            borderBottom: "1px solid #2A362F",
            paddingBottom: 24,
          }}
        >
          <span>KliSus / Climate Intelligence &amp; Economics</span>
          <span>25.2048° N, 55.2708° E</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontFamily: "Archivo Expanded",
              fontSize: 58,
              letterSpacing: "-0.01em",
              lineHeight: 1.05,
              maxWidth: 1020,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div style={{ fontSize: 26, color: "#9A937F", maxWidth: 880, lineHeight: 1.4 }}>
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
            paddingTop: 24,
            fontFamily: "Fragment Mono",
            fontSize: 20,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9A937F",
          }}
        >
          <span>klisus.com</span>
          <span style={{ color: "#4BA36A" }}>[ Evidence for decisions ]</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Archivo Expanded", data: display, weight: 600 as const, style: "normal" as const },
        { name: "Archivo", data: body, weight: 400 as const, style: "normal" as const },
        { name: "Fragment Mono", data: mono, weight: 400 as const, style: "normal" as const },
      ],
    },
  );
}
