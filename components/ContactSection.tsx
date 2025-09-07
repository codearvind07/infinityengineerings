'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['Corporate Office:', 'New Delhi, India', 'Regional Offices across major cities'],
      color: 'fire-red'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['971-817-0004 (Sales & Support)'],
      color: 'energy-orange'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['sales@infinityengineerings.com'],
      color: 'safety-blue'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 3:00 PM', 'Sunday: Emergency Only'],
      color: 'tech-teal'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gold-dark via-gold-deep to-gold-dark/90 relative overflow-hidden gold-particles">
      {/* Golden animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 gold-gradient rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-gold-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-gold-bright/20 to-gold-accent/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-gold-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gold-glow-text mb-6">
            Get in <span className="text-fire-red gold-shimmer">Touch</span>
          </h2>
          <p className="text-xl text-gold-platinum/80 max-w-3xl mx-auto">
            Ready to discuss your fire protection needs? Our experts are here to help you 
            find the perfect solution for your building&apos;s safety requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="gold-card rounded-2xl p-8 gold-interactive"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gold-platinum mb-6 gold-glow-text">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gold-light mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gold-deep/50 border-gold-primary/30 text-gold-platinum focus:border-gold-light"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold-light mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gold-deep/50 border-gold-primary/30 text-gold-platinum focus:border-gold-light"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gold-light mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-gold-deep/50 border-gold-primary/30 text-gold-platinum focus:border-gold-light"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gold-light mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gold-deep/50 border-gold-primary/30 text-gold-platinum focus:border-gold-light"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gold-light mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-gold-deep/50 border-gold-primary/30 text-gold-platinum focus:border-gold-light"
                  placeholder="Fire Protection Consultation"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gold-light mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gold-deep/50 border-gold-primary/30 text-gold-platinum focus:border-gold-light"
                  placeholder="Please provide details about your project requirements, building type, and specific fire protection needs..."
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  className="w-full gold-button text-white py-3 text-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 rounded-full"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="gold-card rounded-xl p-6 hover:border-gold-primary/60 transition-all duration-300 gold-interactive"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className={`gold-glass border border-gold-primary/30 rounded-lg p-3`}
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <info.icon className={`h-6 w-6 text-${info.color}`} />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-gold-platinum mb-2 gold-glow-text">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gold-platinum/80">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency Contact */}
            <motion.div 
              className="bg-gradient-to-r from-gold-deep/60 to-gold-dark/70 border border-gold-primary/30 rounded-xl p-6 gold-interactive"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-xl font-bold text-gold-platinum mb-3 gold-glow-text">Emergency Support</h4>
              <p className="text-gold-platinum/80 mb-4">
                24/7 emergency support for critical fire protection system issues.
              </p>
              <div className="flex items-center space-x-2 text-gold-light font-semibold">
                <Phone className="h-5 w-5" />
                <span>971-817-0004</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}