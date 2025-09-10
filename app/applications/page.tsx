import Header from '@/components/Header';
import ApplicationsSection from '@/components/ApplicationsSection';
import Footer from '@/components/Footer';

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light">
      <Header />
      <ApplicationsSection />
      <Footer />
    </main>
  );
}