import React from "react";

// SVG ICONS
const FilterIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#F1F6FF"/><path d="M4 6h16M7 12h10M10 18h4" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round"/></svg>
);
const LightningIcon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#FFF3E0"/><path d="M13 2L3 14h7v8l10-12h-7V2z" fill="#FFA726"/></svg>
);

// Example SVGs for product icons (replace with real SVGs as needed)
const ProductIcons = [
  <svg key="shield" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><path d="M20 10l8 4v5c0 5.25-3.44 10.06-8 11-4.56-.94-8-5.75-8-11v-5l8-4z" stroke="#7B61FF" strokeWidth="2" fill="#fff"/></svg>,
  <svg key="heart" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><path d="M20 32s-8-6.28-8-12a6 6 0 1112 0 6 6 0 1112 0c0 5.72-8 12-8 12z" fill="#FF5A5F"/></svg>,
  <svg key="coins" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><circle cx="20" cy="20" r="8" fill="#FFD600"/><path d="M20 16v8M16 20h8" stroke="#FFA726" strokeWidth="2"/></svg>,
  <svg key="car" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><rect x="10" y="20" width="20" height="8" rx="2" fill="#B0BEC5"/><rect x="14" y="16" width="12" height="8" rx="2" fill="#90CAF9"/></svg>,
  <svg key="bike" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><circle cx="14" cy="26" r="4" fill="#A5D6A7"/><circle cx="26" cy="26" r="4" fill="#A5D6A7"/><rect x="18" y="18" width="4" height="8" fill="#66BB6A"/></svg>,
  <svg key="family" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><circle cx="20" cy="18" r="4" fill="#FFD600"/><rect x="14" y="24" width="12" height="4" rx="2" fill="#FFA726"/></svg>,
  <svg key="plane" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><path d="M10 30l20-10-20-10v6l12 4-12 4v6z" fill="#90CAF9"/></svg>,
  <svg key="swim" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><ellipse cx="20" cy="28" rx="8" ry="2" fill="#90CAF9"/><circle cx="20" cy="20" r="4" fill="#FFD600"/></svg>,
  <svg key="target" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><circle cx="20" cy="20" r="8" fill="#FF5A5F"/><circle cx="20" cy="20" r="4" fill="#fff"/></svg>,
  <svg key="bag" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><rect x="14" y="18" width="12" height="8" rx="2" fill="#FFD600"/><rect x="18" y="14" width="4" height="4" fill="#FFA726"/></svg>,
  <svg key="child" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><circle cx="20" cy="20" r="6" fill="#FF5A5F"/><rect x="16" y="26" width="8" height="4" rx="2" fill="#FFD600"/></svg>,
  <svg key="retire" width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F1F6FF"/><circle cx="20" cy="20" r="8" fill="#B0BEC5"/><rect x="16" y="24" width="8" height="4" rx="2" fill="#90CAF9"/></svg>,
];

const products = [
  { label: "Lowest Price Guarantee", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[0], name: "Term Life Insurance" },
  { label: "FREE Home Visit", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[1], name: "Health Insurance" },
  { label: "In-Built Life Cover", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[2], name: "Investment Plans" },
  { label: "Upto 91% Discount", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[3], name: "Car Insurance" },
  { label: "Upto 85% Discount", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[4], name: "2 Wheeler Insurance" },
  { label: "Upto 25% Discount", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[5], name: "Family Health Insurance" },
  { label: "", labelColor: "", icon: ProductIcons[6], name: "Travel Insurance" },
  { label: "Upto 20% Cheaper", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[7], name: "Term Insurance (Women)" },
  { label: "", labelColor: "", icon: ProductIcons[8], name: "Term Plans with Return of Premium" },
  { label: "Guaranteed Return", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[9], name: "Guaranteed Return Plans" },
  { label: "Premium Waiver", labelColor: "bg-red-100 text-red-500", icon: ProductIcons[10], name: "Child Savings Plans" },
  { label: "", labelColor: "", icon: ProductIcons[11], name: "Retirement Plans" },
  { label: "Upto 65% Discount", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[12], name: "Employee Group Health Insurance" },
  { label: "Upto 25% Discount", labelColor: "bg-green-100 text-green-700", icon: ProductIcons[5], name: "Home Insurance" },
];

