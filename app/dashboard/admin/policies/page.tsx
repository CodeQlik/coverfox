export default function AdminPoliciesPage() {
  const rows = [
    { id: "POL12345", user: "Jane Doe", product: "Bike", status: "Active", premium: 2450 },
    { id: "POL67890", user: "Mark Ray", product: "Health", status: "Expired", premium: 12450 },
  ];
  const totalPremium = rows.reduce((s, r) => s + r.premium, 0);
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <div className="text-xs text-gray-500">Total Policies</div>
          <div className="text-2xl font-semibold">{rows.length}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <div className="text-xs text-gray-500">Active</div>
          <div className="text-2xl font-semibold">{rows.filter(r=>r.status==='Active').length}</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
          <div className="text-xs text-gray-500">Premium (₹)</div>
          <div className="text-2xl font-semibold">{totalPremium.toLocaleString()}</div>
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Policies</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-2 pr-4">Policy ID</th>
                <th className="py-2 pr-4">User</th>
                <th className="py-2 pr-4">Product</th>
                <th className="py-2 pr-4">Status</th>
                <th className="py-2 pr-4">Premium</th>
                <th className="py-2 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium">{r.id}</td>
                  <td className="py-2 pr-4">{r.user}</td>
                  <td className="py-2 pr-4">{r.product}</td>
                  <td className="py-2 pr-4"><span className={`px-2 py-1 rounded text-xs ${r.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>{r.status}</span></td>
                  <td className="py-2 pr-4">₹ {r.premium.toLocaleString()}</td>
                  <td className="py-2 pr-4">
                    <button className="border rounded px-3 py-1 mr-2">View</button>
                    <button className="border rounded px-3 py-1">Change Status</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
