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
  const [step, setStep] = useState<"owner" | "address" | "vehicle">("owner");

  // Owner details with test data
  const [ownerName, setOwnerName] = useState("RAHUL SHARMA");
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("1990-05-15");
  const [mobile, setMobile] = useState("9876543210");
  const [email, setEmail] = useState("rahul.sharma@example.com");
  const [pan, setPan] = useState("ABCDE1234F");

  // KYC + Nominee with test data
  const [nomineeName, setNomineeName] = useState("PRIYA SHARMA");
  const [nomineeAge, setNomineeAge] = useState("28");
  const [nomineeRelation, setNomineeRelation] = useState("Wife");

  // Inline errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Address with test data - Updated for Rajasthan
  const [addr1, setAddr1] = useState("123, Heritage Homes");
  const [addr2, setAddr2] = useState("Sodala, Tonk Road");
  const [city, setCity] = useState("Jaipur");
  const [state, setState] = useState("Rajasthan");
  const [pincode, setPincode] = useState("302019");

  // Vehicle details + Past policy with test data
  const [isRenewal, setIsRenewal] = useState(true);
  const [vTab, setVTab] = useState<"vehicle" | "past">("vehicle");
  const [regDate, setRegDate] = useState("2022-06-10");
  const [engineNo, setEngineNo] = useState("EN1234567890");
  const [chassisNo, setChassisNo] = useState("MB1BA4567GZ123456");
  const [onLoan, setOnLoan] = useState<"Yes" | "No">("No");
  const [loanProvider, setLoanProvider] = useState("");

  // Past policy details with test data
  const [prevExpiry, setPrevExpiry] = useState("2024-06-09");
  const [prevInsurer, setPrevInsurer] = useState("HDFC ERGO");
  const [prevPolicyNo, setPrevPolicyNo] = useState("POL123456789");
  const [claimedLY, setClaimedLY] = useState<"Yes" | "No">("No");
  const [ncb, setNcb] = useState(20); // 20% NCB for no claims last year
  const [prevOnLoan, setPrevOnLoan] = useState<"Yes" | "No">("No");
  const [prevLoanProvider, setPrevLoanProvider] = useState("");

  // Validate owner step
  const validateOwner = () => {
    const newErrors: Record<string, string> = {};
    if (!ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!dob) newErrors.dob = "Date of birth is required";
    if (!/^\d{10}$/.test(mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email address";
    if (!pan) newErrors.pan = "PAN is mandatory for KYC";
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan.toUpperCase())) newErrors.pan = "Enter a valid PAN (e.g., ABCDE1234F)";
    if (!nomineeName.trim()) newErrors.nomineeName = "Nominee name is required";
    if (!/^([1-9][0-9]?)$/.test(nomineeAge)) newErrors.nomineeAge = "Enter valid age (1-99)";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateOwner()) {
      setStep("address");
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // compute adjusted total with NCB discount if renewal and not claimed
    const baseSubtotal = Number(total || 0);
    const ncbDiscount = isRenewal && claimedLY === "No" ? Math.round(baseSubtotal * (ncb / 100)) : 0;
    const adjustedSubtotal = Math.max(baseSubtotal - ncbDiscount, 0);

    const params = new URLSearchParams({
      reg,
      bikeModel,
      rto,
      planId,
      planName,
      total: String(adjustedSubtotal),
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
      nomineeName,
      nomineeAge,
      nomineeRelation,
      addr1,
      addr2,
      city,
      state,
      pincode,
      // vehicle
      isRenewal: isRenewal ? "1" : "0",
      regDate,
      engineNo,
      chassisNo,
      onLoan,
      loanProvider,
      prevInsurer,
      prevPolicyNo,
      prevExpiry,
      claimedLY,
      ncb: String(ncb),
    });
    router.push(`/bike-insurance/kyc?${params.toString()}`);
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
            <div className={`flex items-center gap-2 ${step === "vehicle" ? "text-orange-600 font-semibold" : "text-gray-600"}`}>
              <span className={`w-5 h-5 rounded-full border flex items-center justify-center ${step === "vehicle" ? "bg-orange-500 text-white border-orange-500" : "bg-white"}`}>3</span>
              Vehicle Details
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
                <input className="w-full border rounded-md px-3 py-2" placeholder="WASIM QURESHI" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
                {errors.ownerName && (<div className="text-xs text-red-500 mt-1">{errors.ownerName}</div>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <div className="mt-2 flex gap-6 text-sm">
                  <label className="flex items-center gap-2"><input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={() => setGender("Male")} /> Male</label>
                  <label className="flex items-center gap-2"><input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={() => setGender("Female")} /> Female</label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" className="w-full border rounded-md px-3 py-2" value={dob} onChange={(e) => setDob(e.target.value)} />
                {errors.dob && (<div className="text-xs text-red-500 mt-1">{errors.dob}</div>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input required className="w-full border rounded-md px-3 py-2" placeholder="10-digit mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                {errors.mobile ? (
                  <div className="text-xs text-red-500 mt-1">{errors.mobile}</div>
                ) : (
                  <div className="text-xs text-red-500 mt-1">Oh, we can&apos;t proceed without this information. Do your bit?</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" className="w-full border rounded-md px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && (<div className="text-xs text-red-500 mt-1">{errors.email}</div>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">PAN Number</label>
                <input className="w-full border rounded-md px-3 py-2" value={pan} onChange={(e) => setPan(e.target.value)} />
                <div className="text-xs text-gray-500 mt-1">KYC is mandatory as per recent IRDAI guidelines</div>
                {errors.pan && (<div className="text-xs text-red-500 mt-1">{errors.pan}</div>)}
              </div>
              {/* Nominee Details */}
              <div className="md:col-span-2 pt-2">
                <div className="text-center text-xs tracking-widest text-gray-600 font-semibold">NOMINEE DETAILS</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nominee&apos;s Name</label>
                <input className="w-full border rounded-md px-3 py-2" value={nomineeName} onChange={(e) => setNomineeName(e.target.value)} />
                {errors.nomineeName && (<div className="text-xs text-red-500 mt-1">{errors.nomineeName}</div>)}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nominee&apos;s Age</label>
                <input className="w-full border rounded-md px-3 py-2" placeholder="e.g., 45" value={nomineeAge} onChange={(e) => setNomineeAge(e.target.value)} />
                {errors.nomineeAge && (<div className="text-xs text-red-500 mt-1">{errors.nomineeAge}</div>)}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Relationship</label>
                <select className="w-full border rounded-md px-3 py-2" value={nomineeRelation} onChange={(e) => setNomineeRelation(e.target.value)}>
                  <option>Father</option>
                  <option>Mother</option>
                  <option>Spouse</option>
                  <option>Son</option>
                  <option>Daughter</option>
                  <option>Brother</option>
                  <option>Sister</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md px-6 py-3">
                  NEXT: Communication Address
                </button>
              </div>
            </form>
          ) : step === "address" ? (
            <form onSubmit={(e) => { e.preventDefault(); setStep("vehicle"); }} className="bg-white border rounded-xl shadow-sm p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 text-gray-700">Provide your communication address, then proceed to pay.</div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input required className="w-full border rounded-md px-3 py-2" value={addr1} onChange={(e) => setAddr1(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                <input className="w-full border rounded-md px-3 py-2" value={addr2} onChange={(e) => setAddr2(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input required className="w-full border rounded-md px-3 py-2" value={city} onChange={(e) => setCity(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input required className="w-full border rounded-md px-3 py-2" value={state} onChange={(e) => setState(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">PIN Code</label>
                <input required className="w-full border rounded-md px-3 py-2" value={pincode} onChange={(e) => setPincode(e.target.value)} />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <button type="button" onClick={() => setStep("owner")} className="border rounded-md px-6 py-3">Back</button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3">Next: Vehicle Details</button>
              </div>
            </form>
          ) : (
            <form onSubmit={submit} className="bg-white border rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-gray-900">Vehicle & Past Policy</div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-gray-600">Type:</span>
                  <label className="flex items-center gap-1"><input type="radio" name="rtype" checked={!isRenewal} onChange={() => setIsRenewal(false)} /> New</label>
                  <label className="flex items-center gap-1"><input type="radio" name="rtype" checked={isRenewal} onChange={() => setIsRenewal(true)} /> Renew</label>
                </div>
              </div>
              <div className="border-b mb-4 flex gap-6 text-sm">
                <button type="button" onClick={() => setVTab("vehicle")} className={`pb-2 ${vTab === "vehicle" ? "border-b-2 border-orange-500 text-orange-600" : "text-gray-600"}`}>Vehicle Details</button>
                <button type="button" onClick={() => setVTab("past")} disabled={!isRenewal} className={`pb-2 ${vTab === "past" ? "border-b-2 border-orange-500 text-orange-600" : "text-gray-600"} ${!isRenewal ? "opacity-50 cursor-not-allowed" : ""}`}>Past Policy Details</button>
              </div>

              {vTab === "vehicle" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bike Registration Date</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2" value={regDate} onChange={(e) => setRegDate(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Engine Number (as per RC)</label>
                    <input className="w-full border rounded-md px-3 py-2" value={engineNo} onChange={(e) => setEngineNo(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Chassis Number (as per RC)</label>
                    <input className="w-full border rounded-md px-3 py-2" value={chassisNo} onChange={(e) => setChassisNo(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Is bike currently on loan?</label>
                    <div className="mt-2 flex gap-6 text-sm">
                      <label className="flex items-center gap-2"><input type="radio" name="onloan" value="Yes" checked={onLoan === "Yes"} onChange={() => setOnLoan("Yes")} /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="onloan" value="No" checked={onLoan === "No"} onChange={() => {
                        setOnLoan("No");
                        setLoanProvider(""); // Clear loan provider when selecting No
                      }} /> No</label>
                    </div>
                  </div>
                  {onLoan === "Yes" && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">Loan Provider&apos;s Name</label>
                      <input className="w-full border rounded-md px-3 py-2" placeholder="e.g., BAJAJ FINANCE LTD" value={loanProvider} onChange={(e) => setLoanProvider(e.target.value)} required={onLoan === "Yes"} />
                    </div>
                  )}
                </div>
              )}

              {vTab === "past" && isRenewal && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <div className="text-sm font-semibold text-gray-900">Past Policy Details</div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous Policy Expiry Date</label>
                    <input type="date" className="w-full border rounded-md px-3 py-2" value={prevExpiry} onChange={(e) => setPrevExpiry(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous Policy Insurer</label>
                    <input className="w-full border rounded-md px-3 py-2" value={prevInsurer} onChange={(e) => setPrevInsurer(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous Policy Number</label>
                    <input className="w-full border rounded-md px-3 py-2" value={prevPolicyNo} onChange={(e) => setPrevPolicyNo(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Claimed in the past year?</label>
                    <div className="mt-2 flex gap-6 text-sm">
                      <label className="flex items-center gap-2"><input type="radio" name="claimed" value="Yes" checked={claimedLY === "Yes"} onChange={() => setClaimedLY("Yes")} /> Yes</label>
                      <label className="flex items-center gap-2"><input type="radio" name="claimed" value="No" checked={claimedLY === "No"} onChange={() => setClaimedLY("No")} /> No</label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous No Claim Bonus (NCB)</label>
                    <select className="w-full border rounded-md px-3 py-2" value={ncb} onChange={(e) => setNcb(Number(e.target.value))}>
                      {[0, 20, 25, 35, 45, 50].map(p => <option key={p} value={p}>{p}%</option>)}
                    </select>
                  </div>
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button type="button" onClick={() => setStep("address")} className="border rounded-md px-6 py-3">Back</button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3">Next: Review & KYC</button>
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

              {/* Premium details with optional NCB */}
              <div className="mt-4 border-t pt-4 space-y-2 text-sm">
                {(() => {
                  const base = Number(total || 0);
                  const ncbAmt = isRenewal && claimedLY === "No" ? Math.round(base * (ncb / 100)) : 0;
                  const subtotal = Math.max(base - ncbAmt, 0);
                  const gstAmt = Math.round(subtotal * 0.18);
                  const final = subtotal + gstAmt;
                  return (
                    <>
                      <div className="flex items-center justify-between"><span className="text-gray-600">Net premium</span><span>₹ {base.toLocaleString("en-IN")}</span></div>
                      {ncbAmt > 0 && (
                        <div className="flex items-center justify-between text-green-700"><span>NCB discount ({ncb}%)</span><span>-₹ {ncbAmt.toLocaleString("en-IN")}</span></div>
                      )}
                      <div className="flex items-center justify-between"><span className="text-gray-600">Subtotal</span><span>₹ {subtotal.toLocaleString("en-IN")}</span></div>
                      <div className="flex items-center justify-between"><span className="text-gray-600">GST (18%)</span><span>₹ {gstAmt.toLocaleString("en-IN")}</span></div>
                      <div className="flex items-center justify-between font-semibold text-gray-900 border-t pt-2"><span>Final premium</span><span>₹ {final.toLocaleString("en-IN")}</span></div>
                    </>
                  );
                })()}
              </div>

              {step !== "vehicle" ? (
                <button
                  onClick={() => {
                    if (step === "owner") {
                      if (validateOwner()) setStep("address");
                    } else if (step === "address") {
                      setStep("vehicle");
                    }
                  }}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3"
                >
                  {step === "owner" ? "Next: Address" : "Next: Vehicle Details"}
                </button>
              ) : (
                <button
                  onClick={(e) => { e.preventDefault(); submit(e as any); }}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3"
                >
                  Proceed to KYC
                </button>
              )}

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
