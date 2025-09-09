'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProducts = [
  
  {
    id: 1,
    name: 'Fire Curtains / Smoke Curtains',
    category: 'Fire Protection Systems',
    image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Advanced fire curtains that activate instantly to create protective barriers, featuring certified fire resistance standards and automatic fire compartmentation.',
    features: ['Certified Fire Resistance Standards', 'Flexible Installation', 'Automatic Fire Compartmentation'],
    slug: 'fire-curtains'
  },
  {
    id: 2,
    name: 'Advanced Fire-Resistant Glass',
    category: 'Fire Glass Technology',
    image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Cutting-edge fire glass technology that transforms from clear panels into protective barriers, maintaining visibility for safe evacuation.',
    features: ['Superior Insulation Performance', 'Multi-Purpose Safety Solution', 'Transparent Protection'],
    slug: 'fire-resistant-glass'
  },
  {
    id: 3,
    name: 'LED Lighting Solutions',
    category: 'LED Technology',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Comprehensive range of industrial, commercial, and street LED lighting solutions designed for optimal illumination and energy efficiency.',
    features: ['Industrial LED Systems', 'Commercial Applications', 'Street Lighting Solutions'],
    slug: 'led-lighting'
  },
  {
    id: 4,
    name: 'Fire Rated Doors',
    category: 'Fire Safety Doors',
    image: 'https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Comprehensive range of fire-rated doors, glazed partitions, and specialized hardware designed with clean lines for modern safety requirements.',
    features: ['Wooden & Metal Fire Doors', 'Glazed Metal Systems', 'Architectural Integration'],
    slug: 'fire-rated-doors'
  },
  {
    id: 5,
    name: 'Door Hardware & Security',
    category: 'Security Systems',
    image: 'https://images.pexels.com/photos/2090644/pexels-photo-2090644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Complete door hardware and security solutions including door closers, emergency exit systems, panic hardware, and advanced access control systems.',
    features: ['Emergency Exit Systems', 'Panic Hardware', 'Access Control Technology'],
    slug: 'door-hardware'
  },
  {
    id: 6,
    name: 'Complete Fire Safety Solutions',
    category: 'Integrated Systems',
    image: 'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'End-to-end fire safety solutions combining all our products for comprehensive building protection, from detection to evacuation systems.',
    features: ['Integrated Fire Protection', 'Complete Building Safety', 'Professional Installation'],
    slug: 'complete-solutions'
  }
];

export default function FeaturedProductsSection() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light relative overflow-hidden">
      {/* Navy blue animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/20 to-sphere-blue-light/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-bright/20 to-sphere-blue-accent/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/10 to-sphere-blue-light/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        
        {/* Navy blue floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 2}px`,
              height: `${Math.random() * 12 + 2}px`,
              background: `hsl(var(--sphere-blue-${['primary', 'light', 'bright', 'accent'][Math.floor(Math.random() * 4)]}) / 0.6)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="bg-sphere-navy-light/20 border border-sphere-blue-primary/30 rounded-full px-4 py-1.5">
              <span className="text-sphere-blue-light text-sm font-medium">OUR PRODUCTS</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-sphere-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our <span className="text-sphere-blue-light">Products</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-sphere-slate-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Comprehensive fire safety and security solutions including fire curtains, 
            fire-resistant glass, LED lighting, fire-rated doors, and advanced security systems 
            - all engineered for superior performance and reliability.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-sphere-navy-light/20 border border-sphere-blue-primary/20 backdrop-blur-sm h-full hover:border-sphere-blue-light/40 transition-all duration-500 relative">
                {/* Navy gradient border effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sphere-blue-primary/10 to-sphere-blue-light/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
                
                <div className="aspect-video relative overflow-hidden">
                  <motion.img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sphere-navy-dark/80 via-transparent to-transparent" />
                  
                  {/* Navy hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-sphere-blue-primary/20 to-sphere-blue-light/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.2 }}
                  />
                </div>
                
                <CardContent className="p-6 flex flex-col relative z-10">
                  <motion.span 
                    className="text-sm font-semibold text-sphere-blue-light mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {product.category}
                  </motion.span>
                  
                  <motion.h3 
                    className="font-semibold text-xl text-sphere-white mb-3 flex-grow"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-sphere-slate-light mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  {/* Key Features */}
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-sphere-blue-light rounded-full animate-pulse"></div>
                          <span className="text-xs text-sphere-slate-light font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link href={`/products/${product.slug}`}>
                      <Button 
                        variant="outline" 
                        className="w-full border border-sphere-blue-primary/30 text-sphere-white hover:bg-sphere-blue-primary/20 hover:text-sphere-blue-light transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                  
                  {/* Navy line animation */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <motion.div 
                      className="h-1 w-16 bg-gradient-to-r from-sphere-blue-primary to-sphere-blue-light rounded-full mx-auto"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA to all products */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Link href="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button 
                size="lg" 
                className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-sphere-white text-lg px-8 py-3 font-semibold group transition-all duration-300 rounded-full"
              >
                Explore All Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}