import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import WhyUs from "../components/WhyUs";
import InfoCards from "../components/InfoCards";
import PopularCalculators from "../components/PopularCalculators";
import PBAdvantage from "../components/PBAdvantage";
import AppDownload from "../components/AppDownload";
import ClientSlider from "../components/ClientSlider";
import ClientListing from "../components/ClientListing";
import ServicesSlider from "../components/ServicesSlider";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 flex flex-col gap-12">
        <Banner />
        <ServicesSlider />
        <WhyUs />
        <InfoCards />
        <PopularCalculators />
        <PBAdvantage />
        <AppDownload />
        <ClientSlider />
        <ClientListing />
      </main>
      <Footer />
    </div>
  );
}
