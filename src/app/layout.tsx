import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
  description: "Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Coverfox - Best Insurance Plans Online in India</title>
        <meta name="description" content="Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download." />
        <meta name="keywords" content="insurance, Coverfox, health insurance, term insurance, car insurance, life insurance, online insurance, compare insurance, buy insurance, best insurance plans" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.Coverfox.com/" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Coverfox - Best Insurance Plans Online in India" />
        <meta property="og:description" content="Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.Coverfox.com/" />
        <meta property="og:image" content="/public/assets/images/get-app.avif" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coverfox - Best Insurance Plans Online in India" />
        <meta name="twitter:description" content="Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download." />
        <meta name="twitter:image" content="/public/assets/images/get-app.avif" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
