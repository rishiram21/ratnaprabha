import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* About Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Ratnaprabha Facility Services</h3>
          <p className="text-gray-400">
            Committed to eco-friendly, efficient, and high-quality facility solutions. Ensuring clean and safe environments for communities and industries.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0 md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li className="mb-2"><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li className="mb-2"><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <form className="flex flex-col sm:flex-row">
            <input type="email" placeholder="Your email" className="p-2 rounded-l-lg text-gray-900 flex-grow" />
            <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-lg mt-2 sm:mt-0 sm:ml-2">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-gray-800 text-center">
        <p className="text-gray-400">© {currentYear} Ratnaprabha Facility Services LLP. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
