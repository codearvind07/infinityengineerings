'use client';

import { Building, Users, Stars, Shield, Home, Briefcase, ArrowRight } from 'lucide-react';

export default function ApplicationsSection() {
  const applications = [
    {
      icon: Building,
      title: 'Atrium, Lobbies and Receptions',
      description: 'From London\'s Gherkin to Hong Kong\'s Langham Place, Coopers fire and smoke curtains help architects to build the atria that define the world\'s most iconic buildings. Whether you\'re installing to work with a SHEVS or as stand-alone fire protection, our bespoke smoke curtains and fire curtain barriers are developed to fit every application.',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg'
    },
    {
      icon: Home,
      title: 'Openings in Walls',
      description: 'From retailers and domestic houses to hotels and historic buildings, Coopers\' fire curtains are providing architects with an approved means of replacing traditional, non-loadbearing walls, fire doors and fire shutters to create modern, open plan environments.',
      image: 'https://images.pexels.com/photos/6588604/pexels-photo-6588604.jpeg'
    },
    {
      icon: Users,
      title: 'Egress and Corridor Separation',
      description: 'From retailers and hospitals to sports stadiums and train stations, controlling and containing smoke and fire in corridors designed to act as escape routes can be difficult. At Coopers, we\'ve developed a range of fire and smoke curtains that allow architects and engineers to protect escapes routes whilst allowing for egress.',
      image: 'https://images.pexels.com/photos/7195700/pexels-photo-7195700.jpeg'
    },
    {
      icon: Shield,
      title: 'Boundary Protection',
      description: 'Using traditional fire protection equipment to protecting buildings from the spread of fire can be limiting and financially costly. At Coopers, we\'ve developed a range of fire barrier curtains that provide architects and engineers with an approved alternative to fire shutters, fire-rated glazing and firewalls whilst protecting windows from channelling fire.',
      image: 'https://images.pexels.com/photos/6588606/pexels-photo-6588606.jpeg'
    },
    {
      icon: Briefcase,
      title: 'Compartmentation',
      description: 'From Wembley Stadium to Dubai\'s International Airport, architects designing buildings with large open spaces depend on Coopers fire barrier curtains and smoke curtains to provide effective fire and smoke compartmentation and ensure compliance with fire regulations.',
      image: 'https://images.pexels.com/photos/6588607/pexels-photo-6588607.jpeg'
    },
    {
      icon: Stars,
      title: 'Stairs and Escalators',
      description: 'From the Concertina™ fire curtain installed to protect the stairwell of the Oil Search office in Sydney to the smoke curtains employed to stop smoke from channelling up the escalator wells in the Adidas\' store in Paris, Coopers\' fire and smoke curtains remain hidden within a ceiling until required.',
      image: 'https://images.pexels.com/photos/7195468/pexels-photo-7195468.jpeg'
    },
    {
      icon: ArrowRight,
      title: 'Lift and Lift Lobbies',
      description: 'Coopers fire curtains with smoke control offer integrity against fire and prevent the spread of smoke to other floors when used over lift doors or in lift lobbies. Ensure open-plan lift lobbies and lift doors meet with fire regulations. FireMaster fire curtains with smoke control can be used over individual lift doors or form virtual cost-effective lift lobbies.',
      image: 'https://images.pexels.com/photos/6588609/pexels-photo-6588609.jpeg'
    },
    {
      icon: Shield,
      title: 'Protected Means of Escape',
      description: 'At Coopers, we\'ve developed a range of fire barrier curtain approved to protect a means of escape. Removing traditional fire protection equipment such as non-loadbearing walls and doors to realise modern open plan environments can mean that your building fails to comply with fire regulations.',
      image: 'https://images.pexels.com/photos/6588610/pexels-photo-6588610.jpeg'
    }
  ];

  return (
    <section id="applications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Applications & Solutions
          </h2>
          <div className="max-w-4xl mx-auto text-muted-foreground space-y-4 text-lg">
            <p>
              From protecting a means of escape and boundary protection to providing a building with a system that provides a building with effective compartmentation. At Coopers, we have developed a wide range of fire and smoke curtains to protect every type of application from fire.
            </p>
            <p>
              At Coopers, our commitment to life safety has led us to develop a wide range of fire and smoke curtains approved to protect every type of building application. From Atria and lobbies to escalators and doors, no matter what the application you're protecting, our fire and smoke curtains provide a modern, non-invasive alternative to traditional fire protection.
            </p>
            <div className="mt-8">
              <button className="bg-fire-red hover:bg-fire-red/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-fire-red/20">
                View our products
              </button>
            </div>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="space-y-16">
          {applications.map((app, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-card/50 border border-sphere-blue-primary/20 rounded-xl p-3">
                    <app.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{app.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {app.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-card hover:bg-card/80 text-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200 border border-sphere-blue-primary/20">
                    Read more
                  </button>
                  <button className="border border-sphere-blue-primary/30 text-foreground hover:text-sphere-blue-primary hover:border-sphere-blue-primary px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    Technical Specs
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-card/50 to-card/50 rounded-2xl p-1 border border-sphere-blue-primary/20">
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