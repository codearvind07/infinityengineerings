'use client';

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import slider from '../public/slider.jpg';
import slider1 from '../public/slider1.jpg';
import slider2 from '../public/slider2.jpg';
import slider3 from '../public/slider3.avif';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sliderImages: { url: StaticImageData; alt: string }[] = [
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 7000); // Increased interval for better performance
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const activeSlide = sliderImages[currentSlide];

  // Simplified variants for slide animation
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image Slider with Framer Motion */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial={direction === 1 ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.url}
              alt={activeSlide.alt}
              fill
              className="object-cover" // Changed back to object-cover for full coverage
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
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

      {/* Slider indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative transition-all duration-300 ${
              index === currentSlide 
                ? 'w-3 h-3 bg-white rounded-full' 
                : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}