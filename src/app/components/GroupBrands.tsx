"use client";
import React, { useState, useEffect } from "react";

const brands = [
  {
    name: "pbpartners",
    logo: <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="pbpartners" className="h-10 w-auto rounded" />,
  },
  {
    name: "CoverFox business",
    logo: <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="CoverFox business" className="h-10 w-auto rounded" />,
  },
  {
    name: "docprime",
    logo: <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="docprime" className="h-10 w-auto rounded" />,
  },
  {
    name: "quickfixcars",
    logo: <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="quickfixcars" className="h-10 w-auto rounded" />,
  },
  {
    name: "paisabazaar",
    logo: <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Paisabazaar_logo.png" alt="paisabazaar" className="h-10 w-auto bg-white p-1 rounded" />,
  },
  {
    name: "pb",
    logo: <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="pb" className="h-10 w-auto rounded-full" />,
  },
  {
    name: "CoverFox ae",
    logo: <img src="https://randomuser.me/api/portraits/women/49.jpg" alt="CoverFox ae" className="h-10 w-auto rounded" />,
  },
];

const cardsPerView = 5;

const GroupBrands = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = brands.length - cardsPerView;

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const visible = brands.slice(index, index + cardsPerView);

  return (
    <section className="w-full bg-white py-10 flex flex-col items-center">
      <div className="max-w-7xl w-full px-4">
        <h2 className="text-2xl font-bold text-[#23235F] text-left mb-6">Group Brands</h2>
        <div className="flex justify-center items-center gap-x-12 gap-y-6 overflow-hidden">
          {visible.map((b, i) => (
            <div key={i} className="flex items-center justify-center min-w-[120px]">
              {b.logo}
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: brands.length - cardsPerView + 1 }).map((_, i) => (
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

export default GroupBrands; 