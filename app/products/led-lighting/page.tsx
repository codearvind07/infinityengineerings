'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lightbulb, Zap, Leaf, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LEDLightingPage() {
  const specifications = [
    { label: 'Energy Efficiency', value: 'Up to 80% savings' },
    { label: 'Lifespan', value: '50,000+ hours' },
    { label: 'Color Temperature', value: '3000K - 6500K' },
    { label: 'Dimming Options', value: '0-100% adjustable' },
    { label: 'IP Rating', value: 'IP65/IP67 available' },
    { label: 'Warranty', value: '5 years standard' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Industrial LED Systems',
      description: 'High-performance lighting for warehouses, factories, and industrial facilities. Designed to withstand harsh environments while providing optimal illumination.'
    },
    {
      icon: Lightbulb,
      title: 'Commercial Applications',
      description: 'Professional lighting solutions for offices, retail spaces, and commercial buildings. Energy-efficient designs that enhance productivity and comfort.'
    },
    {
      icon: Leaf,
      title: 'Street Lighting Solutions',
      description: 'Smart street lighting systems for roads, highways, and public spaces. Weather-resistant and energy-efficient for 24/7 operation.'
    }
  ];

  const lightingTypes = [
    {
      category: 'Industrial LED Lightings',
      description: 'High-bay and low-bay lighting solutions for warehouses and manufacturing facilities',
      applications: ['Warehouses', 'Manufacturing Plants', 'Storage Facilities', 'Distribution Centers'],
      features: ['High lumen output', 'Heat resistance', 'Dust protection', 'Long lifespan']
    },
    {
      category: 'Commercial LED Lightings', 
      description: 'Professional lighting for offices, retail, hospitality and public spaces',
      applications: ['Office Buildings', 'Retail Stores', 'Hotels', 'Conference Rooms'],
      features: ['Stylish designs', 'Dimming controls', 'Color temperature options', 'Energy efficiency']
    },
    {
      category: 'Street LED Lightings',
      description: 'Outdoor lighting solutions for roads, parking, and public area illumination',
      applications: ['Highways', 'City Streets', 'Parking Lots', 'Public Parks'],
      features: ['Weather resistant', 'Smart controls', 'Motion sensors', 'Remote monitoring']
    }
  ];

  const benefits = [
    'Up to 80% Energy Savings',
    'Reduced Maintenance Costs',
    'Improved Light Quality', 
    'Environmental Sustainability',
    'Smart Control Integration',
    'Instant On/Off Operation',
    'No Heat Generation',
    'Long Service Life'
  ];

  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-gold-dark via-gold-deep to-gold-dark/90">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden gold-particles">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-96 h-96 gold-gradient rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-gold-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-gold-bright/20 to-gold-accent/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-gold-float"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/products" className="inline-flex items-center text-gold-light hover:text-gold-platinum transition-colors mb-8">
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
                <div className="gold-glass rounded-full px-4 py-1.5">
                  <span className="text-gold-platinum text-sm font-medium gold-glow-text">LED TECHNOLOGY</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold gold-glow-text mb-6">
                LED <span className="gold-shimmer">Lighting Solutions</span>
              </h1>
              
              <p className="text-xl text-gold-platinum/80 mb-8 leading-relaxed">
                Comprehensive range of industrial, commercial, and street LED lighting solutions designed for optimal illumination, energy efficiency, and smart control integration across all environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gold-button text-lg px-8 py-3 rounded-full font-semibold">
                    Get Quote
                  </Button>
                </Link>
                <Button variant="outline" className="gold-border-glow text-lg px-8 py-3 rounded-full text-gold-platinum hover:bg-gold-primary/20">
                  Energy Calculator
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="gold-card rounded-2xl overflow-hidden">
                <Image 
                  src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="LED Lighting Installation"
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
            <h2 className="text-4xl md:text-5xl font-bold gold-glow-text mb-6">
              LED Solutions Categories
            </h2>
            <p className="text-xl text-gold-platinum/80 max-w-3xl mx-auto">
              Professional lighting solutions engineered for every application from industrial facilities to city streets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="gold-card rounded-2xl p-8 gold-interactive relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="gold-glass rounded-xl p-3 w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-gold-light animate-gold-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-gold-platinum mb-4 gold-glow-text">
                  {feature.title}
                </h3>
                <p className="text-gold-platinum/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold gold-glow-text mb-6">
              Product Categories
            </h2>
          </motion.div>

          <div className="space-y-8">
            {lightingTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="gold-card rounded-2xl p-8 gold-interactive"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gold-platinum mb-4 gold-glow-text">
                      {type.category}
                    </h3>
                    <p className="text-gold-platinum/80 mb-6">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-gold-light mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gold-light rounded-full animate-gold-pulse"></div>
                            <span className="text-sm text-gold-platinum/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gold-light mb-3">Applications:</h4>
                    <div className="space-y-2">
                      {type.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-3 p-2 gold-glass rounded-lg">
                          <CheckCircle className="h-4 w-4 text-gold-light flex-shrink-0" />
                          <span className="text-gold-platinum">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold gold-glow-text mb-8">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center p-4 gold-glass rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-gold-platinum font-medium">{spec.label}</span>
                    <span className="text-gold-light font-semibold">{spec.value}</span>
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
              <h2 className="text-4xl font-bold gold-glow-text mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-3 gold-glass rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-gold-light flex-shrink-0" />
                    <span className="text-gold-platinum">{benefit}</span>
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
            className="gold-card rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold gold-glow-text mb-6">
              Illuminate Your Future
            </h2>
            <p className="text-xl text-gold-platinum/80 mb-8">
              Transform your lighting with energy-efficient LED solutions that reduce costs and enhance performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="gold-button text-lg px-8 py-3 rounded-full font-semibold">
                  Get Lighting Assessment
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="gold-border-glow text-lg px-8 py-3 rounded-full text-gold-platinum hover:bg-gold-primary/20">
                  View All Products
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