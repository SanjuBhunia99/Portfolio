import React, { useState } from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars
import bookStore from "../../../assets/images/project/Book Store.jpg";
// import chatApp from "../../../accests/images/project/chat.jpg";
// import ecommerce from "../../../accests/images/project/ecommerce.jpg";
// import calculator from "../../../accests/images/project/calculator.jpg";
// import clock from "../../../accests/images/project/clock.jpg";
// import stopwatch from "../../../accests/images/project/stopwatch.jpg";

const projects = [
  {
    title: "Book Store App",
    desc: "MERN stack book store with admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node"],
    image: bookStore,
    live: "https://book-store-two-rust.vercel.app",
    github: "https://github.com/SanjuBhunia99/Book-Store.git",
  },
  {
    title: "Chat Application",
    desc: "Real-time chat app using Socket.io.",
    tech: ["React", "Node", "Socket.io", "MongoDB", "Express"],
    image: "ecommerce",
    live: "#",
    github: "https://github.com/SanjuBhunia99/Chatting-Application",
  },
  {
    title: "E-commerce",
    desc: "E-commerce platform frontend.",
    tech: ["JavaScript", "React", "Tailwind"],
    image: "chatApp",
    live: "#",
    github: "https://github.com/SanjuBhunia99/E-Commerce-Platfrom",
  },
  {
    title: "Calculator",
    desc: "Calculator using HTML, CSS and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "calculator",
    live: "#",
    github: "https://github.com/SanjuBhunia99/Calculator",
  },
  {
    title: "Analog Clock",
    desc: "Analog clock built using JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    // image: clock,
    live: "https://694fe8a894af8a00088e2c43--elegant-shortbread-d7f95d.netlify.app/",
    github: "https://github.com/SanjuBhunia99/Analog-clock",
  },
  {
    title: "StopWatch",
    desc: "Stopwatch application using JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    // image: stopwatch,
    live: "https://694f26f1329c8e28066fbe5a--stop-watchn.netlify.app/",
    github: "https://github.com/SanjuBhunia99/StopWatch",
  },
];

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="project"
      className="scroll-mt-15 text-white text-center mb-10 px-3 sm:px-6 p-8"
    >
      <h2 className="text-xl sm:text-2xl underline font-semibold mb-6 p-4">
        💼 Projects
      </h2>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="
                group relative rounded-xl overflow-hidden bg-black/20 backdrop-blur-md border border-black/10 hover:shadow-[0_0_22px_rgba(168,85,247,0.45)] hover:-translate-y-2 transition-all duration-300
              cursor-pointer"
            >
              <img
                src={p.image}
                // alt={p.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div
                className="
                  absolute inset-0 bg-black/70
                  opacity-0 group-hover:opacity-100
                  transition duration-300
                  flex flex-col justify-center items-center
                  text-center p-6
                "
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{p.desc}</p>

                <div className="flex gap-3">
                  <a
                    href={p.live}
                    // href="book-store-two-rust.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md bg-purple-600 hover:bg-purple-700 text-white transition cursor-pointer"
                  >
                    Live Demo
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-md border border-purple-400 text-purple-300 hover:bg-purple-500/20 transition cursor-pointer"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="p-5 ">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {p.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 4 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 text-sm tracking-widest uppercase rounded-full
          bg-linear-to-r from-blue-400 to-cyan-500
          text-white font-medium shadow-lg
          hover:scale-105 transition-all duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
