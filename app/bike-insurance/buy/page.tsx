import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PurchaseForm from "../../components/PurchaseForm";

export const metadata = {
  title: "Buy Bike Insurance | Coverfox",
  description: "Enter owner details and communication address to complete purchase.",
  alternates: { canonical: "https://coverfox.vercel.app/bike-insurance/buy" },
};

export default function BikeInsuranceBuyPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-8 space-y-6">
        <PurchaseForm />
      </main>
      <Footer />
    </div>
  );
}
