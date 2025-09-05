"use client";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import logo from "../images/logo.png";

const navItems = [
  {
    label: "Insurance Products",
    type: "mega",
    href: "/insurance",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-3 lg:gap-2 xl:gap-6 p-2 md:p-3 lg:p-2 xl:p-6 bg-white">
        <div>
          <div className="flex items-center gap-1.5 lg:gap-1.5 xl:gap-2 font-bold text-black mb-0.5 lg:mb-1 xl:mb-2">
            <span className="text-xs lg:text-xs xl:text-base">☂️</span>
            <span className="text-xs lg:text-xs xl:text-sm">
              Term Insurance
            </span>
          </div>
          <ul className="space-y-0.5 lg:space-y-0.5 xl:space-y-1 text-xs lg:text-xs xl:text-sm">
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
              <li
                key={text}
                className="px-1 lg:px-1.5 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer"
              >
                <a href="/insurance">{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-1 lg:mb-1.5 xl:mb-2">
            <span className="text-sm lg:text-sm xl:text-base">💰</span>
            <span className="text-xs lg:text-xs xl:text-sm">
              Investment Plans
            </span>
          </div>
          <ul className="space-y-0.5 lg:space-y-0.5 xl:space-y-1 text-xs lg:text-xs xl:text-sm">
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
              <li
                key={text}
                className="px-1.5 lg:px-1.5 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer"
              >
                <a href="/insurance">{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-1 lg:mb-1.5 xl:mb-2">
            <span className="text-sm lg:text-sm xl:text-base">💗</span>
            <span className="text-xs lg:text-xs xl:text-sm">
              Health Insurance
            </span>
          </div>
          <ul className="space-y-0.5 lg:space-y-0.5 xl:space-y-1 text-xs lg:text-xs xl:text-sm">
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
              <li
                key={text}
                className="px-1.5 lg:px-1.5 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer"
              >
                <a href="/insurance">{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 font-bold text-black mb-1 lg:mb-1.5 xl:mb-2">
            <span className="text-sm lg:text-sm xl:text-base">🚗</span>
            <span className="text-xs lg:text-xs xl:text-sm">Car Insurance</span>
          </div>
          <ul className="space-y-0.5 lg:space-y-0.5 xl:space-y-1 text-xs lg:text-xs xl:text-sm">
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
              <li
                key={text}
                className="px-1.5 lg:px-1.5 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer"
              >
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
      <ul className="py-1.5 lg:py-1.5 xl:py-2 w-full md:w-56 lg:w-56 xl:w-64 bg-white">
        {[
          { icon: "☂️", text: "Term Life Renewal", href: "/insurance" },
          { icon: "💰", text: "Investment Renewal", href: "/insurance" },
          { icon: "💗", text: "Health Renewal", href: "/insurance" },
          { icon: "🚗", text: "Motor Renewal", href: "/insurance" },
          { icon: "🏍️", text: "Two Wheeler Renewal", href: "/insurance" },
          { icon: "🏠", text: "Home Insurance Renewal", href: "/insurance" },
        ].map(({ icon, text, href }) => (
          <li
            key={text}
            className="flex items-center gap-1.5 lg:gap-1.5 xl:gap-2 px-3 lg:px-3 xl:px-4 py-1.5 lg:py-1.5 xl:py-2 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer"
          >
            <a href={href}>
              {icon} {text}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Claim",
    type: "dropdown",
    content: (
      <ul className="py-1.5 lg:py-1.5 xl:py-2 w-full md:w-56 lg:w-56 xl:w-64 bg-white">
        {[
          { text: "File a new claim", href: "/insurance" },
          {
            text: "Claim is already filed with the Insurer",
            href: "/insurance",
          },
          { text: "Know more about filing claim", href: "/about" },
          { text: "Track existing claim", href: "/contact" },
        ].map(({ text, href }) => (
          <li
            key={text}
            className="px-3 lg:px-3 xl:px-4 py-1.5 lg:py-1.5 xl:py-2 rounded transition hover:bg-blue-50 text-black hover:text-black cursor-pointer"
          >
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
      <div className="p-3 lg:p-3 xl:p-4 w-full md:w-72 lg:w-72 xl:w-80 bg-white">
        {/* My account section */}
        <div className="mb-2">
          <div className="text-xs font-bold text-[#00E0E0] mb-2 bg-[#E6FCFC] px-3 py-1 rounded-full w-max">
            My account
          </div>
          <ul className="space-y-3 mb-4">
            {/* <li className="flex items-center gap-3">
              <span className="text-xl">📋</span>
              <span className="font-semibold text-[#23235F]">Dashboard</span>
            </li> */}
            <li className="flex items-center gap-3">
              <span className="text-xl">🗂️</span>
              <div>
                <div className="font-semibold text-[#23235F]">Policies</div>
                <div className="text-xs text-gray-400">
                  Sign in to view all your policies
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">❓</span>
              <span className="font-semibold text-[#23235F]">Get help</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="font-semibold text-[#23235F]">
                Manage communication
                <br />
                preferences
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">🕵️‍♂️</span>
              <span className="font-semibold text-[#23235F]">
                Verify your advisor
              </span>
            </li>
          </ul>
        </div>
        {/* Contact us section */}
        <div className="mb-2">
          <div className="text-xs font-bold text-[#00E0E0] mb-2 bg-[#E6FCFC] px-3 py-1 rounded-full w-max">
            Contact us
          </div>
          <div className="flex gap-4 mb-4">
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#E6FCFC] rounded-xl p-3 text-2xl">💬</div>
              <div className="text-xs text-[#23235F] text-center">
                Connect on
                <br />
                Whatsapp
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#E6FCFC] rounded-xl p-3 text-2xl">📍</div>
              <div className="text-xs text-[#23235F] text-center">
                Stores
                <br />
                near you
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-[#E6FCFC] rounded-xl p-3 text-2xl">📞</div>
              <div className="text-xs text-[#23235F] text-center">
                Request a<br />
                callback
              </div>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(
    null
  );
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Only access document on client side
    if (typeof window === "undefined") return;

    // parse cookies for cf_user and cf_role
    const map = Object.fromEntries(
      document.cookie.split("; ").map((c) => {
        const idx = c.indexOf("=");
        return [
          decodeURIComponent(c.slice(0, idx)),
          decodeURIComponent(c.slice(idx + 1)),
        ];
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

  const roleRoute: string = useMemo(() => {
    const routes: Record<string, string> = {
      admin: "/dashboard/admin",
      user: "/dashboard/user",
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
    setOpenMenu(openMenu === label ? null : label || null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close any open dropdown when toggling mobile menu
    setOpenMenu(null);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-4 xl:px-6 2xl:px-8 py-2 md:py-3 z-50 relative">
      {/* Logo */}
      <div className="flex items-center gap-1 sm:gap-2 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-bold text-black">
        <a href="/" onClick={closeMobileMenu} className="flex items-center">
          <Image
            src={logo}
            alt="Coverfox Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 w-auto object-contain"
            priority
          />
        </a>
      </div>

      {/* Desktop Navigation (1024px and above) */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-4 relative">
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
                className={`px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm font-medium flex items-center gap-1 hover:text-black text-black transition ${
                  openMenu === item.label ? "text-black" : "text-black"
                }`}
                aria-haspopup="true"
                aria-expanded={openMenu === item.label}
                onClick={() => handleMenu(item.label)}
              >
                {item.label}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            ) : (
              <button
                className={`px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm font-medium flex items-center gap-1 hover:text-black text-black transition ${
                  openMenu === item.label ? "text-black" : "text-black"
                }`}
                onClick={() => handleMenu(item.label)}
                aria-haspopup="true"
                aria-expanded={openMenu === item.label}
              >
                {item.label}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}
            {openMenu === item.label && (
              <div
                className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg border border-gray-200 min-w-[280px] lg:min-w-[220px] xl:min-w-[300px] ${
                  item.type === "mega"
                    ? "w-[600px] lg:w-[520px] xl:w-[800px] 2xl:w-[900px]"
                    : ""
                } animate-fadeIn z-50`}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {item.content}
              </div>
            )}
          </div>
        ))}
        <a
          href="/about"
          className="px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm font-medium hover:text-black text-black transition"
        >
          About
        </a>
        <a
          href="/contact"
          className="px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm font-medium hover:text-black text-black transition"
        >
          Contact Us
        </a>
        <a
          href="/insurance"
          className="px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm hover:text-orange-600 transition"
        >
          Insurance
        </a>
        <a
          href="/dashboard"
          className="px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm hover:text-orange-600 transition"
        >
          Dashboard
        </a>
      </nav>

      {/* Desktop Right Side (1024px and above) */}
      <div className="hidden lg:flex items-center gap-3">
        <button className="flex items-center gap-1 lg:gap-1.5 xl:gap-2 border border-black text-black px-2.5 lg:px-2 xl:px-3 py-1 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm rounded-full text-xs lg:text-sm xl:text-base font-medium hover:bg-blue-50 hover:text-black transition">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2 8.5C2 7.12 3.12 6 4.5 6h15A2.5 2.5 0 0122 8.5v7A2.5 2.5 0 0119.5 18h-15A2.5 2.5 0 012 15.5v-7z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 10h.01M12 14h.01M18 10h.01"
            />
          </svg>
          Talk to Expert
        </button>
        {user && role ? (
          <div className="flex items-center gap-2">
            <a
              href={roleRoute}
              className="px-1 lg:px-1 xl:px-2 py-0.5 lg:py-0.5 xl:py-1 text-xs lg:text-xs xl:text-sm rounded-full border text-xs lg:text-xs xl:text-sm"
            >
              {(user.name || "G").charAt(0).toUpperCase()} ·{" "}
              {role.toUpperCase()}
            </a>
            <button
              onClick={logout}
              className="border border-black text-black px-2.5 lg:px-2 xl:px-3 py-1 lg:py-0.5 xl:py-1 rounded-full text-xs lg:text-xs xl:text-sm font-medium hover:bg-blue-50 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <a
            href="/login"
            className="border border-black text-black px-2.5 lg:px-2 xl:px-3 py-1 lg:py-0.5 xl:py-1 rounded-full text-xs lg:text-xs xl:text-sm font-medium hover:bg-blue-50 hover:text-black transition"
          >
            Sign in
          </a>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden p-1.5 sm:p-2 rounded-md text-black hover:bg-gray-100 transition-colors border border-gray-200 hover:border-gray-300"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 mobile-menu-backdrop z-40"
          onClick={closeMobileMenu}
          style={{ touchAction: "none" }}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen
            ? "translate-x-0 animate-slideInRight"
            : "translate-x-full"
        }`}
        style={{ touchAction: "pan-y" }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-2 sm:p-3 md:p-4 border-b bg-gradient-to-r from-gray-50 to-white">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              Menu
            </h2>
            <button
              onClick={closeMobileMenu}
              className="p-1.5 sm:p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 md:space-y-4 mobile-menu-scroll">
            {/* Main Navigation Items */}
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-gray-100 pb-2 sm:pb-3 md:pb-4"
              >
                <button
                  className="w-full text-left flex items-center justify-between py-1.5 sm:py-2 px-1.5 sm:px-2 font-medium text-gray-800 hover:text-black transition-colors rounded-md hover:bg-gray-50"
                  onClick={() =>
                    handleMenu(openMenu === item.label ? "" : item.label)
                  }
                >
                  <span className="text-xs sm:text-sm md:text-base">
                    {item.label}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openMenu === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openMenu === item.label && (
                  <div className="mt-2 pl-4 space-y-2 animate-fadeIn">
                    {item.type === "mega" ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <div className="font-semibold text-sm text-gray-700 mb-2">
                              Term Insurance
                            </div>
                            <ul className="space-y-1 text-sm">
                              {[
                                "Life Insurance",
                                "Term Insurance for NRI",
                                "Term Insurance Calculator",
                              ].map((text) => (
                                <li key={text} className="py-1">
                                  <a
                                    href="/insurance"
                                    className="text-gray-600 hover:text-black transition-colors block px-2 py-1 rounded hover:bg-blue-50"
                                  >
                                    {text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="font-semibold text-sm text-gray-700 mb-2">
                              Health Insurance
                            </div>
                            <ul className="space-y-1 text-sm">
                              {[
                                "Family Health Insurance",
                                "Senior Citizen Health Insurance",
                                "Health Insurance Calculator",
                              ].map((text) => (
                                <li key={text} className="py-1">
                                  <a
                                    href="/insurance"
                                    className="text-gray-600 hover:text-black transition-colors block px-2 py-1 rounded hover:bg-blue-50"
                                  >
                                    {text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">{item.content}</div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Additional Links */}
            <div className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4">
              <a
                href="/about"
                className="block py-2 font-medium text-gray-800 hover:text-black transition"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="/contact"
                className="block py-2 font-medium text-gray-800 hover:text-black transition"
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
              <a
                href="/insurance"
                className="block py-2 font-medium text-gray-800 hover:text-black transition"
                onClick={closeMobileMenu}
              >
                Insurance
              </a>
              <a
                href="/dashboard"
                className="block py-2 font-medium text-gray-800 hover:text-black transition"
                onClick={closeMobileMenu}
              >
                Dashboard
              </a>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 sm:pt-6 space-y-2 sm:space-y-3">
              <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 border border-black text-black px-3 sm:px-4 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-50 transition">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2 8.5C2 7.12 3.12 6 4.5 6h15A2.5 2.5 0 0122 8.5v7A2.5 2.5 0 0119.5 18h-15A2.5 2.5 0 012 15.5v-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 10h.01M12 14h.01M18 10h.01"
                  />
                </svg>
                Talk to Expert
              </button>

              {user && role ? (
                <div className="space-y-3">
                  <a
                    href={roleRoute}
                    className="block w-full text-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm bg-gray-50 hover:bg-gray-100 transition"
                    onClick={closeMobileMenu}
                  >
                    {(user.name || "G").charAt(0).toUpperCase()} ·{" "}
                    {role.toUpperCase()}
                  </a>
                  <button
                    onClick={() => {
                      logout();
                      closeMobileMenu();
                    }}
                    className="w-full border border-black text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-50 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <a
                  href="/login"
                  className="block w-full text-center border border-black text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-50 transition"
                  onClick={closeMobileMenu}
                >
                  Sign in
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
