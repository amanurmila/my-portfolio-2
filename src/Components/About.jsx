import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "../App.css";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title with Animation */}
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          About Me
        </motion.h2>

        {/* Paragraphs with Sequential Animation */}
        <div className="space-y-6">
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My journey into web development started with curiosity and grew into
            a passion. Initially, I faced numerous challenges, from
            understanding complex concepts to debugging frustrating errors.
            However, perseverance and a love for learning kept me going. Today,
            I take pride in building responsive, user-friendly applications that
            solve real-world problems.
          </motion.p>

          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Beyond coding, I have a deep passion for exploring new technologies,
            creative writing, and I like sports. These hobbies inspire my
            creativity and keep me motivated to bring fresh ideas into my work.
            Web development is not just a profession for me—it’s a way to
            express my ideas and make a positive impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
