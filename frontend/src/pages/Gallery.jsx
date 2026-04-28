import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  return (
    <div className="bg-[#0a0f1a] pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
        <span className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase mb-4 block">Our Work</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6 text-balance">
          Pool Transformations<br />
          <span className="text-[#d4af37] italic">{"We're Proud Of"}</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
          Browse through our portfolio of stunning pool renovations, resurfacing projects, and complete transformations across Perth.
        </p>
      </div>
      
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer focus-within:ring-2 focus-within:ring-[#d4af37]"
            >
              <img 
                src={image} 
                alt={`Pool renovation project ${index + 1} - Perth pool transformation by Primo Group`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-1">Pool Renovation Project</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">Perth, Western Australia</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4 text-balance">
              Ready for Your Pool Transformation?
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-pretty">
              {"Let's create something beautiful together. Contact us for a free consultation."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  Get Free Quote
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
    </div>
  );
};

export default Gallery;
