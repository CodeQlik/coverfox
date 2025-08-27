import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RenewLoginClient from "../../components/RenewLoginClient";
import { Suspense } from "react";

export const metadata = {
  title: "Instant Renewal | Bike Insurance | Coverfox",
  description: "Renew the policy bought last year at Coverfox in 3 quick steps.",
  alternates: { canonical: "https://coverfox.vercel.app/bike-insurance/renew" },
};

export default function BikeRenewLoginPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-10">
        <Suspense fallback={<div className="text-center text-sm text-gray-500">Loading…</div>}>
          <RenewLoginClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
