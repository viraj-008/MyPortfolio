"use client";
import React from "react";
import Image from "next/image";
import { SiMinds } from "react-icons/si";
import { FaTools } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SkillAndTools = () => {
  const skills = [
    { src: "/images/html.png", alt: "HTML", name:"HTML" },
    { src: "/images/css.png", alt: "CSS" , name:"CSS"  },
    { src: "/images/js.png", alt: "JavaScript", name:"JavaScript"  },
    { src: "/images/ts.png", alt: "TypeScript" , name:"TypeScript" },
    { src: "/images/react.png", alt: "React" , name:"React" },
    { src: "/images/ex.png", alt: "Express.js" , name:"Express.js" },
    { src: "/images/Mong.png", alt: "MongoDB" , name:"MongoDB" },
    { src: "/images/mongoose.png", alt: "Mongoose" , name:"Mongoose" },
    { src: "/images/jwt.png", alt: "JWT Authentication" , name:"JWT Authentication" },
    { src: "/images/tail.png", alt: "Tailwind CSS" , name:"Tailwind CSS" },
    { src: "/images/boot.png", alt: "Bootstrap" , name:"Bootstrap" },
    { src: "/images/Firebase.png", alt: "Firebase", name:"Firebase"  },
    { src: "/images/git.png", alt: "Git" ,name:"Git" },
    { src: "/images/gg.png", alt: "Google Cloud", name:"GitHub"  },
  ];

  const tools = [
    { src: "/images/vs.png", alt: "Visual Studio Code" },
    { src: "/images/Slack.png", alt: "Slack" },
    { src: "/images/Postman.png", alt: "Postman" },
    { src: "/images/basecamp.png", alt: "Basecamp" },
    { src: "/images/jira.png", alt: "Jira" },
  ];

  return (
    <div className="text-center mt-12 rounded-lg">


     
      <div className="relative flex items-center justify-center w-32 my-6 h-12 mx-auto mt-10"> 
  <div className="absolute w-full h-2  bg-gradient-to-b opacity-45 from-purple-900  to-black skew-x-[-40deg]"></div>
  <h2 className="relative z-10 mb-4 flex text-gray-200 fontt-bold font-bold tracking-wider font-first">
  <SiMinds className="text-yellow-500   mr-2 text-xl" aria-label="Skills Icon" />  S k i l l s
  </h2>
</div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={6}
        loop={true}
        speed={1000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="w-[80%] flex items-center rounded-full p-4"
      >
        {skills.map(({ src, alt, name}, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Image src={src} width={52} height={52} alt={alt} loading="lazy" className="mx-auto"/>
            <h2 className="text-center font-sec text-[10px]">{name}</h2>
          </SwiperSlide>
        ))}
      </Swiper>

   


  <h2 className="text-center   mb-4 mt-12 text-gray-400   font-third">
  T O O L S   & S O F T W A R E S <FaTools className="mx-auto border border-gray-600 bg-yellow-500 rounded-full text-gray-900"/>
  </h2>

      <div className="flex justify-evenly items-center flex-wrap gap-2 w-[280px] md:w-[420px] mx-auto mt-3 mb-28">
        {tools.map(({ src, alt }, index) => (
          <Image key={index} src={src} alt={alt} width={20} height={20} loading="lazy" className="object-contain" />
        ))}
      </div>
    </div>
  );
};

export default SkillAndTools;
