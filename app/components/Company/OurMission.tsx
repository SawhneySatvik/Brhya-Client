'use client';

import React from "react";

const OurMission = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Mission Statement */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            At Bryha Logistics, our mission is to redefine the logistics landscape by delivering innovative, efficient, and sustainable solutions that empower businesses to thrive globally. We aim to bridge the gap between businesses and logistics through a commitment to excellence and reliability.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            With a focus on seamless connectivity and customer satisfaction, we strive to simplify complex supply chains, enhance operational efficiency, and provide unparalleled value to our partners.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="flex flex-col justify-center gap-8">
          <div className="text-center lg:text-left">
            <h3 className="text-5xl font-bold text-gray-900">$440,000</h3>
            <p className="text-gray-600 mt-2">Transactions handled every 24 hours</p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-5xl font-bold text-gray-900">$119 million</h3>
            <p className="text-gray-600 mt-2">Assets under management globally</p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-5xl font-bold text-gray-900">46+</h3>
            <p className="text-gray-600 mt-2">New companies onboarded annually</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
