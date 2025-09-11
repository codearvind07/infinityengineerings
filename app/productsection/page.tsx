'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import ProductCard, { type Product } from './ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import master1 from '@/public/FireMaster1.webp';
import master2 from '@/public/FireMaster2.webp';
import master3 from '@/public/FireMaster3.webp';
import master4 from '@/public/FireMaster4.webp';
import master5 from '@/public/FireMaster5.webp';
import master6 from '@/public/FireMaster6.webp';
import master7 from '@/public/FireMaster7.webp';
import master8 from '@/public/FireMaster8.webp';
import master9 from '@/public/FireMaster9.webp';
import master10 from '@/public/FireMaster10.webp';
import master11 from '@/public/FireMaster11.webp';
import master12 from '@/public/FireMaster12.webp';
import master13 from '@/public/FireMaster13.webp';
import master14 from '@/public/FireMaster14.webp';
import master15 from '@/public/FireMaster15.webp';
import master16 from '@/public/FireMaster16.webp';
import master17 from '@/public/FireMaster17.webp';
import master18 from '@/public/FireMaster18.webp';
import master19 from '@/public/FireMaster19.webp';
import master20 from '@/public/FireMaster20.webp';
import master21 from '@/public/FireMaster21.webp';
import master22 from '@/public/FireMaster22.webp';
import master23 from '@/public/FireMaster23.webp';
import master24 from '@/public/FireMaster24.webp';

