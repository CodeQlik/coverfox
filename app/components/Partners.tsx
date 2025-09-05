import React from "react";
import Image, { StaticImageData } from "next/image";

// Import partner logos from the repository's images folder. Using static imports
// ensures Next/Image can optimize and resolve the assets correctly.
import tataAig from "../images/insurancer/tata-aig.png";
import sbi from "../images/insurancer/sbi.png";
import hdfcErgo from "../images/insurancer/hdfc-ergo.png";
import goDigit from "../images/insurancer/go-digit.png";
import acko from "../images/insurancer/acko.png";
import one from "../images/insurancer/1.webp";
import two from "../images/insurancer/2.webp";
// import three from "../images/insurancer/3.png";

const logos: Array<string | StaticImageData> = [
  tataAig,
  sbi,
  hdfcErgo,
  goDigit,
  acko,
  one,
  two,
  // three,
];

const Partners: React.FC = () => (
  <section className="w-full bg-[#F5F8FC] py-16 flex flex-col items-center">
    <div className="max-w-7xl w-full px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#23235F] text-center mb-2">Our Partners</h2>
      <p className="text-gray-500 text-center mb-10">Leading insurers for your financial freedom</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
        {logos.map((src, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
            <Image src={src} alt={`Partner Logo ${i + 1}`} width={140} height={48} className="mx-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;