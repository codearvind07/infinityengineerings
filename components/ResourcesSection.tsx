'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function ResourcesSection() {
  const resources = [
    {
      title: 'Optional Extras',
      description:
        'Comprehensive product specifications, installation guides, and technical data sheets for all our fire protection systems.',
      image: '/FireMaster1.webp',
      action: 'Download Datasheets',
    },
    {
      title: 'Drives and Controls',
      description:
        'Step-by-step installation instructions and best practices for proper system deployment by certified professionals.',
      image: '/FireMaster5.webp',
      action: 'View Guides',
    },
    {
      title: 'Site Wiring Diagrams',
      description:
        'Detailed electrical schematics and wiring diagrams for seamless integration with existing building systems.',
      image: '/FireMaster3.webp',
      action: 'Download Diagrams',
    },
    {
      title: 'NBS Source',
      description:
        'Demonstration videos showcasing product functionality, installation processes, and real-world applications.',
      image: '/slider1.webp',
      action: 'Watch Videos',
    },
    {
      title: 'Videos',
      description:
        'Comprehensive brochures highlighting features, benefits, and technical specifications of our product range.',
      image: '/slider2.jpg',
      action: 'Download Brochures',
    },
    {
      title: 'Brochures',
      description:
        'Detailed information on compliance standards, certifications, and safety protocols for all our products.',
      image: '/FireMaster10.webp',
      action: 'View Standards',
    },
    {
      title: 'Learn More About Fire and Smoke Curtains',
      description:
        'Detailed information on compliance standards, certifications, and safety protocols for all our products.',
      image: '/FireMaster10.webp',
      action: 'View Standards',
    },
  ];

  return (
    <section className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#E28C00] mb-4">
           Resources That Empower Your Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
           At Infinity Engineerings, we believe knowledge is the foundation of innovation. Our Resource Center is built to help you explore, learn, and make the most of our solutions. Whether you’re an engineer looking for detailed product guides, a partner seeking marketing assets, or a client exploring best practices, you’ll find everything you need to succeed.
            From installation manuals and case studies to training videos and technical insights, we’ve curated our most valuable materials in one place, so you can stay informed, confident, and ahead of the curve.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Circular Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1C4E29] mb-3">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {resource.description}
              </p>

              {/* Button */}
              <Button className="bg-[#1C4E29] hover:bg-[#256d3b] text-white font-medium px-6 py-2 rounded-full transition-all duration-300">
                {resource.action}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
