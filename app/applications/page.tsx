import Header from '@/components/Header';
import ApplicationsSection from '@/components/ApplicationsSection';
import Footer from '@/components/Footer';

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <ApplicationsSection />
      <Footer />
    </main>
  );
}