import { useEffect, useRef } from "react";
import anime from "animejs";
import { ArrowRight } from "lucide-react";
import klisusLogo from "@/assets/klisus-logo.jpeg";

const HEADLINE_WORDS = [
  { text: "The", accent: false },
  { text: "Blockchain", accent: false },
  { text: "for", accent: false },
  { text: "Climate", accent: true },
  { text: "Action", accent: true },
];

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null);
  const logoMarkRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const letters = headlineRef.current?.querySelectorAll(".letter") ?? [];

    anime
      .timeline({ easing: "easeOutExpo" })
      .add({
        targets: logoRef.current,
        opacity: [0, 1],
        translateY: [-8, 0],
        duration: 900,
      })
      .add(
        {
          targets: letters,
          opacity: [0, 1],
          translateY: ["0.4em", 0],
          duration: 1100,
          delay: anime.stagger(22, { from: "first" }),
        },
        "-=600"
      )
      .add(
        {
          targets: subheadRef.current,
          opacity: [0, 1],
          translateY: [12, 0],
          duration: 900,
        },
        "-=700"
      )
      .add(
        {
          targets: [primaryBtnRef.current, secondaryBtnRef.current],
          opacity: [0, 1],
          translateY: [10, 0],
          duration: 800,
          delay: anime.stagger(90),
        },
        "-=600"
      );

    // Floating loops
    anime({
      targets: logoMarkRef.current,
      scale: [
        { value: 1, duration: 0 },
        { value: 1.05, duration: 2200 },
        { value: 1, duration: 2200 },
      ],
      easing: "easeInOutSine",
      loop: true,
      delay: 1200,
    });

    anime({
      targets: primaryBtnRef.current,
      boxShadow: [
        { value: "0 0 0px 0 rgba(168,213,168,0)", duration: 0 },
        { value: "0 0 28px 0 rgba(168,213,168,0.35)", duration: 2400 },
        { value: "0 0 0px 0 rgba(168,213,168,0)", duration: 2400 },
      ],
      translateY: [
        { value: 0, duration: 0 },
        { value: -3, duration: 2400 },
        { value: 0, duration: 2400 },
      ],
      easing: "easeInOutSine",
      loop: true,
      delay: 1600,
    });

    anime({
      targets: secondaryBtnRef.current,
      translateY: [
        { value: 0, duration: 0 },
        { value: -3, duration: 2800 },
        { value: 0, duration: 2800 },
      ],
      easing: "easeInOutSine",
      loop: true,
      delay: 2000,
    });
  }, []);

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-20 pt-24 text-center sm:px-8">
      <div className="flex w-full max-w-[880px] flex-col items-center gap-9">
        <a
          ref={logoRef}
          href="#"
          aria-label="Klisus home"
          className="inline-flex items-center gap-3.5 opacity-0 will-change-transform"
        >
          <span
            ref={logoMarkRef}
            aria-hidden="true"
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_24px_rgba(168,213,168,0.18)]"
          >
            <img
              src={klisusLogo}
              alt=""
              className="block h-full w-full object-contain"
            />
          </span>
          <span className="text-[22px] font-bold tracking-[0.18em] text-white">
            KLISUS
          </span>
        </a>

        <h1
          ref={headlineRef}
          aria-label="The Blockchain for Climate Action"
          className="max-w-[16ch] text-balance text-[clamp(40px,7vw,88px)] font-semibold leading-[1.05] tracking-[-0.02em] text-white"
        >
          {HEADLINE_WORDS.map((w, wi) => (
            <span
              key={wi}
              className={`inline-block whitespace-nowrap ${
                w.accent ? "text-[#A8D5A8]" : ""
              }`}
            >
              {[...w.text].map((ch, ci) => (
                <span
                  key={ci}
                  className="letter inline-block opacity-0 will-change-transform"
                  style={{ transform: "translateY(0.4em)" }}
                >
                  {ch}
                </span>
              ))}
              {wi < HEADLINE_WORDS.length - 1 && " "}
            </span>
          ))}
        </h1>

        <p
          ref={subheadRef}
          className="max-w-[60ch] text-[clamp(15px,1.4vw,18px)] font-normal leading-[1.65] text-[#9a9a9a] opacity-0 will-change-transform"
        >
          Climate projects are fragmented today, but they don&rsquo;t need to
          be. For the first time, tokenize carbon credits, incentivize farmers,
          and verify forestation on one transparent, high-performance chain.
        </p>

        <div className="mt-1 flex w-full flex-wrap justify-center gap-3.5 sm:w-auto">
          <a
            ref={primaryBtnRef}
            href="#waitlist"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#A8D5A8] px-6 py-3.5 text-[14.5px] font-medium text-[#0c1a0c] opacity-0 transition-colors duration-200 will-change-transform hover:bg-[#b8e0b8] sm:w-auto w-full"
          >
            Join Waitlist
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
          <a
            ref={secondaryBtnRef}
            href="#"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-[14.5px] font-medium text-white opacity-0 transition-colors duration-200 will-change-transform hover:border-[#A8D5A8] hover:text-[#A8D5A8] sm:w-auto w-full"
          >
            Start Exploring
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
