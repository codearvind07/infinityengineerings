import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import AssociatedBrandsSection from '@/components/AssociatedBrandsSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light">
      <Header />
      <AboutSection />
      <AssociatedBrandsSection />
      <Footer />
    </main>
  );
}