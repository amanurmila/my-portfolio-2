import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are a forward-thinking company committed to delivering quality
              service and customer satisfaction. Our team works tirelessly to
              create exceptional experiences for you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline">
                  My Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <ul className="text-sm">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-lg" />
                <a
                  href="mailto:muhammadamanullah6001@gmail.com"
                  className="hover:underline"
                >
                  muhammadamanullah6001@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-lg" />
                <a href="tel:+8801625842642" className="hover:underline">
                  +8801625842642
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-6 text-2xl">
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
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
