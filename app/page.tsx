import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WhyUs from "./components/WhyUs";
import InfoCards from "./components/InfoCards";
import PopularCalculators from "./components/PopularCalculators";
import PBAdvantage from "./components/PBAdvantage";
import AppDownload from "./components/AppDownload";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import ContactHelp from "./components/ContactHelp";
import GroupBrands from "./components/GroupBrands";
import ServicesSlider from "./components/ServicesSlider";

export const metadata = {
  alternates: {
    canonical: "https://coverfox.vercel.app/"
  }
};

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="">
        <h1 className="sr-only">Coverfox - Best Insurance Plans Online in India</h1>
        <nav className="mb-4 flex gap-4">
          <a href="/about" className="underline text-blue-700">About</a>
          <a href="/contact" className="underline text-blue-700">Contact</a>
          <a href="/insurance" className="underline text-blue-700">Insurance</a>
          <a href="/bike-insurance" className="underline text-blue-700">Bike Insurance</a>
        </nav>
        <Banner />
        <ServicesSlider />
        <WhyUs />
        <InfoCards />
        <PopularCalculators />
        <PBAdvantage />
        <AppDownload />
        <Testimonials />
        <Partners />
        <ContactHelp />
        <GroupBrands />
      </main>
      <Footer />
    </div> 
  );
}
