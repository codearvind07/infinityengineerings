'use client';

import React, { useEffect, useRef, useState, memo, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { X, Calendar, MapPin, Star, Flame, Users, Tag, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const MemoizedParticle = memo(({ style, particleKey }: { style: React.CSSProperties; particleKey: number }) => (
  <div
    key={particleKey}
    className="absolute rounded-full bg-white transition-all duration-300 will-change-transform"
    style={style}
  />
));
MemoizedParticle.displayName = 'MemoizedParticle';

// Glitter component for the glittering effect
const Glitter = memo(({ style, key }: { style: React.CSSProperties; key: number }) => (
  <div
    key={key}
    className="glitter-effect absolute rounded-full"
    style={style}
  />
));
Glitter.displayName = 'Glitter';

export default function ThreeDSphereSection(): JSX.Element {
  const sphereRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const rafRef = useRef<number>(0);
  const glitterContainerRef = useRef<HTMLDivElement>(null);
  
  // Check for low performance device
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  
  useEffect(() => {
    // Check if device is low performance
    // @ts-ignore
    const deviceMemory = navigator.deviceMemory || 0;
    const hardwareConcurrency = navigator.hardwareConcurrency || 0;
    setIsLowPerformance(deviceMemory < 2 || hardwareConcurrency < 4);
  }, []);

  // Handle window resize for responsive particle optimization
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create glittering effect
  const createGlitter = useCallback(() => {
    if (!glitterContainerRef.current || isLowPerformance) return;
    
    const glitterCount = 30;
    const newGlitters = [];
    
    for (let i = 0; i < glitterCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 70 + Math.random() * 130;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const size = 1 + Math.random() * 4;
      const delay = Math.random() * 3;
      const duration = parseFloat((1.8 + Math.random() * 2.2).toFixed(2));
      const hue = 217 + Math.random() * 20;
      const saturation = 85 + Math.random() * 15;
      const lightness = 65 + Math.random() * 25;
      const animationName = i % 2 === 0 ? 'glitter' : 'glitter-sparkle';
      
      newGlitters.push(
        <Glitter
          key={i}
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            width: `${size}px`,
            height: `${size}px`,
            animationName: animationName,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            background: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
            boxShadow: `0 0 ${size * 2.5}px ${size * 1.2}px hsla(${hue}, ${saturation}%, 70%, 0.4)`,
            opacity: 0,
            willChange: 'transform, opacity, box-shadow'
          }}
        />
      );
    }
    
    return newGlitters;
  }, [isLowPerformance]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !sphereRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    
    // Throttle mouse movement updates for better performance
    if (isLowPerformance) {
      // On low performance devices, update less frequently
      if (Math.abs(deltaX - mousePosition.x) < 0.01 && Math.abs(deltaY - mousePosition.y) < 0.01) {
        return;
      }
    }
    
    // Use requestAnimationFrame to optimize updates
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: deltaX, y: deltaY });
      
      if (sphereRef.current) {
        sphereRef.current.style.transform = `
          perspective(1000px)
          rotateY(${deltaX * 25}deg) 
          rotateX(${-deltaY * 15}deg) 
          translateZ(${isHovered ? 50 : 20}px)
          scale(${isHovered ? 1.05 : 1})
        `;
        // Optimize rendering
        sphereRef.current.style.willChange = 'transform';
      }
    });
  }, [isHovered, mousePosition, isLowPerformance]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    if (sphereRef.current) {
      sphereRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)';
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  // Optimize particle rendering with useMemo
  const backgroundParticles = useMemo(() => {
    // Reduce particle count for better performance on low-end devices
    const particleCount = isLowPerformance ? 2 : 4;
    return [...Array(particleCount)].map((_, i) => (
      <div
        key={i}
        className="absolute opacity-10 will-change-transform"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: isLowPerformance ? 'none' : `float ${6 + Math.random() * 4}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 4}s`
        }}
      >
        <div 
          className="w-2 h-2 border border-blue-300 rounded-full will-change-transform"
          style={{
            transform: `rotate(${Math.random() * 360}deg)`,
            boxShadow: `0 0 10px rgba(147, 197, 253, 0.2)`
          }}
        />
      </div>
    ));
  }, [isLowPerformance]);

  // Optimize particle dispersion with useMemo and memoized components
  const particleDispersion = useMemo(() => {
    // Reduce particle count for better performance on low-end devices and mobile
    const particleCount = isLowPerformance ? 30 : windowWidth < 768 ? 50 : 100;
    return [...Array(particleCount)].map((_, i) => {
      const angle = (i / particleCount) * 360;
      const baseRadius = 180;
      const disperseDistance = 80 + (i % 5) * 30;
      const x = Math.cos((angle * Math.PI) / 180) * (baseRadius + disperseDistance);
      const y = Math.sin((angle * Math.PI) / 180) * (baseRadius + disperseDistance);
      
      // Create perspective effect - dots get smaller as they move away
      const distance = Math.sqrt(x * x + y * y);
      const scale = Math.max(0.2, 1 - (distance - 180) / 400);
      const opacity = Math.max(0.1, 1 - (distance - 180) / 300);
      
      return (
        <MemoizedParticle
          key={i}
          particleKey={i}
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            width: `${2 * scale}px`,
            height: `${2 * scale}px`,
            opacity: opacity * (isHovered ? 0.9 : 0.7),
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
            boxShadow: `0 0 ${4 * scale}px rgba(255, 255, 255, ${opacity * 0.8})`,
            animation: isLowPerformance ? 'none' : `drift-0 ${8 + (i % 3) * 2}s linear infinite`,
            animationDelay: `${(i / particleCount) * 4}s`,
            willChange: 'transform'
          }}
        />
      );
    });
  }, [isHovered, isLowPerformance, windowWidth]);

  // Optimize flowing particles with useMemo and memoized components
  const flowingParticles = useMemo(() => {
    // Reduce particle count for better performance on low-end devices and mobile
    const particleCount = isLowPerformance ? 20 : windowWidth < 768 ? 35 : 75;
    return [...Array(particleCount)].map((_, i) => {
      const flowAngle = -45 + (i / particleCount) * 90; // Flow from left side
      const flowRadius = 160 + (i % 8) * 25;
      const x = Math.cos((flowAngle * Math.PI) / 180) * flowRadius;
      const y = Math.sin((flowAngle * Math.PI) / 180) * flowRadius;
      
      const distance = Math.abs(x) + Math.abs(y);
      const scale = Math.max(0.3, 1 - distance / 400);
      const opacity = Math.max(0.2, 1 - distance / 350);
      
      return (
        <MemoizedParticle
          key={1000 + i}  // Using offset to ensure unique keys between particleDispersion and flowingParticles
          particleKey={1000 + i}
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            width: `${1.5 * scale}px`,
            height: `${1.5 * scale}px`,
            opacity: opacity * (isHovered ? 0.8 : 0.6),
            transform: `translate(-50%, -50%)`,
            boxShadow: `0 0 ${3 * scale}px rgba(255, 255, 255, ${opacity * 0.6})`,
            animation: isLowPerformance ? 'none' : `flow-disperse ${6 + (i % 4)}s ease-out infinite`,
            animationDelay: `${(i / particleCount) * 3}s`,
            willChange: 'transform'
          }}
        />
      );
    });
  }, [isHovered, isLowPerformance, windowWidth]);

  // Create glittering effect
  const glitterEffect = useMemo(() => {
    if (isLowPerformance) return null;
    return createGlitter();
  }, [isLowPerformance, createGlitter]);

  // Create additional sparkle effects
  const sparkleEffect = useMemo(() => {
    if (isLowPerformance) return null;
    
    const sparkleCount = 10;
    const newSparkles = [];
    
    for (let i = 0; i < sparkleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 150 + Math.random() * 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      const size = 1 + Math.random() * 3;
      const delay = Math.random() * 3;
      const duration = 2 + Math.random() * 2;
      const hue = 217 + Math.random() * 20;
      
      newSparkles.push(
        <div
          key={`sparkle-${i}`}
          className="glitter-effect"
          style={{
            left: `calc(50% + ${x}px)`,
            top: `calc(50% + ${y}px)`,
            width: `${size}px`,
            height: `${size}px`,
            animation: `glitter-sparkle ${duration}s ease-in-out ${delay}s infinite`,
            animationDelay: `${delay}s`,
            background: `hsl(${hue}, 100%, 80%)`,
            boxShadow: `0 0 ${size * 3}px ${size * 1.5}px hsla(${hue}, 100%, 85%, 0.5)`,
            opacity: 0
          }}
        />
      );
    }
    
    return newSparkles;
  }, [isLowPerformance]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f1629] via-[#1a2332] to-[#0f1629] pt-20 md:pt-24"
    >
      {/* Dynamic background with mouse interaction */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out will-change-transform"
        style={{
          background: `
            radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
              rgba(59, 130, 246, 0.08) 0%, 
              rgba(147, 197, 253, 0.05) 30%, 
              rgba(30, 58, 138, 0.03) 60%, 
              transparent 100%),
            radial-gradient(circle at ${30 - mousePosition.x * 15}% ${70 - mousePosition.y * 15}%, 
              rgba(30, 58, 138, 0.1) 0%, 
              rgba(59, 130, 246, 0.05) 40%, 
              transparent 70%)
          `
        }}
      />

      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {backgroundParticles}
      </div>

      {/* Mobile optimized content container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content Panel - Mobile optimized */}
          <div className="w-full lg:w-1/2 py-8 md:py-12 lg:py-0">
            <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div className="mb-6">
                {/* Announcement text in one line with horizontal moving animation */}
                <div 
                  className="mb-4 overflow-hidden cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <div className="inline-block animate-marquee whitespace-nowrap">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-blue-300 hover:text-blue-200 transition-colors duration-300">
                      INFINITY ENGINEERINGS 8th EDITION FSIE FIRE & SECURITY INDIA EXPO | MEET & TALK | 11-13 SEPT 2025
                    </span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2">
                  <div className="text-blue-200 mb-2">INNOVATIVE FIRE</div>
                  <div className="text-slate-300 mb-2">PROTECTION</div>
                  <div className="bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent">
                    SYSTEMS
                  </div>
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent rounded-full animate-pulse mx-auto lg:mx-0" />
              </div>
              
              <p className="text-base sm:text-lg text-slate-300 mb-6 md:mb-8 leading-relaxed">
                Revolutionary fire safety solutions powered by cutting-edge technology and British engineering excellence. 
                Protecting lives and assets with innovative systems designed for the future.
              </p>
              
              <div className="space-y-4 mb-6 md:mb-8">
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" />
                    <span>CE Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" />
                    <span>1000+ Installations</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-12">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-slate-900 border-0"
                  style={{
                    background: 'linear-gradient(135deg, rgb(147, 197, 253) 0%, rgb(191, 219, 254) 100%)',
                    boxShadow: '0 8px 30px rgba(147, 197, 253, 0.4)'
                  }}
                >
                  Explore Solutions
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 text-white hover:bg-white/10"
                  style={{
                    borderColor: 'rgb(147, 197, 253)',
                    color: 'rgb(147, 197, 253)'
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>

          {/* Right 3D Design Panel - Mobile optimized */}
          <div className="w-full lg:w-1/2 flex justify-center py-8 md:py-12 lg:py-0">
            <div
              ref={sphereRef}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-700 ease-out"
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1200px'
              }}
            >
              {/* Revolutionary dotted sphere design */}
              <div className="absolute inset-0 rounded-full">
                {/* Glittering effect container with multiple glitter effects */}
                <div 
                  ref={glitterContainerRef}
                  className="absolute inset-0 rounded-full overflow-hidden will-change-transform"
                >
                  {glitterEffect}
                  {sparkleEffect}
                  {/* Additional glitter effects */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={`glitter-${i}`}
                      className="glitter-effect"
                      style={{
                        left: `${20 + (i * 7.5)}%`,
                        top: `${20 + (i * 8.3)}%`,
                        animation: i % 2 === 0 ? 'glitter 2s ease-in-out infinite' : 'glitter-sparkle 2.5s ease-in-out infinite',
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: `${2 + i * 0.2}s`,
                        background: `hsl(${217 + Math.random() * 20}, 100%, 80%)`
                      }}
                    />
                  ))}
                </div>
                
                {/* Main sphere with ultra-dense dotted pattern */}
                <div 
                  className="absolute inset-0 rounded-full backdrop-blur-sm border transition-all duration-500 will-change-transform"
                  style={{
                    background: `
                      radial-gradient(circle at 70% 30%, 
                        rgba(255, 255, 255, 0.25) 0%, 
                        rgba(147, 197, 253, 0.15) 30%, 
                        rgba(59, 130, 246, 0.08) 60%, 
                        transparent 100%)
                    `,
                    borderColor: isHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: `
                      0 0 80px rgba(255, 255, 255, ${isHovered ? '0.2' : '0.1'}),
                      0 0 160px rgba(147, 197, 253, ${isHovered ? '0.15' : '0.08'})
                    `
                  }}
                />
                
                {/* Ultra-dense core dotted pattern */}
                <div className="absolute inset-0 rounded-full overflow-hidden will-change-transform">
                  <div 
                    className="absolute inset-0 transition-opacity duration-500 will-change-transform"
                    style={{
                      background: `
                        radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.95) 0.8px, transparent 0.8px),
                        radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.95) 0.8px, transparent 0.8px)
                      `,
                      backgroundSize: '4px 4px, 6px 6px',
                      backgroundPosition: '0 0, 2px 2px',
                      maskImage: 'radial-gradient(circle, black 65%, transparent 85%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 85%)',
                      opacity: isHovered ? 0.9 : 0.8
                    }}
                  />
                </div>

                {/* Medium density outer ring */}
                <div className="absolute inset-0 rounded-full overflow-hidden will-change-transform">
                  <div 
                    className="absolute inset-0 transition-opacity duration-500 will-change-transform"
                    style={{
                      background: `
                        radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.7) 1px, transparent 1px)
                      `,
                      backgroundSize: '8px 8px',
                      backgroundPosition: '0 0',
                      maskImage: 'radial-gradient(circle, transparent 60%, black 65%, black 75%, transparent 85%)',
                      WebkitMaskImage: 'radial-gradient(circle, transparent 60%, black 65%, black 75%, transparent 85%)',
                      opacity: isHovered ? 0.8 : 0.7
                    }}
                  />
                </div>

                {/* Sparse outer dispersion */}
                <div className="absolute inset-0 rounded-full overflow-hidden will-change-transform">
                  <div 
                    className="absolute inset-0 transition-opacity duration-500 will-change-transform"
                    style={{
                      background: `
                        radial-gradient(circle at 3px 3px, rgba(255, 255, 255, 0.5) 1.2px, transparent 1.2px)
                      `,
                      backgroundSize: '16px 16px',
                      backgroundPosition: '0 0',
                      maskImage: 'radial-gradient(circle, transparent 70%, black 75%, black 85%, transparent 95%)',
                      WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 75%, black 85%, transparent 95%)',
                      opacity: isHovered ? 0.6 : 0.5
                    }}
                  />
                </div>

                {/* Dynamic highlight that follows mouse */}
                <div 
                  className="absolute inset-0 rounded-full transition-all duration-500 will-change-transform"
                  style={{
                    background: `
                      radial-gradient(circle at ${70 + mousePosition.x * 10}% ${30 + mousePosition.y * 10}%, 
                        rgba(255, 255, 255, 0.8) 0%, 
                        rgba(255, 255, 255, 0.4) 15%, 
                        rgba(147, 197, 253, 0.2) 30%, 
                        transparent 50%)
                    `,
                    filter: 'blur(2px)'
                  }}
                />

                {/* Particle dispersion effect - flowing away from sphere */}
                <div className="absolute inset-0 block">
                  {particleDispersion}
                </div>

                {/* Dense flowing particles from left side */}
                <div className="absolute inset-0 block">
                  {flowingParticles}
                </div>
                
                {/* Performance optimization hint */}
                <div className="absolute bottom-2 right-2 text-xs text-slate-500/30 hidden md:block">
                  {isLowPerformance ? 'Low performance mode' : 'High performance mode'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg">
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Close button */}
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-sphere-navy-dark/50 backdrop-blur-sm hover:bg-sphere-navy-medium/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sphere-blue-light border border-sphere-blue-light/30"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5 text-sphere-white" />
            </button>

            {/* Image container */}
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-sphere-navy-medium flex items-center justify-center">
              <Image
                src="/expo-announcement.png"
                alt="FSIE Fire & Security India Expo 2025 - Official Announcement"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = '/slider.jpg';
                }}
              />
            </div>

            {/* Image info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sphere-navy-dark/90 to-transparent p-6">
              <h2 className="text-2xl font-bold text-sphere-white mb-2">
                FSIE FIRE & SECURITY INDIA EXPO 2025
              </h2>
              <p className="text-sphere-blue-light font-semibold">
                8th Edition | September 11-13, 2025
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}