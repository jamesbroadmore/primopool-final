import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <span className="text-[#d4af37] text-8xl sm:text-9xl font-bold">404</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif text-white mb-4 text-balance">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 text-pretty">
          Sorry, the page you are looking for does not exist or has been moved. 
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium w-full sm:w-auto">
              <Home className="w-4 h-4 mr-2" aria-hidden="true" />
              Back to Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black font-medium w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        
        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/services" className="text-[#d4af37] hover:underline text-sm">
              Services
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/gallery" className="text-[#d4af37] hover:underline text-sm">
              Gallery
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/pool-plaster" className="text-[#d4af37] hover:underline text-sm">
              Pool Plaster
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/contact" className="text-[#d4af37] hover:underline text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
