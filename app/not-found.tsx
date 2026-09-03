import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-28 pt-40">
      <p className="kicker">404 — Page not found</p>
      <h1 className="font-display mt-5 max-w-[16ch] text-[36px] font-medium text-ink sm:text-[48px]">
        This page is outside the assessed area.
      </h1>
      <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <div className="mt-9 flex flex-wrap gap-4">
        <Button href="/">Back to home</Button>
        <Button href="/plot-check" variant="secondary">
          Open the Plot Check tool
        </Button>
      </div>
    </section>
  );
}
