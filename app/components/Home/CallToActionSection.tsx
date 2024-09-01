'use client';

import React from "react";
import Link from "next/link";

const CallToActionSection = () => {
  return (
    <section className="bg-amber-50 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Make sure you choose the right expedition services for your delivery
        </h2>
        <Link
          href="/Contact"
          className="inline-block px-6 py-3 bg-yellow-300 text-black text-lg font-medium rounded-lg hover:bg-yellow-500"
        >
          Contact Us →
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