// --- Data Layer ---
// By defining product data outside the component, we prevent it from being
// redeclared on every render, improving performance.
const products: Product[] = [
  {
    id: 1,
    name: 'FireMaster A1 Fire Curtain',
    category: 'Fire Curtains',
    type: 'Vertical',
    image: master1,
    dimensions: 'Up to 15m (W) x 6m (H)',
    fireRating: '120-240 minutes',
    integrityRating: 'Up to 240 mins',
    radiationRating: 'Up to 30 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS 8524-1, BS EN 1634-1, UL 10D',
    orientations: 'Vertical'
  },
  {
    id: 2,
    name: 'FireMaster Plus2 Fire Curtain',
    category: 'Fire Curtains',
    type: 'Vertical',
    image: master2,
    dimensions: 'Up to 12m (W) x 5m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'Up to 180 mins',
    radiationRating: 'Up to 90 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS 8524-1, BS EN 1634-1',
    orientations: 'Vertical'
  },
  {
    id: 3,
    name: 'FireMaster Insul8 Fire Curtain',
    category: 'Fire Curtains',
    type: 'Vertical',
    image: master3,
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: '60-240 minutes',
    integrityRating: 'Up to 240 mins',
    radiationRating: 'Up to 240 mins',
    insulationRating: 'Up to 90 mins',
    productStandards: 'BS EN 1634-1',
    orientations: 'Vertical'
  },
  {
    id: 4,
    name: 'ResQ-Window Vision Panel',
    category: 'Fire Curtains',
    type: 'Window',
    image: master4,
    dimensions: 'Up to 3m (W) x 2.5m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Up to 30 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 1634-1, UL 10D',
    orientations: 'Vertical'
  },
  {
    id: 5,
    name: 'FireMaster Concertina "Closed" Fire Curtain',
    category: 'Fire Curtains',
    type: 'Concertina',
    image: master5,
    dimensions: 'Up to 8m (W) x 4m (H)',
    fireRating: '60-240 minutes',
    integrityRating: 'Up to 240 mins',
    radiationRating: 'Up to 30 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS 8524-1, BS EN 634-1, BS EN 1634-3, UL 10D',
    orientations: 'Multi-sided (Concertina)'
  },
  {
    id: 6,
    name: 'FireMaster Concertina "Open" Fire Curtain',
    category: 'Fire Curtains',
    type: 'Concertina',
    image: master6,
    dimensions: 'Up to 8m (W) x 4m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'Up to 180 mins',
    radiationRating: 'Up to 30 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS 8524-1, BS EN 1634-1, UL 10D',
    orientations: 'Multi-sided (Concertina)'
  },
  {
    id: 7,
    name: 'FireMaster Concertina Egress Fire Curtain',
    category: 'Fire Curtains',
    type: 'Egress',
    image: master7,
    dimensions: 'Up to 6m (W) x 3m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Up to 60 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 1634-1, UL 10D, UL 864',
    orientations: 'Multi-sided (Concertina)'
  },
  {
    id: 8,
    name: 'FireMaster Egress Fire Curtain',
    category: 'Fire Curtains',
    type: 'Egress',
    image: master8,
    dimensions: 'Up to 6m (W) x 3m (H)',
    fireRating: '60-240 minutes',
    integrityRating: 'Up to 240 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'UL 10D, UL 1784',
    orientations: 'Vertical'
  },
  {
    id: 9,
    name: 'FireMaster A1 Horizontal Simplex Fire Curtain',
    category: 'Fire Curtains',
    type: 'Horizontal',
    image: master9,
    dimensions: 'Up to 15m (W) x 6m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 1634-1',
    orientations: 'Horizontal'
  },
  {
    id: 10,
    name: 'FireMaster Duplex Horizontal Fire Curtain',
    category: 'Fire Curtains',
    type: 'Horizontal',
    image: master10,
    dimensions: 'Up to 12m (W) x 5m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 1634-1',
    orientations: 'Horizontal'
  },
  {
    id: 11,
    name: 'Vii®Fire A1 Fire Curtain',
    category: 'Fire Curtains',
    type: 'VIP',
    image: master11,
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Up to 30 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 1634-1, BS EN 1634-3',
    orientations: 'Vertical'
  },
  {
    id: 12,
    name: 'Vii®Fire iZone Fire Curtain',
    category: 'Fire Curtains',
    type: 'VIP',
    image: master12,
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'Up to 180 mins',
    radiationRating: 'Up to 60 mins',
    insulationRating: 'Not applicable',
    productStandards: 'BS 8524-1, BS EN 1634-1, BS EN 1634-3',
    orientations: 'Vertical'
  },
  {
    id: 13,
    name: 'FireMaster® Marine A-0 Fire Curtain',
    category: 'Fire Curtains',
    type: 'Marine',
    image: master13,
    dimensions: 'Up to 8m (W) x 3m (H)',
    fireRating: '60 minutes',
    integrityRating: 'Up to 60 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'IMO Res. MSC.307(88)',
    orientations: 'Vertical'
  },
  {
    id: 14,
    name: 'FireMaster 4/1000 Fire Curtain',
    category: 'Fire Curtains',
    type: 'High Performance',
    image: master14,
    dimensions: 'Up to 20m (W) x 8m (H)',
    fireRating: '60-240 minutes',
    integrityRating: 'Up to 240 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 1634-1, BS EN 1634-3, UL 10D',
    orientations: 'Vertical'
  },
  {
    id: 15,
    name: 'FireMaster Smoke and Fire Barrier',
    category: 'Fire Curtains',
    type: 'Dual Purpose',
    image: master15,
    dimensions: 'Up to 15m (W) x 6m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'Up to 180 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'NFPA 252, UL 10B/C, UL 10D, UL 1784, UL 864',
    orientations: 'Vertical'  
  },
  {
    id: 16,
    name: 'FireMaster® Superplus™ Fire Curtain',
    category: 'Fire Curtains',
    type: 'High Performance',
    image: master16,
    dimensions: 'Up to 12m (W) x 5m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Up to 120 mins',
    productStandards: 'BS EN 1634-1',
    orientations: 'Vertical'
  },
  {
    id: 17,
    name: 'SmokeStop DH60 Smoke Curtain',
    category: 'Smoke Curtains',
    type: 'Vertical',
    image: master17,
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 60 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 12101',
    orientations: 'Vertical'
  },
  {
    id: 18,
    name: 'SmokeStop Concertina "Closed" Smoke Curtain',
    category: 'Smoke Curtains',
    type: 'Concertina',
    image:master18,
    dimensions: 'Up to 8m (W) x 4m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 60 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 12101',
    orientations: 'Multi-sided (Concertina)'
  },
  {
    id: 19,
    name: 'SmokeStop Concertina "Open" Smoke Curtain',
    category: 'Smoke Curtains',
    type: 'Concertina',
    image: master19,
    dimensions: 'Up to 8m (W) x 4m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 60 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 12101',
    orientations: 'Multi-sided (Concertina)'
  },
  {
    id: 20,
    name: 'SmokeStop DH120 Smoke Curtain',
    category: 'Smoke Curtains',
    type: 'Vertical',
    image: master20,
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 120 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 12101',
    orientations: 'Vertical'
  },
  {
    id: 21,
    name: 'SmokeStop D600A Smoke Curtain',
    category: 'Smoke Curtains',
    type: 'Vertical',
    image: master21,
    dimensions: 'Up to 12m (W) x 5m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 150 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 12101',
    orientations: 'Vertical'
  },
  {
    id: 22,
    name: 'SmokeStop Egress Draft Curtain',
    category: 'Smoke Curtains',
    type: 'Egress',
    image: master22,
    dimensions: 'Up to 6m (W) x 3m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 90 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'UL 1784',
    orientations: 'Vertical'
  },
  {
    id: 23,
    name: 'SmokeStop Draft Curtain',
    category: 'Smoke Curtains',
    type: 'Vertical',
    image: master23,
    dimensions: 'Up to 6m (W) x 3m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 60 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'UL 1784',
    orientations: 'Vertical'
  },
  {
    id: 24,
    name: 'SmokeStop EvacU8® Smoke Curtain',
    category: 'Smoke Curtains',
    type: 'Vertical',
    image: master24,
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'Up to 150 mins',
    radiationRating: 'Not applicable',
    insulationRating: 'Not applicable',
    productStandards: 'BS EN 12101',
    orientations: 'Vertical'
  }
  // ... more products
];

