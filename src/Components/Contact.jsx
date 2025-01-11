import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left: Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Send Us an Email
          </h2>
          <form
            action="https://formspree.io/f/xzzzkgwe"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-600 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
                required
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-600 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                id="email"
                required
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg text-gray-600 mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Write Your Message Here"
                rows="4"
                required
                className="w-full p-3 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-bl text-white from-indigo-500 via-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right: Contact Details */}
        <motion.div
          className="flex flex-col justify-center items-center text-white"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-6 text-lg">
            <motion.a
              href="mailto:muhammadamanullah6001@gmail.com"
              className="flex items-center gap-4 hover:text-gray-300 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaEnvelope className="text-2xl" />
              <span className="break-words max-w-[200px] sm:max-w-[300px]">
                muhammadamanullah6001@gmail.com
              </span>
            </motion.a>
            <motion.a
              href="tel:+8801625842642"
              className="flex items-center gap-4 hover:text-gray-300 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaPhone className="text-2xl" />
              +8801625842642
            </motion.a>
            <motion.a
              href="https://wa.me/+8801625842642"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-gray-300 transition"
              whileHover={{ scale: 1.1 }}
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
