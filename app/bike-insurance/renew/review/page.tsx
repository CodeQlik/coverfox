import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import RenewReviewClient from "../../../components/RenewReviewClient";
import { Suspense } from "react";

export const metadata = {
  title: "Renewal Review | Bike Insurance | Coverfox",
};

export default function BikeRenewReviewPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-10">
        <Suspense fallback={<div className="text-center text-sm text-gray-500">Loading…</div>}>
          <RenewReviewClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
