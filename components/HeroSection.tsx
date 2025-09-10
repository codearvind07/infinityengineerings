'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import slider from '../public/slider.jpg';
import slider1 from '../public/slider1.jpg';
import slider2 from '../public/slider2.jpg';
import slider3 from '../public/slider3.avif';
import anno from '../public/FSIE Expo Meet & Talk Announcement.png';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Link from 'next/link';

const sliderImages: { url: StaticImageData; alt: string; title: string; subtitle: string }[] = [
  {
    url: slider,
    alt: 'Modern Building Safety Systems',
    title: "India's Premier Fire Protection Specialists",
    subtitle: 'Authorized distributor of COOPERS FIRE UK - bringing world-class fire curtain technology to India.',
  },
  {
    url: slider1,
    alt: 'Commercial Fire Protection',
    title: "Comprehensive Fire Safety Solutions",
    subtitle: 'Tailored systems for Indian commercial buildings, hospitals, and industrial facilities.',
  },
  {
    url: slider2,
    alt: 'Advanced Safety Technology',
    title: "British Engineering Excellence",
    subtitle: 'Over 15 years of delivering cutting-edge fire curtain systems across India.',
  },
  {
    url: slider3,
    alt: 'Architectural Safety Integration',
    title: "Seamless Architectural Integration",
    subtitle: 'Fire safety solutions that complement Indian architectural designs and building codes.',
  },
];

export default function HeroSection(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpoDialogOpen, setIsExpoDialogOpen] = useState(false);
  const [isHoverPopupOpen, setIsHoverPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = sliderImages[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-foreground overflow-hidden bg-[#0c101a]"
      style={{ fontFamily: 'sans-serif' }}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeSlide.url}
          alt={activeSlide.alt}
          fill
          className="object-cover transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-sphere-navy-dark/30 via-transparent to-sphere-navy-dark/30" />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-sphere-white">
            {activeSlide.title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sphere-blue-light to-sphere-blue-light/50 mx-auto rounded-full animate-pulse" />
        </div>
        
        <p className="text-xl md:text-2xl text-sphere-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
          {activeSlide.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/products">
            <Button size="lg" className="bg-sphere-blue-light hover:bg-sphere-blue-light/90 text-sphere-navy-dark text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Explore Our Solutions
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-sphere-blue-light text-sphere-white hover:bg-sphere-blue-light/20 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-sphere-navy-dark/50">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-gradient-to-r from-sphere-blue-light to-sphere-blue-light/70 rounded-full animate-pulse' 
                : 'w-3 h-3 bg-sphere-white/50 rounded-full hover:bg-sphere-blue-light/70 hover:scale-125'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-r from-sphere-blue-light to-sphere-blue-light/70 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}