"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";


const projects = [
  { id: 1,src:"/images/pokemon.png", alt: "Pokemon firebase", title: "Pokemon", detail:"A Full-Stack Firebase App with Authentication, where users can adopt and feed Pokémon using Firestore Database.", link:"https://final-pkm.web.app" },
  { id: 2,src:"/images/vstore.png", alt: "vstore", title: "V-Store",  detail:" A Full-Stack E-commerce App with Authentication, Product Management, and Secure Payments.", link: "#" },
  { id: 3,src:"/images/sonnet.png", alt: "sonnet-sounds", title: "Sonnet-Sounds", detail:" A Full-Stack AI-Based App that Generates Songs from Prompts", link:"#" },
  { id: 4, src:"/images/vstore.png", alt: "Visual Studio Code",title: "Project Four",  detail:"Fullstack firebase app",link: "#" },
];

const Projects = () => {
  return (
    <div id="project" className="m-4  md:py-4 md:px-6 mt-24">
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
            className=" p-2 max-w-[400px] md:p-4 duration-300 hover:scale-105 hover:shadow-xl bg-gray-900 rounded-xl"
          >
             <Image src={project.src} width={400} height={340} alt={project.alt} loading="lazy" className="mx-auto rounded-md border-2"/>

            <div className=" text-center text-white">
             <h1 className="font-first text-xl my-4 text-slate-200">{project.title}</h1> 
             <h3 className="text-[14px] w-[90%] md:w-[60%] mx-auto font-third text-gray-300">{project.detail}</h3>
            </div>
            <div className="flex justify-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-red-500 font-third px-4 my-4 rounded-lg flex items-center gap-2 py-1 text-white"
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
