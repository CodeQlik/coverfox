"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BikeInsuranceForm({ fullWidth = false }: { fullWidth?: boolean }) {
  const router = useRouter();
  const [mode, setMode] = useState<"reg" | "noReg">("reg");
  const [reg, setReg] = useState("");
  const [expiry, setExpiry] = useState("Expired before May 1, 2025");
  // fields for the "I don't know my bike number" path
  const [bikeModel, setBikeModel] = useState("");
  const [rto, setRto] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "reg") {
      if (!reg.trim()) return;
      const params = new URLSearchParams({ reg, expiry });
      router.push(`/bike-insurance/quotes?${params.toString()}`);
      return;
    }
    // noReg mode
    if (!bikeModel.trim() || !rto.trim()) return;
    const params = new URLSearchParams({ bikeModel, rto, expiry });
    router.push(`/bike-insurance/quotes?${params.toString()}`);
  };

  return (
    <section className={`mx-auto ${fullWidth ? "w-full max-w-7xl" : "max-w-4xl"} bg-white/90 shadow-lg rounded-xl p-6 border`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upto 85% Off on Bike Insurance. Renew in 3 minutes</h2>

      {mode === "reg" ? (
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
          <button type="submit" className="md:col-span-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-6 py-3">
            VIEW QUOTES
          </button>
        </form>
      ) : (
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold text-gray-500 mb-1">WHICH BIKE DO YOU RIDE?</label>
            <input
              value={bikeModel}
              onChange={(e) => setBikeModel(e.target.value)}
              placeholder="e.g. Bajaj Pulsar 150, Royal Enfield Classic"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold text-gray-500 mb-1">BIKE REGISTRATION RTO</label>
            <input
              value={rto}
              onChange={(e) => setRto(e.target.value.toUpperCase())}
              placeholder="e.g. RJ14"
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
          <button type="submit" className="md:col-span-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-6 py-3">
            VIEW QUOTES
          </button>
        </form>
      )}

      <div className="text-sm text-blue-600 mt-3 flex flex-wrap gap-6">
        {mode === "reg" ? (
          <button type="button" onClick={() => setMode("noReg")} className="underline text-blue-600">Wait. I don&apos;t know my bike number.</button>
        ) : (
          <button type="button" onClick={() => setMode("reg")} className="underline text-blue-600">I know my bike number.</button>
        )}
        <button
          type="button"
          onClick={() => {
            // Start the new-bike guided flow: brand -> model -> rto -> quotes
            router.push("/bike-insurance/new/brand");
          }}
          className="underline text-blue-600"
        >
          Bought a new bike?
        </button>
      </div>
      <div className="text-right text-sm mt-2">
        Already bought from Coverfox? <a className="text-blue-600 underline" href="/bike-insurance/renew">Renew here</a>
      </div>
    </section>
  );
}
