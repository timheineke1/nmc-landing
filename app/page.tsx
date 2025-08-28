"use client";

import { useState } from "react";

export default function NMCGradientPage() {
  const [show, setShow] = useState(false);

  return (
    <main className="relative min-h-screen font-mono text-[15px] leading-7">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-blue-100" />

      {/* Centered card */}
      <div className="mx-auto max-w-xl p-6">
        <div className="rounded-2xl bg-white/85 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>NMC</span>
          </div>

          {/* Content */}
          <h1 className="mb-4 text-lg font-bold">Hi! We're the New Music Co.</h1>
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
          <p className="mb-6">
            Sometimes we build things for ourselves—to show, not tell—and along
            the way, we might find the right partner to take it further. That
            could be a co-founder, an operator, or a music company ready to run
            with a working idea.
          </p>

          {/* Button */}
          <button className="rounded-md bg-gray-200 px-3 py-1 text-sm shadow-sm hover:bg-gray-300">
            Press Play
          </button>

          {/* Footer */}
          <footer className="mt-8 text-sm leading-6">
            <p>
              Feel free to reach out at{" "}
              <a
                href="mailto:hi@newmusic.co"
                className="text-blue-600 underline"
              >
                hi@newmusic.co
              </a>{" "}
              or follow along at{" "}
              <a
                href="https://x.com/newmusicco"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
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