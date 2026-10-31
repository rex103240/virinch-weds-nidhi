import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virinch & Nidhi — Wedding Invitation",
  description:
    "You are cordially invited to the wedding celebration of Virinch & Nidhi — a union of two souls, two families, blessed by tradition and love.",
  openGraph: {
    title: "Virinch & Nidhi — Wedding Invitation",
    description:
      "Join us as we celebrate the auspicious union of Virinch & Nidhi. 12 Dec 2026 — Jodhpur, Rajasthan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className="min-h-screen overflow-x-hidden"
        style={{
          fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
          background: "#FFF4E3",
          color: "#2C1810",
          lineHeight: 1.7,
        }}
      >
        {/* Cinematic film grain */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
