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
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-fire-red/10 to-energy-orange/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-safety-blue/10 to-tech-teal/10 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-r from-fire-red/5 to-safety-blue/5 rounded-full mix-blend-soft-light filter blur-3xl opacity-5 animate-pulse"></div>
        
        {/* Additional floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-fire-red/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with more animations */}
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
            <div className="bg-gradient-to-r from-gray-700/10 to-gray-800/10 border border-gray-600/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="text-gray-300 text-sm font-medium">WHY CHOOSE US</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Why Choose <span className="bg-gradient-to-r from-fire-red to-energy-orange bg-clip-text text-transparent">INFINITY ENGINEERINGS</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
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
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-fire-red transition-all duration-500 transform hover:scale-[1.02] card-3d relative overflow-hidden">
                {/* Enhanced gradient border effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                {/* Enhanced Icon & Stats with more animations */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <motion.div 
                    className={`bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 border border-${feature.color}/20 rounded-xl p-3 backdrop-blur-sm`}
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                  </motion.div>
                  <motion.div 
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className={`text-2xl font-bold text-${feature.color}`}>{feature.stats}</div>
                  </motion.div>
                </div>

                {/* Enhanced Content with staggered animations */}
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {feature.description}
                </motion.p>

                {/* Enhanced Hover Animation */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 relative z-10">
                  <motion.div 
                    className={`h-1 w-16 bg-gradient-to-r from-${feature.color} to-${feature.color}/50 rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section with more effects */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-3xl p-10 backdrop-blur-sm relative overflow-hidden">
            {/* Enhanced decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fire-red via-energy-orange to-safety-blue"></div>
            <div className="absolute -inset-px bg-gradient-to-br from-fire-red/5 via-energy-orange/5 to-safety-blue/5 rounded-3xl blur-xl opacity-20"></div>
            
            {/* Floating elements for extra visual interest */}
            <motion.div 
              className="absolute top-4 left-4 w-8 h-8 rounded-full border border-fire-red/30"
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
              className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-energy-orange/20"
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
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Enhance Your <span className="bg-gradient-to-r from-fire-red to-energy-orange bg-clip-text text-transparent">Building's Safety</span>?
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
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
                  className="bg-gradient-to-r from-fire-red to-energy-orange hover:from-fire-red/90 hover:to-energy-orange/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-fire-red/20 hover:shadow-fire-red/40 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="relative z-10">Schedule Consultation</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-fire-red/80 to-energy-orange/80 opacity-0 group-hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
                <motion.button 
                  className="border border-gray-600/30 text-gray-300 hover:text-white hover:border-safety-blue hover:bg-safety-blue/20 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="relative z-10">Download Catalog</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-gray-700/10 opacity-0 group-hover:opacity-100"
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}