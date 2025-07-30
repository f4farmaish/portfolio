import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2">Farmaish Ali</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center - Social Icons */}
        <div className="flex gap-5 text-2xl">
          <a href="https://github.com/f4farmaish" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/f4farmaish" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaLinkedin />
          </a>
          <a href="mailto:farmaishalifaf@gmail.com" className="hover:text-purple-400">
            <FaEnvelope />
          </a>
          <a href="tel:+923289428437" className="hover:text-purple-400">
            <FaPhoneAlt />
          </a>
        </div>

        {/* Right - Quick Links (optional) */}
        <div className="text-sm text-center md:text-right text-gray-400">
          <p>Made with ❤️ using React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
