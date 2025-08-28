"use client";
import { useState } from "react";

export default function NMCGradientPreview() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative min-h-screen text-black font-mono">
      {/* Soft OpenAI-like gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_80%_at_10%_10%,#fde1ea_0%,transparent_50%),radial-gradient(80%_70%_at_90%_0%,#dbeafe_0%,transparent_50%),radial-gradient(70%_70%_at_100%_100%,#e9d5ff_0%,transparent_50%),radial-gradient(80%_80%_at_0%_100%,#fee2e2_0%,transparent_50%)]" />

      {/* Centered content card */}
      <div className="mx-auto max-w-2xl px-6 py-16">
        <div className="rounded-2xl bg-white/85 backdrop-blur-sm p-8 shadow-[0_0_1px_rgba(0,0,0,0.06)]">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="NMC logo">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#000" strokeWidth="2" />
              <path d="M7 9h10M7 12h10M7 15h6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm tracking-wide">NMC</span>
          </div>

          {/* Intro */}
          <section className="space-y-5 text-base leading-7 md:text-[17px]">
            <p className="font-semibold">Hi! We&apos;re the New Music Co.</p>

            <p>
              We’re a collective of music execs and founders helping labels, managers, agents,
              distributors, publishers, radio—or anyone in the music industry—turn their next idea into reality.
            </p>
            <p>
              AI lets us ship faster than ever. But knowing what to make—taste, selection, synthesis—matters more.
              We build the big and the “boring” as much as the small and useful.
            </p>
            <p>
              We help shape your ideas and bring them to life in weeks instead of months. Work with us per project or as an extension of your team, like your own Labs.
            </p>
            <p>
              Sometimes we build things for ourselves—to show, not tell—and along the way, we might find the right partner to take it further.
              That could be a co-founder, an operator, or a music company ready to run with a working idea.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-6">
            <button
              onClick={() => setShow((v) => !v)}
              className="rounded-md bg-gray-200 px-3 py-2 text-sm"
            >
              Press Play
            </button>
          </div>

          {/* Reveal section */}
          {show && (
            <section className="mt-8 space-y-4 text-base leading-7 md:text-[17px]">
              <h2 className="font-semibold">How we work</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>MVP in weeks, not months. Fast prototypes you can test right away.</li>
                <li>Labs for hire. Work with us per project or as an extension of your team.</li>
                <li>Vibe-arm for big companies. Explore without the corporate drag.</li>
                <li>Build + spin-out. Sometimes we make things and find the right partner to run with it.</li>
              </ul>
            </section>
          )}

          {/* Contact */}
          <footer className="mt-10 text-base leading-7 md:text-[17px]">
            <p className="mb-2">
              Feel free to reach out at{" "}
              <a href="mailto:hi@newmusic.co" className="underline" style={{ color: "#1D4ED8" }}>
                hi@newmusic.co
              </a>{" "}
              or follow along at{" "}
              <a
                href="https://x.com/newmusicco"
                target="_blank"
                rel="noreferrer"
                className="underline"
                style={{ color: "#1D4ED8" }}
              >
                x.com/newmusicco
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}