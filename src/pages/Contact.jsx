import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section className="py-20 px-6 flex flex-col items-center bg-gradient-to-b from-[#211C84] to-[#4D55CC] min-h-screen">
      <h2 className="text-5xl font-bold text-center mb-8 text-[#FFFFFF]">Contact Me</h2>
      <form className="w-full max-w-md bg-[#7A73D1] shadow-lg rounded-xl p-8 border border-[#B5A8D5] text-[#FFFFFF]">
        <label className="block mb-4">
          <span className="text-[#EAEAEA]">Name</span>
          <input type="text" className="mt-1 block w-full border border-[#B5A8D5] rounded-md p-3 bg-[#FFFFFF] text-[#211C84]" placeholder="Your Name" />
        </label>
        <label className="block mb-4">
          <span className="text-[#EAEAEA]">Email</span>
          <input type="email" className="mt-1 block w-full border border-[#B5A8D5] rounded-md p-3 bg-[#FFFFFF] text-[#211C84]" placeholder="Your Email" required/>
        </label>
        <label className="block mb-4">
          <span className="text-[#EAEAEA]">Message</span>
          <textarea className="mt-1 block w-full border border-[#B5A8D5] rounded-md p-3 bg-[#FFFFFF] text-[#211C84]" rows="6" placeholder="Your Message"></textarea>
        </label>
        <button type="submit" className="bg-[#4D55CC] hover:bg-[#B5A8D5] text-[#FFFFFF] px-4 py-3 rounded-md w-full transition duration-300">Send Message</button>
      </form>
      <div className="social-icons flex gap-4 space-x-6 py-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#B5A8D5] text-4xl">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#7A73D1] text-4xl">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#211C84] text-4xl">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF] text-4xl">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
