"use client";
import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaFileCode } from "react-icons/fa";
import { IoGitBranchSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";

const Technologies = () => {
  return (
    <div id="tech" className=" m-4 md:px-6 mt-24 ">
    <div className="h-2  w-[90px] bg-gradient-to-r from-pink-400  to-blue-500 rounded-lg"></div> {/* line  */}


    <motion.div
      className=" font-bold font-sec text-center "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h1 className="md:text-6xl  text-4xl text-start my-2 font-italiana text-[#faf0e6]">Technologies</h1>
    </motion.div>

    <div className="p-2  w-[80%] mx-auto mt-16 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 item-center justify-center  gap-y-12">

      {/* frontend */}

      <div className="duration-300 hover:scale-105 hover:shadow-xl p-8 flex flex-col w-[200px] text-center bg-blue-500 rounded-lg">
        <div className="flex justify-center text-6xl text-gray-600"><FaReact /></div>
        <h1 className="text-2xl text-black  font-bold font-first">Front-End</h1>
        <p className='p-2 rounded-lg font-semibold text-gray-700 shadow-2xl mt-2 font-third'>Experiece with React,
          Next.js,
          Redux, RTK Query
        </p>
      </div>

      {/* backend */}
      <div className="duration-300 hover:scale-105 hover:shadow-xl p-8 flex flex-col  w-[200px] text-center bg-green-400 rounded-lg">
        <div className="flex justify-center text-6xl text-gray-600"> <FaNodeJs /></div>
        <h1 className="text-2xl text-black  font-first">Backend</h1>
        <p className='p-2 rounded-lg font-semibold text-gray-700 shadow-2xl mt-2 font-third'>Experience with
          Node, Express.js,
          Prisma</p>
      </div>


      {/* dataabase  */}
      <div className="duration-300 hover:scale-105 hover:shadow-xl p-8 flex flex-col  w-[200px] text-center bg-white rounded-lg">
        <div className="flex justify-center text-6xl text-gray-600"> <FaDatabase /></div>
        <h1 className="text-2xl text-black  font-bold font-first">Database</h1>
        <p className='p-2 rounded-lg font-semibold text-gray-700 shadow-2xl mt-2 font-third'>Experience <br/> with <br/>
          MongDB 
        </p>
      </div>

      {/* languages */}
      <div className="duration-300 hover:scale-105 hover:shadow-xl p-8 flex flex-col  w-[200px] text-center bg-yellow-400 rounded-lg">
        <div className="flex justify-center text-6xl text-gray-600"> <FaFileCode /></div>
        <h1 className="text-2xl text-black  font-bold font-first">Languages</h1>
        <p className='p-2 rounded-lg font-semibold text-gray-700 shadow-2xl mt-2 font-third'>Experience with
          JavaScript, TypeScript
          </p>
      </div>

      <div className="duration-300 hover:scale-105 hover:shadow-xl p-8 flex flex-col  w-[200px] text-center bg-pink-400 rounded-lg">
        <div className="flex justify-center text-6xl text-gray-600"> <Image width={40} height={40} src="/images/ui.png" alt="UI Image" /></div>
        <h1 className="text-2xl text-black  font-bold font-first">UI/UX</h1>
        <p className='p-2 rounded-lg font-semibold text-gray-700 shadow-2xl mt-2 font-third'>Experience  with
          tools like Figma
          AdobeXD, Proto.io
        </p>

      </div>

      <div className="duration-300 hover:scale-105 hover:shadow-xl p-8 flex flex-col text-center w-[200px]  bg-purple-400 rounded-lg">
        <div className="flex justify-center text-4xl text-gray-600"><IoGitBranchSharp /></div>
        <h1 className="text-2xl text-black  font-bold font-first">Others</h1>
        <p className='p-2 rounded-lg font-semibold text-gray-700 shadow-2xl mt-2 font-third'>Experience with
          Firebase, Heroku
          Git, Docker & AWS</p>
      </div>

    </div>
  </div>
  )
}

export default Technologies
