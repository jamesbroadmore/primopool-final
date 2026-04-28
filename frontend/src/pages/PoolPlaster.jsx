import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { poolPlasterColors } from '../data/mock';
import { CheckCircle } from 'lucide-react';

const PoolPlaster = () => {
  return (
    <div className="bg-[#0a0f1a] pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
        <span className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase mb-4 block">Partners Pool Plaster</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6 text-balance">
          12 Stunning Colours<br />
          <span className="text-[#d4af37] italic">to Suit Your Style</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
          Choose from our stunning selection of 12 unique pool plaster colours - from bright whites and sandy beaches to deep midnight blues.
        </p>
      </div>
      
      {/* Color Palette */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {poolPlasterColors.map((colorOption, index) => (
            <div 
              key={index} 
              className="group focus-within:ring-2 focus-within:ring-[#d4af37] rounded-2xl"
            >
              <button
                className="w-full text-left"
                aria-label={`${colorOption.name} pool plaster color`}
              >
                <div 
                  className="w-full aspect-square rounded-2xl mb-3 sm:mb-4 border-4 border-gray-700 group-hover:border-[#d4af37] group-focus:border-[#d4af37] transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: colorOption.color }}
                  role="img"
                  aria-label={colorOption.name}
                ></div>
                <h3 className="text-white font-semibold text-center text-sm sm:text-base group-hover:text-[#d4af37] transition-colors">
                  {colorOption.name}
                </h3>
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Features */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-serif text-white mb-6 sm:mb-8 text-center text-balance">
            Why Choose Partners Pool Plaster?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: 'Premium Quality', desc: 'Highest grade materials for long-lasting beauty and durability.' },
              { title: 'Smooth Finish', desc: 'Silky smooth texture that\'s gentle on feet and swimwear.' },
              { title: 'Chemical Resistant', desc: 'Specially formulated to withstand pool chemicals and maintain color.' },
              { title: 'Long Lifespan', desc: 'Engineered to maintain its beauty for 10-15 years with proper care.' },
              { title: 'Stain Resistant', desc: 'Advanced formula resists staining from minerals and organic matter.' },
              { title: 'Expert Application', desc: 'Applied by our certified professionals for flawless results.' },
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4af37] mt-0.5 sm:mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-serif text-white mb-4 sm:mb-6 text-balance">
          Need Help Choosing a Colour?
        </h2>
        <p className="text-base sm:text-xl text-gray-400 mb-8 sm:mb-10 text-pretty">
          {"We'll bring physical samples to your free consultation so you can see how each colour looks in your backyard lighting."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link to="/contact">
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
              Book Free Consultation
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
  );
};

export default PoolPlaster;
