'use client'

import { useState } from "react";

export default function TheNewMusicCo() {
  const [showMission, setShowMission] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-black font-mono text-[17px] md:text-[19px] leading-8">
      <main className="relative flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-3xl mx-auto text-left pt-12">
          {/* Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="NMC logo"
              >
                <rect x="1" y="1" width="26" height="26" rx="6" stroke="#000" strokeWidth="2" />
                <path d="M8 9v10M14 9v10M20 9v10" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-base">NMC</span>
            </div>
          </div>

          {/* Intro Text */}
          <section className="space-y-6">
            <p className="font-bold">Hi! We&apos;re the New Music Co.</p>
            <p>
              We’re a collective of music execs and founders helping labels, managers, agents,
              distributors, publishers, radio—or anyone in the music industry—turn their next idea
              into reality.
            </p>
            <p>
              AI lets us ship faster than ever. But knowing what to make—taste, selection,
              synthesis—matters more. We build the big and the "boring" as much as the small and
              useful.
            </p>
            <p>
              We help shape your ideas and bring them to life in matter of weeks instead of months.
              Work with us per project or as an extension of your team, like your own Labs.
            </p>
            <p>
              Sometimes we build things for ourselves—to show, not tell—and along the way, we might
              find the right partner to take it further. That could be a co-founder, an operator, or
              a music company ready to run with a working idea.
            </p>
          </section>

          {/* Call to Action */}
          <div className="mt-8">
            <button
              onClick={() => setShowMission(!showMission)}
              className="inline-block rounded-md bg-gray-200 text-black px-6 py-3 text-base font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/10"
              aria-label="Press Play to see mission"
            >
              Press Play
            </button>
          </div>

          {/* How we work Section */}
          {showMission && (
            <section className="mt-8 space-y-4">
              <h2 className="font-semibold">How we work</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>MVP in weeks, not months. Fast prototypes you can test right away.</li>
                <li>Labs for hire. Work with us per project or as an extension of your team.</li>
                <li>Vibe-arm for big companies. A way to explore without the corporate drag.</li>
                <li>
                  Build + spin-out. Sometimes we make things ourselves and find the right partner to
                  run with it.
                </li>
              </ul>
            </section>
          )}

          {/* Contact Info */}
          <footer className="mt-8">
            <p className="mb-4">
              Feel free to reach out at{" "}
              <a href="mailto:hi@newmusic.co" className="underline text-[#1D4ED8]">
                hi@newmusic.co
              </a>{" "}
              or follow along our journey at{" "}
              <a
                href="https://x.com/newmusicco"
                target="_blank"
                rel="noreferrer"
                className="underline text-[#1D4ED8]"
              >
                x.com/newmusicco
              </a>
              .
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}