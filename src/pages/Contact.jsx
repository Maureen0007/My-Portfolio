import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Contact() {
  return (
    <section className="py-20 px-6 flex flex-col items-center bg-gradient-to-r from-blue-400 to-teal-300 h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 border border-gray-300">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-3" placeholder="Your Name" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-3" placeholder="Your Email" />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea className="mt-1 block w-full border border-gray-300 rounded-md p-3" rows="6" placeholder="Your Message"></textarea>
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-3 rounded-md w-full">Send Message</button>
      </form>
      <div className="social-icons flex gap-4 space-x-6 py-5">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-4xl">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-4xl">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-4xl">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 text-4xl">
    <FontAwesomeIcon icon={faGithub} />
  </a>
</div>

    </section>
  )
}

export default Contact