"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function BikeDetailsHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isEditing, setIsEditing] = useState(false);
  const [showBikeSelector, setShowBikeSelector] = useState(false);
  const [showPolicyDropdown, setShowPolicyDropdown] = useState(false);
  
  // Get current values from URL params
  const reg = searchParams.get("reg") || "HR51U1213";
  const bikeModel = searchParams.get("bikeModel") || "Royal Enfield Classic 500";
  const rto = searchParams.get("rto") || "499 CC";
  const previousPolicy = searchParams.get("previousPolicy") || "Comprehensive";

  const [editValues, setEditValues] = useState({
    reg,
    bikeModel,
    rto,
    previousPolicy
  });

  const bikeOptions = [
    { model: "Royal Enfield Classic 500", cc: "499 CC" },
    { model: "Honda Activa 6G", cc: "109.51 CC" },
    { model: "TVS Jupiter", cc: "109.7 CC" },
    { model: "Bajaj Pulsar 150", cc: "149.5 CC" },
    { model: "Hero Splendor Plus", cc: "97.2 CC" },
    { model: "Yamaha FZ-S", cc: "149 CC" },
    { model: "KTM Duke 200", cc: "199.5 CC" },
  ];

  const policyTypes = [
    "Comprehensive",
    "Third party",
    "No previous policy"
  ];

  const handleSave = () => {
    const params = new URLSearchParams();
    params.set("reg", editValues.reg);
    params.set("bikeModel", editValues.bikeModel);
    params.set("rto", editValues.rto);
    params.set("previousPolicy", editValues.previousPolicy);
    
    router.push(`/bike-insurance/quotes?${params.toString()}`);
    setIsEditing(false);
    setShowBikeSelector(false);
    setShowPolicyDropdown(false);
  };

  const handleBikeSelect = (bike: { model: string; cc: string }) => {
    setEditValues({
      ...editValues,
      bikeModel: bike.model,
      rto: bike.cc
    });
    setShowBikeSelector(false);
  };

  const handleNotYourBike = () => {
    setShowBikeSelector(true);
    setIsEditing(true);
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-4 relative">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {isEditing ? (
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={editValues.reg}
                  onChange={(e) => setEditValues({...editValues, reg: e.target.value})}
                  className="border rounded px-2 py-1 text-sm font-medium"
                  placeholder="Registration Number"
                />
                <button
                  onClick={() => setShowBikeSelector(!showBikeSelector)}
                  className="text-blue-600 text-sm underline"
                >
                  {showBikeSelector ? "Hide" : "Change Bike"}
                </button>
              </div>
              
              <div className="text-sm text-gray-600">
                {editValues.bikeModel} | {editValues.rto}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Previous Policy Type:</span>
                <div className="relative">
                  <button
                    onClick={() => setShowPolicyDropdown(!showPolicyDropdown)}
                    className="text-xs border rounded px-2 py-1 bg-gray-50 flex items-center gap-1"
                  >
                    {editValues.previousPolicy}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showPolicyDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-10 min-w-[150px]">
                      {policyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => {
                            setEditValues({...editValues, previousPolicy: type});
                            setShowPolicyDropdown(false);
                          }}
                          className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-50"
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setShowBikeSelector(false);
                    setShowPolicyDropdown(false);
                    setEditValues({ reg, bikeModel, rto, previousPolicy });
                  }}
                  className="border border-gray-300 px-3 py-1 rounded text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-gray-600 font-medium">
                  {bikeModel} | {rto}
                </div>
                <button
                  onClick={handleNotYourBike}
                  className="text-blue-600 text-xs underline"
                >
                  NOT YOUR BIKE?
                </button>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="text-xs text-gray-500">
                  {reg} • Policy Expired • Previous Policy: {previousPolicy}
                </div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-blue-600 text-xs underline"
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bike Selector Modal */}
      {showBikeSelector && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
          <div className="p-3 border-b">
            <h3 className="font-medium text-sm">Select Your Bike</h3>
          </div>
          <div className="p-2">
            {bikeOptions.map((bike, index) => (
              <button
                key={index}
                onClick={() => handleBikeSelect(bike)}
                className="w-full text-left p-2 hover:bg-gray-50 rounded text-sm"
              >
                <div className="font-medium">{bike.model}</div>
                <div className="text-xs text-gray-500">{bike.cc}</div>
              </button>
            ))}
          </div>
          <div className="p-3 border-t">
            <button
              onClick={() => setShowBikeSelector(false)}
              className="text-blue-600 text-sm underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
