import React from "react";

const features = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#FFF7E6"/><g><rect x="20" y="36" width="24" height="8" rx="2" fill="#FFD180"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#FFB74D"/><rect x="28" y="20" width="8" height="8" rx="2" fill="#FFB300"/></g></svg>
    ),
    title: "One of the best Prices",
    subtitle: "Guaranteed",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#E6F7FB"/><g><rect x="20" y="36" width="24" height="8" rx="2" fill="#B3E5FC"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#4FC3F7"/><rect x="28" y="20" width="8" height="8" rx="2" fill="#1976D2"/></g></svg>
    ),
    title: "Unbiased Advice",
    subtitle: "Keeping customers first",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#F3F0FF"/><g><rect x="20" y="36" width="24" height="8" rx="2" fill="#D6D6FF"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#B4B4FF"/><rect x="28" y="20" width="8" height="8" rx="2" fill="#7B61FF"/></g></svg>
    ),
    title: "100% Reliable",
    subtitle: "Regulated by IRDAI",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#E6F7FB"/><g><rect x="20" y="36" width="24" height="8" rx="2" fill="#B3E5FC"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#4FC3F7"/><rect x="28" y="20" width="8" height="8" rx="2" fill="#1976D2"/></g></svg>
    ),
    title: "Claims Support",
    subtitle: "Made stress-free",
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="16" fill="#FFF7E6"/><g><rect x="20" y="36" width="24" height="8" rx="2" fill="#FFD180"/><rect x="24" y="28" width="16" height="8" rx="2" fill="#FFB74D"/><rect x="28" y="20" width="8" height="8" rx="2" fill="#FFB300"/></g></svg>
    ),
    title: "Happy to Help",
    subtitle: "Every day of the week",
  },
];

const PBAdvantage = () => (
  <section className="w-full bg-white py-16 flex flex-col items-center">
    <div className="max-w-7xl w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] mb-2">PB Advantage</h2>
      <div className="h-1 w-16 bg-blue-600 rounded mb-6" />
      <p className="text-gray-500 mb-4 max-w-2xl">When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
      <a href="#" className="text-[#1976D2] font-medium mb-10 inline-block">Know more</a>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-[#E6ECF5] shadow-sm flex flex-col items-center p-6 min-h-[220px] text-center transition-all duration-200 hover:shadow-2xl hover:-translate-y-2 hover:border-[#1976D2] cursor-pointer"
          >
            <div className="mb-4">{f.icon}</div>
            <div className="font-bold text-lg text-[#23235F] mb-1">{f.title}</div>
            <div className="text-gray-500 text-sm">{f.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PBAdvantage; 