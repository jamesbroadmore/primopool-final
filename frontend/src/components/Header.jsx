import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Shield, Award, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]">
      {/* Top Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-xs text-gray-400">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3" />
                <span>5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3 h-3" />
                <span>SPASA Member</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" />
                <span>Free On-Site Quote</span>
              </div>
            </div>
            <a href="tel:0499613240" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
              <Phone className="w-3 h-3" />
              <span>0499 613 240</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
              </div>
              <span className="text-white text-xl tracking-[0.3em] font-light">PRIMO GROUP</span>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm transition-colors ${
                isActive('/') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-sm transition-colors ${
                isActive('/services') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`text-sm transition-colors ${
                isActive('/gallery') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/pool-plaster" 
              className={`text-sm transition-colors ${
                isActive('/pool-plaster') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'
              }`}
            >
              Pool Plaster
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm transition-colors ${
                isActive('/contact') ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'
              }`}
            >
              Contact
            </Link>
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
              GET FREE QUOTE
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
