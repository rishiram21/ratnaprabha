import React from 'react';
import { Zap, CheckCircle, Phone, Mail, MapPin, Star, Clock, Shield, Wrench, AlertTriangle } from 'lucide-react';

const ElectricalService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white mt-20">
      {/* Navigation */}
      {/* <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-green-700">EcoServices</div>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-green-700 hover:text-green-900 transition-colors">Services</a>
              <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">About</a>
              <a href="#contact" className="text-green-700 hover:text-green-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <div
        className="relative h-96 flex items-center justify-center text-white"
        style={{ 
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\' viewBox=\'0 0 60 60\'%3E%3Cg fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'%23ffffff\'/%3E%3Cpath d=\'M10 10l40 40M50 10L10 50\' stroke=\'%23ffffff\' stroke-width=\'2\'/%3E%3C/g%3E%3C/svg%3E")' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full">
              <Zap size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Electrical Services</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Powering your world with safe, efficient, and innovative electrical solutions
          </p>
          <button className="mt-8 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Emergency Service
          </button>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <AlertTriangle size={20} />
            <span className="font-semibold">24/7 Emergency Electrical Service Available - Call Now!</span>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">1000+</div>
              <div className="text-green-100">Installations</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">24/7</div>
              <div className="text-green-100">Emergency Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-green-100">Safety Record</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">20+</div>
              <div className="text-green-100">Certified Electricians</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-8">Our Electrical Services</h2>
            <div className="space-y-4">
              {[
                'Electrical Installation & Wiring',
                'Panel Upgrades & Circuit Breakers',
                'Lighting Design & Installation',
                '24/7 Emergency Repair Services',
                'Energy Efficiency Audits & Solutions',
                'Smart Home Automation Systems',
                'Industrial & Commercial Electrical',
                'Preventive Maintenance Programs',
                'Electrical Safety Inspections',
                'Generator Installation & Service'
              ].map((service, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                  <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Get Electrical Service Now</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                              <Phone size={20} className="text-green-200" />
                              <span>+91 93225 06625 </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Mail size={20} className="text-green-200" />
                              <span>electrical@services.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <MapPin size={20} className="text-green-200" />
                              <span>1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari, Pune, Maharashtra 411039</span>
                            </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-500">
              <h4 className="font-semibold mb-4">Why Choose Our Electrical Services?</h4>
              <div className="space-y-2 text-sm text-green-100">
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Licensed & Insured Electricians</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>24/7 Emergency Response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Energy-Efficient Solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Upfront Pricing</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-white text-green-700 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Schedule Service
            </button>
          </div>
        </div>
      </div>

      {/* Service Types Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Zap className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Residential</h3>
              <p className="text-gray-600">Home wiring, outlets, lighting, and electrical repairs</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Clock className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Emergency</h3>
              <p className="text-gray-600">24/7 emergency electrical repairs and troubleshooting</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Shield className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Commercial</h3>
              <p className="text-gray-600">Office buildings, retail spaces, and industrial facilities</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Wrench className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Maintenance</h3>
              <p className="text-gray-600">Preventive maintenance and electrical system upgrades</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Service Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Call & Schedule', desc: 'Contact us for immediate response or scheduled service' },
              { step: '02', title: 'Diagnosis', desc: 'Professional assessment and transparent pricing' },
              { step: '03', title: 'Service', desc: 'Expert electrical work with safety as priority' },
              { step: '04', title: 'Follow-up', desc: 'Quality check and ongoing maintenance support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Safety First Approach</h2>
              <p className="text-gray-700 mb-6">
                Electrical work requires expertise and strict safety protocols. Our certified electricians follow industry best practices to ensure every job is completed safely and efficiently.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700">OSHA Compliant Safety Standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Licensed & Bonded Electricians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Comprehensive Insurance Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="text-green-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700">Quality Materials & Equipment</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Emergency Electrical Signs</h3>
              <div className="space-y-3 text-green-800">
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  <span>Flickering or dimming lights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  <span>Burning smell from outlets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  <span>Frequent circuit breaker trips</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  <span>Sparks from switches or outlets</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle size={20} className="text-red-600" />
                  <span>Warm or hot outlets/switches</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-green-700 font-semibold">
                If you notice any of these signs, call us immediately!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Thompson",
                service: "Panel Upgrade",
                text: "Professional service and fair pricing. They upgraded our old electrical panel quickly and safely."
              },
              {
                name: "Maria Garcia",
                service: "Smart Home Installation",
                text: "Amazing work on our smart home automation. The team was knowledgeable and efficient."
              },
              {
                name: "Robert Kim",
                service: "Emergency Repair",
                text: "Called them for an emergency at 2 AM. They responded quickly and fixed our power outage professionally."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-green-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">EcoServices</div>
          <p className="text-green-200 mb-4">Powering homes and businesses safely and efficiently</p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>© 2025 EcoServices. All rights reserved.</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default ElectricalService;