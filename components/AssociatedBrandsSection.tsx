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
              className="text-center mb-20"
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
            
            {/* Enhanced brands grid */}
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
                        <div className="relative z-10 p-7 h-full">
                          {/* Logo */}
                          <div className="flex items-center mb-5">
                            <div className="w-18 h-18 mr-4 relative bg-white rounded-xl flex-shrink-0 border border-gray-200/70 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
                              <div className="relative w-14 h-14">
                                <Image
                                  src={brand.logo}
                                  alt={`${brand.name} logo`}
                                  fill
                                  className="object-contain p-2"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 tracking-tight">{brand.name}</h3>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-600 mb-5 leading-relaxed text-sm font-light">
                            {brand.description}
                          </p>
                          
                          {/* Certifications */}
                          <div className="mb-5">
                            <h4 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2.5">Industry Certifications</h4>
                            <div className="flex flex-wrap gap-2">
                              {brand.certifications.map((cert, certIndex) => {
                                const Icon = brandIcons[cert].icon;
                                const color = brandIcons[cert].color;
                                return (
                                  <div
                                    key={certIndex}
                                    className="flex items-center space-x-1.5 bg-gray-50/80 px-2.5 py-1.5 rounded-lg border border-gray-200/60 hover:border-amber-200/50 transition-colors duration-200"
                                  >
                                    <Icon className={`h-3.5 w-3.5 ${color}`} />
                                    <span className="text-gray-700 text-xs font-medium">{cert}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          
                          {/* Action button */}
                          <div className="pt-3">
                            <Button 
                              variant="outline"
                              className="w-full border-2 border-amber-500/30 text-amber-700 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-yellow-500/10 hover:border-amber-500 hover:text-amber-800 text-sm font-medium py-2.5 rounded-xl transition-all duration-300"
                            >
                              Explore Partnership
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Enhanced certification standards section */}
            <motion.div 
              className="bg-gradient-to-br from-white/90 to-gray-50/60 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-gray-200/70"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8 pb-6 border-b border-gray-200/50">
                <div className="w-14 h-14 mr-5 relative mb-4 md:mb-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShieldCheck className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">Global Compliance Excellence</h3>
                  <p className="text-gray-600 text-base font-light max-w-2xl">
                    Our strategic partnerships ensure adherence to the highest international safety standards, with all products rigorously tested and certified by leading global authorities.
                  </p>
                </div>
              </div>
              
              {/* Enhanced certification display */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {Object.keys(brandIcons).map((cert, index) => {
                  const Icon = brandIcons[cert].icon;
                  const color = brandIcons[cert].color;
                  return (
                    <motion.div
                      key={cert}
                      className="flex flex-col items-center p-5 rounded-2xl bg-white/60 border border-gray-200/60 hover:border-indigo-200/80 transition-all duration-300 hover:shadow-sm"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-3 border border-gray-200/70 shadow-sm">
                        <Icon className={`h-6 w-6 ${color}`} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium text-center leading-tight">{cert}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/70 to-transparent" />
    </div>
  );
}