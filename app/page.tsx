"use client";
import { useState } from "react";

export default function TheNewMusicCo() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative min-h-screen font-mono text-black">
      {/* Soft gradient background (OpenAI-ish) */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200 via-purple-200 to-blue-200" />

      {/* Content */}
      <main className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="w-full max-w-xl text-center">
          {/* Logo */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="NMC logo"
            >
              <rect x="1" y="1" width="26" height="26" rx="6" stroke="#000" strokeWidth="2" />
              <path d="M8 9v10M14 9v10M20 9v10" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm">NMC</span>
          </div>

          {/* Headline */}
          <h1 className="mb-3 text-base">Hi! We&apos;re the New Music Co.</h1>

          {/* One-liner */}
          <p className="mb-8 text-base leading-relaxed">
            We&apos;re building something exciting at the intersection of{" "}
            <strong>music</strong> and <strong>technology</strong>.
          </p>

          {/* CTA */}
          <button
            onClick={() => setShow((v) => !v)}
            className="mx-auto inline-block rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
            aria-expanded={show}
          >
            Show Our Mission
          </button>

          {/* Mission card */}
          {show && (
            <div className="mx-auto mt-6 max-w-lg rounded-xl bg-white/80 p-5 text-left backdrop-blur">
              <h2 className="mb-3 font-semibold">Mission</h2>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  We’re a group of music founders and execs helping labels, distributors,
                  publishers, managers—anyone in music—turn ideas into reality. We’ve built
                  startups, failed some, sold others—we know the game.
                </p>
                <p>
                  AI is opening new doors for the music industry. We’ll help you step through them.
                </p>
                <p>
                  Together with our partner engineers and studios, we shape, launch, and ship
                  products—fast.
                </p>
                <p>Got an idea or just curious? Reach out.</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}