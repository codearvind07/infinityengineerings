'use client';

import React, { useState, useEffect } from 'react';
import { Building2, Home, Factory, Hospital, School } from 'lucide-react';
import Image from 'next/image';
// Import local images
import slider1 from '@/public/slider1.webp';
import slider2 from '@/public/slider2.jpg';
import slider3 from '@/public/slider.jpg';
import atrium from '@/public/ATRIUM.webp';
import opening from '@/public/OPENINGSINWALLS.webp';

const InteractiveSectorViewer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const options = [
    {
      title: "Commercial Buildings",
      description: "Office towers, shopping centers & mixed-use complexes",
      image: slider1,
      icon: <Building2 size={24} className="text-white" />
    },
    {
      title: "Residential Properties",
      description: "Apartments, townhouses & single-family homes",
      image: slider2,
      icon: <Home size={24} className="text-white" />
    },
    {
      title: "Industrial Facilities",
      description: "Manufacturing plants, warehouses & factories",
      image: slider3,
      icon: <Factory size={24} className="text-white" />
    },
    {
      title: "Healthcare Institutions",
      description: "Hospitals, clinics & medical centers",
      image: atrium,
      icon: <Hospital size={24} className="text-white" />
    },
    {
      title: "Educational Campuses",
      description: "Schools, colleges & university buildings",
      image: opening,
      icon: <School size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full bg-transparent font-sans text-white"> 
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">Specialized Sector Solutions</h2>
        <p className="text-base sm:text-lg md:text-xl text-amber-100 font-medium max-w-xl mx-auto">Explore our fire protection systems designed for specific industry requirements.</p>
      </div>

      <div className="h-8"></div>

      {/* Options Container - Responsive for mobile */}
      <div className="options flex w-full max-w-full sm:max-w-[1200px] min-w-[300px] sm:min-w-[800px] h-[300px] sm:h-[500px] mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-20px)',
              minWidth: '40px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fbbf24' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 10px 30px rgba(0,0,0,0.50)' 
                : '0 5px 15px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '3 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
            // Add hover effect for expansion (touch-friendly for mobile)
            onMouseEnter={() => {
              if (activeIndex !== index) {
                const element = document.activeElement as HTMLElement;
                if (element) {
                  element.style.flex = '2 1 0%';
                  element.style.boxShadow = '0 10px 25px rgba(0,0,0,0.40)';
                }
              }
            }}
            onMouseLeave={() => {
              if (activeIndex !== index) {
                const element = document.activeElement as HTMLElement;
                if (element) {
                  element.style.flex = '1 1 0%';
                  element.style.boxShadow = '0 5px 15px rgba(0,0,0,0.30)';
                }
              }
            }}
            // Touch-friendly interaction for mobile
            onTouchStart={() => {
              if (activeIndex !== index) {
                const element = document.activeElement as HTMLElement;
                if (element) {
                  element.style.flex = '2 1 0%';
                  element.style.boxShadow = '0 10px 25px rgba(0,0,0,0.40)';
                }
              }
            }}
            onTouchEnd={() => {
              if (activeIndex !== index) {
                const element = document.activeElement as HTMLElement;
                if (element) {
                  element.style.flex = '1 1 0%';
                  element.style.boxShadow = '0 5px 15px rgba(0,0,0,0.30)';
                }
              }
            }}
          >
            {/* Background Image - Using object-contain for full visibility */}
            <div className="absolute inset-0">
              <Image 
                src={option.image}
                alt={option.title}
                fill
                className="object-contain sm:object-cover"
                style={{
                  transition: 'transform 0.7s ease-in-out',
                  transform: activeIndex === index ? 'scale(1)' : 'scale(1.05)'
                }}
              />
            </div>
            
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
              style={{
                transition: 'opacity 0.7s ease-in-out',
                opacity: activeIndex === index ? 0.7 : 0.9
              }}
            ></div>
            
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-20px',
                height: '80px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -80px 80px -80px #000, inset 0 -80px 80px -60px #000' 
                  : 'inset 0 -80px 0px -80px #000, inset 0 -80px 0px -60px #000'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-3 sm:bottom-5 flex items-center justify-start h-10 sm:h-12 z-2 pointer-events-none px-3 sm:px-4 gap-2 sm:gap-3 w-full">
              <div className="icon min-w-[36px] max-w-[36px] sm:min-w-[44px] sm:max-w-[44px] h-[36px] sm:h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#fbbf24] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-base sm:text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(15px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-xs sm:text-base text-amber-100 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(15px)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        /* Mobile-specific animations */
        @media (max-width: 640px) {
          @keyframes slideFadeIn {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveSectorViewer;