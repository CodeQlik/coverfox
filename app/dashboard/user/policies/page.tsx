export default function UserPoliciesPage() {
  const policies = [
    { id: "POL12345", product: "Bike Insurance", reg: "MH12AB1234", status: "Active", expiry: "2026-05-01" },
    { id: "POL67890", product: "Health Insurance", reg: "-", status: "Expired", expiry: "2024-11-12" },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Your Policies</h2>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2 pr-4">Policy ID</th>
              <th className="py-2 pr-4">Product</th>
              <th className="py-2 pr-4">Reg/Ref</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Expiry</th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((p) => (
              <tr key={p.id} className="border-b last:border-0">
                <td className="py-2 pr-4 font-medium">{p.id}</td>
                <td className="py-2 pr-4">{p.product}</td>
                <td className="py-2 pr-4">{p.reg}</td>
                <td className="py-2 pr-4"><span className={`px-2 py-1 rounded text-xs ${p.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>{p.status}</span></td>
                <td className="py-2 pr-4">{p.expiry}</td>
                <td className="py-2 pr-4">
                  <button className="border rounded px-3 py-1 mr-2">View</button>
                  <button className="border rounded px-3 py-1">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
