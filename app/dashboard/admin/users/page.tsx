export default function AdminUsersPage() {
  const users = [
    { name: "Jane Doe", email: "jane@example.com", role: "user", kyc: "Pending" },
    { name: "John Admin", email: "admin@example.com", role: "admin", kyc: "Verified" },
    { name: "Sam Agent", email: "agent@example.com", role: "agent", kyc: "Pending" },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Users</h2>
      <div className="overflow-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600 border-b">
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2 pr-4">KYC</th>
              <th className="py-2 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.email} className="border-b last:border-0">
                <td className="py-2 pr-4 font-medium">{u.name}</td>
                <td className="py-2 pr-4">{u.email}</td>
                <td className="py-2 pr-4 uppercase">{u.role}</td>
                <td className="py-2 pr-4"><span className={`px-2 py-1 rounded text-xs ${u.kyc === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-800'}`}>{u.kyc}</span></td>
                <td className="py-2 pr-4">
                  <button className="border rounded px-3 py-1 mr-2">View</button>
                  <button className="border rounded px-3 py-1">Change Role</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
