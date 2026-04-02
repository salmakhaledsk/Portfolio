import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact, FaGithub, FaSass, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFirebase, SiNextdotjs, SiMaterialdesign } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "SASS", icon: <FaSass className="text-pink-400 text-2xl" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Angular", icon: <FaAngular className="text-red-600 text-2xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-2xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500 text-2xl" /> },
   { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "Material UI", icon: <SiMaterialdesign className="text-blue-300 text-2xl" /> },
  { name: "Tailwind", icon: <SiMaterialdesign className="text-blue-300 text-2xl" /> },
  { name: "Node.js (Basics)", icon: <SiNextdotjs className="text-green-400 text-2xl" /> },
  { name: "Express.js (Basics)", icon: <MdApi className="text-gray-300 text-2xl" /> },
  { name: "MongoDB (Basics)", icon: <SiFirebase className="text-green-500 text-2xl" /> },
  { name: "Git", icon: <FaGithub className="text-orange-400 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300 text-2xl" /> },
  { name: "Postman", icon: <MdApi className="text-orange-500 text-2xl" /> },
  { name: "Figma", icon: <SiTailwindcss className="text-pink-400 text-2xl" /> },
];

const Aboutme = () => {
  return (
<section id="about" className="bg-gray-900 text-gray-300 min-h-screen px-6 md:px-20 flex flex-col justify-start">


<motion.div
  className="max-w-3xl text-left space-y-6 mt-10"
  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }} 
>
  <h1 className="text-3xl md:text-6xl font-extrabold text-white">
    I'm <span className="text-indigo-400 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">Salma Khaled</span>
  </h1>

  <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
    Frontend Developer
  </h2>

  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
    Passionate Front-End Developer skilled in <span className="text-indigo-400 font-semibold">Angular</span>, <span className="text-cyan-400 font-semibold">React</span>, 
    and web technologies including HTML, CSS, JavaScript, and TypeScript. I specialize in building responsive, user-friendly web applications with clean, efficient code and dynamic interfaces. With experience in Material-UI, I strive to deliver seamless user experiences while continuously learning and growing in the field of web development.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-start">
    <a
      href="/public/CV/Salma-Khaled.pdf"
      download
      className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition"
    >
      Download CV
    </a>
    <a
      href="#contact"
      className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition"
    >
      Contact Me
    </a>
  </div>
</motion.div>



<section  className="py-16 bg-gray-900 text-white">
  <div className="max-w-5xl mx-auto px-6">
    <motion.div

  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2 }} 
>

        <h2  className="text-4xl font-extrabold text-center mb-12"> 
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
            Education
          </span>
    </h2>


    <div className="grid md:grid-cols-2 gap-8">
      
 <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <p className="text-sm text-indigo-400 font-medium mb-2">
         Aug-2020-July2024
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">
          Bachelor’s degree in computer science and information systems
        </h3>
        <p className="text-gray-300">
          
          Faculty of Computers and Information, Sadat Academy  Department:<span className="text-indigo-300 font-semibold"> Computer Science</span>
        </p>
      </div>

      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
        <p className="text-sm text-indigo-400 font-medium mb-2">
          Dec 2024 – June 2025
        </p>
        <h3 className="text-xl font-semibold mb-2 text-white">
          Information Technology Institute (ITI), Sohag Branch
        </h3>
        <p className="text-gray-300">
          
          Intensive Code Camp – <span className="text-indigo-300 font-semibold">Front-End and Cross-Platform Mobile Development</span>
        </p>
      </div>


     
    </div>
</motion.div>
  </div>
  
</section>


    <motion.div

  initial={{ opacity: 0, y: 50 }}          
  whileInView={{ opacity: 1, y: 0 }}      
  viewport={{ once: true, amount: 0.2 }}  
  transition={{ duration: 0.8, delay: .2}} 
>
<div id='skills' className="max-w-7xl pt-8 px-4">
  <h2 className="text-4xl font-extrabold text-center mb-12">
    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
      Skills
    </span>
  </h2>

  <p className="mb-10 text-gray-400 text-center">
    A focused stack for building fast, accessible, pixel–perfect interfaces.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
    {skills.map((skill, i) => (
      <div
        key={i}
        className="bg-gray-800 p-5 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-full flex items-center gap-3"
      >
        {skill.icon}
        <span className="text-white font-medium">{skill.name}</span>
      </div>
    ))}
  </div>
</div>
</motion.div>
    </section>
  );
};

export default Aboutme;
