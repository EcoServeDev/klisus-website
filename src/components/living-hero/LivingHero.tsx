import { useEffect, useRef, type CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import { mountHeroRuntime } from "./hero-runtime";
import { mountLiquidMetal } from "./liquid-metal";
import "./living-hero.css";
import klisusLogo from "@/assets/klisus-logo.jpeg";
import heroForest from "@/assets/hero-forest.jpg";
import farmerPlanting from "@/assets/farmer-planting.jpg";

/* the reference lays every element out with CSS custom properties (--d
   entrance delay, --pd/--pr parallax depth); a tiny helper keeps the JSX
   readable */
const v = (vars: Record<string, string | number>) => vars as CSSProperties;

export default function LivingHero() {
  const rootRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const disposers: Array<{ dispose(): void }> = [];
    disposers.push(mountHeroRuntime(root));
    root.querySelectorAll<HTMLElement>("[data-liquid-metal]").forEach((host) => {
      const m = mountLiquidMetal(host);
      if (m) disposers.push(m);
    });
    return () => {
      disposers.forEach((d) => d.dispose());
    };
  }, []);

  const toWaitlist = (e: { preventDefault(): void }) => {
    e.preventDefault();
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="living-hero js" ref={rootRef} aria-label="Klisus — satellite proof for every land claim">
      <canvas id="scene" />

      <div className="dock-wrap">
        <nav className="dock par-dock" style={v({ "--pd": 5 })} data-spec="" aria-label="Primary">
          <Link className="dock-item dock-mark" data-dock="" data-spec="" to="/" style={v({ "--d": "120ms" })} aria-label="Klisus — home">
            <img src={klisusLogo} alt="" />
          </Link>
          <Link className="dock-item is-active" data-dock="" data-spec="" to="/" style={v({ "--d": "180ms" })}>
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="M8 14V9" /><path d="M8 9c0-2.4 1.7-4.3 4-4.3.2 2.6-1.6 4.6-4 4.3Z" /><path d="M8 10.5C7.9 8.4 6.4 6.8 4.4 6.8 4.3 8.9 5.9 10.6 8 10.5Z" /></svg>
            </span>
            <span>Home</span>
          </Link>
          <Link className="dock-item" data-dock="" data-spec="" to="/land-checker" style={v({ "--d": "230ms" })}>
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="M8 14.2c2.9-2.9 4.4-5.3 4.4-7.4a4.4 4.4 0 1 0-8.8 0c0 2.1 1.5 4.5 4.4 7.4Z" /><circle cx="8" cy="6.6" r="1.7" /></svg>
            </span>
            <span>Land Checker</span>
          </Link>
          <Link className="dock-item" data-dock="" data-spec="" to="/reports" style={v({ "--d": "270ms" })}>
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="M4 2.4h5.3L12 5.1v8.5H4z" /><path d="M9.2 2.4V5h2.7" /><path d="M6 8.4h4M6 10.8h2.8" /></svg>
            </span>
            <span>Reports</span>
          </Link>
          <Link className="dock-item" data-dock="" data-spec="" to="/methodology" style={v({ "--d": "310ms" })}>
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="M8 2.2 14 5 8 7.8 2 5l6-2.8Z" /><path d="M2 8l6 2.8L14 8" /><path d="M2 11l6 2.8 6-2.8" /></svg>
            </span>
            <span>Methodology</span>
          </Link>
          <Link className="dock-item" data-dock="" data-spec="" to="/research" style={v({ "--d": "350ms" })}>
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.3" /><path d="m10.2 10.2 3.4 3.4" /></svg>
            </span>
            <span>Research</span>
          </Link>
          <a className="dock-item dock-item--enter" data-dock="" data-spec="" href="#waitlist" onClick={toWaitlist} style={v({ "--d": "390ms" })}>
            <span className="glyph" aria-hidden="true">
              <svg viewBox="0 0 16 16"><path d="M6.6 2.5h5.1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H6.6" /><path d="M2.6 8h6.6" /><path d="m7 5.6 2.4 2.4L7 10.4" /></svg>
            </span>
            <span>Join Waitlist</span>
          </a>
        </nav>
      </div>

      <div className="stage" id="stage">
        <div className="guides fade" style={v({ "--d": "900ms" })} aria-hidden="true">
          <i style={{ left: "calc(405 * var(--u))" }} />
          <i style={{ left: "calc(748 * var(--u))" }} />
          <i style={{ left: "calc(1091 * var(--u))" }} />
        </div>

        <div className="ghost fade" style={v({ "--d": "1150ms" })} aria-hidden="true">KLISUS</div>

        {/* card 1 sits *behind* the canvas so the moss drapes over its shoulder */}
        <article className="card card--about mask" style={v({ "--d": "760ms", "--pd": 10, "--pr": 2.2 })}>
          <figure className="portal" data-delay="920">
            <span className="portal-media">
              {/* TODO: replace with a real NDVI before/after tile when the asset exists */}
              <img src={heroForest} alt="Sunlight breaking through a dense forest canopy" loading="eager" decoding="async" />
            </span>
            <canvas className="pixel-reveal" aria-hidden="true" />
          </figure>
          <p className="label">Our position</p>
          <h2>Claims are cheap. Evidence isn&rsquo;t.</h2>
        </article>

        {/* the About knob rides *outside* the card: the card has to stay a plain
            painted box under #scene, so anything that must sit in front of the
            moss lives here instead, sharing the card's parallax origin */}
        <span className="knob-float" style={v({ "--pd": 10, "--pr": 2.2 })}>
          <button className="knob knob--about mask-circle" style={v({ "--d": "1100ms" })} aria-label="Read our methodology" onClick={() => navigate("/methodology")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21v-7" /><path d="M12 14c0-3.3 2.4-6 5.5-6 .3 3.6-2.2 6.4-5.5 6Z" />
              <path d="M12 16c-.1-2.9-2.2-5.2-4.9-5.2C6.8 13.7 9 16 12 16Z" />
            </svg>
          </button>
        </span>

        <h1 className="headline" style={v({ "--pd": 18, "--pr": 1.2 })}>
          <span><i style={v({ "--d": "260ms" })}>Satellite proof</i></span>
          <span><i style={v({ "--d": "360ms" })}>for every land claim.</i></span>
        </h1>

        <p className="lede mask" style={v({ "--d": "480ms", "--pd": 14, "--pr": 1 })}>
          Enter a plot&rsquo;s coordinates. Get its satellite evidence history &mdash; free for any single plot.
        </p>

        <div className="pill-clip">
          <div className="pill mask" style={v({ "--d": "600ms", "--pd": 15, "--pr": 1.4 })}>
            <div className="liquid-stage liquid-stage--explore" data-liquid-metal="explore">
              <div className="liquid-plate plate" aria-hidden="true" />
              <canvas className="liquid-fx" aria-hidden="true" />
              <button className="liquid-button liquid-button--explore btn" type="button" onClick={toWaitlist}>
                <svg className="ico" viewBox="0 0 115 115" aria-hidden="true">
                  <g stroke="currentColor" strokeWidth="11" strokeLinecap="round">
                    <path d="M14 34.5 H101" />
                    <path d="M14 57.5 H101" />
                    <path d="M14 80.5 H68" />
                  </g>
                </svg>
                <span className="lbl">Join the waitlist</span>
              </button>
            </div>
          </div>
        </div>

        <span className="play-wrap" style={v({ "--pd": 20 })}>
          <span className="play-clip">
            <span className="play-glass mask-circle" style={v({ "--d": "900ms" })}>
              <span className="liquid-stage liquid-stage--play" data-liquid-metal="play">
                <span className="liquid-plate plate" aria-hidden="true" />
                <canvas className="liquid-fx" aria-hidden="true" />
                <button className="liquid-button liquid-button--play btn" type="button" aria-label="Open the land checker" onClick={() => navigate("/land-checker")}>
                  <svg className="ico" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h13M12.4 5.8 18.6 12l-6.2 6.2" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </span>
            </span>
          </span>
          <span className="play-ring mask-circle" style={v({ "--d": "840ms" })} aria-hidden="true" />
        </span>

        <dl className="stat stat--a mask" style={v({ "--d": "700ms", "--pd": 12 })}>
          <span className="mark" aria-hidden="true">
            <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <circle cx="15" cy="15" r="10.5" strokeDasharray="0.6 3.6" />
              <circle cx="15" cy="15" r="5.6" strokeDasharray="0.6 3.2" />
              <circle cx="15" cy="15" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </span>
          <div><dt>Convergence of evidence</dt><dd>6 public satellite datasets</dd></div>
        </dl>

        <dl className="stat stat--b mask" style={v({ "--d": "770ms", "--pd": 13 })}>
          <span className="mark" aria-hidden="true">
            <svg viewBox="0 0 30 30" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
              <g>
                <path d="M15 3.5v5" /><path d="M15 21.5v5" /><path d="M3.5 15h5" /><path d="M21.5 15h5" />
                <path d="M6.9 6.9l3.5 3.5" /><path d="M19.6 19.6l3.5 3.5" /><path d="M23.1 6.9l-3.5 3.5" /><path d="M10.4 19.6l-3.5 3.5" />
              </g>
              <circle cx="15" cy="15" r="3.6" />
            </svg>
          </span>
          <div><dt>Free land checker</dt><dd>Live 14 Sep 2026</dd></div>
        </dl>

        <article className="card card--stove mask" style={v({ "--d": "880ms", "--pd": 22, "--pr": 2.4 })}>
          <p className="label">EUDR reports</p>
          <h2>Fixed price. Published. No sales calls.</h2>
          <figure className="portal" data-delay="1080">
            <span className="portal-media">
              {/* TODO: replace with a plot-boundary-on-satellite-imagery screenshot from the actual tool */}
              <img src={farmerPlanting} alt="A farmer planting a young sapling" loading="eager" decoding="async" />
            </span>
            <canvas className="pixel-reveal" aria-hidden="true" />
          </figure>
          <button className="knob" aria-label="See EUDR reports" onClick={() => navigate("/reports")}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21v-7" /><path d="M12 14c0-3.3 2.4-6 5.5-6 .3 3.6-2.2 6.4-5.5 6Z" />
              <path d="M12 16c-.1-2.9-2.2-5.2-4.9-5.2C6.8 13.7 9 16 12 16Z" />
            </svg>
          </button>
        </article>

        <a className="scroll mask" style={v({ "--d": "1040ms", "--pd": 9 })} href="#waitlist" onClick={toWaitlist}>
          Discover<span className="track" />
        </a>
      </div>
    </section>
  );
}
