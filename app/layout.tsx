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
        <meta name="google-site-verification" content="IxABNn0_s9BhcnO_iRadEjv83LXVrIAuxr0xMFFw1HM" />
        <meta name="description" content="Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download." />
        <meta name="keywords" content="insurance, Coverfox, health insurance, term insurance, car insurance, life insurance, online insurance, compare insurance, buy insurance, best insurance plans, investment plans, calculators, claim, support, contact, about, company, resources, policy, renewal, advisor, investor relations, legal, admin policies, ISNP, PB Life, awards, newsroom, customer reviews, insurance companies, general insurance, travel insurance, bike insurance, motor insurance, commercial vehicle insurance, electric car insurance, e-bike insurance, IDV calculator, SIP, ULIP, pension plans, child plans, tax saving, critical illness, maternity, senior citizen, family, NRI, HLV calculator, secured, payment methods, social media, Facebook, Twitter, LinkedIn, YouTube" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://coverfox.vercel.app" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Coverfox - Best Insurance Plans Online in India" />
        <meta property="og:description" content="Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://coverfox.vercel.app/" />
        <meta property="og:image" content="/coverfox-og.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coverfox - Best Insurance Plans Online in India" />
        <meta name="twitter:description" content="Compare, buy, and manage insurance policies online with Coverfox. Get the best quotes for health, term, car, and life insurance. 51+ insurers, 24x7 support, instant policy download." />
        <meta name="twitter:image" content="/coverfox-og.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Coverfox",
          "url": "https://coverfox.vercel.app/",
          "logo": "https://coverfox.vercel.app/assets/images/logo.avif",
          "sameAs": [
            "https://www.facebook.com/coverfoxinsurance",
            "https://twitter.com/coverfoxinsurance",
            "https://www.linkedin.com/company/coverfoxinsurance"
          ]
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://coverfox.vercel.app/",
          "name": "Coverfox - Best Insurance Plans Online in India",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://coverfox.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }) }} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
