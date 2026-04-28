import React, { useState, useCallback } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';
import { toast } from '../hooks/use-toast';

// Validation helpers
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  // Australian phone number format
  const re = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
  return re.test(phone.replace(/\s/g, ''));
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});
  
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!validatePhone(value)) return 'Please enter a valid Australian phone number';
        return '';
      case 'suburb':
        if (!value.trim()) return 'Suburb is required';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Please provide more details (at least 10 characters)';
        return '';
      default:
        return '';
    }
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };
  
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, suburb: true, message: true });
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      setTouched({});
      setErrors({});
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: <a href="tel:0499613240" className="text-gray-400 hover:text-[#d4af37] transition-colors">0499 613 240</a>,
      label: 'Call us'
    },
    {
      icon: Mail,
      title: 'Email',
      content: <a href="mailto:info@primogroup.com.au" className="text-gray-400 hover:text-[#d4af37] transition-colors break-all">info@primogroup.com.au</a>,
      label: 'Email us'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      content: <p className="text-gray-400">Perth Metropolitan Area<br />Two Rocks to Mandurah</p>,
      label: 'Our service area'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: <p className="text-gray-400">Monday - Friday: 7am - 5pm<br />Saturday: 8am - 2pm<br />Sunday: Closed</p>,
      label: 'Business hours'
    }
  ];

  const renderFieldError = (fieldName) => {
    if (errors[fieldName] && touched[fieldName]) {
      return (
        <p className="text-red-400 text-xs mt-1 flex items-center gap-1" role="alert">
          <AlertCircle className="w-3 h-3" aria-hidden="true" />
          {errors[fieldName]}
        </p>
      );
    }
    return null;
  };
  
  return (
    <div className="bg-[#0a0f1a] pt-28 sm:pt-32 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 text-center">
        <span className="text-[#d4af37] text-xs sm:text-sm tracking-widest uppercase mb-4 block">Get In Touch</span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-4 sm:mb-6 text-balance">
          {"Let's Transform"}<br />
          <span className="text-[#d4af37] italic">Your Pool Together</span>
        </h1>
        <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto text-pretty">
          Ready to start your pool renovation journey? Contact us today for a free, no-obligation consultation and quote.
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4" aria-label={item.label}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{item.title}</h3>
                      <div className="text-sm">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6">
              <h3 className="text-white font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Quick Response Guarantee</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                We respond to all enquiries within 24 hours, usually much sooner. Get your free quote fast!
              </p>
              <div className="flex items-center gap-2 text-[#d4af37] text-xs sm:text-sm">
                <div className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" aria-hidden="true"></div>
                <span>Available Now</span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-serif text-white mb-4 sm:mb-6">Request Free Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2 text-sm">
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.name && touched.name ? "true" : "false"}
                      aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-[#d4af37] focus:ring-[#d4af37] ${
                        errors.name && touched.name ? 'border-red-400' : ''
                      }`}
                      placeholder="John Smith"
                      disabled={isSubmitting}
                      autoComplete="name"
                    />
                    {renderFieldError('name')}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2 text-sm">
                      Email Address <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.email && touched.email ? "true" : "false"}
                      aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-[#d4af37] focus:ring-[#d4af37] ${
                        errors.email && touched.email ? 'border-red-400' : ''
                      }`}
                      placeholder="john@example.com"
                      disabled={isSubmitting}
                      autoComplete="email"
                    />
                    {renderFieldError('email')}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-gray-300 mb-2 text-sm">
                      Phone Number <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.phone && touched.phone ? "true" : "false"}
                      aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-[#d4af37] focus:ring-[#d4af37] ${
                        errors.phone && touched.phone ? 'border-red-400' : ''
                      }`}
                      placeholder="0499 613 240"
                      disabled={isSubmitting}
                      autoComplete="tel"
                    />
                    {renderFieldError('phone')}
                  </div>
                  
                  <div>
                    <Label htmlFor="suburb" className="text-gray-300 mb-2 text-sm">
                      Suburb <span className="text-red-400">*</span>
                    </Label>
                    <Input 
                      id="suburb"
                      name="suburb"
                      value={formData.suburb}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={errors.suburb && touched.suburb ? "true" : "false"}
                      aria-describedby={errors.suburb && touched.suburb ? "suburb-error" : undefined}
                      className={`bg-gray-800 border-gray-700 text-white focus:border-[#d4af37] focus:ring-[#d4af37] ${
                        errors.suburb && touched.suburb ? 'border-red-400' : ''
                      }`}
                      placeholder="Cottesloe"
                      disabled={isSubmitting}
                      autoComplete="address-level2"
                    />
                    {renderFieldError('suburb')}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2 text-sm">
                    Tell Us About Your Project <span className="text-red-400">*</span>
                  </Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={errors.message && touched.message ? "true" : "false"}
                    aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                    rows={5}
                    className={`bg-gray-800 border-gray-700 text-white focus:border-[#d4af37] focus:ring-[#d4af37] resize-none ${
                      errors.message && touched.message ? 'border-red-400' : ''
                    }`}
                    placeholder="Please describe your pool renovation needs, current pool condition, and what you'd like to achieve..."
                    disabled={isSubmitting}
                  />
                  {renderFieldError('message')}
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    By submitting this form, you agree to be contacted by Primo Group regarding your pool renovation enquiry. 
                    We respect your privacy and never share your information.
                  </p>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium py-5 sm:py-6 text-base sm:text-lg disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message & Get Free Quote'}
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
