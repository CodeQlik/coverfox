import React from "react";

const partners = Array.from({ length: 42 }).map((_, i) => ({
  name: `Partner ${i + 1}`,
  // Use a real logo or a placeholder SVG
  logo: (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none"><rect width="120" height="40" rx="8" fill="#F5F8FC"/><text x="60" y="25" textAnchor="middle" fontSize="16" fill="#B0BEC5">Logo</text></svg>
  ),
}));

const Partners = () => (
  <section className="w-full bg-[#F5F8FC] py-16 flex flex-col items-center">
    <div className="max-w-7xl w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] text-center mb-2">Our Partners</h2>
      <p className="text-gray-500 text-center mb-10">Leading insurers for your financial freedom</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {partners.map((p, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm flex items-center justify-center p-4 h-[70px] w-full">
            {p.logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners; 