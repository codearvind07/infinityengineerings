'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Key, Zap, CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DoorHardwarePage() {
  const hardwareTypes = [
    {
      name: 'Emergency Exit Systems',
      description: 'Advanced exit devices ensuring rapid egress during emergencies',
      features: ['Panic bar mechanisms', 'Electromagnetic locks', 'Delayed egress systems', 'Emergency push plates'],
      applications: ['High-security facilities', 'Shopping centers', 'Office buildings', 'Educational institutions']
    },
    {
      name: 'Panic Hardware',
      description: 'Life-safety hardware designed for immediate emergency exit',
      features: ['Touch bar operation', 'Fail-safe operation', 'ADA compliant', 'Weatherproof options'],
      applications: ['Assembly occupancies', 'Retail stores', 'Hospitals', 'Schools']
    },
    {
      name: 'Access Control Technology',
      description: 'Intelligent access management systems with security integration',
      features: ['Card reader integration', 'Biometric systems', 'Remote monitoring', 'Audit trail logging'],
      applications: ['Corporate offices', 'Data centers', 'Laboratories', 'Government facilities']
    },
    {
      name: 'Door Closers & Operators',
      description: 'Automatic door control systems for smooth operation',
      features: ['Hydraulic closers', 'Pneumatic operators', 'Adjustable closing force', 'Hold-open features'],
      applications: ['Commercial buildings', 'Healthcare facilities', 'Retail environments', 'Industrial sites']
    }
  ];

  const specifications = [
    { label: 'Fire Rating', value: 'Up to 3 hours', icon: Shield },
    { label: 'Security Level', value: 'Grade 1 Commercial', icon: Lock },
    { label: 'Compliance', value: 'ADA, UL, ANSI Standards', icon: CheckCircle },
    { label: 'Operation', value: '-40°F to 150°F', icon: Zap }
  ];

  const certifications = [
    'UL Listed Components',
    'ANSI/BHMA Certified',
    'ADA Compliant Design',
    'Fire Safety Standards',
    'Security Grade Ratings',
    'Environmental Testing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-dark via-gold-deep to-gold-dark/90">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden gold-particles">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-96 h-96 gold-gradient rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-gold-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-gold-bright/20 to-gold-accent/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-gold-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/products" className="inline-flex items-center text-gold-light hover:text-gold-platinum transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <div className="gold-glass rounded-full px-4 py-1.5">
                    <span className="text-gold-platinum text-sm font-medium">SECURITY SYSTEMS</span>
                  </div>
                </motion.div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gold-platinum mb-6 gold-glow-text">
                  Door Hardware & 
                  <span className="block text-gold-light gold-shimmer">Security Solutions</span>
                </h1>
                
                <p className="text-xl text-gold-platinum/80 mb-8 leading-relaxed">
                  Comprehensive door hardware and security solutions including emergency exit systems, 
                  panic hardware, and advanced access control technology for maximum safety and security.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="gold-button text-lg px-8 py-3 rounded-full">
                      Get Quote
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-gold-primary text-gold-platinum hover:bg-gold-primary/20 text-lg px-8 py-3 rounded-full">
                      Technical Specs
                    </Button>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="gold-card rounded-2xl p-8 gold-interactive">
                  <img 
                    src="https://images.pexels.com/photos/2090644/pexels-photo-2090644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                    alt="Door Hardware & Security Systems"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hardware Types Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gold-platinum mb-6 gold-glow-text">
              Hardware Categories
            </h2>
            <p className="text-xl text-gold-platinum/80 max-w-3xl mx-auto">
              Comprehensive range of door hardware solutions for every security and safety requirement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hardwareTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gold-card rounded-xl p-8 gold-interactive"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gold-platinum mb-4 gold-glow-text">
                  {type.name}
                </h3>
                <p className="text-gold-platinum/80 mb-6">
                  {type.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gold-light mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-gold-platinum/80"
                      >
                        <CheckCircle className="h-4 w-4 text-gold-accent mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gold-light mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="gold-glass px-3 py-1 rounded-full text-sm text-gold-platinum/80"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gold-platinum mb-6 gold-glow-text">
              Technical Specifications
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {specifications.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gold-card rounded-xl p-6 text-center gold-interactive"
                whileHover={{ y: -5 }}
              >
                <div className="gold-glass rounded-lg p-3 w-fit mx-auto mb-4">
                  <spec.icon className="h-8 w-8 text-gold-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gold-platinum mb-2 gold-glow-text">
                  {spec.label}
                </h3>
                <p className="text-gold-platinum/80">{spec.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gold-card rounded-xl p-8 gold-interactive"
          >
            <h3 className="text-2xl font-bold text-gold-platinum mb-6 gold-glow-text text-center">
              Certifications & Standards
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 gold-glass rounded-lg p-4"
                >
                  <Star className="h-5 w-5 text-gold-accent flex-shrink-0" />
                  <span className="text-gold-platinum/80">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gold-card rounded-2xl p-12 gold-interactive"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gold-platinum mb-6 gold-glow-text">
              Secure Your Facility Today
            </h2>
            <p className="text-xl text-gold-platinum/80 mb-8 max-w-2xl mx-auto">
              Contact our security experts to design the perfect door hardware and access control solution for your building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="gold-button text-lg px-8 py-3 rounded-full">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 971-817-0004
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-gold-primary text-gold-platinum hover:bg-gold-primary/20 text-lg px-8 py-3 rounded-full">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}