export default function ProductsSection(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStandard, setSelectedStandard] = useState('all');
  const [selectedOrientation, setSelectedOrientation] = useState('all');
  const [selectedIntegrity, setSelectedIntegrity] = useState('all');
  const [selectedRadiation, setSelectedRadiation] = useState('all');
  const [selectedInsulation, setSelectedInsulation] = useState('all');

  // --- Derived State & Memos ---
  // useMemo ensures these values are only recalculated when their dependencies change.

  // Dynamically generate unique categories from the products list for maintainability.
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(p => p.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, []); // Empty dependency array because `products` is a stable constant.

  // Dynamically generate unique types.
  const types = useMemo(() => {
    const uniqueTypes = new Set(products.map(p => p.type));
    return ['all', ...Array.from(uniqueTypes)];
  }, []);

  // Dynamically generate unique standards.
  const standards = useMemo(() => {
    const uniqueStandards = new Set(products.map(p => p.productStandards));
    return ['all', ...Array.from(uniqueStandards)];
  }, []);

  // Dynamically generate unique orientations.
  const orientations = useMemo(() => {
    const uniqueOrientations = new Set(products.map(p => p.orientations));
    return ['all', ...Array.from(uniqueOrientations)];
  }, []);

  // Dynamically generate unique integrity ratings.
  const integrityRatings = useMemo(() => {
    const uniqueIntegrity = new Set(products.map(p => p.integrityRating));
    return ['all', ...Array.from(uniqueIntegrity)];
  }, []);

  // Dynamically generate unique radiation ratings.
  const radiationRatings = useMemo(() => {
    const uniqueRadiation = new Set(products.map(p => p.radiationRating));
    return ['all', ...Array.from(uniqueRadiation)];
  }, []);

  // Dynamically generate unique insulation ratings.
  const insulationRatings = useMemo(() => {
    const uniqueInsulation = new Set(products.map(p => p.insulationRating));
    return ['all', ...Array.from(uniqueInsulation)];
  }, []);

  // Memoize the filtered products to avoid re-filtering on every render.
  // This calculation now only runs when a filter state changes.
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesType = selectedType === 'all' || product.type === selectedType;
      const matchesStandard = selectedStandard === 'all' || product.productStandards.includes(selectedStandard);
      const matchesOrientation = selectedOrientation === 'all' || product.orientations === selectedOrientation;
      const matchesIntegrity = selectedIntegrity === 'all' || product.integrityRating === selectedIntegrity;
      const matchesRadiation = selectedRadiation === 'all' || product.radiationRating === selectedRadiation;
      const matchesInsulation = selectedInsulation === 'all' || product.insulationRating === selectedInsulation;
      
      return matchesSearch && matchesCategory && matchesType && matchesStandard && 
             matchesOrientation && matchesIntegrity && matchesRadiation && matchesInsulation;
    });
  }, [searchTerm, selectedCategory, selectedType, selectedStandard, selectedOrientation, 
      selectedIntegrity, selectedRadiation, selectedInsulation]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light relative">
      <Header />
      
      <section id="products" className="py-20 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light text-sphere-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-sphere-blue-light bg-sphere-navy-dark/50 rounded-full border border-sphere-blue-light/30">
              PRODUCT CATALOG
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fire & Smoke Curtain Solutions
            </h1>
            <h2 className="text-xl font-semibold text-sphere-white/80 mb-6 max-w-3xl mx-auto">
              Professional-grade fire protection systems engineered for modern building safety requirements
            </h2>
            <div className="max-w-4xl mx-auto text-sphere-white/70 space-y-4">
              <p>
                Our comprehensive range of fire and smoke curtains are designed to meet the most demanding safety standards. 
                Each product is certified to British/European standards and carries the CE mark, ensuring compliance with 
                international fire safety regulations.
              </p>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-gradient-to-r from-sphere-navy-dark/50 to-sphere-navy-medium/50 border border-sphere-blue-light/20 p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Filter className="text-sphere-blue-light" />
              Complete Fire Protection Solutions
            </h3>
            <div className="text-sphere-white/80 space-y-4">
              <p className="text-lg">
                <strong className="text-foreground">FireMaster Range:</strong> Our flagship fire curtain systems provide 
                advanced compartmentation solutions for new buildings while ensuring virtually uninterrupted pedestrian 
                and goods movement.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Explore FireMaster Range
                </Button>
                <Button variant="outline" className="border-sphere-blue-light/30 text-sphere-white hover:bg-sphere-blue-light/10 px-6 py-3 rounded-lg font-semibold">
                  Request Technical Specifications
                </Button>
              </div>
            </div>
          </div> 

          {/* Horizontal Filters */}
          <div className="mb-12 p-6 bg-sphere-navy-dark/50 rounded-2xl border border-sphere-blue-light/20">
            <div className="flex flex-wrap items-end gap-6">
              {/* Search */}
              <div className="flex-1 min-w-[250px]">
                <label className="block text-sm font-medium text-sphere-white/80 mb-2">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sphere-blue-light/50" />
                  <Input
                    type="text"
                    placeholder="Search by name, standard, or type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-sphere-navy-dark/50 border border-sphere-blue-light/20 text-foreground focus:border-sphere-blue-light focus:ring-2 focus:ring-sphere-blue-light/30 rounded-xl w-full"
                  />
                </div>
              </div>

              {/* Curtain Types */}
              <div className="min-w-[180px]">
                <label className="block text-sm font-medium text-sphere-white/80 mb-2">Curtain Types</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-sphere-navy-dark/50 border border-sphere-blue-light/20 text-foreground focus:border-sphere-blue-light focus:ring-2 focus:ring-sphere-blue-light/30 rounded-xl py-3">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-sphere-navy-dark border border-sphere-blue-light/20 text-foreground rounded-xl">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="py-2 hover:bg-sphere-navy-medium hover:text-foreground">
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Product Standards */}
              <div className="min-w-[180px]">
                <label className="block text-sm font-medium text-sphere-white/80 mb-2">Standards</label>
                <Select value={selectedStandard} onValueChange={setSelectedStandard}>
                  <SelectTrigger className="bg-sphere-navy-dark/50 border border-sphere-blue-light/20 text-foreground focus:border-sphere-blue-light focus:ring-2 focus:ring-sphere-blue-light/30 rounded-xl py-3">
                    <SelectValue placeholder="Select Standard" />
                  </SelectTrigger>
                  <SelectContent className="bg-sphere-navy-dark border border-sphere-blue-light/20 text-foreground rounded-xl">
                    {standards.map((standard) => (
                      <SelectItem key={standard} value={standard} className="py-2 hover:bg-sphere-navy-medium hover:text-foreground">
                        {standard === 'all' ? 'All Standards' : standard.substring(0, 25) + (standard.length > 25 ? '...' : '')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Orientations */}
              <div className="min-w-[180px]">
                <label className="block text-sm font-medium text-sphere-white/80 mb-2">Orientation</label>
                <Select value={selectedOrientation} onValueChange={setSelectedOrientation}>
                  <SelectTrigger className="bg-sphere-navy-dark/50 border border-sphere-blue-light/20 text-foreground focus:border-sphere-blue-light focus:ring-2 focus:ring-sphere-blue-light/30 rounded-xl py-3">
                    <SelectValue placeholder="Select Orientation" />
                  </SelectTrigger>
                  <SelectContent className="bg-sphere-navy-dark border border-sphere-blue-light/20 text-foreground rounded-xl">
                    {orientations.map((orientation) => (
                      <SelectItem key={orientation} value={orientation} className="py-2 hover:bg-sphere-navy-medium hover:text-foreground">
                        {orientation === 'all' ? 'All Orientations' : orientation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-sphere-white/80 mb-2">No Products Found</h3>
              <p className="text-sphere-white/60 text-lg">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}