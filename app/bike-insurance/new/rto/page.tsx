import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { Suspense } from "react";
import NewRtoClient from "../../../components/NewRtoClient";

export default function NewBikeRtoPage() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="px-4 md:px-8 lg:px-12 py-8">
        <Suspense fallback={<div className="text-center text-sm text-gray-500">Loading…</div>}>
          <NewRtoClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
