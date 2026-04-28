import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Shield, Award, MapPin, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/pool-plaster', label: 'Pool Plaster' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0f1a]/95 backdrop-blur-sm shadow-lg' : 'bg-[#0a0f1a]'
      }`}
      role="banner"
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:block border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-between items-center text-xs text-gray-400">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3" aria-hidden="true" />
                <span>5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3" aria-hidden="true" />
                <span>Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3 h-3" aria-hidden="true" />
                <span>SPASA Member</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                <span>Free On-Site Quote</span>
              </div>
            </div>
            <a 
              href="tel:0499613240" 
              className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
              aria-label="Call us at 0499 613 240"
            >
              <Phone className="w-3 h-3" aria-hidden="true" />
              <span>0499 613 240</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50" aria-label="Primo Group - Home">
            <div className="flex flex-col items-center">
              <div className="flex gap-1 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></div>
              </div>
              <span className="text-white text-lg sm:text-xl tracking-[0.3em] font-light">PRIMO GROUP</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm transition-colors ${
                  isActive(link.path) ? 'text-[#d4af37]' : 'text-gray-300 hover:text-[#d4af37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
                GET FREE QUOTE
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-white hover:text-[#d4af37] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 bg-[#0a0f1a] z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <nav 
          className="flex flex-col items-center justify-center h-full gap-8 px-6"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-2xl font-medium transition-colors ${
                isActive(link.path) ? 'text-[#d4af37]' : 'text-white hover:text-[#d4af37]'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium text-lg px-8 py-4 mt-4">
              GET FREE QUOTE
            </Button>
          </Link>
          
          {/* Mobile Contact Info */}
          <div className="mt-8 text-center">
            <a 
              href="tel:0499613240" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#d4af37] transition-colors text-lg"
              aria-label="Call us at 0499 613 240"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>0499 613 240</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
