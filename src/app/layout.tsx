import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahima Jyoti | Full-Stack Engineer & ML Engineer",
  description:
    "Portfolio of Mahima Jyoti — Final-year B.Tech CSE (AI & ML) at VIT Bhopal (CGPA 9.20). Building CloudCollab, GameNexus, and RoadGuard-X.",
  keywords: [
    "Mahima Jyoti",
    "Full-Stack Engineer",
    "ML Engineer",
    "VIT Bhopal",
    "CloudCollab",
    "GameNexus",
    "RoadGuard-X",
    "Portfolio",
  ],
  authors: [{ name: "Mahima Jyoti" }],
  openGraph: {
    title: "Mahima Jyoti | Full-Stack Engineer & ML Engineer",
    description:
      "From raw data to deployed APIs. Ship systems that actually run.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#0a0a0f] text-zinc-100">{children}</body>
    </html>
  );
}
