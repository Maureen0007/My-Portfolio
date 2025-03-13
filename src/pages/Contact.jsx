import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mjkyvdvn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="py-20 px-6 flex flex-col items-center  bg-gradient-to-b from-[#211C84] to-[#4D55CC] h-screen">
      <h2 className="text-5xl font-bold text-center mb-8 text-[#FFFFFF]">Contact Me</h2>
      {submitted ? (
        <p className="text-green-600">Thank you! Your message has been sent.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-300">
          <label className="block mb-4">
            <span className="text-gray-700">Name</span>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-3" placeholder="Your Name" required />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-3" placeholder="Your Email" required />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-3" rows="6" placeholder="Your Message" required></textarea>
          </label>
          <button type="submit" className="bg-blue-600 text-white px-4 py-3 rounded-md w-full">Send Message</button>
        </form>
      )}
      <div className="social-icons flex gap-4 space-x-6 py-5">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] text-4xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Maureen0007" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] text-4xl">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" className="text-[#FFFFFF] text-4xl">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className="text-[#FFFFFF] text-4xl">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
