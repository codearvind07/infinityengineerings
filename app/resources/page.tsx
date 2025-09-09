import Header from '@/components/Header';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light">
      <Header />
      <ResourcesSection />
      <Footer />
    </main>
  );
}