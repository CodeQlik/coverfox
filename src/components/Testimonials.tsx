"use client";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Ananth Narayan",
    text: "Thank you for facilitating and following up on the policy. Its been a very pleasurable experience with you folks at Policybazaar.",
  },
  {
    name: "Neha Jain",
    text: "You are doing a great job. Proud to be a customer of Policybazaar.",
  },
  {
    name: "Shraddha Sharma",
    text: "Very simple to use, friendly website",
  },
  {
    name: "Rohit Kumar",
    text: "Quick and easy process, highly recommended!",
  },
  {
    name: "Priya Singh",
    text: "Great support and transparent information.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const cardsPerView = 3;
  const maxIndex = testimonials.length - cardsPerView;
  const visible = testimonials.slice(index, index + cardsPerView);

  return (
    <section className="w-full bg-white py-24 flex flex-col items-center relative overflow-x-hidden">
      <div className="max-w-7xl w-full px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] mb-2 text-left">What Our Customers<br />Are Saying</h2>
            <div className="h-1 w-16 bg-blue-600 rounded" />
          </div>
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 transition disabled:opacity-40"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              aria-label="Previous"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#23235F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              className="p-2 rounded-full border border-gray-200 hover:bg-blue-50 transition disabled:opacity-40"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={index === maxIndex}
              aria-label="Next"
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#1976D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
        {/* Background shape */}
        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
          <svg width="900" height="320" viewBox="0 0 900 320" fill="none"><path d="M200 320c0-110 200-220 250-220s250 110 250 220H200z" fill="#E6F0FF" fillOpacity="0.18"/></svg>
        </div>
        <div className="relative z-10 flex justify-center gap-16 mt-8">
          {visible.map((t, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg pt-12 pb-10 px-8 w-full max-w-md text-center flex flex-col items-center min-h-[220px]">
              <div className="font-bold text-lg text-[#23235F] mb-2">{t.name}</div>
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="mb-2"><text x="16" y="24" textAnchor="middle" fontSize="28" fill="#1976D2">“</text></svg>
              <div className="text-[#23235F] text-base opacity-80 leading-relaxed">{t.text}</div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: testimonials.length - cardsPerView + 1 }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${index === i ? "bg-blue-600" : "bg-blue-200"}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 