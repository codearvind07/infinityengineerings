'use client';

import { Download, FileText, Video, BookOpen, ExternalLink, Wrench, CircuitBoard, FileSpreadsheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import datasheetsImg from '@/public/FireMaster1.webp';
import optionalExtrasImg from '@/public/FireMaster2.webp';
import wiringImg from '@/public/FireMaster3.webp';
import nbsImg from '@/public/FireMaster4.webp';
import videosImg from '@/public/slider1.webp';
import brochuresImg from '@/public/slider2.jpg';

export default function ResourcesSection() {
  const resources = [
    {
      icon: FileText,
      title: 'Technical Datasheets',
      description: 'Comprehensive product specifications, installation guides, and technical data sheets for all our fire protection systems.',
      image: datasheetsImg,
      action: 'Download Datasheets'
    },
    {
      icon: Wrench,
      title: 'Optional Extras',
      description: 'There are a number of Optional Extras available for the various control panel types offered by Coopers Fire for Fire Curtains and Smoke Curtain Barriers. Use the table to decide what optional extras can be used.',
      image: optionalExtrasImg,
      action: 'View Options'
    },
    {
      icon: CircuitBoard,
      title: 'Site Wiring Diagrams',
      description: 'Download site wiring diagrams for proper installation and maintenance of INFINITY ENGINEERINGS systems by certified professionals.',
      image: wiringImg,
      action: 'Download Diagrams'
    },
    {
      icon: FileSpreadsheet,
      title: 'NBS Source Library',
      description: 'Use this page to navigate the NBS Source Product Selector to find the NBS National BIM Library and NBS Specifications for our full range of smoke and fire curtains.',
      image: nbsImg,
      action: 'Access Library'
    },
    {
      icon: Video,
      title: 'Product Videos',
      description: 'Our range of videos demonstrates how Coopers Fire products work. Choose from a variety of product and case study videos.',
      image: videosImg,
      action: 'Watch Videos'
    },
    {
      icon: BookOpen,
      title: 'Product Brochures',
      description: 'Read about Coopers Fire different fire and smoke curtain products by choosing a brochure to download.',
      image: brochuresImg,
      action: 'Download Brochures'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-fire-red bg-card rounded-full border border-fire-red/30">
            TECHNICAL RESOURCES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Resources Hub
          </h2>
          <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-lg">
            <p>
              Please choose from one of the sections on this resources page. You can find datasheets, 
              information on optional extras, download brochures or watch videos of our products in action.
            </p>
            <p>
              If you are specifying a project and require fire or smoke curtain technical drawings, 
              please visit the relevant product page.
            </p>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-b from-card/50 to-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl overflow-hidden hover:border-fire-red/50 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col shadow-lg hover:shadow-xl">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image.src}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={resource.image.width}
                    height={resource.image.height}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-fire-red/20 backdrop-blur-sm rounded-lg p-2 border border-fire-red/30">
                      <resource.icon className="h-6 w-6 text-fire-red" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{resource.description}</p>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-card to-card hover:from-fire-red hover:to-fire-red/90 text-foreground group border border-sphere-blue-primary/20 hover:border-fire-red/50 transition-all duration-300 font-semibold"
                  >
                    {resource.action}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div 
          className="bg-gradient-to-r from-card/50 to-card/50 backdrop-blur-sm border border-sphere-blue-primary/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Learn More About Fire and Smoke Curtains</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find different articles and information to help learn more about fire curtains, 
              fire protection and the standards that surround them.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-fire-red to-fire-red/90 hover:from-fire-red/90 hover:to-fire-red text-white px-8 py-3 border border-fire-red/50 shadow-lg shadow-fire-red/20 hover:shadow-fire-red/40 transition-all duration-300 font-semibold">
              Explore Articles
            </Button>
            <Button 
              variant="outline" 
              className="border-sphere-blue-primary/30 text-foreground hover:text-foreground hover:bg-card/80 hover:border-sphere-blue-primary px-8 py-3 transition-all duration-300 font-semibold"
            >
              View Standards
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}