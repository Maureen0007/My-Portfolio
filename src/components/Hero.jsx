import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#211C84] to-[#4D55CC] min-h-screen flex items-center justify-center text-center text-[#EAEAEA] p-10">
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold text-[#FFFFFF] mb-6">Welcome to My Portfolio</h1>
        <p className="text-xl text-[#B5A8D5] mb-6">
          Showcasing my expertise in Frontend Development, UI/UX Design, and Web Technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/projects"
            className="bg-[#7A73D1] text-[#FFFFFF] px-6 py-3 rounded-lg font-semibold hover:bg-[#B5A8D5] transition duration-300"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="border-2 border-[#7A73D1] text-[#7A73D1] px-6 py-3 rounded-lg font-semibold hover:bg-[#7A73D1] hover:text-[#FFFFFF] transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;