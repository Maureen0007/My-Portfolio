import React from 'react'
import { useState } from 'react';

function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { title: "E-commerce Website", category: "Frontend", description: "A modern online store with React." },
    { title: "API Development", category: "Backend", description: "Building scalable APIs with Node.js." },
    { title: "AI Chatbot", category: "AI", description: "A chatbot using machine learning." },
    { title: "Portfolio Website", category: "Frontend", description: "A personal portfolio built with React." }
  ];

  const categories = ["All", "Frontend", "Backend", "AI"];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);


    return (
    <section className="py-20 px-6 flex flex-col items-center bg-gradient-to-r from-blue-400 to-teal-300 h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="mb-6 flex gap-4">
        {categories.map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-300"}`}>
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl place-items-center">
        {filteredProjects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center text-center w-full max-w-xs border border-gray-300 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects