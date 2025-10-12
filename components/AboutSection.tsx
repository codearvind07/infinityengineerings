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
import SectionHeader from '@/components/SectionHeader';
import ContentSection from '@/components/ContentSection';
import StandardCard from '@/components/StandardCard';
// Import the AssociatedBrandsSection from the correct location


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
    <ContentSection id="about" className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced Background Effects with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs with warm colors */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl opacity-25 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Geometric Elements with vibrant colors */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-24 h-24 border-2 border-indigo-300/40 rotate-45 rounded-lg"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-300/40 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-pink-300/40 rotate-12 rounded-xl"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 border-2 border-blue-300/40 rotate-[-30deg] rounded-full"></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header with enhanced styling */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="standard-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2 animate-pulse"></div>
            <span 
              className="text-sm font-semibold tracking-wider uppercase text-indigo-700"
            >
              About Our Company
            </span>
          </motion.div>
          
          <motion.h2 
            className="standard-heading-1 standard-gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            INFINITY <span className="standard-accent-gradient-text">ENGINEERINGS</span>
          </motion.h2>
          
          <motion.p 
            className="standard-subheading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premier distributor of innovative building solutions, driving safety, sustainability, and functionality across the construction industry since June 2021. Trusted partner for architects, consultants, and builders throughout India.
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Section with more vibrant colors */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/90 backdrop-blur-lg border border-indigo-400/60 rounded-2xl p-6 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-indigo-400/70 group-hover:bg-gradient-to-br group-hover:from-white/98 group-hover:to-indigo-100/70">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  <CountUp end={stat.number} duration={stat.duration} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-indigo-700 uppercase tracking-wider">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid with enhanced layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Content with improved typography */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h3 
                className="standard-heading-2 standard-gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Leading Fire Protection <span className="standard-accent-gradient-text">Solutions</span>
              </motion.h3>
              
              <div className="space-y-5 text-base text-slate-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  INFINITY ENGINEERINGS is a premier distributor of innovative building solutions, driving safety, sustainability, and functionality across the construction industry since June 2021.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  We have established ourselves as a trusted partner for architects, consultants, and builders throughout India through strategic partnerships that include serving as the authorized distributor for Coopers Fire Ltd. (London, UK) for Fire and Smoke Curtains across India, Nepal, Bhutan, and Sri Lanka.
                </motion.p>
              </div>
            </div>
            
            {/* Enhanced Mission Card */}
            <motion.div 
              className="bg-gradient-to-br from-white/95 to-indigo-100/60 backdrop-blur-lg border border-indigo-300/60 rounded-3xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="flex items-start space-x-4 relative z-10">
                <div className="flex-shrink-0 p-4 bg-gradient-to-br from-indigo-500/25 to-purple-500/25 rounded-2xl backdrop-blur-sm border border-indigo-200/40">
                  <Award className="h-8 w-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-4 text-slate-800">
                    Our Mission
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    To be India's most trusted partner in fire and smoke protection, delivering innovative solutions that <span className="text-indigo-600 font-semibold">save lives while preserving architectural integrity</span>. We aim to make advanced fire safety accessible across all building types.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Image with better styling */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-white/90 to-indigo-50/50 backdrop-blur-lg border border-indigo-200/50 rounded-3xl overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10"></div>
              <Image 
                src={banner}
                alt="Fire and smoke curtain protection system"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Enhanced Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur-lg border border-indigo-200/50 rounded-2xl p-6 shadow-xl">
                  <h5 className="text-xl font-bold mb-2 text-slate-800">
                    Advanced Fire Protection
                  </h5>
                  <p className="text-slate-600">Cutting-edge technology ensuring safety and compliance</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Core Values Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            title="Our Core Values"
            subtitle="The principles that guide everything we do in delivering exceptional fire protection solutions"
            className="mb-0"
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white/90 backdrop-blur-lg border border-indigo-400/60 rounded-3xl p-8 h-full transition-all duration-500 group-hover:shadow-2xl group-hover:border-indigo-400/70 group-hover:bg-gradient-to-br group-hover:from-white/98 group-hover:to-indigo-100/70 relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-tl-full"></div>
                
                {/* Enhanced Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-indigo-500/25 to-purple-500/25 backdrop-blur-sm border border-indigo-200/40"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </motion.div>
                
                {/* Content */}
                <h4 className="text-xl font-bold mb-4 text-slate-800">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Welcome Message Section with enhanced design */}
        <motion.div 
          className="mt-24 mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Welcome Message
          </motion.h3>
          <motion.p 
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A word from our founder and managing director
          </motion.p>
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-white/90 to-indigo-50/50 backdrop-blur-lg border border-indigo-200/50 rounded-3xl p-10 shadow-2xl mb-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-indigo-500/25 to-purple-500/25 border-2 border-indigo-200/40 rounded-3xl w-40 h-40 md:w-48 md:h-48 flex items-center justify-center shadow-xl overflow-hidden">
                <Image 
                  src={mdImage}
                  alt="Vikas K Mathur, Founder & Managing Director"
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </motion.div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="mb-6">
                <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
                  {managingDirector.name}
                </h4>
                <p className="text-lg text-indigo-600 font-semibold">{managingDirector.title}</p>
              </div>
              
              <div className="relative">
                <div className="absolute top-0 left-0 text-6xl text-indigo-200 leading-none hidden md:block">"</div>
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed pl-0 md:pl-10 relative italic">
                  {managingDirector.message}
                </p>
                <div className="absolute bottom-0 right-0 text-6xl text-indigo-200 leading-none hidden md:block">"</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Meet The Team Section */}
        <motion.div 
          className="mt-20 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-indigo-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
          </motion.h3>
          <motion.p 
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The experienced professionals driving our success
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-lg border border-indigo-400/60 rounded-3xl p-8 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.15)" }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-bl-full"></div>
              
              <div className="flex flex-col items-center mb-6">
                <motion.div 
                  className="mb-6 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-indigo-500/25 to-purple-500/25 border-2 border-indigo-200/40 rounded-2xl w-32 h-32 flex items-center justify-center shadow-lg">
                    <Image 
                      src={teamMemberImages[index]}
                      alt={`${member.name}, ${member.position}`}
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                <h4 className="text-xl font-bold text-slate-800 mb-1">
                  {member.name}
                </h4>
                <p className="text-indigo-600 font-semibold text-center mb-3">{member.position}</p>
              </div>
              <p className="text-slate-600 leading-relaxed text-center">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </ContentSection>
  );
}