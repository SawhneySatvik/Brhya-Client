'use client';

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/images/coca-cola-logo-svgrepo-com.svg", alt: "Transistor" },
  { src: "/images/forbes-logo-svgrepo-com.svg", alt: "Reform" },
  { src: "/images/gopro-hero-logo-svgrepo-com.svg", alt: "Tuple" },
  { src: "/images/microsoft-logo-svgrepo-com.svg", alt: "SavvyCal" },
  { src: "/images/nike-3-logo-svgrepo-com.svg", alt: "Statamic" },
];

const TrustedBy = () => {
  return (
    <section className=" bg-yellow-100 px-6 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <Image
            key={index}
            src={logo.src} alt={logo.alt}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
