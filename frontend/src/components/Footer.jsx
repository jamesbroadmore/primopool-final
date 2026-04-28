import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0f1a] border-t border-gray-800 py-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Primo Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="tel:0499613240" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#d4af37] transition-colors"
              aria-label="Call Primo Group at 0499 613 240"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm">Call Now</span>
            </a>
            <Link to="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
                Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
