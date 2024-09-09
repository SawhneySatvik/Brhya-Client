import React from "react";
import {
  TruckIcon,
  PaperAirplaneIcon,
  CurrencyRupeeIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-yellow-500" />,
    title: "Trusted Expertise",
    description: "Years of proven experience in logistics and supply chain solutions.",
  },
  {
    icon: <ChatBubbleLeftEllipsisIcon className="h-12 w-12 text-yellow-500" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your logistics needs.",
  },
  {
    icon: <UserGroupIcon className="h-12 w-12 text-yellow-500" />,
    title: "Dedicated Team",
    description: "Our passionate team ensures every cargo is handled with care.",
  },
];

const tools = [
  {
    icon: <PaperAirplaneIcon className="h-12 w-12 text-gray-700" />,
    title: "Air Freight",
    description: "Efficient air cargo services for timely domestic and international delivery.",
  },
  {
    icon: <CurrencyRupeeIcon className="h-12 w-12 text-gray-700" />,
    title: "Sea Freight",
    description: "Reliable management of container shipping and global sea logistics.",
  },
  {
    icon: <TruckIcon className="h-12 w-12 text-gray-700" />,
    title: "Inland Transportation",
    description: "Road and rail logistics for industrial and large-scale projects.",
  },
  {
    icon: <ShieldCheckIcon className="h-12 w-12 text-gray-700" />,
    title: "Clearance Services",
    description: "Simplified customs and compliance for seamless trade operations.",
  },
  {
    icon: <BuildingOfficeIcon className="h-12 w-12 text-gray-700" />,
    title: "Supply Chain Services",
    description: "Optimized procurement and vendor management for smooth operations.",
  },
  {
    icon: <GlobeAltIcon className="h-12 w-12 text-gray-700" />,
    title: "Specialized Logistics",
    description: "Tailored solutions for heavy equipment and project cargo logistics.",
  },
];



const ServicesAndToolsSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-12 text-center">Why choose us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              <a href="#" className="mt-4 text-yellow-500 font-semibold hover:underline text-sm">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-yellow-500 my-12"></div>

      {/* Tools Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-12 text-center">
          What do we offer?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{tool.icon}</div>
              <h3 className="text-lg font-bold text-gray-800">{tool.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{tool.description}</p>
              <a href="#" className="mt-4 text-yellow-500 font-semibold hover:underline text-sm">
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAndToolsSection;
