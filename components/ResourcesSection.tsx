'use client';

import { Download, FileText, Video, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResourcesSection() {
  const resources = [
    {
      icon: FileText,
      title: 'Technical Brochures',
      description: 'Comprehensive product specifications, installation guides, and technical data sheets for all our fire protection systems.',
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg',
      action: 'Download Brochures'
    },
    {
      icon: Video,
      title: 'Installation Videos',
      description: 'Step-by-step video guides for proper installation and maintenance of INFINITY ENGINEERINGS systems by certified professionals.',
      image: 'https://images.pexels.com/photos/7195468/pexels-photo-7195468.jpeg',
      action: 'Watch Videos'
    },
    {
      icon: BookOpen,
      title: 'Site Wiring Diagrams',
      description: 'Detailed electrical schematics and wiring diagrams for control systems, sensors, and integration components.',
      image: 'https://images.pexels.com/photos/8853851/pexels-photo-8853851.jpeg',
      action: 'Download Diagrams'
    },
    {
      icon: Download,
      title: 'NBS Source Library',
      description: 'Access our complete NBS specification library for architects and engineers to streamline project documentation.',
      image: 'https://images.pexels.com/photos/8044130/pexels-photo-8044130.jpeg',
      action: 'Access Library'
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Resources
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access comprehensive documentation, installation guides, and technical support 
            materials for all INFINITY ENGINEERINGS protection systems.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'backwards' }}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2">
                      <resource.icon className="h-6 w-6 text-gray-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{resource.description}</p>
                  
                  <Button 
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white group border border-gray-600"
                  >
                    {resource.action}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'backwards' }}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Need Additional Support?</h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our technical team is available to provide custom documentation, 
              specifications, and support for your specific project requirements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 border border-gray-600">
              Contact Technical Support
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-700 px-8 py-3"
            >
              Request Custom Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}