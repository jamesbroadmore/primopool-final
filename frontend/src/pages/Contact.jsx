import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      suburb: '',
      message: ''
    });
  };
  
  return (
    <div className="bg-[#0a0f1a] pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
        <h1 className="text-6xl font-serif text-white mb-6">
          Let's Transform<br />
          <span className="text-[#d4af37] italic">Your Pool Together</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Ready to start your pool renovation journey? Contact us today for a free, no-obligation consultation and quote.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <a href="tel:0499613240" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                      0499 613 240
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a href="mailto:info@primogroup.com.au" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                      info@primogroup.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-400">
                      Perth Metropolitan Area<br />
                      Two Rocks to Mandurah
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-400">
                      Monday - Friday: 7am - 5pm<br />
                      Saturday: 8am - 2pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-3">Quick Response Guarantee</h3>
              <p className="text-gray-400 text-sm mb-4">
                We respond to all enquiries within 24 hours, usually much sooner. Get your free quote fast!
              </p>
              <div className="flex items-center gap-2 text-[#d4af37] text-sm">
                <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"></div>
                <span>Available Now</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8">
              <h2 className="text-2xl font-serif text-white mb-6">Request Free Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2">Full Name *</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#d4af37]"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2">Email Address *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#d4af37]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300 mb-2">Phone Number *</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#d4af37]"
                      placeholder="0499 613 240"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="suburb" className="text-gray-300 mb-2">Suburb *</Label>
                    <Input 
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-[#d4af37]"
                      placeholder="Cottesloe"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2">Tell Us About Your Project *</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#d4af37] resize-none"
                    placeholder="Please describe your pool renovation needs, current pool condition, and what you'd like to achieve..."
                  />
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <p className="text-gray-400 text-sm">
                    By submitting this form, you agree to be contacted by Primo Group regarding your pool renovation enquiry. 
                    We respect your privacy and never share your information.
                  </p>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium py-6 text-lg"
                >
                  Send Message & Get Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
