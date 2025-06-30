import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones, Users } from 'lucide-react';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
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

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+91 93225 06625",
      subtitle: "Mon-Sat 9:00 AM - 6:00 PM",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "ratnaprabha@gmail.com",
      subtitle: "24/7 Email Support",
      color: "bg-emerald-50 border-emerald-200 text-emerald-700"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      details: "1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari,",
      subtitle: "Pune, Maharashtra, India",
      color: "bg-teal-50 border-teal-200 text-teal-700"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      details: "Chat with our experts",
      subtitle: "Available 9:00 AM - 6:00 PM",
      color: "bg-lime-50 border-lime-200 text-lime-700"
    }
  ];

  const services = [
    "Solid Waste Management",
    "Construction & Development",
    "Electrical Service",
    "Housekeeping",
    "Logistic & Transport",
    "Facility Management",
    "Other"
  ];

  const faqs = [
    {
      question: "What services does Ratnaprabha provide?",
      answer: "We offer comprehensive facility management services including solid waste management, housekeeping, electrical services, construction & development, and logistics & transport."
    },
    {
      question: "Are your services eco-friendly?",
      answer: "Yes, we prioritize sustainable and eco-friendly practices in all our services. We are committed to zero-waste solutions and environmental compliance."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "We offer 24/7 email support and emergency response. Our regular support hours are Monday to Saturday, 9:00 AM to 6:00 PM."
    }
  ];

  return (
    <div>
      {/* Home Page Content */}
      <div className="min-h-screen relative overflow-hidden mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/cleaninghero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-emerald-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
          <header className="w-full max-w-6xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <span className="text-emerald-300 text-lg font-medium">🌱 Eco-Friendly Facility Management</span>
            </div>
            <h1 className="text-xl md:text-xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-green-200 bg-clip-text text-transparent">
                Ratnaprabha
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-400 bg-clip-text text-transparent">
                Facility Services <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl">LLP</span>
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Let's Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* About Us Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
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
        </div> */}

        <div className="p-8 max-w-screen-xl mx-auto">
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
        </div>
      </div>

      {/* Contact Us Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl opacity-90">We're here to help you with all your facility management needs</p>
          </div>
        </div> */}

        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className={`${method.color} p-6 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 cursor-pointer group text-center`}>
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                <p className="font-medium mb-1">{method.details}</p>
                <p className="text-sm opacity-80">{method.subtitle}</p>
              </div>
            ))}
          </div> */}

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">Send us a Message</h2>
              </div>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button className="w-full bg-green-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a href="tel:+919876543210" className="text-green-600 hover:text-green-700">+91 93225 06625</a>
                      <p className="text-sm text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:info@ratnaprabha.com" className="text-green-600 hover:text-green-700">ratnaprabha@gmail.com</a>
                      <p className="text-sm text-gray-600">24/7 Email Support</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari,</p>
                      <p className="text-gray-600">Pune, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Business Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <a href="tel:+9193225 06625" className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300">
                    <Phone className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-medium">Emergency Support</p>
                      <p className="text-sm opacity-90">Call us now for urgent assistance</p>
                    </div>
                  </a>
                  <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg cursor-pointer hover:bg-opacity-30 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm opacity-90">Chat with our support team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-800 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
