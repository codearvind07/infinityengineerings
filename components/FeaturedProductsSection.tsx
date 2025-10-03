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
    <section id="products" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-primary/5 to-sphere-blue-light/5 rounded-full filter blur-2xl opacity-15"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-light/5 to-sphere-blue-pale/5 rounded-full filter blur-2xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="bg-card/50 border border-sphere-blue-primary/30 rounded-full px-4 py-1.5">
              <span className="text-sphere-blue-primary text-sm font-medium">OUR PRODUCTS</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-sphere-blue-primary">Products</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Comprehensive fire safety and security solutions including fire curtains, 
            fire-resistant glass, LED lighting, fire-rated doors, and advanced security systems 
            - all engineered for superior performance and reliability.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card className="overflow-hidden bg-card/50 border border-sphere-blue-primary/20 backdrop-blur-sm h-full hover:border-sphere-blue-primary/40 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                
                <CardContent className="p-6 flex flex-col">
                  <span className="text-sm font-semibold text-sphere-blue-primary mb-2">
                    {product.category}
                  </span>
                  
                  <h3 className="font-semibold text-lg text-foreground mb-3 flex-grow">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  {/* Key Features */}
                  <div className="mb-5">
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-sphere-blue-primary rounded-full"></div>
                          <span className="text-xs text-muted-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/products/${product.slug}`}>
                    <Button 
                      variant="outline" 
                      className="w-full border border-sphere-blue-primary/30 text-foreground hover:bg-sphere-blue-primary/10 hover:text-sphere-blue-primary transition-all duration-300 text-sm"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link href="/products">
            <Button 
              size="lg"
              className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white text-base px-6 py-2.5 font-semibold rounded-full transition-all duration-300"
            >
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}