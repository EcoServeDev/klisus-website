import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KliSus Solutions — Environmental intelligence, built for decisions.";

export default function Image() {
  return ogCard({
    title: "Solutions",
    subtitle: "Environmental intelligence, built for decisions.",
  });
}
