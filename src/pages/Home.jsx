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

  const mediaItems = [
  { type: "video", src: "/homeslider1.mp4" },
  { type: "image", src: "/homesliderimg1.jpg" },
  { type: "video", src: "/homeslider2.mp4" },
  { type: "image", src: "/homesliderimg2.jpg" },
  { type: "video", src: "/homeslider3.mp4" },
];

const settings1 = {
  dots: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
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
    { src: "/1.png", alt: "ISO 9001", caption: "ISO 9001:2015 Certified" },
    { src: "/2.jpg", alt: "ISO 27001", caption: "ISO 27001 Certified" },
    { src: "/3.webp", alt: "ISO 45001", caption: "ISO 45001 Certified" },
    { src: "/4.jpg", alt: "COI", caption: "Certificate of Incorporation" },
    { src: "/5.jpg", alt: "GST", caption: "GST Registered" },
    { src: "/6.png", alt: "EPFO", caption: "Employee Provident Fund Organization" },
    { src: "/7.png", alt: "MSME", caption: "Micro, Small and Medium Enterprise" },
    { src: "/8.jpg", alt: "Quality Assurance", caption: "Quality Assurance Advisory" },
    { src: "/9.jpg", alt: "ISO 14001", caption: "ISO 14001 Certified" },
  ];

  const clients = [
    { src: "/client1.jpg", alt: "Client 1", caption: "Client 1" },
    { src: "/client2.jpg", alt: "Client 2", caption: "Client 2" },
    { src: "/client3.jpg", alt: "Client 3", caption: "Client 3" },
    { src: "/client4.jpg", alt: "Client 4", caption: "Client 4" },
  ];

  const coreValues = [
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We prioritize eco-friendly practices in every service we provide.',
      details: 'Our commitment to sustainability drives us to implement sky solutions across all operations, reducing environmental impact and promoting a healthier planet.'
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
      color: "bg-sky-50 border-sky-200 text-sky-700"
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

  const testimonials = [
    {
      id: 1,
      name: "Mr. Kiran Patil",
      role: "Facility Manager",
      image: "/user.png",
      testimonial: "Ratna Prabha has been managing our facility for over 2 years now. Their team is disciplined, punctual, and reliable.",
      bgColor: "bg-slate-700"
    },
    {
      id: 2,
      name: "Mrs. Sneha Joshi",
      role: "Interior Designer",
      image: "/user.png",
      testimonial: "Excellent service! We saw a visible difference in cleanliness and staff behavior after onboarding them.",
      bgColor: "bg-slate-700"
    },
    {
      id: 3,
      name: "Mr. Ravi Nair",
      role: "Architect",
      image: "/user.png",
      testimonial: "Prompt service and excellent coordination. Highly recommended for any business setup",
      bgColor: "bg-slate-700"
    },
    {
      id: 4,
      name: "Mr. Sameer Kulkarni",
      role: "Manager",
      image: "/user.png",
      testimonial: "Their team handled our society's waste management and housekeeping with great professionalism. Cleanliness levels have improved drastically.",
      bgColor: "bg-slate-700"
    }
  ];

  return (
    <div>
      {/* Home Page Content */}
      <div className="min-h-screen relative overflow-hidden mt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
  <Slider {...settings1}>
    {mediaItems.map((item, index) => (
      <div key={index} className="relative w-full h-[100vh]">
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={`media-${index}`}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/70 via-sky-800/60 to-emerald-900/70" />
      </div>
    ))}
  </Slider>
</div>


        

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
          <header className="w-full max-w-6xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <span className="text-emerald-300 text-lg font-medium">🌱 Eco-Friendly Facility Management</span>
            </div>
            <h1 className="text-xl md:text-xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-sky-200 bg-clip-text text-transparent">
                Ratnaprabha
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-200 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Facility Services <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl">LLP</span>
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-sky-600 text-white font-bold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">Let's Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* About Us Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        {/* <div className="bg-gradient-to-r from-sky-600 to-emerald-700 text-white py-16">
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
            <h2 className="text-4xl font-bold text-sky-700 mb-4">Our Story</h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Ratnaprabha Facility Services LLP is one of the fastest-growing Integrated Facility & Services Management companies. With our vast experience and expertise in managing clients' properties, we ensure your assets remain well-maintained and vibrant. We distinguish ourselves from the crowd through qualitative, customized solutions that are also cost-effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-sky-50 p-6 rounded-lg text-center cursor-pointer"
                onClick={() => toggleContent(index)}
              >
                <div className="text-sky-600 mb-4 text-4xl">{value.icon}</div>
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
                    <h3 className="text-2xl font-bold text-sky-700 mb-8">Our Owners</h3>
                    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-lg shadow-md cursor-pointer mx-auto"
                      >
                        <img
                          src="/kunal.png"
                          alt="Kunal Shinde"
                          className="w-32 h-40 mx-auto rounded-lg mb-4 object-cover"
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
                          className="w-32 h-40 mx-auto rounded-lg mb-4 object-cover"
                        />
                        <h4 className="text-xl font-bold">Vidya Shinde</h4>
                        <p className="text-gray-600">
                          With a strong focus on process management and client satisfaction, Vidya ensures seamless execution and day-to-day efficiency.
                        </p>
                      </motion.div>
                    </div>
                  </div>



          <div className="mb-12">
  <h3 className="text-2xl font-bold text-sky-700 mb-8 text-center">
    Our Certifications
  </h3>
  <Slider {...settings}>
    {certifications.map((certification, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center px-4 h-full"
      >
        <div className="flex items-center justify-center w-full h-44 mb-4">
          <img
            src={certification.src}
            alt={certification.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <p className="text-gray-700 text-center text-sm md:text-base px-2">
          {certification.caption}
        </p>
      </div>
    ))}
  </Slider>
</div>

<div className="mb-12">
  <h3 className="text-2xl font-bold text-sky-700 mb-8 text-center">
    Our Clients
  </h3>
  <Slider {...settings}>
    {clients.map((client, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center px-4 h-full"
      >
        <div className="flex items-center justify-center w-full h-44 mb-4">
          <img
            src={client.src}
            alt={client.alt}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <p className="text-gray-700 text-center text-sm md:text-base px-2">
          {client.caption}
        </p>
      </div>
    ))}
  </Slider>
</div>

        </div>
      </div>

      


       



<div className="container mx-auto px-4 py-12">
  <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
    Our Latest Works
  </h1>

  <div className="flex flex-wrap -mx-4">
    {[
      {
        src: "/work1.jpg",
        alt: "Shevgaon Municipal Council",
        caption: "Shevgaon Municipal Council",
      },
      {
        src: "/work2.jpg",
        alt: "Pen Municipal Council",
        caption: "Pen Municipal Council",
      },
      {
        src: "/work3.jpg",
        alt: "Shrigonda Nagarparishad",
        caption: "Shrigonda Nagarparishad",
      },
      {
        src: "/work4.jpg",
        alt: "Karjat Municipal Council",
        caption: "Karjat Municipal Council",
      },
    ].map((work, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-10">
        <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
          <img
            src={work.src}
            alt={work.alt}
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <p className="text-center text-gray-700 font-medium text-base">
              {work.caption}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Contact Us Page Content */}
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        {/* <div className="bg-gradient-to-r from-sky-600 to-emerald-700 text-white py-16">
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
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-sky-100">
              <div className="flex items-center mb-6">
                <Send className="w-8 h-8 text-sky-600 mr-3" />
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
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
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
                      className="w-full p-4 border border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
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
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-sky-500 focus:outline-none transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button className="w-full bg-sky-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <a href="tel:+919876543210" className="text-sky-600 hover:text-sky-700">+91 93225 06625</a>
                      <p className="text-sm text-gray-600">Mon-Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <a href="mailto:info@ratnaprabha.com" className="text-sky-600 hover:text-sky-700">ratnaprabha@gmail.com</a>
                      <p className="text-sm text-gray-600">24/7 Email Support</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari,</p>
                      <p className="text-gray-600">Pune, Maharashtra, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-sky-600 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">Business Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Emergency calls only</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-sky-600 to-emerald-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <a href="tel:+9193225 06625" className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300">
                    <Phone className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-medium">Emergency Support</p>
                      <p className="text-sm opacity-90">Call us now for urgent assistance</p>
                    </div>
                  </a>
                  {/* <div className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg cursor-pointer hover:bg-opacity-30 transition-all duration-300">
                    <MessageCircle className="w-6 h-6 mr-3" />
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-sm opacity-90">Chat with our support team</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-600 font-medium mb-2">What Our Clients Say</h3>
          <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-lg p-8 text-white shadow-lg`}
            >
              {/* Profile Section */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
                    <img src={testimonial.image}></img>
                  </div>
                </div>
                <div>
                  <h4 className="text-sky-400 text-sm font-semibold mb-1">
                    {testimonial.role}
                  </h4>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-200 leading-relaxed">
                {testimonial.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

          {/* <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-sky-100 hover:shadow-lg transition-all duration-300">
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
