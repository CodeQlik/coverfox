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
  const bikeModel = sp.get("bikeModel") ?? "";
  const rto = sp.get("rto") ?? "";

  // Filters / options
  const [policyType, setPolicyType] = useState<"Comprehensive" | "Third Party" | "OD Only">("Comprehensive");
  const [idvLevel, setIdvLevel] = useState<"Lowest" | "Medium" | "Highest">("Lowest");
  const [duration, setDuration] = useState<"1" | "2" | "3">("1");
  const [sort, setSort] = useState<"recommended" | "premium_asc" | "premium_desc" | "idv_desc">("recommended");
  const [paCover, setPaCover] = useState<boolean>(false);
  const [moreCoversOpen, setMoreCoversOpen] = useState(false);
  const [covers, setCovers] = useState({ invoice: false, rsa: true, engine: false, consumable: false });
  const [openDetails, setOpenDetails] = useState<Record<string, boolean>>({});

  // Choose providers based on policy type (mock logic)
  const providers = useMemo(() => {
    if (policyType === "Third Party") {
      // fewer, cheaper options for TP
      return samplePlans.filter((p) => ["sbi", "acko", "hdfc"].includes(p.id));
    }
    if (policyType === "OD Only") {
      // limited set for OD only
      return samplePlans.filter((p) => ["acko", "tata", "hdfc"].includes(p.id));
    }
    return samplePlans;
  }, [policyType]);

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
    // Duration multiplier
    const durMul = duration === "2" ? 1.9 : duration === "3" ? 2.7 : 1.0;
    base = base * durMul;
    return Math.round(base);
  };

  // Adjust IDV based on selection
  const planIdv = (plan: Plan) => {
    let idv = plan.idv;
    if (idvLevel === "Medium") idv = Math.round(idv * 1.06);
    if (idvLevel === "Highest") idv = Math.round(idv * 1.12);
    if (policyType === "Third Party") return null; // TP doesn't show IDV
    return idv;
  };

  // Build visible plans list with sorting
  const visiblePlans = useMemo(() => {
    const enriched = providers.map((p) => ({ ...p, _price: planPrice(p), _idv: planIdv(p) }));
    const arr = [...enriched];
    if (sort === "premium_asc") arr.sort((a, b) => a._price - b._price);
    else if (sort === "premium_desc") arr.sort((a, b) => b._price - a._price);
    else if (sort === "idv_desc") arr.sort((a, b) => (b._idv ?? 0) - (a._idv ?? 0));
    // recommended keeps original order
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [providers, policyType, idvLevel, paCover, covers, duration, sort]);

  const buy = (plan: Plan) => {
    const total = planPrice(plan).toString();
    const params = new URLSearchParams({
      reg,
      bikeModel,
      rto,
      planId: plan.id,
      planName: plan.insurer,
      total,
      policyType,
      idvLevel,
      duration,
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
      {/* top alert */}
      <div className="mb-4">
        <div className="bg-orange-50 text-orange-700 border border-orange-200 rounded-lg px-4 py-2 text-sm">
          <span className="font-medium">Hurry up!</span> Your policy has already expired
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left sidebar */}
        <aside className="lg:col-span-4 xl:col-span-3 space-y-4">
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="text-xs text-gray-500 mb-1">YOUR BIKE DETAILS</div>
            <div className="text-sm font-medium text-gray-800">
              {reg ? reg : (bikeModel || "Bike") + (rto ? ` · ${rto}` : "")}
            </div>
            <div className="text-xs text-gray-500">2017 registered</div>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="font-medium text-sm mb-2">Addons</div>
            <label className="flex items-center gap-2 py-1 text-sm">
              <input type="checkbox" className="accent-orange-500" checked={paCover} onChange={(e) => setPaCover(e.target.checked)} />
              <span>Personal Accident Cover</span>
            </label>
            <label className="flex items-center gap-2 py-1 text-sm">
              <input type="checkbox" className="accent-orange-500" checked={covers.rsa} onChange={(e) => setCovers({ ...covers, rsa: e.target.checked })} />
              <span>Road Side Assistance (RSA)</span>
            </label>
            <div className="mt-2">
              <button
                className="text-blue-600 underline text-xs"
                onClick={() => setMoreCoversOpen((s) => !s)}
                type="button"
              >More covers</button>
              {moreCoversOpen && (
                <div className="mt-2 border-t pt-2 space-y-2">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-orange-500" checked={covers.invoice} onChange={(e) => setCovers({ ...covers, invoice: e.target.checked })} />
                    <span>Invoice Protect</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-orange-500" checked={covers.engine} onChange={(e) => setCovers({ ...covers, engine: e.target.checked })} />
                    <span>Engine Protect</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-orange-500" checked={covers.consumable} onChange={(e) => setCovers({ ...covers, consumable: e.target.checked })} />
                    <span>Consumables</span>
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="font-medium text-sm mb-2">Plan duration</div>
            <select className="w-full border rounded-md px-2 py-2 text-sm" value={duration} onChange={(e)=>setDuration(e.target.value as any)}>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
            </select>
          </div>

          <div className="bg-white rounded-xl border shadow-sm p-4">
            <div className="font-medium text-sm mb-2">Sort by</div>
            <div className="space-y-2 text-sm text-gray-700">
              <label className="flex items-center gap-2"><input type="radio" name="sort" checked={sort==="recommended"} onChange={()=>setSort("recommended")} /> Recommended</label>
              <label className="flex items-center gap-2"><input type="radio" name="sort" checked={sort==="premium_asc"} onChange={()=>setSort("premium_asc")} /> Premium (low to high)</label>
              <label className="flex items-center gap-2"><input type="radio" name="sort" checked={sort==="premium_desc"} onChange={()=>setSort("premium_desc")} /> Premium (high to low)</label>
              <label className="flex items-center gap-2"><input type="radio" name="sort" checked={sort==="idv_desc"} onChange={()=>setSort("idv_desc")} /> IDV (high to low)</label>
            </div>
          </div>
        </aside>

        {/* Right content */}
        <div className="lg:col-span-8 xl:col-span-9">
          <div className="mb-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold">{visiblePlans.length} {policyType.toLowerCase()} plans available</h3>
                <div className="text-xs text-gray-600">
                  {reg ? (
                    <>For registration <span className="font-medium">{reg}</span></>
                  ) : bikeModel || rto ? (
                    <>For <span className="font-medium">{bikeModel || "Bike"}</span>{rto ? <> · RTO <span className="font-medium">{rto}</span></> : null}</>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">Plan Type</span>
                <select
                  className="border rounded-md px-2 py-1"
                  value={policyType}
                  onChange={(e) => setPolicyType(e.target.value as any)}
                >
                  <option>Comprehensive</option>
                  <option>Third Party</option>
                  <option>OD Only</option>
                </select>
                <span className="ml-3 text-gray-600">IDV</span>
                <select className="border rounded-md px-2 py-1" value={idvLevel} onChange={(e) => setIdvLevel(e.target.value as any)}>
                  <option>Lowest</option>
                  <option>Medium</option>
                  <option>Highest</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visiblePlans.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border shadow-sm p-5 flex flex-col">
                <div className="h-10 flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-100 rounded" />
                  <div className="font-medium">{p.insurer}</div>
                </div>
                {planIdv(p) !== null ? (
                  <div className="text-sm text-gray-500">IDV: ₹ {Number(planIdv(p)).toLocaleString("en-IN")}</div>
                ) : (
                  <div className="text-sm text-gray-500">Third Party plan (No IDV)</div>
                )}
                <div className="mt-2 text-xs text-green-700">{covers.rsa ? "Road Side Assistance (RSA) included" : "Basic plan"}</div>

                {openDetails[p.id] && (
                  <div className="mt-3 text-sm text-gray-600 border-t pt-2">
                    <ul className="space-y-1">
                      <li>Invoice Cover: {covers.invoice ? "Included" : "Not Available"}</li>
                      <li>24x7 Roadside Assistance: {covers.rsa ? "Included" : "Not Available"}</li>
                      <li>Engine Protector: {covers.engine ? "Included" : "Not Available"}</li>
                      <li>Consumable: {covers.consumable ? "Included" : "Not Available"}</li>
                      <li>PA Cover: {paCover ? "Yes" : "No"}</li>
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-3 border-t flex items-end justify-between">
                  <div>
                    <div className="text-xs text-gray-600">Premium</div>
                    <div className="text-xl font-semibold text-gray-900">₹ {planPrice(p).toLocaleString("en-IN")}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="text-sm text-blue-600 underline"
                      onClick={() => setOpenDetails({ ...openDetails, [p.id]: !openDetails[p.id] })}
                    >
                      {openDetails[p.id] ? "Hide details" : "Plan details"}
                    </button>
                    <button
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                      onClick={() => buy(p)}
                    >
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
