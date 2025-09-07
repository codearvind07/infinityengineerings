'use client';

import { motion } from 'framer-motion';

// Associated Brands Data based on the provided image
const associatedBrands = [
  {
    id: 1,
    name: 'Cooper Fire UK',
    description: 'Innovative advanced fire and smoke curtains for superior safety, compliance, and reliable business protection.',
    icon: '🔥',
    category: 'Fire Protection'
  },
  {
    id: 2,
    name: 'FireView Glasses',
    description: 'Independent manufacturer of high-quality fire resistant glasses.',
    icon: '🔳',
    category: 'Fire Resistant Glass'
  },
  {
    id: 3,
    name: 'Bhawani Fire Protection',
    description: 'A house of complete fire exit solutions.',
    icon: '🛡️',
    category: 'Fire Exit Solutions'
  },
  {
    id: 4,
    name: 'Panasonic Life Solutions',
    description: 'Panasonic LED lighting provides a clear advantage over conventional lighting solutions.',
    icon: '💡',
    category: 'LED Lighting'
  },
  {
    id: 5,
    name: 'Dormakaba India Private Limited',
    description: 'DORMA MAKE - DOOR HARDWARES PRODUCTS / SECURITY FUNCTIONS WITH VISUAL APPEAL FOR ANY COMMERICAL BUILDINGS.',
    icon: '🚪',
    category: 'Door Hardware'
  }
];

export default function AssociatedBrandsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Trusted Partnerships</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span style={{ color: 'rgb(247, 87, 73)' }}>Our Associated</span>
            <span className="block text-white">Brands</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Partnering with industry leaders to deliver 
            <span style={{ color: 'rgb(247, 87, 73)' }} className="font-semibold"> comprehensive fire safety solutions</span> and cutting-edge technology
          </motion.p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid gap-8 mb-20">
          {associatedBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  {/* Brand Icon */}
                  <motion.div 
                    className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110"
                    style={{ borderColor: 'rgb(247, 87, 73)', borderWidth: '2px' }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span>{brand.icon}</span>
                  </motion.div>
                  
                  {/* Brand Content */}
                  <div className="flex-grow text-left">
                    {/* Category Badge */}
                    <motion.div 
                      className="inline-block mb-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                        style={{ 
                          backgroundColor: 'rgba(247, 87, 73, 0.15)', 
                          color: 'rgb(247, 87, 73)',
                          border: '1px solid rgba(247, 87, 73, 0.3)'
                        }}
                      >
                        {brand.category}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                      style={{ color: 'rgb(247, 87, 73)' }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {brand.name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg text-gray-300 leading-relaxed max-w-3xl"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {brand.description}
                    </motion.p>
                  </div>

                  {/* Decorative Element */}
                  <motion.div 
                    className="hidden lg:block flex-shrink-0 w-1 h-20 rounded-full"
                    style={{ backgroundColor: 'rgb(247, 87, 73)' }}
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 80, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  />
                </div>

                {/* Hover effect line */}
                <motion.div 
                  className="mt-8 h-0.5 rounded-full"
                  style={{ backgroundColor: 'rgb(247, 87, 73)' }}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.p 
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            Interested in learning more about our 
            <span style={{ color: 'rgb(247, 87, 73)' }} className="font-semibold"> partnerships and solutions</span>?
          </motion.p>
          
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <button 
              className="px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
              style={{ 
                backgroundColor: 'rgb(247, 87, 73)',
                boxShadow: '0 10px 30px rgba(247, 87, 73, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(247, 87, 73, 0.4)';
                e.currentTarget.style.backgroundColor = 'rgb(220, 65, 50)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(247, 87, 73, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgb(247, 87, 73)';
              }}
            >
              Contact Our Team
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}