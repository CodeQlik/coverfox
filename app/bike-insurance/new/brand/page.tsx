"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

const BRANDS = [
  "Ather",
  "Bajaj",
  "Hero Honda",
  "Hero Motocorp",
  "Honda",
  "KTM",
  "Lml",
  "Mahindra",
  "Ola",
  "Piaggio",
  "Royal Enfield",
  "Suzuki",
  "Tvs",
  "Yamaha",
];

export default function NewBikeBrandPage() {
  const router = useRouter();
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return BRANDS;
    return BRANDS.filter((b) => b.toLowerCase().includes(t));
  }, [q]);

  const select = (brand: string) => {
    const p = new URLSearchParams({ brand });
    router.push(`/bike-insurance/new/model?${p.toString()}`);
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-8">
        <div className="mx-auto max-w-3xl bg-white border rounded-xl shadow-sm">
          <div className="flex">
            <div className="flex-1 px-6 py-4 font-medium">Bike Manufacturer</div>
            <div className="flex-1 px-6 py-4 text-gray-500">Bike Model and Variant</div>
          </div>
          <div className="border-t p-6">
            <h1 className="text-2xl font-semibold text-center mb-2">What is your bike manufacturer?</h1>
            <p className="text-sm text-gray-600 text-center mb-6">Search for your bike manufacturer</p>
            <div className="max-w-md mx-auto mb-6">
              <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="#64748b" strokeWidth="2" fill="none"/></svg>
                <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search for your bike" className="w-full outline-none text-sm" />
              </div>
            </div>
            <div className="text-center text-xs text-gray-500 mb-3">POPULAR BIKES</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {list.map((b)=> (
                <button key={b} onClick={()=>select(b)} className="border rounded-md py-2 px-3 text-sm hover:bg-gray-50">
                  {b}
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
