"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function RenewPayClient() {
  const sp = useSearchParams();
  const router = useRouter();
  const mobile = sp.get("mobile") || "";
  const policy = sp.get("policy") || "";
  const amount = sp.get("amount") || "1299";
  const [paid, setPaid] = useState(false);

  const pay = () => setPaid(true);

  const download = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    let y = 16;
    doc.setFontSize(16);
    doc.text("Coverfox - Renewal Receipt", 14, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleString()}`, 14, y); y += 8;
    if (mobile) { doc.text(`Mobile: ${mobile}`, 14, y); y += 8; }
    if (policy) { doc.text(`Policy: ${policy}`, 14, y); y += 8; }
    doc.text(`Amount Paid: ₹ ${amount}`, 14, y); y += 12;
    doc.setFontSize(10);
    doc.text("Note: Demo receipt for testing only.", 14, y);
    doc.save(`Coverfox-Renewal-${policy || mobile || 'receipt'}.pdf`);
  };

  return (
    <div className="mx-auto max-w-3xl bg-white border rounded-xl shadow-sm p-6">
      {!paid ? (
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Pay securely</h1>
            <div className="text-xs text-gray-500 mt-1">Step 3 of 3</div>
          </div>
          <div className="border rounded-lg p-4 flex items-center justify-between">
            <div className="text-sm text-gray-600">Amount payable</div>
            <div className="text-xl font-semibold">₹ {amount}</div>
          </div>
          <div className="flex justify-end">
            <button onClick={pay} className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md">Pay Now</button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <div className="text-3xl">✅</div>
          <h2 className="text-2xl font-semibold">Payment successful</h2>
          <p className="text-sm text-gray-600">Your renewal is complete. You can download the receipt now.</p>
          <div className="flex gap-3 justify-center">
            <button onClick={download} className="border rounded-md px-4 py-2">Download Receipt</button>
            <button onClick={() => router.push("/")} className="border rounded-md px-4 py-2">Go to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}
