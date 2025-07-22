import React from "react";

const features = [
  {
    icon: "🎉",
    title: <span className="text-[#2D4BFF] font-bold">Over 9 million</span>,
    text: "customers trust us & have bought their insurance on Policybazaar",
    border: "border-l-4 border-[#2D4BFF]",
  },
  {
    icon: "🔍",
    title: <span className="text-[#00B6F0] font-bold">51 insurers</span>,
    text: "partnered with us so that you can compare easily & transparently",
    border: "border-l-4 border-[#00B6F0]",
  },
  {
    icon: "💰",
    title: <span className="text-[#1BC47D] font-bold">Great Price</span>,
    text: "for all kinds of insurance plans available online",
    border: "border-l-4 border-[#1BC47D]",
  },
  {
    icon: "🧑‍💼",
    title: <span className="text-[#FFB800] font-bold">Claims</span>,
    text: "support built in with every policy for help, when you need it the most",
    border: "border-l-4 border-[#FFB800]",
  },
];

const WhyUs = () => (
  <section className="w-full bg-white py-16 px-2 sm:px-8 flex flex-col items-center relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
      <svg width="100%" height="100%" className="absolute left-0 top-0" style={{zIndex:0}}>
        <circle cx="200" cy="120" r="100" fill="#F8FAFF" />
        <circle cx="80" cy="300" r="40" fill="#FFF7E6" />
        <circle cx="90%" cy="80" r="60" fill="#F8FAFF" />
        <circle cx="95%" cy="350" r="30" fill="#E3F2FD" />
      </svg>
      <div className="absolute right-0 top-0 w-40 h-40 bg-gradient-to-br from-[#E3F2FD] to-transparent rounded-full opacity-40" />
      <div className="absolute left-0 bottom-0 w-32 h-32 bg-gradient-to-tr from-[#FFF7E6] to-transparent rounded-full opacity-30" />
    </div>
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      {/* Left Side */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl sm:text-4xl font-light text-[#23235F] leading-snug">
          What makes <span className="font-bold text-[#23235F]">Policybazaar</span> one of<br />
          <span className="font-bold text-[#23235F]">India's favourite places</span><br />
          to <span className="font-bold text-[#23235F]">buy insurance?</span>
        </h2>
      </div>
      {/* Right Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className={`bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 ${f.border} min-h-[140px]`}
            style={{ boxShadow: "0 4px 16px 0 #E3E8F0" }}
          >
            <div className="text-2xl mb-1">{f.icon}</div>
            <div className="text-base font-bold mb-1">{f.title}</div>
            <div className="text-sm text-[#23235F] opacity-80">{f.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs; 