import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RotatingEarth from "../../Components/RotatingEarth";
import CitySlider from "../../Components/CitySlider";


const Homepage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: "For Normal Users",
      description: "View Industry Climate Score & Ratings",
      icon: "👤",
      color: "from-blue-400 to-teal-400"
    },
    {
      title: "For Industries",
      description: "Submit Emission Data & Earn Credits",
      icon: "🏭",
      color: "from-teal-400 to-green-400"
    },
    {
      title: "For Admins",
      description: "Verify Reports & Monitor Activity",
      icon: "🛡️",
      color: "from-green-400 to-blue-400"
    },
    {
      title: "For Owners",
      description: "Manage Platform & Approve Admins",
      icon: "👑",
      color: "from-blue-400 to-green-400"
    }
  ];

  const slidingTexts = ["Transparency", "Sustainability", "Accountability", "Green Future"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % slidingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-indigo-900 text-white overflow-hidden relative font-tech">
      {/* Animated Background Elements */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-10 blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-teal-500 opacity-10 blur-3xl -bottom-20 -right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-green-500 opacity-10 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div> */}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateY(${scrollY * (Math.random() * 0.2 + 0.1)}px)`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen px-6 py-24 flex flex-col items-center
">


        <div className="text-center max-w-4xl mx-auto">

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6
      bg-clip-text text-transparent 
      bg-gradient-to-r from-blue-400 via-teal-300 to-green-300
      drop-shadow-[0_0_25px_rgba(0,255,180,0.5)]
      animate-pulse">
            Climate Credit System
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 opacity-90">
            A transparent way to track industrial emissions and climate responsibility.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/login"
              className="
          px-8 py-4 rounded-full font-semibold text-lg text-white
          bg-gradient-to-r from-blue-500 to-teal-500
          shadow-[0_0_20px_rgba(0,200,255,0.4)]
          hover:shadow-[0_0_30px_rgba(0,255,200,0.6)]
          transform hover:scale-110 transition-all duration-500
        "
            >
              Explore as User
            </Link>

            <Link
              to="/signup"
              className="
          px-8 py-4 rounded-full font-semibold text-lg text-white
          bg-gradient-to-r from-teal-500 to-green-500
          shadow-[0_0_20px_rgba(0,255,180,0.5)]
          hover:shadow-[0_0_30px_rgba(0,255,180,0.8)]
          transform hover:scale-110 transition-all duration-500
        "
            >
              Register Industry
            </Link>
          </div>

          {/* 3D Rotating Globe */}
          <div className="relative w-72 h-72 mx-auto mb-12">

            {/* Glow outer ring */}
            <div className="absolute inset-0 rounded-full 
        bg-gradient-to-tr from-blue-400 via-teal-400 to-green-400 
        opacity-40 blur-xl"></div>

            {/* Rotating layers */}
            <div className="absolute inset-0 rounded-full 
        bg-gradient-to-br from-blue-400 via-teal-300 to-green-400 
        animate-spin-slow opacity-70"></div>

            <div className="absolute inset-3 rounded-full 
        bg-gradient-to-tr from-blue-700 via-teal-700 to-green-700 
        animate-spin-slow opacity-50"></div>

            <div className="absolute inset-6 rounded-full 
        bg-gradient-to-bl from-blue-900 via-teal-900 to-green-900 
        animate-spin-slow opacity-30">
            </div>

            <div className="relative w-72 h-72 mx-auto mb-12 flex items-center justify-center">
              <RotatingEarth />
            </div>

            {/* Sliding Text */}
            <div className="h-10 flex items-center justify-center mt-4">
              <div className="text-2xl font-light text-blue-100 
        transition-all duration-1000 tracking-wide">
                {slidingTexts[textIndex]}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section><CitySlider /></section>

      <div className="flex justify-center mt-12">
        <Link
          to="/analytics"
          className="
      px-8 py-4 rounded-full font-semibold text-white
      bg-gradient-to-r from-lime-600 to-emerald-700
      hover:scale-105 transition-all duration-300
    "
        >
          View Industry Analytics →
        </Link>
      </div>




      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 
      bg-clip-text text-transparent bg-gradient-to-r 
      from-blue-400 via-teal-300 to-green-300 drop-shadow-lg">
          Platform Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl backdrop-blur-2xl 
bg-white/10 border border-white/20 shadow-md cursor-pointer
group transition-all duration-300
hover:scale-105 hover:shadow-lg
${activeFeature === index ? 'scale-[1.03] bg-white/15' : ''}`}
            >
              {/* Hover Glow Layer */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-white transition"></div>



              {/* Content */}
              <div className="relative z-20">
                <div className="text-5xl mb-6 drop-shadow-xl">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-3 drop-shadow-md">
                  {feature.title}
                </h3>

                <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* How It Works Section */}
      <section className="relative z-10 py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          How It Works
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 
    rounded-2xl p-8 shadow-md 
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-lg">

            <div className="w-20 h-20 mx-auto mb-6 rounded-xl 
      bg-gradient-to-br from-blue-500 to-indigo-500 
      flex items-center justify-center text-4xl">
              📊
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 
      transition duration-300 hover:text-green-300">
              1. Industry submits emission data
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Industries input their emission data through our secure platform.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 
    rounded-2xl p-8 shadow-md 
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-lg">

            <div className="w-20 h-20 mx-auto mb-6 rounded-xl 
      bg-gradient-to-br from-purple-500 to-indigo-500 
      flex items-center justify-center text-4xl">
              🧮
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 
      transition duration-300 hover:text-green-300">
              2. System calculates climate score
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Our algorithm calculates climate credits and assigns a verified score.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/10 
    rounded-2xl p-8 shadow-md 
    transition-all duration-300 ease-in-out
    hover:scale-105 hover:shadow-lg">

            <div className="w-20 h-20 mx-auto mb-6 rounded-xl 
      bg-gradient-to-br from-indigo-500 to-purple-500 
      flex items-center justify-center text-4xl">
              👁️
            </div>

            <h3 className="text-2xl font-semibold text-white mb-3 
      transition duration-300 hover:text-green-300">
              3. Users see transparency dashboard
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Public users view ratings, climate scores, and transparency reports.
            </p>
          </div>

        </div>
      </section>

      {/* Industry Ranking Preview */}
      <section className="relative z-10 py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16
      bg-clip-text text-transparent bg-gradient-to-r 
      from-blue-400 via-teal-300 to-green-300 drop-shadow-lg">
          Industry Rankings
        </h2>

        <div className="max-w-5xl mx-auto p-10 rounded-3xl 
      bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl 
      hover:shadow-[0_0_40px_rgba(0,255,180,0.25)]
      transition-all duration-500">

          {/* Ranking Card Component */}
          {[
            { name: "Tech Industries Inc.", score: 95, color: "from-green-400 to-green-600", txt: "text-green-300" },
            { name: "Manufacturing Co.", score: 78, color: "from-yellow-400 to-yellow-600", txt: "text-yellow-300" },
            { name: "Energy Solutions Ltd.", score: 62, color: "from-red-400 to-red-600", txt: "text-red-300" }
          ].map((item, index) => (
            <div key={index} className="mb-10 group">

              {/* Text Row */}
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-white text-lg drop-shadow-md">
                  {item.name}
                </span>
                <span className={`${item.txt} font-semibold text-lg drop-shadow-md`}>
                  {item.score}/100
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full bg-white/10 rounded-full h-4 shadow-inner overflow-hidden">

                {/* Animated Gradient Bar */}
                <div
                  className={`h-4 rounded-full bg-gradient-to-r ${item.color}
              group-hover:scale-[1.02] transition-transform duration-500`}
                  style={{ width: `${item.score}%` }}
                ></div>

              </div>
            </div>
          ))}

          {/* Button */}
          <div className="text-center mt-12">
            <Link
              to="/login"
              className="
          px-8 py-4 rounded-full font-bold text-white
          bg-gradient-to-r from-blue-500 via-teal-500 to-green-500
          shadow-xl hover:shadow-[0_0_25px_rgba(0,255,180,0.4)]
          hover:scale-110 transition-all duration-500
        "
            >
              View Full Dashboard
            </Link>
          </div>
        </div>
      </section>


      {/* Why Climate Credits Matter */}
      <section className="relative z-10 py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-teal-300 to-green-300">
          Why Climate Credits Matter
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Climate credits create a transparent system where industries are incentivized to reduce their environmental impact. By tracking emissions and assigning scores, we empower consumers to make informed decisions and encourage companies to adopt sustainable practices.
          </p>
          <p className="text-xl text-blue-100 leading-relaxed">
            Together, we can build a greener future where economic growth and environmental responsibility go hand in hand.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-white border-opacity-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-green-300">
              Climate Credit System
            </h3>
          </div>
          <div className="flex space-x-6">
            <div className="footer-links flex gap-6">
              <Link to="/about">About</Link>
              <Link to="/how-it-works">How It Works</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(10px) translateX(-10px);
          }
          75% {
            transform: translateY(-10px) translateX(5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Homepage;