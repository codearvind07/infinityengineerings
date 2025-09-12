'use client';

import { Shield, Target, Eye, Heart, Award, Users, Zap, Building, CheckCircle, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import banner from '@/public/slider.jpg';
import Image from 'next/image';
import mdImage from '@/public/director.png';
import vikashImage from '@/public/Vikash.png';
import bhartiImage from '@/public/Bharti.png';
import manishaImage from '@/public/Manisha.png';
import hiteshImage from '@/public/Hitesh.png';
import shrutiImage from '@/public/Shruti.png';
import aryanImage from '@/public/Aryan.png';
import { useState, useEffect, useRef } from 'react';
// Import the AssociatedBrandsSection from the correct location
import AssociatedBrandsSection from './AssociatedBrandsSection';

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
    { icon: Globe, text: 'Authorized distributor for Coopers Fire Ltd. (London, UK) for Fire and Smoke Curtains across India, Nepal, Bhutan, and Sri Lanka' },
    { icon: CheckCircle, text: 'Corporate partnership with Panasonic LED Lighting for comprehensive pan-India operations' },
    { icon: Star, text: 'North Indian distributor for Dormakaba\'s premium hardware solutions with nationwide service coverage' },
    { icon: Building, text: 'Trusted partner for architects, consultants, and builders throughout India since June 2021' }
  ];

  const ourValues = [
    {
      number: "01",
      title: "Build The Team",
      description: "We foster teamwork and continuous learning. Our experienced professionals ensure every installation meets highest safety standards with trusted, reliable service."
    },
    {
      number: "02",
      title: "Think Innovative",
      description: "We deliver tailored fire safety solutions: Fire/Smoke Curtains, Fire-rated Glass, Doors, and Access Control Systems, designed to each client's unique space. With innovation and expertise, we ensure maximum protection, cost efficiency, and optimal coverage."
    },
    {
      number: "03",
      title: "Become a Proud Company",
      description: "With the years of excellence, we're the region's most trusted fire safety partner. Our success is measured by lives protected through quality installations and reliable service."
    }
  ];

  const teamMembers = [
    {
      name: "Vikas K Mathur",
      position: "Founder & MD",
      description: "Managing Director of Infinity Engineerings with over 23 years of extensive experience in Sales and Marketing. Expertise spans architectural door hardware, glass, and fire & safety products with global exposure."
    },
    {
      name: "Bharti Manchanda",
      position: "Chief Operating Officer",
      description: "32 years, Bachelor of Science graduate from Delhi University with 12 years of proven expertise in Office Management and Finance. Ensures smooth operations and financial excellence."
    },
    {
      name: "Manisha Dasgupta",
      position: "National Head - Business Development",
      description: "MBA in Human Resource Management & Administration from Poddar University, with over 24 years of rich experience in Marketing and Sales. Leading Business Development nationally, driving growth strategies and client relations."
    },
    {
      name: "Hitesh Bhatnagar",
      position: "Project Manager",
      description: "33 years old, holds a Bachelor's degree in Commerce with over 12 years of experience in project management. Skilled in handling large-scale projects and site operations across PAN India."
    },
    {
      name: "Shruti Maurya",
      position: "Regional Head - Business Development (North India)",
      description: "27 years old, Electrical Engineer from Galgotia University, Greater Noida, with over 5 years of experience in Sales and Marketing. Heading Business Development for Northern India with expertise in client acquisition and regional growth."
    },
    {
      name: "Aryan Mehta",
      position: "Trainee",
      description: "19 years old, currently pursuing a Bachelor's degree in Commerce. A full-time trainee with immense passion, energy, and a strong drive to build a successful career in business management."
    }
  ];

  const teamMemberImages = [
    vikashImage,   // Vikas K Mathur
    bhartiImage,   // Bharti Manchanda
    manishaImage,  // Manisha Dasgupta
    hiteshImage,   // Hitesh Bhatnagar
    shrutiImage,   // Shruti Maurya
    aryanImage     // Aryan Mehta
  ];

  const managingDirector = {
    name: "Vikas K Mathur",
    title: "Founder & Managing Director",
    message: "When we started this business, it wasn't just about products; it was about protecting the people we care about. As a company, we carefully choose which safety solutions to bring to you. Every fire curtain, access system, and safety door we distribute represents our promise to help keep your loved ones safe. We don't just sell products; we partner with manufacturers who share our commitment to quality and reliability. When you call us about protecting your office, school, or home, we see the real people behind that request. That's why we work tirelessly to connect you with solutions that truly make a difference. We're not just distributors, we're your neighbors, parents, and community members who understand what safety means to families like ours."
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sphere-navy-dark via-sphere-navy-medium to-sphere-navy-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/20 to-sphere-blue-light/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sphere-blue-light/20 to-sphere-blue-pale/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sphere-blue-primary/15 to-teal-400/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
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
            className="inline-flex items-center bg-gradient-to-r from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/40 rounded-full px-6 py-2 mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span 
              className="text-sm font-medium tracking-wide uppercase"
              style={{ 
                background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              About Company
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{ 
              background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--sphere-blue-pale)) 50%, hsl(var(--tech-teal)) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            INFINITY ENGINEERINGS
            
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg text-center max-w-4xl mx-auto leading-relaxed text-sphere-white/80 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            INFINITY ENGINEERINGS is a premier distributor of innovative building solutions, driving safety, sustainability, and functionality across the construction industry since June 2021. We have established ourselves as a trusted partner for architects, consultants, and builders throughout India through strategic partnerships that include serving as the authorized distributor for Coopers Fire Ltd. (London, UK) for Fire and Smoke Curtains across India, Nepal, Bhutan, and Sri Lanka, maintaining a corporate partnership with Panasonic LED Lighting for comprehensive pan-India operations, and operating as the North Indian distributor for Dormakaba&apos;s premium hardware solutions with nationwide service coverage.
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
              <div className="bg-gradient-to-br from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/30 rounded-2xl p-8 h-full transition-all duration-300 group-hover:from-sphere-navy-dark/90 group-hover:to-sphere-navy-medium/90 group-hover:border-teal-400/50 shadow-xl">
                <div 
                  className="text-4xl md:text-5xl font-bold mb-3 tracking-tight"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-medium text-sphere-white/90">{stat.label}</div>
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
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Partnership
              </motion.h3>
              
              <div className="space-y-6 text-lg text-sphere-white/90 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  INFINITY ENGINEERINGS is the <span className="text-sphere-blue-light font-semibold">exclusive authorized distributor</span> of COOPERS FIRE LIMITED UK in India - the global pioneers and leading manufacturers of automatic drop-down fire and smoke curtains.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  This partnership brings over <span className="text-sphere-blue-light font-semibold">30 years of British engineering excellence</span> to the Indian construction industry, ensuring compliance with international safety standards while maintaining architectural aesthetics.
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
                  className="flex items-center space-x-4 bg-gradient-to-r from-sphere-navy-dark/60 to-sphere-navy-medium/60 backdrop-blur-md border border-sphere-blue-light/30 rounded-xl p-4 transition-all duration-300 hover:from-sphere-navy-dark/80 hover:to-sphere-navy-medium/80 hover:border-teal-400/50 shadow-md"
                  whileHover={{ x: 8 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <achievement.icon 
                      className="h-6 w-6" 
                      style={{ color: 'hsl(var(--tech-teal))' }} 
                    />
                  </div>
                  <p className="text-sphere-white/90 font-medium">{achievement.text}</p>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Mission Card */}
            <motion.div 
              className="bg-gradient-to-r from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/40 rounded-2xl p-8 shadow-xl"
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
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Our Mission
                  </h4>
                  <p className="text-lg text-sphere-white/90 leading-relaxed">
                    To be India&apos;s most trusted partner in fire and smoke protection, delivering innovative solutions that <span className="text-sphere-blue-light font-semibold">save lives while preserving architectural integrity</span>. We aim to make advanced fire safety accessible across all building types, from luxury developments to essential infrastructure.
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
            <div className="relative bg-gradient-to-br from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/40 rounded-3xl overflow-hidden group shadow-2xl">
              <Image 
                src={banner}
                alt="Fire and smoke curtain protection system"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
              ></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-gradient-to-r from-sphere-navy-dark/80 to-sphere-navy-medium/80 backdrop-blur-md border border-sphere-blue-light/40 rounded-xl p-6 shadow-lg">
                  <h5 
                    className="text-xl font-bold mb-2"
                    style={{ 
                      background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    Advanced Fire Protection
                  </h5>
                  <p className="text-sphere-white/90">Cutting-edge technology ensuring safety and compliance</p>
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
            style={{ 
              background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h3>
          <motion.p 
            className="text-xl text-sphere-white/90 max-w-3xl mx-auto leading-relaxed"
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
              <div className="bg-gradient-to-br from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/30 rounded-2xl p-8 h-full transition-all duration-300 group-hover:from-sphere-navy-dark/90 group-hover:to-sphere-navy-medium/90 group-hover:border-teal-400/50 text-center shadow-xl">
                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br from-sphere-navy-dark/60 to-sphere-navy-medium/60 border border-sphere-blue-light/40 shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon 
                    className="h-8 w-8" 
                    style={{ color: 'hsl(var(--tech-teal))' }} 
                  />
                </motion.div>
                
                {/* Content */}
                <h4 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {value.title}
                </h4>
                <p className="text-sphere-white/90 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Welcome Message Section (Managing Director) */}
        <motion.div 
          className="mt-24 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ 
              background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Welcome Message
          </motion.h3>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/40 rounded-3xl p-8 md:p-12 shadow-2xl mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gradient-to-br from-sphere-blue-primary/20 to-teal-500/20 border-2 border-sphere-blue-light/30 rounded-full w-48 h-48 md:w-56 md:h-56 flex items-center justify-center shadow-lg overflow-hidden">
                {/* Actual Managing Director Image */}
                <Image 
                  src={mdImage}
                  alt="Vikas K Mathur, Founder & Managing Director"
                  width={224}
                  height={224}
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <h4 
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {managingDirector.name}
                </h4>
                <p className="text-xl text-sphere-blue-light font-semibold">{managingDirector.title}</p>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-0 text-6xl text-sphere-blue-light/10 leading-none">“</div>
                <p className="text-lg md:text-xl text-sphere-white/90 leading-relaxed pl-8 relative">
                  {managingDirector.message}
                </p>
                <div className="absolute bottom-0 right-0 text-6xl text-sphere-blue-light/10 leading-none">”</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Meet The Team Section */}
        <motion.div 
          className="mt-24 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ 
              background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet The Team
          </motion.h3>
        </motion.div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ 
              background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            A STRONG TEAM, BEHIND EVERY SOLUTION.
          </h4>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {teamMembers.map((member, index) => (
            // Regular team member cards with images
            <motion.div
              key={index}
              className="bg-gradient-to-br from-sphere-navy-dark/70 to-sphere-navy-medium/70 backdrop-blur-md border border-sphere-blue-light/30 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex flex-col items-center mb-6">
                <div className="bg-gradient-to-br from-sphere-blue-primary/20 to-teal-500/20 border-2 border-sphere-blue-light/30 rounded-full w-32 h-32 flex items-center justify-center shadow-lg mb-4 overflow-hidden">
                  {/* Actual team member image */}
                  <Image 
                    src={teamMemberImages[index]}
                    alt={`${member.name}, ${member.position}`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h4 
                  className="text-xl font-bold mb-2"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--sphere-blue-light)) 0%, hsl(var(--tech-teal)) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {member.name}
                </h4>
                <p className="text-sphere-blue-light font-semibold text-center mb-4">{member.position}</p>
              </div>
              <p className="text-sphere-white/90 leading-relaxed text-center">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>

        {/* Add Associated Brands Section after the main content grid */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <AssociatedBrandsSection />
        </motion.div>
      </div>
    </section>
  );
}
