// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Stars SVG */}
      <div className="absolute inset-0 opacity-20">
        <svg
          viewBox="0 0 1024 1024"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="2" fill="white" />
          <circle cx="400" cy="200" r="1.5" fill="white" />
          <circle cx="700" cy="80" r="2" fill="white" />
          <circle cx="900" cy="300" r="1.8" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to Zinc</h1>
        <p className="text-lg mb-8">A decentralized cryptocurrency for the future.</p>
        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-white text-lg shadow-lg">
          Get Started
        </button>
      </div>

      {/* Robot SVG Overlay */}
      <div className="absolute bottom-0 right-0 w-1/3 z-0 opacity-90">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <rect x="30" y="60" width="140" height="100" rx="10" fill="#4ade80" />
          <circle cx="60" cy="100" r="10" fill="#000" />
          <circle cx="140" cy="100" r="10" fill="#000" />
          <rect x="85" y="120" width="30" height="10" fill="#000" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
