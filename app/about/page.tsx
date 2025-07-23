import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";
import teamBg from "@/images/team-bg.jpg";
import team from "../images/about-us-img1.avif";
import teamSmall from "../images/about-us-img2.avif";
import greatPlaceBadge from "../images/about-us-img4.avif";

export default function About() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Head>
        <title>About Coverfox - Our Story & Team</title>
        <meta name="description" content="Learn about Coverfox, our mission, our team, and how we are making insurance simple and transparent in India." />
        <link rel="canonical" href="https://www.Coverfox.com/about" />
      </Head>
      <Header />
      <main className="flex-1 w-full">
        <h1 className="sr-only">About Coverfox - Our Story & Team</h1>
        {/* Hero Section */}
        <div className="relative bg-[#23235F] min-h-[340px] flex items-center justify-center overflow-hidden">
          <Image src={greatPlaceBadge} alt="Team background" fill className="object-cover object-center opacity-60" />
          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-12 px-4">
            <div className="flex justify-between w-full items-start">
              <div></div>
              <Image src={greatPlaceBadge} alt="Great Place to Work Badge" width={90} height={120} className="mb-4 self-end" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">Finding you the best insurance since</h2>
            <div className="text-[80px] md:text-[120px] font-extrabold text-white text-center leading-none mb-2 drop-shadow-lg">2008</div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <button className="px-5 py-2 rounded-full bg-white text-blue-700 font-semibold shadow hover:bg-blue-50 transition">About Company</button>
              <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-blue-50 transition">Our Team</button>
              <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-blue-50 transition">Careers</button>
              <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold hover:bg-blue-50 transition">Awards</button>
            </div>
            <div className="text-white text-center font-medium max-w-2xl mx-auto">We are proud to say that our team of over <span className="font-bold">14,000+</span> talented individuals consists of the most brilliant and innovative technology, business, and marketing minds in India.</div>
          </div>
        </div>
        {/* Our Origin Section */}
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-blue-700 font-semibold mb-2">Our origin</div>
            <h2 className="text-3xl font-bold mb-4">How it all started</h2>
            <p className="text-gray-700 mb-4">Policybazaar was founded in 2008 with one objective: bringing transparency in insurance. The founders wanted to reimagine insurance, so they started by simplifying all the information around plans, ending the rampant mis-selling, and preventing policy lapses.</p>
            <div className="hidden md:block h-24"></div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Image src={team} alt="Team group" width={320} height={220} className="rounded-2xl border-4 border-white shadow-lg" />
              <Image src={teamSmall} alt="Team small" width={90} height={90} className="rounded-xl border-4 border-white shadow-lg absolute -bottom-6 -left-6 bg-white" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 