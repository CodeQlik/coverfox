export default function SEOSitemapPage() {
  const urls = [
    { path: "/", priority: 1.0 },
    { path: "/bike-insurance", priority: 0.9 },
    { path: "/about", priority: 0.6 },
  ];
  return (
    <div className="space-y-6">
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Sitemap</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-2 pr-4">URL</th>
                <th className="py-2 pr-4">Priority</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((u) => (
                <tr key={u.path} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium">{u.path}</td>
                  <td className="py-2 pr-4">{u.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex gap-2">
          <button className="border rounded px-3 py-2 text-sm">Rebuild</button>
          <button className="border rounded px-3 py-2 text-sm">Download XML</button>
        </div>
      </section>
    </div>
  );
}
