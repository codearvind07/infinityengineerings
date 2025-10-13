'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '@/public/logo-transparent.png';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { isLowPerformanceDevice, prefersReducedMotion } from '@/lib/performance';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Refund Policy', href: '/refund-policy' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isLowPerf = isLowPerformanceDevice();
  const prefersReducedMotionEnabled = prefersReducedMotion();

  useEffect(() => {
    // Only add mouse move listener if not on low performance device and motion is not reduced
    if (!isLowPerf && !prefersReducedMotionEnabled) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isLowPerf, prefersReducedMotionEnabled]);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced animated background elements - optimized for performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient orb - simplified for low performance */}
        {!isLowPerf && !prefersReducedMotionEnabled ? (
          <motion.div 
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
            animate={{
              background: [
                'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 197, 253, 0.3) 100%)',
                'radial-gradient(circle, rgba(234, 88, 12, 0.5) 0%, rgba(251, 146, 60, 0.3) 100%)',
                'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(56, 189, 248, 0.3) 100%)',
                'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 197, 253, 0.3) 100%)'
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ) : (
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(147, 197, 253, 0.15) 100%)'
            }}
          />
        )}
        
        {/* Secondary gradient orb - simplified for low performance */}
        {!isLowPerf && !prefersReducedMotionEnabled ? (
          <motion.div 
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-20"
            animate={{
              background: [
                'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(52, 211, 153, 0.3) 100%)',
                'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(167, 139, 250, 0.3) 100%)',
                'radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, rgba(251, 191, 36, 0.3) 100%)',
                'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(52, 211, 153, 0.3) 100%)'
              ]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ animationDelay: '2s' }}
          />
        ) : (
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, rgba(52, 211, 153, 0.15) 100%)'
            }}
          />
        )}
        
        {/* Tertiary gradient orb - simplified for low performance */}
        {!isLowPerf && !prefersReducedMotionEnabled ? (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"
            animate={{
              background: [
                'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(244, 114, 182, 0.3) 100%)',
                'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(147, 197, 253, 0.3) 100%)',
                'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, rgba(52, 211, 153, 0.3) 100%)',
                'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(244, 114, 182, 0.3) 100%)'
              ]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ animationDelay: '4s' }}
          />
        ) : (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-soft-light filter blur-3xl opacity-7"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(244, 114, 182, 0.1) 100%)'
            }}
          />
        )}
        
        {/* Interactive cursor follower - only on high performance devices */}
        {!isLowPerf && !prefersReducedMotionEnabled && (
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x - 128,
              y: mousePosition.y - 128,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
            }}
          />
        )}
      </div>
      
      {/* Simplified particle animation for low performance devices */}
      {!isLowPerf && !prefersReducedMotionEnabled ? (
        [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
            animate={{
              y: [0, -(Math.random() * 20 + 5), 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.1, Math.random() * 0.2 + 0.1, 0.1],
              scale: [1, Math.random() * 0.3 + 0.85, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))
      ) : (
        // Reduced number of particles for low performance
        [...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
          />
        ))
      )}
      
      {/* Decorative geometric elements - simplified for low performance */}
      {!isLowPerf ? (
        <>
          <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/10 rotate-45 rounded-sm backdrop-blur-sm"></div>
          <div className="absolute bottom-1/3 right-20 w-16 h-16 border border-white/10 rounded-full backdrop-blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-32 border border-white/10 rotate-12 rounded-sm backdrop-blur-sm"></div>
        </>
      ) : (
        // Simplified elements for low performance
        <>
          <div className="absolute top-1/4 left-10 w-16 h-16 border border-white/5 rotate-45 rounded-sm"></div>
          <div className="absolute bottom-1/3 right-20 w-12 h-12 border border-white/5 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-24 border border-white/5 rotate-12 rounded-sm"></div>
        </>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Company Info with enhanced styling */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <Image 
                  src={logo} 
                  alt="INFINITY ENGINEERINGS Logo"
                  width={160} 
                  height={32} 
                  className="object-contain group-hover:scale-110 transition-all duration-500 ease-out" 
                />
              </Link>
            </motion.div>
            <motion.p 
              className="text-white/90 mb-6 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              India&apos;s leading provider of innovative fire and smoke protection systems. 
              Authorized distributor of COOPERS FIRE LIMITED UK, bringing world-class 
              fire curtain technology and uncompromised safety standards to the Indian market.
            </motion.p>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-5 w-5 text-orange-400" />
                </motion.div>
                <span>971-817-0004</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-5 w-5 text-orange-400" />
                </motion.div>
                <span>sales@infinityengineerings.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-white/90"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="h-5 w-5 text-orange-400" />
                </motion.div>
                <span>3rd FLOOR, Jmd Regent Arcade Mall A- Block, Dif Phase-1, Sector-28 Gurugram, Haryana 122002</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <motion.h4 
              className="text-xl font-bold text-white mb-6 relative inline-block"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
            </motion.h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index, type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-orange-300 transition-colors duration-200 flex items-center group"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 group-hover:scale-125"
                      whileHover={{ scale: 1.5 }}
                    ></motion.span>
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h4 
              className="text-xl font-bold text-white mb-6 relative inline-block"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Legal
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
            </motion.h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index, type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.href}
                    className="text-white/80 hover:text-orange-300 transition-colors duration-200 flex items-center group"
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 group-hover:scale-125"
                      whileHover={{ scale: 1.5 }}
                    ></motion.span>
                    <span className="group-hover:underline">{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.h4 
              className="text-xl font-bold text-white mb-6 relative inline-block"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></span>
            </motion.h4>
            <motion.p 
              className="text-white/90 mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Subscribe to our newsletter for the latest fire safety insights and product updates.
            </motion.p>
            
            {/* Newsletter Form */}
            <motion.div 
              className="space-y-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-orange-400 focus:border-transparent rounded-lg backdrop-blur-sm pl-4 pr-24 py-6"
                />
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="absolute right-1 top-1 bottom-1"
                >
                  <Button className="h-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl px-4">
                    Subscribe
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 border border-white/20 hover:bg-orange-500/20 p-3 rounded-lg transition-colors duration-200 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ 
                    y: -8, 
                    rotate: 5, 
                    scale: 1.1,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="h-5 w-5 text-white hover:text-orange-300" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar with enhanced styling */}
        <motion.div 
          className="py-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-white/80 text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              © {new Date().getFullYear()} INFINITY ENGINEERINGS. All rights reserved.
            </motion.p>
            <motion.p 
              className="text-white/80 text-sm mt-2 md:mt-0"
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Protecting lives through innovative fire safety solutions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}