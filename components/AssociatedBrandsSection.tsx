'use client';

import { motion } from 'framer-motion';
import { Award, Globe, CheckCircle, Star, Zap, ShieldCheck, Users, Building, LucideProps } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

// Updated brand data with partner information
const brands = [
  {
    name: 'Cooper Fire UK',
    description: 'Innovative advanced fire and smoke curtains for superior safety, compliance, and reliable business protection.',
    logo: '/Cooper.png',
    certifications: ['UL Listed', 'FM Approved', 'CE Marked', 'ISO 9001']
  },
  {
    name: 'FireView Glasses',
    description: 'Independent manufacturer of high-quality fire resistant glasses.',
    logo: '/FireView.png',
    certifications: ['UL Listed', 'CE Marked', 'ISO 9001', 'NFPA Compliant']
  },
  {
    name: 'BHAWANI',
    description: 'A house of complete fire exit solutions.',
    logo: '/Bhawani.png',
    certifications: ['ISO 9001', 'CE Marked', 'UL Listed', 'NFPA Compliant']
  },
  {
    name: 'Panasonic',
    description: 'Panasonic LED lighting provides a clear advantage over conventional lighting solutions.',
    logo: '/Panasonic.png',
    certifications: ['UL Listed', 'CE Marked', 'ISO 9001', 'NFPA Compliant']
  },
  {
    name: 'Dormakaba',
    description: 'DORMA MAKE - DOOR HARDWARES PRODUCTS/SECURITY FUNCTIONS & VISUAL APPEAL FOR ANY COMMERCIAL BUILDINGS.',
    logo: '/Dormakaba.png',
    certifications: ['UL Listed', 'CE Marked', 'ISO 9001', 'FM Approved']
  },
  {
    name: 'AuronyxSystems',
    description: 'Advanced fire protection technology with innovative smart detection systems.',
    logo: '/AuronyxSystems.png',
    certifications: ['UL Listed', 'CE Marked', 'ISO 9001', 'NFPA Compliant']
  }
];

// Certification icons map
interface BrandIconMap {
  [key: string]: { icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>; color: string; };
}

const brandIcons: BrandIconMap = {
  'UL Listed': { icon: Award, color: 'text-indigo-600' },
  'FM Approved': { icon: Globe, color: 'text-purple-600' },
  'CE Marked': { icon: CheckCircle, color: 'text-blue-600' },
  'NFPA Compliant': { icon: Star, color: 'text-red-600' },
  'ISO 9001': { icon: Zap, color: 'text-green-600' },
  'ASFP Member': { icon: ShieldCheck, color: 'text-indigo-600' },
  'CFPA-E Approved': { icon: Users, color: 'text-teal-600' },
  'BSI Certified': { icon: Building, color: 'text-yellow-600' }
};

export default function AssociatedBrandsSection() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 overflow-hidden">
      {/* vertical translucent panels */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-[6%] bg-white/25 backdrop-blur-[2px] border-l border-white/35"
          style={{
            left: `${i * 8.5}%`,
            opacity: 0.4 + Math.random() * 0.3,
          }}
        />
      ))}

      {/* content */}
      <div className="relative z-10 w-full">
        <section id="associated-brands" className="py-24 relative overflow-visible w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced section header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="inline-flex items-center bg-gradient-to-r from-white to-indigo-50 backdrop-blur-sm border border-indigo-200/50 rounded-full px-6 py-2.5 mb-6 shadow-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-2.5"></div>
                <span className="text-indigo-700 text-sm font-semibold tracking-wide uppercase">Industry Leadership</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="relative inline-block">Trusted Global</span>{' '}
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Partnerships</span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We collaborate exclusively with industry pioneers who share our commitment to excellence, delivering cutting-edge fire protection solutions that exceed global safety standards.
              </motion.p>
            </motion.div>
            
            {/* Enhanced brands grid - 3 columns for desktop to show 3 partners per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {brands.map((brand, index) => {
                const isHovered = hoveredBrand === index;
                return (
                  <motion.div 
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1
                    }}
                    onHoverStart={() => setHoveredBrand(index)}
                    onHoverEnd={() => setHoveredBrand(null)}
                  >
                    <div 
                      className="relative h-full"
                      style={{
                        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      {/* Professional card design */}
                      <div className="relative h-full rounded-2xl overflow-hidden shadow-lg border border-gray-200/60 hover:border-amber-300/50 transition-all duration-300 group">
                        {/* Clean white background */}
                        <div className="absolute inset-0 bg-white z-0"></div>
                        
                        {/* Subtle hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-0"></div>
                        
                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                          {/* Logo - Larger size for better visibility */}
                          <div className="mb-6">
                            <div className="w-32 h-32 mx-auto relative bg-white rounded-2xl flex-shrink-0 border border-gray-200/70 shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-xl">
                              <div className="relative w-24 h-24">
                                <Image
                                  src={brand.logo}
                                  alt={`${brand.name} logo`}
                                  fill
                                  className="object-contain p-4"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                          
                          {/* Brand Name */}
                          <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">{brand.name}</h3>
                          
                          {/* Description */}
                          <p className="text-gray-600 leading-relaxed text-base font-light">
                            {brand.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/70 to-transparent" />
    </div>
  );
}