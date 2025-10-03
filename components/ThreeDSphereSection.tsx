'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { prefersReducedMotion, isLowPerformanceDevice } from '@/lib/performance';

export default function ThreeDSphereSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isHouseHovered, setIsHouseHovered] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  
  useEffect(() => {
    // Check device performance and motion preferences
    setIsLowPerformance(isLowPerformanceDevice());
    setReduceMotion(prefersReducedMotion());
    
    // Throttle mouse movement updates for better performance
    let throttleTimer: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      if (reduceMotion || isLowPerformance) return;
      
      // Throttle mouse updates to improve performance
      if (throttleTimer) return;
      
      throttleTimer = setTimeout(() => {
        if (!containerRef.current) {
          clearTimeout(throttleTimer);
          return;
        }
        
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({ 
          x: (e.clientX - centerX) / rect.width, 
          y: (e.clientY - centerY) / rect.height 
        });
        
        clearTimeout(throttleTimer);
        throttleTimer = null as any;
      }, 16); // ~60fps
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [reduceMotion, isLowPerformance]);

  // Reduce particle count for low performance devices
  const particleCount = isLowPerformance ? 5 : 15;

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Enhanced professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"></div>
      
      {/* Additional professional gradient layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-slate-200/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-200/10 via-transparent to-slate-300/10"></div>
      
      {/* Dynamic interactive background with mouse interaction - only on high-performance devices */}
      {!reduceMotion && !isLowPerformance && (
        <div 
          className="absolute inset-0 transition-all duration-1000 ease-out will-change-transform"
          style={{
            background: `
              radial-gradient(ellipse at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, 
                rgba(59, 130, 246, 0.25) 0%, 
                rgba(147, 197, 253, 0.18) 30%, 
                rgba(30, 58, 138, 0.1) 60%, 
                transparent 100%),
              radial-gradient(ellipse at ${30 - mousePosition.x * 15}% ${70 - mousePosition.y * 15}%, 
                rgba(30, 58, 138, 0.25) 0%, 
                rgba(59, 130, 246, 0.18) 40%, 
                transparent 70%),
              radial-gradient(ellipse at ${70 + mousePosition.x * 10}% ${20 + mousePosition.y * 10}%, 
                rgba(29, 78, 216, 0.15) 0%, 
                rgba(96, 165, 250, 0.08) 50%, 
                transparent 80%)
            `
          }}
        />
      )}
      
      {/* Subtle animated gradient overlay - reduced for low performance */}
      <div className="absolute inset-0 opacity-30">
        {!reduceMotion && !isLowPerformance ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-40 animate-pulse" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-slate-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-200 rounded-full mix-blend-soft-light filter blur-3xl opacity-50 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"></div>
            <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-slate-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"></div>
            <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-blue-200 rounded-full mix-blend-soft-light filter blur-3xl opacity-25"></div>
          </>
        )}
      </div>

      {/* Enhanced floating particles - reduced count for low performance */}
      {!reduceMotion && (
        [...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
            animate={
              !isLowPerformance ? {
                y: [0, -(Math.random() * 40 + 20), 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, Math.random() * 0.4 + 0.2, 0.2],
                scale: [1, Math.random() * 0.5 + 0.8, 1],
              } : {
                y: [0, -(Math.random() * 20 + 10), 0],
                opacity: [0.1, Math.random() * 0.2 + 0.1, 0.1],
              }
            }
            transition={
              !isLowPerformance ? {
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              } : {
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }
            }
          />
        ))
      )}

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content Panel */}
          <div className="w-full lg:w-1/2 py-8 md:py-12 lg:py-0">
            <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div className="mb-6">
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-blue-800 mb-2">INNOVATIVE FIRE</div>
                  <div className="text-slate-800 mb-2">PROTECTION</div>
                  <div className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                    SYSTEMS
                  </div>
                </motion.h1>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full mx-auto lg:mx-0"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
              
              <motion.p 
                className="text-base sm:text-lg text-slate-700 mb-6 md:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Revolutionary fire safety solutions powered by cutting-edge technology and British engineering excellence. 
                Protecting lives and assets with innovative systems designed for the future.
              </motion.p>
              
              <motion.div 
                className="space-y-4 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-blue-600 rounded-full"
                      animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
                      transition={reduceMotion ? {} : { duration: 2, repeat: Infinity }}
                    />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-slate-700 rounded-full"
                      animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
                      transition={reduceMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.3 }}
                    />
                    <span>CE Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
                      transition={reduceMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                    <span>15+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-2 h-2 bg-slate-600 rounded-full"
                      animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
                      transition={reduceMotion ? {} : { duration: 2, repeat: Infinity, delay: 0.9 }}
                    />
                    <span>1000+ Installations</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button 
                  className="w-full sm:w-auto relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-white border-0"
                  style={{
                    background: 'linear-gradient(135deg, rgb(37, 99, 235) 0%, rgb(29, 78, 216) 100%)',
                    boxShadow: '0 8px 30px rgba(37, 99, 235, 0.4)'
                  }}
                  whileHover={reduceMotion ? {} : { scale: 1.05, boxShadow: '0 12px 35px rgba(37, 99, 235, 0.5)' }}
                  whileTap={reduceMotion ? {} : { scale: 0.95 }}
                >
                  Explore Solutions
                </motion.button>
                <motion.button 
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border-2 text-blue-700 hover:bg-blue-50"
                  style={{
                    borderColor: 'rgb(37, 99, 235)',
                    color: 'rgb(29, 78, 216)'
                  }}
                  whileHover={reduceMotion ? {} : { scale: 1.05, backgroundColor: 'rgb(239, 246, 255)' }}
                  whileTap={reduceMotion ? {} : { scale: 0.95 }}
                >
                  Get Quote
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Right Panel - Beautiful Front-View House with Enhanced Design */}
          <div className="w-full lg:w-1/2 flex justify-center py-8 md:py-12 lg:py-0">
            <div 
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
              onMouseEnter={() => !reduceMotion && !isLowPerformance && setIsHouseHovered(true)}
              onMouseLeave={() => !reduceMotion && !isLowPerformance && setIsHouseHovered(false)}
            >
              {/* Beautiful Front-View House with Enhanced Design */}
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                {/* Enhanced Roof with Decorative Elements */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  {/* Main roof */}
                  <div className="w-40 h-20 md:w-56 md:h-24 bg-gradient-to-r from-red-800 via-red-700 to-red-800 rounded-t-lg shadow-lg"></div>
                  {/* Roof peak */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[70px] border-l-transparent border-b-[40px] border-b-red-900 border-r-[70px] border-r-transparent"></div>
                  {/* Roof shine */}
                  <div className="absolute top-2 left-6 w-1/3 h-6 bg-red-600 rounded-full opacity-30"></div>
                  {/* Roof edges */}
                  <div className="absolute -bottom-1 -left-2 w-6 h-4 bg-red-900 rounded-br-full"></div>
                  <div className="absolute -bottom-1 -right-2 w-6 h-4 bg-red-900 rounded-bl-full"></div>
                  {/* Decorative chimney */}
                  <div className="absolute -top-8 right-8 w-6 h-12 bg-gradient-to-b from-gray-700 to-gray-800 rounded-t-md">
                    <div className="absolute top-0 left-1 w-4 h-2 bg-gray-600 rounded-t-sm"></div>
                  </div>
                </div>
                
                {/* Enhanced House Body with Decorative Details */}
                <div className="absolute top-4 inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 border-2 border-gray-200 rounded-b-lg shadow-xl">
                  {/* Decorative window frames with shine */}
                  <div className="absolute top-8 left-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded shadow-md"></div>
                  <div className="absolute top-8 right-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded shadow-md"></div>
                  <div className="absolute top-24 left-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded shadow-md"></div>
                  <div className="absolute top-24 right-6 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded shadow-md"></div>
                  
                  {/* Window panes for realism */}
                  <div className="absolute top-11 left-9 w-2 h-2 md:w-3 md:h-3 bg-blue-300 rounded-full"></div>
                  <div className="absolute top-11 right-9 w-2 h-2 md:w-3 md:h-3 bg-blue-300 rounded-full"></div>
                  <div className="absolute top-27 left-9 w-2 h-2 md:w-3 md:h-3 bg-blue-300 rounded-full"></div>
                  <div className="absolute top-27 right-9 w-2 h-2 md:w-3 md:h-3 bg-blue-300 rounded-full"></div>
                  
                  {/* Enhanced Door with Details */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-24 md:w-20 md:h-32 bg-gradient-to-b from-amber-800 via-amber-700 to-amber-900 border-2 border-amber-800 rounded-t-lg shadow-lg">
                    {/* Door handle */}
                    <div className="absolute top-4 left-4 w-3 h-3 md:w-4 md:h-4 bg-amber-200 rounded-full shadow"></div>
                    {/* Door panel lines */}
                    <div className="absolute top-8 left-2 w-12 h-0.5 bg-amber-900 rounded"></div>
                    <div className="absolute top-12 left-2 w-12 h-0.5 bg-amber-900 rounded"></div>
                    {/* Door step */}
                    <div className="absolute -bottom-2 -left-2 w-20 h-2 bg-amber-900 rounded-b-lg"></div>
                    {/* Door shine effect */}
                    <div className="absolute top-2 left-2 w-6 h-16 bg-amber-600 rounded opacity-20"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 left-4 w-3 h-3 bg-blue-200 rounded-full opacity-50"></div>
                  <div className="absolute top-2 right-4 w-3 h-3 bg-blue-200 rounded-full opacity-50"></div>
                  {/* Decorative shutters */}
                  <div className="absolute top-8 left-0 w-2 h-10 bg-gradient-to-r from-amber-700 to-amber-800 rounded-r-md shadow-md"></div>
                  <div className="absolute top-8 right-0 w-2 h-10 bg-gradient-to-l from-amber-700 to-amber-800 rounded-l-md shadow-md"></div>
                </div>
                
                {/* Enhanced Curtain Dropdown with Beautiful Details - Framer Motion Animation */}
                {!reduceMotion && !isLowPerformance && (
                  <motion.div 
                    className="absolute top-4 inset-0 origin-top rounded-b-lg"
                    animate={{ 
                      height: isHouseHovered ? '92%' : '0%' 
                    }}
                    transition={{ 
                      duration: 1.5, 
                      ease: "easeInOut" 
                    }}
                  >
                    {/* Beautiful curtain with gradient and texture */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-b-lg shadow-2xl">
                      {/* Curtain header band */}
                      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-red-700 to-red-800 rounded-t-lg"></div>
                      
                      {/* Decorative curtain pleats */}
                      <div className="absolute inset-0 flex">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className="flex-1 border-r border-red-800 last:border-r-0">
                            {/* Subtle pleat texture */}
                            <div className="w-full h-full bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-20"></div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Elegant curtain tassels */}
                      <div className="absolute bottom-0 left-0 right-0 h-6 flex justify-around">
                        {[...Array(15)].map((_, i) => (
                          <div key={i} className="w-2 h-5 bg-gradient-to-b from-red-800 to-red-900 rounded-b-full shadow"></div>
                        ))}
                      </div>
                      
                      {/* Curtain shine effect for depth */}
                      <div className="absolute top-8 left-1/3 w-1/4 h-3/4 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-30 rounded-b-lg"></div>
                      {/* Curtain pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="grid grid-cols-4 grid-rows-6 h-full">
                          {[...Array(24)].map((_, i) => (
                            <div key={i} className="border border-red-900 rounded-sm m-0.5"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Enhanced Ground with Decorative Elements */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-72 h-8">
                {/* Main ground */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-800 rounded-full shadow-xl"></div>
                {/* Ground highlight */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-40 rounded-full"></div>
                {/* Decorative grass elements */}
                <div className="absolute -top-2 left-1/4 w-2 h-4 bg-green-400 rounded-t-full"></div>
                <div className="absolute -top-3 left-2/4 w-3 h-5 bg-green-300 rounded-t-full"></div>
                <div className="absolute -top-2 left-3/4 w-2 h-4 bg-green-400 rounded-t-full"></div>
                {/* Ground shadow */}
                <div className="absolute -bottom-1 left-1/3 w-24 h-2 bg-green-900 rounded-full opacity-30"></div>
              </div>
              
              {/* Decorative ambient elements */}
              <div className="absolute -top-16 -left-16 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
              
              {/* Floating animation for the house - only on high-performance devices */}
              {!reduceMotion && !isLowPerformance && (
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            {/* Close button */}
            <motion.button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-200/50"
              aria-label="Close dialog"
              whileHover={reduceMotion ? {} : { scale: 1.1 }}
              whileTap={reduceMotion ? {} : { scale: 0.9 }}
            >
              <X className="h-5 w-5 text-blue-800" />
            </motion.button>

            {/* Image container */}
            <motion.div 
              className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-white flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>

            {/* Image info overlay */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                FSIE FIRE & SECURITY INDIA EXPO 2025
              </h2>
              <p className="text-blue-200 font-semibold">
                8th Edition | September 11-13, 2025
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}