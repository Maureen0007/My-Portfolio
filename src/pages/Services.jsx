import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: "Web Development", description: "Building responsive and modern websites.", details: "I specialize in React, JavaScript, and Tailwind CSS to create fast, scalable, and visually appealing websites." },
    { title: "UI/UX Design", description: "Creating user-friendly and visually appealing designs.", details: "I focus on crafting intuitive user experiences with Figma, Adobe XD, and modern design principles." },
    { title: "SEO Optimization", description: "Improving website rankings on search engines.", details: "Optimizing content for search engines using keyword research, metadata optimization, and performance analysis." },
    { title: "AI Automation", description: "Automating tasks using AI and machine learning.", details: "Developing AI-powered automation solutions for repetitive tasks, chatbots, and data processing." }
  ];

  return (
    <section className="py-20 px-6 flex flex-col items-center min-h-screen h-screen overflow-hidden bg-gradient-to-b from-[#211C84] to-[#4D55CC]">
      <h2 className="text-5xl font-bold text-center mb-8 text-[#FFFFFF] underline">My Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl place-items-center">
        {services.map((service, index) => (
          <button
            key={index}
            onClick={() => setSelectedService(service)}
            className="p-8 bg-[#7A73D1] shadow-lg rounded-xl flex flex-col items-center text-center w-full max-w-sm border border-[#B5A8D5] text-[#FFFFFF] transition-all duration-300 transform hover:scale-105 hover:bg-[#B5A8D5] hover:text-[#211C84]"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-[#EAEAEA]">{service.description}</p>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#211C84]">{selectedService.title}</h2>
            <p className="text-gray-700">{selectedService.details}</p>
            <button
              onClick={() => setSelectedService(null)}
              className="mt-6 bg-[#7A73D1] hover:bg-[#B5A8D5] text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
