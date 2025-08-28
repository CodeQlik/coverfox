"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CheckoutClient() {
  const sp = useSearchParams();
  const reg = sp.get("reg") ?? "";
  const bikeModel = sp.get("bikeModel") ?? "";
  const rto = sp.get("rto") ?? "";
  const planId = sp.get("planId") ?? "";
  const planName = sp.get("planName") ?? "";
  const total = Number(sp.get("total") ?? 0);
  const policyType = sp.get("policyType") ?? "";
  const idvLevel = sp.get("idvLevel") ?? "";
  const paCover = sp.get("paCover") === "1";
  const c_invoice = sp.get("c_invoice") === "1";
  const c_rsa = sp.get("c_rsa") === "1";
  const c_engine = sp.get("c_engine") === "1";
  const c_consumable = sp.get("c_consumable") === "1";

  // Owner & Address
  const ownerName = sp.get("ownerName") ?? "";
  const gender = sp.get("gender") ?? "";
  const dob = sp.get("dob") ?? "";
  const mobile = sp.get("mobile") ?? "";
  const email = sp.get("email") ?? "";
  const pan = sp.get("pan") ?? "";
  const addr1 = sp.get("addr1") ?? "";
  const addr2 = sp.get("addr2") ?? "";
  const city = sp.get("city") ?? "";
  const state = sp.get("state") ?? "";
  const pincode = sp.get("pincode") ?? "";

  const gst = Math.round(total * 0.18);
  const premium = total;
  const grandTotal = premium + gst;

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [method, setMethod] = useState("UPI");
  const [status, setStatus] = useState<"idle" | "processing" | "success">("idle");

  const pay = () => {
    if (!agree1 || !agree2) return;
    setStatus("processing");
    setTimeout(() => setStatus("success"), 1600);
  };

  const downloadPdf = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    let y = 14;
    const addLine = (label: string, value: string) => {
      doc.text(`${label}: ${value}`, 14, y);
      y += 8;
    };
    doc.setFontSize(16);
    doc.text("Coverfox - Bike Insurance Receipt", 14, y);
    y += 10;
    doc.setFontSize(12);
    addLine("Date", new Date().toLocaleString());
    if (reg) {
      addLine("Registration No.", reg);
    } else if (bikeModel || rto) {
      if (bikeModel) addLine("Bike Model", bikeModel);
      if (rto) addLine("RTO", rto);
    } else {
      addLine("Vehicle", "-");
    }
    addLine("Plan", `${planName || planId || "-"}`);
    if (policyType) addLine("Policy Type", policyType);
    if (idvLevel) addLine("IDV", idvLevel);
    const coverParts: string[] = [];
    if (paCover) coverParts.push("PA Cover");
    if (c_invoice) coverParts.push("Invoice Protect");
    if (c_rsa) coverParts.push("Roadside Assist");
    if (c_engine) coverParts.push("Engine Protect");
    if (c_consumable) coverParts.push("Consumables");
    if (coverParts.length) addLine("Add-ons", coverParts.join(", "));
    addLine("KYC Status", "Pending Verification");
    addLine("Payment Method", method);
    addLine("Payment Status", "Success (Dummy)");
    y += 2;
    doc.line(14, y, 196, y);
    y += 8;
    addLine("Premium", `₹${premium.toLocaleString("en-IN")}`);
    addLine("GST (18%)", `₹${gst.toLocaleString("en-IN")}`);
    addLine("Total", `₹${grandTotal.toLocaleString("en-IN")}`);
    y += 10;
    doc.setFontSize(13);
    doc.text("Owner & Communication Details", 14, y);
    y += 8;
    doc.setFontSize(12);
    if (ownerName) addLine("Owner", ownerName);
    if (gender) addLine("Gender", gender);
    if (dob) addLine("DOB", dob);
    if (mobile) addLine("Mobile", mobile);
    if (email) addLine("Email", email);
    if (pan) addLine("PAN", pan);
    const addr = [addr1, addr2].filter(Boolean).join(", ");
    if (addr) addLine("Address", addr);
    const loc = [city, state, pincode].filter(Boolean).join(", ");
    if (loc) addLine("Location", loc);
    y += 6;
    doc.setFontSize(10);
    doc.text(
      "Note: This is a demo receipt generated for testing. No actual payment or policy issuance has occurred.",
      14,
      y,
      { maxWidth: 182 }
    );
    doc.save(`Coverfox-Bike-Insurance-${reg || "policy"}.pdf`);
  };

  const downloadReceipt = async () => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    let y = 16;
    doc.setFontSize(16);
    doc.text("Payment Receipt - Coverfox", 14, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Receipt No: RCPT-${Math.random().toString(36).slice(2,8).toUpperCase()}`, 14, y); y += 8;
    doc.text(`Date: ${new Date().toLocaleString()}`, 14, y); y += 8;
    const veh = reg || [bikeModel, rto].filter(Boolean).join(" · ") || "-";
    doc.text(`Vehicle: ${veh}`, 14, y); y += 8;
    doc.text(`Plan: ${planName || planId || '-'}`, 14, y); y += 8;
    if (policyType) { doc.text(`Policy Type: ${policyType}`, 14, y); y += 8; }
    if (idvLevel) { doc.text(`IDV: ${idvLevel}`, 14, y); y += 8; }
    y += 2; doc.line(14, y, 196, y); y += 8;
    doc.text(`Premium: ₹${premium.toLocaleString('en-IN')}`, 14, y); y += 8;
    doc.text(`GST (18%): ₹${gst.toLocaleString('en-IN')}`, 14, y); y += 8;
    doc.text(`Total Paid: ₹${grandTotal.toLocaleString('en-IN')}`, 14, y); y += 12;
    doc.setFontSize(11);
    if (ownerName) { doc.text(`Payer: ${ownerName}`, 14, y); y += 8; }
    if (email) { doc.text(`Email: ${email}`, 14, y); y += 8; }
    if (mobile) { doc.text(`Mobile: ${mobile}`, 14, y); y += 8; }
    y += 6;
    doc.setFontSize(10);
    doc.text("Note: This is a dummy receipt for demo purposes only.", 14, y);
    doc.save(`Coverfox-Receipt-${reg || 'bike'}.pdf`);
  };

  return (
    <main className="px-4 md:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 flex items-start justify-between">
            <div>
              <div className="text-[11px] tracking-wide text-gray-500">REGISTRATION NUMBER</div>
              <div className="font-semibold text-gray-900">{reg || (bikeModel || rto ? `${bikeModel || "Bike"}${rto ? ` · ${rto}` : ""}` : "-")}</div>
              <div className="text-xs text-gray-600">{reg ? "BIKE: Royal Enfield Classic 500 (499 CC)" : "Model/RTO as provided"}</div>
              {(planName || policyType || idvLevel) && (
                <div className="text-xs text-gray-600 mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {(planName || planId) && <span>Plan: <span className="font-medium text-gray-800">{planName || planId}</span></span>}
                  {policyType && <span>Type: <span className="font-medium text-gray-800">{policyType}</span></span>}
                  {idvLevel && <span>IDV: <span className="font-medium text-gray-800">{idvLevel}</span></span>}
                </div>
              )}
            </div>
            <div className="text-right">
              <div className="text-[11px] tracking-wide text-gray-500">PREMIUM</div>
              <div className="text-2xl font-semibold text-gray-900">₹{premium.toLocaleString("en-IN")}</div>
              <div className="text-xs text-gray-500">GST (18%) ₹{gst.toLocaleString("en-IN")}</div>
              <button type="button" className="text-xs text-blue-700 underline mt-1">Premium Breakup</button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-3">BIKE OWNER DETAILS</div>
                <ul className="text-sm text-gray-700 space-y-1 leading-6">
                  <li>{ownerName || "Owner Name"}{gender ? `, ${gender}` : ""}</li>
                  {dob && <li>DOB: {dob}</li>}
                  {mobile && <li>{mobile}</li>}
                  {email && <li>{email}</li>}
                  {pan && <li>{pan}</li>}
                </ul>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-3">COMMUNICATION ADDRESS</div>
                <ul className="text-sm text-gray-700 space-y-1 leading-6">
                  {addr1 && <li>{addr1}</li>}
                  {addr2 && <li>{addr2}</li>}
                  {(city || state || pincode) && <li>{[city, state, pincode].filter(Boolean).join(", ")}</li>}
                </ul>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-orange-500" checked={agree1} onChange={(e) => setAgree1(e.target.checked)} />
                <span>
                  I declare that the information provided above is true and accept that if it is found to be false, it may impact claims.
                </span>
              </label>
              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 accent-orange-500" checked={agree2} onChange={(e) => setAgree2(e.target.checked)} />
                <span>
                  I understand that the KYC details will be verified as per IRDAI guidelines and details may be shared with the Insurer for policy issuance.
                </span>
              </label>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
            <div className="text-sm font-semibold text-gray-900 mb-3">Payment Method</div>
            <div className="flex flex-wrap gap-3 text-sm">
              {["UPI", "Net Banking", "Card", "Wallet"].map((m) => (
                <label key={m} className={`px-3 py-2 border rounded-md cursor-pointer inline-flex items-center ${method === m ? "border-orange-500 text-orange-600" : ""}`}>
                  <input type="radio" name="method" value={m} className="mr-2" checked={method === m} onChange={() => setMethod(m)} />
                  {m}
                </label>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 justify-end">
              <button
                disabled={!agree1 || !agree2 || status === "processing" || status === "success"}
                onClick={pay}
                className={`inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-white ${status === "success" ? "bg-green-600" : "bg-orange-500 hover:bg-orange-600"} disabled:opacity-60`}
              >
                {status === "processing" ? "Processing..." : status === "success" ? "Paid" : `Pay ₹${grandTotal.toLocaleString("en-IN")}`}
              </button>
              {status === "success" && (
                <>
                  <button onClick={downloadPdf} className="border rounded-md px-4 py-3 inline-flex items-center">
                  Download Receipt
                  </button>
                </>
              )}
            </div>
            {status === "processing" && <div className="text-sm text-gray-500 mt-2">Validating KYC details...</div>}
            {status === "success" && (
              <div className="text-sm text-green-700 mt-2">
                Payment successful. We will email your policy to you. You can also download your receipt now.
              </div>
            )}
          </div>
        </div>

        <aside className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 h-max lg:sticky lg:top-6">
          <div className="text-sm font-semibold text-gray-800 mb-2">Order Summary</div>
          <div className="flex justify-between text-sm py-1"><span>Plan</span><span className="font-medium">{planName || planId || "-"}</span></div>
          {policyType && <div className="flex justify-between text-sm py-1"><span>Type</span><span>{policyType}</span></div>}
          {idvLevel && <div className="flex justify-between text-sm py-1"><span>IDV</span><span>{idvLevel}</span></div>}
          {(paCover || c_invoice || c_rsa || c_engine || c_consumable) && (
            <div className="text-xs text-gray-600 py-1">
              Add-ons: {[paCover && "PA", c_invoice && "Invoice", c_rsa && "RSA", c_engine && "Engine", c_consumable && "Consumables"].filter(Boolean).join(", ")}
            </div>
          )}
          <div className="flex justify-between text-sm py-1"><span>Premium</span><span>₹{premium.toLocaleString("en-IN")}</span></div>
          <div className="flex justify-between text-sm py-1"><span>GST (18%)</span><span>₹{gst.toLocaleString("en-IN")}</span></div>
          <div className="border-t my-2"></div>
          <div className="flex justify-between font-semibold py-1"><span>Total</span><span>₹{grandTotal.toLocaleString("en-IN")}</span></div>
        </aside>
      </div>
    </main>
  );
}
