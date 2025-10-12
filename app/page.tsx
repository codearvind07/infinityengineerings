'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/FeaturesSection';
import FeaturedProductsSection from '@/components/FeaturedProductsSection';
import ContactSection from '@/components/ContactSection';
import AboutSection from '@/components/AboutSection';
import AssociatedBrandsSection from '@/components/AssociatedBrandsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';



const SectorsPage = dynamic(() => import('./sectors/page'), {
  ssr: false,
  loading: () => (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
            <div className="h-16 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-16 bg-muted rounded w-2/3 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <main className="min-h-screen indigo-purple-gradient-light relative">
      {/* Light background particles - reduced for better performance */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sphere-blue-light rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-sphere-blue-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-sphere-blue-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <Header />      
      <HeroSection />
     
      <AboutSection />
      
      <Suspense fallback={
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
                <div className="h-16 bg-muted rounded w-3/4 mx-auto"></div>
                <div className="h-16 bg-muted rounded w-2/3 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <AssociatedBrandsSection />
      </Suspense>
      
      <Suspense fallback={
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
                <div className="h-16 bg-muted rounded w-3/4 mx-auto"></div>
                <div className="h-96 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      }>
        <SectorsPage />
      </Suspense>
      
      <FeaturesSection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}