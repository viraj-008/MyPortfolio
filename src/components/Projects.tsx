"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { id: 1, title: "Project One", link: "#" },
  { id: 2, title: "Project Two", link: "#" },
  { id: 3, title: "Project Three", link: "#" },
  { id: 4, title: "Project Four", link: "#" },
];

const Projects = () => {
  return (
    <div id="project" className="m-4  md:px-6 mt-24">
      {/* Gradient Line */}
      <div className="h-2 w-[90px] bg-gradient-to-r from-pink-400 to-blue-500 rounded-lg"></div>

      {/* Title Animation */}
      <motion.div
        className="font-sec font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="md:text-6xl text-4xl text-start my-2 font-italiana">
          Projects
        </h1>
      </motion.div>

      {/* Project Cards */}
      <div className="flex flex-wrap w-[80%] mx-auto mt-16 justify-between gap-y-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="h-[500px] w-[400px] duration-300 hover:scale-105 hover:shadow-xl bg-gray-900 rounded-3xl"
          >
            <div className="h-[400px] w-full flex items-center justify-center text-white">
              {project.title}
            </div>
            <div className="flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-red-700 px-4 my-4 rounded-lg flex items-center gap-2 py-1 text-white"
              >
                View Project <FaExternalLinkAlt className="text-black" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
