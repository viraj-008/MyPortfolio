"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoIosRocket } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="m-4 my-24 py-4 md:px-6">
      {/* Decorative Line */}
      <div className="h-2 w-[90px] bg-gradient-to-r from-pink-400 to-blue-500 rounded-lg"></div>

      {/* Heading with Animation */}
      <motion.h1
        className="md:text-5xl text-3xl text-[#faf0e6] text-start my-2 font-bold font-italiana font-sec"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-wrap mx-auto  justify-between">
        {/* About Description */}
        <article className="md:text-[15px] md:text-xl mx-auto   text-gray-400 font-first my-4 pl-6 md:text-center  ">
          <p>
            I am a passionate <strong>MERN stack developer</strong> with expertise in
            <strong >React, Node.js, Express, and MongoDB</strong>. I have successfully built and deployed
            multiple full-stack applications, continuously improving my skills through hands-on projects.
            Additionally, I received training from 
            <span className="font-semibold  text-[#faf0e6] underline "> Hyathi Technologies </span>, which refined my expertise
            in modern web development. My focus is on building scalable, efficient, and user-friendly
            applications that solve real-world problems and drive innovation.
          </p>
        </article>

        {/* Timeline */}
        <section className="mx-auto w-full">
          {[
            {
              year: "2022 Aug - The Beginning",
              description:
                "Started my journey in web development by learning HTML, CSS, and JavaScript, gradually exploring responsive design and frontend concepts.",
            },
            {
              year: "2023 - Deep Diving",
              description:
                "Enhanced my knowledge by diving deeper into JavaScript, React, and backend technologies, working on small projects to solidify my understanding.",
            },
            {
              year: "2023 - 2024 - Building Real Projects",
              description:
                "Developed multiple full-stack applications using the MERN stack, focusing on best practices, performance optimization, and real-world use cases.",
            },
            {
              year: "2025 - Present",
              description:
                "Continuing to explore new technologies, improving coding skills, and working on advanced projects to contribute to the tech community.",
            },
          ].map((item, index) => (
            <div key={index} className="mt-4">
             <h3 className="font-first text-[#dad5db] flex items-center text-start">
  <IoIosRocket className="text-pink-400 w-6 h-6 mr-2" /> {item.year}
</h3>
              <p className="ml-7 font-third text-[#dee2e8] leading-relaxed">{item.description}</p>
            </div>
          ))}



        </section>
      </div>
    </section>
  );
};

export default About;
