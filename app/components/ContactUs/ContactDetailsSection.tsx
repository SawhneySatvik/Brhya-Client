'use client';

import React from 'react';

const contacts = [
  {
    title: 'Collaborate',
    email: 'collaborate@example.com',
    phone: '+1 (555) 905-2345',
  },
  {
    title: 'Press',
    email: 'press@example.com',
    phone: '+1 (555) 905-3456',
  }
];

const locations = [
  {
    title: 'Los Angeles',
    address: '4556 Brendan Ferry',
    city: 'Los Angeles, CA 90210',
  },
  {
    title: 'New York',
    address: '886 Walter Street',
    city: 'New York, NY 12345',
  },
];

export default function ContactSection(){
  return (
    <section className="bg-white pt-16 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Get in Touch Section */}
      <div className="mb-12">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Get in touch</h1>
        <p className="mt-4 text-lg text-gray-600">
          Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white hover:bg-yellow-50 p-6 rounded-lg shadow-sm border border-white hover:shadow-md hover:border-yellow-500 transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">{contact.title}</h3>
              <p className="mt-2 text-blue-600 hover:underline">{contact.email}</p>
              <p className="mt-1 text-gray-700">{contact.phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Locations Section */}
      <div>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Locations</h1>
        <p className="mt-4 text-lg text-gray-600">
          Consequat sunt cillum cillum elit sint. Qui occaecat nisi in ipsum commodo.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white hover:bg-yellow-50 p-6 rounded-lg shadow-sm border border-white hover:shadow-md hover:border-yellow-500 transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">{location.title}</h3>
              <p className="mt-2 text-gray-700">{location.address}</p>
              <p className="mt-1 text-gray-700">{location.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};
