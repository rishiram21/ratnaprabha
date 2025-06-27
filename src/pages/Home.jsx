import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="w-full max-w-screen-lg mx-auto text-center">
        <p className="text-green-500 text-lg mb-2">Eco-Friendly Facility Management</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-600 mb-4">
          Ratnaprabha Facility Services LLP
        </h1>
        <p className="text-gray-600 text-xl mb-8">Building a Green Future</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Let's Get Started
        </button>
      </header>

      <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl mb-2">⭐</div>
          <p className="text-green-600 font-bold text-2xl">5+</p>
          <p className="text-gray-600">Years of Excellence</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl mb-2">👥</div>
          <p className="text-green-600 font-bold text-2xl">50+</p>
          <p className="text-gray-600">Trusted Clients</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-green-500 text-4xl mb-2">♻️</div>
          <p className="text-green-600 font-bold text-2xl">100%</p>
          <p className="text-gray-600">Zero-Waste Solutions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-purple-500 text-4xl mb-2">⏱️</div>
          <p className="text-green-600 font-bold text-2xl">99%</p>
          <p className="text-gray-600">Timely Project Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
