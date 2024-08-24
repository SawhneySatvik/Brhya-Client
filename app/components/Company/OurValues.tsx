'use client';

import React from "react";

const values = [
  { 
    title: "Be world-class", 
    description: "We strive to set the highest standards in every aspect of our operations, ensuring exceptional quality, efficiency, and innovation that sets us apart globally." 
  },
  { 
    title: "Share everything you know", 
    description: "Collaboration and transparency drive our success. We believe in sharing knowledge, fostering trust, and building a community where ideas thrive." 
  },
  { 
    title: "Always learning", 
    description: "Continuous improvement is at our core. We embrace curiosity and encourage growth through learning, adapting to industry changes, and pushing boundaries." 
  },
  { 
    title: "Be supportive", 
    description: "We foster an inclusive and empathetic environment, supporting our clients, partners, and team members to achieve collective success." 
  },
  { 
    title: "Take responsibility", 
    description: "We hold ourselves accountable for our actions, ensuring ethical practices, sustainability, and a commitment to delivering on our promises." 
  },
  { 
    title: "Enjoy downtime", 
    description: "We value balance and well-being, recognizing that relaxation and rejuvenation are essential for sustained creativity and productivity." 
  },
];

const OurValues = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 to-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-gray-900">Our Values</h2>
        <p className="mt-4 text-lg text-gray-700">
          At the heart of everything we do are the principles that drive us forward. These values define who we are and how we succeed.
        </p>

        {/* Values Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg hover:shadow-md border border-yellow-50 hover:border-yellow-400 transition duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
              <p className="mt-4 text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
