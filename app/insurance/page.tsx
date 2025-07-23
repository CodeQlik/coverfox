import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Insurance() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full bg-[#f7fafd] pb-12">
        {/* Top nav and tabs (minimal for now) */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 py-2 text-sm font-medium">
            <span className="py-2 px-3 text-blue-700 border-b-2 border-blue-700">Life Insurance</span>
            <span className="py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer">Insurance Plans</span>
            <span className="py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer">Best Life Insurance in India</span>
            <span className="py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer">Policy Meaning and Definition</span>
            <span className="py-2 px-3 text-gray-700 hover:text-blue-700 cursor-pointer">Types of Life Insurance Policies</span>
            <span className="ml-auto py-2 px-3 bg-blue-50 text-blue-700 rounded-full flex items-center gap-2 cursor-pointer">View all content <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 12l4-4-4-4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            <span className="py-2 px-3 bg-gray-100 text-gray-700 rounded-full flex items-center gap-2">Page Progress <span className="ml-1 bg-white border border-gray-300 rounded-full px-2">0%</span></span>
          </div>
        </div>
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 mt-8">
          {/* Left: Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 text-[#23235F]">Life Insurance</h1>
            <p className="text-gray-700 mb-6">Life is unpredictable, and while we all hope for the best, being prepared is essential. Life insurance is a legal contract between you and the insurer that provides a financial safety net for your loved ones in your absence. It ensures your family can manage expenses and maintain stability during difficult times. Beyond protection, life insurance can also help you plan for long-term goals like your child&apos;s education, marriage, or retirement.</p>
            <h2 className="text-2xl font-semibold mb-3 text-[#23235F]">Understanding Life Insurance: Definition and Meaning</h2>
            <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
              <Image src="/assets/images/family.png" alt="Family illustration" width={160} height={160} className="rounded-xl bg-blue-50" />
              <ul className="list-none space-y-3 text-gray-700 flex-1">
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✦</span> Life insurance is a contract between a policyholder and an Insurance company where the insurer pays a set amount to the nominee if the policyholder dies during the policy term, in return for regular premium payments.</li>
                <li className="flex items-start gap-2"><span className="text-blue-600 mt-1">✦</span> Some plans also offer survival or maturity benefits, critical illness coverage, and tax benefits, making life insurance a smart tool for protection and long-term financial planning.</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-6 bg-white rounded-xl shadow p-4 items-center">
              <div className="flex items-center gap-2"><span className="text-yellow-500 text-xl">★</span><span className="font-bold text-lg">4.8 Rated</span></div>
              <div className="border-l border-gray-200 h-6 mx-2"></div>
              <div className="text-center"><div className="font-bold">5.3 Crore</div><div className="text-xs text-gray-500">Policies Sold</div></div>
              <div className="text-center"><div className="font-bold">10.5 Crore</div><div className="text-xs text-gray-500">Registered Consumer</div></div>
              <div className="text-center"><div className="font-bold">51 Partners</div><div className="text-xs text-gray-500">Insurance Partners</div></div>
            </div>
          </div>
          {/* Right: Quote Card */}
          <div className="w-full md:w-[400px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-600">
              <div className="flex gap-2 mb-6">
                <button className="flex-1 py-2 rounded-full font-semibold bg-blue-600 text-white">Term Insurance</button>
                <button className="flex-1 py-2 rounded-full font-semibold bg-gray-100 text-gray-500">Investment plans</button>
              </div>
              <div className="mb-2 text-gray-700">Protect your family today and get ₹1 Crore</div>
              <div className="text-2xl font-bold text-blue-700 mb-2">@487/month<sup className="text-blue-500 text-xs align-super">+</sup></div>
              <div className="flex gap-6 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" className="accent-blue-600" defaultChecked /> Male
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="gender" className="accent-blue-600" /> Female
                </label>
              </div>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <input type="text" placeholder="Date of Birth (DD/MM/YYYY)" className="w-full border border-gray-300 rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              <div className="flex gap-2 mb-3">
                <select className="border border-gray-300 rounded px-2 py-2 bg-white">
                  <option>India +91</option>
                </select>
                <input type="text" placeholder="Mobile Number" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-2 hover:bg-blue-700 transition">View Term Quotes</button>
              <div className="text-xs text-gray-500 mt-2">By clicking on &quot;View Term Quotes&quot; you agree to our Privacy Policy and Terms of use<br/>Tax benefit is subject to changes in tax laws</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-green-600"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#34D399"/></svg></span>
                <span className="text-sm">Get Updates on WhatsApp</span>
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer peer-checked:bg-green-400 transition-all"></div>
                  <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow transform peer-checked:translate-x-4 transition-all"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 