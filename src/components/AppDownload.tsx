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
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#F3F0FF"/><path d="M20 12v12M12 20h16" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round"/><path d="M16 20h8" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Get Claims Assistance",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#FFF7E6"/><g><rect x="14" y="24" width="12" height="3" rx="1.5" fill="#FFB300"/><rect x="18" y="16" width="4" height="10" rx="2" fill="#FFB300"/><rect x="16" y="14" width="8" height="3" rx="1.5" fill="#FFB300"/></g><text x="20" y="34" textAnchor="middle" fontSize="10" fill="#FFB300">TAX</text></svg>
    ),
    text: "Tax Saving Investment",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#E6F7FB"/><path d="M14 26c2-4 10-4 12 0" stroke="#00B6F0" strokeWidth="2"/><path d="M20 14v10" stroke="#00B6F0" strokeWidth="2"/><ellipse cx="20" cy="26" rx="4" ry="2" fill="#00B6F0"/></svg>
    ),
    text: "Term Life Insurance",
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="12" fill="#E6F7FB"/><path d="M20 16c-2 0-6 2-6 6a6 6 0 0012 0c0-4-4-6-6-6z" fill="#FFB6B6"/><path d="M20 24v2" stroke="#FF5A5F" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    text: "Health Insurance",
  },
];

const phone1 = "https://assets.coverfox.com/static/coverfox-phone1.png";
const phone2 = "https://assets.coverfox.com/static/coverfox-phone2.png";

const boxPositions = [
  { top: 0, left: 0, z: 40 },
  { top: 60, left: 24, z: 30 },
  { top: 120, left: 48, z: 20 },
  { top: 180, left: 72, z: 10 },
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
              <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" stroke="#B0BEC5" strokeWidth="2" fill="#fff"/><path d="M10 6.5l.94 1.91 2.11.31-1.52 1.48.36 2.1L10 11.25l-1.89.99.36-2.1-1.52-1.48 2.11-.31L10 6.5z" fill="#FFD600"/></svg>
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
        {/* Floating feature boxes - overlapped, square */}
        <div className="absolute left-0 top-8 w-80 h-[320px] z-30" style={{ pointerEvents: 'none' }}>
          {floatingBoxes.map((box, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center absolute border border-[#E6ECF5] transition-all duration-300"
              style={{
                boxShadow: '0 4px 24px 0 #E3E8F0, 0 0 0 4px #F5F8FC',
                top: boxPositions[i].top,
                left: boxPositions[i].left,
                zIndex: boxPositions[i].z,
                width: 110,
                height: 110,
              }}
            >
              <div className="mb-2">{box.icon}</div>
              <div className="text-center text-[#23235F] text-sm font-medium leading-tight px-2">{box.text}</div>
            </div>
          ))}
        </div>
        {/* Phone images (dummy) */}
        <div className="flex gap-4 items-end ml-32">
          <img src={phone1} alt="App screen 1" className="h-80 w-auto rounded-2xl shadow-lg border-2 border-white z-20" />
          <img src={phone2} alt="App screen 2" className="h-72 w-auto rounded-2xl shadow-lg border-2 border-white z-10 -ml-12" />
        </div>
      </div>
    </div>
  </section>
);

export default AppDownload; 