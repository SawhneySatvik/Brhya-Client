import React from 'react';
import Image from 'next/image'; // Ensure you are using Next.js Image component for optimized images

export default function HeroSection() {
  return (
    <>
      <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 h-[80vh] flex items-center justify-between text-gray-700">
        {/* Left Content */}
        <div className="max-w-2xl px-6 sm:px-8 lg:px-12 flex-1">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Total Logistics Solutions
          </h1>
          <p className="mt-4 text-lg">
            Delivering excellence and efficiency, ensuring your cargo is always on time.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-3 bg-yellow-300 text-black rounded-lg text-lg font-medium hover:bg-yellow-500">
              Get started
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-800 rounded-lg text-lg font-medium hover:bg-gray-200">
              Learn more &rarr;
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex lg:w-1/2 h-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden ">
            <Image
              src="/assets/container-ship.png" 
              alt="Container ship"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
