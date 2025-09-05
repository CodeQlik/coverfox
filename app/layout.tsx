import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coverfox - Best Insurance Plans Online in India",
  description:
    "Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download.",
  keywords: [
    "insurance",
    "Coverfox",
    "health insurance",
    "term insurance",
    "car insurance",
    "life insurance",
    "online insurance",
    "compare insurance",
    "buy insurance",
    "best insurance plans",
    "investment plans",
    "calculators",
    "claim",
    "support",
    "contact",
    "about",
    "company",
    "resources",
    "policy",
    "renewal",
    "advisor",
    "investor relations",
    "legal",
    "admin policies",
    "ISNP",
    "PB Life",
    "awards",
    "newsroom",
    "customer reviews",
    "insurance companies",
    "general insurance",
    "travel insurance",
    "bike insurance",
    "motor insurance",
    "commercial vehicle insurance",
    "electric car insurance",
    "e-bike insurance",
    "IDV calculator",
    "SIP",
    "ULIP",
    "pension plans",
    "child plans",
    "tax saving",
    "critical illness",
    "maternity",
    "senior citizen",
    "family",
    "NRI",
    "HLV calculator",
    "secured",
    "payment methods",
    "social media",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "YouTube",
  ],
  metadataBase: new URL("https://coverfox.vercel.app"),
  openGraph: {
    title: "Coverfox - Best Insurance Plans Online in India",
    description:
      "Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download.",
    url: "https://coverfox.vercel.app/",
    siteName: "Coverfox",
    images: ["/coverfox-og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coverfox - Best Insurance Plans Online in India",
    description:
      "Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download.",
    images: ["/coverfox-og.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "IxABNn0_s9BhcnO_iRadEjv83LXVrIAuxr0xMFFw1HM",
  },
  alternates: {
    canonical: "https://coverfox.vercel.app/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
