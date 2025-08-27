"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function PurchaseForm() {
  const sp = useSearchParams();
  const reg = sp.get("reg") ?? "";
  const bikeModel = sp.get("bikeModel") ?? "";
  const rto = sp.get("rto") ?? "";
  const planId = sp.get("planId") ?? "";
  const total = sp.get("total") ?? "";
  const planName = sp.get("planName") ?? "";
  const policyType = sp.get("policyType") ?? "";
  const idvLevel = sp.get("idvLevel") ?? "";
  const paCover = sp.get("paCover") ?? "0";
  const c_invoice = sp.get("c_invoice") ?? "0";
  const c_rsa = sp.get("c_rsa") ?? "0";
  const c_engine = sp.get("c_engine") ?? "0";
  const c_consumable = sp.get("c_consumable") ?? "0";
  const router = useRouter();
  const [step, setStep] = useState<"owner" | "address">("owner");

  // Owner details
  const [ownerName, setOwnerName] = useState("WASIM QURESHI");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pan, setPan] = useState("");

  // Address
  const [addr1, setAddr1] = useState("");
  const [addr2, setAddr2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("address");
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      reg,
      bikeModel,
      rto,
      planId,
      planName,
      total,
      policyType,
      idvLevel,
      paCover,
      c_invoice,
      c_rsa,
      c_engine,
      c_consumable,
      ownerName,
      gender,
      dob,
      mobile,
      email,
      pan,
      addr1,
      addr2,
      city,
      state,
      pincode,
    });
    router.push(`/bike-insurance/checkout?${params.toString()}`);
  };

  return (
    <section className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: steps and forms */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white border rounded-xl shadow-sm p-4 flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">YOUR BIKE</div>
              <div className="font-medium">{reg || ((bikeModel || "Bike") + (rto ? ` · ${rto}` : ""))}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">SELECTED PLAN</div>
              <div className="font-medium">{planName || planId || "-"}</div>
            </div>
          </div>

          <div className="flex gap-6 mb-1 text-sm">
            <div className={`flex items-center gap-2 ${step === "owner" ? "text-orange-600 font-semibold" : "text-gray-600"}`}>
              <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${step === "owner" ? "bg-orange-500 text-white border-orange-500" : "bg-white"}`}>1</span>
              Bike Owner Details
            </div>
            <div className={`flex items-center gap-2 ${step === "address" ? "text-orange-600 font-semibold" : "text-gray-600"}`}>
              <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${step === "address" ? "bg-orange-500 text-white border-orange-500" : "bg-white"}`}>2</span>
              Communication Address
            </div>
          </div>

          {step === "owner" ? (
        <form onSubmit={next} className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Bike registered in company name?</label>
            <div className="mt-2 flex gap-6 text-sm">
              <label className="flex items-center gap-2"><input type="radio" name="company" value="yes" /> Yes</label>
              <label className="flex items-center gap-2"><input type="radio" name="company" value="no" defaultChecked /> No</label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Owner Name (as per RC)</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="WASIM QURESHI" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="mt-2 flex gap-6 text-sm">
              <label className="flex items-center gap-2"><input type="radio" name="gender" value="Male" checked={gender==="Male"} onChange={()=>setGender("Male")} /> Male</label>
              <label className="flex items-center gap-2"><input type="radio" name="gender" value="Female" checked={gender==="Female"} onChange={()=>setGender("Female")} /> Female</label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input type="date" className="w-full border rounded-md px-3 py-2" value={dob} onChange={(e)=>setDob(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input required className="w-full border rounded-md px-3 py-2" placeholder="10-digit mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            <div className="text-xs text-red-500 mt-1">Oh, we can&apos;t proceed without this information. Do your bit?</div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" className="w-full border rounded-md px-3 py-2" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PAN Number</label>
            <input className="w-full border rounded-md px-3 py-2" value={pan} onChange={(e)=>setPan(e.target.value)} />
            <div className="text-xs text-gray-500 mt-1">KYC is mandatory as per recent IRDAI guidelines</div>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-6 py-3">
              NEXT: Communication Address
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={submit} className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2 text-gray-700">Provide your communication address, then proceed to pay.</div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
            <input required className="w-full border rounded-md px-3 py-2" value={addr1} onChange={(e)=>setAddr1(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
            <input className="w-full border rounded-md px-3 py-2" value={addr2} onChange={(e)=>setAddr2(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input required className="w-full border rounded-md px-3 py-2" value={city} onChange={(e)=>setCity(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input required className="w-full border rounded-md px-3 py-2" value={state} onChange={(e)=>setState(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">PIN Code</label>
            <input required className="w-full border rounded-md px-3 py-2" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
          </div>
          <div className="md:col-span-2 flex gap-3">
            <button type="button" onClick={() => setStep("owner")} className="border rounded-md px-6 py-3">Back</button>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3">Pay securely</button>
          </div>
        </form>
      )}
        </div>

        {/* Right: sticky order summary */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-6">
            <div className="bg-white border rounded-xl shadow-sm p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold">{planName || planId || "Selected plan"}</div>
                  <div className="text-xs text-gray-600">{policyType || "Comprehensive"}{idvLevel ? ` · IDV ${idvLevel}` : ""}</div>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded" />
              </div>
              <div className="mt-3 text-xs text-gray-600">
                {reg ? (
                  <>Bike: <span className="font-medium text-gray-800">{reg}</span></>
                ) : (
                  <>Bike: <span className="font-medium text-gray-800">{bikeModel || "-"}</span>{rto ? <> · <span className="font-medium text-gray-800">{rto}</span></> : null}</>
                )}
              </div>

              {/* Premium details */}
              <div className="mt-4 border-t pt-4 space-y-2 text-sm">
                {(() => {
                  const totalNum = Number(total || 0);
                  const gst = Math.round(totalNum * 0.18);
                  const net = Math.max(totalNum - gst, 0);
                  return (
                    <>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Net premium</span><span>₹ {net.toLocaleString("en-IN")}</span></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">GST</span><span>₹ {gst.toLocaleString("en-IN")}</span></div>
                      <div className="flex items-center justify-between font-semibold text-gray-900 border-t pt-2"><span>Final premium</span><span>₹ {totalNum.toLocaleString("en-IN")}</span></div>
                    </>
                  );
                })()}
              </div>

              <button
                onClick={() => {
                  // mimic submit of current step if on owner step, else submit form
                  if (step === "owner") setStep("address");
                }}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3"
              >
                Pay securely
              </button>

              <div className="mt-2 text-[11px] text-gray-500">
                By clicking on &apos;Pay securely&apos;, I agree to the terms &amp; conditions
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
