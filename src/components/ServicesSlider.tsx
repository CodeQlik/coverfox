"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    bg: "bg-gradient-to-br from-green-400 to-green-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><circle cx="16" cy="16" r="10" fill="#fff" fillOpacity=".15"/><path d="M16 10v8M12 16h8" stroke="#fff" strokeWidth="2"/></g></svg>
    ),
    title: "Investment Plans",
    subtitle: (
      <>
        Invest <span className="font-bold">₹10K</span> and Get<br />
        <span className="font-bold text-2xl">₹1 Crore</span> return*
      </>
    ),
    cta: "View plans",
  },
  {
    bg: "bg-gradient-to-br from-blue-500 to-blue-400",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><path d="M16 10a6 6 0 016 6v2a6 6 0 01-12 0v-2a6 6 0 016-6z" fill="#fff" fillOpacity=".15"/><path d="M16 10v8" stroke="#fff" strokeWidth="2"/></g></svg>
    ),
    title: "Health Insurance",
    subtitle: (
      <>
        Book <span className="font-bold">Free Health Insurance<br />Consultation</span> at home
      </>
    ),
    cta: "Book home visit",
  },
  {
    bg: "bg-gradient-to-br from-pink-400 to-purple-300",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".15"/><g><rect x="10" y="14" width="12" height="8" rx="2" fill="#fff" fillOpacity=".15"/><rect x="14" y="10" width="4" height="4" fill="#fff" fillOpacity=".15"/></g></svg>
    ),
    title: "SIP Calculator",
    subtitle: (
      <>
        Make investment simple<br />with our <span className="font-bold">SIP calculator</span>
      </>
    ),
    cta: "Calculate now",
  },
  // Add more cards if you want to test more than 3 at a time
];

function getCardsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

const ServicesSlider = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(slides.length / cardsPerView));
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  // Calculate the number of sets
  const numSets = Math.ceil(slides.length / cardsPerView);

  // Get the slides to show
  const getVisibleSlides = () => {
    const start = current * cardsPerView;
    return slides.slice(start, start + cardsPerView);
  };

  return (
    <section className="w-full bg-[#F5F8FC] py-8 flex flex-col items-center">
      <div className="max-w-6xl w-full overflow-x-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(0)` }}>
          {getVisibleSlides().map((slide, idx) => (
            <div
              key={idx}
              className={`w-full max-w-md px-4 flex-shrink-0 flex items-center justify-center`}
            >
              <div className={`w-full rounded-2xl shadow-lg p-8 flex flex-col gap-4 text-white relative ${slide.bg}`}
                   style={{ minHeight: 180 }}>
                <div className="absolute top-4 right-4">{slide.icon}</div>
                <div className="text-sm opacity-80 mb-1">{slide.title}</div>
                <div className="text-xl font-bold mb-2">{slide.subtitle}</div>
                <button className="bg-white text-blue-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-50 transition w-max mt-2">
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {Array.from({ length: numSets }).map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${current === idx ? "bg-blue-500" : "bg-blue-200"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide set ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider; 