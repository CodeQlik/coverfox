import Header from "../components/Header";
import Footer from "../components/Footer";
import BikeInsuranceForm from "../components/BikeInsuranceForm";

export const metadata = {
  title: "Bike Insurance | Coverfox",
  description: "Renew or buy two wheeler insurance. Get instant quotes and save up to 85%.",
  alternates: { canonical: "https://coverfox.vercel.app/bike-insurance" },
};

export default function BikeInsurancePage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-8">
        <BikeInsuranceForm />
      </main>
      <Footer />
    </div>
  );
}
