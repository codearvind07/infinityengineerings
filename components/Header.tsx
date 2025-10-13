'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/productsection' },
    { name: 'Applications', href: '/applications' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const phoneNumber = '971-817-0004';
  const email = 'sales@infinityengineerings.com';
  const tagline = 'Fire & Smoke Protection Specialists';

  return (
    <>
      {/* Main Header - Now includes contact info for mobile */}
      <header
        className={`fixed top-0 left-0 right-0 md:left-4 md:right-4 z-[100] md:rounded-2xl rounded-none transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-gray-50/95 backdrop-blur-md shadow-xl border border-gray-200/80'
            : 'bg-gray-50/90 backdrop-blur-sm border border-gray-100/50'
        }`}
      >
        {/* Contact Info Bar - Visible on all devices */}
        <div className="bg-gradient-to-r from-orange-700 to-amber-600 text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 group hover:text-amber-200 transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm truncate">{phoneNumber}</span>
              </a>
              <div className="hidden sm:block h-4 w-px bg-white/50"></div>
              <a href={`mailto:${email}`} className="flex items-center gap-2 group hover:text-amber-200 transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm truncate">{email}</span>
              </a>
            </div>
            <div className="text-xs opacity-90 text-center sm:text-right font-medium">
              {tagline}
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group py-1">
            <div className="transition-all duration-300 ease-out group-hover:scale-105">
              <Image
                src="/logo-transparent.png"
                alt="Infinity Engineerings Logo"
                width={170}
                height={36}
                className="w-32 sm:w-40 md:w-44 object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-sm"
              >
                <span
                  className={`font-medium text-sm lg:text-base tracking-wide ${
                    isScrolled ? 'text-gray-800' : 'text-gray-900'
                  } group-hover:text-orange-700 transition-all duration-300`}
                >
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-orange-600 -translate-x-1/2 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800 shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gray-50/95 backdrop-blur-md">
            <div className="px-4 pb-6 pt-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block w-full px-4 py-3 rounded-xl text-gray-800 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-700 transition-all duration-300 font-medium text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}