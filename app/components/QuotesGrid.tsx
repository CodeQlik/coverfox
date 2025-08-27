"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

type Plan = {
  id: string;
  insurer: string;
  logo?: string;
  idv: number;
  price: number;
};

const samplePlans: Plan[] = [
  { id: "sbi", insurer: "SBI General", idv: 33600, price: 3195 },
  { id: "acko", insurer: "ACKO", idv: 42125, price: 3308 },
  { id: "iffco", insurer: "IFFCO-TOKIO", idv: 47600, price: 3542 },
  { id: "tata", insurer: "Tata AIG", idv: 44750, price: 3671 },
  { id: "hdfc", insurer: "HDFC ERGO", idv: 31824, price: 3795 },
];

export default function QuotesGrid() {
  const router = useRouter();
  const sp = useSearchParams();
  const reg = sp.get("reg") ?? "";

  // Filters / options
  const [policyType, setPolicyType] = useState<"Comprehensive" | "Third Party" | "OD Only">("Comprehensive");
  const [idvLevel, setIdvLevel] = useState<"Lowest" | "Medium" | "Highest">("Lowest");
  const [paCover, setPaCover] = useState<boolean>(false);
  const [moreCoversOpen, setMoreCoversOpen] = useState(false);
  const [covers, setCovers] = useState({ invoice: false, rsa: true, engine: false, consumable: false });
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  const planPrice = (plan: Plan) => {
    let base = plan.price;
    // Policy type modifier
    if (policyType === "Third Party") base = base * 0.7;
    if (policyType === "OD Only") base = base * 0.85;
    // IDV level modifier
    if (idvLevel === "Medium") base = base * 1.06;
    if (idvLevel === "Highest") base = base * 1.12;
    // PA cover fixed add-on
    if (paCover) base += 330;
    // More covers add-ons
    if (covers.invoice) base += 250;
    if (covers.rsa) base += 150;
    if (covers.engine) base += 400;
    if (covers.consumable) base += 180;
    return Math.round(base);
  };

  const buy = (plan: Plan) => {
    const total = planPrice(plan).toString();
    const params = new URLSearchParams({
      reg,
      planId: plan.id,
      planName: plan.insurer,
      total,
      policyType,
      idvLevel,
      paCover: paCover ? "1" : "0",
      c_invoice: covers.invoice ? "1" : "0",
      c_rsa: covers.rsa ? "1" : "0",
      c_engine: covers.engine ? "1" : "0",
      c_consumable: covers.consumable ? "1" : "0",
    });
    router.push(`/bike-insurance/buy?${params.toString()}`);
  };

  return (
    <section className="mx-auto max-w-6xl">
      <div className="relative flex flex-wrap gap-3 items-center text-sm text-gray-700 mb-4">
        <div className="px-3 py-2 bg-white rounded-md border shadow-sm flex items-center gap-2">
          <span className="font-medium">POLICY TYPE</span>
          <select
            className="ml-2 outline-none"
            value={policyType}
            onChange={(e) => setPolicyType(e.target.value as any)}
          >
            <option>Comprehensive</option>
            <option>Third Party</option>
            <option>OD Only</option>
          </select>
        </div>
        <div className="px-3 py-2 bg-white rounded-md border shadow-sm flex items-center gap-2">
          <span className="font-medium">COVER VALUE (IDV):</span>
          <select
            className="ml-2 outline-none"
            value={idvLevel}
            onChange={(e) => setIdvLevel(e.target.value as any)}
          >
            <option value="Lowest">Lowest (IDV from ₹29,487)</option>
            <option value="Medium">Medium (IDV from ₹35,000)</option>
            <option value="Highest">Highest (IDV from ₹47,000)</option>
          </select>
        </div>
        <label className="px-3 py-2 bg-white rounded-md border shadow-sm flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="accent-orange-500" checked={paCover} onChange={(e) => setPaCover(e.target.checked)} />
          <span>Personal Accident (PA) Cover</span>
        </label>
        <div className="px-3 py-2 bg-white rounded-md border shadow-sm relative">
          <button type="button" className="" onClick={() => setMoreCoversOpen((s) => !s)}>
            More Covers ▾
          </button>
          {moreCoversOpen && (
            <div className="absolute z-10 mt-2 w-64 right-0 bg-white border rounded-lg shadow-lg p-3">
              <label className="flex items-center gap-2 py-1">
                <input type="checkbox" className="accent-orange-500" checked={covers.invoice} onChange={(e) => setCovers({ ...covers, invoice: e.target.checked })} />
                <span>Invoice Cover</span>
              </label>
              <label className="flex items-center gap-2 py-1">
                <input type="checkbox" className="accent-orange-500" checked={covers.rsa} onChange={(e) => setCovers({ ...covers, rsa: e.target.checked })} />
                <span>24x7 Roadside Assistance</span>
              </label>
              <label className="flex items-center gap-2 py-1">
                <input type="checkbox" className="accent-orange-500" checked={covers.engine} onChange={(e) => setCovers({ ...covers, engine: e.target.checked })} />
                <span>Engine Protector</span>
              </label>
              <label className="flex items-center gap-2 py-1">
                <input type="checkbox" className="accent-orange-500" checked={covers.consumable} onChange={(e) => setCovers({ ...covers, consumable: e.target.checked })} />
                <span>Consumable</span>
              </label>
            </div>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-3">5 Plans Found</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePlans.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border shadow-sm p-5">
            <div className="h-10 flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-100 rounded" />
              <div className="font-medium">{p.insurer}</div>
            </div>
            <div className="text-sm text-gray-500">IDV: ₹ {p.idv.toLocaleString("en-IN")}</div>
            <div className="mt-2 text-sm text-gray-700">Basic Price: ₹{p.price.toLocaleString("en-IN")}</div>
            <div className="mt-1 text-base font-semibold text-gray-900">Total: ₹{planPrice(p).toLocaleString("en-IN")}</div>
            <div className="mt-4">
              <button
                onClick={() => buy(p)}
                className="w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold rounded-md px-4 py-2"
              >
                BUY NOW ₹{planPrice(p).toLocaleString("en-IN")}
              </button>
            </div>
            <button
              className="mt-2 text-sm text-blue-600 underline text-center w-full"
              onClick={() => setOpenDetails({ ...openDetails, [p.id]: !openDetails[p.id] })}
            >
              {openDetails[p.id] ? "Hide Details" : "Plan Details"}
            </button>
            {openDetails[p.id] && (
              <div className="mt-2 text-sm text-gray-600 border-t pt-2">
                <ul className="space-y-1">
                  <li>Invoice Cover: {covers.invoice ? "Included" : "Not Available"}</li>
                  <li>24x7 Roadside Assistance: {covers.rsa ? "Included" : "Not Available"}</li>
                  <li>Engine Protector: {covers.engine ? "Included" : "Not Available"}</li>
                  <li>Consumable: {covers.consumable ? "Included" : "Not Available"}</li>
                  <li>PA Cover: {paCover ? "Yes" : "No"}</li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
