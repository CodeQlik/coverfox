import React from "react";

const calculators = [
  {
    color: "bg-[#FFF3F0]",
    title: "Investment calculators",
    illustration: (
      <svg width="80" height="48" viewBox="0 0 80 48" fill="none"><rect width="80" height="48" rx="12" fill="#FFF3F0"/><ellipse cx="60" cy="24" rx="12" ry="12" fill="#FFD6D6"/><rect x="50" y="20" width="8" height="8" rx="2" fill="#FFB4B4"/><ellipse cx="28" cy="24" rx="10" ry="10" fill="#FFD6D6"/><rect x="18" y="18" width="8" height="8" rx="2" fill="#FFB4B4"/></svg>
    ),
    items: [
      "SIP Calculator",
      "Income Tax Calculator",
      "ULIP Calculator",
      "NPS Calculator",
    ],
  },
  {
    color: "bg-[#E6F7FB]",
    title: "Term Insurance calculators",
    illustration: (
      <svg width="80" height="48" viewBox="0 0 80 48" fill="none"><rect width="80" height="48" rx="12" fill="#E6F7FB"/><ellipse cx="60" cy="24" rx="12" ry="12" fill="#B3E5FC"/><rect x="50" y="20" width="8" height="8" rx="2" fill="#4FC3F7"/><ellipse cx="28" cy="24" rx="10" ry="10" fill="#B3E5FC"/><rect x="18" y="18" width="8" height="8" rx="2" fill="#4FC3F7"/></svg>
    ),
    items: [
      "Life Insurance Calculator",
      "Term Insurance Calculator",
      "Human Life Value Calculator",
      "NRI Term Insurance Calculator",
    ],
  },
  {
    color: "bg-[#F3F0FF]",
    title: "Policy premium calculators",
    illustration: (
      <svg width="80" height="48" viewBox="0 0 80 48" fill="none"><rect width="80" height="48" rx="12" fill="#F3F0FF"/><ellipse cx="60" cy="24" rx="12" ry="12" fill="#D6D6FF"/><rect x="50" y="20" width="8" height="8" rx="2" fill="#B4B4FF"/><ellipse cx="28" cy="24" rx="10" ry="10" fill="#D6D6FF"/><rect x="18" y="18" width="8" height="8" rx="2" fill="#B4B4FF"/></svg>
    ),
    items: [
      "Health Insurance Premium Calculator",
      "Car Insurance Calculator",
      "Bike Insurance Calculator",
      "Travel Insurance Calculator",
    ],
  },
];

const PopularCalculators = () => (
  <section className="w-full bg-white py-16 flex flex-col items-center">
    <div className="max-w-7xl w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] mb-2">Popular calculators</h2>
      <p className="text-gray-500 mb-10 max-w-2xl">Discover our user-friendly calculators tailored to help you make informed financial decisions. Our diverse range of insurance calculators ensures you find the perfect fit for your needs. Explore the options below to get started.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {calculators.map((cat, idx) => (
          <div key={idx} className="rounded-2xl border border-[#E6ECF5] bg-white shadow-sm overflow-hidden flex flex-col">
            <div className={`flex items-center justify-between p-4 ${cat.color}`}>
              <span className="font-bold text-lg text-[#23235F]">{cat.title}</span>
              <span>{cat.illustration}</span>
            </div>
            <div className="flex-1 flex flex-col divide-y divide-[#E6ECF5]">
              {cat.items.map((item, i) => (
                <a key={i} href="#" className="flex items-center justify-between px-4 py-3 text-[#23235F] hover:bg-[#F5F8FC] transition">
                  <span>{item}</span>
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#23235F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="border border-[#1976D2] text-[#1976D2] px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition">
          View All Calculators
        </button>
      </div>
    </div>
  </section>
);

export default PopularCalculators; 