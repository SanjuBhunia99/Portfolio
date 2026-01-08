import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ProfileImg from "../../../assets/images/image/Sanju-Bhunia-2.jpg";
const AboutMe = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 mt-16 flex flex-col items-center text-center px-2"
    >
      <img
        src={ProfileImg}
        alt="Profile"
        className="w-40 h-40 md:w-80 md:h-80 rounded-full object-fit cover object-position top border-2 border-white mb-6"
      />
      <h1 className="text-2xl md:text-4xl font-semibold text-white">
        <span className="text-blue-400">
          <span className="inline-block wave-hand">👋</span>
          <span className="name-animation">Hello </span>
        </span>
        ___<span className="typing-dots"></span> I'm{" "}
        <span className="typing-fade-name">Sanju Bhunia</span>
      </h1>

      <p className="mt-4 text-gray-200 text-sm md:text-base max-w-xl">
        MERN Stack Developer from <span className="font-semibold">INDIA</span>
        <span className="font-semibold india-loading">INDIA</span>
      </p>

      <div className="flex gap-5 mt-6">
        <SocialIcon href="https://github.com/SanjuBhunia99">
          <FaGithub />
        </SocialIcon>

        <SocialIcon href="https://www.linkedin.com/in/sanju-bhunia99/">
          <FaLinkedin />
        </SocialIcon>

        <SocialIcon href="https://leetcode.com/u/sanjubhunia99/">
          <SiLeetcode />
        </SocialIcon>

        <SocialIcon href="https://wa.me/919775638730">
          <FaWhatsapp />
        </SocialIcon>

        <SocialIcon href="mailto:sanjubhunia93@gmail.com">
          <FaEnvelope />
        </SocialIcon>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white text-xl hover:text-blue-400 transition"
  >
    {children}
  </a>
);

export default AboutMe;
