import React, { useState } from "react";
import { FaCloudDownloadAlt, FaTimes } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white backdrop-blur-md shadow-md w-full z-10 sticky top-0">
      <div className="container mx-auto px-4 flex items-center justify-between py-3">
        {/* Logo Section */}
        <div className="relative group">
          <div className="text-xl font-bold border-4 border-gray-400 rounded-full">
            <img
              src="https://i.ibb.co.com/zSWvzz1/aman.png"
              className="w-10 h-10 rounded-full"
              alt=""
            />
          </div>
          <span className="absolute left-0 top-full mt-1 text-sm font-medium bg-purple-500 rounded-md px-2 py-1 text-center hidden group-hover:block">
            Md Amanullah
          </span>
        </div>

        {/* Links Section */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          <li className="hover:text-primary">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-primary">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-primary">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-primary">
            <a href="#projects">My Projects</a>
          </li>
          <li className="hover:text-primary">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Download Resume Button */}
        <div className="hidden md:block">
          <a
            href="/aman-cv.pdf" // Replace with the actual resume path
            download="Resume-of-Aman.pdf"
            className="btn bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center gap-2 font-semibold px-4 py-2 rounded-lg"
          >
            <FaCloudDownloadAlt /> Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost text-xl"
          >
            {isMenuOpen ? <FaTimes /> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="menu p-4 w-full bg-gray-400 text-lg">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="/aman-cv.pdf" // Replace with the actual resume path
                download="Resume-of-Aman.pdf"
                className="btn bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex items-center gap-2 font-semibold px-4 py-2 rounded-lg mt-4"
              >
                <FaCloudDownloadAlt /> Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
