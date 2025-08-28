"use client";
import { useState } from "react";

export default function NMCGradientPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative min-h-screen font-mono text-[15px] leading-7">
      {/* Soft OpenAI-like gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-blue-100" />

      {/* Centered content card (width matches Canvas) */}
      <div className="mx-auto max-w-xl px-6 py-16">
        <div className="rounded-2xl bg-white/85 backdrop-blur-sm p-8 shadow-[0_0_1px_rgba(0,0,0,0.06)]">
          {/* Tiny logo row */}
          <div className="mb-8 flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-label="NMC logo">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="black" />
              <path d="M7 9h10M7 15h6" stroke="black" strokeWidth="2" />
            </svg>
            <span className="text-sm">NMC</span>
          </div>

          {/* Text content */}
          <h1 className="mb-5 font-semibold">Hi! We're the New Music Co.</h1>

          <section className="space-y-4">
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

          {/* Button */}
          <div className="mt-6">
            <button
              onClick={() => setShow(v => !v)}
              className="rounded-md bg-gray-200 px-3 py-2 text-sm hover:bg-gray-300"
            >
              Press Play
            </button>
          </div>

          {/* Optional reveal (kept for parity with Canvas) */}
          {show && (
            <section className="mt-6 space-y-2">
              <h2 className="font-semibold">How we work</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>MVP in weeks, not months.</li>
                <li>Labs for hire, or embed with your team.</li>
                <li>Vibe-arm for bigger companies.</li>
                <li>Build → spin-out with the right partner.</li>
              </ul>
            </section>
          )}

          {/* Footer */}
          <footer className="mt-10">
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
              </a>.
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}