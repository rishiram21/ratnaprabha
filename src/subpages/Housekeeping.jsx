import React, { useState } from 'react';
import { Trash2, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

const HouseKeeping = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const services = [
    {
      title: "Door to Door Collection & Transport",
      description: "Efficient household waste pickup and segregation.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Road Sweeping Manual & Mechanized",
      description: "Advanced street cleaning for up to 600km. We deploy high-efficiency sweepers with water-spray and vacuum systems.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Processing & Disposal Plant Operation",
      description: "Efficient operation of waste processing and disposal plants.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Bio Composting",
      description: "Conversion of organic waste into compost.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Fogging and Spraying",
      description: "Effective pest control and sanitation.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Drainage Cleaning",
      description: "Comprehensive drainage cleaning services.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Sanitary Landfill Development",
      description: "Development of sanitary landfills.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "Legacy Waste Processing (Bio Mining)",
      description: "Processing of legacy waste through bio mining.",
      imageUrl: "/tree.jpg",
    },
    {
      title: "ETP & STP Plant Operation",
      description: "Operation of Effluent and Sewage Treatment Plants.",
      imageUrl: "/tree.jpg",
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Assess & Plan",
      description: "Site surveys & customized waste management strategies.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      step: "2",
      title: "Implement",
      description: "Deploy trained teams & modern equipment.",
      imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      step: "3",
      title: "Monitor & Maintain",
      description: "Continuous monitoring with data-driven improvements.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(21, 128, 61, 0.5)), url("/housekeepingbg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full">
              <Trash2 size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">House Keeping</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Providing sustainable waste management solutions for a cleaner and greener environment
          </p>
          <button className="mt-8 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Key Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Key Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transform transition-all duration-300 ${expandedCard === index ? 'scale-105' : 'hover:scale-105'}`}
              onClick={() => handleCardClick(index)}
            >
              <img src={service.imageUrl} alt={service.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              {expandedCard === index && (
                <div className="mt-4">
                  <p className="text-gray-700">Additional detailed information about {service.title}.</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md text-center cursor-pointer transform transition-all duration-300 ${expandedCard === index + services.length ? 'scale-105' : 'hover:scale-105'}`}
              onClick={() => handleCardClick(index + services.length)}
            >
              <img src={step.imageUrl} alt={step.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
              <div className="text-4xl font-bold text-blue-500 mb-4">{step.step}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">
                {step.description}
              </p>
              {expandedCard === index + services.length && (
                <div className="mt-4">
                  <p className="text-gray-700">Additional detailed information about {step.title}.</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            How can we assist you?
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseKeeping;
