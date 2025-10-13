'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import slider from '../public/slider.jpg';
import slider1 from '../public/slider1.webp';
import slider2 from '../public/slider2.jpg';
import slider3 from '../public/slider3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { isLowPerformanceDevice, prefersReducedMotion } from '@/lib/performance';

interface Slide {
  url: StaticImageData;
  alt: string;
}

const sliderContent: Slide[] = [
  {
    url: slider,
    alt: 'Modern Building Safety Systems',
  },
  {
    url: slider1,
    alt: 'Commercial Fire Protection',
  },
  {
    url: slider2,
    alt: 'Advanced Safety Technology',
  },
  {
    url: slider3,
    alt: 'Architectural Safety Integration',
  },
];

export default function HeroSection(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isLowPerf = isLowPerformanceDevice();
  const prefersReducedMotionEnabled = prefersReducedMotion();

  useEffect(() => {
    if (!isLowPerf && !prefersReducedMotionEnabled) {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [isLowPerf, prefersReducedMotionEnabled]);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (!isLowPerf && !prefersReducedMotionEnabled) {
      stopAutoplay();
      intervalRef.current = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % sliderContent.length);
      }, 7000);
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % sliderContent.length);
    if (!isLowPerf && !prefersReducedMotionEnabled) {
      startAutoplay();
    }
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + sliderContent.length) % sliderContent.length);
    if (!isLowPerf && !prefersReducedMotionEnabled) {
      startAutoplay();
    }
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    if (!isLowPerf && !prefersReducedMotionEnabled) {
      startAutoplay();
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background text-white"
    >
      {/* Main Image Display Area - simplified for low performance */}
      <div className="absolute inset-0 z-0">
        {isLowPerf || prefersReducedMotionEnabled ? (
          // Simplified version for low performance devices
          <div className="absolute inset-0">
            <Image
              src={sliderContent[activeSlide].url}
              alt={sliderContent[activeSlide].alt}
              fill
              className="object-cover w-full h-full"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              quality={70}
            />
          </div>
        ) : (
          // Full animation version for high performance devices
          <AnimatePresence>
            <motion.div
              key={activeSlide}
              layoutId={`card-${activeSlide}`}
              className="absolute inset-0"
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <Image
                src={sliderContent[activeSlide].url}
                alt={sliderContent[activeSlide].alt}
                fill
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                quality={90}
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Navigation Arrows - simplified for low performance */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-20 p-3 rounded-full bg-black/20 text-white hover:bg-black/30 backdrop-blur-sm border border-white/20 shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-20 p-3 rounded-full bg-black/20 text-white hover:bg-black/30 backdrop-blur-sm border border-white/20 shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slider indicators - simplified for low performance */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
        {sliderContent.map((slide, index) => (
          isLowPerf || prefersReducedMotionEnabled ? (
            // Simplified version for low performance devices
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-10 rounded-md overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                index === activeSlide
                  ? 'border-white scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="relative w-full h-full">
                <Image src={slide.url} alt={`Thumbnail for ${slide.alt}`} fill className="object-cover" />
              </div>
            </button>
          ) : (
            // Full animation version for high performance devices
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-24 h-14 rounded-md overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                index === activeSlide
                  ? 'border-white scale-110'
                  : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div layoutId={`card-${index}`} className="relative w-full h-full">
                <Image src={slide.url} alt={`Thumbnail for ${slide.alt}`} fill className="object-cover" />
              </motion.div>
              {index === activeSlide && (
                <motion.div className="absolute bottom-0 left-0 h-1 bg-white" initial={{ width: '0%' }} animate={{ width: '100%' }} transition={{ duration: 7, ease: 'linear' }} />
              )}
            </motion.button>
          )
        ))}
      </div>
    </section>
  );
}