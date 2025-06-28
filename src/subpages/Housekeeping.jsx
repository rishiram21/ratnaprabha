import React from 'react';
import { Home, CheckCircle, Phone, Mail, MapPin, Star, Sparkles, Shield, Clock, Leaf } from 'lucide-react';

const Housekeeping = () => {
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
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(21, 128, 61, 0.9)), url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 0h80v80H0z\' fill=\'%23ffffff\'/%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'8\' fill=\'%23ffffff\'/%3E%3Ccircle cx=\'60\' cy=\'20\' r=\'8\' fill=\'%23ffffff\'/%3E%3Ccircle cx=\'20\' cy=\'60\' r=\'8\' fill=\'%23ffffff\'/%3E%3Ccircle cx=\'60\' cy=\'60\' r=\'8\' fill=\'%23ffffff\'/%3E%3C/g%3E%3C/svg%3E")' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative text-center z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-full">
              <Home size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Housekeeping Services</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Creating pristine environments that enhance your comfort and well-being
          </p>
          <button className="mt-8 bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Book Cleaning Service
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">300+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-green-100">Quality Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">5★</div>
              <div className="text-green-100">Average Review</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-green-100">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-8">Our Cleaning Services</h2>
            <div className="space-y-4">
              {[
                'Regular Weekly/Bi-weekly Cleaning',
                'Deep Cleaning & Sanitization',
                'Move-in/Move-out Cleaning',
                'Office & Commercial Cleaning',
                'Post-Construction Cleanup',
                'Window & Glass Cleaning',
                'Carpet & Upholstery Cleaning',
                'Kitchen & Bathroom Deep Clean',
                'Eco-Friendly Cleaning Products',
                'Customized Cleaning Plans'
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
            <h3 className="text-2xl font-bold mb-6">Schedule Your Cleaning</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                              <Phone size={20} className="text-green-200" />
                              <span>+91 93225 06625 </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Mail size={20} className="text-green-200" />
                              <span>housekeeping@services.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <MapPin size={20} className="text-green-200" />
                              <span>1st Floor, jai Ganesh Samrajya, Off No 143, A wing, Bhosari, Pune, Maharashtra 411039</span>
                            </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-green-500">
              <h4 className="font-semibold mb-4">Why Choose Our Cleaning Service?</h4>
              <div className="space-y-2 text-sm text-green-100">
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Trained & Background-Checked Staff</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>100% Eco-Friendly Products</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={16} className="text-yellow-400" />
                  <span>Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 bg-white text-green-700 py-3 px-6 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Service Types Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Cleaning Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Sparkles className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Regular Cleaning</h3>
              <p className="text-gray-600">Weekly or bi-weekly maintenance cleaning for homes and offices</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Shield className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Deep Cleaning</h3>
              <p className="text-gray-600">Thorough sanitization and detailed cleaning services</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Clock className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">One-Time Service</h3>
              <p className="text-gray-600">Special occasion cleaning and move-in/out services</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Leaf className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Green cleaning products safe for family and pets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Cleaning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Consultation', desc: 'We assess your space and discuss your cleaning needs' },
              { step: '02', title: 'Custom Plan', desc: 'Create a personalized cleaning schedule and checklist' },
              { step: '03', title: 'Professional Cleaning', desc: 'Our trained team delivers exceptional cleaning service' },
              { step: '04', title: 'Quality Check', desc: 'Final inspection to ensure your complete satisfaction' }
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

      {/* Pricing Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Cleaning Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Basic Clean</h3>
              <div className="text-3xl font-bold text-green-600 mb-6">$80<span className="text-lg text-gray-600">/visit</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">General cleaning & dusting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Vacuum & mop floors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Bathroom cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Kitchen surface cleaning</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Choose Basic
              </button>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-xl border-2 border-green-600 transform scale-105">
              <div className="bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Standard Clean</h3>
              <div className="text-3xl font-bold mb-6">$120<span className="text-lg text-green-200">/visit</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Everything in Basic Clean</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Deep bathroom sanitization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Kitchen appliance cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Window cleaning (interior)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-200" />
                  <span>Baseboards & light fixtures</span>
                </li>
              </ul>
              <button className="w-full bg-white text-green-700 py-3 rounded-lg hover:bg-green-50 transition-colors font-semibold">
                Choose Standard
              </button>
            </div>

            <div className="bg-green-50 p-8 rounded-xl border-2 border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Premium Clean</h3>
              <div className="text-3xl font-bold text-green-600 mb-6">$180<span className="text-lg text-gray-600">/visit</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Everything in Standard Clean</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Inside oven & refrigerator</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Cabinet fronts & interiors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Laundry room cleaning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-700">Garage organization</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Walsh",
                service: "Weekly Cleaning",
                text: "Amazing service! My house has never been cleaner. The team is reliable and uses eco-friendly products."
              },
              {
                name: "Mark Stevens",
                service: "Office Cleaning",
                text: "Professional and thorough. Our office space always looks perfect after their cleaning service."
              },
              {
                name: "Susan Lee",
                service: "Deep Cleaning",
                text: "Exceptional deep cleaning service. They pay attention to every detail and are very trustworthy."
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
          <p className="text-green-200 mb-4">Creating clean, healthy environments for better living</p>
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

export default Housekeeping;