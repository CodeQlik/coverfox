import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import RenewPayClient from "../../../components/RenewPayClient";
import { Suspense } from "react";

export const metadata = {
  title: "Payment | Bike Insurance Renewal | Coverfox",
};

export default function BikeRenewPayPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-10">
        <Suspense fallback={<div className="text-center text-sm text-gray-500">Loading…</div>}>
          <RenewPayClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
