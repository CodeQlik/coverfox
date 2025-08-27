"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BikeInsuranceForm() {
  const router = useRouter();
  const [reg, setReg] = useState("");
  const [expiry, setExpiry] = useState("Expired before May 1, 2025");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reg.trim()) return;
    const params = new URLSearchParams({ reg, expiry });
    router.push(`/bike-insurance/quotes?${params.toString()}`);
  };

  return (
    <section className="mx-auto max-w-4xl bg-white/90 shadow-lg rounded-xl p-6 border">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Upto 85% Off on Bike Insurance. Renew in 3 minutes
      </h2>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">YOUR BIKE NUMBER</label>
          <input
            value={reg}
            onChange={(e) => setReg(e.target.value.toUpperCase())}
            placeholder="RJ14SE0001"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">PREVIOUS POLICY EXPIRED?</label>
          <select
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>Expired before May 1, 2025</option>
            <option>Expires after May 1, 2025</option>
            <option>Not Applicable (New Bike)</option>
          </select>
        </div>
        <button
          type="submit"
          className="md:col-span-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-6 py-3"
        >
          VIEW QUOTES
        </button>
      </form>
      <div className="text-sm text-blue-600 mt-3 flex gap-6">
        <a className="underline" href="#">Not sure of your bike number?</a>
        <a className="underline" href="#">Bought a new bike?</a>
      </div>
      <div className="text-right text-sm mt-2">
        Already bought from Coverfox? <a className="text-blue-600 underline" href="#">Renew here</a>
      </div>
    </section>
  );
}
