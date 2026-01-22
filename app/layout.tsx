import type { Metadata } from "next";
import { Roboto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: "Flight Search Engine",
    template: "%s | Flight Search Engine",
  },
  description:
    "Search, compare and analyze flight prices easily. A modern flight search engine built with Next.js and TypeScript.",
  keywords: [
    "flight search",
    "cheap flights",
    "flight comparison",
    "airlines",
    "travel booking",
    "next.js flight app",
  ],
  authors: [{ name: "Mauro De Assis" }],
  creator: "Mauro De Assis",

  icons: {
    icon: "/icons/airplane.svg",
  },

  openGraph: {
    title: "Flight Search Engine",
    description:
      "Find the best flight deals by comparing airlines, prices and routes in one place.",
    type: "website",
    locale: "en_US",
    siteName: "Flight Search Engine",
  },

  twitter: {
    card: "summary",
    title: "Flight Search Engine",
    description:
      "Compare flights and prices easily with a modern flight search engine.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
