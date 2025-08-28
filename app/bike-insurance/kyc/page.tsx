import { Suspense } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import KycContent from './KycContent';

export default function KycPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      }>
        <KycContent />
      </Suspense>
      <Footer />
    </div>
  );
}
