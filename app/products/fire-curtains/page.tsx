'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Clock, Settings, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FireCurtainsPage() {
  const specifications = [
    { label: 'Fire Resistance', value: 'Up to 240 minutes' },
    { label: 'Standards Compliance', value: 'IS 15741:2007, IS 1644:1988' },
    { label: 'Installation', value: 'Flexible, No Extra Efforts' },
    { label: 'Operation', value: 'Automatic Deployment' },
    { label: 'Coverage', value: 'Horizontal & Vertical Configurations' },
    { label: 'Certification', value: 'Indian Building Code Compliant' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Certified Fire Resistance Standards',
      description: 'Fire curtains comply with Indian certifications, including BIS standards, IS 15741:2007, IS 1644:1988, and National Building Code requirements.'
    },
    {
      icon: Settings,
      title: 'Flexible and Easy Installation',
      description: 'Various types of fire curtains, including vertical and horizontal configurations, each tailored to suit your different architectural and fire safety requirements.'
    },
    {
      icon: Clock,
      title: 'Automatic Fire Compartmentation',
      description: 'They can be deployed automatically when fire detection systems are triggered, creating instant fire barriers and safe evacuation routes.'
    }
  ];

  const applications = [
    'Shopping Malls & Retail Centers',
    'Commercial Office Buildings', 
    'Industrial Facilities & Warehouses',
    'Hospitals & Healthcare Facilities',
    'Educational Institutions',
    'Hotels & Hospitality',
    'Airport Terminals',
    'Metro Stations & Transport Hubs'
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
                  <span className="text-sphere-white text-sm font-medium">FIRE PROTECTION SYSTEMS</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-sphere-white mb-6">
                Fire Curtains / <span className="text-sphere-blue-light">Smoke Curtains</span>
              </h1>
              
              <p className="text-xl text-sphere-white/80 mb-8 leading-relaxed">
                When fire strikes, every second counts, and our advanced fire curtains activate instantly to create protective barriers that stop flames and heat from spreading, giving people precious time to evacuate safely.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-sphere-blue-light hover:bg-sphere-blue-light/90 text-sphere-navy-dark text-lg px-8 py-3 rounded-full font-semibold">
                    Get Quote
                  </Button>
                </Link>
                <Button variant="outline" className="border-sphere-blue-light text-sphere-white hover:bg-sphere-blue-light/20 text-lg px-8 py-3 rounded-full">
                  Download Brochure
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
                  src="https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Fire Curtain System"
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
              Key Features
            </h2>
            <p className="text-xl text-sphere-white/80 max-w-3xl mx-auto">
              Our fire curtains are built with cutting-edge fire-resistant materials and designed to work automatically or on command to seal off dangerous areas.
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

      {/* Specifications Section */}
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
              Ready to Protect Your Building?
            </h2>
            <p className="text-xl text-sphere-white/80 mb-8">
              Contact our experts for customized fire curtain solutions tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-sphere-blue-light hover:bg-sphere-blue-light/90 text-sphere-navy-dark text-lg px-8 py-3 rounded-full font-semibold">
                  Get Free Consultation
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="border-sphere-blue-light text-sphere-white hover:bg-sphere-blue-light/20 text-lg px-8 py-3 rounded-full">
                  View Other Products
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