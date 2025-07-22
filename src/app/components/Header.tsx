"use client";
import React, { useState } from "react";

const navItems = [
  {
    label: "Insurance Products",
    type: "mega",
    content: (
      <div className="grid grid-cols-4 gap-8 p-6 bg-white">
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-2">
            <span>☂️</span> Term Insurance
          </div>
          <ul className="space-y-1 text-sm">
            {[
              "Life Insurance",
              "List of Term Insurance Plan",
              "Term Insurance for NRI",
              "What is Term Insurance",
              "1 Crore Term Insurance",
              "Term Insurance Calculator",
              "Dedicated Claim Assistance",
              "Term Insurance for Women",
              "Term Insurance for HNI",
              "Term Insurance Return of Premium",
            ].map((text) => (
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{text}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-2">
            <span>💰</span> Investment Plans
          </div>
          <ul className="space-y-1 text-sm">
            {[
              "Investment Plans with High Returns",
              "Market Linked Investment Plans (ULIP)",
              "Investment Plans for NRIs",
              "SIP Calculator",
              "Capital Guarantee Plans",
              "Child Plans",
              "Pension Plans",
              "Guaranteed Return Plans",
              "Tax Saving Investments",
              "SIP (Systematic Investment Plan)",
              "Endowment Policy",
            ].map((text) => (
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{text}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-2">
            <span>💗</span> Health Insurance
          </div>
          <ul className="space-y-1 text-sm">
            {[
              "Book Free Home Visit",
              "Family Health Insurance",
              "Senior Citizen Health Insurance",
              "Health Insurance for Parents",
              "Maternity Insurance",
              "Health Insurance Portability",
              "OPD Cover In Health Insurance",
              "Mediclaim Policy",
              "Critical Illness Insurance",
              "Health Insurance Calculator",
              "Health Insurance Companies",
            ].map((text) => (
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{text}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-2">
            <span>🚗</span> Car Insurance
          </div>
          <ul className="space-y-1 text-sm">
            {[
              "Motor Insurance",
              "Bike Insurance",
              "Zero Dep Car Insurance",
              "Third Party Insurance",
              "Third Party Bike Insurance",
              "Car Insurance Calculator",
              "Bike Insurance Calculator",
              "Car Insurance Companies",
              "Pay As You Drive Insurance",
              "Commercial Vehicle Insurance",
              "Electric Car Insurance",
              "E-Bike Insurance",
              "IDV Calculator",
            ].map((text) => (
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{text}</li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "Renew Your Policy",
    type: "dropdown",
    content: (
      <ul className="py-2 w-64 bg-white">
        {[
          { icon: "☂️", text: "Term Life Renewal" },
          { icon: "💰", text: "Investment Renewal" },
          { icon: "💗", text: "Health Renewal" },
          { icon: "🚗", text: "Motor Renewal" },
          { icon: "🏍️", text: "Two Wheeler Renewal" },
          { icon: "🏠", text: "Home Insurance Renewal" },
        ].map(({ icon, text }) => (
          <li key={text} className="flex items-center gap-2 px-4 py-2 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{icon} {text}</li>
        ))}
      </ul>
    ),
  },
  {
    label: "Claim",
    type: "dropdown",
    content: (
      <ul className="py-2 w-64 bg-white">
        {[
          "File a new claim",
          "Claim is already filed with the Insurer",
          "Know more about filing claim",
          "Track existing claim",
        ].map((text) => (
          <li key={text} className="px-4 py-2 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{text}</li>
        ))}
      </ul>
    ),
  },
  {
    label: "Support",
    type: "dropdown",
    content: (
      <div className="p-4 w-80 bg-white">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 text-black"><span>📞</span> <span className="font-semibold">Helpline for buying a new policy</span></div>
          <div className="font-bold text-black">1800-208-8787</div>
        </div>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 text-black"><span>⚙️</span> <span className="font-semibold">Helpline for existing policy</span></div>
          <div className="font-bold text-black">1800-258-5970</div>
        </div>
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1 text-black"><span>💵</span> <span className="font-semibold">Helpline for claim</span></div>
          <div className="font-bold text-black">1800-258-5881</div>
        </div>
        <hr className="my-2" />
        <div className="mb-2 text-xs font-semibold text-black">My account</div>
        <ul className="space-y-1 text-sm mb-2">
          {[
            { icon: "👤", text: "Dashboard" },
            { icon: "📄", text: "Policies" },
            { icon: "❓", text: "Get help" },
            { icon: "📞", text: "Manage communication preferences" },
            { icon: "🕵️‍♂️", text: "Verify your advisor" },
          ].map(({ icon, text }) => (
            <li key={text} className="flex items-center gap-2 px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">{icon} {text}</li>
          ))}
        </ul>
        <div className="mb-2 text-xs font-semibold text-black">Contact us</div>
        <div className="flex gap-2">
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-blue-50 text-black hover:text-black rounded transition">
            <span>💬</span>
            <span className="text-xs">Whatsapp</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-blue-50 text-black hover:text-black rounded transition">
            <span>📍</span>
            <span className="text-xs">Stores</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 hover:bg-blue-50 text-black hover:text-black rounded transition">
            <span>📞</span>
            <span className="text-xs">Callback</span>
          </button>
        </div>
      </div>
    ),
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-8 py-3 z-50 relative">
      <div className="flex items-center gap-2 text-2xl font-bold text-black">
        <span className="text-3xl">🏢</span>
        CoverFox
      </div>
      <nav className="flex items-center gap-4 relative">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`px-3 py-2 font-medium flex items-center gap-1 hover:text-black text-black transition ${openMenu === item.label ? "text-black" : "text-black"}`}
              onClick={() => handleMenu(item.label)}
              aria-haspopup="true"
              aria-expanded={openMenu === item.label}
            >
              {item.label}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openMenu === item.label && (
              <div
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[300px] ${item.type === "mega" ? "w-[900px]" : ""} animate-fadeIn z-50`}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.content}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-black transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2 8.5C2 7.12 3.12 6 4.5 6h15A2.5 2.5 0 0122 8.5v7A2.5 2.5 0 0119.5 18h-15A2.5 2.5 0 012 15.5v-7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 10h.01M12 14h.01M18 10h.01" /></svg>
          Talk to Expert
        </button>
        <button className="border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-black transition">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header; 