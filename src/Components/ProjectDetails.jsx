import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaHome } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [project, setProject] = useState(null); // Initialize as null

  useEffect(() => {
    const singleData = data.find((project) => project.id === parseInt(id));
    setProject(singleData);
  }, [data, id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <motion.p
          className="text-2xl font-bold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  return (
    <motion.div
      className="w-11/12 lg:w-9/12 my-20 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-lg shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card bg-base-100 shadow-xl overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <figure className="overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full object-cover h-96"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 mb-4">
            {project.title}
            <div className="badge badge-secondary text-lg ml-4">
              Duration: {project.duration}
            </div>
          </h2>
          <p className="text-lg text-gray-700">
            <span className="text-xl font-bold">Description:</span>{" "}
            {project.description}
          </p>
          <p className="text-lg text-gray-700 mt-4">
            <span className="text-xl font-bold">Challenges:</span>{" "}
            {project.challenges}
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-indigo-600">
              Technology Used:
            </h2>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              {project.technologies?.map((tech, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ scale: 1.1, color: "#4f46e5" }}
                  className="mb-1"
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-bl text-white from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub className="text-xl" />
              GitHub Link
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-success flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <FaExternalLinkAlt className="text-xl" />
              Live Link
            </motion.a>
            <motion.div
              className="btn btn-neutral flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/" className="flex items-center gap-2">
                <FaHome className="text-xl" />
                Go to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
