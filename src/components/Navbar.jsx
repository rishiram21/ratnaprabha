import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex items-center justify-between sticky top-0 z-50">
      {/* Logo on the extreme left */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-8 mr-2" />
          <span className="text-sm font-semibold">Ratnaprabha Facility Services LLP</span>
        </Link>
      </div>

      {/* Navigation links in the center */}
      <ul className="flex space-x-6 justify-center flex-grow">
        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
        <li className="relative group">
          <button className="hover:text-blue-300 flex items-center">Services</button>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
            <Link to="/solid-waste-management" className="block px-4 py-2 hover:bg-gray-200">Solid Waste Management</Link>
            <Link to="/construction-development" className="block px-4 py-2 hover:bg-gray-200">Construction & Development</Link>
            <Link to="/electrical-service" className="block px-4 py-2 hover:bg-gray-200">Electrical Service</Link>
            <Link to="/housekeeping" className="block px-4 py-2 hover:bg-gray-200">Housekeeping</Link>
            <Link to="/logistic-transport" className="block px-4 py-2 hover:bg-gray-200">Logistic & Transport</Link>
          </div>
        </li>
        <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
      </ul>

      {/* Download Brochure button on the extreme right */}
      <div>
        <Link to="/download-brochure" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Brochure
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
