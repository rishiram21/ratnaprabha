import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden mt-20">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-green-leaves-moving-in-the-wind-1228-large.mp4"
            type="video/mp4"
          />
          {/* Fallback gradient if video doesn't load */}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/70 via-green-800/60 to-emerald-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Header Section */}
        <header className="w-full max-w-6xl mx-auto text-center mb-16">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
            <span className="text-emerald-300 text-lg font-medium">🌱 Eco-Friendly Facility Management</span>
          </div>

          {/* Main Title with Gradient */}
          <h1 className="text-xl md:text-xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-green-200 bg-clip-text text-transparent">
              Ratnaprabha
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-400 bg-clip-text text-transparent">
              Facility Services <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl">LLP</span>
            </span>
            <br />
            
          </h1>

          {/* Subtitle */}
          {/* <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Building a Sustainable Future Through Innovation, Excellence, and Environmental Responsibility
          </p> */}

          {/* CTA Buttons */}
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

        {/* Stats Section */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⭐", number: "5+", label: "Years of Excellence", color: "from-yellow-400 to-orange-500" },
              { icon: "👥", number: "50+", label: "Trusted Clients", color: "from-blue-400 to-cyan-500" },
              { icon: "♻️", number: "100%", label: "Zero-Waste Solutions", color: "from-emerald-400 to-green-500" },
              { icon: "⏱️", number: "99%", label: "Timely Delivery", color: "from-purple-400 to-pink-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <p className="text-white/80 font-medium text-sm md:text-base">
                    {stat.label}
                  </p>
                </div>
                
                {/* Animated background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/50 to-transparent z-5"></div>
    </div>
  );
};

export default Home;