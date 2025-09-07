import Header from '@/components/Header';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <FeaturedProductsSection />
      <Footer />
    </main>
  );
}