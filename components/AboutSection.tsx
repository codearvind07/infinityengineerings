'use client';

import { Shield, Target, Eye, Heart, Award, Users, Zap, Building } from 'lucide-react';
import { motion } from 'framer-motion';
import banner from '@/public/slider.jpg';
import Image from 'next/image';
export default function AboutSection() {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Every solution is engineered with the highest safety standards and regulatory compliance in mind.'
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Our systems are designed with meticulous attention to detail and proven reliability.'
    },
    {
      icon: Eye,
      title: 'Innovative Vision',
      description: 'Constantly advancing fire protection technology to meet evolving building safety needs.'
    },
    {
      icon: Heart,
      title: 'Trusted Partnership',
      description: 'Building long-term relationships with architects, contractors, and building owners worldwide.'
    }
  ];

  const stats = [
    { number: '25+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4">
            <div className="bg-gray-800 border border-gray-700 rounded-full px-4 py-1.5">
              <span className="text-amber-200 text-sm font-medium">ABOUT US</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-amber-400">INFINITY ENGINEERINGS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A company with the ideology of customer service in heart, trying to shape up as a leading company to provide products which complements the architectural design and at the same time gives the sense of safety with the value for money solution to customers.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Partnership</h3>
            <p className="text-gray-300 text-lg">
              Infinity Engineerings partners with COOPERS FIRE LIMITED U.K, the inventor of automatic drop down fire and smoke curtains and also the leading manufacturer of fire and smoke curtains worldwide.
            </p>
            <p className="text-gray-300 text-lg">
              As the authorized distributor of COOPERS FIRE LIMITED U.K in India, we bring world-class fire protection solutions to the Indian market, ensuring that buildings across the country meet the highest safety standards.
            </p>
            
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Our Mission</h4>
                  <p className="text-gray-300">
                    To provide value-for-money fire protection solutions that complement architectural designs while ensuring the highest levels of safety for building occupants.
                  </p>
                </div>
              </div>
            </div>
            
            <motion.button 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Solutions
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
              <Image 
                src={banner}
                alt="Fire and smoke curtain protection system"
                className="w-full h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do in delivering exceptional fire protection solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 h-full">
                  <div className="bg-gray-700 rounded-lg p-3 w-fit mb-4">
                    <value.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Enhance Your Building's Safety?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our experts for a comprehensive consultation and custom solution design 
              tailored to your specific building requirements.
            </p>
            <motion.button 
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}