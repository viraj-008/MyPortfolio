"use client";
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";

const TimeLine = () => {
  return (
    <div>
         <FaReact className="text-7xl my-4 mx-auto animate-spin-slow text-cyan-400" />
         <VerticalTimeline >
                 <VerticalTimelineElement
                   className="vertical-timeline-element--work "
                   contentStyle={{ background: "#000028", color: "gray" }}
                   contentArrowStyle={{ borderRight: "7px solid  white" }}
                   iconStyle={{ background: "black", color: "blue" }}
                   icon={<SiExpress className="text-gray-200 " />}
                 >
                   <section className=" rounded-lg ">
                     <h1 className="text-xl text-blue-400  font-first mb-4">MERN Stack Expertise</h1>
                     <p className="  text-[9px] font-third text-gray-400 leading-relaxed">
                       As a MERN stack developer, I specialize in building full-stack web aplications using
                       <strong> MongoDB, Express.js, React, and Node.js</strong>
                     </p>
                     <p className="text-lg  mt-4  text-[9px] font-third text-gray-400  leading-none">
                       My experience includes implementing <strong>RESTful APIs</strong> and <strong>GraphQL</strong> for efficient data fetching,
                       integrating authentication systems such as <strong>JWT and bcrypt</strong>, and handling complex database relationships
                       using MongoDB with Mongoose.
                     </p>
                     <p className="text-lg  mt-4  text-[9px] font-third text-gray-400 leading-none">
                       . I am also proficient in state management using <strong>Redux Toolkit</strong>, which enhances performance and scalability
                       in React applications. My projects are always optimized for speed and responsiveness, ensuring a smooth user experience.
                     </p>
                   </section>
         
                 </VerticalTimelineElement>
         
         
         
                 {/* Technologies Section */}
                 <VerticalTimelineElement
                   className="vertical-timeline-element--work"
                   contentStyle={{ background: "#000028" }}
                   contentArrowStyle={{ borderRight: "7px solid  white" }}
                   iconStyle={{ background: "black", color: "blue" }}
                   icon={<SiMongodb className="text-green-600" />}
                 >
                   {/* Experience Section */}
                   <section className=" rounded-lg shadow-md">
                     <h1 className="text-xl text-blue-500  font-bold  px-2 font-first mb-4">My Development Experience</h1>
                     <p className="text-[9px] font-third text-gray-400 leading-relaxed">
                       Over time, I have worked on several real-world projects, gaining hands-on experience in both front-end and back-end
                       development.
                     </p>
                     <p className="text-[9px] font-third text-gray-400 leading-relaxed">
                       Over time, I have gained hands-on experience in full-stack development, working with modern technologies to build
                       scalable and high-performance applications.
                     </p>
                     <p className="text-[9px] font-third text-gray-400 leading-relaxed mt-4">
                       My expertise lies in <strong>API development, database management, authentication, and real-time communication</strong>
                       . I am passionate about building AI-powered applications, optimizing user experiences, and implementing dynamic, interactive
                       features using the latest web technologies.
                     </p>
                   </section>
                 </VerticalTimelineElement>
         
                 <VerticalTimelineElement
                   className="vertical-timeline-element--work"
                   contentStyle={{ background: "#000028" }}
                   contentArrowStyle={{ borderRight: "7px solid  white" }}
                   iconStyle={{ background: "black", color: "blue" }}
                   icon={<RiNodejsLine className="text-green-700" />}
                 >
                   <section className=" rounded-lg shadow-md " >
                     <h1 className="text-xl text-blue-500  font-bold  px-2 font-first">Other Interests & Future Goals</h1>
         
                     <div className="px-2">
                       <p className="text-[9px] font-third text-gray-400 leading-relaxed mt-4">
                         I am passionate about building high-performance applications and exploring technologies that enhance user experiences.
                       </p>
                       <p className="text-[9px] font-third text-gray-400 leading-relaxed mt-4">
                         My goals include mastering <strong>Next.js</strong> for server-side rendering, improving app performance, and developing
                         real-time applications using <strong>WebSockets</strong> and <strong>Socket.IO</strong>.
                       </p>
                       <p className="text-[9px] font-third text-gray-400 leading-relaxed mt-4">
                         I strive to create dynamic and interactive applications that push the boundaries of modern web development.
                       </p>
         
                     </div>
                   </section>
         
         
                 </VerticalTimelineElement>
               </VerticalTimeline>
      
    </div>
  )
}

export default TimeLine
