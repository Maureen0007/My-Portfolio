import React, { useState} from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
  <>
      
      <HashRouter>
      <Navbar />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </HashRouter>
    </>
  );
}

export default App;