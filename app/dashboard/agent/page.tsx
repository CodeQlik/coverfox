export default function AgentDashboard() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h1 className="text-lg font-semibold mb-4">Agent Panel</h1>
      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
        <li>Leads & assigned cases</li>
        <li>Create quotes for customers</li>
        <li>Commissions and payouts</li>
      </ul>
    </div>
  );
}
