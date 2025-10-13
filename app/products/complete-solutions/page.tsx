'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Zap, Eye, Users, CheckCircle, Star, Phone, Mail, Building, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CompleteSolutionsPage() {
  const solutionPackages = [
    {
      name: 'Commercial Building Package',
      description: 'Comprehensive fire protection for office buildings and commercial spaces',
      components: ['Fire curtains & smoke barriers', 'Fire-rated doors & glazing', 'Emergency exit systems', 'LED safety lighting', 'Access control integration'],
      benefits: ['Complete code compliance', 'Integrated monitoring', 'Reduced installation time', 'Single-point warranty']
    },
    {
      name: 'Industrial Safety Suite',
      description: 'Heavy-duty fire protection systems for manufacturing and industrial facilities',
      components: ['High-temperature fire curtains', 'Industrial fire doors', 'Emergency shutdown systems', 'Explosion-proof lighting', 'Advanced detection systems'],
      benefits: ['Extreme environment rated', 'Process integration', 'Minimal downtime', 'Regulatory compliance']
    },
    {
      name: 'Healthcare Protection System',
      description: 'Specialized fire safety solutions for hospitals and medical facilities',
      components: ['Smoke containment systems', 'Fire-rated medical doors', 'Emergency egress systems', 'Patient safety lighting', 'Nurse call integration'],
      benefits: ['Patient safety focused', 'Infection control compatible', '24/7 monitoring', 'Medical equipment protection']
    },
    {
      name: 'Educational Campus Solution',
      description: 'Comprehensive fire protection for schools and educational institutions',
      components: ['Classroom fire barriers', 'Corridor smoke curtains', 'Emergency exit hardware', 'Safety lighting systems', 'Mass notification integration'],
      benefits: ['Student safety priority', 'Code compliance assured', 'Easy maintenance', 'Budget-friendly options']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment & Consultation',
      description: 'Comprehensive site evaluation and fire safety analysis',
      icon: Eye
    },
    {
      step: '02',
      title: 'Custom Design',
      description: 'Tailored fire protection system design and engineering',
      icon: Building
    },
    {
      step: '03',
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians',
      icon: Users
    },
    {
      step: '04',
      title: 'Testing & Commissioning',
      description: 'Thorough system testing and performance validation',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Ongoing Support',
      description: '24/7 monitoring and maintenance services',
      icon: Shield
    }
  ];

  const integrationFeatures = [
    {
      title: 'Fire Detection Integration',
      description: 'Seamless integration with existing fire alarm systems',
      icon: AlertTriangle
    },
    {
      title: 'Building Management Systems',
      description: 'Full BMS integration for centralized control',
      icon: Building
    },
    {
      title: 'Emergency Response',
      description: 'Coordinated emergency response and evacuation systems',
      icon: Users
    },
    {
      title: 'Smart Monitoring',
      description: 'Real-time system monitoring and diagnostics',
      icon: Eye
    }
  ];

  const benefits = [
    'Single-source responsibility',
    'Integrated system performance',
    'Reduced total cost of ownership',
    'Streamlined maintenance',
    'Comprehensive warranty',
    'Expert project management',
    'Code compliance assurance',
    'Future-ready technology'
  ];

  // Product images for the gallery
  const productImages = [
    { src: '/LEDLightingSolutions.jpg', alt: 'LED Lighting Solutions', title: 'LED Lighting' },
    { src: '/DoorHardware.jpg', alt: 'Door Hardware', title: 'Door Hardware' },
    { src: '/FireMaster1.webp', alt: 'Fire Curtain', title: 'Fire Curtains' },
    { src: '/FireRatedDoors.jpg', alt: 'Fire Rated Doors', title: 'Fire Rated Doors' },
    { src: '/fireresistant.webp', alt: 'Fire Resistant Glass', title: 'Fire Resistant Glass' }
  ];

  return (
    <div className="min-h-screen indigo-purple-gradient-light relative">
      {/* Animated gradient background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sphere-blue-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-sphere-blue-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-sphere-blue-pale/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/10 to-sphere-blue-light/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-light/10 to-sphere-blue-pale/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-15"></div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/products" className="inline-flex items-center text-sphere-blue-primary hover:text-sphere-blue-light transition-colors mb-8">
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
                  <div className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-full px-4 py-1.5">
                    <span className="text-foreground text-sm font-medium">INTEGRATED SYSTEMS</span>
                  </div>
                </motion.div>
              
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Complete Fire Safety 
                  <span className="block text-sphere-blue-primary">Solutions</span>
                </h1>
              
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  End-to-end fire safety solutions combining all our products for comprehensive building protection, 
                  from detection to evacuation systems with integrated management and monitoring.
                </p>
              
                <div className="flex flex-wrap gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white text-lg px-8 py-3 rounded-full">
                      Get Complete Assessment
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-sphere-blue-primary text-foreground hover:bg-sphere-blue-primary/10 text-lg px-8 py-3 rounded-full">
                      View Case Studies
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
                <div className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl p-8">
                  <img 
                    src="/CompleteFire.jpg"
                    alt="Complete Fire Safety Solutions"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section className="py-10 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of fire safety and lighting solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-center font-semibold text-foreground">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Packages Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Tailored Solution Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pre-configured fire safety packages designed for specific building types and industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutionPackages.map((package_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-xl p-8"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {package_.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {package_.description}
                </p>
              
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-sphere-blue-primary mb-3">Package Components:</h4>
                  <ul className="space-y-2">
                    {package_.components.map((component, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-sphere-blue-primary mr-2 flex-shrink-0" />
                        {component}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              
                <div>
                  <h4 className="text-lg font-semibold text-sphere-blue-primary mb-3">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {package_.benefits.map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-card/50 backdrop-blur-sm border border-sphere-blue-primary/30 px-3 py-1 rounded-full text-sm text-muted-foreground"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 5-step process ensures successful project delivery from concept to commissioning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-card/50 border border-sphere-blue-primary/20 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 mb-4 h-full">
                  <div className="bg-card border border-sphere-blue-primary/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sphere-blue-primary">{step.step}</span>
                  </div>
                  <step.icon className="h-8 w-8 text-sphere-blue-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
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
              System Integration
            </h2>
            <p className="text-xl text-gold-platinum/80 max-w-3xl mx-auto">
              Seamless integration with your existing building systems and infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationFeatures.map((feature, index) => (
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
                  <feature.icon className="h-8 w-8 text-gold-accent" />
                </div>
                <h3 className="text-lg font-semibold text-gold-platinum mb-2 gold-glow-text">
                  {feature.title}
                </h3>
                <p className="text-gold-platinum/80 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="gold-card rounded-xl p-8 gold-interactive"
          >
            <h3 className="text-3xl font-bold text-gold-platinum mb-8 gold-glow-text text-center">
              Complete Solution Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 gold-glass rounded-lg p-4"
                >
                  <Star className="h-5 w-5 text-gold-accent flex-shrink-0" />
                  <span className="text-gold-platinum/80">{benefit}</span>
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
              Ready for Complete Fire Protection?
            </h2>
            <p className="text-xl text-gold-platinum/80 mb-8 max-w-2xl mx-auto">
              Let our experts design and implement a comprehensive fire safety solution tailored to your building's unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="gold-button text-lg px-8 py-3 rounded-full">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="border-gold-primary text-gold-platinum hover:bg-gold-primary/20 text-lg px-8 py-3 rounded-full">
                  <Mail className="h-5 w-5 mr-2" />
                  Request Proposal
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