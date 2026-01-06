import React from "react";
import Resume from "../../src/assets/images/resume/Resume.pdf";
import Logo from "../../public/jpg.jpg";
const notActiveClass =
  "cursor-pointer text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-2 py-1 transition-all text-base";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
const NavItems = () => (
  <>
    <button onClick={() => scrollToSection("about")} className={notActiveClass}>
      About
    </button>
    {/* <button
       onClick={() => scrollToSection("experience")}
       className={notActiveClass}
     >
       Experience
     </button> */}
    <button
      onClick={() => scrollToSection("education")}
      className={notActiveClass}
    >
      Education
    </button>
    <button
      onClick={() => scrollToSection("project")}
      className={notActiveClass}
    >
      Project
    </button>
    <button
      onClick={() => scrollToSection("skills")}
      className={notActiveClass}
    >
      Skills
    </button>
    <button
      onClick={() => scrollToSection("certificate")}
      className={notActiveClass}
    >
      Certificate
    </button>
    <button
      onClick={() => scrollToSection("activity")}
      className={notActiveClass}
    >
      Activity
    </button>
    <button
      onClick={() => scrollToSection("contact")}
      className={notActiveClass}
    >
      Contact
    </button>
    <a href={Resume} download className={`${notActiveClass} inline-block`}>
      Resume
    </a>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-[#1f0927e5] text-white shadow-sm sticky top-0 z-50 px-3">
      <div className="navbar-start">
        <img
          src={Logo}
          alt="Logo"
          onClick={() => scrollToSection("about")}
          className="h-12 w-12 rounded-full object-cover object-top cursor-pointer ml-14"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          <NavItems />
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white rounded-box mt-3 w-52 p-3 shadow"
          >
            <NavItems />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
