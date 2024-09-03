'use client';

import React, { useState } from "react";

const faqs = [
  {
    question: "What services does your company provide?",
    answer: "We offer a range of logistics solutions, including air freight, sea freight, inland transportation, customs clearance, supply chain management, and project cargo handling."
  },
  {
    question: "How can I track my shipment?",
    answer: "You can track your shipment using our online tracking system, accessible via the 'Track Shipment' section on our website. Simply enter your tracking number to view real-time updates."
  },
  {
    question: "Do you handle oversized or heavy cargo?",
    answer: "Yes, we specialize in project cargo, including oversized and heavy equipment such as machinery for hydroelectric plants, mining equipment, and construction materials."
  },
  {
    question: "What regions do you operate in?",
    answer: "We provide domestic and international logistics services, covering major regions across Asia, Europe, North America, and the Middle East."
  },
  {
    question: "What documentation is required for customs clearance?",
    answer: "For customs clearance, you typically need a commercial invoice, packing list, bill of lading or airway bill, and any applicable permits or licenses. Our team will guide you through the process to ensure compliance."
  },
];


const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-t border-gray-200 pt-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h3>
                <button
                  className="text-xl font-bold text-gray-600 focus:outline-none"
                  aria-label={activeIndex === index ? "Collapse" : "Expand"}
                >
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
