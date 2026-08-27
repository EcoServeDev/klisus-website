import { FormEvent, useState } from "react";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5ZM10 9.5h3.8v1.6h.1c.5-1 1.9-2 3.9-2 4.1 0 4.9 2.7 4.9 6.2V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z" />
    </svg>
  );
}

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState<{ text: string; tone: "ok" | "err" } | null>(
    null
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!name.trim() || !validEmail) {
      setMsg({ text: "Please enter a valid name and email.", tone: "err" });
      return;
    }
    setMsg({
      text: `Thanks ${name.trim()} — you're on the list.`,
      tone: "ok",
    });
    setName("");
    setEmail("");
  };

  return (
    <footer
      id="waitlist"
      className="relative z-10 border-t border-white/10 bg-gradient-to-b from-transparent to-[#0a0a0a]/80 px-6 pb-8 pt-20 sm:px-8"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Countdown */}
        <div className="mb-14 text-center">
          <div className="mb-3.5 text-[11px] uppercase tracking-[0.28em] text-[#6f6f6f]">
            Free land checker
          </div>
          <div className="text-[clamp(28px,4vw,44px)] font-medium tracking-[-0.01em] text-white">
            Live <span className="text-[#A8D5A8]">14 Sep</span> 2026
          </div>
        </div>

        {/* Waitlist form */}
        <div className="mx-auto mb-14 max-w-[560px]">
          <div className="mb-4 text-center text-[13px] uppercase tracking-[0.2em] text-[#6f6f6f]">
            Get Early Access
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="grid grid-cols-1 gap-2.5 rounded-[18px] border border-white/10 bg-white/[0.02] p-2.5 transition-colors focus-within:border-white/20 focus-within:bg-white/[0.035] sm:grid-cols-[1fr_1fr_auto] sm:rounded-full sm:p-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-w-0 border-0 bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#6f6f6f] sm:px-[18px]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 border-0 bg-transparent px-4 py-3 text-[14px] text-white outline-none placeholder:text-[#6f6f6f] sm:px-[18px]"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-[#A8D5A8] px-6 py-3 text-[13.5px] font-medium text-[#0c1a0c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b8e0b8]"
            >
              Get Early Access
            </button>
          </form>
          <div
            role="status"
            aria-live="polite"
            className={`mt-3.5 min-h-[18px] text-center text-[13px] transition-opacity duration-200 ${
              msg ? "opacity-100" : "opacity-0"
            }`}
            style={{ color: msg?.tone === "err" ? "#e88d8d" : "#A8D5A8" }}
          >
            {msg?.text ?? ""}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-6">
          <div className="text-[12.5px] tracking-[0.02em] text-[#6f6f6f]">
            © 2026 Klisus
          </div>
          <div className="flex gap-2">
            <a
              href="https://x.com/Klisus_io"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Klisus on X"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#9a9a9a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A8D5A8]/10 hover:text-[#A8D5A8]"
            >
              <XIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/klisus/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Klisus on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#9a9a9a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#A8D5A8]/10 hover:text-[#A8D5A8]"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
