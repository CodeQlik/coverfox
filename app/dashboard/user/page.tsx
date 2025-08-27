export default function UserDashboard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h1 className="text-lg font-semibold mb-4">User Panel</h1>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
        <li>Your policies</li>
        <li>Payments & receipts</li>
        <li>Support tickets</li>
      </ul>
    </div>
  );
}
