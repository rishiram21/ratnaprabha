import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions or need our services? Fill out the form or reach us directly via:
          </p>
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:info@ratnaprabha.com" className="text-gray-700">info@ratnaprabha.com</a>
          </div>
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.716 3 12V5z" />
            </svg>
            <a href="tel:+919876543210" className="text-gray-700">+91 98765 43210</a>
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-700">123 Eco Park, Green City, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
