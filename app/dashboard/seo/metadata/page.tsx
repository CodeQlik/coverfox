export default function SEOMetadataPage() {
  const pages = [
    { path: "/", title: "Coverfox - Insurance made easy", desc: "Compare and buy insurance" },
    { path: "/bike-insurance", title: "Bike Insurance - Coverfox", desc: "Instant quotes for 2-wheeler" },
  ];
  return (
    <div className="space-y-6">
      <section className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">Metadata</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600 border-b">
                <th className="py-2 pr-4">Path</th>
                <th className="py-2 pr-4">Title</th>
                <th className="py-2 pr-4">Description</th>
                <th className="py-2 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((p) => (
                <tr key={p.path} className="border-b last:border-0">
                  <td className="py-2 pr-4 font-medium">{p.path}</td>
                  <td className="py-2 pr-4">{p.title}</td>
                  <td className="py-2 pr-4">{p.desc}</td>
                  <td className="py-2 pr-4"><button className="border rounded px-3 py-1">Edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
