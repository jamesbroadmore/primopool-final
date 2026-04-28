import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  // Show popup after a delay for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'd like to get a free quote for my pool renovation. Can you please help me?");
    window.open(`https://wa.me/61499613240?text=${message}`, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <>
      {/* WhatsApp Popup */}
      {showPopup && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 z-50 bg-white rounded-lg shadow-2xl p-4 max-w-[250px] sm:max-w-xs animate-in fade-in slide-in-from-bottom-5 duration-300"
          role="complementary"
          aria-label="WhatsApp contact prompt"
        >
          <button 
            onClick={() => setShowPopup(false)}
            className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 transition-colors"
            aria-label="Dismiss WhatsApp prompt"
          >
            <X className="w-3 h-3" aria-hidden="true" />
          </button>
          <p className="text-sm text-gray-800 font-medium">
            Chat with us on WhatsApp for a free quote!
          </p>
        </div>
      )}
      
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] shadow-lg flex items-center justify-center p-0 transition-transform hover:scale-110 focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
      </Button>
    </>
  );
};

export default WhatsAppButton;
