'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const featuredProducts = [
  {
    id: 1,
    name: 'FireMaster A1 Fire Curtain',
    category: 'Fire Curtains',
    image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Top-tier vertical fire curtain offering up to 240 minutes of integrity and radiation control.'
  },
  {
    id: 5,
    name: 'FireMaster Concertina "Closed"',
    category: 'Fire Curtains',
    image: 'https://images.pexels.com/photos/7218567/pexels-photo-7218567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'Multi-sided fire curtain for open-plan areas, providing complete enclosure without corner posts.'
  },
  {
    id: 15,
    name: 'FireMaster Smoke and Fire',
    category: 'Dual Purpose',
    image: 'https://images.pexels.com/photos/8044130/pexels-photo-8044130.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    description: 'A dual-purpose solution providing both fire and smoke protection in a single, integrated system.'
  },
];

export default function FeaturedProductsSection() {
  return (
    <section id="featured-products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most popular and innovative fire and smoke protection systems, 
            engineered for superior performance and reliability.
          </p>
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
            >
              <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 h-full hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 card-3d">
                <div className="aspect-video relative overflow-hidden">
                  <motion.img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                </div>
                <CardContent className="p-6 flex flex-col">
                  <span className="text-sm font-semibold text-gray-300 mb-2">{product.category}</span>
                  <h3 className="font-semibold text-xl text-white mb-3 flex-grow">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-gray-200"
                  >
                    Learn More
                  </Button>
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
            <Button 
              size="lg" 
              className="bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-3 text-lg font-semibold group transition-all duration-300 btn-3d"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}