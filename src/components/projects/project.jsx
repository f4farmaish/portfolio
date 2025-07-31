import React from "react";
import { FaShoppingCart, FaUserAlt, FaBuilding, FaCode } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

const projects = [
  {
    title: "E-Commerce Website",
    description: "Full-stack online store with product catalog, cart, and Stripe payments.",
    tech: ["MERN", "Stripe", "JWT"],
    icon: <FaShoppingCart className="text-3xl text-indigo-400" />,
    link: "https://your-ecommerce-link.com",
    lottie: "https://lottie.host/44a5056a-44ff-42ee-a8b2-44eac671c894/0cEM6btxOB.json",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio to showcase my skills and projects.",
    tech: ["React", "Tailwind", "EmailJS"],
    icon: <FaUserAlt className="text-3xl text-pink-400" />,
    link: "https://your-portfolio-link.com",
    lottie: "https://lottie.host/4ee9a57b-2fae-4f01-8e6f-f1569f3e1b49/4h1u9GBGr2.json",
  },
  {
    title: "Company Frontend",
    description: "Modern company landing page and dashboard UI.",
    tech: ["React", "Tailwind", "React Router"],
    icon: <FaBuilding className="text-3xl text-yellow-400" />,
    link: "https://your-company-frontend.com",
    lottie: "https://lottie.host/cb148ac5-e9ee-4ab1-b9a3-d227dd844e92/ohbzm30AUE.json",
  },
  {
    title: "Social Media App",
    description: "Authentication, posts, profile — built with full MERN stack.",
    tech: ["MERN", "JWT", "Multer", "Cloudinary"],
    icon: <FaCode className="text-3xl text-green-400" />,
    link: "https://your-social-media-link.com",
    lottie: "https://lottie.host/0b140ea7-eef8-422c-a3cb-63f8f3919ff7/evzboX2e7V.json",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">✨ My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                {project.icon}
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </div>

            <Player
              autoplay
              loop
              src={project.lottie}
              className="w-full h-44 rounded-md"
            />

            <p className="text-gray-300 mt-4 mb-2">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
