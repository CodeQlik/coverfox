"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function RenewLoginClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const prePolicy = sp.get("policy") || "";
  const [mobile, setMobile] = useState("");
  const [policy, setPolicy] = useState(prePolicy);

  const sendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) return alert("Enter valid 10-digit mobile number");
    const p = new URLSearchParams({ mobile });
    router.push(`/bike-insurance/renew/review?${p.toString()}`);
  };

  const usePolicy = () => {
    if (!policy.trim()) return alert("Enter policy number");
    const p = new URLSearchParams({ policy });
    router.push(`/bike-insurance/renew/review?${p.toString()}`);
  };

  return (
    <div className="mx-auto max-w-3xl bg-white border rounded-xl shadow-sm p-6">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold">Instant Renewal</h1>
        <p className="text-sm text-gray-600">Renew the policy bought at Coverfox last year</p>
        <div className="flex items-center justify-center gap-6 text-xs text-gray-500 mt-3">
          <div className="flex items-center gap-2"><span className="font-medium">1</span> LOGIN</div>
          <div className="opacity-60">———</div>
          <div className="flex items-center gap-2"><span className="font-medium">2</span> REVIEW</div>
          <div className="opacity-60">———</div>
          <div className="flex items-center gap-2"><span className="font-medium">3</span> PAY</div>
        </div>
      </div>

      <div className="max-w-xl mx-auto border rounded-lg p-5">
        <div className="text-center text-lg font-medium mb-4">Login with mobile number</div>
        <div className="flex gap-2 mb-4">
          <input value={mobile} onChange={(e)=>setMobile(e.target.value.replace(/[^0-9]/g, '').slice(0,10))} placeholder="Enter your mobile number" className="flex-1 border rounded-md px-3 py-2" />
          <button onClick={sendOtp} className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 rounded-md">Send OTP</button>
        </div>
        <div className="text-center text-xs text-gray-500">Enter the number you used to buy this policy at Coverfox</div>

        <div className="my-5 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <div className="text-xs text-gray-500">OR</div>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="text-center">
          <div className="flex gap-2 justify-center">
            <input value={policy} onChange={(e)=>setPolicy(e.target.value.toUpperCase())} placeholder="Enter policy number" className="border rounded-md px-3 py-2 w-64" />
            <button onClick={usePolicy} className="border rounded-md px-4 py-2 font-medium">RENEW WITH POLICY NUMBER</button>
          </div>
          <div className="text-xs text-blue-600 mt-4"><a href="#">Set a Call back</a></div>
        </div>
      </div>
    </div>
  );
}
