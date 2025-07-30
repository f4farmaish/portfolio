/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ChatGPT Image Jul 27, 2025, 03_50_43 PM.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-black text-white px-6 py-4 shadow-lg fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-semibold">
          <Link className="hover:text-yellow-400 transition-all" to="/">Home</Link>
          <Link className="hover:text-yellow-400 transition-all" to="/about">About</Link>
          <Link className="hover:text-yellow-400 transition-all" to="/projects">Projects</Link>
          <Link className="hover:text-yellow-400 transition-all" to="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-3xl">
          <IoReorderThreeOutline />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center gap-4 pt-4 pb-2 bg-gray-900 rounded-md mt-3"
        >
          <Link className="hover:text-yellow-400" to="/" onClick={toggleMenu}>Home</Link>
          <Link className="hover:text-yellow-400" to="/about" onClick={toggleMenu}>About</Link>
          <Link className="hover:text-yellow-400" to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link className="hover:text-yellow-400" to="/contact" onClick={toggleMenu}>Contact</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
