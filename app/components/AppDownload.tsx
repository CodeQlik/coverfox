"use client";
import React, { useState } from "react";
import app from "../images/get-app.avif";
import Image from "next/image";


  const features = [
  "Compare different insurance policies",
  "Buy, store and share all your policies online",
  "Track your policy status on the go",
  "Download your policy with a single tap",
];

const AppDownload = () => {
  const [imgError, setImgError] = useState(false);
  return (
    <section className="w-full bg-[#F5F8FC] py-10 sm:py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between px-3 sm:px-4 gap-6 sm:gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 lg:mb-0 max-w-2xl">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#23235F] mb-2">Get the CoverFox app</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mb-6" />
          <p className="text-gray-500 mb-6 max-w-prose">Get control of all your insurance needs anywhere, anytime</p>
          <ul className="mb-6 space-y-2">
            {features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-[#23235F]">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#B0BEC5" strokeWidth="2" fill="#fff"/><path d="M10 6.5l.94 1.91 2.11.31-1.52 1.48.36 2.1L10 11.25l-1.89.99.36-2.1-1.52-1.48 2.11-.31L10 6.5z" fill="#FFD600"/></svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mb-2 text-gray-500">Download our app from</div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <a href="#" aria-label="Google Play" className="shrink-0">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" width={150} height={48} className="h-10 sm:h-12 w-auto" />
            </a>
            <a href="#" aria-label="App Store" className="shrink-0">
              <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" width={150} height={48} className="h-10 sm:h-12 w-auto" />
            </a>
          </div>
        </div>
        {/* Right Side: Full Image */}
        <div className="flex-1 flex items-center justify-center relative w-full">
          {!imgError ? (
            <Image
              src={app}
              alt="App screen"
              width={600}
              height={600}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 600px"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="">
              <span className="text-red-700 font-bold">Image not found: /assets/images/get-app.avif</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppDownload;