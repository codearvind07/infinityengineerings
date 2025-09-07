'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DoorClosed, Shield, Wrench, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FireRatedDoorsPage() {
  const specifications = [
    { label: 'Fire Rating', value: '30, 60, 90, 120 minutes' },
    { label: 'Door Material', value: 'Steel, Wood, Composite' },
    { label: 'Frame Options', value: 'Steel, Aluminum, Wood' },
    { label: 'Glazing Available', value: 'Fire-rated glass options' },
    { label: 'Hardware', value: 'Complete certified sets' },
    { label: 'Standards', value: 'UL Listed, NFPA  Compliant' }
  ];

  const features = [
    {
      icon: DoorClosed,
      title: 'Wooden & Metal Fire Doors',
      description: 'Comprehensive range of fire-rated doors from traditional wooden designs to modern metal constructions, offering flexibility in architectural aesthetics.'
    },
    {
      icon: Shield,
      title: 'Glazed Metal Systems',
      description: 'Advanced glazed metal fire-rated doors that combine transparency with protection, perfect for maintaining visibility in emergency situations.'
    },
    {
      icon: Wrench,
      title: 'Architectural Integration',
      description: 'Seamlessly designed to integrate with modern architectural requirements while meeting all fire safety regulations and building codes.'
    }
  ];

  const doorTypes = [
    {
      name: 'Steel Fire Doors',
      description: 'Heavy-duty steel construction for maximum fire resistance',
      features: ['Galvanized steel core', 'Mineral wool insulation', 'Powder coated finish', 'Multiple hardware options'],
      applications: ['Industrial facilities', 'Stairwells', 'Equipment rooms', 'Storage areas']
    },
    {
      name: 'Wooden Fire Doors',
      description: 'Traditional aesthetic with modern fire protection technology',
      features: ['Solid timber construction', 'Fire-resistant core', 'Natural wood finishes', 'Custom design options'],
      applications: ['Hotels', 'Offices', 'Residential buildings', 'Educational facilities']
    },
    {
      name: 'Glazed Fire Doors',
      description: 'Combination of fire protection with visual transparency',
      features: ['Fire-rated glass panels', 'Steel or aluminum frames', 'Clear visibility', 'Emergency egress optimization'],
      applications: ['Corridors', 'Reception areas', 'Medical facilities', 'Control rooms']
    }
  ];

  const hardwareOptions = [
    'Fire-rated door closers',
    'Panic exit hardware',
    'Electronic access control',
    'Magnetic door holders',
    'Fire-rated hinges',
    'Certified lock sets',
    'Door seals and gaskets',
    'Emergency exit devices'
  ];

  const benefits = [
    'Life Safety Protection',
    'Property Damage Prevention',
    'Code Compliance Assurance',
    'Insurance Requirements Met',
    'Smoke & Gas Containment',
    'Sound Insulation',
    'Security Enhancement',
    'Long-term Reliability'
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-4">
                <div className="gold-glass rounded-full px-4 py-1.5">
                  <span className="text-gold-platinum text-sm font-medium gold-glow-text">FIRE SAFETY DOORS</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold gold-glow-text mb-6">
                Fire Rated <span className="gold-shimmer">Doors</span>
              </h1>
              
              <p className="text-xl text-gold-platinum/80 mb-8 leading-relaxed">
                Designing Safety with Innovations - Clean Lines, Clear Minds: The Minimalist Way. We offer a comprehensive range of fire-rated doors, glazed partitions, and specialized hardware to protect your property.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="gold-button text-lg px-8 py-3 rounded-full font-semibold">
                    Get Quote
                  </Button>
                </Link>
                <Button variant="outline" className="gold-border-glow text-lg px-8 py-3 rounded-full text-gold-platinum hover:bg-gold-primary/20">
                  Door Configurator
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
                  src="https://images.pexels.com/photos/277574/pexels-photo-277574.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Fire Rated Door Installation"
                  width={800}
                  height={600}
                  className="w-full h-96 object-cover"
                />  
              </div>
            </motion.div>
          </div>
        </motion.div>
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
              Product Categories
            </h2>
            <p className="text-xl text-gold-platinum/80 max-w-3xl mx-auto">
              From wooden & metal fire doors to acoustic solutions, clean room doors, and architectural systems - reliable safety products for all building requirements.
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

      {/* Door Types Section */}
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
              Door Solutions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {doorTypes.map((type, index) => (
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
                      {type.name}
                    </h3>
                    <p className="text-gold-platinum/80 mb-6">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="text-lg font-semibold text-gold-light mb-3">Key Features:</h4>
                      <div className="space-y-2">
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
                    <h4 className="text-lg font-semibold text-gold-light mb-3">Ideal Applications:</h4>
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

      {/* Specifications & Hardware */}
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
              <div className="space-y-4 mb-12">
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

              <h2 className="text-4xl font-bold gold-glow-text mb-8">
                Hardware Options
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {hardwareOptions.map((hardware, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-3 gold-glass rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-gold-light flex-shrink-0" />
                    <span className="text-gold-platinum">{hardware}</span>
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
              <div className="grid grid-cols-1 gap-3 mb-12">
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

              <div className="gold-card rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gold-platinum mb-4 gold-glow-text">
                  Glazed Metal Fire Rated Door
                </h3>
                <p className="text-gold-platinum/80 mb-4">
                  Special mention for our glazed metal fire-rated doors that provide exceptional visibility while maintaining fire protection standards.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold-light rounded-full animate-gold-pulse"></div>
                    <span className="text-sm text-gold-platinum/80">Clear sight lines for safety</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold-light rounded-full animate-gold-pulse"></div>
                    <span className="text-sm text-gold-platinum/80">Fire-rated glass integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-gold-light rounded-full animate-gold-pulse"></div>
                    <span className="text-sm text-gold-platinum/80">Modern architectural appeal</span>
                  </div>
                </div>
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
              Secure Your Building's Safety
            </h2>
            <p className="text-xl text-gold-platinum/80 mb-8">
              Get expert consultation on fire-rated door solutions that meet building codes and enhance architectural design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="gold-button text-lg px-8 py-3 rounded-full font-semibold">
                  Request Door Assessment
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="gold-border-glow text-lg px-8 py-3 rounded-full text-gold-platinum hover:bg-gold-primary/20">
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