import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Download, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Solid Waste Management', path: '/solid-waste-management' },
    { name: 'Const. & Development', path: '/construction-development' },
    { name: 'Electrical Service', path: '/electrical-service' },
    { name: 'Housekeeping', path: '/housekeeping' },
    { name: 'Logistic & Transport', path: '/logistic-transport' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white shadow-lg border-b border-green-100'
        : 'bg-white bg-opacity-95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
  <a href="/" className="flex items-center group">
    <img
      src="/logo.jpg"
      alt="Ratnaprabha Logo"
      className="w-12 h-12 rounded-full mr-3 group-hover:scale-105 transition-transform"
    />
    <div>
      <span className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
        Ratnaprabha
      </span>
      <div className="text-sm text-green-600 font-medium -mt-1">
        Facility Services
      </div>
    </div>
  </a>
</div>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-green-600 font-medium transition-colors relative group">
                Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </button>

              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-green-100 overflow-hidden transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline">+91 93225 06625</span>
            </a>
            <Link to="/" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3 px-6 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
              <Download className="w-4 h-4 mr-2" />
              Brochure
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              Home
            </Link>
            <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`ml-4 space-y-1 transition-all duration-300 ${
                isServicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <a href="tel:+911234567890" className="flex items-center px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <Phone className="w-4 h-4 mr-3" />
                +91 93225 06625
              </a>
              <Link to="/" className="block mx-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium py-3 px-6 rounded-full text-center hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
