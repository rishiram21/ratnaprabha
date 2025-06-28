import React, { useState,useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Headphones, Users } from 'lucide-react';

const ContactUs = () => {
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white mt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl opacity-90">We're here to help you with all your facility management needs</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
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

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
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

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
              <div className="space-y-4">
                <a href="tel:+919876543210" className="flex items-center bg-white bg-opacity-20 p-4 rounded-lg hover:bg-opacity-30 transition-all duration-300">
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

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300">
                <h4 className="font-bold text-gray-800 mb-3">{faq.question}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 p-12 rounded-2xl text-center border border-green-200">
          <div className="flex justify-center mb-6">
            <div className="bg-green-600 p-4 rounded-full">
              <Headphones className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to provide you with the best facility management solutions. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white font-bold py-4 px-8 rounded-full hover:bg-green-700 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="border-2 border-green-600 text-green-600 font-bold py-4 px-8 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;