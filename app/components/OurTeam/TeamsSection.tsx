import React from "react";

const teamMembers = [
  {
    name: "Harpinder Singh",
    title: "Consultant, CHA Signatory, and F card holder",
    description:
      "Experienced Director with a demonstrated history of working in the logistics and supply chain industry. Skilled in English as a Second Language (ESL), Sales Management, Accounts Management, Team Leadership, and Logistics Management. Strong professional with a Bachelor's degree focused in Business/Commerce, General from Delhi University.",
    image: "/assets/HarpinderSingh.png", 
    links: {
      linkedin: "https://www.linkedin.com/in/harpinder-singh-9b67a7118/",
    },
  },
  {
    name: "Shanker Mohan",
    title: "Business Development and Supply Chain",
    description:
      "Experienced professional with expertise in Project management, Business development and market expansion. Over 20 years of experience in various countries. Forte in Global Account Management, Trade Lane management, Project Management, Change Management, Competition Analysis and Procurement.",
    image: "/assets/ShankerMohan.png", 
    links: {
      linkedin: "https://www.linkedin.com/in/shankar-mohan-s-50187116/",
    },
  },
];

export default function TeamsSection() {
  return (
    <section className="bg-white border-t border-yellow-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Our team</h2>
          <p className="mt-4 text-lg text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center lg:text-left bg-yellow-50 p-6 rounded-lg shadow-sm rounded-lg"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-lg object-cover mb-6"
              />

              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
              <p className="mt-4 text-sm text-gray-600">{member.description}</p>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4">
                <a href={member.links.linkedin} aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900">
                  <i className="fab fa-linkedin"></i> {/* Replace with actual icons */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
