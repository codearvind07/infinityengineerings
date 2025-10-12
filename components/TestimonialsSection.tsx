'use client';

import { Star, Quote, Shield, Award, CheckCircle, Badge, FileText } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Principal Architect',
      company: 'Metropolitan Design Group',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      content: 'INFINITY ENGINEERINGS provided exceptional fire protection solutions for our 40-story commercial complex. Their attention to detail and compliance expertise made the project seamless.'
    },
    {
      name: 'Michael Chen',
      role: 'Fire Safety Engineer',
      company: 'TechBuilt Construction',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      content: 'The FireMaster A1 curtains exceeded our expectations. Installation was professional, and the systems have performed flawlessly for over 3 years.'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Building Manager',
      company: 'Gateway Shopping Center',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      rating: 5,
      content: 'Outstanding customer service and technical support. The smoke protection system has given us and our tenants complete peace of mind.'
    }
  ];

  const certifications = [
    { name: 'UL Listed', icon: Shield, color: 'text-red-500' },
    { name: 'FM Approved', icon: CheckCircle, color: 'text-blue-500' },
    { name: 'CE Marked', icon: Award, color: 'text-purple-500' },
    { name: 'NFPA Compliant', icon: Badge, color: 'text-orange-500' },
    { name: 'ISO 9001', icon: FileText, color: 'text-green-500' },
    { name: 'ASFP Member', icon: Shield, color: 'text-indigo-500' },
    { name: 'CFPA-E Approved', icon: CheckCircle, color: 'text-teal-500' },
    { name: 'BSI Certified', icon: Award, color: 'text-pink-500' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large radial gradients for depth */}
        <div className="absolute -top-1/2 -right-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-200/30 to-blue-100/20 blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-cyan-200/30 to-indigo-100/20 blur-3xl"></div>
        
        {/* Geometric decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-indigo-300/10 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-cyan-300/10 blur-2xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-indigo-100/5 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced design */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-bold text-indigo-800 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border border-indigo-200">
            <span className="w-2 h-2 mr-2 bg-indigo-600 rounded-full animate-pulse" />
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            See why leading architects, engineers, and building professionals choose 
            INFINITY ENGINEERINGS for their critical fire protection needs.
          </p>
        </motion.div>

        {/* Testimonials with new balanced design */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="bg-white/90 backdrop-blur-md border border-indigo-100/50 rounded-3xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 rounded-bl-full"></div>
                
                {/* Quote Icon with enhanced styling */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Rating with enhanced styling */}
                <div className="flex items-center mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gray-700">{testimonial.rating}.0</span>
                </div>

                {/* Content with improved typography */}
                <p className="text-gray-700 mb-8 leading-relaxed text-base font-medium italic">
                  "{testimonial.content}"
                </p>

                {/* Author with enhanced styling */}
                <div className="flex items-center space-x-4 pt-4 border-t border-indigo-100/30">
                  <div className="relative">
                    <Avatar className="h-14 w-14 ring-4 ring-indigo-100">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-indigo-100 to-cyan-100 text-indigo-800 font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-indigo-600 font-semibold">{testimonial.role}</div>
                    <div className="text-gray-600 text-sm mt-1">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications with enhanced design */}
        <motion.div 
          className="bg-white/90 backdrop-blur-md border border-indigo-100/50 rounded-3xl p-10 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500"></div>
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10"></div>
          
          <motion.h3 
            className="text-3xl font-extrabold text-gray-900 mb-10 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Industry Certifications & Standards
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mt-3"></div>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <div className="bg-gradient-to-br from-white to-indigo-50/50 border border-indigo-100/50 rounded-2xl p-5 hover:border-indigo-300/80 transition-all duration-300 h-full shadow-lg hover:shadow-xl transform hover:-translate-y-2 backdrop-blur-sm">
                    <div className="w-14 h-14 bg-gradient-to-br from-white to-indigo-100 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-sm border border-indigo-50">
                      <IconComponent className={`h-7 w-7 ${cert.color}`} />
                    </div>
                    <p className="text-xs font-extrabold text-gray-800 leading-tight tracking-wide">
                      {cert.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}