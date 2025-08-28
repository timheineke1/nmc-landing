"use client";

import { useState } from "react";

export default function NMCGradientPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative min-h-screen font-mono text-sm leading-6">
      {/* Soft OpenAI-like gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-pink-100 via-white to-blue-100" />

      {/* Centered content card */}
      <div className="mx-auto max-w-xl p-6 py-16">
        <div className="rounded-2xl bg-white/85 p-8 shadow-sm backdrop-blur-sm">
          {/* Tiny logo row */}
          <div className="mb-8 flex items-center gap-2">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="black" />
              <path d="M7 9h10M7 15h6" stroke="black" strokeWidth="2" />
            </svg>
            <span className="text-sm">NMC</span>
          </div>

          {/* Text content */}
          <h1 className="mb-6 font-bold">Hi! We're the New Music Co.</h1>
          <p className="mb-4">
            We’re a collective of music execs and founders helping labels,
            managers, agents, distributors, publishers, radio—or anyone in the
            music industry—turn their next idea into reality.
          </p>
          <p className="mb-4">
            AI lets us ship faster than ever. But knowing what to make—taste,
            selection, synthesis—matters more. We build the big and the “boring”
            as much as the small and useful.
          </p>
          <p className="mb-4">
            We help shape your ideas and bring them to life in weeks instead of
            months. Work with us per project or as an extension of your team,
            like your own Labs.
          </p>
          <p className="mb-8">
            Sometimes we build things for ourselves—to show, not tell—and along
            the way, we might find the right partner to take it further. That
            could be a co-founder, an operator, or a music company ready to run
            with a working idea.
          </p>

          {/* Button */}
          <button className="rounded-md bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300">
            Press Play
          </button>

          {/* Footer */}
          <footer className="mt-10 text-[15px]">
            <p className="mb-2">Feel free to reach out at{" "}
              <a
                href="mailto:hi@newmusic.co"
                className="underline"
              >
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