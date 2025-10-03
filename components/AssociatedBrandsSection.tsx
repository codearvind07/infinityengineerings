'use client';

import { motion } from 'framer-motion';
import { Award, Globe, CheckCircle, Star, Zap, ShieldCheck, Users, Building, LucideProps } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

// Brand data
const brands = [
  {
    name: 'Coopers Fire UK',
    description: 'World-leading manufacturer of fire curtain systems with over 30 years of engineering excellence.',
    logo: '/CoopersFireUK.webp',
    certifications: ['UL Listed', 'FM Approved', 'CE Marked', 'ISO 9001']
  },
  {
    name: '3M Fire Protection',
    description: 'Innovative fire protection solutions from the global materials science leader.',
    logo: '/3MFireProtection.png',
    certifications: ['NFPA Compliant', 'ASFP Member', 'CFPA-E Approved', 'BSI Certified']
  },
  {
    name: 'Honeywell Safety',
    description: 'Global leader in smart fire detection and suppression systems for commercial applications.',
    logo: '/Honeywell-global-logo.jpg',
    certifications: ['UL Listed', 'FM Approved', 'ISO 9001', 'CFPA-E Approved']
  },
  {
    name: 'Siemens Building Tech',
    description: 'Smart building systems integration with advanced fire safety monitoring capabilities.',
    logo: '/Siemens-Logo.png',
    certifications: ['CE Marked', 'NFPA Compliant', 'BSI Certified', 'ISO 9001']
  },
  {
    name: 'Johnson Controls',
    description: 'Comprehensive fire safety solutions from the global building technology leader.',
    logo: '/JohnsonControls.png',
    certifications: ['UL Listed', 'FM Approved', 'ASFP Member', 'ISO 9001']
  },
  {
    name: 'Tyco Fire Solutions',
    description: 'Global provider of fire detection, suppression and life safety systems.',
    logo: '/TycoFireSolutions.png',
    certifications: ['UL Listed', 'FM Approved', 'CE Marked', 'ISO 9001']
  },
  {
    name: 'Auronyx Systems',
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
    <section id="associated-brands" className="py-20 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Simplified background pattern for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified geometric pattern elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-48 h-48 border-2 border-indigo-200/20 rotate-45 rounded-xl"></div>
          <div className="absolute top-1/3 right-1/3 w-32 h-32 border-2 border-purple-200/20 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-pink-200/20 rotate-12 rounded-2xl"></div>
          
          {/* Simplified gradient orbs */}
          <div className="absolute top-1/5 right-1/5 w-64 h-64 bg-gradient-to-r from-indigo-300/5 to-purple-300/5 rounded-full filter blur-2xl"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with unique styling */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 backdrop-blur-sm border border-indigo-200/50 rounded-full px-6 py-2 mb-6 shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
            <span className="text-indigo-700 text-sm font-semibold tracking-wide uppercase">Strategic Partnerships</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="relative">Trusted Brand</span>
            <span className="text-indigo-600"> Partnerships</span>
          </motion.h2>
          
          <motion.p 
            className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We collaborate with industry pioneers to deliver cutting-edge fire protection solutions that exceed global safety standards and protect what matters most.
          </motion.p>
        </motion.div>
        
        {/* Simplified brands grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                  duration: 0.4, 
                  delay: index * 0.1
                }}
                onHoverStart={() => setHoveredBrand(index)}
                onHoverEnd={() => setHoveredBrand(null)}
              >
                <div 
                  className="relative h-full"
                  style={{
                    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  {/* Simplified card design */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 h-full relative overflow-hidden shadow-md border border-indigo-100/50">
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Logo */}
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 mr-3 relative bg-gradient-to-br from-white to-indigo-50 rounded-xl flex-shrink-0 border border-indigo-200/50 shadow-sm flex items-center justify-center">
                          <div className="relative w-12 h-12">
                            <Image
                              src={brand.logo}
                              alt={`${brand.name} logo`}
                              fill
                              className="object-contain p-1"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">{brand.name}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                        {brand.description}
                      </p>
                      
                      {/* Certifications */}
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">Certifications</h4>
                        <div className="flex flex-wrap gap-1">
                          {brand.certifications.map((cert, certIndex) => {
                            const Icon = brandIcons[cert].icon;
                            const color = brandIcons[cert].color;
                            return (
                              <div
                                key={certIndex}
                                className="flex items-center space-x-1 bg-indigo-50/50 px-2 py-1 rounded-lg border border-indigo-100/50"
                              >
                                <Icon className={`h-3 w-3 ${color}`} />
                                <span className="text-slate-600 text-xs">{cert}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Action button */}
                      <div className="pt-2">
                        <Button 
                          variant="outline"
                          className="w-full border-indigo-300 text-indigo-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:border-indigo-400 text-sm"
                        >
                          Explore Solutions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Simplified certification standards section */}
        <motion.div 
          className="bg-gradient-to-br from-white/90 to-indigo-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
            <div className="w-12 h-12 mr-4 relative mb-3 md:mb-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">Global Compliance Standards</h3>
              <p className="text-slate-600 text-sm">
                Our partnerships ensure adherence to the highest international safety standards.
              </p>
            </div>
          </div>
          
          {/* Simplified certification display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.keys(brandIcons).map((cert, index) => {
              const Icon = brandIcons[cert].icon;
              const color = brandIcons[cert].color;
              return (
                <div
                  key={cert}
                  className="flex flex-col items-center p-3 rounded-xl bg-white/50 border border-indigo-100/50"
                >
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-2">
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <span className="text-slate-700 text-xs font-medium text-center">{cert}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}