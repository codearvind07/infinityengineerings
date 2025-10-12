'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import ProductCard, { type Product } from './ProductCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
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

// Product data defined as a constant outside the component for performance optimization.
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
    productStandards: 'NFPA 252, UL 252, UL 10D, UL 1784, UL 864',
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
    image: master18,
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

  // Memoized filter options derived from products data.
  const categories = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const types = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.type)))],
    []
  );

  const standards = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.productStandards)))],
    []
  );

  const orientations = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.orientations)))],
    []
  );

  const integrityRatings = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.integrityRating)))],
    []
  );

  const radiationRatings = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.radiationRating)))],
    []
  );

  const insulationRatings = useMemo(
    () => ['all', ...Array.from(new Set(products.map((p) => p.insulationRating)))],
    []
  );

  // Memoized filtered products to avoid unnecessary recalculations.
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesType = selectedType === 'all' || product.type === selectedType;
      const matchesStandard = selectedStandard === 'all' || product.productStandards.includes(selectedStandard);
      const matchesOrientation = selectedOrientation === 'all' || product.orientations === selectedOrientation;
      const matchesIntegrity = selectedIntegrity === 'all' || product.integrityRating === selectedIntegrity;
      const matchesRadiation = selectedRadiation === 'all' || product.radiationRating === selectedRadiation;
      const matchesInsulation = selectedInsulation === 'all' || product.insulationRating === selectedInsulation;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesStandard &&
        matchesOrientation &&
        matchesIntegrity &&
        matchesRadiation &&
        matchesInsulation
      );
    });
  }, [
    searchTerm,
    selectedCategory,
    selectedType,
    selectedStandard,
    selectedOrientation,
    selectedIntegrity,
    selectedRadiation,
    selectedInsulation,
  ]);

  return (
    <main className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Subtle background effects with balanced blue-indigo palette */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-slate-500/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Minimal geometric elements in cohesive colors */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-blue-200/50 rotate-45 rounded-lg"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-indigo-200/50 rounded-full"></div>
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-slate-200/50 rotate-12 rounded-xl"></div>
        </div>
      </div>

      <Header />

      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/slider.jpg"
            alt="Fire safety systems in commercial building"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Fire & Smoke
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300"> Protection Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Engineered solutions for modern building safety, combining cutting-edge technology with proven performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Products
              </Button>
              <Button variant="outline" className="border-2 border-white/50 text-white hover:bg-white/20 px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 mb-6 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border border-blue-600/30 shadow-lg backdrop-blur-sm">
              PREMIUM PROTECTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Fire & Smoke Protection Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our comprehensive range of fire and smoke curtains are designed to meet the most demanding safety standards. 
              Each product is certified to British/European standards and carries the CE mark, ensuring compliance with 
              international fire safety regulations.
            </p>
          </div>

          {/* Product Overview Section - Consolidated and non-repetitive */}
          <div className="bg-white/80 border border-blue-200/50 p-8 rounded-2xl mb-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="text-blue-600 h-6 w-6" />
              Complete Fire Protection Solutions
            </h3>
            <div className="text-gray-700 space-y-4">
              <p className="text-lg">
                <strong className="text-gray-900">FireMaster Range:</strong> Our flagship fire curtain systems provide 
                advanced compartmentation solutions for new buildings while ensuring virtually uninterrupted pedestrian 
                and goods movement. Explore options tailored for various applications, from vertical drops to multi-sided enclosures.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Explore FireMaster Range
                </Button>
                <Button variant="outline" className="border-blue-600/50 text-gray-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold">
                  Request Technical Specifications
                </Button>
              </div>
            </div>
          </div> 

          {/* Advanced Filters - All filters now included for completeness */}
          <div className="mb-12 p-6 bg-white/80 rounded-2xl border border-blue-200/50 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-500/50" />
                  <Input
                    type="text"
                    placeholder="Search by name, standard, or type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl w-full"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category} className="py-2 hover:bg-blue-50">
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Types */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Types</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl">
                    {types.map((type) => (
                      <SelectItem key={type} value={type} className="py-2 hover:bg-blue-50">
                        {type === 'all' ? 'All Types' : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Standards */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Standards</label>
                <Select value={selectedStandard} onValueChange={setSelectedStandard}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Standards" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl max-h-48 overflow-y-auto">
                    {standards.map((standard) => (
                      <SelectItem key={standard} value={standard} className="py-2 hover:bg-blue-50">
                        {standard === 'all' ? 'All Standards' : standard.substring(0, 25) + (standard.length > 25 ? '...' : '')}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Orientation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Orientation</label>
                <Select value={selectedOrientation} onValueChange={setSelectedOrientation}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Orientations" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl">
                    {orientations.map((orientation) => (
                      <SelectItem key={orientation} value={orientation} className="py-2 hover:bg-blue-50">
                        {orientation === 'all' ? 'All Orientations' : orientation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Integrity Rating */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Integrity Rating</label>
                <Select value={selectedIntegrity} onValueChange={setSelectedIntegrity}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Ratings" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl">
                    {integrityRatings.map((rating) => (
                      <SelectItem key={rating} value={rating} className="py-2 hover:bg-blue-50">
                        {rating === 'all' ? 'All Ratings' : rating}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Radiation Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Radiation Rating</label>
                <Select value={selectedRadiation} onValueChange={setSelectedRadiation}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Ratings" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl">
                    {radiationRatings.map((rating) => (
                      <SelectItem key={rating} value={rating} className="py-2 hover:bg-blue-50">
                        {rating === 'all' ? 'All Ratings' : rating}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Insulation Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Insulation Rating</label>
                <Select value={selectedInsulation} onValueChange={setSelectedInsulation}>
                  <SelectTrigger className="bg-white/50 border border-blue-200/50 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 rounded-xl py-3">
                    <SelectValue placeholder="All Ratings" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-blue-200/50 text-gray-900 rounded-xl">
                    {insulationRatings.map((rating) => (
                      <SelectItem key={rating} value={rating} className="py-2 hover:bg-blue-50">
                        {rating === 'all' ? 'All Ratings' : rating}
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
            <div className="text-center py-16 col-span-full">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Products Found</h3>
              <p className="text-gray-500 text-lg">
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