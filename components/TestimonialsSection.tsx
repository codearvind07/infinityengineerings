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
    <section className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-primary/5 to-sphere-blue-light/5 rounded-full filter blur-2xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-light/5 to-sphere-blue-pale/5 rounded-full filter blur-2xl opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See why leading architects, engineers, and building professionals choose 
            INFINITY ENGINEERINGS for their critical fire protection needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="bg-card/50 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-2xl p-6 h-full hover:border-sphere-blue-primary/40 transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-5">
                  <Quote className="h-6 w-6 text-sphere-blue-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-sphere-blue-primary fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-card text-foreground text-xs">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-sphere-blue-primary">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="bg-card/50 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="text-xl font-bold text-foreground mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Certifications & Standards
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <div className="bg-card/30 border border-sphere-blue-primary/30 rounded-lg p-3 hover:border-sphere-blue-primary/60 transition-all duration-300 h-full">
                    <div className="w-10 h-10 bg-card rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <IconComponent className={`h-5 w-5 ${cert.color}`} />
                    </div>
                    <p className="text-xs font-medium text-foreground leading-tight">
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