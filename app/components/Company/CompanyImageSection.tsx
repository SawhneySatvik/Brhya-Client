'use client';

import React from "react";
import Image from "next/image";

const CompanyImageSection = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src="/assets/company-team.png" // Replace with your image path
            alt="Company team enjoying outdoor"
            width={1920}
            height={1080}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyImageSection;
