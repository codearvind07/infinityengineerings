import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SectorsPage from './sectors/page';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      
      <AboutSection />
      <SectorsPage />
      <FeaturesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}