import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuotesGrid from "../../components/QuotesGrid";

export const metadata = {
  title: "Bike Insurance Quotes | Coverfox",
  description: "Compare two wheeler insurance quotes and choose the best plan.",
  alternates: { canonical: "https://coverfox.vercel.app/bike-insurance/quotes" },
};

export default function BikeInsuranceQuotesPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-8 space-y-6">
        <div className="bg-white border rounded-xl shadow-sm p-4">
          <div className="text-sm text-gray-600">Royal Enfield Classic 500 | 499 CC</div>
          <div className="text-xs text-gray-500">Policy Expired • Edit</div>
        </div>
        <QuotesGrid />
      </main>
      <Footer />
    </div>
  );
}
