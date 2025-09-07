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

// Define slider images outside the component to prevent re-creation on every render.
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

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Increased interval for better user experience
    return () => clearInterval(interval);
  }, []);

  const activeSlide = sliderImages[currentSlide];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-foreground overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-r from-gold-dark/20 via-transparent to-gold-dark/20" />
      </div>

      {/* Event Banner - Hover popup and clickable with scrolling text */}
      <Popover open={isHoverPopupOpen} onOpenChange={setIsHoverPopupOpen}>
        <PopoverTrigger asChild>
          <Dialog open={isExpoDialogOpen} onOpenChange={setIsExpoDialogOpen}>
            <DialogTrigger asChild>
              <div 
                className="absolute top-32 left-1/2 transform -translate-x-1/2 w-[70%] z-20 overflow-hidden rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl" 
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--fire-red)/0.9) 0%, hsl(var(--fire-red)/0.7) 100%)',
                  border: '1px solid hsl(var(--fire-red)/0.5)',
                  backdropFilter: 'blur(4px)'
                }}
                onMouseEnter={() => setIsHoverPopupOpen(true)}
                onMouseLeave={() => setIsHoverPopupOpen(false)}
              >
                <div className="whitespace-nowrap inline-block px-6 py-3 text-white text-sm md:text-base font-bold tracking-wider animate-marquee" style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}>
                  INFINITY ENGINEERINGS 8th EDITION FSIE FIRE & SECURITY INDIA EXPO | MEET & TALK | 11-13 SEPT 2025 | CLICK HERE FOR MORE DETAILS
                </div>
              </div>
            </DialogTrigger>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
          <div className="space-y-6">
            {/* Featured Full Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={anno}
                alt="FSIE Fire & Security India Expo 2025 - Official Announcement"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold gold-glow-text mb-4">
                FSIE FIRE & SECURITY INDIA EXPO 2025
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                8th Edition | September 11-13, 2025
              </p>
            </div>
                
          </div>
        </DialogContent>
      </Dialog>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0 border-0 bg-transparent shadow-2xl" side="bottom" align="center">
        <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-gold-primary/30 rounded-2xl p-6 shadow-2xl">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold gold-glow-text mb-2">
              🔥 LATEST EXPO ANNOUNCEMENT 🔥
            </h3>
            <div className="w-16 h-1 gold-gradient mx-auto rounded-full animate-gold-pulse mb-3" />
          </div>
                
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gold-deep/30 border border-gold-primary/20">
              <div className="w-2 h-2 bg-fire-red rounded-full animate-pulse"></div>
              <div>
                <p className="text-gold-light font-semibold">📅 Sept 11-13, 2025</p>
                <p className="text-muted-foreground text-xs">India Expo Centre, Greater Noida</p>
              </div>
            </div>
                  
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gold-deep/30 border border-gold-primary/20">
              <div className="w-2 h-2 bg-energy-orange rounded-full animate-pulse"></div>
              <div>
                <p className="text-gold-light font-semibold">🏢 Booth 6A-101</p>
                <p className="text-muted-foreground text-xs">Hall 6 & 7 | 10 AM - 6 PM</p>
              </div>
            </div>
                  
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gold-deep/30 border border-gold-primary/20">
              <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
              <div>
                <p className="text-gold-light font-semibold">🎯 Live Demos Available</p>
                <p className="text-muted-foreground text-xs">Expert consultations & exclusive offers</p>
              </div>
            </div>
          </div>
                
          <div className="mt-4 pt-3 border-t border-gold-primary/20 text-center">
            <p className="text-xs text-gold-champagne opacity-80">
              💡 Click banner for complete details
            </p>
          </div>
        </div>
      </PopoverContent>
    </Popover>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 gold-glow-text">
            {activeSlide.title}
          </h1>
          <div className="w-24 h-1 gold-gradient mx-auto rounded-full animate-gold-pulse" />
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          {activeSlide.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/products">
            <Button size="lg" className="gold-button text-lg px-8 py-4 rounded-full font-semibold gold-interactive">
              Explore Our Solutions
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="gold-border-glow text-lg px-8 py-4 rounded-full font-semibold gold-interactive bg-gold-deep/50 text-gold-platinum hover:bg-gold-primary/20">
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
            className={`relative transition-all duration-500 gold-interactive ${
              index === currentSlide 
                ? 'w-12 h-3 gold-gradient rounded-full animate-gold-glow' 
                : 'w-3 h-3 bg-gold-platinum/50 rounded-full hover:bg-gold-primary/70 hover:scale-125'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 gold-gradient rounded-full animate-gold-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}