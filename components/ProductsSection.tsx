'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import ProductCard, { type Product } from './ProductCard';

// --- Data Layer ---
// By defining product data outside the component, we prevent it from being
// redeclared on every render, improving performance.
const products: Product[] = [
  {
    id: 1,
    name: 'FireMaster A1 Fire Curtain',
    category: 'Fire Curtains',
    type: 'Vertical',
    image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 15m (W) x 6m (H)',
    fireRating: '120-240 minutes',
    integrityRating: 'E120-E240 mins',
    radiationRating: 'EW120-EW240',
    productStandards: 'BS EN 1634-1, BS EN 1634-3'
  },
  {
    id: 2,
    name: 'FireMaster Plus Fire Curtain',
    category: 'Fire Curtains',
    type: 'Vertical',
    image: 'https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 12m (W) x 5m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'E60-E180 mins',
    radiationRating: 'EW60-EW180',
    productStandards: 'BS EN 1634-1, BS EN 1634-3'
  },
  {
    id: 3,
    name: 'SmokeStop Insouth Fire Curtain',
    category: 'Smoke Curtains',
    type: 'Vertical',
    image: 'https://images.pexels.com/photos/110878/pexels-photo-110878.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'D120 mins',
    radiationRating: 'Not applicable',
    productStandards: 'BS EN 12101-1'
  },
  {
    id: 4,
    name: 'SmokeStop Window Vision Panel',
    category: 'Smoke Curtains',
    type: 'Window',
    image: 'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 3m (W) x 2.5m (H)',
    fireRating: 'Smoke only',
    integrityRating: 'D60 mins',
    radiationRating: 'Not applicable',
    productStandards: 'BS EN 12101-1'
  },
  {
    id: 5,
    name: 'FireMaster Concertina "Closed" Fire Curtain',
    category: 'Fire Curtains',
    type: 'Concertina',
    image: 'https://images.pexels.com/photos/7218567/pexels-photo-7218567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 8m (W) x 4m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'E60-E120 mins',
    radiationRating: 'EW60-EW120',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 6,
    name: 'FireMaster Concertina "Open" Fire Curtain',
    category: 'Fire Curtains',
    type: 'Concertina',
    image: 'https://images.pexels.com/photos/7218525/pexels-photo-7218525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 8m (W) x 4m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'E60-E120 mins',
    radiationRating: 'EW60-EW120',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 7,
    name: 'FireMaster Concertina Egress Fire Curtain',
    category: 'Fire Curtains',
    type: 'Egress',
    image: 'https://images.pexels.com/photos/7195700/pexels-photo-7195700.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 6m (W) x 3m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'E60-E120 mins',
    radiationRating: 'EW60-EW120',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 8,
    name: 'FireMaster Egress Fire Curtain',
    category: 'Fire Curtains',
    type: 'Egress',
    image: 'https://images.pexels.com/photos/6588604/pexels-photo-6588604.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 6m (W) x 3m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'E60-E180 mins',
    radiationRating: 'EW60-EW180',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 9,
    name: 'FireMaster A1 Horizontal Graphic Fire Curtain',
    category: 'Fire Curtains',
    type: 'Horizontal',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 15m (W) x 6m (H)',
    fireRating: '120-240 minutes',
    integrityRating: 'E120-E240 mins',
    radiationRating: 'EW120-EW240',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 10,
    name: 'FireMaster Duplex Horizontal Fire Curtain',
    category: 'Fire Curtains',
    type: 'Horizontal',
    image: 'https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 12m (W) x 5m (H)',
    fireRating: '60-180 minutes',
    integrityRating: 'E60-E180 mins',
    radiationRating: 'EW60-EW180',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 11,
    name: 'VIP Fire A1 Fire Curtain',
    category: 'Fire Curtains',
    type: 'VIP',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: '120-180 minutes',
    integrityRating: 'E120-E180 mins',
    radiationRating: 'EW120-EW180',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 12,
    name: 'VIP Fire Smoke Fire Curtain',
    category: 'Fire Curtains',
    type: 'VIP',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 10m (W) x 4m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'E60-E120 mins',
    radiationRating: 'EW60-EW120',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 13,
    name: 'FireMaster Marine K-5 Fire Curtain',
    category: 'Fire Curtains',
    type: 'Marine',
    image: 'https://images.pexels.com/photos/1320674/pexels-photo-1320674.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 8m (W) x 3m (H)',
    fireRating: '60-120 minutes',
    integrityRating: 'A60-A120 Class',
    radiationRating: 'Marine certified',
    productStandards: 'IMO 2010 FTP Code'
  },
  {
    id: 14,
    name: 'FireMaster A-1000 Fire Curtain',
    category: 'Fire Curtains',
    type: 'High Performance',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 20m (W) x 8m (H)',
    fireRating: '180-240 minutes',
    integrityRating: 'E180-E240 mins',
    radiationRating: 'EW180-EW240',
    productStandards: 'BS EN 1634-1'
  },
  {
    id: 15,
    name: 'FireMaster Smoke and Fire Curtain',
    category: 'Fire Curtains',
    type: 'Dual Purpose',
    image: 'https://images.pexels.com/photos/8044130/pexels-photo-8044130.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    dimensions: 'Up to 15m (W) x 6m (H)',
    fireRating: '120-180 minutes',
    integrityRating: 'E120-E180 mins',
    radiationRating: 'EW120-EW180',
    productStandards: 'BS EN 1634-1, BS EN 12101-1'
  },
  // ... more products
];

