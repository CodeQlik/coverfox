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
import BikeInsuranceForm from "./components/BikeInsuranceForm";

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
        <Banner />
        {/* Bike Insurance quick form */}
        <div className="w-full py-8 px-2 sm:px-8 flex justify-center">
          <BikeInsuranceForm fullWidth />
        </div>
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
