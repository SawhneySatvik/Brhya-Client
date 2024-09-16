import React from 'react';
import {
  TruckIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Global Logistics Network',
    description:
      'Efficient and scalable logistics solutions with a global reach, ensuring timely and cost-effective deliveries.',
    icon: GlobeAltIcon,
  },
  {
    name: 'End-to-End Supply Chain',
    description:
      'Comprehensive supply chain services from procurement to last-mile delivery, tailored to client needs.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Customs Clearance Expertise',
    description:
      'Hassle-free customs management and regulatory compliance to facilitate smooth cargo movement.',
    icon: ClipboardDocumentIcon,
  },
  {
    name: 'Specialized Project Cargo',
    description:
      'Expert handling and transportation of oversized or heavy equipment for complex projects.',
    icon: TruckIcon,
  },
];

export default function Hero() {
  return (
    <div className="bg-yellow-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-yellow-500">Why Choose Us?</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Reliable Logistics for Every Business
          </p>
          <p className="mt-6 text-lg text-gray-700">
            From air freight to specialized project logistics, our services are tailored to meet the unique needs of our clients. With a global network and decades of expertise, we ensure seamless supply chain operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
