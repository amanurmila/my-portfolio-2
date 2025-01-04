import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { Fade, Zoom } from "react-awesome-reveal";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
    { name: "React JS", icon: <FaReact className="text-blue-400" /> },
  ];

  const backendSkills = [
    { name: "Node JS", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express JS", icon: <SiExpress className="text-gray-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <Fade direction="down" triggerOnce>
          <h2 className="text-4xl font-bold mb-10 text-center">My Skills</h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <Fade direction="left" triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">
                Frontend Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {frontendSkills.map((skill, index) => (
                  <Zoom cascade triggerOnce key={index}>
                    <div className="flex flex-col items-center bg-base-200 text-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300">
                      <div className="text-5xl mb-4">{skill.icon}</div>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </Fade>

          {/* Backend Skills */}
          <Fade direction="right" triggerOnce>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-center md:text-left">
                Backend Skills
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {backendSkills.map((skill, index) => (
                  <Zoom cascade triggerOnce key={index}>
                    <div className="flex flex-col items-center bg-base-200 text-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition duration-300">
                      <div className="text-5xl mb-4">{skill.icon}</div>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Skills;
