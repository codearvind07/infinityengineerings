import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import AssociatedBrandsSection from '@/components/AssociatedBrandsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SectorsPage from './sectors/page';

export default function Home() {
  return (
    <main className="min-h-screen bg-gold-dark relative">
      {/* Golden background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-gold-light rounded-full animate-gold-sparkle" />
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-gold-bright rounded-full animate-gold-sparkle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gold-accent rounded-full animate-gold-sparkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-gold-platinum rounded-full animate-gold-sparkle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-gold-primary rounded-full animate-gold-sparkle" style={{ animationDelay: '3s' }} />
      </div>
      
      <Header />
      <HeroSection />
      
      <AboutSection />
      <AssociatedBrandsSection />
      <SectorsPage />
      <FeaturesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}