'use client';

import { Shield, Target, Eye, Heart, Award, Users, Zap, Building, CheckCircle, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import banner from '@/public/slider.jpg';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation
function useCountUp(end: number, duration: number = 2000, start: number = 0) {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start, isInView]);
  return [count, ref] as const;
}
// CountUp Component
function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, ref] = useCountUp(end, duration);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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
    { number: 15, suffix: '+', label: 'Years in India', duration: 2500 },
    { number: 1000, suffix: '+', label: 'Projects Delivered', duration: 3000 },
    { number: 99, suffix: '%', label: 'Client Satisfaction', duration: 2000 },
    { number: 30, suffix: '+', label: 'Cities Covered', duration: 1500 }
  ];

  const achievements = [
    { icon: Globe, text: 'Exclusive distributor of COOPERS FIRE LIMITED UK' },
    { icon: CheckCircle, text: 'Compliance with international safety standards' },
    { icon: Star, text: '30+ years of British engineering excellence' },
    { icon: Building, text: 'Trusted across diverse sectors nationwide' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
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
            <span className="text-white/80 text-sm font-medium tracking-wide uppercase">About Our Company</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{ color: 'rgb(247, 87, 73)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            INFINITY 
            <span className="block text-white">ENGINEERINGS</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            India&apos;s premier fire and smoke protection specialist, delivering world-class safety solutions 
            that seamlessly integrate with architectural designs as the authorized distributor of 
            <span style={{ color: 'rgb(247, 87, 73)' }} className="font-semibold"> COOPERS FIRE LIMITED UK</span>
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                <div 
                  className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
                  style={{ color: 'rgb(247, 87, 73)' }}
                >
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-medium text-gray-300">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h3 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{ color: 'rgb(247, 87, 73)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Partnership
              </motion.h3>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  INFINITY ENGINEERINGS is the <span style={{ color: 'rgb(247, 87, 73)' }} className="font-semibold">exclusive authorized distributor</span> of COOPERS FIRE LIMITED UK in India - the global pioneers and leading manufacturers of automatic drop-down fire and smoke curtains.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  This partnership brings over <span style={{ color: 'rgb(247, 87, 73)' }} className="font-semibold">30 years of British engineering excellence</span> to the Indian construction industry, ensuring compliance with international safety standards while maintaining architectural aesthetics.
                </motion.p>
              </div>
            </div>
            
            {/* Achievement Cards */}
            <motion.div 
              className="grid gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <achievement.icon 
                      className="h-6 w-6" 
                      style={{ color: 'rgb(247, 87, 73)' }} 
                    />
                  </div>
                  <p className="text-gray-300 font-medium">{achievement.text}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Mission Card */}
            <motion.div 
              className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-start space-x-4">
                <Award 
                  className="h-8 w-8 flex-shrink-0 mt-1" 
                  style={{ color: 'rgb(247, 87, 73)' }} 
                />
                <div>
                  <h4 
                    className="text-2xl font-bold mb-4"
                    style={{ color: 'rgb(247, 87, 73)' }}
                  >
                    Our Mission
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To be India&apos;s most trusted partner in fire and smoke protection, delivering innovative solutions that <span style={{ color: 'rgb(247, 87, 73)' }} className="font-semibold">save lives while preserving architectural integrity</span>. We aim to make advanced fire safety accessible across all building types, from luxury developments to essential infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group">
              <Image 
                src={banner}
                alt="Fire and smoke curtain protection system"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
              ></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                  <h5 className="text-xl font-bold text-white mb-2">Advanced Fire Protection</h5>
                  <p className="text-gray-200">Cutting-edge technology ensuring safety and compliance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: 'rgb(247, 87, 73)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h3>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The principles that guide everything we do in delivering exceptional fire protection solutions
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 text-center">
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon 
                    className="h-8 w-8" 
                    style={{ color: 'rgb(247, 87, 73)' }} 
                  />
                </motion.div>
                
                {/* Content */}
                <h4 
                  className="text-xl font-bold mb-4"
                  style={{ color: 'rgb(247, 87, 73)' }}
                >
                  {value.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}