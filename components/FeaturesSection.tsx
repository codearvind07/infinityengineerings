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
    <section className="py-20 bg-gradient-to-br from-gold-dark via-gold-deep to-gold-dark/90 relative overflow-hidden gold-particles">
      {/* Golden animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 gold-gradient rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-gold-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-gold-bright/20 to-gold-accent/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-gold-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-gold-copper/10 to-gold-light/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-gold-pulse"></div>
        
        {/* Golden floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 3}px`,
              height: `${Math.random() * 15 + 3}px`,
              background: `hsl(var(--gold-${['primary', 'light', 'bright', 'accent', 'platinum'][Math.floor(Math.random() * 5)]}) / 0.6)`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Golden Header with enhanced animations */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="gold-glass rounded-full px-4 py-1.5">
              <span className="text-gold-platinum text-sm font-medium gold-glow-text">WHY CHOOSE US</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gold-glow-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Why Choose <span className="gold-shimmer">INFINITY ENGINEERINGS</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gold-platinum/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Industry-leading features and benefits that set our fire protection systems apart. 
            Trusted by architects, engineers, and safety professionals worldwide.
          </motion.p>
        </motion.div>

        {/* Features Grid with enhanced animations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="gold-card rounded-2xl p-8 h-full gold-interactive relative overflow-hidden">
                {/* Golden gradient border effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
                
                {/* Golden Icon & Stats with enhanced animations */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <motion.div 
                    className="gold-glass rounded-xl p-3 gold-interactive"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <feature.icon className="h-8 w-8 text-gold-light animate-gold-pulse" />
                  </motion.div>
                  <motion.div 
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="text-2xl font-bold gold-shimmer">{feature.stats}</div>
                  </motion.div>
                </div>

                {/* Golden Content with staggered animations */}
                <motion.h3 
                  className="text-2xl font-bold text-gold-platinum mb-4 relative z-10 gold-glow-text"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gold-platinum/80 leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>

                {/* Golden Hover Animation */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 relative z-10">
                  <motion.div 
                    className="h-1 w-16 gold-gradient rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cosmic CTA Section with enhanced effects */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="cosmic-card rounded-3xl p-10 relative overflow-hidden cosmic-particles">
            {/* Cosmic decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 cosmic-gradient"></div>
            <div className="absolute -inset-px cosmic-gradient rounded-3xl blur-xl opacity-20"></div>
            
            {/* Floating cosmic elements */}
            <motion.div 
              className="absolute top-4 left-4 w-8 h-8 rounded-full cosmic-border-glow"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-cosmic-orange/20 animate-cosmic-pulse"
              animate={{ 
                y: [0, 15, 0],
                x: [0, -15, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-cosmic-silver mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Enhance Your <span className="cosmic-holographic">Building's Safety</span>?
              </motion.h3>
              <motion.p 
                className="text-lg text-cosmic-silver/80 mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Contact our experts for a comprehensive consultation and custom solution design 
                tailored to your specific building requirements.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="cosmic-button text-cosmic-silver px-8 py-4 rounded-xl font-semibold cosmic-interactive"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="relative z-10">Schedule Consultation</span>
                </motion.button>
                <motion.button 
                  className="cosmic-border-glow text-cosmic-silver hover:text-cosmic-cyan hover:bg-cosmic-blue/20 px-8 py-4 rounded-xl font-semibold cosmic-interactive bg-cosmic-deep/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="relative z-10">Download Catalog</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}