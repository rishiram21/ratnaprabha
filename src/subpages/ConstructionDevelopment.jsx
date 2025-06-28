import React from 'react';
import { Building, CheckCircle, Phone, Mail, MapPin, Star, Users, Calendar, Award, Shield } from 'lucide-react';

const ConstructionDevelopment = () => {
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
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h100v100H0z\' fill=\'%23ffffff\'/%3E%3Cpath d=\'M20 20h20v20H20zM60 20h20v20H60zM20 60h20v20H20zM60 60h20v20H60z\' fill=\'%23ffffff\'/%3E%3C/g%3E%3C/svg%3E")' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full">
              <Building size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Construction & Development</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Building tomorrow's infrastructure with sustainable practices and innovative solutions
          </p>
          <button className="mt-8 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Get Free Estimate
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-green-100">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">98%</div>
              <div className="text-green-100">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-green-100">Expert Team</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-8">Our Construction Services</h2>
            <div className="space-y-4">
              {[
                'Residential Construction & Custom Homes',
                'Commercial Building Development',
                'Green Building & LEED Certification',
                'Project Management & Consulting',
                'Renovation & Restoration Services',
                'Infrastructure Development',
                'Quality Assurance & Safety Compliance',
                'Sustainable Building Materials'
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
            <h3 className="text-2xl font-bold mb-6">Get Your Project Started</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green-200" />
                <span>+91 93225 06625 </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green-200" />
                <span>construction@services.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-green-200" />
                <span>1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari, Pune, Maharashtra 411039</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-500">
              <h4 className="font-semibold mb-4">Why Choose Our Construction Services?</h4>
              <div className="space-y-2 text-sm text-green-100">
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Licensed & Insured Contractors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Eco-Friendly Building Practices</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>On-Time Project Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Competitive Pricing</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-white text-green-700 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Request Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Users className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with years of construction experience</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Calendar className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Timely Delivery</h3>
              <p className="text-gray-600">Projects completed on schedule with quality assurance</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Award className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Quality Standards</h3>
              <p className="text-gray-600">Exceeding industry standards in every project</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Shield className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Safety First</h3>
              <p className="text-gray-600">Comprehensive safety protocols and compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Construction Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial site assessment and project planning discussion' },
              { step: '02', title: 'Design & Planning', desc: 'Detailed blueprints, permits, and resource planning' },
              { step: '03', title: 'Construction', desc: 'Professional execution with quality control checks' },
              { step: '04', title: 'Completion', desc: 'Final inspection, handover, and warranty support' }
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

      {/* Testimonial Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                project: "Custom Home Build",
                text: "EcoServices transformed our vision into reality. Their attention to detail and sustainable practices made all the difference."
              },
              {
                name: "Michael Chen",
                project: "Office Complex",
                text: "Professional, reliable, and delivered on time. The green building certification was a huge plus for our company."
              },
              {
                name: "Lisa Rodriguez",
                project: "Restaurant Renovation",
                text: "Outstanding workmanship and excellent communication throughout the project. Highly recommend their services."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-green-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.project}</div>
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
          <p className="text-green-200 mb-4">Building sustainable futures, one project at a time</p>
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

export default ConstructionDevelopment;