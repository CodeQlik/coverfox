import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  alternates: {
    canonical: "https://coverfox.vercel.app/contact"
  }
};

export default function Contact() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Head>
        <title>Contact Coverfox - Customer Support & Help</title>
        <meta name="description" content="Contact Coverfox for customer support, queries, and assistance with your insurance policies. We're here to help you 24x7." />
        <link rel="canonical" href="https://www.Coverfox.com/contact" />
      </Head>
      <Header />
      <main className="flex-1 w-full">
        <h1 className="sr-only">Contact Coverfox - Customer Support & Help</h1>
        {/* Blue header section */}
        <div className="bg-blue-600 text-white py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm mb-2">
              <span className="opacity-80">Home</span> <span className="mx-1">&gt;</span> <span className="font-semibold">Contact Us</span>
            </nav>
            <p className="mb-2">At Policybazaar, it is our constant endeavour to provide great customer experience. In case you require assistance, we have created multiple ways to reach out to us.<br/>We commit to resolving your queries to your satisfaction.</p>
          </div>
        </div>
        {/* Cards section */}
        <div className="max-w-6xl mx-auto px-4 -mt-16 flex flex-col md:flex-row gap-6 relative z-10">
          {/* My account card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex-1 flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-shrink-0">
              <Image src="/assets/images/help.png" alt="Account help illustration" width={120} height={120} className="mb-4" />
            </div>
            <div>
              <h2 className="font-bold text-xl mb-1">My account</h2>
              <div className="text-gray-600 mb-2">Fastest One-stop Servicing Gateway</div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm">
                <span className="flex items-center gap-1">⭐ Download policy</span>
                <span className="flex items-center gap-1">⭐ Raise a query</span>
                <span className="flex items-center gap-1">⭐ Share feedback</span>
                <span className="flex items-center gap-1">⭐ Track policy status</span>
                <span className="flex items-center gap-1">⭐ Request a callback</span>
                <span className="flex items-center gap-1">⭐ View policy details & more</span>
              </div>
              <a href="#" className="inline-block bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Login to my account</a>
            </div>
          </div>
          {/* Need help card */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex-1 max-w-xs mx-auto md:mx-0">
            <h3 className="font-bold text-lg mb-4">Need help?</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 transition">
                <span className="bg-yellow-100 text-yellow-700 rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6.67 2.5A2.5 2.5 0 0 0 4.17 5v10a2.5 2.5 0 0 0 2.5 2.5h6.66A2.5 2.5 0 0 0 15.83 15V5a2.5 2.5 0 0 0-2.5-2.5H6.67z" fill="#F59E42"/></svg></span>
                <span className="font-medium">Request a call back</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 transition">
                <span className="bg-purple-100 text-purple-700 rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#A78BFA"/></svg></span>
                <span className="font-medium">Chat with us</span>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200">
                <span className="bg-green-100 text-green-700 rounded-full p-2"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#34D399"/></svg></span>
                <span>Connect on Whatsapp at<br/><span className="font-bold text-green-700">+91 8506013131</span></span>
              </div>
            </div>
          </div>
        </div>
        {/* Help steps section */}
        <div className="max-w-4xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-semibold mb-6">Here&apos;s how to receive help</h2>
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-2xl font-bold text-blue-600">1</div>
              <div className="font-semibold">Login to My Account to raise a Service Request</div>
            </div>
            <div className="mb-2 text-gray-700">If you have any query regarding your policies, kindly log in to My Account to raise a Service Request.</div>
            <a href="#" className="inline-block border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-50 transition">LOGIN</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="font-semibold">Reach out to our Head of Customer Services</div>
            </div>
          </div>
        </div>
        {/* Helpline info section */}
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="font-semibold mb-2">Helpline for buying a new policy</div>
            <div className="text-2xl font-bold text-blue-700 mb-1">1800-208-8787</div>
            <div className="text-sm text-gray-700 mb-1">10 AM to 7 PM</div>
            <div className="text-sm text-gray-700">NRI helpline for buying a new policy</div>
            <div className="font-bold text-blue-700">+91-124-6656507</div>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <div className="font-semibold mb-2">Helpline for existing policy</div>
            <div className="text-2xl font-bold text-green-700 mb-1">1800-258-5970</div>
            <div className="text-sm text-gray-700 mb-1">10 AM to 7 PM (use registered number)</div>
            <div className="text-sm text-gray-700">NRI helpline for existing policy</div>
            <div className="font-bold text-green-700">+91-124-6656507</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 