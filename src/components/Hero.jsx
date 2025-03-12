import React from 'react'

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center 
        bg-gradient-to-r from-blue-400 to-teal-300 
        text-[#F8FAFC] px-6">
      
      <h1 className="text-6xl md:text-7xl font-bold font-[Poppins]">
        Welcome! I'm Maureen Maina
      </h1>
      <p className="mt-4 text-lg md:text-2xl font-[Montserrat] max-w-2xl">
        A passionate Front-End Developer & Virtual Assistant.
      </p>
      <button className="mt-6 px-6 py-3 text-lg bg-[#EAB308] text-[#1E293B] font-semibold 
        rounded-full shadow-lg hover:bg-[#F8FAFC] hover:text-[#1E293B] transition duration-300">
        View My Work
      </button>
    </section>
  );
};

export default Hero;