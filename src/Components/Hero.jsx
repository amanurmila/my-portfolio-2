// About.js
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaStreetView,
  FaEye,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt"; // Install with `npm install react-parallax-tilt`
import "../App.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl text-center md:text-left animate-fade-in my-2">
            Frontend Web Developer
          </h3>
          <p className="text-lg mb-6 leading-relaxed">
            I am a passionate frontend web developer with a love for creating
            stunning and functional websites. With expertise in modern
            technologies and a creative mindset, I bring ideas to life through
            clean and efficient code.
          </p>
          <div className="flex justify-center items-center md:justify-start gap-4 mt-4 animate-fade-in">
            <a
              href="https://www.facebook.com/profile.php?id=100017794027989"
              target="_blank"
              className="hover:text-blue-300 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/AmanUrmi"
              target="_blank"
              className="hover:text-purple-400 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/amanullah1118/"
              target="_blank"
              className="hover:text-pink-400 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/amanurmi/"
              target="_blank"
              className="hover:text-blue-600 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/amanurmila"
              target="_blank"
              className="hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://drive.google.com/drive/u/0/folders/1pHmHTyxBVJn4uFaIV2mIAN3NaXKaQW81"
              target="_blank"
              className="hover:text-black text-white flex justify-center items-center gap-1 btn btn-sm bg-gradient-to-tr text-sm from-indigo-500 via-purple-500 to-pink-500 from"
            >
              <FaEye />
              Resume
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Tilt className="tilt-card shadow-xl rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72">
            <img
              src="https://i.ibb.co.com/zSWvzz1/aman.png"
              alt="About Me"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Hero;
