import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Paintbrush, Grid3X3, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';

const Services = () => {
  const servicesDetailed = [
    {
      id: 1,
      icon: Droplets,
      title: 'Pool Renovations',
      description: 'Complete pool makeovers that breathe new life into tired, outdated pools.',
      features: [
        'Complete pool assessment and consultation',
        'Structural repairs and upgrades',
        'Modern design implementation',
        'Full project management from start to finish',
        'Quality materials and craftsmanship',
        'Comprehensive warranty coverage'
      ],
      image: 'https://images.unsplash.com/photo-1603077864615-538e955d1ad1?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: 2,
      icon: Paintbrush,
      title: 'Pool Resurfacing',
      description: 'Premium surface finishes that look beautiful and last for decades.',
      features: [
        'Surface preparation and repair',
        '12 premium plaster color options',
        'Smooth, long-lasting finishes',
        'Chemical-resistant materials',
        'Professional application techniques',
        '5-year workmanship warranty'
      ],
      image: 'https://images.unsplash.com/photo-1774519677410-9073d1f2d9f5?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: 3,
      icon: Grid3X3,
      title: 'Pool Tiling',
      description: 'Expert tile installations from classic porcelain to luxury mosaics.',
      features: [
        'Waterline tile installation',
        'Full pool tiling services',
        'Wide range of tile selections',
        'Precision cutting and fitting',
        'Grout and sealing services',
        'Custom mosaic designs available'
      ],
      image: 'https://images.unsplash.com/photo-1762811054950-b74e0a055c80?crop=entropy&cs=srgb&fm=jpg&q=85'
    },
    {
      id: 4,
      icon: Sparkles,
      title: 'Pool Transformations',
      description: 'Full transformations tailored to your unique vision and style.',
      features: [
        'Complete design consultation',
        'Structural modifications',
        'Feature additions (spas, water features)',
        'Lighting and automation upgrades',
        'Landscaping coordination',
        'Turn-key project delivery'
      ],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=srgb&fm=jpg&q=85'
    }
  ];
  
  return (
    <div className="bg-[#0a0f1a] pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20 text-center">
        <span className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase mb-4 block">Our Services</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6 text-balance">
          Expert Pool Services<br />
          <span className="text-[#d4af37] italic">Across Perth</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
          From simple resurfacing to complete pool transformations, we deliver exceptional results with over 25 years of experience.
        </p>
      </div>
      
      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24">
        {servicesDetailed.map((service, index) => (
          <div 
            key={service.id} 
            className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4af37]" aria-hidden="true" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white mb-3 sm:mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">{service.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </Link>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Primo Group pool services Perth`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mt-16 sm:mt-24">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 text-base sm:text-lg text-pretty">
            {"Contact us today for a free consultation and quote. We'll help bring your pool vision to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                Request Free Quote
              </Button>
            </Link>
            <a href="tel:0499613240">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-medium px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                Call 0499 613 240
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
