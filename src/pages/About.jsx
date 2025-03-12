import React from 'react'
import ProfileImage from "../assets/profile.jpg";
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="bg-gradient-to-b from-[#211C84] to-[#4D55CC] min-h-screen flex flex-col md:flex-row items-center justify-center p-8 text-[#EAEAEA]">
      
      <div className="md:w-1/2 flex justify-center">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-4 border-[#7A73D1]"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-6xl font-bold text-[#FFFFFF]">
          About Me
        </h2>
        <p className="text-2xl text-[#B5A8D5] mt-4 leading-relaxed text-[#FFFFFF]">
          Hi, I'm <span className="font-bold text-[#7A73D1]">Maureen</span>! A passionate front-end developer 
          dedicated to crafting intuitive and visually stunning web experiences. 
          I specialize in React, JavaScript, and elegant UI design.
        </p>
        <p className="mt-4 text-[#FFFFFF]">
          When I'm not coding, I enjoy exploring new design trends, 
          experimenting with animations, and learning about AI automation.
        </p>
        <div className="mt-10">
          <Link className="bg-[#7A73D1] hover:bg-[#B5A8D5] text-[#FFFFFF] font-semibold py-4 px-9 rounded-lg shadow-md transition duration-300" to="/projects">
            View My Work
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About