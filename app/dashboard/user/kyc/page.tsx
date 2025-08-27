export default function UserKycPage() {
  return (
    <div className="space-y-6">
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">KYC Verification</h2>
        <p className="text-sm text-gray-600 mb-4">Submit your KYC details to speed up policy issuance and claims.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block text-gray-600 mb-1">PAN</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="ABCDE1234F" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Aadhaar (last 4 digits)</label>
            <input className="w-full border rounded-md px-3 py-2" placeholder="1234" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Date of Birth</label>
            <input type="date" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Upload ID Proof</label>
            <input type="file" className="w-full border rounded-md px-3 py-2" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-2 text-sm">Submit KYC</button>
          <span className="text-xs text-gray-500">Status: Pending Verification</span>
        </div>
      </section>
    </div>
  );
}
