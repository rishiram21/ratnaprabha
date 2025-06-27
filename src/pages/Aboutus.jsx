import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 max-w-screen-xl mx-auto">

      {/* Main Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-green-700 mb-4">About Us</h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Ratnaprabha Facility Services LLP is one of the fastest-growing Integrated Facility & Services Management companies. With our vast experience and expertise in managing clients' properties, we ensure your assets remain well-maintained and vibrant. We distinguish ourselves from the crowd through qualitative, customized solutions that are also cost-effective.
        </p>
      </div>

      {/* Core Strength Section */}
      <div className="mb-8">
        <p className="text-base text-gray-700 leading-relaxed">
          Our core strength lies in our capability to handle jobs more efficiently than conventional outsourcing solutions. We bring the highest standards of professionalism, punctuality, and passion to every task, ensuring our service delivery consistently exceeds expectations.
        </p>
      </div>

      {/* Company Values Section */}
      <div className="mb-8">
        <p className="text-base text-gray-700 leading-relaxed">
          At Ratnaprabha, we firmly believe in the mantra of Perfection, Punctuality, and Passion in every endeavor we undertake. Guided by experienced professionals and powered by a young and energetic team, we foster a culture of enthusiasm, innovation, and a strong can-do attitude.
        </p>
      </div>

      {/* Mission Statement Section */}
      <div className="mb-8">
        <p className="text-base text-gray-700 leading-relaxed">
          Our mission is to build a world-class organization founded on transparency, compliance, and a commitment to excellence. With a focus on maximizing client satisfaction and returns, we aim to create a company that is admired and respected by all.
        </p>
      </div>

      {/* Core Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {/* Sustainability */}
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <div className="text-green-600 mb-4 text-4xl">🌱</div>
          <h4 className="text-xl font-bold mb-2">Sustainability</h4>
          <p className="text-gray-700">We prioritize eco-friendly practices in every service we provide.</p>
        </div>

        {/* Community Focus */}
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <div className="text-green-600 mb-4 text-4xl">🏡</div>
          <h4 className="text-xl font-bold mb-2">Community Focus</h4>
          <p className="text-gray-700">Engaging with local communities to build cleaner spaces together.</p>
        </div>

        {/* Reliability */}
        <div className="bg-green-50 p-6 rounded-lg text-center">
          <div className="text-green-600 mb-4 text-4xl">⏰</div>
          <h4 className="text-xl font-bold mb-2">Reliability</h4>
          <p className="text-gray-700">Timely and dependable services you can count on.</p>
        </div>
      </div>

      {/* Our Owners Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-green-700 mb-8">Our Owners</h3>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/vidya-shinde.jpg" alt="Vidya Shinde" className="w-48 h-48 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold">Vidya Shinde</h4>
            <p className="text-gray-600">Designated Partner</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/kunal-shinde.jpg" alt="Kunal Shinde" className="w-48 h-48 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold">Kunal Shinde</h4>
            <p className="text-gray-600">Designated Partner</p>
          </div>
        </div>
      </div>

      {/* Our Certifications Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">Our Certifications</h3>
        <Slider {...settings}>
          <div className="flex flex-col items-center px-4">
            <img src="/iso-9001.jpg" alt="ISO 9001" className="w-40 h-40 mb-4" />
            <p className="text-gray-700">ISO 9001:2015 Certified</p>
          </div>
          <div className="flex flex-col items-center px-4">
            <img src="/iso-27001.jpg" alt="ISO 27001" className="w-40 h-40 mb-4" />
            <p className="text-gray-700">ISO 27001 Certified</p>
          </div>
          <div className="flex flex-col items-center px-4">
            <img src="/iso-45001.jpg" alt="ISO 45001" className="w-40 h-40 mb-4" />
            <p className="text-gray-700">ISO 45001 Certified</p>
          </div>
        </Slider>
      </div>

      {/* Our Clients Section */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-8">Our Clients</h3>
        <Slider {...settings}>
          <div className="bg-white p-4 rounded-lg shadow-md mx-2">
            <img src="/client1-logo.jpg" alt="Client 1" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-gray-700">Client 1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mx-2">
            <img src="/client2-logo.jpg" alt="Client 2" className="w-32 h-32 mx-auto mb-4" />
            <p className="text-gray-700">Client 2</p>
          </div>
          {/* Add more clients as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
