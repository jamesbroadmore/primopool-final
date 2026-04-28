import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] border-t border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Primo Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:0499613240" className="flex items-center gap-2 text-gray-300 hover:text-[#d4af37] transition-colors">
              <Phone className="w-4 h-4" />
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
