"use client";
import { useState } from "react";

export default function TheNewMusicCo() {
  const [showMission, setShowMission] = useState(false);

  return (
    <div className="relative min-h-screen text-black font-mono">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200" />

      {/* Content */}
      <main className="relative flex flex-col items-center justify-center min-h-screen p-6 z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="NMC logo"
          >
            <rect
              x="1"
              y="1"
              width="26"
              height="26"
              rx="6"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M8 9v10M14 9v10M20 9v10"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-sm">NMC</span>
        </div>

        {/* Intro Text */}
        <section className="space-y-4 text-base leading-relaxed text-center max-w-lg">
          <p>Hi! We&apos;re the New Music Co.</p>
          <p>
            We&apos;re building something exciting at the intersection of{" "}
            <strong>music</strong> and <strong>technology</strong>.
          </p>
        </section>

        {/* Button */}
        <button
          onClick={() => setShowMission(!showMission)}
          className="mt-10 px-6 py-3 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          {showMission ? "Hide" : "Show"} Our Mission
        </button>

        {/* Mission Card */}
        {showMission && (
          <div className="mt-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-center max-w-md">
            <h2 className="text-lg font-semibold mb-3">Our Mission</h2>
            <p>
              To create new ways for music and artists to connect with audiences
              worldwide.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}