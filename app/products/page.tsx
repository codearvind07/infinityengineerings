import Header from '@/components/Header';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Header />
      <ProductsSection />
      <Footer />
    </main>
  );
}