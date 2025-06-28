import React, { useState } from 'react';
import { Recycle, Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute top-40 right-20 w-20 h-20 rounded-full bg-green-300"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-emerald-300"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white p-2 rounded-full mr-3">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">Ratnaprabha Facility Services</h3>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Leading the way in sustainable waste management solutions. We transform waste into resources, 
              creating cleaner communities and a healthier planet for future generations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-green-100">
                <Phone className="w-4 h-4 mr-3 text-green-300" />
                <span>+91 93225 06625</span>
              </div>
              <div className="flex items-center text-green-100">
                <Mail className="w-4 h-4 mr-3 text-green-300" />
                <span>info@ratnaprabha.com</span>
              </div>
              <div className="flex items-center text-green-100">
                <MapPin className="w-4 h-4 mr-3 text-green-300" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-green-300" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Waste Collection',
                'Recycling Solutions',
                'Organic Waste Processing',
                'Industrial Waste Management',
                'E-Waste Disposal',
                'Hazardous Waste Treatment'
              ].map((service, index) => (
                <li key={index} className="flex items-center text-green-100 hover:text-white transition-colors group cursor-pointer">
                  <ChevronRight className="w-4 h-4 mr-2 text-green-300 group-hover:translate-x-1 transition-transform" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            
            {/* Newsletter */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-green-400/30 text-white placeholder-green-200 focus:outline-none focus:border-green-300 focus:bg-white/20 transition-all"
                />
                <button
                  onClick={handleSubscribe}
                  className="absolute right-1 top-1 bottom-1 px-4 bg-green-500 hover:bg-green-400 rounded-md transition-colors flex items-center justify-center"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </div>
              {isSubscribed && (
                <p className="text-green-300 text-sm mt-2 animate-pulse">
                  ✓ Thank you for subscribing!
                </p>
              )}
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-green-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-green-200 mb-4 md:mb-0">
              <p>© {currentYear} Ratnaprabha Facility Services LLP. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/" className="text-green-200 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/" className="text-green-200 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/" className="text-green-200 hover:text-white transition-colors">
                Sustainability Report
              </a>
            </div>
          </div>
          
          {/* Environmental Message */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center bg-green-800/50 px-4 py-2 rounded-full text-green-100">
              <Leaf className="w-4 h-4 mr-2 text-green-300" />
              <span className="text-sm">Committed to Zero Waste • Carbon Neutral Operations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;