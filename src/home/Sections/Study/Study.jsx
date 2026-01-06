import React from "react";
import Organization from "./Organization";

const Study = () => {
  const data = [
    {
      title: "KodNest",
      role: "Java Full Stack Developer",
      date: "03/11/2025 - Present",
      side: "left",
    },
    {
      title: "Kalyani Government Engineering College",
      role: "Master of Technology in Information Technology",
      date: "22/09/2023 - 10/05/2025",
      side: "right",
    },
    {
      title: "Pailan College of Management and Technology",
      role: "Bachelor of Technology in Computer Science Engineering",
      date: "16/09/2019 - 18/09/2022",
      side: "left",
    },
    {
      title: "South Calcutta Polytechnic",
      role: "Diploma in Computer Science & Technology",
      date: "12/06/2017 - 13/06/2019",
      side: "right",
    },
  ];

  return (
    <>
      <div
        id="education"
        className="scroll-mt-20 text-2xl font-semibold underline text-white text-center mt-6 md:mt-10 mb-6 md:mb-8 p-5"
      >
        🎓 Education
      </div>
      <div className="relative max-w-5xl mx-auto space-y-3 p-2">
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-0.5 bg-slate-900 md:-translate-x-1/2"></div>

        {data.map((item, index) => {
          return (
            <div key={index} className="relative">
              <div
                className="absolute left-1 md:left-1/2 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 top-6 w-4 h-4 bg-indigo-400 border-4 border-white rounded-full z-10 shadow"
                aria-hidden="true"
              ></div>
              <Organization item={item} side={item.side} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Study;
