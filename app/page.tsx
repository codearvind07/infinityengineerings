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
import ThreeDSphereSection from '@/components/ThreeDSphereSection';


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light relative">
      {/* Navy blue background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sphere-blue-light rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-sphere-blue-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-sphere-blue-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-sphere-blue-bright rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-sphere-blue-primary rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>
      
      <Header />
      <ThreeDSphereSection />
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