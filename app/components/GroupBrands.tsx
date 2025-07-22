"use client";
import React from "react";
import Image from "next/image";
import logo from "../images/logo.avif";

const brands = Array.from({ length: 7 }).map((_, i) => ({
  logo: <Image src={logo} alt="Group Brand Logo"  className="w-auto" />,
}));

const GroupBrands = () => (
  <section className="w-full bg-white py-10 flex flex-col items-center">
    <div className="max-w-7xl w-full px-4">
      <h2 className="text-2xl font-bold text-[#23235F] text-left mb-6">Group Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
        {brands.map((b, i) => (
          <div key={i} className="flex items-center justify-center">
            {b.logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GroupBrands; 