// ContactSection.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, Building2, Car, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  // Custom hook for counting animation
  function useCountUp(end: number, duration: number = 2000, start: number = 0) {
    const [count, setCount] = useState(start);
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.1 }
      );

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

    useEffect(() => {
      if (!isInView) return;

      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        setCount(currentCount);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [end, duration, start, isInView]);
    return [count, ref] as const;
  }

  // CountUp Component
  function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
    const [count, ref] = useCountUp(end, duration);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }

  const stats = [
    { number: 15, suffix: '+', label: 'Years of Excellence' },
    { number: 1000, suffix: '+', label: 'Successful Projects' },
    { number: 99, suffix: '%', label: 'Client Retention' },
    { number: 30, suffix: '+', label: 'Geographic Reach' }
  ];

  const services = [
    {
      icon: Building2,
      title: "Commercial Fire Systems",
      description: "Comprehensive fire protection solutions engineered for businesses across all industries, ensuring regulatory compliance and optimal safety standards."
    },
    {
      icon: User,
      title: "Residential Fire Safety",
      description: "Customized residential fire safety systems designed to protect your family and property with cutting-edge technology and seamless integration."
    },
    {
      icon: Car,
      title: "Industrial Fire Protection",
      description: "Advanced fire suppression systems specifically engineered for industrial facilities, manufacturing plants, and high-risk environments."
    }
  ];

  return (
    <section className="relative flex items-center justify-start min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-cyan-100 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200/40 via-blue-100/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-200/40 via-blue-100/30 to-transparent"></div>
      
      {/* Floating Geometric Shapes with stronger visibility */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-indigo-300/30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-cyan-300/30 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-blue-300/30 blur-3xl animate-pulse"></div>
      
      {/* Enhanced Grid Pattern with better visibility */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Decorative Lines with stronger visibility */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
      
      {/* Additional decorative elements for more visual appeal */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-indigo-100/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-100/20 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Header */}
          <motion.div 
            className="text-left mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* Beta Badge with enhanced visibility */}
              <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-bold text-indigo-800 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border-2 border-indigo-200">
                <span className="w-3 h-3 mr-2 bg-indigo-600 rounded-full animate-ping" />
                GET IN TOUCH
              </div>

              {/* Heading with enhanced contrast */}
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contact Infinity
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-cyan-600">Engineerings</span>
              </motion.h1>

              {/* Description with better visibility */}
              <motion.p
                className="text-xl text-gray-700 max-w-2xl mb-8 font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Have inquiries regarding our comprehensive fire safety solutions? Our expert team is prepared to provide you with tailored protection strategies for your specific requirements.
              </motion.p>
            </div>

            {/* Hero Image with enhanced styling */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/60 backdrop-blur-sm transform transition-transform duration-500 hover:scale-105">
                <img
                  src="/slider1.webp"
                  alt="Infinity Engineerings Team"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full opacity-40 blur-2xl animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full opacity-50 blur-2xl animate-pulse"></div>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            {/* Contact Form with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-indigo-200/50 hover:shadow-3xl transition-all duration-300"
            >
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-6 sm:col-span-2">
                  <h3 className="text-2xl font-extrabold text-gray-900">Send us a message</h3>
                  <p className="text-gray-700 text-base font-medium">
                    Complete the form below and our specialists will respond within 24 business hours.
                  </p>
                </div>
                
                <div>
                  <label htmlFor="name" className="block text-base font-semibold mb-2 text-gray-800">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-indigo-600" />
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="pl-12 py-3 bg-white text-gray-800 placeholder-gray-500 border-2 border-indigo-100 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 rounded-xl text-base font-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-base font-semibold mb-2 text-gray-800">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-indigo-600" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="pl-12 py-3 bg-white text-gray-800 placeholder-gray-500 border-2 border-indigo-100 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 rounded-xl text-base font-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-base font-semibold mb-2 text-gray-800">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-indigo-600" />
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      className="pl-12 py-3 bg-white text-gray-800 placeholder-gray-500 border-2 border-indigo-100 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 rounded-xl text-base font-medium"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-base font-semibold mb-2 text-gray-800">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Enter the subject of your inquiry"
                    className="py-3 bg-white text-gray-800 placeholder-gray-500 border-2 border-indigo-100 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 rounded-xl text-base font-medium"
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-base font-semibold mb-2 text-gray-800">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide detailed information about your requirements or questions..."
                    rows={6}
                    className="py-3 bg-white text-gray-800 placeholder-gray-500 border-2 border-indigo-100 focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 rounded-xl text-base font-medium"
                  />
                </div>
                
                <div className="sm:col-span-2">
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white py-4 font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    <Send size={20} className="mr-3" /> Send Message
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info and Services in balanced layout */}
            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-indigo-200/50 hover:shadow-3xl transition-all duration-300"
              >
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-7 w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Corporate Headquarters</h4>
                      <p className="text-gray-700 mt-1 text-base font-medium">
                        3rd Floor, JMD Regent Arcade Mall A-Block, DIF Phase-1, Sector-28, Gurugram, Haryana 122002
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-7 w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Direct Line</h4>
                      <p className="text-gray-700 mt-1 text-base font-medium">+91 971-817-0004</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-7 w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Business Inquiries</h4>
                      <p className="text-gray-700 mt-1 text-base font-medium">sales@infinityengineerings.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-7 w-7 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">Operating Hours</h4>
                      <p className="text-gray-700 mt-1 text-base font-medium">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                      <p className="text-gray-700 mt-3 text-base font-medium italic">
                        Emergency support available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-indigo-200/50 hover:shadow-3xl transition-all duration-300"
              >
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Our Professional Services</h3>
                <div className="grid grid-cols-1 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="group bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border border-indigo-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 bg-indigo-100 rounded-full">
                          <service.icon className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                        <p className="text-gray-700 text-sm">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          

          {/* Google Map Section with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-indigo-200/50 overflow-hidden hover:shadow-3xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-extrabold text-gray-900">Our Location</h3>
            </div>
            <div className="h-[500px] w-full relative bg-gray-100 rounded-2xl overflow-hidden border-4 border-indigo-200/40 shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.098410123456!2d77.0808453150821!3d28.62845598241989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04cc75265b25%3A0x2f1bb71ce2e4c5d9!2sJMD%20Regent%20Arcade!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
                className="absolute inset-0 rounded-xl"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-800 text-base font-semibold">
                3rd Floor, JMD Regent Arcade Mall A-Block, DIF Phase-1, Sector-28, Gurugram, Haryana 122002
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}