'use client';

import React from "react";
import Image from "next/image"; // Next.js Image component

const data = [
  { value: "$5b+", label: "Equity value", description: "More than $5b USD in equity value created" },
  { value: "932", label: "Ventures", description: "We've built, invested in and accelerated hundreds of ventures globally" },
  { value: "81%", label: "Successful pilots", description: "We have facilitated hundreds of pilots between corporates and startups with an unmatched success rate" },
  { value: "85+", label: "Fortune 500 partners", description: "Working with us to solve big challenges" },
];

export default function IndustryKnowledgeSection() {
  return (
    <section className="bg-yellow-100 text-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h3 className="text-sm uppercase tracking-wide font-medium">Industry Knowledge</h3>
          <h1 className="text-4xl font-extrabold mt-4">
            Powering innovation across industries, globally.
          </h1>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center mb-8">
          <Image
            src="/assets/Globalization-bro.png" // Replace with your image
            alt="World map visualization"
            width={400} // Adjust width
            height={400} // Adjust height
            priority={true} // Prioritize loading
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {data.map((item, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold">{item.value}</h2>
              <h3 className="mt-2 text-lg font-medium">{item.label}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
