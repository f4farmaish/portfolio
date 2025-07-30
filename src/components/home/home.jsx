import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MdMarkEmailUnread } from "react-icons/md";
import {
  FaLinkedin,
  FaGithubSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { Player } from "@lottiefiles/react-lottie-player";

export function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full bg-black text-white px-5 md:px-16 py-16 space-y-24">

      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10" data-aos="fade-up">
        <div className="flex justify-center w-full md:w-1/2">
          <DotLottieReact
            className="w-[280px] h-[280px]"
            src="https://lottie.host/a2129404-1626-4a5a-a5b4-d2b974f70e8f/wMquAunemG.lottie"
            loop
            autoplay
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl font-bold font-mono">
            Hello! I am <br />
            <span className="text-purple-500">Farmaish Ali</span>
          </h1>
          <p className="text-gray-300 text-lg">
            A passionate full-stack developer building modern, responsive web applications.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-2 rounded-xl shadow-md">
              Contact Me
            </button>
          </Link>
          <div className="flex justify-center md:justify-start space-x-5 text-3xl pt-4">
            <a href="mailto:farmaishalifaf@gmail.com" className="hover:text-red-500"><MdMarkEmailUnread /></a>
            <a href="https://linkedin.com/in/f4farmaish" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://github.com/f4farmaish" className="hover:text-white"><FaGithubSquare /></a>
            <a href="https://wa.me/923289428437" className="hover:text-green-500"><FaSquareWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="flex flex-col md:flex-row items-center gap-10" data-aos="fade-right">
        <div className="w-full md:w-1/2 flex justify-center">
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_vnikrcia.json"
            style={{ height: "300px", width: "300px" }}
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-indigo-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-7 mb-4">
            I’m <span className="text-white font-semibold">Farmaish Ali</span>, a Full Stack Developer passionate about building responsive, high-performance apps.
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Skilled in <span className="text-indigo-400 font-medium">React, Node.js,express.js, MongoDB ,nextjs ,sql,flutter,oop,dsa</span>. Exploring  Java and .NET for deeper backend development.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            My goal: contribute to real-world projects, learn continuously, and help businesses grow.
          </p>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="text-center space-y-6" data-aos="fade-left">
        <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>
        <div className="flex justify-center flex-wrap gap-10 text-5xl text-gray-300">
          <FaReact className="hover:text-cyan-400" title="React" />
          <FaNodeJs className="hover:text-green-400" title="Node.js" />
          <SiMongodb className="hover:text-green-600" title="MongoDB" />
          <SiJavascript className="hover:text-yellow-400" title="JavaScript" />
          <SiTailwindcss className="hover:text-blue-300" title="Tailwind CSS" />
          <SiNextdotjs className="hover:text-white" title="Next.js" />
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-300" data-aos="zoom-in">
        <div>
          <h3 className="text-3xl font-bold text-white">4+</h3>
          <p className="text-sm">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">1+</h3>
          <p className="text-sm">Years of self Learning</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">5+</h3>
          <p className="text-sm">Technologies Used</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">100%</h3>
          <p className="text-sm">Dedication to Code</p>
        </div>
      </div>

      {/* CONTACT */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10" data-aos="fade-up">
        <div className="w-[300px] md:w-[400px]">
          <DotLottieReact
            src="https://lottie.host/fda3f5a8-cf06-4cc9-a922-168ca81b2407/tkEJmE6C5Q.lottie"
            loop
            autoplay
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-gray-400 mb-4">Feel free to reach out through any of these platforms:</p>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://github.com/f4farmaish" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaGithub /></a>
            <a href="https://linkedin.com/in/f4farmaish" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400"><FaLinkedin /></a>
            <a href="mailto:farmaishalifaf@gmail.com" className="hover:text-purple-400"><FaEnvelope /></a>
            <a href="tel:+923289428437" className="hover:text-purple-400"><FaPhoneAlt /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
