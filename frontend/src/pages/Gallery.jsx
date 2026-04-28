import React from 'react';
import { Button } from '../components/ui/button';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  return (
    <div className="bg-[#0a0f1a] pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Our Work</span>
        <h1 className="text-6xl font-serif text-white mb-6">
          Pool Transformations<br />
          <span className="text-[#d4af37] italic">We're Proud Of</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Browse through our portfolio of stunning pool renovations, resurfacing projects, and complete transformations across Perth.
        </p>
      </div>
      
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img 
                src={image} 
                alt={`Pool project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-1">Pool Renovation Project</h3>
                  <p className="text-gray-300 text-sm">Perth, Western Australia</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-4">
              Ready for Your Pool Transformation?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's create something beautiful together. Contact us for a free consultation.
            </p>
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium px-8 py-6">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