const alsoBuy = [
  { tag: "Investment", name: "LIC Plans" },
  { tag: "Term Life", name: "Return of Premium" },
  { tag: "Term life", name: "Life Insurance for Housewives" },
  { tag: "Health Insurance", name: "Day 1 Coverage" },
  { tag: "Health Insurance", name: "1 Cr Health Insurance" },
  { tag: "Health Insurance", name: "Personal Accident" },
  { tag: "Motor Insurance", name: "Commercial Vehicles" },
  { tag: "Business Insurance", name: "Marine Insurance" },
  { tag: "Business Insurance", name: "Professional Indemnity for Doctors" },
  { tag: "Business Insurance", name: "Directors & Officers Liability" },
  { tag: "Business Insurance", name: "Workmen Compensation" },
  { tag: "Others", name: "Pet Insurance" },
  { tag: "Others", name: "Personal Cyber Insurance" },
];

const Banner = () => (
  <section className="w-full bg-white py-10 px-2 sm:px-8 flex flex-col items-center">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[2fr_1.2fr] gap-8 items-start">
      {/* Left Side */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl sm:text-5xl font-light text-black leading-tight">
            Let's find you<br />
            <span className="font-bold text-[#23235F]">the Best Insurance</span>
          </h1>
        </div>
        <div className="flex flex-wrap gap-8 mt-2 items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block align-middle"><FilterIcon /></span>
            <span className="text-[#7B61FF] font-medium">51 insurers offering lowest prices</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block align-middle"><LightningIcon /></span>
            <span className="text-[#FFA726] font-medium">Quick, easy & hassle free</span>
          </div>
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {products.slice(0, 12).map((p, i) => (
            <div key={p.name} className="bg-[#F7FAFE] rounded-2xl p-4 flex flex-col items-center shadow-sm min-w-[120px] border border-[#E6ECF5]">
              {p.label && (
                <div className={`text-xs font-semibold rounded px-2 py-0.5 mb-2 ${p.labelColor}`}>{p.label}</div>
              )}
              <div className="mb-2">{p.icon}</div>
              <div className="text-center text-[#23235F] text-sm font-medium min-h-[40px] flex items-center justify-center">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Side - Promo Card Slider */}
      <div className="flex flex-col items-center justify-start pt-2">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg flex flex-col items-start relative min-h-[260px] mt-2 border border-[#E6ECF5]">
          <div className="text-xs text-[#8A8A8A] mb-1">*In Unit Linked Insurance Plans, the investment risk in the investment portfolio is borne by the policyholder and the returns are not guaranteed</div>
          <div className="text-2xl font-semibold text-[#23235F] mb-1">Invest <span className="text-[#1976D2] font-bold">₹ 10,000/month</span></div>
          <div className="text-xl font-semibold text-[#23235F] mb-2">& Get <span className="text-[#43A047] font-bold">₹ 1 Crore</span> returns<sup className="text-xs font-normal">*</sup></div>
          <button className="bg-[#E3F2FD] text-[#1976D2] font-semibold px-4 py-1 rounded-full text-xs mb-3">In-built life cover</button>
          <button className="bg-[#1976D2] text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-700 transition mb-2">View plans</button>
          {/* Placeholder for image */}
          <div className="absolute bottom-2 right-2 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-[#FFF7E6] border border-[#E6ECF5]">
            <span className="text-6xl">🧑‍💼</span>
          </div>
        </div>
        {/* Dots for slider - below the card */}
        <div className="flex gap-2 mt-4">
          <span className="w-2 h-2 rounded-full bg-[#1976D2]"></span>
          <span className="w-2 h-2 rounded-full bg-[#E6ECF5]"></span>
          <span className="w-2 h-2 rounded-full bg-[#E6ECF5]"></span>
        </div>
      </div>
    </div>
    {/* View all products and Also Buy below both columns */}
    <div className="max-w-7xl w-full flex flex-col items-center mt-8">
      <button className="border border-[#1976D2] text-[#1976D2] px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition mb-6">
        View all products
      </button>
      <div className="w-full">
        <div className="text-[#1976D2] font-semibold mb-3">ALSO BUY</div>
        <div className="flex flex-wrap gap-3">
          {alsoBuy.map((item) => (
            <span key={item.name} className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm border border-[#E6ECF5] text-[#23235F] flex items-center gap-2">
              <span className="text-xs text-[#7B61FF]">{item.tag}</span> {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Banner; 