'use client';

import { useState } from 'react';
import { Building, Users, Stars, Shield, Home, Briefcase, ArrowRight, ChevronRight, Play, Download, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

export default function ApplicationsSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const applications = [
    {
      icon: Building,
      title: 'Atrium, Lobbies and Receptions',
      description: 'From London\'s Gherkin to Hong Kong\'s Langham Place, Coopers fire and smoke curtains help architects to build the atria that define the world\'s most iconic buildings.',
      fullDescription: 'Whether you\'re installing to work with a SHEVS or as stand-alone fire protection, our bespoke smoke curtains and fire curtain barriers are developed to fit every application. Our solutions integrate seamlessly with building designs while providing maximum fire safety compliance.',
      image: '/ATRIUM.webp',
      category: 'commercial',
      features: ['SHEVS Integration', 'Bespoke Solutions', 'Iconic Projects'],
      projects: ['The Gherkin - London', 'Langham Place - Hong Kong'],
      specs: 'BS 8524-1:2013 Certified'
    },
    {
      icon: Home,
      title: 'Openings in Walls',
      description: 'Coopers\' fire curtains provide architects with an approved means of replacing traditional walls, fire doors and shutters to create modern, open plan environments.',
      fullDescription: 'From retailers and domestic houses to hotels and historic buildings, our innovative solutions allow for flexible space design while maintaining complete fire safety compliance across various building types.',
      image: '/OPENINGSINWALLS.webp',
      category: 'residential',
      features: ['Space Optimization', 'Heritage Compatible', 'Flexible Design'],
      projects: ['Historic Renovations', 'Modern Residences'],
      specs: 'EN 1634-1 Certified'
    },
    {
      icon: Users,
      title: 'Egress and Corridor Separation',
      description: 'Controlling and containing smoke and fire in corridors designed as escape routes with our specialized fire and smoke curtains.',
      fullDescription: 'From retailers and hospitals to sports stadiums and train stations, controlling and containing smoke and fire in corridors designed to act as escape routes can be difficult. Our specialized solutions ensure safe egress while maintaining architectural integrity.',
      image: '/EGRESSANDCORRIDOR.webp',
      category: 'commercial',
      features: ['Safe Egress', 'High Traffic Areas', 'Emergency Compliance'],
      projects: ['Major Hospitals', 'Sports Stadiums', 'Transport Hubs'],
      specs: 'BS 9999:2017 Compliant'
    },
    {
      icon: Shield,
      title: 'Boundary Protection',
      description: 'Advanced fire barrier curtains providing architects with an approved alternative to traditional fire protection methods.',
      fullDescription: 'Using traditional fire protection equipment to protect buildings from the spread of fire can be limiting and financially costly. Our innovative barrier curtains offer superior protection while maintaining design flexibility and cost-effectiveness.',
      image: '/BOUNDARYPROTECTION.webp',
      category: 'industrial',
      features: ['Cost Effective', 'Design Flexible', 'Superior Protection'],
      projects: ['Industrial Complexes', 'Commercial Buildings'],
      specs: 'EN 13501-2 Certified'
    },
    {
      icon: Briefcase,
      title: 'Compartmentation',
      description: 'Effective fire and smoke compartmentation solutions for large open spaces in iconic buildings worldwide.',
      fullDescription: 'From Wembley Stadium to Dubai\'s International Airport, architects designing buildings with large open spaces depend on Coopers fire barrier curtains and smoke curtains to provide effective fire and smoke compartmentation and ensure compliance with international fire regulations.',
      image: '/COMPARTMENTATION.jpg',
      category: 'commercial',
      features: ['Large Spaces', 'International Compliance', 'Iconic Installations'],
      projects: ['Wembley Stadium', 'Dubai International Airport'],
      specs: 'International Standards'
    },
    {
      icon: Stars,
      title: 'Stairs and Escalators',
      description: 'Hidden fire and smoke curtains that deploy only when needed, protecting vertical openings without compromising design.',
      fullDescription: 'From the Concertina™ fire curtain installed to protect the stairwell of the Oil Search office in Sydney to the smoke curtains employed to stop smoke from channelling up escalator wells in Paris, our solutions remain discreetly hidden within ceilings until required for protection.',
      image: '/STAIRSANDESCALATORS.webp',
      category: 'commercial',
      features: ['Discrete Design', 'Vertical Protection', 'Auto-Deployment'],
      projects: ['Oil Search - Sydney', 'Adidas Store - Paris'],
      specs: 'BS 8524-2:2013'
    },
    {
      icon: ArrowRight,
      title: 'Lift and Lift Lobbies',
      description: 'Fire curtains with smoke control ensuring integrity against fire and preventing smoke spread between floors.',
      fullDescription: 'Coopers fire curtains with advanced smoke control offer complete integrity against fire and prevent the spread of smoke to other floors when used over lift doors or in lift lobbies. Our solutions enable open-plan designs while meeting strict fire regulations.',
      image: '/LIFTANDLIFTLOBBIES.webp',
      category: 'commercial',
      features: ['Smoke Control', 'Lift Integration', 'Open-Plan Compatible'],
      projects: ['High-Rise Buildings', 'Commercial Towers'],
      specs: 'EN 12101-1 Certified'
    },
    {
      icon: Shield,
      title: 'Protected Means of Escape',
      description: 'Approved fire barrier curtains designed specifically to protect escape routes in modern buildings.',
      fullDescription: 'We\'ve developed a comprehensive range of fire barrier curtains approved to protect means of escape. Our solutions replace traditional fire protection equipment while ensuring complete compliance with fire safety regulations in modern open-plan environments.',
      image: '/PROTECTEDMEANSOFESCAPE.webp',
      category: 'all',
      features: ['Escape Route Protection', 'Regulation Compliant', 'Modern Solutions'],
      projects: ['Public Buildings', 'Educational Facilities'],
      specs: 'Building Regulations Approved'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Applications', count: applications.length },
    { id: 'commercial', label: 'Commercial', count: applications.filter(app => app.category === 'commercial').length },
    { id: 'residential', label: 'Residential', count: applications.filter(app => app.category === 'residential').length },
    { id: 'industrial', label: 'Industrial', count: applications.filter(app => app.category === 'industrial').length },
  ];

  const filteredApplications = applications.filter(app => {
    const matchesFilter = activeFilter === 'all' || app.category === activeFilter;
    const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="applications" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-semibold bg-blue-50 text-blue-700 border-blue-200">
            INDUSTRY SOLUTIONS
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Advanced Fire & Smoke <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Protection</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              From iconic skyscrapers to historic renovations, Coopers provides cutting-edge fire and smoke protection solutions 
              that blend seamlessly with architectural vision while ensuring maximum safety compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Our Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search applications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-blue-500"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Filter className="h-4 w-4" />
                <span className="font-medium">Filter by:</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredApplications.map((app, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <img 
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show fallback content
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center">
                            <div class="text-center">
                              <app.icon class="h-16 w-16 text-blue-600 mx-auto mb-4" />
                              <p class="text-blue-600 font-semibold">${app.title}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700 border-0 shadow-lg">
                    {app.category.charAt(0).toUpperCase() + app.category.slice(1)}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-3 flex-shrink-0">
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {app.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {app.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {app.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Examples */}
                {app.projects && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2 font-medium">Featured Projects:</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      {app.projects.slice(0, 2).map((project, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <Button variant="ghost" className="flex-1 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl">
                    Read More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-gray-500 hover:text-blue-600 hover:border-blue-600 rounded-xl">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredApplications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No applications found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our engineering team specializes in bespoke fire protection solutions for unique architectural challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg">
                Contact Our Experts
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold">
                Download Brochure
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}