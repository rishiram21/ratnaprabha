import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Download, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const servicesTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const services = [
    { name: 'Solid Waste Management', path: '/solid-waste-management' },
    { name: 'Construction & Development', path: '/construction-development' },
    { name: 'Electrical Service', path: '/electrical-service' },
    { name: 'Housekeeping', path: '/housekeeping' },
    { name: 'Logistic & Transport', path: '/logistic-transport' },
  ];

  const handleServicesHover = (isHovering) => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }

    if (isHovering) {
      setIsServicesOpen(true);
    } else {
      servicesTimeoutRef.current = setTimeout(() => {
        setIsServicesOpen(false);
      }, 150);
    }
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-green-100'
          : 'bg-white/95 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center group" onClick={handleMobileLinkClick}>
                <img
                  src="/logo.jpg"
                  alt="Ratnaprabha Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-3 group-hover:scale-105 transition-transform duration-200"
                />
                <div>
                  <span className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    Ratnaprabha
                  </span>
                  <div className="text-xs sm:text-sm text-green-600 font-medium -mt-0.5 sm:-mt-1">
                    Facility Services
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-gray-700 hover:text-green-600 font-medium transition-colors relative group ${
                  isActivePath('/') ? 'text-green-600' : ''
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${
                  isActivePath('/') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              <Link 
                to="/about" 
                className={`text-gray-700 hover:text-green-600 font-medium transition-colors relative group ${
                  isActivePath('/about') ? 'text-green-600' : ''
                }`}
              >
                About
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${
                  isActivePath('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => handleServicesHover(true)}
                onMouseLeave={() => handleServicesHover(false)}
              >
                <button className={`flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors relative group ${
                  services.some(service => isActivePath(service.path)) ? 'text-green-600' : ''
                }`}>
                  Services
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${
                    services.some(service => isActivePath(service.path)) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>

                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-green-100 overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-100 last:border-b-0 ${
                        isActivePath(service.path) ? 'bg-green-50 text-green-600' : ''
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/contact" 
                className={`text-gray-700 hover:text-green-600 font-medium transition-colors relative group ${
                  isActivePath('/contact') ? 'text-green-600' : ''
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-0 h-0.5 bg-green-600 transition-all duration-300 ${
                  isActivePath('/contact') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+919322506625" 
                className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                <span className="hidden xl:inline">+91 93225 06625</span>
              </a>
              <a 
  href="/demo.pdf" 
  download="brochure_demo"
  onClick={handleMobileLinkClick}
  className="block mx-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3 px-6 rounded-full text-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg active:scale-95"
>
  Download Brochure
</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 w-6 h-6 text-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} />
                <X className={`absolute inset-0 w-6 h-6 text-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[100vh] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white border-t border-gray-200`}
        >
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <Link 
              to="/" 
              onClick={handleMobileLinkClick}
              className={`block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                isActivePath('/') ? 'bg-green-50 text-green-600 font-medium' : ''
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              onClick={handleMobileLinkClick}
              className={`block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                isActivePath('/about') ? 'bg-green-50 text-green-600 font-medium' : ''
              }`}
            >
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                  services.some(service => isActivePath(service.path)) ? 'bg-green-50 text-green-600 font-medium' : ''
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  isMobileServicesOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              <div className={`ml-4 space-y-1 transition-all duration-300 ease-in-out ${
                isMobileServicesOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={handleMobileLinkClick}
                    className={`block px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-25 rounded-md transition-colors ${
                      isActivePath(service.path) ? 'text-green-600 bg-green-25 font-medium' : ''
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/contact" 
              onClick={handleMobileLinkClick}
              className={`block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors ${
                isActivePath('/contact') ? 'bg-green-50 text-green-600 font-medium' : ''
              }`}
            >
              Contact
            </Link>

            {/* Mobile action buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a 
                href="tel:+919322506625" 
                className="flex items-center px-4 py-3 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 mr-3" />
                +91 93225 06625
              </a>
              <a 
  href="/demo.pdf" 
  download="brochure_demo"
  onClick={handleMobileLinkClick}
  className="block mx-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3 px-6 rounded-full text-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg active:scale-95"
>
  Download Brochure
</a>

            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;