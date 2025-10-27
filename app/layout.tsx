import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Atlas Journeys | Immersive Travel Guide",
  description:
    "Discover curated destinations, seasonal highlights, and immersive itineraries with Atlas Journeys, your modern travel guide.",
  keywords: [
    "travel guide",
    "destinations",
    "itinerary",
    "travel tips",
    "trip planning"
  ],
  authors: [{ name: "Atlas Journeys" }],
  openGraph: {
    title: "Atlas Journeys | Immersive Travel Guide",
    description:
      "Plan unforgettable trips with curated destinations, seasonal itineraries, and expert travel insights.",
    url: "https://agentic-a211ee66.vercel.app",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
        width: 1200,
        height: 630,
        alt: "Mountain traveler overlooking valley"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@atlasjourneys",
    title: "Atlas Journeys | Immersive Travel Guide",
    description:
      "Travel smarter with curated guides, seasonal inspiration, and immersive itineraries from Atlas Journeys."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="app-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
