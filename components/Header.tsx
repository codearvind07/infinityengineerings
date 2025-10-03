'use client';

import { useState, useEffect, useRef } from 'react';
import { StaticImageData } from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-transparent.png';
import { throttle } from '@/lib/performance';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);

  // Throttle mouse move handler to improve performance
  const throttledMouseMove = throttle((e: MouseEvent) => {
    if (headerRef.current) {
      const rect = headerRef.current.getBoundingClientRect();
      mousePosition.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    }
  }, 100); // Throttle to 10fps

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [throttledMouseMove]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/productsection' },
    { name: 'Applications', href: '/applications' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
   
  ];

  return (
    <>
      {/* Fixed Header - Always Visible While Scrolling */}
      <header 
        ref={headerRef}
        className={`fixed top-4 left-4 right-4 z-[100] transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-orange-900/20 rounded-2xl' 
            : 'bg-gray-900/80 backdrop-blur-sm'
        }`}
      >
        <div className="relative mx-auto max-w-7xl">
          {/* Simplified background without dynamic mouse effects for better performance */}
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-300"
          />
          
          {/* Content */}
          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo with enhanced hover effect */}
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="transition-all duration-300 ease-out group-hover:scale-105">
                  <Image 
                    src={logo} 
                    alt="INFINITY ENGINEERINGS Logo"
                    width={170} 
                    height={36} 
                    className="object-contain" 
                  />
                </div>
              </Link>
              
              {/* Desktop Navigation with refined styling */}
              <nav className="hidden md:flex items-center space-x-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group px-4 py-2.5 rounded-xl transition-all duration-300 hover:bg-orange-900/30"
                  >
                    <span className="font-medium text-[15px] text-gray-200 group-hover:text-orange-400 transition-all duration-300 relative z-10">
                      {item.name}
                    </span>
                    {/* Underline animation with orange accent */}
                    <span className="absolute bottom-2 left-4 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-6"></span>
                  </Link>
                ))}
              </nav>

              {/* Right side actions with enhanced styling */}
              <div className="hidden lg:flex items-center space-x-3">
                {/* Phone with refined styling and orange accent */}
                <div className="flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-900/30 to-amber-900/20 hover:from-orange-900/40 hover:to-amber-900/30 transition-all duration-300 group">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span className="text-sm font-medium text-gray-200">971-817-0004</span>
                </div>
              </div>

              {/* Enhanced mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-orange-900/30 transition-all duration-300 text-gray-200 hover:text-orange-400"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 mx-auto max-w-7xl">
            <div className="relative rounded-2xl overflow-hidden bg-gray-900/95 backdrop-blur-xl shadow-xl shadow-orange-900/20">
              <div className="relative p-6 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block p-4 rounded-xl font-medium transition-all duration-300 hover:bg-orange-900/30"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-gray-200 hover:text-orange-400">{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-gray-700/50 space-y-3">
                  <div className="flex items-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-orange-900/30 to-amber-900/20 hover:from-orange-900/40 hover:to-amber-900/30 transition-all duration-300 group">
                    <Phone className="h-4 w-4 text-orange-400" />
                    <span className="text-gray-200">971-817-0004</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}