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

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="">
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
