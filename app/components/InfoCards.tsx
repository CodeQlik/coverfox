import React from "react";

const cards = [
  {
    illustration: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="32" ry="32" fill="#F5F8FC"/><rect x="18" y="36" width="28" height="12" rx="3" fill="#B3E5FC"/><ellipse cx="28" cy="32" rx="6" ry="8" fill="#FFD180"/><rect x="24" y="28" width="8" height="8" rx="2" fill="#FFB74D"/><ellipse cx="44" cy="32" rx="6" ry="8" fill="#90CAF9"/><rect x="40" y="28" width="8" height="8" rx="2" fill="#1976D2"/><circle cx="32" cy="28" r="6" fill="#FF8A65"/><rect x="28" y="24" width="8" height="8" rx="2" fill="#FFF"/></svg>
    ),
    content: (
      <>
        <div className="text-[#1BC47D] font-semibold text-base sm:text-lg">Our claims assistance<br />experts are available <span className="bg-[#1BC47D] text-white px-2 py-0.5 rounded text-sm sm:text-base ml-1">24x7*</span></div>
        <div className="text-xs text-gray-500 mt-1">*Assistance available for Health & Motor insurance</div>
      </>
    ),
  },
  {
    illustration: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="32" ry="32" fill="#F5F8FC"/><text x="16" y="38" fontSize="18" fill="#1976D2" fontWeight="bold">ask pb</text><circle cx="48" cy="32" r="8" fill="#FFB74D"/><rect x="36" y="36" width="8" height="8" rx="2" fill="#1976D2"/></svg>
    ),
    content: (
      <>
        <div className="text-[#23235F] font-bold text-sm sm:text-base mb-1">Got a question about insurance?</div>
        <div className="text-xs sm:text-sm text-gray-500">Drop a message and we will help you quickly.</div>
      </>
    ),
  },
  {
    illustration: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="32" rx="32" ry="32" fill="#FFF7E6"/><circle cx="32" cy="32" r="16" fill="#FFECB3"/><ellipse cx="32" cy="40" rx="8" ry="4" fill="#23235F"/><ellipse cx="32" cy="32" rx="8" ry="10" fill="#B0BEC5"/><ellipse cx="32" cy="28" rx="4" ry="4" fill="#fff"/><ellipse cx="32" cy="28" rx="2" ry="2" fill="#23235F"/></svg>
    ),
    content: (
      <>
        <div className="text-gray-400 text-xs sm:text-sm">Beware of</div>
        <div className="text-[#23235F] font-bold text-base sm:text-lg">Insurance Fraudsters</div>
      </>
    ),
  },
];

const InfoCards = () => (
  <section className="w-full bg-[#F5F8FC] py-4 sm:py-6 flex flex-col items-center">
    <div className="max-w-7xl w-full flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch justify-center px-3 sm:px-4">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="w-full md:flex-1 flex flex-col sm:flex-row items-start sm:items-center bg-white rounded-xl border border-[#E6ECF5] shadow-sm px-4 sm:px-6 py-3 sm:py-4 min-w-0 md:min-w-[320px] md:max-w-lg gap-3 sm:gap-4"
        >
          <div className="flex-shrink-0 [&>svg]:w-10 [&>svg]:h-10 sm:[&>svg]:w-12 sm:[&>svg]:h-12">{card.illustration}</div>
          <div className="flex-1">{card.content}</div>
        </div>
      ))}
    </div>
  </section>
);

export default InfoCards;