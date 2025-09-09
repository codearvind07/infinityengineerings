'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Eye, Thermometer, Shield, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FireResistantGlassPage() {
  const specifications = [
    { label: 'Fire Rating', value: 'Up to 120 minutes' },
    { label: 'Glass Type', value: 'Laminated & Tempered' },
    { label: 'Thickness Range', value: '6mm to 25mm' },
    { label: 'Max Size', value: '3000mm x 2500mm' },
    { label: 'Transparency', value: '90%+ Light Transmission' },
    { label: 'Standards', value: 'EN 1364-1, ASTM E119' }
  ];

  const features = [
    {
      icon: Thermometer,
      title: 'Superior Insulation Performance',
      description: 'Advanced glass technology provides exceptional thermal insulation, preventing heat transfer and maintaining cool surfaces on the non-fire side for safe evacuation.'
    },
    {
      icon: Eye,
      title: 'Multi-Purpose Safety Solution',
      description: 'Combines everyday functionality with emergency protection, serving as regular windows or partitions that instantly become life-saving barriers when needed.'
    },
    {
      icon: Shield,
      title: 'Transparent Protection',
      description: 'Unlike traditional fire barriers, fire glass maintains visibility during normal operations while transforming into protective barriers during emergencies.'
    }
  ];

  const applications = [
    'Corporate Office Buildings',
    'Shopping Centers & Malls', 
    'Hotel & Hospitality Venues',
    'Educational Institutions',
    'Healthcare Facilities',
    'Airport & Transport Terminals',
    'Exhibition Centers',
    'High-rise Residential Buildings'
  ];

  const glassTypes = [
    {
      name: 'Fire-Resistant Curtain Walls',
      description: 'Large-scale glazing systems for modern building facades',
      features: ['Structural glazing', 'Weather sealing', 'Thermal performance']
    },
    {
      name: 'Fire-Rated Windows',
      description: 'Standard and custom window solutions with fire protection',
      features: ['Operable options', 'Sound insulation', 'Energy efficiency']
    },
    {
      name: 'Fire Glass Partitions',
      description: 'Interior space division with transparency and safety',
      features: ['Modular systems', 'Easy installation', 'Design flexibility']
    }
  ];

  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-navy-medium/30 to-sphere-navy-light/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-navy-light/20 to-sphere-navy-medium/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/products" className="inline-flex items-center text-sphere-blue-light hover:text-sphere-white transition-colors mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-full px-4 py-1.5">
                  <span className="text-sphere-white text-sm font-medium">FIRE GLASS TECHNOLOGY</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-sphere-white mb-6">
                Advanced <span className="text-sphere-blue-light">Fire-Resistant Glass</span>
              </h1>
              
              <p className="text-xl text-sphere-white/80 mb-8 leading-relaxed">
                Cutting-edge fire glass technology creates an invisible lifeline during emergencies, transforming from clear panels into protective barriers that block deadly flames and toxic smoke while maintaining visibility for safe evacuation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-sphere-blue-light hover:bg-sphere-blue-light/90 text-sphere-navy-dark text-lg px-8 py-3 rounded-full font-semibold">
                    Get Quote
                  </Button>
                </Link>
                <Button variant="outline" className="border-sphere-blue-light text-sphere-white hover:bg-sphere-blue-light/20 text-lg px-8 py-3 rounded-full">
                  Technical Specifications
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Fire Resistant Glass Installation"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sphere-white mb-6">
              Advanced Technology Features
            </h2>
            <p className="text-xl text-sphere-white/80 max-w-3xl mx-auto">
              Designed for moments when every second counts, fire-resistant glass keeps escape routes clear and accessible while providing superior protection.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/30 rounded-xl p-3 w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-sphere-blue-light animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-sphere-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-sphere-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-sphere-white mb-6">
              Product Range
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {glassTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-2xl p-6 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-xl font-bold text-sphere-white mb-3">
                  {type.name}
                </h3>
                <p className="text-sphere-white/80 mb-4">
                  {type.description}
                </p>
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-sphere-blue-light rounded-full animate-pulse"></div>
                      <span className="text-sm text-sphere-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-sphere-white mb-8">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center p-4 bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-sphere-white font-medium">{spec.label}</span>
                    <span className="text-sphere-blue-light font-semibold">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-sphere-white mb-8">
                Applications
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {applications.map((application, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-sphere-blue-light flex-shrink-0" />
                    <span className="text-sphere-white">{application}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-sphere-navy-dark/50 backdrop-blur-sm border border-sphere-blue-light/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-sphere-white mb-6">
              Transform Your Building's Safety
            </h2>
            <p className="text-xl text-sphere-white/80 mb-8">
              Get expert consultation on fire-resistant glass solutions that combine aesthetics with life-saving protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-sphere-blue-light hover:bg-sphere-blue-light/90 text-sphere-navy-dark text-lg px-8 py-3 rounded-full font-semibold">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-sphere-blue-light text-sphere-white hover:bg-sphere-blue-light/20 text-lg px-8 py-3 rounded-full">
                  Explore All Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}