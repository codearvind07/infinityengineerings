import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import AssociatedBrandsSection from '@/components/AssociatedBrandsSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 md:pt-24 indigo-purple-gradient-light">
      <Header />
      <AboutSection />
      <AssociatedBrandsSection />
      <Footer />
    </main>
  );
}