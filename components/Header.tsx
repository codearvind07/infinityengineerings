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
      {/* Golden Glass Header */}
      <header 
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'gold-glass' 
            : ''
        }`}
      >
        {/* Main golden container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Golden glass background with morphing effect */}
          <div 
            className="absolute inset-0 rounded-2xl overflow-hidden gold-particles"
            style={{
              background: `
                radial-gradient(circle at ${mousePosition.x * 0.1}% ${mousePosition.y * 0.1}%, 
                hsl(var(--gold-primary) / 0.15) 0%, 
                hsl(var(--gold-accent) / 0.05) 50%, 
                hsl(var(--gold-copper) / 0.02) 100%)
              `,
            }}
          >
            {/* Animated golden layers */}
            <div className="absolute inset-0 gold-gradient opacity-10 animate-gold-pulse" />
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `
                  conic-gradient(from ${Date.now() * 0.01}deg at 50% 50%, 
                  transparent, hsl(var(--gold-primary) / 0.2), transparent, 
                  hsl(var(--gold-bright) / 0.2), transparent)
                `,
                animation: 'gold-rotate 20s linear infinite',
              }}
            />
          </div>

          {/* Golden frosted glass effect */}
          <div className="absolute inset-0 rounded-2xl backdrop-blur-3xl gold-glass" />
          
          {/* Golden inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-primary/[0.1] via-transparent to-transparent" />
          
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
                    className="relative group px-4 py-2 rounded-xl transition-all duration-500 ease-out hover:bg-gold-primary/[0.08] gold-interactive"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="font-medium text-sm text-gold-platinum group-hover:text-gold-light transition-all duration-300 relative z-10 gold-glow-text">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Right side actions */}
              <div className="hidden lg:flex items-center space-x-4">
                {/* Phone */}
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl gold-glass gold-interactive">
                  <Phone className="h-4 w-4 text-gold-light animate-gold-pulse" />
                  <span className="text-sm font-medium text-gold-platinum">971-817-0004</span>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-xl gold-glass gold-interactive text-gold-platinum hover:text-gold-light"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 mx-auto max-w-6xl">
            <div className="relative gold-particles">
              {/* Mobile menu golden glass background */}
              <div className="absolute inset-0 rounded-2xl gold-glass" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-primary/[0.1] via-transparent to-transparent" />
              
              <div className="relative p-6 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block p-4 rounded-xl font-medium gold-interactive hover:bg-gold-primary/[0.08] transition-all duration-300"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: `slideIn 0.5s ease-out forwards`
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-gold-platinum hover:text-gold-light gold-glow-text">{item.name}</span>
                  </Link>
                ))}
                
                <div className="pt-4 mt-4 border-t border-gold-primary/[0.2] space-y-3">
                  <div className="flex items-center space-x-2 p-4 rounded-xl gold-glass gold-interactive">
                    <Phone className="h-4 w-4 text-gold-light animate-gold-pulse" />
                    <span className="text-gold-platinum">971-817-0004</span>
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