import React from "react";

const features = [
  "Compare different insurance policies",
  "Buy, store and share all your policies online",
  "Track your policy status on the go",
  "Download your policy with a single tap",
];

const floatingBoxes = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#F3F0FF"/><path d="M12 7v10M7 12h10" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Get Claims Assistance",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#FFF7E6"/><path d="M12 7v10M7 12h10" stroke="#FFB300" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Tax Saving Investment",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F7FB"/><path d="M12 7v10M7 12h10" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Term Life Insurance",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E6F7FB"/><path d="M12 7v10M7 12h10" stroke="#00B6F0" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Health Insurance",
  },
];

const AppDownload = () => (
  <section className="w-full bg-[#F5F8FC] py-16 flex flex-col items-center">
    <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between px-4 gap-8">
      {/* Left Side */}
      <div className="flex-1 flex flex-col items-start justify-center mb-8 lg:mb-0">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] mb-2">Get the Policybazaar app</h2>
        <div className="h-1 w-16 bg-blue-600 rounded mb-6" />
        <p className="text-gray-500 mb-6 max-w-lg">Get control of all your insurance needs anywhere, anytime</p>
        <ul className="mb-6 space-y-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-[#23235F]">
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" fill="#B0BEC5"/><path d="M10 6.5l.94 1.91 2.11.31-1.52 1.48.36 2.1L10 11.25l-1.89.99.36-2.1-1.52-1.48 2.11-.31L10 6.5z" fill="#FFD600"/></svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <div className="mb-2 text-gray-500">Download our app from</div>
        <div className="flex gap-4">
          <a href="#" aria-label="Google Play">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12 w-auto" />
          </a>
          <a href="#" aria-label="App Store">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12 w-auto" />
          </a>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
        {/* Floating feature boxes */}
        <div className="absolute left-0 top-12 flex flex-col gap-4 z-10">
          {floatingBoxes.map((box, i) => (
            <div key={i} className="bg-white rounded-xl shadow px-4 py-2 flex items-center gap-2 mb-2 min-w-[180px]">
              <span>{box.icon}</span>
              <span className="text-xs text-[#23235F] font-medium whitespace-nowrap">{box.text}</span>
            </div>
          ))}
        </div>
        {/* Phone images (dummy) */}
        <div className="flex gap-4 items-end ml-40">
          <img src="https://i.imgur.com/6b6psnA.png" alt="App screen 1" className="h-80 w-auto rounded-2xl shadow-lg border-2 border-white z-20" />
          <img src="https://i.imgur.com/8QfQ2Qp.png" alt="App screen 2" className="h-72 w-auto rounded-2xl shadow-lg border-2 border-white z-10 -ml-12" />
        </div>
      </div>
    </div>
  </section>
);

export default AppDownload; 