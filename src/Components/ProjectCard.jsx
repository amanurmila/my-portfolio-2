import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { title, image, description, id } = project;

  return (
    <motion.div
      className="card card-compact bg-white shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <figure className="overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-indigo-600 text-2xl font-bold">
          {title}
        </h2>
        <p className="text-gray-600">{description.slice(0, 60)}...</p>
        <div className="card-actions justify-end">
          <Link
            to={`/project/${id}`}
            className="btn bg-gradient-to-bl text-white from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
