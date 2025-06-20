import React from "react";
import NetworkSecurityGlobe from "./NetworkSecurityGlobe";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6">
      <div className="max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Master <span className="text-cyan-400">Cybersecurity</span>
          <br />
          with Real-World Courses
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Learn how to defend systems, find vulnerabilities, and build a safer
          digital future.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg">
            Get Started
          </button>
          <button className="border border-cyan-500 text-cyan-400 py-3 px-6 rounded-lg">
            View Courses
          </button>
        </div>
      </div>

      <div className="hidden md:block z-10">
        <NetworkSecurityGlobe/>
      </div>
    </section>
  );
};

export default HeroSection;
