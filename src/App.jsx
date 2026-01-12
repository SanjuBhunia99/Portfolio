import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Footer from "./components/Footer";
import PointerFollower from "./components/PointerFollow";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/PointerFollow" element={<PointerFollower />} />
      </Routes>
    </>
  );
};

export default App;
