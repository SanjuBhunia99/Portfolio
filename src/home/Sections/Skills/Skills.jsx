import { useState } from "react";
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiOracle,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiEclipse } from "react-icons/di";
import { FaBootstrap, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";

const skillsData = [
  { name: "Java", icon: FaJava, color: "text-yellow-400", category: "" },
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "text-orange-500",
    category: "design",
  },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500", category: "design" },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "text-sky-400",
    category: "design",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    color: "text-blue-500",
    category: "design",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    category: "web",
  },
  { name: "React", icon: SiReact, color: "text-cyan-400", category: "web" },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    category: "web",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
    category: "web",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
    category: "database",
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "text-blue-300",
    category: "database",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-300",
    category: "database",
  },
  {
    name: "Visual Studio Code",
    icon: VscVscode,
    color: "text-blue-300",
    category: "tools",
  },
  {
    name: "Eclipse",
    icon: DiEclipse,
    color: "text-blue-300",
    category: "tools",
  },
  { name: "Oracle", icon: SiOracle, color: "text-blue-300", category: "tools" },
];

const Skills = () => {
  const [active, setActive] = useState("all");

  const filteredSkills =
    active === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === active);

  const filterBtn = (id, label, icon) => (
    <button
      onClick={() => setActive(id)}
      className={`px-5 py-2 rounded-full text-sm font-medium transition
        ${
          active === id
            ? "bg-green-200 text-green-900 shadow-[0_0_15px_rgba(198,246,213,0.8)]"
            : "text-gray-400 hover:text-white"
        }`}
    >
      {icon} {label}
    </button>
  );

  return (
    <section
      id="skills"
      className="scroll-mt-20 text-white text-center mb-10 px-3 sm:px-6"
    >
      <div className="text-xl sm:text-2xl underline font-semibold mb-6 ">
        🛠️ Skills
      </div>
      <div className="flex justify-center text-white gap-6 mb-12 flex-wrap p-4">
        {filterBtn("all", "All", "⚡")}
        {filterBtn("web", "Web Development", "💻")}
        {filterBtn("design", "Web Design", "🎨")}
        {filterBtn("database", "Database", "🗄️")}
        {filterBtn("tools", "Tools", "🛠️")}
      </div>
      <div
        className="max-w-3xl mx-auto max-h-82.5 overflow-y-auto pr-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div
          className={`grid gap-4 sm:gap-6
            ${
              active === "all"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2"
            }`}
        >
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 border border-gray-300 rounded-lg px-6 py-4
                            hover:-translate-y-1
                          hover:shadow-[0_0_18px_rgba(255,255,255,0.18)]
                           transition duration-300"
              >
                <Icon className={`text-2xl ${skill.color}`} />
                <span className="text-base font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
