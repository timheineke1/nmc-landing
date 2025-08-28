"use client";
import { useState } from "react";

const monoStack =
  'ui-monospace, "SFMono-Regular", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

export default function NMCGradientPage() {
  const [show, setShow] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: monoStack,
        color: "#000",
      }}
    >
      {/* OpenAI-like soft gradient background */}
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          zIndex: -1,
          backgroundImage:
            "radial-gradient(100% 80% at 10% 10%, #fde1ea 0%, rgba(253,225,234,0) 50%)," +
            "radial-gradient(80% 70% at 90% 0%, #dbeafe 0%, rgba(219,234,254,0) 50%)," +
            "radial-gradient(70% 70% at 100% 100%, #e9d5ff 0%, rgba(233,213,255,0) 50%)," +
            "radial-gradient(80% 80% at 0% 100%, #fee2e2 0%, rgba(254,226,226,0) 50%)",
          backgroundColor: "#fff",
        }}
      />

      {/* Centered content card */}
      <div
        style={{
          maxWidth: 760, // matches Canvas width closely
          margin: "0 auto",
          padding: "64px 20px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            backdropFilter: "blur(6px)",
            borderRadius: 16,
            boxShadow: "0 0 1px rgba(0,0,0,0.06)",
            padding: 28,
            margin: "0 auto",
          }}
        >
          {/* Header row (logo + label) */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-label="NMC logo">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke="#000" strokeWidth="2" />
              <path d="M7 9h10M7 12h10M7 15h6" stroke="#000" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontSize: 13,
                letterSpacing: "0.02em",
              }}
            >
              NMC
            </span>
          </div>

          {/* Body copy */}
          <section
            style={{
              fontSize: 15,         // hard-lock the size
              lineHeight: 1.75,     // 28px on 16px base -> here exactly for 15px
              letterSpacing: "0.003em",
            }}
          >
            <p style={{ fontWeight: 600, marginBottom: 14 }}>Hi! We&apos;re the New Music Co.</p>

            <p style={{ marginBottom: 14 }}>
              We’re a collective of music execs and founders helping labels, managers, agents,
              distributors, publishers, radio—or anyone in the music industry—turn their next idea
              into reality.
            </p>

            <p style={{ marginBottom: 14 }}>
              AI lets us ship faster than ever. But knowing what to make—taste, selection,
              synthesis—matters more. We build the big and the “boring” as much as the small and
              useful.
            </p>

            <p style={{ marginBottom: 14 }}>
              We help shape your ideas and bring them to life in weeks instead of months. Work with
              us per project or as an extension of your team, like your own Labs.
            </p>

            <p style={{ marginBottom: 6 }}>
              Sometimes we build things for ourselves—to show, not tell—and along the way, we might
              find the right partner to take it further. That could be a co-founder, an operator, or
              a music company ready to run with a working idea.
            </p>

            {/* CTA */}
            <div style={{ marginTop: 18 }}>
              <button
                onClick={() => setShow((v) => !v)}
                style={{
                  fontFamily: monoStack,
                  fontSize: 13,
                  background: "#e5e7eb",
                  borderRadius: 8,
                  padding: "8px 12px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 0 rgba(0,0,0,0.04) inset",
                  cursor: "pointer",
                }}
              >
                Press Play
              </button>
            </div>

            {/* Reveal block */}
            {show && (
              <section style={{ marginTop: 22 }}>
                <h2 style={{ fontWeight: 600, marginBottom: 10 }}>How we work</h2>
                <ul style={{ paddingLeft: 18 }}>
                  <li style={{ marginBottom: 6 }}>
                    MVP in weeks, not months. Fast prototypes you can test right away.
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Labs for hire. Work with us per project or as an extension of your team.
                  </li>
                  <li style={{ marginBottom: 6 }}>
                    Vibe-arm for big companies. Explore without the corporate drag.
                  </li>
                  <li>
                    Build + spin-out. Sometimes we make things and find the right partner to run
                    with it.
                  </li>
                </ul>
              </section>
            )}

            {/* Footer */}
            <footer style={{ marginTop: 26 }}>
              <p>
                Feel free to reach out at{" "}
                <a href="mailto:hi@newmusic.co" style={{ textDecoration: "underline", color: "#1D4ED8" }}>
                  hi@newmusic.co
                </a>{" "}
                or follow along at{" "}
                <a
                  href="https://x.com/newmusicco"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline", color: "#1D4ED8" }}
                >
                  x.com/newmusicco
                </a>
                .
              </p>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}