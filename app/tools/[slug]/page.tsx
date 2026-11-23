import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ToolShell from "@/components/tools/tool-shell";
import { TOOL_CONTENT } from "@/components/tools/content";
import { TOOLS } from "@/lib/tools/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return {};
  return { title: `${tool.title} — free tool`, description: tool.blurb };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = TOOL_CONTENT[slug];
  if (!content) notFound();
  const { Calculator, lede, notes } = content;
  return (
    <ToolShell slug={slug} lede={lede} notes={notes}>
      <Calculator />
    </ToolShell>
  );
}
