import { useEffect, useRef } from "react";

/**
 * Subtle, breathing network of green nodes + thin connecting lines.
 * Sized to the viewport, pinned behind everything via fixed positioning.
 */
export function BackgroundNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let raf = 0;

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number;
      speed: number;
    };
    let nodes: Node[] = [];

    const seed = () => {
      const area = W * H;
      const count = Math.max(28, Math.min(70, Math.floor(area / 28000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1 + Math.random() * 1.4,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.6,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const t0 = performance.now();
    const tick = (now: number) => {
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      const linkDist = Math.min(180, Math.max(120, Math.hypot(W, H) * 0.09));

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < -20) a.x = W + 20;
        if (a.x > W + 20) a.x = -20;
        if (a.y < -20) a.y = H + 20;
        if (a.y > H + 20) a.y = -20;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const k = 1 - d / linkDist;
            ctx.strokeStyle = `rgba(168, 213, 168, ${(k * 0.1).toFixed(3)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pulse = 0.5 + 0.5 * Math.sin(t * n.speed + n.phase);
        const alpha = 0.18 + pulse * 0.35;
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 10);
        grd.addColorStop(0, `rgba(168, 213, 168, ${(alpha * 0.55).toFixed(3)})`);
        grd.addColorStop(1, "rgba(168, 213, 168, 0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(200, 230, 200, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    const onResize = () => {
      cancelAnimationFrame(raf);
      resize();
      if (!prefersReduced) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("resize", onResize);

    if (!prefersReduced) {
      raf = requestAnimationFrame(tick);
    } else {
      tick(performance.now());
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.15) 100%)",
        maskImage:
          "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.15) 100%)",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
