import { ogCard, OG_SIZE } from "@/lib/og";
import { TOOLS } from "@/lib/tools/registry";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "KliSus free climate tool";

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);
  return ogCard({ title: tool?.title ?? "Free tools", subtitle: "Free tool · KliSus" });
}
