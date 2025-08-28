"use client";
import React, { useEffect, useMemo, useState } from "react";

import Image from "next/image";
const navItems = [
  {
    label: "Insurance Products",
    type: "mega",
    href: "/insurance",
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
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">
                <a href="/insurance">{text}</a>
              </li>
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
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">
                <a href="/insurance">{text}</a>
              </li>
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
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">
                <a href="/insurance">{text}</a>
              </li>
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
              <li key={text} className="px-2 py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">
                <a href="/insurance">{text}</a>
              </li>
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
          { icon: "☂️", text: "Term Life Renewal", href: "/insurance" },
          { icon: "💰", text: "Investment Renewal", href: "/insurance" },
          { icon: "💗", text: "Health Renewal", href: "/insurance" },
          { icon: "🚗", text: "Motor Renewal", href: "/insurance" },
          { icon: "🏍️", text: "Two Wheeler Renewal", href: "/insurance" },
          { icon: "🏠", text: "Home Insurance Renewal", href: "/insurance" },
        ].map(({ icon, text, href }) => (
          <li key={text} className="flex items-center gap-2 px-4 py-2 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">
            <a href={href}>{icon} {text}</a>
          </li>
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
          { text: "File a new claim", href: "/insurance" },
          { text: "Claim is already filed with the Insurer", href: "/insurance" },
          { text: "Know more about filing claim", href: "/about" },
          { text: "Track existing claim", href: "/contact" },
        ].map(({ text, href }) => (
          <li key={text} className="px-4 py-2 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer">
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Support",
    type: "dropdown",
    content: (
      <div className="p-4 w-80 bg-white">
        {/* My account section */}
        <div className="mb-2">
          <div className="text-xs font-bold text-[#00E0E0] mb-2 bg-[#E6FCFC] px-3 py-1 rounded-full w-max">My account</div>
          <ul className="space-y-3 mb-4">
            {/* <li className="flex items-center gap-3">
              <span className="text-xl">📋</span>
              <span className="font-semibold text-[#23235F]">Dashboard</span>
            </li> */}
            <li className="flex items-center gap-3">
              <span className="text-xl">🗂️</span>
              <div>
                <div className="font-semibold text-[#23235F]">Policies</div>
                <div className="text-xs text-gray-400">Sign in to view all your policies</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">❓</span>
              <span className="font-semibold text-[#23235F]">Get help</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="font-semibold text-[#23235F]">Manage communication<br/>preferences</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">🕵️‍♂️</span>
              <span className="font-semibold text-[#23235F]">Verify your advisor</span>
            </li>
          </ul>
        </div>
        {/* Contact us section */}
        <div className="mb-2">
          <div className="text-xs font-bold text-[#00E0E0] mb-2 bg-[#E6FCFC] px-3 py-1 rounded-full w-max">Contact us</div>
          <div className="flex gap-4 mb-4">
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#E6FCFC] rounded-xl p-3 text-2xl">💬</div>
              <div className="text-xs text-[#23235F] text-center">Connect on<br/>Whatsapp</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#E6FCFC] rounded-xl p-3 text-2xl">📍</div>
              <div className="text-xs text-[#23235F] text-center">Stores<br/>near you</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#E6FCFC] rounded-xl p-3 text-2xl">📞</div>
              <div className="text-xs text-[#23235F] text-center">Request a<br/>callback</div>
            </div>
          </div>
        </div>
        {/* View more link */}
        {/* <div className="flex items-center gap-2 text-[#23235F] mt-2 cursor-pointer hover:underline">
          <span className="text-2xl">🔲</span>
          <span className="font-medium">View more</span>
        </div> */}
      </div>
    ),
  },
];

const Header = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Only access document on client side
    if (typeof window === 'undefined') return;
    
    // parse cookies for cf_user and cf_role
    const map = Object.fromEntries(
      document.cookie.split("; ").map((c) => {
        const idx = c.indexOf("=");
        return [decodeURIComponent(c.slice(0, idx)), decodeURIComponent(c.slice(idx + 1))];
      })
    );
    const roleCookie = map["cf_role"];
    setRole(roleCookie || null);
    const raw = map["cf_user"];
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {
        setUser(null);
      }
    }
  }, []);

  const roleRoute = useMemo(() => {
    const routes: Record<string, string> = {
      admin: "/dashboard/admin",
      user: "/dashboard/user",
      seo: "/dashboard/seo",
      agent: "/dashboard/agent",
    };
    return role ? routes[role] || "/dashboard/user" : "/dashboard";
  }, [role]);

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      // Refresh to reflect logged-out header
      window.location.href = "/";
    } catch {}
  };

  const handleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-8 py-3 z-50 relative">
      <div className="flex items-center gap-2 text-2xl font-bold text-black">
        <a href="/">
        <Image src="/logo.jpeg" alt="Coverfox Logo" width={64} height={64} className="h-16 w-auto" priority />
        </a>
      </div>
      <nav className="flex items-center gap-4 relative">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative group"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            {item.href ? (
              <a
                href={item.href}
                className={`px-3 py-2 font-medium flex items-center gap-1 hover:text-black text-black transition ${openMenu === item.label ? "text-black" : "text-black"}`}
                aria-haspopup="true"
                aria-expanded={openMenu === item.label}
                onClick={() => handleMenu(item.label)}
              >
                {item.label}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
            ) : (
              <button
                className={`px-3 py-2 font-medium flex items-center gap-1 hover:text-black text-black transition ${openMenu === item.label ? "text-black" : "text-black"}`}
                onClick={() => handleMenu(item.label)}
                aria-haspopup="true"
                aria-expanded={openMenu === item.label}
              >
                {item.label}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            )}
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
        <a href="/about" className="px-3 py-2 font-medium hover:text-black text-black transition">About</a>
        <a href="/contact" className="px-3 py-2 font-medium hover:text-black text-black transition">Contact Us</a>
        <a href="/insurance" className="hover:text-orange-600">Insurance</a>
        <a href="/dashboard" className="hover:text-orange-600">Dashboard</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-black transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2 8.5C2 7.12 3.12 6 4.5 6h15A2.5 2.5 0 0122 8.5v7A2.5 2.5 0 0119.5 18h-15A2.5 2.5 0 012 15.5v-7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 10h.01M12 14h.01M18 10h.01" /></svg>
          Talk to Expert
        </button>
        {user && role ? (
          <div className="flex items-center gap-2">
            <a href={roleRoute} className="px-3 py-1.5 rounded-full border text-sm">
              {(user.name || "G").charAt(0).toUpperCase()} · {role.toUpperCase()}
            </a>
            <button onClick={logout} className="border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-blue-50 transition">
              Logout
            </button>
          </div>
        ) : (
          <a href="/login" className="border border-black text-black px-4 py-2 rounded-full font-medium hover:bg-blue-50 hover:text-black transition">
            Sign in
          </a>
        )}
      </div>
    </header>
  );
};

export default Header; 