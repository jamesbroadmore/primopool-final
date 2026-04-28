import React from 'react';
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
    <div className="bg-[#0a0f1a] pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Our Services</span>
        <h1 className="text-6xl font-serif text-white mb-6">
          Expert Pool Services<br />
          <span className="text-[#d4af37] italic">Across Perth</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From simple resurfacing to complete pool transformations, we deliver exceptional results with over 25 years of experience.
        </p>
      </div>
      
      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {servicesDetailed.map((service, index) => (
          <div key={service.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="w-14 h-14 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h2 className="text-4xl font-serif text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
              <div className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
                Get Free Quote
              </Button>
            </div>
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-6 text-center mt-24">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12">
          <h2 className="text-4xl font-serif text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Contact us today for a free consultation and quote. We'll help bring your pool vision to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium px-8 py-6">
              Request Free Quote
            </Button>
            <a href="tel:0499613240">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-medium px-8 py-6">
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
