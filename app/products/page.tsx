import Header from '@/components/Header';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light">
      <Header />
      <FeaturedProductsSection />
      <Footer />
    </main>
  );
}