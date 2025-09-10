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
    { name: 'UL Listed', icon: Shield, color: 'text-red-400' },
    { name: 'FM Approved', icon: CheckCircle, color: 'text-blue-400' },
    { name: 'CE Marked', icon: Award, color: 'text-purple-400' },
    { name: 'NFPA Compliant', icon: Badge, color: 'text-orange-400' },
    { name: 'ISO 9001', icon: FileText, color: 'text-green-400' },
    { name: 'ASFP Member', icon: Shield, color: 'text-indigo-400' },
    { name: 'CFPA-E Approved', icon: CheckCircle, color: 'text-teal-400' },
    { name: 'BSI Certified', icon: Award, color: 'text-pink-400' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light relative overflow-hidden">
      {/* Navy blue animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/20 to-sphere-blue-light/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-accent/10 to-sphere-blue-bright/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sphere-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-sphere-slate-light max-w-3xl mx-auto">
            See why leading architects, engineers, and building professionals choose 
            INFINITY ENGINEERINGS for their critical fire protection needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'backwards' }}>
              <div className="bg-sphere-navy-light/20 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-2xl p-8 h-full hover:border-sphere-blue-light/40 transition-all duration-300 hover:transform hover:scale-105">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-sphere-blue-light" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-sphere-blue-light fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sphere-slate-light text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-sphere-navy-dark text-sphere-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sphere-white">{testimonial.name}</div>
                    <div className="text-sm text-sphere-blue-light">{testimonial.role}</div>
                    <div className="text-sm text-sphere-slate-light">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="bg-sphere-navy-light/20 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-sphere-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Certifications & Standards
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="bg-sphere-navy-light/30 border border-sphere-blue-primary/30 rounded-lg p-4 hover:border-sphere-blue-light/60 transition-all duration-300 hover:bg-sphere-blue-primary/10 h-full">
                    <motion.div 
                      className="w-12 h-12 bg-sphere-navy-dark rounded-lg mx-auto mb-3 flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className={`h-6 w-6 ${cert.color}`} />
                    </motion.div>
                    <p className="text-sm font-medium text-sphere-white leading-tight">
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