import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music & Tech 2025 - Where Innovation Meets Sound",
  description:
    "Join us at Music & Tech 2025, the ultimate event bridging music and technology. Explore AI, blockchain, streaming, and industry innovations with expert panels, live performances, and networking opportunities.",
  keywords: [
    "Music & Tech 2025",
    "Music Technology Conference",
    "AI in Music",
    "Blockchain for Musicians",
    "NFTs in Music",
    "Music Industry Innovation",
    "Live Performances",
    "Networking Event",
  ],
  authors: [{ name: "Valiant Khoza", url: "https://www.linkedin.com/in/valiant-khoza-189aa5182/" }],
  creator: "Valiant Khoza",
  publisher: "Music & Tech Conference",
  openGraph: {
    title: "Music & Tech 2025 - Where Innovation Meets Sound",
    description:
      "Discover how technology is shaping the future of music at Music & Tech 2025. Learn from industry experts, engage in workshops, and experience live performances.",
    url: "https://music-tech-event.vercel.app/",
    siteName: "Music & Tech 2025",
    images: [
      {
        url: "https://music-tech-event.vercel.app/music.jpeg",
        width: 1200,
        height: 630,
        alt: "Music & Tech 2025 Banner",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Music & Tech 2025 - Where Innovation Meets Sound",
    description:
      "Explore the intersection of music and technology at Music & Tech 2025. Join top industry experts for panels, workshops, and live performances.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
