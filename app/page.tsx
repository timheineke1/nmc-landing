"use client";

import { useState } from "react";

export default function NMCGradientPage() {
  const [show, setShow] = useState(false);

  return (
    <main
      className="relative min-h-screen text-black"
      // lock the same mono stack and metrics Canvas uses
      style={{
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: "16px",          // match Canvas size
        lineHeight: 1.9,           // match Canvas airy spacing
      }}
    >
      {/* Soft OpenAI-like gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(100%_80%_at_10%_10%,#fde1ea_0%,transparent_50%),radial-gradient(80%_70%_at_90%_0%,#dbeafe_0%,transparent_50%),radial-gradient(70%_70%_at_100%_100%,#e9d5ff_0%,transparent_50%),radial-gradient(80%_80%_at_0%_100%,#fee2e2_0%,transparent_50%)]" />

      {/* Fixed max width so the card matches Canvas */}
      <div className="mx-auto w-full px-4 py-12 md:py-16">
        <div
          className="
            mx-auto
            max-w-[760px]     /* <- lock card width to Canvas */
            rounded-2xl
            bg-white/85
            backdrop-blur-sm
            p-6 md:p-8       /* same interior padding feel */
            shadow-[0_0_1px_rgba(0,0,0,0.06)]
          "
        >
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="NMC logo">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#000" strokeWidth="2" />
              <path d="M7 9h10M7 12h10M7 15h6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{ letterSpacing: "0.02em", fontSize: "14px" }}>NMC</span>
          </div>

          {/* Intro text block */}
          <section>
            <p style={{ fontWeight: 600, marginBottom: "14px" }}>
              Hi! We&apos;re the New Music Co.
            </p>

            <p>
              We’re a collective of music execs and founders helping labels, managers, agents,
              distributors, publishers, radio—or anyone in the music industry—turn their next idea
              into reality.
            </p>
            <p>
              AI lets us ship faster than ever. But knowing what to make—taste, selection,
              synthesis—matters more. We build the big and the “boring” as much as the small and
              useful.
            </p>
            <p>
              We help shape your ideas and bring them to life in weeks instead of months. Work with
              us per project or as an extension of your team, like your own Labs.
            </p>
            <p>
              Sometimes we build things for ourselves—to show, not tell—and along the way, we might
              find the right partner to take it further. That could be a co-founder, an operator, or
              a music company ready to run with a working idea.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-5">
            <button
              onClick={() => setShow((v) => !v)}
              className="rounded-md bg-gray-200 px-3 py-2 text-[14px]"
            >
              Press Play
            </button>
          </div>

          {/* Reveal section */}
          {show && (
            <section className="mt-6">
              <h2 style={{ fontWeight: 600, marginBottom: "8px" }}>How we work</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>MVP in weeks, not months. Fast prototypes you can test right away.</li>
                <li>Labs for hire. Work with us per project or as an extension of your team.</li>
                <li>Vibe-arm for big companies. Explore without the corporate drag.</li>
                <li>Build + spin-out. Sometimes we make things and find the right partner to run with it.</li>
              </ul>
            </section>
          )}

          {/* Contact */}
          <footer className="mt-6">
            <p>
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