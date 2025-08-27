"use client";
import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const MODELS: Record<string, string[]> = {
  Ather: ["450X", "450S"],
  Bajaj: ["Pulsar 150", "Pulsar NS200", "Avenger", "CT 100"],
  "Hero Honda": ["Splendor", "Passion", "CBZ"],
  "Hero Motocorp": ["HF Deluxe", "Glamour", "Xtreme"],
  Honda: ["Activa 6G", "Shine", "Unicorn"],
  KTM: ["Duke 200", "RC 390"],
  Lml: ["Adreno", "Beamer", "Star Euro 150", "Nv Spl"],
  Mahindra: ["Gusto", "Centuro"],
  Ola: ["S1 Air", "S1 Pro"],
  Piaggio: ["Vespa LX 125", "Vespa SXL"],
  "Royal Enfield": ["Classic 350", "Bullet 350", "Hunter 350"],
  Suzuki: ["Access 125", "Gixxer 155"],
  Tvs: ["Apache RTR 160", "Jupiter"],
  Yamaha: ["FZ-S V3", "R15 V4"],
};

export default function NewModelClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const brand = sp.get("brand") || "";
  const [q, setQ] = useState("");
  const models = useMemo(() => {
    return MODELS[brand as keyof typeof MODELS] || [];
  }, [brand]);
  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return models;
    return models.filter((m) => m.toLowerCase().includes(t));
  }, [q, models]);

  const select = (model: string) => {
    const bikeModel = `${brand} ${model}`.trim();
    const p = new URLSearchParams({ brand, bikeModel });
    router.push(`/bike-insurance/new/rto?${p.toString()}`);
  };

  return (
    <div className="mx-auto max-w-3xl bg-white border rounded-xl shadow-sm">
      <div className="flex">
        <div className="flex-1 px-6 py-4 text-gray-900">Manufacturer: <span className="font-medium">{brand || "-"}</span></div>
        <div className="flex-1 px-6 py-4 font-medium">Bike Model and Variant</div>
      </div>
      <div className="border-t p-6">
        <h1 className="text-2xl font-semibold text-center mb-2">What is your {brand} model?</h1>
        <p className="text-sm text-gray-600 text-center mb-6">Select your model and variant</p>
        <div className="max-w-md mx-auto mb-6">
          <div className="flex items-center gap-2 border rounded-md px-3 py-2">
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35" stroke="#64748b" strokeWidth="2" strokeLinecap="round"/><circle cx="11" cy="11" r="7" stroke="#64748b" strokeWidth="2" fill="none"/></svg>
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder={`Search for your ${brand} model`} className="w-full outline-none text-sm" />
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mb-3">POPULAR MODELS</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {list.map((m)=> (
            <button key={m} onClick={()=>select(m)} className="border rounded-md py-2 px-3 text-sm hover:bg-gray-50">
              {m}
            </button>
          ))}
          {list.length === 0 && (
            <div className="col-span-full text-center text-sm text-gray-500">No models found. Try another search.</div>
          )}
        </div>
      </div>
    </div>
  );
}
