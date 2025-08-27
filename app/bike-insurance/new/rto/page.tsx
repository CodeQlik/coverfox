"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const POPULAR_CITIES = ["New Delhi", "Mumbai", "Bangalore", "Pune", "Gurgoan", "Chennai", "Hyderabad", "Ahmedabad", "Kolkata", "Faridabad"];
const BANGALORE_RTOS = [
  "KA-01 Bangalore Kormangala",
  "KA-02 Bangalore Rajajinagar",
  "KA-03 Bangalore Indiranagar",
  "KA-04 Bangalore Yeshwanthpur",
  "KA-05 Bangalore Jayanagar",
  "KA-10 Bangalore Chamrajpeth",
  "KA-41 Bangalore Kengeri",
  "KA-43 Devanahalli Bangalore",
  "KA-50 Bangalore Yalahanka",
  "KA-51 Bangalore Electronic City",
  "KA-52 Nelamangala Bangalore",
  "KA-53 Bangalore Krishnarajpuram",
  "KA-60 RT Nagar Bangalore",
  "KA-61 Marathahalli Bangalore",
];

export default function NewBikeRtoPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const brand = sp.get("brand") || "";
  const bikeModel = sp.get("bikeModel") || "";
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return BANGALORE_RTOS;
    return BANGALORE_RTOS.filter((r) => r.toLowerCase().includes(t));
  }, [q]);

  const select = (rto: string) => {
    const params = new URLSearchParams({ bikeModel, rto, expiry: "Not Applicable (New Bike)" });
    router.push(`/bike-insurance/quotes?${params.toString()}`);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-8">
        <div className="mx-auto max-w-3xl bg-white border rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-semibold text-center mb-2">Where was your {bikeModel || brand || "bike"} registered?</h1>
            <p className="text-sm text-gray-600 text-center">Search for your vehicle registration RTO or pick from popular cities below.</p>
            <div className="max-w-md mx-auto mt-4">
              <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="#64748b" strokeWidth="2" fill="none"/></svg>
                <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search for RTO..." className="w-full outline-none text-sm" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="text-xs text-gray-500 text-center mb-3">POPULAR CITIES</div>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {POPULAR_CITIES.map((c) => (
                <button key={c} className={`px-3 py-1.5 rounded border text-sm ${c === "Bangalore" ? "bg-indigo-50 border-indigo-200 text-indigo-700" : ""}`}>{c}</button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-gray-50 border rounded-lg p-3">
              {list.map((r) => (
                <button key={r} onClick={()=>select(r)} className="text-left px-2 py-2 rounded bg-white hover:bg-gray-50 border text-sm">
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
