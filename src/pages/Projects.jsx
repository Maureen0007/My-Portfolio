import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Projects() {
    const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { title: "E-commerce Website", category: "Frontend", description: "A modern online store with React.", link: "https://github.com/Maureen0007/Aristotle.git"  },
    { title: "API Development", category: "Backend", description: "Building scalable APIs with Node.js.", link: "https://github.com/Maureen0007/SocialApp-Rest-Api" },
    { title: "AI Chatbot", category: "AI", description: "A chatbot using machine learning." },
    { title: "Portfolio Website", category: "Frontend", description: "A personal portfolio built with React.", link: "https://github.com/Maureen0007/My-Portfolio.git" }
  ];

  const categories = ["All", "Frontend", "Backend", "AI"];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-16 px-4 flex flex-col items-center min-h-screen h-full bg-gradient-to-b from-[#211C84] to-[#4D55CC]">
      <h2 className="text-5xl font-bold text-center mb-8 text-[#FFFFFF] underline">My Projects</h2>
      <div className="mb-6 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
              <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg ${selectedCategory === category ? "bg-[#7A73D1] text-white" : "bg-[#B5A8D5] text-[#211C84]"}`}>
                  {category}
              </button>
          ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-12 w-full max-w-6xl place-items-center">
          {filteredProjects.map((project, index) => (
              <div key={index} className="p-16 bg-[#7A73D1] shadow-lg rounded-xl flex flex-col items-center text-center w-full max-w-md border border-[#B5A8D5] text-[#FFFFFF] transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[#EAEAEA]">{project.description}</p>
                  <Link to={project.link} className='text-center border-2 border-[#B5A8D5] text-[#FFFFFF] px-8 py-4 my-6 rounded-lg font-semibold hover:bg-[#4D55CC] hover:text-[#FFFFFF] transition duration-300'>View project</Link>
              </div>
          ))}
      </div>
  </section>
  );
}

export default Projects;
