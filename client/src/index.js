import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Signup from './Signup'
import Values from './Values'
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/" exact element={<App />} />
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/Values" exact element={<Values />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
