import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative pt-3 bg-linear-to-tr from-[#280b31ea] via-[#3a1850e0] to-[#4e1e5be0] text-white mt-10 shadow-2xl">
      <div className="container mx-auto px-4 pb-8 pt-16 flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-lg font-semibold tracking-wide">
            Made with 🧡 and React
          </span>
          <span className="text-sm opacity-80">
            © {new Date().getFullYear()} Sanju Bhunia
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold mb-2 tracking-wide">
            Social Media
          </span>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.instagram.com/thesanju_bhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="group"
            >
              <div className="w-11 h-11 bg-linear-to-tr from-pink-500 to-yellow-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-pink-400/50 transition-all duration-200">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sanju-bhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="group"
            >
              <div className="w-11 h-11 bg-linear-to-tr from-blue-700 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-blue-400/50 transition-all duration-200">
                <FaLinkedin />
              </div>
            </a>
            <a
              href="https://github.com/SanjuBhunia99"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="group"
            >
              <div className="w-11 h-11 bg-linear-to-tr from-gray-800 to-gray-600 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-gray-400/50 transition-all duration-200">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://leetcode.com/u/sanjubhunia99/"
              target="_blank"
              rel="noopener noreferrer"
              title="LeetCode"
              className="group"
            >
              <div className="w-11 h-11 bg-linear-to-tr from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-yellow-300/50 transition-all duration-200">
                <SiLeetcode />
              </div>
            </a>
            <a
              href="https://x.com/SanjuBhunia99"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="group"
            >
              <div className="w-11 h-11 bg-linear-to-tr from-sky-500 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:shadow-sky-400/50 transition-all duration-200">
                <FaTwitter />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
