'use client';

import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import logo from '../public/logo-transparent.png';
import Link from 'next/link';
import Image from 'next/image';


export default function Footer() {
  const quickLinks = [
    { name: 'Fire Curtains', href: '#products' },
    { name: 'Smoke Curtains', href: '#products' },
    { name: 'Applications', href: '#applications' },
    { name: 'Technical Support', href: '#resources' },
    { name: 'Certifications', href: '#about' },
    { name: 'Case Studies', href: '#testimonials' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light border-t border-sphere-blue-primary/20 relative overflow-hidden">
      {/* Navy blue background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/20 to-sphere-blue-light/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-accent/10 to-sphere-blue-bright/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-12 grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <Image 
                  src={logo} 
                  alt="INFINITY ENGINEERINGS Logo"
                  width={160} 
                  height={32} 
                  className="object-contain group-hover:scale-110 transition-all duration-500 ease-out" 
                />
              </Link>

            </div>
            <p className="text-sphere-slate-light mb-6 leading-relaxed">
              India&apos;s leading provider of innovative fire and smoke protection systems. 
              Authorized distributor of COOPERS FIRE LIMITED UK, bringing world-class 
              fire curtain technology and uncompromised safety standards to the Indian market.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sphere-slate-light">
                <Phone className="h-4 w-4 text-sphere-blue-light" />
                <span>971-817-0004</span>
              </div>
              <div className="flex items-center space-x-2 text-sphere-slate-light">
                <Mail className="h-4 w-4 text-sphere-blue-light" />
                <span>sales@infinityengineerings.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sphere-slate-light">
                <MapPin className="h-4 w-4 text-sphere-blue-light" />
                <span>3rd FLOOR, Jmd Regent Arcade Mall A- Block, Dif Phase-1, Sector-28 Gurugram, Haryana 122002</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-sphere-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-sphere-slate-light hover:text-sphere-blue-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-sphere-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-sphere-slate-light hover:text-sphere-blue-light transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h4 className="text-lg font-semibold text-sphere-white mb-6">Stay Updated</h4>
            <p className="text-sphere-slate-light mb-4">
              Subscribe to our newsletter for the latest fire safety insights and product updates.
            </p>
           
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-sphere-navy-light/30 border border-sphere-blue-primary/30 hover:bg-sphere-blue-primary/20 p-2 rounded-lg transition-colors duration-200"
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5 text-sphere-slate-light hover:text-sphere-blue-light" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="py-6 border-t border-sphere-blue-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sphere-slate-light text-sm">
              © {new Date().getFullYear()} INFINITY ENGINEERINGS. All rights reserved.
            </p>
            <p className="text-sphere-slate-light text-sm mt-2 md:mt-0">
              Protecting lives through innovative fire safety solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}