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
      icon: Lightbulb,
      title: 'Commercial LED Lightings',
      description: 'Designed for offices, retail, hospitality, and public spaces with a focus on energy efficiency, aesthetics, comfort, and low maintenance.'
    },
    {
      icon: Zap,
      title: 'Industrial LED Lightings',
      description: 'Industrial lighting is not just about lighting production lines, machinery, and stocks; it is also about providing light for the people who need it to do their work effectively.'
    },
    {
      icon: Leaf,
      title: 'Street LED Lightings',
      description: 'LED luminaires for roads, parking, and highways, providing optimal illumination and smart control options.'
    }
  ];

  const lightingTypes = [
    {
      category: 'Commercial LED Lightings',
      description: 'It includes baselights, linear lights, downlights, panel lights, track lights, and decorative fixtures.',
      applications: ['Offices', 'Retail Stores', 'Hospitality', 'Public Spaces'],
      features: ['Energy efficiency', 'Aesthetics', 'Comfort', 'Low maintenance']
    },
    {
      category: 'Industrial LED Lightings', 
      description: 'Industrial lighting is not just about lighting production lines, machinery, and stocks; it is also about providing light for the people who need it to do their work effectively.',
      applications: ['Factories', 'Warehouses', 'Production Lines', 'Workshops'],
      features: ['High durability', 'Optimal illumination', 'Energy efficient', 'Long lifespan']
    },
    {
      category: 'Street LED Lightings',
      description: 'Flood lights are used to illuminate a wide area while projecting a broad angle. You can cover a wider range of surfaces when mounted at a well-defined and proper position.',
      applications: ['Roads', 'Parking Areas', 'Highways', 'Public Areas'],
      features: ['Wide illumination', 'Smart controls', 'Weather resistant', 'Energy saving']
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
    <main className="min-h-screen pt-16 indigo-purple-gradient-light relative">
      {/* Animated gradient background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sphere-blue-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-sphere-blue-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-sphere-blue-pale/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/10 to-sphere-blue-light/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-light/10 to-sphere-blue-pale/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/products" className="inline-flex items-center text-sphere-blue-primary hover:text-sphere-blue-light transition-colors mb-8">
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
                <div className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-full px-4 py-1.5">
                  <span className="text-foreground text-sm font-medium">LED TECHNOLOGY</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                LED <span className="text-sphere-blue-primary">Lightings</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive range of industrial, commercial, and street LED lighting solutions designed for optimal illumination, energy efficiency, and smart control integration across all environments.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white text-lg px-8 py-3 rounded-full font-semibold">
                    Get Quote
                  </Button>
                </Link>
                <Button variant="outline" className="border-sphere-blue-primary text-foreground hover:bg-sphere-blue-primary/10 text-lg px-8 py-3 rounded-full">
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
              <div className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl overflow-hidden">
                <Image 
                  src="/LEDLightingSolutions.jpg"
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              LED Solutions Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional lighting solutions engineered for every application from industrial facilities to city streets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/30 rounded-xl p-3 w-fit mb-6">
                  <feature.icon className="h-8 w-8 text-sphere-blue-primary animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Product Categories
            </h2>
          </motion.div>

          <div className="space-y-8">
            {lightingTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl p-8 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {type.category}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-sphere-blue-primary mb-3">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {type.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-sphere-blue-primary rounded-full animate-pulse"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-sphere-blue-primary mb-3">Applications:</h4>
                    <div className="space-y-2">
                      {type.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-3 p-2 bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-lg">
                          <CheckCircle className="h-4 w-4 text-sphere-blue-primary flex-shrink-0" />
                          <span className="text-foreground">{application}</span>
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
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                {specifications.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center p-4 bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-foreground font-medium">{spec.label}</span>
                    <span className="text-sphere-blue-primary font-semibold">{spec.value}</span>
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
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Key Benefits
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-sphere-blue-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
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
            className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Illuminate Your Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your lighting with energy-efficient LED solutions that reduce costs and enhance performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white text-lg px-8 py-3 rounded-full font-semibold">
                  Get Lighting Assessment
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-sphere-blue-primary text-foreground hover:bg-sphere-blue-primary/10 text-lg px-8 py-3 rounded-full">
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