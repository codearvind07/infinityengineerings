'use client';

import { Building, Users, Stars as Stairs, Shield, Home, Briefcase } from 'lucide-react';

export default function ApplicationsSection() {
  const applications = [
    {
      icon: Building,
      title: 'Atriums, Lobbies and Receptions',
      description: 'Protecting open spaces and reception areas with discreet fire protection systems that maintain architectural aesthetics while ensuring safety compliance.',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg'
    },
    {
      icon: Home,
      title: 'Openings in Walls',
      description: 'Providing effective compartmentation for wall openings, maintaining fire resistance while allowing normal building operations and emergency egress.',
      image: 'https://images.pexels.com/photos/6588604/pexels-photo-6588604.jpeg'
    },
    {
      icon: Users,
      title: 'Egress and Corridor Separation',
      description: 'Ensuring safe evacuation routes remain protected during fire emergencies while maintaining clear passage ways for daily operations.',
      image: 'https://images.pexels.com/photos/7195700/pexels-photo-7195700.jpeg'
    },
    {
      icon: Shield,
      title: 'Boundary Protection',
      description: 'Creating effective fire boundaries between different building zones, preventing fire spread while maintaining architectural flexibility.',
      image: 'https://images.pexels.com/photos/6588606/pexels-photo-6588606.jpeg'
    },
    {
      icon: Briefcase,
      title: 'Compartmentation',
      description: 'Advanced compartmentation solutions for complex buildings, ensuring fire containment while preserving open space concepts.',
      image: 'https://images.pexels.com/photos/6588607/pexels-photo-6588607.jpeg'
    },
    {
      icon: Stairs,
      title: 'Stairs and Escalators',
      description: 'Specialized protection systems for vertical transportation areas, maintaining safe evacuation routes and preventing fire spread.',
      image: 'https://images.pexels.com/photos/7195468/pexels-photo-7195468.jpeg'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Applications & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our fire protection systems are designed for diverse building applications, 
            from commercial complexes to specialized facilities.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="space-y-16">
          {applications.map((app, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse animate-fade-in-left' : 'animate-fade-in-right'}`}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'backwards' }}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-3">
                    <app.icon className="h-8 w-8 text-gray-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{app.title}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {app.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 border border-gray-700">
                    View Solutions
                  </button>
                  <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    Technical Specs
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-1 border border-gray-700">
                    <img 
                      src={app.image}
                      alt={app.title}
                      className="w-full h-80 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}