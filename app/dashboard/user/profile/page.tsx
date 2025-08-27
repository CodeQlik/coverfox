export default function UserProfilePage() {
  return (
    <div className="space-y-6">
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input className="w-full border rounded-md px-3 py-2" defaultValue="Jane Doe" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input className="w-full border rounded-md px-3 py-2" defaultValue="jane@example.com" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Mobile</label>
            <input className="w-full border rounded-md px-3 py-2" defaultValue="9876543210" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Gender</label>
            <select className="w-full border rounded-md px-3 py-2">
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-2 text-sm">Save changes</button>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h3 className="text-base font-semibold mb-3">Communication Address</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <input className="w-full border rounded-md px-3 py-2" placeholder="Address line 1" defaultValue="221B Baker Street" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Address line 2" defaultValue="Near Park" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="City" defaultValue="Mumbai" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="State" defaultValue="Maharashtra" />
          <input className="w-full border rounded-md px-3 py-2" placeholder="Pincode" defaultValue="400001" />
        </div>
        <div className="mt-4">
          <button className="border rounded-md px-4 py-2 text-sm">Update address</button>
        </div>
      </section>
    </div>
  );
}
