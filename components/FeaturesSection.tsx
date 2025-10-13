'use client';

import { Award, Clock, Settings, Zap, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { isLowPerformanceDevice, prefersReducedMotion } from '@/lib/performance';

export default function FeaturesSection() {
  const features = [
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'All our systems meet international fire safety standards and certifications including UL, FM, and CE marking.',
      stats: '100% Compliant',
      color: 'from-amber-400 to-orange-500',
      dark: true
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Quick installation with minimal disruption to building operations. Expert team ensures efficient project completion.',
      stats: '< 30 Days',
      color: 'from-cyan-400 to-blue-500',
      dark: false
    },
    {
      icon: Settings,
      title: 'Custom Engineering',
      description: 'Tailored solutions for unique architectural requirements. Every system is designed to fit your specific needs.',
      stats: '500+ Designs',
      color: 'from-emerald-400 to-teal-500',
      dark: true
    },
    {
      icon: Zap,
      title: 'Automatic Operation',
      description: 'Smart fire detection integration with automatic curtain deployment. No manual intervention required during emergencies.',
      stats: '99.9% Reliable',
      color: 'from-violet-400 to-purple-500',
      dark: false
    },
    {
      icon: ShieldCheck,
      title: 'Proven Reliability',
      description: 'Decades of field-tested performance in real-world applications. Our systems protect millions of square feet globally.',
      stats: '5+ Years',
      color: 'from-rose-400 to-pink-500',
      dark: true
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support and maintenance services. Comprehensive training and documentation provided.',
      stats: '24/7 Support',
      color: 'from-indigo-400 to-blue-500',
      dark: false
    }
  ];

  const isLowPerf = isLowPerformanceDevice();
  const prefersReducedMotionEnabled = prefersReducedMotion();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Unique Background Elements - simplified for low performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dual-tone radial gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-gray-900/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-200/50 via-transparent to-transparent"></div>
        
        {/* Geometric floating shapes - simplified for low performance */}
        {!isLowPerf && !prefersReducedMotionEnabled ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-900/10 to-transparent blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-200/30 to-transparent blur-3xl"></div>
          </>
        ) : (
          // Simplified versions for low performance
          <>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-indigo-900/5 to-transparent blur-xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-200/15 to-transparent blur-xl"></div>
          </>
        )}
        
        {/* Abstract line patterns - simplified for low performance */}
        {!isLowPerf && !prefersReducedMotionEnabled ? (
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-10 w-1/3 h-0.5 bg-gradient-to-r from-indigo-500/20 to-transparent"></div>
            <div className="absolute top-2/3 right-10 w-1/4 h-0.5 bg-gradient-to-l from-cyan-500/20 to-transparent"></div>
          </div>
        ) : (
          // Simplified versions for low performance
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/3 left-10 w-1/3 h-0.5 bg-gradient-to-r from-indigo-500/10 to-transparent"></div>
            <div className="absolute top-2/3 right-10 w-1/4 h-0.5 bg-gradient-to-l from-cyan-500/10 to-transparent"></div>
          </div>
        )}
        
        {/* Floating particles - reduced for low performance */}
        {!isLowPerf && !prefersReducedMotionEnabled ? (
          <>
            <div className="absolute top-1/5 left-1/6 w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute top-2/5 right-1/3 w-1.5 h-1.5 bg-violet-500 rounded-full animate-pulse"></div>
          </>
        ) : (
          // Simplified versions for low performance
          <>
            <div className="absolute top-1/5 left-1/6 w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with professional typography */}
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
            <div className="inline-flex items-center px-4 py-2 text-xs font-semibold text-indigo-700 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border border-indigo-200 uppercase tracking-wider">
              <span className="w-2 h-2 mr-2 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-full animate-pulse" />
              WHY CHOOSE US
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">INFINITY ENGINEERINGS</span>?
          </motion.h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Industry-leading features and benefits that set our fire protection systems apart. 
            Trusted by architects, engineers, and safety professionals worldwide.
          </motion.p>
        </motion.div>

        {/* Features Grid with standardized typography */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={`${feature.dark ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-white text-gray-900'} rounded-2xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden border ${feature.dark ? 'border-gray-700/50' : 'border-gray-200'}`}>
                {/* Decorative corner element - simplified for low performance */}
                {!isLowPerf && !prefersReducedMotionEnabled ? (
                  <div className={`absolute top-0 right-0 w-32 h-32 ${feature.dark ? 'bg-gradient-to-br from-indigo-900/30 to-transparent' : 'bg-gradient-to-br from-indigo-100/50 to-transparent'} rounded-bl-full`}></div>
                ) : (
                  <div className={`absolute top-0 right-0 w-24 h-24 ${feature.dark ? 'bg-gradient-to-br from-indigo-900/20 to-transparent' : 'bg-gradient-to-br from-indigo-100/30 to-transparent'} rounded-bl-full`}></div>
                )}
                
                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-5">
                  <div className="relative">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${feature.dark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} rounded-full border-2 flex items-center justify-center`}>
                      <div className="w-1.5 h-1.5 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text ${feature.dark ? 'text-transparent' : 'text-transparent'}`}>{feature.stats}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className={`text-sm ${feature.dark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section with professional typography */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-white via-indigo-50/30 to-white rounded-2xl p-8 shadow-xl relative overflow-hidden border border-indigo-100/50">
            {/* Decorative elements - simplified for low performance */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500"></div>
            {!isLowPerf && !prefersReducedMotionEnabled ? (
              <>
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-indigo-900/10 to-cyan-900/10"></div>
                <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-tr from-cyan-200/30 to-indigo-200/30"></div>
              </>
            ) : (
              // Simplified versions for low performance
              <>
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-900/5 to-cyan-900/5"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gradient-to-tr from-cyan-200/15 to-indigo-200/15"></div>
              </>
            )}
            
            <div className="border-t border-indigo-100/50 pb-6 mb-6"></div>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ready to Enhance Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Building's Safety</span>?
            </motion.h3>
            
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
            
            <motion.p 
              className="text-base text-gray-600 mb-6 max-w-2xl mx-auto font-normal"
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
                className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
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
                className="border-2 border-indigo-300 text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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