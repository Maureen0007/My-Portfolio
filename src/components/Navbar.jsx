import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#1B1B1B] shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#B5A8D5]">Maureen Maina</h1>
        <ul className="flex space-x-6 text-[#F5F5F5]">
          <li>
            <Link
              to="/"
              className="hover:text-[#7A73D1] transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#7A73D1] transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:text-[#7A73D1] transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:text-[#7A73D1] transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#7A73D1] transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;