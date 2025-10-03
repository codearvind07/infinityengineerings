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
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-primary/5 to-sphere-blue-light/5 rounded-full filter blur-2xl opacity-3"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-bright/5 to-sphere-blue-accent/5 rounded-full filter blur-2xl opacity-2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in <span className="text-sphere-blue-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your fire protection needs? Our experts are here to help you 
            find the perfect solution for your building&apos;s safety requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div 
            className="bg-card/20 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-2xl p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-foreground mb-5">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sphere-blue-primary mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-card/50 border-sphere-blue-primary/30 text-foreground focus:border-sphere-blue-primary"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sphere-blue-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-card/50 border-sphere-blue-primary/30 text-foreground focus:border-sphere-blue-primary"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-sphere-blue-primary mb-2">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-card/50 border-sphere-blue-primary/30 text-foreground focus:border-sphere-blue-primary"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-sphere-blue-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-card/50 border-sphere-blue-primary/30 text-foreground focus:border-sphere-blue-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sphere-blue-primary mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-card/50 border-sphere-blue-primary/30 text-foreground focus:border-sphere-blue-primary"
                  placeholder="Fire Protection Consultation"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sphere-blue-primary mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-card/50 border-sphere-blue-primary/30 text-foreground focus:border-sphere-blue-primary"
                  placeholder="Please provide details about your project requirements, building type, and specific fire protection needs..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-sphere-blue-primary hover:bg-sphere-blue-light text-white py-2.5 text-base font-semibold transition-all duration-200 rounded-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index} 
                className="bg-card/20 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-xl p-5 hover:border-sphere-blue-primary/40 transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`bg-card/30 border border-sphere-blue-primary/30 rounded-lg p-3`}>
                    <info.icon className={`h-5 w-5 text-${info.color}`} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Emergency Contact */}
            <motion.div 
              className="bg-gradient-to-r from-card/60 to-card/70 border border-sphere-blue-primary/30 rounded-xl p-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold text-foreground mb-2">Emergency Support</h4>
              <p className="text-muted-foreground mb-3 text-sm">
                24/7 emergency support for critical fire protection system issues.
              </p>
              <div className="flex items-center space-x-2 text-sphere-blue-primary font-semibold">
                <Phone className="h-4 w-4" />
                <span>971-817-0004</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}