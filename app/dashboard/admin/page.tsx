export default function AdminDashboard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h1 className="text-lg font-semibold mb-4">Admin Panel</h1>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
        <li>Manage users and roles</li>
        <li>View system metrics</li>
        <li>Configure products and pricing</li>
      </ul>
    </div>
  );
}
