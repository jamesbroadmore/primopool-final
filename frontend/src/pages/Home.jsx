import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Droplets, Paintbrush, Grid3X3, Sparkles, Quote } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { services, process, testimonials, faqs } from '../data/mock';

const Home = () => {
  const iconMap = {
    droplets: Droplets,
    paintbrush: Paintbrush,
    grid3x3: Grid3X3,
    sparkles: Sparkles
  };
  
  return (
    <div className="bg-[#0a0f1a]">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center pt-32 pb-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=srgb&fm=jpg&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0a0f1a]"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="text-[#d4af37] text-sm tracking-widest uppercase border border-[#d4af37] px-4 py-1.5 rounded-full">
              ★ Perth Pool Renovation Specialists
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-4 leading-tight">
            Transform Your Pool<br />
            <span className="text-[#d4af37] italic">Into a Masterpiece</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Over 25 years of expert pool renovations, resurfacing, and tiling across Perth. Trusted by 500+ homeowners. Free on-site quotes.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium text-base px-8 py-6 group">
                GET FREE QUOTE
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-medium text-base px-8 py-6">
                VIEW OUR WORK
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6 pb-10">
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-1">25+</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-1">500+</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Pools Renovated</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-1">100%</div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Quality Guaranteed</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#d4af37] mb-1 flex items-center justify-center gap-1">
                  5<Star className="w-6 h-6 fill-current" />
                </div>
                <div className="text-xs text-gray-300 uppercase tracking-wider">Google Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0f1419]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">About Us</span>
              <h2 className="text-5xl font-serif text-white mb-6 leading-tight">
                Where Craftsmanship<br />
                <span className="text-[#d4af37] italic">Meets the Water</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                At Primo Group, we specialise in transforming backyards into beautiful outdoor retreats. With over 25 years of industry experience, our team has built a reputation for delivering high-quality pool renovations that combine craftsmanship, style, and long-lasting durability.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether your pool needs a modern upgrade, a full restoration, or a fresh new aesthetic, we work closely with you to bring your vision to life — from resurfacing and tiling to complete pool transformations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">Expert renovations & resurfacing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">Premium tiling & plaster finishes</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">Complete pool transformations</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">Licensed & insured professionals</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">5-year workmanship warranty</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                  <span className="text-gray-300 text-sm">Free on-site consultation</span>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
                  Get Free Quote
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?crop=entropy&cs=srgb&fm=jpg&q=85&w=900" 
                  alt="Beautiful pool renovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#d4af37] rounded-lg p-8 shadow-xl">
                <div className="text-5xl font-bold text-black mb-1">25+</div>
                <div className="text-sm text-black/80 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">What We Offer</span>
            <h2 className="text-5xl font-serif text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our mission: create stunning pools that enhance the way you relax, entertain, and enjoy your home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div key={service.id} className="bg-gradient-to-b from-gray-900 to-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[#d4af37] transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link to="/services">
              <Button variant="outline" className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black font-medium">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0f1419]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">How We Work</span>
            <h2 className="text-5xl font-serif text-white mb-4">
              The Primo Process
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 h-full">
                  <div className="text-6xl font-bold text-[#d4af37]/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#d4af37]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pool Plaster Section */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Partners Pool Plaster</span>
            <h2 className="text-5xl font-serif text-white mb-4">
              12 Stunning Colours<br />
              <span className="text-[#d4af37] italic">to Suit Your Style</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Choose from our stunning selection of 12 unique pool plaster colours — from bright whites and sandy beaches to deep midnight blues.
            </p>
            <Link to="/pool-plaster">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
                Explore Colour Range
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0f1419]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Client Stories</span>
            <h2 className="text-5xl font-serif text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-[#d4af37]">
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-sm">on Google</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-[#d4af37]/50 transition-colors">
                <Quote className="w-8 h-8 text-[#d4af37] mb-4" />
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">{testimonial.initials}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1a] to-[#0f1419]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] text-sm tracking-widest uppercase mb-4 block">Got Questions?</span>
            <h2 className="text-5xl font-serif text-white mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-gray-900/50 border border-gray-700 rounded-xl px-6 data-[state=open]:border-[#d4af37]">
                <AccordionTrigger className="text-white hover:text-[#d4af37] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions? We're happy to help.</p>
            <a href="tel:0499613240">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium">
                Call 0499 613 240
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-24 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif text-white mb-6">
            Ready to Revitalise Your Pool?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Turn your backyard into a private paradise. Our team is here to help — from the first consultation through to completion.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-medium text-base px-8 py-6">
                Start Your Journey
              </Button>
            </Link>
            <a href="tel:0499613240">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-medium text-base px-8 py-6">
                0499 613 240
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
