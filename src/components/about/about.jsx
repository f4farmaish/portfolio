// src/components/AboutMe.jsx
import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-10 gap-10">
      
      {/* Lottie Animation */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_vnikrcia.json" // Tech Lottie
          style={{ height: '300px', width: '300px' }}
        />
      </div>

      {/* About Me Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>

        <p className="text-gray-300 text-lg leading-7 mb-4">
          I’m <span className="text-white font-semibold">Farmaish Ali</span>, a Full Stack Developer passionate about building modern, responsive, and high-performance web applications.
        </p>

        <p className="text-gray-400 text-sm mb-4">
          I work mainly with <span className="text-indigo-400 font-medium">React, Node.js, MongoDB</span> and love crafting UI/UX that feels smooth and engaging. I'm currently diving deeper into backend tools like Java and .NET to expand my capabilities and align with global standards.
        </p>

        <p className="text-gray-400 text-sm mb-6">
          My mission is to grow as a developer by contributing to real-world projects, learning continuously, and helping businesses thrive online.
        </p>

        {/* Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:farmaishalifaf@gmail.com"
            className="text-gray-300 hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}
