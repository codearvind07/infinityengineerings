'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import slider from '../public/slider.jpg';
import slider1 from '../public/slider1.jpg';
import slider2 from '../public/slider2.jpg';
import slider3 from '../public/slider3.avif';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define slider images outside the component to prevent re-creation on every render.
const sliderImages: { url: StaticImageData; alt: string; title: string; subtitle: string }[] = [
  {
    url: slider,
    alt: 'Modern Building Safety Systems',
    title: 'Innovative Fire & Smoke Safety Solutions',
    subtitle: 'Protecting lives and assets with cutting-edge technology.',
  },
  {
    url: slider1,
    alt: 'Commercial Fire Protection',
    title: 'Comprehensive Commercial Protection',
    subtitle: 'Tailored systems for businesses of all sizes.',
  },
  {
    url: slider2,
    alt: 'Advanced Safety Technology',
    title: 'Advanced Safety, Unmatched Reliability',
    subtitle: 'Integrating smart technology for proactive safety.',
  },
  {
    url: slider3,
    alt: 'Architectural Safety Integration',
    title: 'Seamless Architectural Integration',
    subtitle: 'Safety systems that complement your design.',
  },
];

export default function HeroSection(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Increased interval for better user experience
    return () => clearInterval(interval);
  }, []);

  const activeSlide = sliderImages[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden text-foreground">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((image, index) => (
          <Image
            key={index}
            src={image.url}
            alt={image.alt}
            fill
            priority={index === 0} // Prioritize loading the first image for LCP
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        {/* Enhanced gradient overlay for better text visibility with vibrant colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-fire-red/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
          {activeSlide.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          {activeSlide.subtitle}
        </p>
        <Link href="/products">
        <Button size="lg" className="bg-fire-red hover:bg-fire-red/90 text-foreground border border-fire-red/50 shadow-lg shadow-fire-red/20 hover:shadow-fire-red/40 transition-all duration-300 transform hover:scale-105">
          Explore Our Solutions 
        </Button>
      </Link>
      </div>

      {/* Slider indicators with vibrant colors */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-fire-red w-8' 
                : 'bg-gray-600 hover:bg-fire-red/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}