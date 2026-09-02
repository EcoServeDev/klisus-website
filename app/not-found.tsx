import Button from "@/components/ui/button";
import Eyebrow from "@/components/ui/eyebrow";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-6 py-32">
      <Eyebrow>404 — Not found</Eyebrow>
      <h1 className="font-display text-[28px] leading-[1.15] text-cream sm:text-[40px]">
        This page is outside the assessed area.
      </h1>
      <p className="max-w-[60ch] text-[16px] text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-2 flex flex-wrap gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/plot-check" variant="secondary">
          Open the Plot Check tool →
        </Button>
      </div>
    </section>
  );
}
