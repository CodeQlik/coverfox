"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function KycContent() {
  const sp = useSearchParams();
  const router = useRouter();

  const baseParams = useMemo(() => {
    const keys = [
      "reg", "bikeModel", "rto", "planId", "planName", "total", "policyType", "idvLevel",
      "paCover", "c_invoice", "c_rsa", "c_engine", "c_consumable",
      "ownerName", "gender", "dob", "mobile", "email", "pan",
      "nomineeName", "nomineeAge", "nomineeRelation",
      "addr1", "addr2", "city", "state", "pincode",
      "isRenewal", "regDate", "engineNo", "chassisNo", "onLoan", "loanProvider",
      "prevInsurer", "prevPolicyNo", "prevExpiry", "claimedLY", "ncb"
    ];
    const p = new URLSearchParams();
    keys.forEach((k) => {
      const v = sp.get(k);
      if (v != null) p.set(k, v);
    });
    return p;
  }, [sp]);

  const [provider, setProvider] = useState<string>("Aadhaar eKYC (OTP)");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string>("");

  const completeKyc = () => {
    setError("");
    if (!provider) {
      setError("Please select a KYC provider");
      return;
    }
    if (!consent) {
      setError("Please provide consent to proceed with KYC");
      return;
    }
    const params = new URLSearchParams(baseParams);
    params.set("kycStatus", "done");
    params.set("kycProvider", provider);
    params.set("kycRef", `KYC-${Math.random().toString(36).slice(2, 8).toUpperCase()}`);
    router.push(`/bike-insurance/checkout?${params.toString()}`);
  };

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-5xl py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white border rounded-xl shadow-sm p-4">
              <div className="text-sm text-gray-600">Step 3 of 3</div>
              <div className="text-xl font-semibold text-gray-900">Complete KYC</div>
            </div>

            <div className="bg-white border rounded-xl shadow-sm p-6 space-y-5">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Choose a KYC method</div>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Aadhaar eKYC (OTP)",
                    "CKYC (Central KYC Registry)",
                    "DigiLocker",
                    "PAN + OTP",
                    "Video KYC",
                  ].map((opt) => (
                    <label key={opt} className={`border rounded-md px-4 py-3 flex items-center gap-3 cursor-pointer ${provider === opt ? "border-blue-600 ring-2 ring-blue-100" : "hover:border-gray-400"}`}>
                      <input type="radio" name="kyc" value={opt} checked={provider === opt} onChange={() => setProvider(opt)} />
                      <span className="text-sm text-gray-800">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-600 bg-blue-50 border border-blue-100 rounded-md p-3">
                As per IRDAI KYC guidelines, identity verification is mandatory before issuing the policy.
              </div>

              <div className="flex items-start gap-2">
                <input id="consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
                <label htmlFor="consent" className="text-xs text-gray-600 cursor-pointer">
                  I consent to the collection and processing of my personal data for KYC verification as per the privacy policy.
                </label>
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-3">
                  {error}
                </div>
              )}

              <button
                onClick={completeKyc}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Complete KYC Verification
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white border rounded-xl shadow-sm p-6">
              <div className="text-lg font-semibold text-gray-900 mb-4">KYC Information</div>
              <div className="space-y-3 text-sm text-gray-600">
                <p>KYC (Know Your Customer) verification is mandatory as per IRDAI regulations.</p>
                <p>Choose your preferred verification method from the options provided.</p>
                <p>The process is secure and your data is protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}