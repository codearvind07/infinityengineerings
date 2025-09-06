'use client';

import { Star, Quote, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    'UL Listed',
    'FM Approved',
    'CE Marked',
    'NFPA Compliant',
    'ISO 9001',
    'ASFP Member',
    'CFPA-E Approved',
    'BSI Certified'
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See why leading architects, engineers, and building professionals choose 
            INFINITY ENGINEERINGS for their critical fire protection needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'backwards' }}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-gray-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gray-300 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gray-700 text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-300">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications & Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.05}s`, animationFillMode: 'backwards' }}>
                <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-all duration-200 hover:bg-gray-600/50">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-gray-300" />
                  </div>
                  <p className="text-sm font-medium text-gray-300">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}