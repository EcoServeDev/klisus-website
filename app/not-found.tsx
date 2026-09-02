import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <div className="border-t border-paper-line">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-6">
          <span className="voice-label">404 / NOT FOUND</span>
          <span className="voice-label hidden sm:block">NO FIX</span>
        </div>
      </div>
      <section className="mx-auto grid max-w-6xl gap-x-6 px-6 pb-28 pt-10 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <h1 className="font-display max-w-[16ch] text-[36px] text-ink sm:text-[44px] lg:text-[64px]">
            This page is outside the assessed area.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-paper-muted">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/">Back to home</Button>
            <Button href="/plot-check" variant="secondary">
              Open the Plot Check tool →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
