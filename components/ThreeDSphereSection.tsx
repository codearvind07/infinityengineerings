'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ThreeDSphereSection(): JSX.Element {
  const sphereRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const sphere = sphereRef.current;
    const container = containerRef.current;
    if (!sphere || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      setMousePosition({ x: deltaX, y: deltaY });
      
      sphere.style.transform = `
        perspective(1000px)
        rotateY(${deltaX * 25}deg) 
        rotateX(${-deltaY * 15}deg) 
        translateZ(${isHovered ? 50 : 20}px)
        scale(${isHovered ? 1.05 : 1})
      `;
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      sphere.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)';
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isHovered]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0f1629] via-[#1a2332] to-[#0f1629]"
    >
      {/* Dynamic background with mouse interaction */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
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
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            <div 
              className="w-2 h-2 border border-blue-300 rounded-full"
              style={{
                transform: `rotate(${Math.random() * 360}deg)`,
                boxShadow: `0 0 10px rgba(147, 197, 253, 0.2)`
              }}
            />
          </div>
        ))}
      </div>

      {/* Left Content Panel */}
      <div className="absolute left-0 top-0 h-full w-full lg:w-1/2 flex items-center justify-center lg:justify-start z-10">
        <div className="text-center lg:text-left lg:ml-16 xl:ml-24 max-w-lg px-8 lg:px-0">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
              <div className="mb-2 text-white">INNOVATIVE</div>
              <div className="text-blue-200 mb-2">FIRE</div>
              <div className="text-slate-300 mb-2">PROTECTION</div>
              <div className="bg-gradient-to-r from-blue-200 via-slate-200 to-white bg-clip-text text-transparent">
                SYSTEMS
              </div>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-slate-300 rounded-full animate-pulse mx-auto lg:mx-0" />
          </div>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Revolutionary fire safety solutions powered by cutting-edge technology and British engineering excellence. 
            Protecting lives and assets with innovative systems designed for the future.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse" />
                <span>CE Compliant</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-slate-400">
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
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="relative overflow-hidden px-8 py-4 rounded-full font-semibold text-slate-900 border-0"
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
              className="px-8 py-4 rounded-full font-semibold border-2 text-white hover:bg-white/10"
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

      {/* Right 3D Design Panel */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 flex items-center justify-center lg:justify-end z-20">
        <div className="lg:mr-16 xl:mr-24">
          <div
            ref={sphereRef}
            className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem] transition-all duration-700 ease-out"
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: '1200px'
            }}
          >
            {/* Revolutionary dotted sphere design */}
            <div className="absolute inset-0 rounded-full">
              {/* Main sphere with ultra-dense dotted pattern */}
              <div 
                className="absolute inset-0 rounded-full backdrop-blur-sm border transition-all duration-500"
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
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
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
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
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
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
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
                className="absolute inset-0 rounded-full transition-all duration-500"
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
              <div className="absolute inset-0">
                {[...Array(200)].map((_, i) => {
                  const angle = (i / 200) * 360;
                  const baseRadius = 180;
                  const disperseDistance = 80 + (i % 5) * 30;
                  const x = Math.cos((angle * Math.PI) / 180) * (baseRadius + disperseDistance);
                  const y = Math.sin((angle * Math.PI) / 180) * (baseRadius + disperseDistance);
                  
                  // Create perspective effect - dots get smaller as they move away
                  const distance = Math.sqrt(x * x + y * y);
                  const scale = Math.max(0.2, 1 - (distance - 180) / 400);
                  const opacity = Math.max(0.1, 1 - (distance - 180) / 300);
                  
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full bg-white transition-all duration-300"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        width: `${2 * scale}px`,
                        height: `${2 * scale}px`,
                        opacity: opacity * (isHovered ? 0.9 : 0.7),
                        transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
                        boxShadow: `0 0 ${4 * scale}px rgba(255, 255, 255, ${opacity * 0.8})`,
                        animation: `drift-${i % 3} ${8 + (i % 3) * 2}s linear infinite`,
                        animationDelay: `${(i / 200) * 4}s`
                      }}
                    />
                  );
                })}
              </div>

              {/* Dense flowing particles from left side */}
              <div className="absolute inset-0">
                {[...Array(150)].map((_, i) => {
                  const flowAngle = -45 + (i / 150) * 90; // Flow from left side
                  const flowRadius = 160 + (i % 8) * 25;
                  const x = Math.cos((flowAngle * Math.PI) / 180) * flowRadius;
                  const y = Math.sin((flowAngle * Math.PI) / 180) * flowRadius;
                  
                  const distance = Math.abs(x) + Math.abs(y);
                  const scale = Math.max(0.3, 1 - distance / 400);
                  const opacity = Math.max(0.2, 1 - distance / 350);
                  
                  return (
                    <div
                      key={`flow-${i}`}
                      className="absolute rounded-full bg-white transition-all duration-500"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        width: `${1.5 * scale}px`,
                        height: `${1.5 * scale}px`,
                        opacity: opacity * (isHovered ? 0.8 : 0.6),
                        transform: `translate(-50%, -50%)`,
                        boxShadow: `0 0 ${3 * scale}px rgba(255, 255, 255, ${opacity * 0.6})`,
                        animation: `flow-disperse ${6 + (i % 4)}s ease-out infinite`,
                        animationDelay: `${(i / 150) * 3}s`
                      }}
                    />
                  );
                })}
              </div>

              {/* Central Announcement Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer">
                <div 
                  className="text-center px-8 py-6 rounded-xxl backdrop-blur-md transition-all duration-500 hover:scale-105"
                  style={{
                    background: 'rgba(15, 22, 41, 0.7)',
                    border: '1px solid rgba(147, 197, 253, 0.3)',
                    boxShadow: `
                      0 8px 32px rgba(59, 130, 246, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    maxWidth: '280px'
                  }}
                >
                  <div className="text-xs md:text-sm font-bold text-blue-200 mb-2 tracking-wider">
                    🔥 LATEST EXPO ANNOUNCEMENT 🔥
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-white leading-tight mb-3">
                    INFINITY ENGINEERINGS<br/>
                    <span className="text-blue-300">8th EDITION FSIE</span><br/>
                    FIRE & SECURITY INDIA EXPO
                  </div>
                  <div className="text-xs text-slate-300 mb-3">
                    <div className="flex items-center justify-center space-x-2 mb-1">
                      <span>📅 MEET & TALK</span>
                    </div>
                    <div className="font-medium text-blue-200">11-13 SEPT 2025</div>
                  </div>
                  <div 
                    className="text-xs font-medium px-3 py-2 rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8) 0%, rgba(147, 197, 253, 0.6) 100%)',
                      color: 'white',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    CLICK HERE FOR MORE DETAILS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes drift-0 {
          0% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) translateX(20px) translateY(-10px); opacity: 0.3; }
        }
        
        @keyframes drift-1 {
          0% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); opacity: 0.7; }
          100% { transform: translate(-50%, -50%) translateX(-15px) translateY(25px); opacity: 0.2; }
        }
        
        @keyframes drift-2 {
          0% { transform: translate(-50%, -50%) translateX(0px) translateY(0px); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) translateX(30px) translateY(-20px); opacity: 0.4; }
        }
        
        @keyframes flow-disperse {
          0% { 
            transform: translate(-50%, -50%) translateX(0px) translateY(0px) scale(1); 
            opacity: 0.8; 
          }
          50% { 
            transform: translate(-50%, -50%) translateX(-40px) translateY(-20px) scale(0.8); 
            opacity: 0.6; 
          }
          100% { 
            transform: translate(-50%, -50%) translateX(-80px) translateY(-40px) scale(0.4); 
            opacity: 0.1; 
          }
        }
      `}</style>
    </section>
  );
}