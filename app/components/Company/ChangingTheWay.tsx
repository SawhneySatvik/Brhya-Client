'use client';

import React from "react";

const ChangingTheWay = () => {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Revolutionizing Logistics for a Connected World
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            At Bryha Logistics, we believe in transforming the logistics industry through innovative solutions and seamless connectivity. Our mission is to provide efficient, reliable, and sustainable services that bridge the gap between businesses and their logistics needs.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <img
              className="rounded-lg  w-full object-cover"
              src="/assets/air-freight.png"
              alt="Air Freight Services"
            />
            <p className="text-sm mt-2 text-gray-600 text-center">Air Freight Solutions</p>
          </div>
          <div>
            <img
              className="rounded-lg  w-full object-cover"
              src="/assets/sea-freight.png"
              alt="Sea Freight Services"
            />
            <p className="text-sm mt-2 text-gray-600 text-center">Global Sea Freight</p>
          </div>
          <div>
            <img
              className="rounded-lg  w-full object-cover"
              src="/assets/inland-transportation.png"
              alt="Inland Transportation"
            />
            <p className="text-sm mt-2 text-gray-600 text-center">Inland Transport</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangingTheWay;
