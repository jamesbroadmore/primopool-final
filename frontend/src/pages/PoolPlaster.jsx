import React from 'react';
import { Button } from '../components/ui/button';
import { poolPlasterColors } from '../data/mock';
import { CheckCircle } from 'lucide-react';

const PoolPlaster = () => {
  return (
    <div className="bg-[#0a0f1a] pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Partners Pool Plaster</span>
        <h1 className="text-6xl font-serif text-white mb-6">
          12 Stunning Colours<br />
          <span className="text-[#d4af37] italic">to Suit Your Style</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Choose from our stunning selection of 12 unique pool plaster colours — from bright whites and sandy beaches to deep midnight blues.
        </p>
      </div>
      
      {/* Color Palette */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {poolPlasterColors.map((colorOption, index) => (
            <div key={index} className="group">
              <div 
                className="w-full aspect-square rounded-2xl mb-4 border-4 border-gray-700 group-hover:border-[#d4af37] transition-all duration-300 shadow-lg cursor-pointer"
                style={{ backgroundColor: colorOption.color }}
              ></div>
              <h3 className="text-white font-semibold text-center group-hover:text-[#d4af37] transition-colors">
                {colorOption.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Features */}
      <div className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-12">
          <h2 className="text-3xl font-serif text-white mb-8 text-center">
            Why Choose Partners Pool Plaster?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Premium Quality</h3>
                <p className="text-gray-400">Highest grade materials for long-lasting beauty and durability.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Smooth Finish</h3>
                <p className="text-gray-400">Silky smooth texture that's gentle on feet and swimwear.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Chemical Resistant</h3>
                <p className="text-gray-400">Specially formulated to withstand pool chemicals and maintain color.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Long Lifespan</h3>
                <p className="text-gray-400">Engineered to maintain its beauty for 10-15 years with proper care.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Stain Resistant</h3>
                <p className="text-gray-400">Advanced formula resists staining from minerals and organic matter.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-[#d4af37] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold mb-1">Expert Application</h3>
                <p className="text-gray-400">Applied by our certified professionals for flawless results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-white mb-6">
          Need Help Choosing a Colour?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          We'll bring physical samples to your free consultation so you can see how each colour looks in your backyard lighting.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium px-8 py-6">
            Book Free Consultation
          </Button>
          <a href="tel:0499613240">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-medium px-8 py-6">
              Call 0499 613 240
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PoolPlaster;
