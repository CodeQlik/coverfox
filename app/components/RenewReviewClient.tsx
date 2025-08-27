"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function RenewReviewClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const mobile = sp.get("mobile") || "";
  const policy = sp.get("policy") || "";

  const proceed = () => {
    const p = new URLSearchParams({ mobile, policy, amount: "1299" });
    router.push(`/bike-insurance/renew/pay?${p.toString()}`);
  };

  return (
    <div className="mx-auto max-w-3xl bg-white border rounded-xl shadow-sm p-6 space-y-4">
      <div className="text-center mb-2">
        <h1 className="text-2xl font-semibold">Review your details</h1>
        <div className="text-xs text-gray-500 mt-1">Step 2 of 3</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <div className="text-sm text-gray-500">Login method</div>
          <div className="font-medium">{mobile ? `Mobile: ${mobile}` : policy ? `Policy: ${policy}` : '-'}</div>
        </div>
        <div className="border rounded-lg p-4">
          <div className="text-sm text-gray-500">Vehicle</div>
          <div className="font-medium">Royal Enfield Classic 500 (Demo)</div>
        </div>
        <div className="border rounded-lg p-4">
          <div className="text-sm text-gray-500">Previous Insurer</div>
          <div className="font-medium">Coverfox General (Demo)</div>
        </div>
        <div className="border rounded-lg p-4">
          <div className="text-sm text-gray-500">Premium</div>
          <div className="font-medium">₹ 1,299</div>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={proceed} className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md">Proceed to Pay</button>
      </div>
    </div>
  );
}
