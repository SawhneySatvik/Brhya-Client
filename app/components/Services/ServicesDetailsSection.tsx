import React from "react";

const services = [
  {
    title: "Air Freight",
    description: `
      We provide seamless air cargo services for domestic and international shipments. 
      Optimized routing and real-time tracking ensure speed and reliability. Whether you're 
      transporting perishable goods or high-value items, we guarantee the highest standards 
      of efficiency and safety.`,
    image: "/assets/air-freight.png", // Replace with your image path
  },
  {
    title: "Sea Freight",
    description: `
      Cost-efficient solutions for global sea cargo transportation. From container shipping 
      to bulk cargo, we ensure smooth transit across international waters with flexible 
      schedules. Our sea freight services are designed to minimize costs and maximize 
      reliability.`,
    image: "/assets/sea-freight.png", // Replace with your image path
  },
  {
    title: "Inland Transportation",
    description: `
      Our road and rail freight solutions are ideal for large-scale projects. Reliable coordination 
      ensures timely delivery of industrial goods and raw materials across the nation. With a strong 
      network and experienced team, we meet your unique logistics requirements.`,
    image: "/assets/inland-transportation.png", // Replace with your image path
  },
  {
    title: "Project Cargo",
    description: `
      Specialized logistics services for oversized and heavy equipment, including hydroelectric plant 
      machinery and mining equipment. We ensure safe and efficient transportation with tailored 
      solutions for complex project cargo needs.`,
    image: "/assets/project-cargo.png", // Replace with your image path
  },
  {
    title: "Customs Clearance",
    description: `
      Simplify international trade with our customs clearance services. We offer comprehensive 
      management of documentation, regulatory compliance, and port logistics, ensuring seamless 
      cargo movement and adherence to international trade regulations.`,
    image: "/assets/customs-clearance.png", // Replace with your image path
  },
  {
    title: "Supply Chain Optimization",
    description: `
      End-to-end solutions for procurement and supply chain management. We streamline operations to 
      reduce costs and improve efficiency. Our team tailors every solution to meet your business needs, 
      ensuring smooth supply chain operations.`,
    image: "/assets/supply-chain.png", // Replace with your image path
  },
];

const ServicesDetailsSection: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } items-center gap-12 py-12`}
          >
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative aspect-w-16 aspect-h-9 w-full max-w-md">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesDetailsSection;
