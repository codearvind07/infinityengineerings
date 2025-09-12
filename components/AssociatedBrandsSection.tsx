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
  'UL Listed': { icon: Award, color: 'text-fire-red' },
  'FM Approved': { icon: Globe, color: 'text-energy-orange' },
  'CE Marked': { icon: CheckCircle, color: 'text-safety-blue' },
  'NFPA Compliant': { icon: Star, color: 'text-tech-teal' },
  'ISO 9001': { icon: Zap, color: 'text-premium-gold' },
  'ASFP Member': { icon: ShieldCheck, color: 'text-fire-red' },
  'CFPA-E Approved': { icon: Users, color: 'text-energy-orange' },
  'BSI Certified': { icon: Building, color: 'text-safety-blue' }
};

export default function AssociatedBrandsSection() {
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);

  return (
    <section id="associated-brands" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-fire-red/10 to-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-fire-red/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-gradient-to-r from-fire-red/10 to-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Our Partners</span>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We partner with global leaders in fire protection technology to bring you the most advanced safety solutions that meet international standards.
          </motion.p>
        </motion.div>
        
        {/* Brands grid */}
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredBrand(index)}
                onHoverEnd={() => setHoveredBrand(null)}
              >
                <div 
                  className="relative h-full"
                  style={{
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'transform 0.3s ease-out',
                    zIndex: isHovered ? 10 : 1
                  }}
                >
                  {/* Glassmorphism card */}
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 h-full relative overflow-hidden gold-interactive">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-fire-red/5 rounded-full mix-blend-multiply filter blur-3xl" 
                      style={{
                        opacity: isHovered ? 0.7 : 0.3,
                        transition: 'opacity 0.3s ease-out'
                      }}
                    />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-500/5 rounded-full mix-blend-multiply filter blur-3xl"
                      style={{
                        opacity: isHovered ? 0.7 : 0.3,
                        transition: 'opacity 0.3s ease-out'
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Logo */}
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 mr-4 relative bg-white rounded-md flex-shrink-0 border border-white/20">
                          <Image
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            layout="fill"
                            className="object-contain p-2"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              // You can add a fallback content here if needed
                            }}
                          />
                        </div>
                        <h3 className="text-2xl font-bold text-gold-platinum">{brand.name}</h3>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gold-platinum/80 mb-6">
                        {brand.description}
                      </p>
                      
                      {/* Certifications */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {brand.certifications.map((cert, certIndex) => {
                          const Icon = brandIcons[cert].icon;
                          const color = brandIcons[cert].color;
                          return (
                            <div key={certIndex} className="flex items-center space-x-2">
                              <Icon className={`h-4 w-4 ${color}`} />
                              <span className="text-gold-platinum/70 text-sm">{cert}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Action button */}
                      <div className="pt-2">
                        <Button 
                          variant="outline"
                          className="border-gold-primary/30 text-gold-platinum hover:bg-gold-primary/10 hover:border-gold-primary/50"
                        >
                          View Products
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Certification standards section */}
        <motion.div 
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 mr-4 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-fire-red/20 to-orange-500/20 rounded-full animate-ping"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Star className="h-6 w-6 text-fire-red" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gold-platinum">Certifications & Standards</h3>
          </div>
          
          <p className="text-gold-platinum/80 mb-6">
            Our partners adhere to the highest international safety standards, ensuring your building meets all fire protection requirements.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.keys(brandIcons).map((cert, index) => {
              const Icon = brandIcons[cert].icon;
              const color = brandIcons[cert].color;
              return (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <Icon className={`h-5 w-5 ${color}`} />
                  <span className="text-gold-platinum/80 text-sm">{cert}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}