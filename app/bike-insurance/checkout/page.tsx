import { Suspense } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CheckoutClient from "../../components/CheckoutClient";

export const metadata = {
  title: "Checkout | Bike Insurance | Coverfox",
  description: "Review details and complete a dummy payment to download your policy.",
  alternates: { canonical: "https://coverfox.vercel.app/bike-insurance/checkout" },
};

export default function BikeInsuranceCheckoutPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Suspense fallback={<main className="px-4 md:px-6 lg:px-8 py-8">Loading checkout...</main>}>
        <CheckoutClient />
      </Suspense>
      <Footer />
    </div>
  );
}
