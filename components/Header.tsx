'use client';

import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo-transparent.png';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      {/* Navy Glass Header */}
      <header 
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'navy-glass' 
            : ''
        }`}
      >
        {/* Main navy container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Navy glass background with morphing effect */}
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, 
                hsl(var(--sphere-blue-primary) / 0.15) 0%, 
                hsl(var(--sphere-blue-light) / 0.08) 50%, 
                hsl(var(--sphere-blue-pale) / 0.04) 100%)
              `,
            }}
          >
            {/* Animated navy layers */}
            <div className="absolute inset-0 navy-gradient opacity-10 animate-pulse" />
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `
                  conic-gradient(from ${Date.now() * 0.01}deg at 50% 50%, 
                  transparent, hsl(var(--sphere-blue-primary) / 0.2), transparent, 
                  hsl(var(--sphere-blue-light) / 0.2), transparent)
                `,
                animation: 'rotate 20s linear infinite',
              }}
            />
          </div>

          {/* Navy frosted glass effect */}
          <div className="absolute inset-0 rounded-2xl backdrop-blur-3xl navy-glass" />
          
          {/* Navy inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sphere-blue-primary/[0.1] via-transparent to-transparent" />
          
          {/* Content */}
          <div className="relative px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <Image 
                  src={logo} 
                  alt="INFINITY ENGINEERINGS Logo"
                  width={160} 
                  height={32} 
                  className="object-contain group-hover:scale-110 transition-all duration-500 ease-out" 
                />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative group px-4 py-2 rounded-xl transition-all duration-500 ease-out hover:bg-sphere-blue-primary/[0.08] hover-scale"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="font-medium text-sm text-sphere-white group-hover:text-sphere-blue-light transition-all duration-300 relative z-10">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Right side actions */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* Phone */}
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl navy-glass hover-scale">
                  <Phone className="h-4 w-4 text-sphere-blue-light animate-pulse" />
                  <span className="text-sm font-medium text-sphere-white">971-817-0004</span>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-xl navy-glass hover-scale text-sphere-white hover:text-sphere-blue-light"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 mx-auto max-w-6xl">
            <div className="relative">
              {/* Mobile menu navy glass background */}
              <div className="absolute inset-0 rounded-2xl navy-glass" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sphere-blue-primary/[0.1] via-transparent to-transparent" />
              
              <div className="relative p-6 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block p-4 rounded-xl font-medium hover-scale hover:bg-sphere-blue-primary/[0.08] transition-all duration-300"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: `slideIn 0.5s ease-out forwards`
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-sphere-white hover:text-sphere-blue-light">{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-sphere-blue-primary/[0.2] space-y-3">
                  <div className="flex items-center space-x-2 p-4 rounded-xl navy-glass hover-scale">
                    <Phone className="h-4 w-4 text-sphere-blue-light animate-pulse" />
                    <span className="text-sphere-white">971-817-0004</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          0% { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          100% { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </>
  );
}