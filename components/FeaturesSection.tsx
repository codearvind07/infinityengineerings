'use client';

import { Award, Clock, Settings, Zap, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'All our systems meet international fire safety standards and certifications including UL, FM, and CE marking.',
      stats: '100% Compliant',
      color: 'fire-red'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Quick installation with minimal disruption to building operations. Expert team ensures efficient project completion.',
      stats: '< 30 Days',
      color: 'energy-orange'
    },
    {
      icon: Settings,
      title: 'Custom Engineering',
      description: 'Tailored solutions for unique architectural requirements. Every system is designed to fit your specific needs.',
      stats: '500+ Designs',
      color: 'tech-teal'
    },
    {
      icon: Zap,
      title: 'Automatic Operation',
      description: 'Smart fire detection integration with automatic curtain deployment. No manual intervention required during emergencies.',
      stats: '99.9% Reliable',
      color: 'safety-blue'
    },
    {
      icon: ShieldCheck,
      title: 'Proven Reliability',
      description: 'Decades of field-tested performance in real-world applications. Our systems protect millions of square feet globally.',
      stats: '25+ Years',
      color: 'success-green'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services. Comprehensive training and documentation provided.',
      stats: '24/7 Support',
      color: 'premium-gold'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-primary/5 to-sphere-blue-light/5 rounded-full filter blur-2xl opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-sphere-blue-bright/5 to-sphere-blue-accent/5 rounded-full filter blur-2xl opacity-3"></div>
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
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="bg-card/20 border border-sphere-blue-primary/20 rounded-full px-4 py-1.5">
              <span className="text-sphere-blue-primary text-sm font-medium">WHY CHOOSE US</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose <span className="text-sphere-blue-primary">INFINITY ENGINEERINGS</span>?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Industry-leading features and benefits that set our fire protection systems apart. 
            Trusted by architects, engineers, and safety professionals worldwide.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="bg-card/20 border border-sphere-blue-primary/10 backdrop-blur-sm rounded-2xl p-6 h-full hover:border-sphere-blue-primary/30 transition-all duration-300">
                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-5">
                  <div className="bg-card/30 border border-sphere-blue-primary/20 rounded-xl p-3">
                    <feature.icon className="h-7 w-7 text-sphere-blue-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-sphere-blue-primary">{feature.stats}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-card/20 border border-sphere-blue-primary/20 backdrop-blur-sm rounded-2xl p-8">
            <div className="border-t border-sphere-blue-primary/10 pb-6 mb-6"></div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ready to Enhance Your <span className="text-sphere-blue-primary">Building's Safety</span>?
            </motion.h3>
            <motion.p 
              className="text-base text-muted-foreground mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Contact our experts for a comprehensive consultation and custom solution design 
              tailored to your specific building requirements.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.button 
                className="bg-sphere-blue-primary hover:bg-sphere-blue-light text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button 
                className="border border-sphere-blue-primary/20 text-foreground hover:text-sphere-blue-primary hover:bg-sphere-blue-primary/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-card/20 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Download Catalog
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}