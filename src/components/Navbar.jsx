import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#1E293B] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#EAB308]">Maureen W.</h1>
        <ul className="flex space-x-6">
        <li>
            <Link to="/" className="text-white hover:text-[#EAB308]">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-[#EAB308]">About Me</Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-[#EAB308]">Services</Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-[#EAB308]">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-[#EAB308]">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;