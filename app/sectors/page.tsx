'use client';

import { Button } from '@/components/ui/button';
import ShaderBackground from '@/components/ShaderBackground';
import InteractiveSectorViewer from '@/components/InteractiveSectorViewer';
import { motion } from 'framer-motion';

export default function SectorsPage() {
  return (
    <main className="min-h-screen py-16 sm:py-20 relative indigo-purple-gradient-light">
      <ShaderBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.div 
              className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm font-bold text-amber-100 bg-white/10 rounded-full shadow-lg backdrop-blur-sm border border-amber-200/20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-1.5 sm:mr-2 bg-amber-400 rounded-full animate-pulse" />
              SECTORS
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fire Protection Solutions for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">Building</span>
            </motion.h1>
            
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full mb-6 sm:mb-8"></div>
            
            <motion.p 
              className="text-base sm:text-xl text-amber-100 max-w-3xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Infinity Engineerings, we've developed a wide range of fire curtains and smoke curtains to protect every type of building. 
              No matter what your sector, whether it's a fire curtain for a domestic house or a smoke curtain for a tall building, 
              we have a fire safety solution approved to protect.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Interactive Sector Viewer */}
        <motion.div 
          className="my-12 sm:my-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <InteractiveSectorViewer />
        </motion.div>
        
        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-xl">
            <div className="border-t border-white/20 pb-4 sm:pb-6 mb-4 sm:mb-6"></div>
            
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Ready to Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-300">Facility</span>?
            </motion.h2>
            
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
            
            <motion.p 
              className="text-base sm:text-lg text-amber-100 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore our comprehensive range of fire protection solutions tailored to your specific industry requirements.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                Explore Sectors
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}