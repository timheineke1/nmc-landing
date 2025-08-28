import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The New Music Co.",
  description: "Landing page for The New Music Co.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}