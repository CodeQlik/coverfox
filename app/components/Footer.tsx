import React from "react";
import Image from "next/image";
import logo from "../images/logo.avif";
const paymentMethods = [
  { src: logo, alt: "Coverfox Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png", alt: "Visa" },
  { src: logo, alt: "Coverfox Logo" },
  { src: logo, alt: "Coverfox Logo" },
  { src: logo, alt: "Coverfox Logo" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png", alt: "Mastercard" },
];
const socialIcons = [
  { href: "#", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg", alt: "Facebook" },
  { href: "#", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg", alt: "Twitter" },
  { href: "#", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg", alt: "LinkedIn" },
  { href: "#", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg", alt: "YouTube" },
];

const Footer = () => (
  <footer className="w-full bg-[#0A1833] text-white pt-12 pb-4">
    <div className="max-w-7xl mx-auto px-4">
      {/* Top Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#22325C]">
        {/* Insurance */}
        <div>
          <h3 className="font-bold mb-2 text-base">Insurance</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/insurance" className="hover:underline"><span className="mr-2">＋</span>General Insurance</a></li>
            <li><a href="/insurance" className="hover:underline"><span className="mr-2">＋</span>Life Insurance</a></li>
            <li><a href="/insurance" className="hover:underline"><span className="mr-2">＋</span>Term Insurance</a></li>
            <li><a href="/insurance" className="hover:underline"><span className="mr-2">＋</span>Investment</a></li>
            <li><a href="/insurance" className="hover:underline"><span className="mr-2">＋</span>Health Insurance</a></li>
            <li><a href="/insurance" className="hover:underline"><span className="mr-2">＋</span>Other Insurance</a></li>
          </ul>
        </div>
        {/* Calculators */}
        <div>
          <h3 className="font-bold mb-2 text-base">Calculators</h3>
          <ul className="space-y-1 text-sm">
            <li><span className="mr-2">＋</span>Investment Calculators</li>
            <li><span className="mr-2">＋</span>Fitness Calculators</li>
            <li>Income Tax Calculator</li>
            <li>Term Insurance Calculator</li>
            <li>HLV Calculator</li>
            <li>Life Insurance Calculator</li>
            <li>Health Insurance Calculator</li>
            <li>Travel Insurance Calculator</li>
            <li>Car Insurance Calculator</li>
            <li>Bike Insurance Calculator</li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="font-bold mb-2 text-base">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li>Articles</li>
            <li>Customer reviews</li>
            <li>Insurance companies</li>
            <li>Newsroom</li>
            <li>Awards</li>
            <li>PB Life</li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h3 className="font-bold mb-2 text-base">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li>Sitemap</li>
            <li>Careers</li>
            <li>Legal & Admin policies</li>
            <li>ISNP</li>
            <li><a href="/contact" className="hover:underline">Contact us</a></li>
            <li>Verify your advisor</li>
            <li>Investor Relations</li>
          </ul>
        </div>
      </div>
      {/* Payment, Security, Social */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-b border-[#22325C]">
        {/* Payment Methods */}
        <div className="flex flex-col items-center md:items-start">
          <span className="font-semibold text-sm mb-2">Payment Methods</span>
          <div className="flex gap-2 flex-wrap">
            {paymentMethods.map((pm, i) => (
              <Image key={i} src={pm.src} alt={`Payment Method: ${pm.alt}${pm.alt === 'Coverfox Logo' ? ' ' + (i+1) : ''}`} width={40} height={40} className="h-8 w-auto bg-white rounded px-1 py-0.5" />
            ))}
          </div>
        </div>
        {/* Secured With */}
        <div className="flex flex-col items-center">
          <span className="font-semibold text-sm mb-2">Secured With</span>
          <Image src={logo} alt="Secured With: Coverfox Logo" width={40} height={40} className="h-8 w-auto bg-white rounded px-2 py-1" />
        </div>
        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <span className="font-semibold text-sm mb-2">Follow us on</span>
          <div className="flex gap-3">
            {socialIcons.map((icon, i) => (
              <a key={i} href={icon.href} target="_blank" rel="noopener noreferrer" className="bg-[#22325C] rounded p-2 hover:bg-[#1a2747] transition">
                <img src={icon.src} alt={`Social Icon: ${icon.alt}`} className="h-5 w-5 invert" />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Legal/Disclaimer */}
      <div className="text-xs text-[#B0BEDC] mt-6 space-y-2">
        <div>CoverFox Insurance Brokers Private Limited CIN: U74999HR2014PTC053454 Registered Office - Plot No.119, Sector - 44, Gurugram - 122001, Haryana Tel no.: 0124-4218302 Email ID: enquiry@CoverFox.com</div>
        <div>CoverFox is registered as a Composite Broker | Registration No. 742, Registration Code No. IRDA/ DB 797/ 19, Valid till 09/06/2027, License category- Composite Broker</div>
        <div>Visitors are hereby informed that their information submitted on the website may be shared with insurers. Product information is authentic and solely based on the information received from the insurers.</div>
        <div className="font-bold text-white">BEWARE OF SPURIOUS PHONE CALLS AND FICTITIOUS / FRAUDULENT OFFERS</div>
        <div>IRDAI or its officials do not involve in activities like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint.</div>
      </div>
      {/* Copyright */}
      <div className="text-center text-xs text-[#B0BEDC] mt-6">
        © Copyright 2008-{new Date().getFullYear()} CoverFox.com. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 