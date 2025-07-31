// src/components/Contact.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/mwkgrgzz"
          method="POST"
          className="flex flex-col gap-4 w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <input
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 ring-blue-400"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 ring-blue-400"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 ring-blue-400"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />
          <button className="bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold transition duration-200">
            Send Message
          </button>
        </form>

        {/* Contact Visual + Socials */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src="https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"
            alt="Contact GIF"
            className="w-[300px] h-[300px] object-cover rounded-lg shadow-lg mb-6"
          />

          <div className="flex gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/f4farmaish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
