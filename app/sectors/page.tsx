'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import cer from '@/public/certain.jpg';
export default function SectorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="bg-sphere-navy-dark/50 border border-sphere-blue-light/30 rounded-full px-6 py-2">
              <span className="text-sphere-blue-light font-semibold">SECTORS</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-sphere-white mb-8 max-w-3xl mx-auto leading-tight">
            Fire Protection <span className="text-sphere-blue-light">Solutions</span> for Every Building
          </h1>
          
          {/* Content */}
          <div className="space-y-6 text-sphere-white/80 text-xl max-w-3xl mx-auto mb-16">
            <p>
              At Infinity Engineerings, we&apos;ve developed a wide range of fire curtains and smoke curtains to protect every type of building.
            </p>
            <p>
              No matter what your sector, whether it&apos;s a fire curtain for a domestic house or a smoke curtain for a tall building, we have a fire safety solution approved to protect.
            </p>
          </div>
          
          {/* Image */}
          <div className="my-16">
            <div className="bg-sphere-navy-dark/50 border border-sphere-blue-light/30 rounded-2xl overflow-hidden mx-auto max-w-4xl shadow-2xl">
              <Image 
                src={cer}
                alt="Fire and smoke curtain protection system in commercial building"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Button className="bg-sphere-blue-light hover:bg-sphere-blue-light/90 text-sphere-navy-dark px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sphere-blue-light/20">
              Explore Sectors
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}