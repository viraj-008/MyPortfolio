"use client";
import React from "react";
import { motion } from "framer-motion";
import "@/styles/Button.css";

const Hero = () => {
  return (
    <div>
      <div
        className="absolute md:h-[480px] xl:h-[630px] 2xl:h-[500px] inset-0 flex flex-col justify-center items-center z-10"
        style={{
          backgroundImage: "url('/images/planet.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          height: "100vh",
        }}
      >
        <div className="text-center absolute top-[130px]">
          {/* SEO-friendly H1 tag */}
          <motion.h1
            className="text-[16px] md:mt-4 bg-gradient-to-t from-violet-300 to-gray-700 font-third bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MERN Full Stack Developer & <br />
            Next.js
          </motion.h1>

          {/* SEO-friendly paragraph */}
          <p className="font-third text-[12px] text-start opacity-25 px-2 text-gray-100">
            Hey, I am
          </p>

          {/* SEO-friendly Name in H1 */}
          <motion.h1
            className="text-4xl font-first opacity-45 px-6 rounded-lg bg-gradient-to-t from-gray-950 to-white bg-clip-text text-transparent md:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Vivek Kumar
          </motion.h1>

          {/* Call-to-action button */}
          <button
            className="button1 mx-auto font-first md:px-6 px-4 opacity-40 py-1 mt-4 text-[10px] md:text-[16px]"
            aria-label="View Viraj Shekhar's Resume"
          >
            See My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
