import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "ITI Freelancing Hub (Client Side React)",
      description:
        "Rebuilt and redeveloped the client (React) to streamline the documentation of freelance jobs for students. The platform improves the user experience, enhances interaction between students and administrators, and helps empower students in their professional journeys.",
      image: "Images/Client.png",
      
      github: "https://github.com/salmakhaledsk/ITI_Freelancing_Hub_Client.git",
      livedemo: "https://iti-freelancing-hub.netlify.app/",
      
    },
    {
      id: 2,
      name: "ITI Freelancing Hub (Dashboard Angular)",
      description:
        "Rebuilt and redeveloped dashboard to add powerful new features to improve communication, usability, and flexibility for both students and admins",
      image: "Images/dashboard.png",
      github: "https://github.com/salmakhaledsk/ITI_Freelancing_Hub_Dashboard.git",
      livedemo: "https://iti-freelancing-hub-dashboard.vercel.app/",
    },
    {
      id: 3,
      name: "Homezmart (NativeJs)",
      description:
        "Designed and developed a fully functional e-commerce website.The platform allows users to browse categories, view product details, and manage their shopping cart",
     image: "Images/Homzmart.png",
      github: "https://github.com/salmakhaledsk/HomeZmart-Project.git",
      livedemo: "https://home-zmart-project.vercel.app/Pages/HomePage.html",
    },
     {
      id: 4,
      name: "Edutrax (React)",
      description: "Developed a react.js educational platform for easy learning, free online courses, CV creator, Interviews and apply for jobs",
      image: "Images/edu.png",
      github: "https://github.com/salmakhaledsk/Edutarx-Client.git",
      livedemo: "https://edutrax-kohl.vercel.app/",
      
    },
     {
      id: 5,
      name: "Filmy (React)",
      description:"Built a responsive React web app that integrates with a movie API to display latest films, movie details, and allow users to manage a personalized favorites list.",
      image: "Images/Aflam.png",
      github: "https://github.com/salmakhaledsk/Movies.git",
      livedemo: "https://movies-bq2c.vercel.app/%23%22/home%22#/home",
    },
    {
      id: 6,
      name: "Nas Trends (Angular)",
      description:
        "Online fashion store based in Egypt",
      image: "Images/NasTrends.png",
      github: "https://github.com/salmakhaledsk/Nas-Trends.git",
      livedemo: "https://nas-trends-iysc-cpezfx3f0-salma283990-gmailcoms-projects.vercel.app/home",
    },
       {
      id: 6,
      name: "Feane (RWD Bootstarp)",
      description:
        "Developed a responsive Fast Food Ordering Web Application, allowing users to browse meals",
      image: "Images/Feane.png",
      github: "https://github.com/salmakhaledsk/Feane-Resturant.git",
      livedemo: "https://salmakhaledsk.github.io/Feane-Resturant/",
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white" id="projects">
                  <motion.div
      
        initial={{ opacity: 0, y: 50 }}          
        whileInView={{ opacity: 1, y: 0 }}      
        viewport={{ once: true, amount: 0.2 }}  
        transition={{ duration: 0.8, delay: .2 }} 
      >
      <div className="max-w-6xl mx-auto px-6">
  
        <h2 className="text-4xl font-extrabold text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg underline decoration-indigo-400 decoration-4 underline-offset-6">
            Projects
          </span>
        </h2>

       
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
            
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
            
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-3">
           
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition text-sm"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
              
                  {project.livedemo && (
                    <a
                      href={project.livedemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-2 bg-indigo-600 rounded-lg shadow hover:bg-indigo-500 transition text-sm"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Projects;
