import Header from '@/components/Header';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen pt-16 two-color-gradient">
      <Header />
      <ResourcesSection />
      <Footer />
    </main>
  );
}