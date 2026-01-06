// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import AboutMe from "./Sections/About/AboutMe";
// import Experience from "./Sections/Experience/Experience";
// import Skills from "./Sections/Skills/Skills";
// import Project from "./Sections/Project/Project";
// import Certificate from "./Sections/Certificate/Certificate";
// import Activity from "./Sections/Activity/Activity";
// import Contact from "./Sections/Contact/Contact";
// import Study from "./Sections/Study/Study";

// const home = () => {
//   return (
//     <div>
//       <Navbar />
//       <AboutMe />
//       <Experience />
//       <Study />
//       <Project />
//       <Skills />
//       <Certificate />
//       <Activity />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default home;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutMe from "./Sections/About/AboutMe";
import Experience from "./Sections/Experience/Experience";
import Skills from "./Sections/Skills/Skills";
import Project from "./Sections/Project/Project";
import Certificate from "./Sections/Certificate/Certificate";
import Activity from "./Sections/Activity/Activity";
import Contact from "./Sections/Contact/Contact";
import Study from "./Sections/Study/Study";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Experience />
      <Study />
      <Project />
      <Skills />
      <Certificate />
      <Activity />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
