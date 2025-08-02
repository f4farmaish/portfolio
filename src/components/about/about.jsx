/* eslint-disable no-unused-vars */

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center p-10 gap-10">
      
      {/* Lottie Animation */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_vnikrcia.json"
          style={{ height: '300px', width: '300px' }}
        />
      </motion.div>

      {/* About Me Content */}
      <motion.div 
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>

        <p className="text-gray-300 text-lg leading-7 mb-4">
          I’m <span className="text-white font-semibold">Farmaish Ali</span>, a Full Stack Developer passionate about building modern, responsive, and high-performance web applications.
        </p>

        <p className="text-gray-400 text-sm mb-4">
          I specialize in <span className="text-indigo-400 font-medium">React, Node.js, MongoDB</span>, and enjoy designing user-friendly, aesthetic UIs. Currently, I’m also exploring Java and .NET to enhance my backend development skillset.
        </p>

        <p className="text-gray-400 text-sm mb-6">
          My mission is to grow as a developer by contributing to real-world projects, learning continuously, and helping businesses thrive online.
        </p>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">🎓 Education</h3>
          <p className="text-sm text-gray-400">BS in Information Technology (In Progress)</p>
        </motion.div>

        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-indigo-300 mb-2">💼 Experience</h3>
          <ul className="text-sm text-gray-400 list-disc ml-4 space-y-1">
            <li>Taught Computer Science to high school students</li>
            <li>Twice appeared in ISSB (Inter Services Selection Board)</li>
            <li>Worked in Medical Billing (Invoice & Payment Production)</li>
            <li>Customer Support Representative for international clients</li>
          </ul>
        </motion.div>

        {/* Icons */}
        <motion.div 
          className="flex justify-center md:justify-start gap-6 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://github.com/f4farmaish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/f4farmaish"
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
        </motion.div>
      </motion.div>
    </div>
  );
}
