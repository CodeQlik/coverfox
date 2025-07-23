import React from "react";
import Image from "next/image";
import logo from "../images/logo.avif";

const Partners = () => (
  <section className="w-full bg-[#F5F8FC] py-16 flex flex-col items-center">
    <div className="max-w-7xl w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] text-center mb-2">Our Partners</h2>
      <p className="text-gray-500 text-center mb-10">Leading insurers for your financial freedom</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {Array.from({ length: 42 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
            <Image src={logo} alt={`Partner Logo ${i+1}`} className="h-10 w-auto" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners; 