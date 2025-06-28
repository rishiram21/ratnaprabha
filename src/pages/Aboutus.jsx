import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const settings = {
  dots: true,
  infinite: true,
  speed: 500, // Transition speed between slides
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Time between slide transitions in milliseconds (e.g., 2000ms = 2 seconds)
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Ensure autoplay is enabled on smaller screens as well
        autoplaySpeed: 2000,
      },
    },
  ],
};


  const certifications = [
    { src: "/iso-9001.jpg", alt: "ISO 9001", caption: "ISO 9001:2015 Certified" },
    { src: "/iso-9001.jpg", alt: "ISO 27001", caption: "ISO 27001 Certified" },
    { src: "/iso-9001.jpg", alt: "ISO 45001", caption: "ISO 45001 Certified" },
    { src: "/iso-9001.jpg", alt: "MSME", caption: "MSME Certified" },
    { src: "/iso-9001.jpg", alt: "GST", caption: "GST Registered" },
    { src: "/iso-9001.jpg", alt: "Quality Assurance", caption: "Quality Assurance Certified" },
  ];

  const clients = [
    { src: "/client.jpg", alt: "Client 1", caption: "Client 1" },
    { src: "/client.jpg", alt: "Client 2", caption: "Client 2" },
    { src: "/client.jpg", alt: "Client 3", caption: "Client 3" },
    { src: "/client.jpg", alt: "Client 4", caption: "Client 4" },
    { src: "/client.jpg", alt: "Client 5", caption: "Client 5" },
    { src: "/client.jpg", alt: "Client 6", caption: "Client 6" },
  ];

  const coreValues = [
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We prioritize eco-friendly practices in every service we provide.',
      details: 'Our commitment to sustainability drives us to implement green solutions across all operations, reducing environmental impact and promoting a healthier planet.'
    },
    {
      icon: '🏡',
      title: 'Community Focus',
      description: 'Engaging with local communities to build cleaner spaces together.',
      details: 'We actively engage with local communities through various initiatives and partnerships to foster a sense of shared responsibility and collaboration.'
    },
    {
      icon: '⏰',
      title: 'Reliability',
      description: 'Timely and dependable services you can count on.',
      details: 'Our dedication to reliability ensures that we consistently deliver high-quality services on time, every time, building trust and long-term relationships with our clients.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white mt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl opacity-90"
          >
            Discover the story behind Ratnaprabha Facility Services and learn about our commitment to excellence.
          </motion.p>
        </div>
      </div>

      <div className="p-8 max-w-screen-xl mx-auto">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">Our Story</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Ratnaprabha Facility Services LLP is one of the fastest-growing Integrated Facility & Services Management companies. With our vast experience and expertise in managing clients' properties, we ensure your assets remain well-maintained and vibrant. We distinguish ourselves from the crowd through qualitative, customized solutions that are also cost-effective.
          </p>
        </motion.div>

        {/* Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-green-50 p-6 rounded-lg text-center cursor-pointer"
              onClick={() => toggleContent(index)}
            >
              <div className="text-green-600 mb-4 text-4xl">{value.icon}</div>
              <h4 className="text-xl font-bold mb-2">{value.title}</h4>
              <p className="text-gray-700">{value.description}</p>
              {activeIndex === index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-gray-700 mt-4"
                >
                  {value.details}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Our Owners Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Our Owners</h3>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer mx-auto"
            >
              <img
                src="/kunal.png"
                alt="Kunal Shinde"
                className="w-32 h-36 mx-auto rounded-lg mb-4 object-cover"
              />
              <h4 className="text-xl font-bold">Kunal Shinde</h4>
              <p className="text-gray-600">
                A visionary leader with a passion for operational excellence, Kunal drives strategic growth and quality delivery across all services.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer mx-auto"
            >
              <img
                src="/vidya.png"
                alt="Vidya Shinde"
                className="w-32 h-36 mx-auto rounded-lg mb-4 object-cover"
              />
              <h4 className="text-xl font-bold">Vidya Shinde</h4>
              <p className="text-gray-600">
                With a strong focus on process management and client satisfaction, Vidya ensures seamless execution and day-to-day efficiency.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Our Certifications Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">Our Certifications</h3>
          <Slider {...settings}>
            {certifications.map((certification, index) => (
              <div key={index} className="flex flex-col items-center px-4">
                <img src={certification.src} alt={certification.alt} className="w-40 h-40 mb-4 object-contain" />
                <p className="text-gray-700 text-center">{certification.caption}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Our Prestige Clients Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-green-700 mb-8">Our Prestige Clients</h3>
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md mx-2">
                <img src={client.src} alt={client.alt} className="w-32 h-32 mx-auto mb-4 object-contain" />
                <p className="text-gray-700">{client.caption}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
