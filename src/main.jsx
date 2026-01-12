import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { HashRouter as Router } from "react-router-dom";
import PointerFollower from "./components/PointerFollow.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <PointerFollower />
      <App />
    </Router>
  </React.StrictMode>
);
