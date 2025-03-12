import React from 'react'
import ProfileImage from "../assets/profile.jpg";

function About() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-teal-300 min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-[#EAB308]"
        />
      </div>

      
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-5xl font-extrabold text-[#4B2E1E]">
          About Me
        </h2>
        <p className="text-lg text-gray-800 mt-4 leading-relaxed">
          Hi, I'm <span className="font-bold text-[#EAB308]">Maureen</span>! A passionate front-end developer 
          dedicated to crafting intuitive and visually stunning web experiences. 
          I specialize in React, JavaScript, and elegant UI design.
        </p>
        <p className="mt-4 text-gray-700">
          When I'm not coding, I enjoy exploring new design trends, 
          experimenting with animations, and learning about AI automation.
        </p>
        <button className="mt-6 bg-[#EAB308] hover:bg-[#D9A50C] text-[#4B2E1E] font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300">
          View My Work
        </button>
      </div>
    </section>
  )
}

export default About