export default function ProductsSection(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

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

  // Memoize the filtered products to avoid re-filtering on every render.
  // This calculation now only runs when a filter state changes.
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesType = selectedType === 'all' || product.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchTerm, selectedCategory, selectedType]);

  return (
    <section id="products" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PRODUCTS
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-6">
            FIRE CURTAINS & SMOKE CURTAINS
          </h2>
          <div className="max-w-4xl mx-auto text-gray-400 space-y-4">
            <p>
              From smoke curtains to large area in downstand fire curtains that facilitate space gate 
              strategy, we have exceptional and extensive range of innovations, fire control and smoke 
              management systems for passive fire protection. Our Fire and Smoke curtains are approved 
              to British/European standards BSEN 1634-1 & BSEN 12101 and carry the CE mark. 
              SmokeStop solutions for some fire protection solutions. Committed to advancing fire and 
              smoke control technology, soon Coopers Fire Groups Fire the industry in Third Party 
              Certification to LPCB standards.
            </p>
          </div>
        </div>

        {/* Product Description */}
        <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">
            WE OFFER A COMPLETE RANGE OF FIRE AND SMOKE CURTAIN BARRIERS, PLEASE SEE OUR PRODUCTS LISTED BELOW:
          </h3>
          <div className="text-gray-300">
            <p className="mb-2">
              <strong>Product Name:</strong> Find out more about our FireMaster Range - our new fire protection 
              solution that provides compartmentation into new buildings while providing virtually uninterrupted 
              pedestrian and goods movement.
            </p>
            <p>
              Available: <span className="text-gray-400 underline cursor-pointer">Find Out More</span>
            </p>
          </div>
        </div> 

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Search by Item</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-800 border-gray-700 text-white focus:border-gray-500"
                />
              </div>
            </div>

            {/* Curtain Types */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Curtain Types</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Product Guidelines */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Product Guidelines</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Approvals */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Approvals</label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select approval" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="bsen1634">BS EN 1634-1</SelectItem>
                  <SelectItem value="bsen12101">BS EN 12101-1</SelectItem>
                  <SelectItem value="imo">IMO 2010 FTP Code</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Operations */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Operations</label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select operation" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                  <SelectItem value="gravity">Gravity</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sizing & Ratings */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sizing & Ratings</label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select rating" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="e60">E60</SelectItem>
                  <SelectItem value="e120">E120</SelectItem>
                  <SelectItem value="e180">E180</SelectItem>
                  <SelectItem value="e240">E240</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Installation Ratings */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Installation Ratings</label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                  <SelectValue placeholder="Select installation" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700 text-white">
                  <SelectItem value="ceiling">Ceiling Mounted</SelectItem>
                  <SelectItem value="wall">Wall Mounted</SelectItem>
                  <SelectItem value="floor">Floor Mounted</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* The "Search" button was removed as filtering is applied live on input change. */}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}